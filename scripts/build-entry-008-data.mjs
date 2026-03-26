import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const slug = "sub-saharan-africa-internet-usage-gap";
const outputDir = path.join(root, "src", "content", "data");
const jsonPath = path.join(outputDir, `${slug}.json`);
const csvPath = path.join(outputDir, `${slug}.csv`);
const svgPath = path.join(outputDir, `${slug}-chart.svg`);
const svgFrPath = path.join(outputDir, `${slug}-chart-fr.svg`);
const mapSourcePath = path.join(root, "scripts", "vendor", "ne_50m_admin_0_countries_africa.geojson");

const AFRICAN_COUNTRIES = [
  { iso3: "DZA", name: "Algeria", nameFr: "Algerie", subregion: "north", subregionFr: "Afrique du Nord" },
  { iso3: "AGO", name: "Angola", nameFr: "Angola", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "BEN", name: "Benin", nameFr: "Benin", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "BWA", name: "Botswana", nameFr: "Botswana", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "BFA", name: "Burkina Faso", nameFr: "Burkina Faso", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "BDI", name: "Burundi", nameFr: "Burundi", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "CPV", name: "Cabo Verde", nameFr: "Cap-Vert", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "CMR", name: "Cameroon", nameFr: "Cameroun", subregion: "central", subregionFr: "Afrique centrale" },
  {
    iso3: "CAF",
    name: "Central African Republic",
    nameFr: "Republique centrafricaine",
    subregion: "central",
    subregionFr: "Afrique centrale"
  },
  { iso3: "TCD", name: "Chad", nameFr: "Tchad", subregion: "central", subregionFr: "Afrique centrale" },
  { iso3: "COM", name: "Comoros", nameFr: "Comores", subregion: "east", subregionFr: "Afrique de l'Est" },
  {
    iso3: "COD",
    name: "Democratic Republic of the Congo",
    nameFr: "Republique democratique du Congo",
    subregion: "central",
    subregionFr: "Afrique centrale"
  },
  {
    iso3: "COG",
    name: "Republic of the Congo",
    nameFr: "Republique du Congo",
    subregion: "central",
    subregionFr: "Afrique centrale"
  },
  { iso3: "CIV", name: "Cote d'Ivoire", nameFr: "Cote d'Ivoire", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "DJI", name: "Djibouti", nameFr: "Djibouti", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "EGY", name: "Egypt", nameFr: "Egypte", subregion: "north", subregionFr: "Afrique du Nord" },
  {
    iso3: "GNQ",
    name: "Equatorial Guinea",
    nameFr: "Guinee equatoriale",
    subregion: "central",
    subregionFr: "Afrique centrale"
  },
  { iso3: "ERI", name: "Eritrea", nameFr: "Erythree", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "SWZ", name: "Eswatini", nameFr: "Eswatini", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "ETH", name: "Ethiopia", nameFr: "Ethiopie", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "GAB", name: "Gabon", nameFr: "Gabon", subregion: "central", subregionFr: "Afrique centrale" },
  { iso3: "GMB", name: "Gambia", nameFr: "Gambie", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "GHA", name: "Ghana", nameFr: "Ghana", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "GIN", name: "Guinea", nameFr: "Guinee", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "GNB", name: "Guinea-Bissau", nameFr: "Guinee-Bissau", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "KEN", name: "Kenya", nameFr: "Kenya", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "LSO", name: "Lesotho", nameFr: "Lesotho", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "LBR", name: "Liberia", nameFr: "Liberia", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "LBY", name: "Libya", nameFr: "Libye", subregion: "north", subregionFr: "Afrique du Nord" },
  { iso3: "MDG", name: "Madagascar", nameFr: "Madagascar", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "MWI", name: "Malawi", nameFr: "Malawi", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "MLI", name: "Mali", nameFr: "Mali", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "MRT", name: "Mauritania", nameFr: "Mauritanie", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "MUS", name: "Mauritius", nameFr: "Maurice", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "MAR", name: "Morocco", nameFr: "Maroc", subregion: "north", subregionFr: "Afrique du Nord" },
  { iso3: "MOZ", name: "Mozambique", nameFr: "Mozambique", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "NAM", name: "Namibia", nameFr: "Namibie", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "NER", name: "Niger", nameFr: "Niger", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "NGA", name: "Nigeria", nameFr: "Nigeria", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "RWA", name: "Rwanda", nameFr: "Rwanda", subregion: "east", subregionFr: "Afrique de l'Est" },
  {
    iso3: "STP",
    name: "Sao Tome and Principe",
    nameFr: "Sao Tome-et-Principe",
    subregion: "central",
    subregionFr: "Afrique centrale"
  },
  { iso3: "SEN", name: "Senegal", nameFr: "Senegal", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "SYC", name: "Seychelles", nameFr: "Seychelles", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "SLE", name: "Sierra Leone", nameFr: "Sierra Leone", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "SOM", name: "Somalia", nameFr: "Somalie", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "ZAF", name: "South Africa", nameFr: "Afrique du Sud", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "SSD", name: "South Sudan", nameFr: "Soudan du Sud", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "SDN", name: "Sudan", nameFr: "Soudan", subregion: "north", subregionFr: "Afrique du Nord" },
  { iso3: "TZA", name: "Tanzania", nameFr: "Tanzanie", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "TGO", name: "Togo", nameFr: "Togo", subregion: "west", subregionFr: "Afrique de l'Ouest" },
  { iso3: "TUN", name: "Tunisia", nameFr: "Tunisie", subregion: "north", subregionFr: "Afrique du Nord" },
  { iso3: "UGA", name: "Uganda", nameFr: "Ouganda", subregion: "east", subregionFr: "Afrique de l'Est" },
  { iso3: "ZMB", name: "Zambia", nameFr: "Zambie", subregion: "southern", subregionFr: "Afrique australe" },
  { iso3: "ZWE", name: "Zimbabwe", nameFr: "Zimbabwe", subregion: "southern", subregionFr: "Afrique australe" }
];

const NORTH_AFRICA_ISOS = new Set(["DZA", "EGY", "LBY", "MAR", "TUN"]);

const CABLE_NAME_ALIASES = new Map([
  ["cape verde", "CPV"],
  ["cabo verde", "CPV"],
  ["ivory coast", "CIV"],
  ["cote d ivoire", "CIV"],
  ["congo democratic republic of", "COD"],
  ["democratic republic of the congo", "COD"],
  ["dr congo", "COD"],
  ["d r congo", "COD"],
  ["republic of the congo", "COG"],
  ["congo republic", "COG"],
  ["congo", "COG"],
  ["gambia", "GMB"],
  ["gambia the", "GMB"],
  ["sao tome and principe", "STP"],
  ["sao tome principe", "STP"],
  ["eswatini", "SWZ"],
  ["swaziland", "SWZ"]
]);

const SOURCE_URLS = {
  worldBankCountry: "https://api.worldbank.org/v2/country/all?format=json&per_page=400",
  worldBankInternet:
    "https://api.worldbank.org/v2/country/all/indicator/IT.NET.USER.ZS?format=json&per_page=20000",
  worldBankPopulation:
    "https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&per_page=20000",
  cable: "https://bestbroadbanddeals.co.uk/mobiles/worldwide-data-pricing/",
  gsmaSomic:
    "https://www.gsma.com/somic/wp-content/uploads/2025/08/State_of_Mobile_Internet_Connectivity_2024.pdf",
  gsmaYearInReview:
    "https://www.gsma.com/about-us/regions/sub-saharan-africa/wp-content/uploads/2025/01/GSMA-Sub-Saharan-Africa-2024-Year-In-Review.pdf",
  ituFacts: "https://www.itu.int/itu-d/reports/statistics/2024/11/10/ff24-internet-use/",
  ituDashboard: "https://www.itu.int/dms_pub/itu-d/opb/ind/D-IND-ICT_MDD-2024-4-PDF-E.pdf",
  naturalEarth:
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson"
};

function normalizeCountryName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function round(value, digits = 2) {
  return Number(value.toFixed(digits));
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  if (/[",\n]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function readLocalJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function buildPriceMap(html) {
  const isoByName = new Map(
    AFRICAN_COUNTRIES.map((country) => [normalizeCountryName(country.name), country.iso3])
  );

  for (const [alias, iso3] of CABLE_NAME_ALIASES.entries()) {
    isoByName.set(normalizeCountryName(alias), iso3);
  }

  const prices = new Map();
  const rowPattern = /<tr><td>\d+<\/td><td>(.*?)<\/td><td>([0-9.]+)<\/td><\/tr>/g;

  for (const match of html.matchAll(rowPattern)) {
    const rawName = match[1].replace(/&amp;/g, "&").replace(/&#039;/g, "'").trim();
    const iso3 = isoByName.get(normalizeCountryName(rawName));
    if (!iso3) continue;
    prices.set(iso3, Number(match[2]));
  }

  return prices;
}

function rankItems(items, key, direction = "desc") {
  const sorted = [...items].sort((a, b) => {
    if (direction === "asc") return a[key] - b[key];
    return b[key] - a[key];
  });

  return new Map(sorted.map((item, index) => [item.iso3, index + 1]));
}

function summarizeList(items, key, count, direction = "desc") {
  const sorted = [...items].sort((a, b) => {
    if (direction === "asc") return a[key] - b[key];
    return b[key] - a[key];
  });

  return sorted.slice(0, count).map((item) => ({
    iso3: item.iso3,
    name: item.name,
    name_fr: item.name_fr,
    subregion: item.subregion,
    value: item[key]
  }));
}

function simpleAverage(items, key) {
  return items.reduce((sum, item) => sum + item[key], 0) / items.length;
}

function weightedAverage(items, key) {
  const totalWeight = items.reduce((sum, item) => sum + item.population_2023, 0);
  return items.reduce((sum, item) => sum + item[key] * item.population_2023, 0) / totalWeight;
}

function walkCoordinates(coordinates, callback) {
  if (typeof coordinates?.[0] === "number" && typeof coordinates?.[1] === "number") {
    callback(coordinates);
    return;
  }

  for (const child of coordinates || []) {
    walkCoordinates(child, callback);
  }
}

function createProjector(featureCollection) {
  let minLon = Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  for (const feature of featureCollection.features || []) {
    walkCoordinates(feature.geometry?.coordinates, ([longitude, latitude]) => {
      minLon = Math.min(minLon, longitude);
      maxLon = Math.max(maxLon, longitude);
      minLat = Math.min(minLat, latitude);
      maxLat = Math.max(maxLat, latitude);
    });
  }

  const width = 11.8;
  const height = 10.6;
  const centerLon = (minLon + maxLon) / 2;
  const centerLat = (minLat + maxLat) / 2;
  const scale = Math.min(width / (maxLon - minLon), height / (maxLat - minLat));

  return {
    bounds: {
      min_lon: round(minLon, 4),
      max_lon: round(maxLon, 4),
      min_lat: round(minLat, 4),
      max_lat: round(maxLat, 4)
    },
    center: {
      lon: round(centerLon, 4),
      lat: round(centerLat, 4)
    },
    scale: round(scale, 5),
    project([longitude, latitude]) {
      return [
        round((longitude - centerLon) * scale, 4),
        round((latitude - centerLat) * scale, 4)
      ];
    }
  };
}

function simplifyProjectedRing(ring, project, tolerance = 0.03) {
  const projected = [];

  for (const point of ring || []) {
    const [x, y] = project(point);
    const last = projected[projected.length - 1];
    if (!last || Math.hypot(x - last[0], y - last[1]) >= tolerance) {
      projected.push([x, y]);
    }
  }

  if (projected.length > 1) {
    const first = projected[0];
    const last = projected[projected.length - 1];
    if (Math.hypot(first[0] - last[0], first[1] - last[1]) < tolerance) {
      projected.pop();
    }
  }

  return projected.length >= 3 ? projected : [];
}

function projectRingExact(ring, project) {
  const projected = [];

  for (const point of ring || []) {
    const [x, y] = project(point);
    const last = projected[projected.length - 1];
    if (!last || last[0] !== x || last[1] !== y) {
      projected.push([x, y]);
    }
  }

  if (projected.length > 1) {
    const first = projected[0];
    const last = projected[projected.length - 1];
    if (first[0] === last[0] && first[1] === last[1]) {
      projected.pop();
    }
  }

  return projected.length >= 3 ? projected : [];
}

function polygonArea(points) {
  let sum = 0;
  for (let index = 0; index < points.length; index += 1) {
    const [x1, y1] = points[index];
    const [x2, y2] = points[(index + 1) % points.length];
    sum += x1 * y2 - x2 * y1;
  }
  return sum / 2;
}

function polygonCentroid(points) {
  const area = polygonArea(points);
  if (!area) {
    const fallback = points.reduce(
      (accumulator, [x, y]) => {
        accumulator.x += x;
        accumulator.y += y;
        return accumulator;
      },
      { x: 0, y: 0 }
    );
    return {
      x: fallback.x / points.length,
      y: fallback.y / points.length
    };
  }

  let centroidX = 0;
  let centroidY = 0;

  for (let index = 0; index < points.length; index += 1) {
    const [x1, y1] = points[index];
    const [x2, y2] = points[(index + 1) % points.length];
    const cross = x1 * y2 - x2 * y1;
    centroidX += (x1 + x2) * cross;
    centroidY += (y1 + y2) * cross;
  }

  return {
    x: centroidX / (6 * area),
    y: centroidY / (6 * area)
  };
}

function normalizeGeometryPolygons(geometry, project) {
  const polygonSets = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  const polygons = [];
  let weightedCentroidX = 0;
  let weightedCentroidY = 0;
  let weightedArea = 0;

  for (const polygon of polygonSets || []) {
    const simplifiedOuter = simplifyProjectedRing(polygon[0], project);
    const outer = simplifiedOuter.length >= 3 ? simplifiedOuter : projectRingExact(polygon[0], project);
    if (outer.length < 3) continue;

    const holes = (polygon.slice(1) || [])
      .map((ring) => {
        const simplified = simplifyProjectedRing(ring, project);
        return simplified.length >= 3 ? simplified : projectRingExact(ring, project);
      })
      .filter((ring) => ring.length >= 3);

    const area = Math.abs(polygonArea(outer));
    const centroid = polygonCentroid(outer);

    weightedCentroidX += centroid.x * area;
    weightedCentroidY += centroid.y * area;
    weightedArea += area;
    polygons.push({ outer, holes });
  }

  if (polygons.length === 0) {
    return null;
  }

  const centroid =
    weightedArea > 0
      ? { x: weightedCentroidX / weightedArea, y: weightedCentroidY / weightedArea }
      : polygonCentroid(polygons[0].outer);

  return {
    polygons,
    centroid: {
      map_x: round(centroid.x, 4),
      map_y: round(centroid.y, 4)
    }
  };
}

function buildFallbackMarkerGeometry(longitude, latitude, project) {
  const [x, y] = project([longitude, latitude]);
  const size = 0.12;
  return {
    polygons: [
      {
        outer: [
          [round(x, 4), round(y + size, 4)],
          [round(x + size, 4), round(y, 4)],
          [round(x, 4), round(y - size, 4)],
          [round(x - size, 4), round(y, 4)]
        ],
        holes: []
      }
    ],
    centroid: {
      map_x: round(x, 4),
      map_y: round(y, 4)
    },
    fallback_marker: true
  };
}

function buildSvg(data, lang = "en") {
  const ghana = data.matched_panel_summary.nigeria_ghana_comparison.ghana;
  const nigeria = data.matched_panel_summary.nigeria_ghana_comparison.nigeria;
  const itu = data.itu_africa_2024_context;
  const copy =
    lang === "fr"
      ? {
          aria: "Graphique sur l'ecart mobile en Afrique subsaharienne avec pile GSMA, contexte ITU et comparaison Ghana-Nigeria",
          stack: "Pile mobile AAS fin 2023",
          people:
            "GSMA estime aussi que 710 millions de personnes en AAS vivent dans la couverture mobile haut debit sans utiliser l'internet mobile.",
          itu: "Contexte ITU Afrique entiere (2024)",
          africaWide: "Usage internet Afrique entiere",
          urban: "Urbain",
          rural: "Rural",
          men: "Hommes",
          women: "Femmes",
          duo: "Nigeria et Ghana",
          duoNote: "Prix du 1GB presque identiques, taux d'usage 2023 tres differents.",
          ghana: "Ghana",
          nigeria: "Nigeria",
          online: "27% en ligne",
          usage: "60% ecart d'usage",
          coverage: "13% ecart de couverture"
        }
      : {
          aria: "Sub-Saharan Africa mobile internet gap chart with GSMA stack, ITU context, and Nigeria-Ghana comparison",
          stack: "SSA end-2023 mobile internet stack",
          people:
            "GSMA also reports 710 million people in SSA living within mobile-broadband coverage but not using mobile internet.",
          itu: "Africa-wide ITU context (2024)",
          africaWide: "Africa-wide internet use",
          urban: "Urban",
          rural: "Rural",
          men: "Men",
          women: "Women",
          duo: "Nigeria and Ghana",
          duoNote: "Near-identical 1GB prices, very different 2023 internet-use rates.",
          ghana: "Ghana",
          nigeria: "Nigeria",
          online: "27% online",
          usage: "60% usage gap",
          coverage: "13% coverage gap"
        };

  const barWidth = 700;
  const scale = barWidth / 100;
  const onlineWidth = data.gsma_ssa_end_2023.mobile_internet_adoption_pct * scale;
  const usageWidth = data.gsma_ssa_end_2023.usage_gap_pct * scale;
  const coverageGapWidth = data.gsma_ssa_end_2023.coverage_gap_pct * scale;

  const internetScale = 180 / 100;
  const ghanaInternetHeight = ghana.internet_use_pct_2023 * internetScale;
  const nigeriaInternetHeight = nigeria.internet_use_pct_2023 * internetScale;

  const miniBars = [
    { label: "Africa-wide internet use", value: itu.internet_use_pct, y: 248 },
    { label: "Urban", value: itu.urban_internet_use_pct, y: 286 },
    { label: "Rural", value: itu.rural_internet_use_pct, y: 324 },
    { label: "Men", value: itu.men_internet_use_pct, y: 362 },
    { label: "Women", value: itu.women_internet_use_pct, y: 400 }
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="860" height="520" viewBox="0 0 860 520" role="img" aria-label="${escapeXml(
    copy.aria
  )}">
  <rect width="100%" height="100%" fill="var(--paper)" />

  <text x="60" y="44" font-family="Geist Mono, monospace" font-size="11" fill="var(--dim)">${copy.stack}</text>
  <line x1="60" y1="64" x2="760" y2="64" stroke="var(--rule)" stroke-width="1" />

  <rect x="60" y="84" width="${onlineWidth}" height="38" fill="#1f5c3f" />
  <rect x="${60 + onlineWidth}" y="84" width="${usageWidth}" height="38" fill="#c17f4a" />
  <rect x="${60 + onlineWidth + usageWidth}" y="84" width="${coverageGapWidth}" height="38" fill="#8b2a2a" />

  <text x="${60 + onlineWidth / 2}" y="108" text-anchor="middle" font-family="Geist Mono, monospace" font-size="11" fill="#f7f6f2">${copy.online}</text>
  <text x="${60 + onlineWidth + usageWidth / 2}" y="108" text-anchor="middle" font-family="Geist Mono, monospace" font-size="11" fill="#0f0f0f">${copy.usage}</text>
  <text x="${60 + onlineWidth + usageWidth + coverageGapWidth / 2}" y="108" text-anchor="middle" font-family="Geist Mono, monospace" font-size="11" fill="#f7f6f2">${copy.coverage}</text>

  <text x="60" y="146" font-family="Geist Mono, monospace" font-size="11" fill="var(--ink)">${copy.people}</text>

  <line x1="60" y1="182" x2="760" y2="182" stroke="var(--rule)" stroke-width="1" />
  <text x="60" y="214" font-family="Geist Mono, monospace" font-size="11" fill="var(--dim)">${copy.itu}</text>

  ${miniBars
    .map((bar) => {
      const width = round(bar.value * 2.4, 1);
      const translatedLabel =
        lang === "fr"
          ? {
              "Africa-wide internet use": copy.africaWide,
              Urban: copy.urban,
              Rural: copy.rural,
              Men: copy.men,
              Women: copy.women
            }[bar.label] || bar.label
          : bar.label;
      return `<text x="60" y="${bar.y + 11}" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">${escapeXml(
        translatedLabel
      )}</text>
  <rect x="220" y="${bar.y}" width="240" height="16" fill="color-mix(in srgb, var(--dim) 18%, transparent)" />
  <rect x="220" y="${bar.y}" width="${width}" height="16" fill="#1a3a5c" />
  <text x="${220 + width + 8}" y="${bar.y + 12}" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">${bar.value}%</text>`;
    })
    .join("\n")}

  <line x1="500" y1="214" x2="500" y2="452" stroke="var(--rule)" stroke-width="1" />
  <text x="530" y="214" font-family="Geist Mono, monospace" font-size="11" fill="var(--dim)">${copy.duo}</text>
  <text x="530" y="232" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">${copy.duoNote}</text>

  <line x1="560" y1="450" x2="780" y2="450" stroke="var(--rule)" stroke-width="1" />
  <line x1="560" y1="270" x2="560" y2="450" stroke="var(--rule)" stroke-width="1" />
  <line x1="560" y1="306" x2="780" y2="306" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4 6" />
  <line x1="560" y1="342" x2="780" y2="342" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4 6" />
  <line x1="560" y1="378" x2="780" y2="378" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4 6" />
  <line x1="560" y1="414" x2="780" y2="414" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4 6" />

  <text x="548" y="454" text-anchor="end" font-family="Geist Mono, monospace" font-size="10" fill="var(--dim)">0%</text>
  <text x="548" y="418" text-anchor="end" font-family="Geist Mono, monospace" font-size="10" fill="var(--dim)">20%</text>
  <text x="548" y="382" text-anchor="end" font-family="Geist Mono, monospace" font-size="10" fill="var(--dim)">40%</text>
  <text x="548" y="346" text-anchor="end" font-family="Geist Mono, monospace" font-size="10" fill="var(--dim)">60%</text>
  <text x="548" y="310" text-anchor="end" font-family="Geist Mono, monospace" font-size="10" fill="var(--dim)">80%</text>

  <rect x="602" y="${450 - ghanaInternetHeight}" width="52" height="${ghanaInternetHeight}" fill="#c17f4a" />
  <rect x="692" y="${450 - nigeriaInternetHeight}" width="52" height="${nigeriaInternetHeight}" fill="#1a3a5c" />

  <text x="628" y="470" text-anchor="middle" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">${copy.ghana}</text>
  <text x="718" y="470" text-anchor="middle" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">${copy.nigeria}</text>
  <text x="628" y="${445 - ghanaInternetHeight}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="11" fill="var(--ink)">${ghana.internet_use_pct_2023}%</text>
  <text x="718" y="${445 - nigeriaInternetHeight}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="11" fill="var(--ink)">${nigeria.internet_use_pct_2023}%</text>

  <rect x="576" y="488" width="104" height="20" fill="rgba(193,127,74,0.12)" rx="2" />
  <rect x="666" y="488" width="104" height="20" fill="rgba(26,58,92,0.12)" rx="2" />
  <text x="628" y="502" text-anchor="middle" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">$${ghana.price_1gb_usd_2023} / 1GB</text>
  <text x="718" y="502" text-anchor="middle" font-family="Geist Mono, monospace" font-size="10" fill="var(--ink)">$${nigeria.price_1gb_usd_2023} / 1GB</text>
</svg>`;
}

async function build() {
  const [countryJson, internetJson, populationJson, cableHtml, africaGeometry] = await Promise.all([
    fetchJson(SOURCE_URLS.worldBankCountry),
    fetchJson(SOURCE_URLS.worldBankInternet),
    fetchJson(SOURCE_URLS.worldBankPopulation),
    fetchText(SOURCE_URLS.cable),
    readLocalJson(mapSourcePath)
  ]);

  const countryRows = countryJson[1];
  const internetRows = internetJson[1];
  const populationRows = populationJson[1];

  const worldBankCountryMeta = new Map(
    countryRows.filter((row) => row.id).map((row) => [row.id, row])
  );
  const africaProjector = createProjector(africaGeometry);
  const geometryByIso = new Map(
    (africaGeometry.features || [])
      .filter((feature) => feature.properties?.ISO_A3)
      .map((feature) => {
        const normalized = normalizeGeometryPolygons(feature.geometry, africaProjector.project);
        return [
          feature.properties.ISO_A3,
          normalized && {
            iso3: feature.properties.ISO_A3,
            admin: feature.properties.ADMIN,
            polygons: normalized.polygons,
            centroid: normalized.centroid
          }
        ];
      })
      .filter(([, value]) => value != null)
  );
  const internet2023 = new Map(
    internetRows
      .filter((row) => row.date === "2023" && row.value != null && row.countryiso3code)
      .map((row) => [row.countryiso3code, row.value])
  );
  const population2023 = new Map(
    populationRows
      .filter((row) => row.date === "2023" && row.value != null && row.countryiso3code)
      .map((row) => [row.countryiso3code, row.value])
  );
  const price2023 = buildPriceMap(cableHtml);

  const mergedCountries = AFRICAN_COUNTRIES.map((country) => {
    const meta = worldBankCountryMeta.get(country.iso3) || {};
    const latitude = meta.latitude ? Number(meta.latitude) : null;
    const longitude = meta.longitude ? Number(meta.longitude) : null;
    const geometry =
      geometryByIso.get(country.iso3) ||
      (latitude != null && longitude != null
        ? {
            iso3: country.iso3,
            admin: country.name,
            ...buildFallbackMarkerGeometry(longitude, latitude, africaProjector.project)
          }
        : null);
    const projected = geometry?.centroid || { map_x: null, map_y: null };

    return {
      iso3: country.iso3,
      name: country.name,
      name_fr: country.nameFr,
      subregion: country.subregion,
      subregion_fr: country.subregionFr,
      frame: NORTH_AFRICA_ISOS.has(country.iso3) ? "north_africa" : "sub_saharan_africa",
      internet_use_pct_2023: internet2023.has(country.iso3) ? round(internet2023.get(country.iso3), 4) : null,
      price_1gb_usd_2023: price2023.has(country.iso3) ? round(price2023.get(country.iso3), 2) : null,
      population_2023: population2023.has(country.iso3) ? Math.round(population2023.get(country.iso3)) : null,
      latitude,
      longitude,
      map_x: projected.map_x,
      map_y: projected.map_y,
      source_country_name_world_bank: meta.name || null,
      source_country_name_natural_earth: geometry?.admin || null,
      uses_fallback_map_marker: Boolean(geometry?.fallback_marker)
    };
  });

  const matchedCountries = mergedCountries
    .filter(
      (country) =>
        country.internet_use_pct_2023 != null &&
        country.price_1gb_usd_2023 != null &&
        country.population_2023 != null &&
        country.map_x != null &&
        country.map_y != null
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const internetRank = rankItems(matchedCountries, "internet_use_pct_2023", "desc");
  const priceRank = rankItems(matchedCountries, "price_1gb_usd_2023", "asc");

  const countries = matchedCountries.map((country) => ({
    ...country,
    internet_use_rank_2023: internetRank.get(country.iso3),
    price_rank_1gb_2023: priceRank.get(country.iso3),
    population_millions_2023: round(country.population_2023 / 1_000_000, 3)
  }));

  const ssaCountries = countries.filter((country) => country.frame === "sub_saharan_africa");
  const northAfricaCountries = countries.filter((country) => country.frame === "north_africa");

  const ghana = countries.find((country) => country.iso3 === "GHA");
  const nigeria = countries.find((country) => country.iso3 === "NGA");

  const data = {
    topic: "Sub-Saharan Africa internet usage gap",
    generated_at: new Date().toISOString().slice(0, 10),
    scope:
      "Primary frame: Sub-Saharan Africa. Country panel: 48 African sovereign states with both 2023 World Bank / ITU internet-use observations and 2023 cable.co.uk 1GB price observations, using Natural Earth admin-0 country polygons projected into scene space with centroid-based marker anchors.",
    source_urls: SOURCE_URLS,
    gsma_ssa_end_2023: {
      mobile_broadband_coverage_pct: 87,
      mobile_internet_adoption_pct: 27,
      usage_gap_pct: 60,
      coverage_gap_pct: 13,
      covered_not_using_millions: 710
    },
    itu_africa_2024_context: {
      internet_use_pct: 38,
      urban_internet_use_pct: 57,
      rural_internet_use_pct: 23,
      men_internet_use_pct: 43,
      women_internet_use_pct: 31,
      mobile_broadband_2gb_gni_pct: 4.2
    },
    price_context: {
      north_africa_avg_1gb_usd: 0.86,
      sub_saharan_africa_avg_1gb_usd: 3.31,
      note:
        "These regional price figures come from cable.co.uk's published 2023 regional averages and should be treated as an absolute-price lens, distinct from ITU and GSMA income-adjusted affordability measures."
    },
    matched_panel_summary: {
      matched_country_count: countries.length,
      sub_saharan_africa_count: ssaCountries.length,
      north_africa_count: northAfricaCountries.length,
      excluded_for_missing_internet_use_2023: mergedCountries
        .filter((country) => country.internet_use_pct_2023 == null)
        .map((country) => country.name),
      excluded_for_missing_price_2023: mergedCountries
        .filter((country) => country.price_1gb_usd_2023 == null)
        .map((country) => country.name),
      highest_internet_use: summarizeList(countries, "internet_use_pct_2023", 5, "desc"),
      lowest_internet_use: summarizeList(countries, "internet_use_pct_2023", 5, "asc"),
      highest_price_1gb: summarizeList(countries, "price_1gb_usd_2023", 5, "desc"),
      lowest_price_1gb: summarizeList(countries, "price_1gb_usd_2023", 5, "asc"),
      north_africa_simple_avg_internet_use_pct: round(simpleAverage(northAfricaCountries, "internet_use_pct_2023"), 1),
      north_africa_population_weighted_internet_use_pct: round(
        weightedAverage(northAfricaCountries, "internet_use_pct_2023"),
        1
      ),
      north_africa_simple_avg_price_1gb_usd: round(simpleAverage(northAfricaCountries, "price_1gb_usd_2023"), 2),
      sub_saharan_africa_simple_avg_internet_use_pct: round(
        simpleAverage(ssaCountries, "internet_use_pct_2023"),
        1
      ),
      sub_saharan_africa_population_weighted_internet_use_pct: round(
        weightedAverage(ssaCountries, "internet_use_pct_2023"),
        1
      ),
      sub_saharan_africa_simple_avg_price_1gb_usd: round(simpleAverage(ssaCountries, "price_1gb_usd_2023"), 2),
      nigeria_ghana_comparison: {
        nigeria: {
          internet_use_pct_2023: round(nigeria.internet_use_pct_2023, 1),
          price_1gb_usd_2023: round(nigeria.price_1gb_usd_2023, 2)
        },
        ghana: {
          internet_use_pct_2023: round(ghana.internet_use_pct_2023, 1),
          price_1gb_usd_2023: round(ghana.price_1gb_usd_2023, 2)
        },
        internet_use_gap_points: round(ghana.internet_use_pct_2023 - nigeria.internet_use_pct_2023, 1),
        price_gap_usd: round(ghana.price_1gb_usd_2023 - nigeria.price_1gb_usd_2023, 2)
      }
    },
    map_geometry: {
      source: "Natural Earth Admin 0 Countries, 1:50m",
      projection: {
        ...africaProjector.bounds,
        center_lon: africaProjector.center.lon,
        center_lat: africaProjector.center.lat,
        scale: africaProjector.scale
      },
      countries: countries.map((country) => {
        const geometry = geometryByIso.get(country.iso3);
        const fallbackGeometry =
          geometry ||
          (country.longitude != null && country.latitude != null
            ? {
                ...buildFallbackMarkerGeometry(country.longitude, country.latitude, africaProjector.project),
                admin: country.name,
                iso3: country.iso3
              }
            : null);
        return {
          iso3: country.iso3,
          polygons: fallbackGeometry?.polygons || [],
          centroid: fallbackGeometry?.centroid || { map_x: country.map_x, map_y: country.map_y },
          uses_fallback_marker: Boolean(fallbackGeometry?.fallback_marker)
        };
      })
    },
    countries
  };

  const csvHeaders = [
    "iso3",
    "name",
    "name_fr",
    "frame",
    "subregion",
    "subregion_fr",
    "internet_use_pct_2023",
    "price_1gb_usd_2023",
    "population_2023",
    "population_millions_2023",
    "latitude",
    "longitude",
    "map_x",
    "map_y",
    "internet_use_rank_2023",
    "price_rank_1gb_2023"
  ];
  const csvRows = [
    csvHeaders.join(","),
    ...countries.map((country) =>
      csvHeaders.map((header) => csvCell(country[header])).join(",")
    )
  ];

  const svg = buildSvg(data, "en");
  const svgFr = buildSvg(data, "fr");

  await fs.writeFile(jsonPath, JSON.stringify(data, null, 2));
  await fs.writeFile(csvPath, `${csvRows.join("\n")}\n`);
  await fs.writeFile(svgPath, svg);
  await fs.writeFile(svgFrPath, svgFr);

  console.log(`Wrote ${path.relative(root, jsonPath)}`);
  console.log(`Wrote ${path.relative(root, csvPath)}`);
  console.log(`Wrote ${path.relative(root, svgPath)}`);
  console.log(`Wrote ${path.relative(root, svgFrPath)}`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
