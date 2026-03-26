export const storyStepsEn = [
  {
    mode: "geography",
    num: "01 / 04",
    title: "One comparable frame.",
    body: [
      "What you are looking at is every African country where we can match a 2023 internet-use figure with a 2023 price for 1GB of mobile data. That gives us 48 countries. Six drop out because one number or the other is missing.",
    ],
    pills: [
      { value: "48", label: "matched countries" },
      { value: "6", label: "missing rows" }
    ],
    align: "left",
    hudCaption: "Region-tinted country shapes show the fixed-year 2023 matched panel.",
    legend: [
      { color: "#d28e4d", label: "West" },
      { color: "#4b7b66", label: "East" },
      { color: "#8f5a67", label: "Central" },
      { color: "#8a8850", label: "Southern" },
      { color: "#6982b5", label: "North" }
    ]
  },
  {
    mode: "internet",
    num: "02 / 04",
    title: "Use separates quickly.",
    highlightIso3s: ["MAR", "BDI"],
    body: [
      "The map now shades each country by internet use. Warmer tones mean higher use. Darker means lower. Morocco reaches 91.0%. Burundi sits at 11.1%.",
      "North Africa separates immediately. Across much of East, Central, and West Africa, the colors stay dark, a lower-use belt that persists even though most of these countries already have mobile broadband coverage."
    ],
    pills: [
      { value: "91.0%", label: "Morocco" },
      { value: "11.1%", label: "Burundi" }
    ],
    align: "right",
    hudCaption: "Country color now encodes 2023 internet use (World Bank / ITU).",
    legend: [
      { color: "#c9783f", label: "Higher use" },
      { color: "#20364f", label: "Lower use" }
    ]
  },
  {
    mode: "price",
    num: "03 / 04",
    title: "Cheap data helps. But it does not settle the story.",
    highlightIso3s: ["ZWE", "ZMB", "MWI"],
    body: [
      "The price story sits in the numbers. Zimbabwe pays $43.75 for 1GB of mobile data. Zambia pays $8.01.",
      "But look at the cheap end. Malawi pays just $0.38 for 1GB, and only 18.0% of its population uses the internet. If cheap data were enough on its own, Malawi's colors in the previous step would have been much warmer. They were not."
    ],
    pills: [
      { value: "$43.75", label: "Zimbabwe" },
      { value: "$0.38", label: "Malawi" }
    ],
    align: "left",
    hudCaption: "Map dimmed for context. 1GB price shown in card; hover a country for its price.",
    legend: [
      { color: "#33404d", label: "Countries dimmed for context" }
    ]
  },
  {
    mode: "ghana-nigeria",
    num: "04 / 04",
    title: "Near-identical price, very different use.",
    highlightIso3s: ["GHA", "NGA"],
    body: [
      "Nigeria and Ghana pay almost the same price for 1GB: $0.39 and $0.40. One cent apart. But Ghana's internet-use rate in 2023 is 69.9%. Nigeria's is 39.2%.",
      "That is a 30.7-point gap in internet use at near-identical price. This is the cleanest contrast in the panel, and it points away from a price-only explanation. Whatever else is keeping people offline in Nigeria, it is not the cost of 1GB."
    ],
    pills: [
      { value: "69.9%", label: "Ghana" },
      { value: "39.2%", label: "Nigeria" }
    ],
    align: "right",
    hudCaption: "Nigeria and Ghana: a $0.01 price gap, but a 30.7-point internet-use gap.",
    legend: [
      { color: "#c49662", label: "Ghana" },
      { color: "#777e7e", label: "Nigeria" },
      { color: "#374151", label: "Other countries dimmed" }
    ]
  }
] as const;

export const storyStepsFr = [
  {
    mode: "geography",
    num: "01 / 04",
    title: "Un cadre comparable.",
    body: [
      "Ce que vous voyez, ce sont tous les pays africains ou l'on peut apparier un chiffre 2023 d'usage internet avec un prix 2023 pour 1GB de donnees mobiles. Cela donne 48 pays. Six en sortent parce qu'un chiffre ou l'autre manque.",
    ],
    pills: [
      { value: "48", label: "pays apparies" },
      { value: "6", label: "lignes manquantes" }
    ],
    align: "left",
    hudCaption: "Formes de pays teintees par region: le panneau apparie 2023.",
    legend: [
      { color: "#d28e4d", label: "Ouest" },
      { color: "#4b7b66", label: "Est" },
      { color: "#8f5a67", label: "Centre" },
      { color: "#8a8850", label: "Australe" },
      { color: "#6982b5", label: "Nord" }
    ]
  },
  {
    mode: "internet",
    num: "02 / 04",
    title: "L'usage se separe vite.",
    highlightIso3s: ["MAR", "BDI"],
    body: [
      "La carte colore maintenant chaque pays selon l'usage internet. Les tons plus chauds indiquent un usage plus eleve. Les tons plus sombres, un usage plus faible. Le Maroc atteint 91.0%. Le Burundi est a 11.1%.",
      "L'Afrique du Nord se detache immediatement. A travers une grande partie de l'Est, du Centre et de l'Ouest, les couleurs restent sombres, une ceinture de faible usage qui persiste meme si la plupart de ces pays ont deja une couverture mobile haut debit."
    ],
    pills: [
      { value: "91.0%", label: "Maroc" },
      { value: "11.1%", label: "Burundi" }
    ],
    align: "right",
    hudCaption: "La couleur des pays encode l'usage internet 2023 (Banque mondiale / ITU).",
    legend: [
      { color: "#c9783f", label: "Usage plus eleve" },
      { color: "#20364f", label: "Usage plus faible" }
    ]
  },
  {
    mode: "price",
    num: "03 / 04",
    title: "Les donnees bon marche aident. Mais elles ne tranchent pas.",
    highlightIso3s: ["ZWE", "ZMB", "MWI"],
    body: [
      "L'histoire du prix est dans les chiffres. Le Zimbabwe paie 43.75 USD pour 1GB de donnees mobiles. La Zambie paie 8.01 USD.",
      "Mais regardez le bas de l'echelle. Le Malawi paie seulement 0.38 USD pour 1GB, et seulement 18.0% de sa population utilise internet. Si les donnees bon marche suffisaient, les couleurs du Malawi a l'etape precedente auraient ete bien plus chaudes. Elles ne l'etaient pas."
    ],
    pills: [
      { value: "$43.75", label: "Zimbabwe" },
      { value: "$0.38", label: "Malawi" }
    ],
    align: "left",
    hudCaption: "Carte attenuee pour le contexte. Prix de 1GB dans la fiche; survolez un pays pour son prix.",
    legend: [
      { color: "#33404d", label: "Pays attenues pour le contexte" }
    ]
  },
  {
    mode: "ghana-nigeria",
    num: "04 / 04",
    title: "Prix presque identique, usage tres different.",
    highlightIso3s: ["GHA", "NGA"],
    body: [
      "Le Nigeria et le Ghana paient presque le meme prix pour 1GB: 0.39 USD et 0.40 USD. Un centime d'ecart. Mais le taux d'usage internet du Ghana en 2023 est de 69.9%. Celui du Nigeria est de 39.2%.",
      "C'est un ecart de 30.7 points en usage internet a prix quasi identique. C'est le contraste le plus net du panneau, et il s'eloigne d'une explication par le seul prix. Ce qui empeche les gens d'etre en ligne au Nigeria, ce n'est pas le cout de 1GB."
    ],
    pills: [
      { value: "69.9%", label: "Ghana" },
      { value: "39.2%", label: "Nigeria" }
    ],
    align: "right",
    hudCaption: "Nigeria et Ghana: 0.01 USD d'ecart de prix, mais 30.7 points d'ecart d'usage internet.",
    legend: [
      { color: "#c49662", label: "Ghana" },
      { color: "#777e7e", label: "Nigeria" },
      { color: "#374151", label: "Autres pays attenues" }
    ]
  }
] as const;
