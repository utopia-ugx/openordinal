// @ts-nocheck
// Cloudflare Pages Function — runs on the edge, not in Astro build

export const onRequestPost = async (context: any) => {
  try {
    const { email, token } = await context.request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!token || typeof token !== "string") {
      return new Response(JSON.stringify({ error: "Missing CAPTCHA" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verify Turnstile token with Cloudflare
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: context.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return new Response(
        JSON.stringify({ error: "CAPTCHA verification failed" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    // Forward to Listmonk
    const listmonkBaseUrl = context.env.PUBLIC_LISTMONK_BASE_URL || context.env.LISTMONK_BASE_URL;
    const listUuid = context.env.PUBLIC_LISTMONK_LIST_UUID || context.env.LISTMONK_LIST_UUID;

    const listmonkRes = await fetch(
      `${listmonkBaseUrl}/api/public/subscription`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          email: email.trim(),
          l: listUuid,
        }),
      }
    );

    if (!listmonkRes.ok && listmonkRes.status >= 400) {
      return new Response(
        JSON.stringify({ error: "Subscription failed" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
