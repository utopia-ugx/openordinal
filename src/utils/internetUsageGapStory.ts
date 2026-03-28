export const storyStepsEn = [
  {
    mode: "geography",
    num: "01 / 05",
    title: "One comparable frame.",
    body: [
      "What you are looking at is every African country where we can match a 2023 internet-use figure with a 2023 price for 1GB of mobile data. That matched panel gives us 48 countries. Six drop out because one number or the other is missing.",
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
    num: "02 / 05",
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
    num: "03 / 05",
    title: "Cheap data doesn't explain the gap.",
    highlightIso3s: ["MWI", "SLE", "MOZ"],
    body: [
      "The cheap end does not automatically turn warm on the usage map. Malawi pays just $0.38 for 1GB, Sierra Leone pays $0.67, and Mozambique pays $0.78.",
      "Yet internet use in those same countries is only 18.0%, 20.6%, and 19.8%. Cheap data helps, but these are some of the clearest cases where it still does not produce broad adoption."
    ],
    pills: [
      { value: "$0.38", label: "Malawi" },
      { value: "19.8%", label: "Mozambique" }
    ],
    align: "left",
    hudCaption: "Map dimmed for context. 1GB price shown in card; hover a country for its price.",
    legend: [
      { color: "#33404d", label: "Countries dimmed for context" }
    ]
  },
  {
    mode: "price",
    num: "04 / 05",
    title: "North Africa pulls away.",
    highlightIso3s: ["MAR", "LBY", "EGY", "DZA", "TUN"],
    body: [
      "The broad regional split still matters. In the matched panel, North Africa's simple average internet-use rate is 80.3%. In sub-Saharan Africa, the comparable figure is 42.5%.",
      "That does not mean every country inside each zone looks the same. It means the broad continental divide is still visible even before we return to country-by-country contrasts."
    ],
    pills: [
      { value: "80.3%", label: "North Africa" },
      { value: "42.5%", label: "sub-Saharan Africa" }
    ],
    align: "right",
    hudCaption: "North Africa's average internet use sits far above the sub-Saharan average in the matched panel.",
    legend: [
      { color: "#33404d", label: "Countries dimmed for context" }
    ]
  },
  {
    mode: "ghana-nigeria",
    num: "05 / 05",
    title: "Near-identical price, very different use.",
    highlightIso3s: ["GHA", "NGA"],
    body: [
      "Nigeria and Ghana pay almost the same price for 1GB: $0.39 and $0.40. One cent apart. But Ghana's internet-use rate in 2023 is 69.9%. Nigeria's is 39.2%.",
      "That is a 30.7-point gap in internet use at near-identical price. It is not the largest contrast in the panel, but it is the cleanest familiar pair, and it weakens a price-only explanation without claiming that price never matters."
    ],
    pills: [
      { value: "69.9%", label: "Ghana" },
      { value: "39.2%", label: "Nigeria" }
    ],
    align: "left",
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
    num: "01 / 05",
    title: "Un cadre comparable.",
    body: [
      "Ce que vous voyez, ce sont tous les pays africains ou l'on peut apparier un chiffre 2023 d'usage internet avec un prix 2023 pour 1GB de donnees mobiles. Ce panneau apparie donne 48 pays. Six en sortent parce qu'un chiffre ou l'autre manque.",
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
    num: "02 / 05",
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
    num: "03 / 05",
    title: "Les donnees bon marche n'expliquent pas l'ecart.",
    highlightIso3s: ["MWI", "SLE", "MOZ"],
    body: [
      "Le bas de l'echelle ne devient pas automatiquement plus chaud sur la carte d'usage. Le Malawi paie seulement 0.38 USD pour 1GB, la Sierra Leone paie 0.67 USD, et le Mozambique paie 0.78 USD.",
      "Pourtant, l'usage internet dans ces pays n'est que de 18.0%, 20.6% et 19.8%. Un prix faible aide, mais ces cas montrent clairement qu'il ne produit pas, a lui seul, une adoption large."
    ],
    pills: [
      { value: "$0.38", label: "Malawi" },
      { value: "19.8%", label: "Mozambique" }
    ],
    align: "left",
    hudCaption: "Carte attenuee pour le contexte. Prix de 1GB dans la fiche; survolez un pays pour son prix.",
    legend: [
      { color: "#33404d", label: "Pays attenues pour le contexte" }
    ]
  },
  {
    mode: "price",
    num: "04 / 05",
    title: "L'Afrique du Nord se detache.",
    highlightIso3s: ["MAR", "LBY", "EGY", "DZA", "TUN"],
    body: [
      "La grande fracture regionale compte toujours. Dans le panneau apparie, le taux moyen simple d'usage internet en Afrique du Nord est de 80.3%. En Afrique subsaharienne, la moyenne comparable est de 42.5%.",
      "Cela ne veut pas dire que tous les pays de chaque zone se ressemblent. Cela signifie que la grande fracture continentale reste visible avant meme de revenir aux contrastes pays par pays."
    ],
    pills: [
      { value: "80.3%", label: "Afrique du Nord" },
      { value: "42.5%", label: "Afrique subsaharienne" }
    ],
    align: "right",
    hudCaption: "La moyenne d'usage internet en Afrique du Nord reste bien au-dessus de celle de l'Afrique subsaharienne dans le panneau apparie.",
    legend: [
      { color: "#33404d", label: "Pays attenues pour le contexte" }
    ]
  },
  {
    mode: "ghana-nigeria",
    num: "05 / 05",
    title: "Prix presque identique, usage tres different.",
    highlightIso3s: ["GHA", "NGA"],
    body: [
      "Le Nigeria et le Ghana paient presque le meme prix pour 1GB: 0.39 USD et 0.40 USD. Un centime d'ecart. Mais le taux d'usage internet du Ghana en 2023 est de 69.9%. Celui du Nigeria est de 39.2%.",
      "C'est un ecart de 30.7 points en usage internet a prix quasi identique. Ce n'est pas le plus grand contraste du panneau, mais c'est la paire la plus familiere et la plus lisible, ce qui affaiblit une explication par le seul prix sans pretendre que le prix ne compte jamais."
    ],
    pills: [
      { value: "69.9%", label: "Ghana" },
      { value: "39.2%", label: "Nigeria" }
    ],
    align: "left",
    hudCaption: "Nigeria et Ghana: 0.01 USD d'ecart de prix, mais 30.7 points d'ecart d'usage internet.",
    legend: [
      { color: "#c49662", label: "Ghana" },
      { color: "#777e7e", label: "Nigeria" },
      { color: "#374151", label: "Autres pays attenues" }
    ]
  }
] as const;
