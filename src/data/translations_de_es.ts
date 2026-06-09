/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VehicleTranslation {
  display_name: string;
  description: string;
  class: string;
  body_type: string;
  facts: string[];
  tags: string[];
}

export interface FactoryTranslation {
  name: string;
  description: string;
  city: string;
}

export const VEHICLE_TRANSLATIONS: Record<string, { de: VehicleTranslation; es: VehicleTranslation }> = {
  "vaz-2101": {
    "de": {
      "display_name": "VAZ-2101 Zhiguli",
      "description": "Erster in Massenproduktion hergestellter VAZ-Pkw auf Basis des Fiat 124.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Bekannt als Kopeyka",
        "Eines der ikonischsten sowjetischen Autos"
      ],
      "tags": [
        "klassiker",
        "limousine",
        "massenmarkt"
      ]
    },
    "es": {
      "display_name": "VAZ-2101 Zhiguli",
      "description": "Primer automóvil de pasajeros VAZ producido en masa basado en el Fiat 124.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Conocido como Kopeyka",
        "Uno de los automóviles soviéticos más icónicos"
      ],
      "tags": [
        "clásicos",
        "sedán",
        "mercado masivo"
      ]
    }
  },
  "vaz-2102": {
    "de": {
      "display_name": "VAZ-2102",
      "description": "Kombi-Version des VAZ-2101.",
      "class": "Kompaktwagen",
      "body_type": "Kombi",
      "facts": [
        "Beliebt bei sowjetischen Familien",
        "Weit verbreitet in ländlichen Regionen"
      ],
      "tags": [
        "kombi",
        "familie",
        "klassiker"
      ]
    },
    "es": {
      "display_name": "VAZ-2102",
      "description": "Versión familiar del VAZ-2101.",
      "class": "vehículo compacto",
      "body_type": "familiar",
      "facts": [
        "Popular entre las familias soviéticas",
        "Ampliamente utilizado en regiones rurales"
      ],
      "tags": [
        "familiar",
        "familia",
        "clásicos"
      ]
    }
  },
  "vaz-2103": {
    "de": {
      "display_name": "VAZ-2103",
      "description": "Luxusversion der klassischen Zhiguli-Plattform.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Verfügte über ein verbessertes Interieur",
        "Galt als prestigeträchtig in der UdSSR"
      ],
      "tags": [
        "luxus",
        "klassik",
        "limousine"
      ]
    },
    "es": {
      "display_name": "VAZ-2103",
      "description": "Versión de lujo de la clásica plataforma Zhiguli.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Contaba con un interior mejorado",
        "Considerado prestigioso en la URSS"
      ],
      "tags": [
        "lujo",
        "clásicos",
        "sedán"
      ]
    }
  },
  "vaz-2104": {
    "de": {
      "display_name": "VAZ-2104",
      "description": "Klassischer Kombi der letzten Generation.",
      "class": "Kompaktwagen",
      "body_type": "Kombi",
      "facts": [
        "Wurde weit exportiert",
        "Wurde als utilitarisches Familienfahrzeug genutzt"
      ],
      "tags": [
        "kombi",
        "spätsowjetisch"
      ]
    },
    "es": {
      "display_name": "VAZ-2104",
      "description": "Familiar clásico de última generación.",
      "class": "vehículo utilitario compacto",
      "body_type": "familiar",
      "facts": [
        "Exportado ampliamente",
        "Utilizado como vehículo familiar utilitario"
      ],
      "tags": [
        "familiar",
        "tardosoviético"
      ]
    }
  },
  "vaz-2105": {
    "de": {
      "display_name": "VAZ-2105",
      "description": "Modernisierter sowjetischer klassischer Sedan.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Eckiges Design",
        "Basis für mehrere Derivate"
      ],
      "tags": [
        "klassiker",
        "sedan"
      ]
    },
    "es": {
      "display_name": "VAZ-2105",
      "description": "Sedán clásico soviético modernizado.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Diseño angular",
        "Base para varios derivados"
      ],
      "tags": [
        "clásicos",
        "sedán"
      ]
    }
  },
  "vaz-2106": {
    "de": {
      "display_name": "VAZ-2106",
      "description": "Einer der beliebtesten sowjetischen Limousinen.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Lange Produktionsdauer",
        "Sehr verbreitet in der UdSSR"
      ],
      "tags": [
        "klassiker",
        "beliebt",
        "limousine"
      ]
    },
    "es": {
      "display_name": "VAZ-2106",
      "description": "Uno de los sedanes soviéticos más populares.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Larga vida de producción",
        "Muy común en la URSS"
      ],
      "tags": [
        "clásicos",
        "popular",
        "sedán"
      ]
    }
  },
  "vaz-2107": {
    "de": {
      "display_name": "VAZ-2107",
      "description": "Flaggschiff der klassischen VAZ-Reihe.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Erkennbare verchromte Kühlergrill",
        "Sehr beliebt in den 1980er Jahren"
      ],
      "tags": [
        "klassik",
        "luxus",
        "limousine"
      ]
    },
    "es": {
      "display_name": "VAZ-2107",
      "description": "Buque insignia de la clásica línea de VAZ.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Rejilla cromada reconocible",
        "Muy popular en los años 80"
      ],
      "tags": [
        "clásicos",
        "lujo",
        "sedán"
      ]
    }
  },
  "vaz-2108": {
    "de": {
      "display_name": "Lada Samara 2108",
      "description": "Erster in Serie produzierter VAZ mit Frontantrieb.",
      "class": "Kompaktwagen",
      "body_type": "Steilheck",
      "facts": [
        "Entwickelt mit Ingenieureingaben von Porsche",
        "Modernes aerodynamisches Design"
      ],
      "tags": [
        "fwd",
        "hatchback",
        "modern"
      ]
    },
    "es": {
      "display_name": "Lada Samara 2108",
      "description": "Primer VAZ de producción masiva con tracción delantera.",
      "class": "compacto",
      "body_type": "Hatchback",
      "facts": [
        "Desarrollado con la participación de ingenieros de Porsche",
        "Diseño aerodinámico moderno"
      ],
      "tags": [
        "fwd",
        "hatchback",
        "modern"
      ]
    }
  },
  "vaz-2109": {
    "de": {
      "display_name": "Lada Samara 2109",
      "description": "Fünf-Türer-Version der Samara-Plattform.",
      "class": "Kompaktwagen",
      "body_type": "Steilheck",
      "facts": [
        "Beliebter Familien-Steilheck",
        "Weit verbreitet exportiert"
      ],
      "tags": [
        "vorderradantrieb",
        "familie",
        "steileheck"
      ]
    },
    "es": {
      "display_name": "Lada Samara 2109",
      "description": "Versión de cinco puertas de la plataforma Samara.",
      "class": "compacto",
      "body_type": "hatchback",
      "facts": [
        "Hatchback familiar popular",
        "Ampliamente exportado"
      ],
      "tags": [
        "tracción delantera",
        "familia",
        "hatchback"
      ]
    }
  },
  "vaz-21099": {
    "de": {
      "display_name": "Lada Samara 21099",
      "description": "Limousinen-Version der Samara-Familie.",
      "class": "Vorderradantrieb Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Nach sowjetischen Maßstäben als modern angesehen",
        "Beliebt in den postsowjetischen Ländern"
      ],
      "tags": [
        "vorderradantrieb",
        "limousine",
        "spätsowjetisch"
      ]
    },
    "es": {
      "display_name": "Lada Samara 21099",
      "description": "Versión sedán de la familia Samara.",
      "class": "vehículo utilitario de tracción delantera compacto",
      "body_type": "Sedán",
      "facts": [
        "Considerado moderno según los estándares soviéticos",
        "Popular en los países postsoviéticos"
      ],
      "tags": [
        "tdf",
        "sedán",
        "tardosoviético"
      ]
    }
  },
  "vaz-2121": {
    "de": {
      "display_name": "Lada Niva",
      "description": "Legendäres sowjetisches Geländefahrzeug mit Monocoque-Bauweise.",
      "class": "Kompaktgeländewagen",
      "body_type": "SUV",
      "facts": [
        "In über 100 Länder exportiert",
        "Bekannt für außergewöhnliche Geländetauglichkeit"
      ],
      "tags": [
        "offroad",
        "4x4",
        "export"
      ]
    },
    "es": {
      "display_name": "Lada Niva",
      "description": "Legendario vehículo todoterreno soviético con construcción monocasco.",
      "class": "vehículo todoterreno compacto",
      "body_type": "SUV",
      "facts": [
        "Exportado a más de 100 países",
        "Conocido por su excepcional capacidad todoterreno"
      ],
      "tags": [
        "offroad",
        "4x4",
        "exportación"
      ]
    }
  },
  "vaz-1111": {
    "de": {
      "display_name": "Oka",
      "description": "Kleines sowjetisches Stadtfahrzeug.",
      "class": "Mikroauto",
      "body_type": "Steilheck",
      "facts": [
        "Entwickelt als erschwingliches Transportmittel",
        "Sehr kompakte Abmessungen"
      ],
      "tags": [
        "mikroauto",
        "wirtschaftlich",
        "stadt"
      ]
    },
    "es": {
      "display_name": "Oka",
      "description": "Pequeño automóvil urbano soviético.",
      "class": "microcoche",
      "body_type": "hatchback",
      "facts": [
        "Diseñado como transporte asequible",
        "Dimensiones muy compactas"
      ],
      "tags": [
        "microcoche",
        "económico",
        "ciudad"
      ]
    }
  },
  "gaz-m20": {
    "de": {
      "display_name": "Pobeda (Победа)",
      "description": "Einer der ersten sowjetischen Personenkraftwagen nach dem Krieg.",
      "class": "Mittelklasse",
      "body_type": "Fastback-Limousine",
      "facts": [
        "Aerodynamischer Karosseriestil für seine Zeit",
        "Symbol der Nachkriegswiederbelebung"
      ],
      "tags": [
        "nachkriegszeit",
        "klassiker",
        "symbolisch"
      ]
    },
    "es": {
      "display_name": "Pobeda (Победа)",
      "description": "Uno de los primeros automóviles de pasajeros soviéticos de la posguerra.",
      "class": "automóvil de tamaño mediano",
      "body_type": "sedán fastback",
      "facts": [
        "Carrocería aerodinámica para su época",
        "Símbolo de la recuperación de la posguerra"
      ],
      "tags": [
        "posguerra",
        "clásicos",
        "simbólico"
      ]
    }
  },
  "gaz-21": {
    "de": {
      "display_name": "Volga GAZ-21",
      "description": "Ikonische sowjetische Limousine.",
      "class": "Mittelklasse",
      "body_type": "Limousine",
      "facts": [
        "Erkennbare Hirschfigur auf der Motorhaube",
        "Prestigeträchtiges sowjetisches Fahrzeug"
      ],
      "tags": [
        "executive",
        "volga",
        "ikonisch"
      ]
    },
    "es": {
      "display_name": "Volga GAZ-21",
      "description": "Icónico sedán ejecutivo soviético.",
      "class": "sedán ejecutivo",
      "body_type": "sedán",
      "facts": [
        "Reconocible adorno de ciervo en el capó",
        "Vehículo soviético de prestigio"
      ],
      "tags": [
        "ejecutivo",
        "volga",
        "icónico"
      ]
    }
  },
  "gaz-24": {
    "de": {
      "display_name": "Volga GAZ-24",
      "description": "Der am meisten erkennbare späte sowjetische Volga.",
      "class": "Oberklasse",
      "body_type": "Limousine",
      "facts": [
        "Wurde häufig als Taxi genutzt",
        "Beliebt bei Beamten"
      ],
      "tags": [
        "oberklasse",
        "taxi",
        "volga"
      ]
    },
    "es": {
      "display_name": "Volga GAZ-24",
      "description": "El Volga soviético tardío más reconocible.",
      "class": "berlina ejecutiva",
      "body_type": "sedán",
      "facts": [
        "Ampliamente utilizado como taxi",
        "Popular entre funcionarios"
      ],
      "tags": [
        "ejecutivo",
        "taxi",
        "volga"
      ]
    }
  },
  "gaz-3102": {
    "de": {
      "display_name": "Volga GAZ-3102",
      "description": "Luxuriöse Evolution der Volga-Serie.",
      "class": "Oberklasse",
      "body_type": "Limousine",
      "facts": [
        "Wurde in relativ geringen Stückzahlen produziert",
        "Reserviert für Beamte"
      ],
      "tags": [
        "oberklasse",
        "luxus",
        "spätsowjetisch"
      ]
    },
    "es": {
      "display_name": "Volga GAZ-3102",
      "description": "Evolución de lujo de la serie Volga.",
      "class": "automóvil ejecutivo",
      "body_type": "sedán",
      "facts": [
        "Producido en cantidades relativamente bajas",
        "Reservado para funcionarios"
      ],
      "tags": [
        "ejecutivo",
        "lujo",
        "tardosoviético"
      ]
    }
  },
  "gaz-13": {
    "de": {
      "display_name": "Chaika",
      "description": "Luxuriöse Limousine für die sowjetische Elite.",
      "class": "Oberklasse",
      "body_type": "Limousine",
      "facts": [
        "Wurde nicht an die Allgemeinheit verkauft",
        "Amerikanisch inspiriertes Design"
      ],
      "tags": [
        "luxus",
        "limousine",
        "elite"
      ]
    },
    "es": {
      "display_name": "Chaika",
      "description": "Limusina de lujo para la élite soviética.",
      "class": "coche de lujo",
      "body_type": "limusina",
      "facts": [
        "No se vendió al público en general",
        "Diseño inspirado en América"
      ],
      "tags": [
        "lujo",
        "limusina",
        "élite"
      ]
    }
  },
  "moskvich-400": {
    "de": {
      "display_name": "Moskvich-400",
      "description": "Erster Nachkriegs-Moskvich-Pkw.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Basierend auf dem Opel Kadett",
        "Sehr wichtig für die Motorisierung in der Sowjetunion"
      ],
      "tags": [
        "postkrieg",
        "kompakt",
        "historisch"
      ]
    },
    "es": {
      "display_name": "Moskvich-400",
      "description": "Primer automóvil de pasajeros Moskvich de la posguerra.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Basado en el Opel Kadett",
        "Muy importante para la motorización soviética"
      ],
      "tags": [
        "posguerra",
        "compacto",
        "histórico"
      ]
    }
  },
  "moskvich-408": {
    "de": {
      "display_name": "Moskvich-408 (Russisch: Москвич-408)",
      "description": "Ein beliebter Kompaktwagen für Familien, bekannt für sein modernes Design für die damalige Zeit, den geräumigen Innenraum und den Exporterfolg in Westeuropa.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Extrem beliebt auf den Exportmärkten in Westeuropa",
        "Einer der ersten sowjetischen Autos mit umfangreichen Elementen der passiven Sicherheit",
        "Setzte einen revolutionären Designstandard für sowjetische Autos der 1960er Jahre"
      ],
      "tags": [
        "kompakt",
        "export",
        "klassiker"
      ]
    },
    "es": {
      "display_name": "Moskvich-408 (Ruso: Москвич-408)",
      "description": "Un popular coche familiar compacto conocido por su diseño moderno para la época, su espacioso interior y su éxito en exportaciones en Europa Occidental.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Extremadamente popular en los mercados de exportación en Europa Occidental",
        "Uno de los primeros coches soviéticos con elementos extensos de seguridad pasiva",
        "Adoptó un diseño revolucionario para los coches soviéticos de la década de 1960"
      ],
      "tags": [
        "compacto",
        "exportación",
        "clásicos"
      ]
    }
  },
  "moskvich-412": {
    "de": {
      "display_name": "Moskvich-412 (Russisch: Москвич-412)",
      "description": "Beliebte sowjetische Kompaktlimousine mit relativ modernem Motor.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Erfolgreich bei Rallyes",
        "International exportiert"
      ],
      "tags": [
        "kompakt",
        "export",
        "rallye"
      ]
    },
    "es": {
      "display_name": "Moskvich-412 (Ruso: Москвич-412)",
      "description": "Popular sedán compacto soviético con un motor relativamente avanzado.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Exitoso en rallys",
        "Exportado internacionalmente"
      ],
      "tags": [
        "compacto",
        "exportación",
        "rally"
      ]
    }
  },
  "moskvich-2140": {
    "de": {
      "display_name": "Moskvich-2140",
      "description": "Modernisierte Fortsetzung des Moskvich-412.",
      "class": "Kompaktwagen",
      "body_type": "Limousine",
      "facts": [
        "Verbessertes Interieur",
        "Sehr verbreitet im späten UdSSR"
      ],
      "tags": [
        "kompakt",
        "limousine",
        "spät-sowjetisch"
      ]
    },
    "es": {
      "display_name": "Moskvich-2140",
      "description": "Continuación modernizada del Moskvich-412.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
        "Interior mejorado",
        "Muy común en la última URSS"
      ],
      "tags": [
        "compacto",
        "sedán",
        "tardío-soviético"
      ]
    }
  },
  "moskvich-2141": {
    "de": {
      "display_name": "Moskvich Aleko (2141)",
      "description": "Moderner frontgetriebener Moskvich Steilheck.",
      "class": "frontgetriebenes Kompaktwagen",
      "body_type": "Steilheck",
      "facts": [
        "Inspiriert von Simca 1308",
        "Eines der modernsten sowjetischen Personenkraftwagen"
      ],
      "tags": [
        "fwd",
        "steileheck",
        "modern"
      ]
    },
    "es": {
      "display_name": "Moskvich Aleko (2141)",
      "description": "Moderno hatchback Moskvich de tracción delantera.",
      "class": "compacto de tracción delantera",
      "body_type": "hatchback",
      "facts": [
        "Inspirado en Simca 1308",
        "Uno de los automóviles de pasajeros soviéticos más modernos"
      ],
      "tags": [
        "fwd",
        "hatchback",
        "moderno"
      ]
    }
  },
  "zaz-965": {
    "de": {
      "display_name": "Zaporozhets 965",
      "description": "Kompakter und erschwinglicher sowjetischer «Volkswagen».",
      "class": "Mikroauto",
      "body_type": "Limousine",
      "facts": [
        "Hintermotoranordnung",
        "Spitzname: Der Bucklige"
      ],
      "tags": [
        "mikroauto",
        "hintermotor",
        "ikonisch"
      ]
    },
    "es": {
      "display_name": "Zaporozhets 965",
      "description": "Coche popular soviético compacto y asequible.",
      "class": "microcoche",
      "body_type": "sedán",
      "facts": [
        "Disposición del motor trasero",
        "Apodado El Jorobado"
      ],
      "tags": [
        "microcoche",
        "motor trasero",
        "icónico"
      ]
    }
  },
  "zaz-968m": {
    "de": {
      "display_name": "Zaporozhets 968M",
      "description": "Spätgeneration des Zaporozhets.",
      "class": "Mikroauto",
      "body_type": "Limousine",
      "facts": [
        "Sehr erschwingliches Fahrzeug",
        "Einfache und reparierbare Konstruktion"
      ],
      "tags": [
        "budget",
        "mikroauto",
        "spät-sowjetisch"
      ]
    },
    "es": {
      "display_name": "Zaporozhets 968M",
      "description": "Última generación del Zaporozhets.",
      "class": "microcoche",
      "body_type": "sedán",
      "facts": [
        "Vehículo muy asequible",
        "Construcción simple y reparable"
      ],
      "tags": [
        "presupuesto",
        "microcoche",
        "tardosoviético"
      ]
    }
  },
  "zaz-1102": {
    "de": {
      "display_name": "Tavria (ЗАЗ-1102 «Таврия»)",
      "description": "Moderner kompakter Steilheck von ZAZ.",
      "class": "Kleinwagen",
      "body_type": "Steilheck",
      "facts": [
        "Plataforma de tracción delantera",
        "Energieeffizienter als der Zaporozhets"
      ],
      "tags": [
        "vorderradantrieb",
        "kompakt",
        "modern"
      ]
    },
    "es": {
      "display_name": "Tavria (ЗАЗ-1102 «Таврия»)",
      "description": "Moderno hatchback compacto de ZAZ.",
      "class": "vehículo utilitario",
      "body_type": "hatchback",
      "facts": [
        "Plataforma de tracción delantera",
        "Más eficiente en combustible que el Zaporozhets"
      ],
      "tags": [
        "td",
        "compacto",
        "moderno"
      ]
    }
  },
  "uaz-469": {
    "de": {
      "display_name": "UAZ-469",
      "description": "Legendäres sowjetisches Militär- und Zivilfahrzeug für unwegsames Gelände.",
      "class": "militärisches Nutzfahrzeug",
      "body_type": "SUV",
      "facts": [
        "Extrem langlebig",
        "Wurde von der sowjetischen Armee genutzt"
      ],
      "tags": [
        "militär",
        "offroad",
        "4x4"
      ]
    },
    "es": {
      "display_name": "UAZ-469",
      "description": "Legendario vehículo todoterreno militar y civil soviético.",
      "class": "vehículo utilitario militar",
      "body_type": "SUV",
      "facts": [
        "Extremadamente duradero",
        "Utilizado por el ejército soviético"
      ],
      "tags": [
        "militar",
        "todoterreno",
        "4x4"
      ]
    }
  },
  "uaz-452v": {
    "de": {
      "display_name": "UAZ-452V",
      "description": "Passagiervan-Variante der UAZ-452-Serie.",
      "class": "Nutzfahrzeug",
      "body_type": "Kleinbus",
      "facts": [
        "Spitzname Bukhanka",
        "Ausgezeichnete Geländegängigkeit"
      ],
      "tags": [
        "van",
        "offroad",
        "nutzfahrzeug"
      ]
    },
    "es": {
      "display_name": "UAZ-452V",
      "description": "Variante de furgoneta de pasajeros de la serie UAZ-452.",
      "class": "vehículo utilitario",
      "body_type": "furgoneta",
      "facts": [
        "Apodado Bukhanka",
        "Excelente movilidad todoterreno"
      ],
      "tags": [
        "furgoneta",
        "todoterreno",
        "utilitario"
      ]
    }
  },
  "zis-110": {
    "de": {
      "display_name": "ZIS-110",
      "description": "Luxuriöse Limousine für die sowjetische Führung.",
      "class": "oberer Vertreterklasse",
      "body_type": "Limousine",
      "facts": [
        "Inspiriert vom Design der Packard-Fahrzeuge",
        "Handmontage"
      ],
      "tags": [
        "luxus",
        "limousine",
        "regierung"
      ]
    },
    "es": {
      "display_name": "ZIS-110",
      "description": "Limusina de lujo para el liderazgo soviético.",
      "class": "clase ejecutiva de lujo",
      "body_type": "limusina",
      "facts": [
        "Inspirado en el diseño de Packard",
        "Montado a mano"
      ],
      "tags": [
        "lujo",
        "limusina",
        "gobierno"
      ]
    }
  },
  "zil-114": {
    "de": {
      "display_name": "ZIL-114",
      "description": "Große sowjetische Staatslimousine.",
      "class": "Luxusklasse",
      "body_type": "Limousine",
      "facts": [
        "Wurde von hochrangigen Beamten genutzt",
        "Sehr limitierte Produktion"
      ],
      "tags": [
        "luxus",
        "elite",
        "regierung"
      ]
    },
    "es": {
      "display_name": "ZIL-114",
      "description": "Gran limusina estatal soviética.",
      "class": "clase ejecutiva de lujo",
      "body_type": "limusina",
      "facts": [
        "Utilizado por funcionarios de alto rango",
        "Producción muy limitada"
      ],
      "tags": [
        "lujo",
        "élite",
        "gobierno"
      ]
    }
  },
  "zil-117": {
    "de": {
      "display_name": "ZIL-117",
      "description": "Ein prestigeträchtiger, hochgeschwindigkeitsfähiger Luxus-Executiv-Limousine, basierend auf der ZIL-114 Limousine.",
      "class": "Luxusklasse",
      "body_type": "Limousine",
      "facts": [
        "Verfügt über fortschrittliche Scheibenbremsen und ein Automatikgetriebe",
        "Häufig in hochrangigen Regierungsbegleitdiensten eingesetzt"
      ],
      "tags": [
        "luxus",
        "limousine",
        "executive"
      ]
    },
    "es": {
      "display_name": "ZIL-117",
      "description": "Una prestigiosa berlina de lujo de alta velocidad basada en la limusina ZIL-114.",
      "class": "clase ejecutiva de lujo",
      "body_type": "sedán",
      "facts": [
        "Cuenta con frenos de disco avanzados y transmisión automática",
        "Común en servicios de escolta gubernamental de alto rango"
      ],
      "tags": [
        "lujo",
        "sedán",
        "ejecutivo"
      ]
    }
  },
  "izh-2125": {
    "de": {
      "display_name": "IZH Kombi",
      "description": "Einer der ersten sowjetischen Liftbacks.",
      "class": "Kompaktwagen",
      "body_type": "Liftback",
      "facts": [
        "Praktischer Laderaum",
        "Beliebt bei sowjetischen Autofahrern"
      ],
      "tags": [
        "liftback",
        "familie",
        "praktisch"
      ]
    },
    "es": {
      "display_name": "IZH Kombi",
      "description": "Uno de los primeros liftbacks soviéticos.",
      "class": "compacto",
      "body_type": "liftback",
      "facts": [
        "Espacio de carga práctico",
        "Popular entre los automovilistas soviéticos"
      ],
      "tags": [
        "liftback",
        "familia",
        "práctico"
      ]
    }
  },
  "izh-2715": {
    "de": {
      "display_name": "IZH-2715",
      "description": "Kompakter sowjetischer Lieferwagen.",
      "class": "Nutzfahrzeug",
      "body_type": "Kastenwagen",
      "facts": [
        "Weit verbreitet für Lieferungen",
        "Spitzname: Heel"
      ],
      "tags": [
        "nutzfahrzeug",
        "kastenwagen",
        "kommerziell"
      ]
    },
    "es": {
      "display_name": "IZH-2715",
      "description": "Furgón de entrega soviético compacto.",
      "class": "vehículo utilitario",
      "body_type": "furgón",
      "facts": [
        "Ampliamente utilizado para entregas",
        "Apodado 'Heel'"
      ],
      "tags": [
        "utilitario",
        "furgón",
        "comercial"
      ]
    }
  },
  "izh-2126": {
    "de": {
      "display_name": "IZH Oda (ИЖ-2126 «Ода»)",
      "description": "Spät-sowjetischer Heckantrieb-Hatchback.",
      "class": "Kompaktwagen",
      "body_type": "Steilheck",
      "facts": [
        "Modernisierte IZH-Plattform",
        "Produziert nach dem Zusammenbruch der UdSSR"
      ],
      "tags": [
        "hatchback",
        "spät-sowjetisch",
        "kompakt"
      ]
    },
    "es": {
      "display_name": "IZH Oda (ИЖ-2126 «Ода»)",
      "description": "Hatchback de tracción trasera de la última época soviética.",
      "class": "compacto",
      "body_type": "hatchback",
      "facts": [
        "Plataforma IZH modernizada",
        "Producido después del colapso de la URSS"
      ],
      "tags": [
        "hatchback",
        "tardío-soviético",
        "compacto"
      ]
    }
  },
"gaz-12": {
    "de": {
      "display_name": "GAZ-12 ZIM",
      "description": "Ein sechssitziger Komfort-Limousinen-Pkw des Gorkowski-Automobilwerks, das erste sowjetische Oberklasse-Serienmodell mit einer selbsttragenden Karosserie.",
      "class": "Oberklasse",
      "body_type": "Limousine",
      "facts": [
            "Erster sowjetischer Pkw mit einer hydraulischen Strömungskupplung im Getriebe",
            "Diente hauptsächlich Beamten der mittleren Ebene und als exklusives Taxi",
            "Entwickelt auf einer verlängerten Pobeda-Plattform"
      ],
      "tags": [
            "luxus",
            "klassiker",
            "nachkriegszeit"
      ]
},
    "es": {
      "display_name": "GAZ-12 ZIM",
      "description": "Un sedán de lujo de seis plazas fabricado por GAZ, notablemente el primer sedán de representación soviético con carrocería monocasco.",
      "class": "berlina de lujo",
      "body_type": "sedán",
      "facts": [
            "Primer automóvil soviético con acoplamiento hidráulico en la transmisión",
            "Utilizado principalmente por funcionarios de nivel medio y como taxi",
            "Creado sobre un chasis alargado a partir de elementos del Pobeda"
      ],
      "tags": [
            "lujo",
            "clásicos",
            "posguerra"
      ]
}
  },
  "gaz-14": {
    "de": {
      "display_name": "GAZ-14 Tschaika",
      "description": "Die zweite Generation des berühmten sowjetischen Luxus-Repräsentationslimousinen-Modells mit modernstem zeitgenössischen Executive-Komfort.",
      "class": "Luxusklasse",
      "body_type": "Limousine",
      "facts": [
            "Ausgestattet mit Automatikgetriebe und doppelter Klimaanlage",
            "Sämtliche Produktionszeichnungen und Vorrichtungen wurden unter Gorbatschow vernichtet",
            "Produktion in sehr geringen, exklusiven Stückzahlen"
      ],
      "tags": [
            "luxus",
            "limousine",
            "elite"
      ]
},
    "es": {
      "display_name": "GAZ-14 Chaika",
      "description": "La segunda generación de la célebre limusina de lujo soviética, que presenta un confort ejecutivo avanzado y un estilo angular moderno.",
      "class": "coche de lujo",
      "body_type": "limusina",
      "facts": [
            "Equipado con transmisión automática y aire acondicionado dual",
            "El utillaje de producción fue destruido durante la Perestroika",
            "Cifras de producción extremadamente bajas"
      ],
      "tags": [
            "lujo",
            "limusina",
            "élite"
      ]
}
  },
  "gaz-22": {
    "de": {
      "display_name": "GAZ-22 Wolga",
      "description": "Die Kombi-Version des legendären GAZ-21 Wolga, weit verbreitet für staatliche Transportdienstleistungen und als Krankenwagen.",
      "class": "Mittelklasse",
      "body_type": "Kombi",
      "facts": [
            "Wurde fast nie an Privatpersonen in der UdSSR verkauft",
            "War der bekannteste sowjetische Sanitätskraftwagen",
            "Besitzt klappbare Rücksitze für ein enormes Ladevolumen"
      ],
      "tags": [
            "kombi",
            "volga",
            "klassiker"
      ]
},
    "es": {
      "display_name": "GAZ-22 Volga",
      "description": "La versión familiar del icónico GAZ-21 Volga, ampliamente utilizada en funciones de servicios estatales y ambulancias.",
      "class": "vehículo de tamaño mediano",
      "body_type": "familiar",
      "facts": [
            "Rara vez se vendía a ciudadanos privados en la URSS",
            "Sirvió como la ambulancia soviética más icónica",
            "Presenta asientos traseros abatibles para un amplio espacio de carga"
      ],
      "tags": [
            "familiar",
            "volga",
            "clásicos"
      ]
}
  },
  "gaz-2402": {
    "de": {
      "display_name": "GAZ-24-02 Wolga",
      "description": "Der dreireihige Kombi auf Basis der beliebten GAZ-24 Wolga-Limousine.",
      "class": "Mittelklasse",
      "body_type": "Kombi",
      "facts": [
            "Bietet Platz für bis zu 7 Personen durch klappbare Sitzreihen",
            "Für Taxis, staatliche Behörden und Flughafenzubringer eingesetzt",
            "Flacher Ladeboden nach Umklappen der hinteren Reihen"
      ],
      "tags": [
            "kombi",
            "volga",
            "familie"
      ]
},
    "es": {
      "display_name": "GAZ-24-02 Volga",
      "description": "La versión familiar del popular GAZ-24 Volga, equipada con tres filas de asientos.",
      "class": "vehículo familiar de tamaño mediano",
      "body_type": "familiar",
      "facts": [
            "Albergaba hasta 7 personas con asientos plegables",
            "Ampliamente exportado y utilizado como taxi o traslado de aeropuerto",
            "Las elecciones de plegado formaban una plataforma de carga plana"
      ],
      "tags": [
            "familiar",
            "volga",
            "familia"
      ]
}
  },
  "gaz-69": {
    "de": {
      "display_name": "GAZ-69",
      "description": "Das legendäre allradgetriebene militärische und zivile Geländefahrzeug, das die sowjetische Landwirtschaft und Armee mobilisierte.",
      "class": "Geländewagen",
      "body_type": "SUV",
      "facts": [
            "Erhielt den Spitznamen 'Koslik' (Zicklein) wegen des unruhigen Federungsverhaltens",
            "Wurde sowohl in den GAZ- als auch in den UAZ-Werken produziert",
            "Hervorragende Geländegängigkeit und hohe Watfähigkeit"
      ],
      "tags": [
            "offroad",
            "4x4",
            "klassiker"
      ]
},
    "es": {
      "display_name": "GAZ-69",
      "description": "Un legendario vehículo utilitario militar y civil con tracción en las cuatro ruedas que movilizó al campo soviético.",
      "class": "todoterreno compacto",
      "body_type": "SUV",
      "facts": [
            "Apodado 'Kozlik' (Cabrito) debido a su andar saltarín",
            "Producido tanto en las plantas de GAZ como de UAZ",
            "Tenía un excelente espacio libre al suelo y capacidad de vadeo"
      ],
      "tags": [
            "offroad",
            "4x4",
            "clásicos"
      ]
}
  },
  "izh-412": {
    "de": {
      "display_name": "IZH-412",
      "description": "Der Ischewsker Zwilling des Moskwietsch-412, berühmt für solide Langlebigkeit im harten sowjetischen Alltag.",
      "class": "Kompaktklasse",
      "body_type": "Limousine",
      "facts": [
            "Hergestellt im Rüstungskombinat Ischmasch",
            "Galt als qualitativ hochwertiger montiert im Vergleich zur Moskauer Familie",
            "Beliebte Basis für den privaten sowjetischen Breitensport"
      ],
      "tags": [
            "kompakt",
            "klassiker",
            "beliebt"
      ]
},
    "es": {
      "display_name": "IZH-412",
      "description": "El homólogo de Izhevsk del Moskvich-412, conocido por su ensamblaje de gran durabilidad y su fiabilidad.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
            "Construido en las instalaciones militares-industriales de Izhmash",
            "Considerado en la URSS de construcción más resistente que el modelo de Moscú",
            "Excelente base para preparaciones de carreras amateur de la época"
      ],
      "tags": [
            "compacto",
            "clásicos",
            "popular"
      ]
}
  },
  "izh-27151": {
    "de": {
      "display_name": "IZH-27151",
      "description": "Der legendäre flache Pick-up auf Basis der praktischen IZH-2715-Serie.",
      "class": "Nutzfahrzeug",
      "body_type": "Pickup",
      "facts": [
            "Beliebtes flaches Alltagsarbeitstier für Kleinlieferanten",
            "Es gab eine speziell gestaltete längere Exportversion",
            "Hervorragende Ersatzteilversorgung und außerordentliche Belastungstoleranz"
      ],
      "tags": [
            "nutzfahrzeug",
            "kommerziell",
            "pickup"
      ]
},
    "es": {
      "display_name": "IZH-27151",
      "description": "Una pequeña camioneta pickup compacta derivada de la línea de furgones IZH-2715.",
      "class": "comercial ligero",
      "body_type": "pickup",
      "facts": [
            "Gran volumen de carga para entrega urbana de menor escala",
            "Variaciones de exportación extendida de cabina e interior mejorados",
            "Considerado el vehículo de transporte ligero más común de la URSS"
      ],
      "tags": [
            "utilitario",
            "comercial",
            "pickup"
      ]
}
  },
  "izh-27156": {
    "de": {
      "display_name": "IZH-27156",
      "description": "Der flexibel nutzbare Personen- und Lasten-Kombi mit hinteren klappbaren Transportbänken.",
      "class": "Nutzfahrzeug",
      "body_type": "Kombi / Lieferwagen",
      "facts": [
            "Kombinierte 6 Sitze mit viel Ladevolumen",
            "Unverzichtbares Standardfahrzeug für frühe Privatbetriebe der Kooperativenära",
            "Hintere Seitenverglasung verbessert die Rundumsicht im Vergleich zum Standard-Fahrzeug"
      ],
      "tags": [
            "nutzfahrzeug",
            "kombi",
            "passagier"
      ]
},
    "es": {
      "display_name": "IZH-27156",
      "description": "Un furgón mixto versátil equipado con ventanas laterales y asientos de lona móviles traseros.",
      "class": "vehículo utilitario",
      "body_type": "furgoneta",
      "facts": [
            "Permitió combinar la entrega comercial de mercancía con el transporte familiar",
            "Amplias configuraciones de asientos de lona plegables para optimizar carga",
            "Muy demandado en los comienzos comerciales privados de la Perestroika"
      ],
      "tags": [
            "utilitario",
            "furgoneta",
            "pasajeros"
      ]
}
  },
  "moskvich-2137": {
    "de": {
      "display_name": "Moskwitsch-2137",
      "description": "Die Kombi-Version der Moskwietsch-2140 Familie mit großer, praktischer Ladeklappe.",
      "class": "Kompaktklasse",
      "body_type": "Kombi",
      "facts": [
            "Ausgestattet mit modernen großen horizontalen Heckleuchten",
            "Oft von sowjetischen Energie- und Postbetrieben verwendet",
            "Heute eine gesuchte, seltene Variante für Sammler"
      ],
      "tags": [
            "kombi",
            "kompakt",
            "praktisch"
      ]
},
    "es": {
      "display_name": "Moskvich-2137",
      "description": "La versión familiar de la familia Moskvich-2140, con un amplio espacio de carga trasera.",
      "class": "familiar compacto",
      "body_type": "familiar",
      "facts": [
            "Equipado con un grupo óptico trasero muy avanzado",
            "Utilizado frecuentemente por organizaciones estatales soviéticas",
            "Variante rara y altamente coleccionable en la actualidad"
      ],
      "tags": [
            "familiar",
            "compacto",
            "práctico"
      ]
}
  },
  "moskvich-2138": {
    "de": {
      "display_name": "Moskwitsch-2138",
      "description": "Die wirtschaftlichere Modellversion des 2140 mit dem bewährten, sparsameren 1,36-Liter-Motor aus der Vorgängergeneration.",
      "class": "Kompaktklasse",
      "body_type": "Limousine",
      "facts": [
            "Äußerlich vollkommen baugleich mit dem luxuriöseren Moskwietsch-2140",
            "Gebaut zur Nutzung vorhandener Motor-Lagerbestände",
            "Ausgemustert, als der modernere 1,5-Liter-Motor die Produktion dominierte"
      ],
      "tags": [
            "kompakt",
            "limousine",
            "wirtschaftlich"
      ]
},
    "es": {
      "display_name": "Moskvich-2138",
      "description": "La versión económica del Moskvich-2140 equipada con el motor anterior y más económico de 1.36L.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
            "Idéntico en estilo exterior al Moskvich-2140",
            "Producido para utilizar inventario de motores anteriores",
            "Retirado a medida que el motor moderno UZAM-412 tomó prioridad"
      ],
      "tags": [
            "compacto",
            "sedán",
            "económico"
      ]
}
  },
  "moskvich-2315": {
    "de": {
      "display_name": "Moskwitsch-2315",
      "description": "Ein in Kleinstserie hergestellter leichter Pick-up für den werksinternen Transport.",
      "class": "Nutzfahrzeug",
      "body_type": "Pickup",
      "facts": [
            "Wurde meist direkt im Werk aus Limousinen-Karosserieteilen zusammengesetzt",
            "Diente fast ausschließlich dem Transport von Bauteilen innerhalb des AZLK-Werkes",
            "Ein extrem seltenes Relikt der späten sowjetischen Automobilgeschichte"
      ],
      "tags": [
            "nutzfahrzeug",
            "kommerziell",
            "pickup"
      ]
},
    "es": {
      "display_name": "Moskvich-2315",
      "description": "Una camioneta de serie limitada construida sobre la plataforma Moskvich-2140, utilizada en fábricas.",
      "class": "vehículo utilitario comercial",
      "body_type": "pickup",
      "facts": [
            "Generalmente modificado a partir de carrocerías sedán dañadas",
            "Servía principalmente para entregas internas de fábrica de AZLK",
            "Vehículo utilitario soviético muy raro y único"
      ],
      "tags": [
            "utilitario",
            "comercial",
            "pickup"
      ]
}
  },
  "moskvich-2733": {
    "de": {
      "display_name": "Moskwitsch-2733",
      "description": "Ein kleiner geschlossener Kastenwagen auf Basis des Moskwietsch-2138.",
      "class": "Nutzfahrzeug",
      "body_type": "Kastenwagen",
      "facts": [
            "Besitzt komplett geschlossene metallene Seitenwände statt Fensterscheiben",
            "Geliefert an Postdienste und staatliche Kleindistributoren",
            "Geteilte Heckklappe für schnelleres Be- und Entladen"
      ],
      "tags": [
            "nutzfahrzeug",
            "kastenwagen",
            "kommerziell"
      ]
},
    "es": {
      "display_name": "Moskvich-2733",
      "description": "Un furgón de reparto compacto construido como parte de la generación de transición de vehículos Moskvich.",
      "class": "furgón utilitario",
      "body_type": "furgoneta",
      "facts": [
            "Contaba con paneles laterales metálicos ciegos en lugar de ventanas",
            "Sirvió a empresas de servicios públicos y redes postales soviéticas",
            "Diseñado con puertas traseras divididas para una carga rápida"
      ],
      "tags": [
            "utilitario",
            "furgoneta",
            "comercial"
      ]
}
  },
  "moskvich-2734": {
    "de": {
      "display_name": "Moskwitsch-2734",
      "description": "Ein flinker geschlossener Kastenwagen auf der modernen Basis des Moskwietsch-2140.",
      "class": "Nutzfahrzeug",
      "body_type": "Kastenwagen",
      "facts": [
            "Verbesserte Blattfedern an der Hinterachse für eine höhere Nutzlast",
            "Eine massive Trennwand schützt den Fahrerbereich vor verrutschender Fracht",
            "Aufgrund der reinen Nutzfahrzeugzulassung nicht für Privatkäufer im Inland erhältlich"
      ],
      "tags": [
            "nutzfahrzeug",
            "kastenwagen",
            "kommerziell"
      ]
},
    "es": {
      "display_name": "Moskvich-2734",
      "description": "Un furgón de reparto comercial basado en la plataforma del Moskvich-2140 con tabique divisor.",
      "class": "furgón comercial",
      "body_type": "furgoneta",
      "facts": [
            "Equipado con ballestas traseras de servicio pesado",
            "Una partición sólida separaba al conductor de la carga",
            "No disponible para la adquisición libre de los ciudadanos comunes"
      ],
      "tags": [
            "utilitario",
            "furgoneta",
            "comercial"
      ]
}
  },
  "moskvich-401": {
    "de": {
      "display_name": "Moskwitsch-401",
      "description": "Das modernisierte Nachfolgemodell des Typs 400 mit leistungsgesteigertem Motor.",
      "class": "Kompaktklasse",
      "body_type": "Limousine",
      "facts": [
            "Eines der ältesten erschwinglichen Nachkriegsautos für Privatbürger in der UdSSR",
            "Sehr robust konstruiert für die unbefestigten Wege der Provinz",
            "Berühmt für die Langlebigkeit seiner tragenden Teile"
      ],
      "tags": [
            "nachkriegszeit",
            "kompakt",
            "historisch"
      ]
},
    "es": {
      "display_name": "Moskvich-401",
      "description": "Una versión mejorada del Moskvich-400, que cuenta con mejoras de motor y refinamientos de cabina.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
            "Representó uno de los autos más antiguos y asequibles para ciudadanos en la URSS",
            "Especialmente adaptado para caminos rurales de tierra",
            "Conocido por la alta resistencia de su chasis"
      ],
      "tags": [
            "posguerra",
            "compacto",
            "histórico"
      ]
}
  },
  "moskvich-402": {
    "de": {
      "display_name": "Moskwitsch-402",
      "description": "Die erste vollständig neue sowjetische Kompaktlimousine mit moderner Pontonkarosserie und verbesserter Aufhängung.",
      "class": "Kompaktklasse",
      "body_type": "Limousine",
      "facts": [
            "Erstes sowjetisches Volumenmodell mit einer gewölbten Panoramascheibe",
            "Verfügte serienmäßig über ein integriertes Röhrenradio",
            "Diente als technische Basis für wegweisende Varianten und Ableger"
      ],
      "tags": [
            "sedan",
            "kompakt",
            "klassiker"
      ]
},
    "es": {
      "display_name": "Moskvich-402",
      "description": "Un diseño moderno alejado de las copias de posguerra, introduciendo carrocería pontón y suspensión mejorada.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
            "Primer automóvil soviético equipado con parabrisas panorámico",
            "Introdujo un receptor de radio moderno como equipamiento estándar",
            "Sentó las bases para varios derivados muy exitosos"
      ],
      "tags": [
            "sedán",
            "compacto",
            "clásicos"
      ]
}
  },
  "moskvich-403": {
    "de": {
      "display_name": "Moskwitsch-403",
      "description": "Ein Übergangsmodell, das die klassische Karosserie des 407 mit den fortgeschrittenen Lenk- und Fahrwerksteilen des künftigen 408 verband.",
      "class": "Kompaktklasse",
      "body_type": "Limousine",
      "facts": [
            "Führte hängende statt der unpraktischen stehenden Bodenpedale ein",
            "Hatte als erstes Modell selbsttätige Scheibenwischer mit Rückholfunktion",
            "Erfolgreicher Export in kalte Klimazonen wegen robuster Heizungsleistung"
      ],
      "tags": [
            "uebergang",
            "kompakt",
            "klassiker"
      ]
},
    "es": {
      "display_name": "Moskvich-403",
      "description": "Un modelo de transición que combina la carrocería del 407 con los componentes de dirección del futuro 408.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
            "Introdujo pedales colgantes en lugar de los pedales en el piso",
            "Presentó limpiaparabrisas autocentrables actualizados",
            "Exportado con éxito gracias a su excelente calefacción para el invierno"
      ],
      "tags": [
            "transición",
            "compacto",
            "clásicos"
      ]
}
  },
  "moskvich-407": {
    "de": {
      "display_name": "Moskwitsch-407",
      "description": "Einer der erfolgreichsten Moskwitsch aller Zeiten, berühmt für seinen OHV-Motor und schicke Zweifarblackierungen.",
      "class": "Kompaktklasse",
      "body_type": "Limousine",
      "facts": [
            "Über 50% der gesamten Jahresproduktion gingen direkt in den Export",
            "Ausgezeichnet mit einer Goldmedaille auf der Brüsseler Weltausstellung 1958",
            "Startete erfolgreich bei anspruchsvollen europäischen Rundstrecken-Rallyes"
      ],
      "tags": [
            "klassiker",
            "export",
            "beliebt"
      ]
},
    "es": {
      "display_name": "Moskvich-407",
      "description": "Quizás el Moskvich de la primera generación de mayor éxito, que cuenta con motor OHV y pintura bitono de dos tonos.",
      "class": "compacto",
      "body_type": "sedán",
      "facts": [
            "Más del 50% de la producción anual se exportó al extranjero",
            "Galardonado con la medalla de oro en la Exposición Mundial de Bruselas de 1958",
            "Ampliamente utilizado en campeonatos europeos de rally"
      ],
      "tags": [
            "clásicos",
            "exportación",
            "popular"
      ]
}
  },
  "moskvich-410": {
    "de": {
      "display_name": "Moskwitsch-410",
      "description": "Ein einzigartiges sowjetisches hochbeiniges Allrad-Automobil mit klassischer Limousinen-Karosserie.",
      "class": "Kompakt-Allrad",
      "body_type": "Limousine",
      "facts": [
            "Im Grunde die allererste geländegängige Crossover-Pkw-Limousine der Welt",
            "Gebaut für Landärzte und Ingenieure in unwegsamen Regionen",
            "Hatte eine enorme Bodenfreiheit, war aber kurvenanfällig"
      ],
      "tags": [
            "offroad",
            "4x4",
            "einzigartig"
      ]
},
    "es": {
      "display_name": "Moskvich-410",
      "description": "Un automóvil de pasajeros soviético único con tracción en las cuatro ruedas y gran distancia al suelo.",
      "class": "vehículo todoterreno compacto",
      "body_type": "sedán",
      "facts": [
            "Esencialmente un sedán de pasajeros todoterreno 4x4",
            "Diseñado para médicos rurales y agrónomos",
            "Tenía un alto centro de gravedad pero un cruce de obstáculos excepcional"
      ],
      "tags": [
            "offroad",
            "4x4",
            "único"
      ]
}
  },
  "moskvich-423": {
    "de": {
      "display_name": "Moskwitsch-423",
      "description": "Der erste serienmäßige fünftürige Kombi-Personenkraftwagen der Sowjetunion.",
      "class": "Kompaktklasse",
      "body_type": "Kombi",
      "facts": [
            "Umklappbare Rückbank ermöglichte ein ebenes Laden von bis zu 250 kg Fracht",
            "War bei wohlhabenden Gartenbesitzern (Datscha-Besitzern) extrem begehrt",
            "Die Heckklappe öffnete sich ungewöhnlicherweise zur linken Wagenseite"
      ],
      "tags": [
            "kombi",
            "erster",
            "klassiker"
      ]
},
    "es": {
      "display_name": "Moskvich-423",
      "description": "La primera familiar de cinco puertas producida en serie en la Unión Soviética, construida sobre el Moskvich-402/407.",
      "class": "familiar compacta",
      "body_type": "familiar",
      "facts": [
            "El asiento trasero se plegaba para cargar hasta 250 kg de carga",
            "Muy apreciado por los jardineros y familias suburbanas",
            "La puerta trasera se abría hacia la izquierda, una orientación poco común"
      ],
      "tags": [
            "familiar",
            "primero",
            "clásicos"
      ]
}
  },
  "moskvich-426": {
    "de": {
      "display_name": "Moskwitsch-426",
      "description": "Der handliche Kombi auf der verjüngten Basis des Moskwietsch-408.",
      "class": "Kompaktklasse",
      "body_type": "Kombi",
      "facts": [
            "Frühe Serien besaßen eine ungewöhnliche horizontal geteilte Heckklappe",
            "Sehr beliebt im ländlichen sowjetischen Postzustellungsdienst",
            "Wichtiger Dienstwagen für die schnellen Zubringerdienste von Kliniken"
      ],
      "tags": [
            "kombi",
            "kompakt",
            "nutzfahrzeug"
      ]
},
    "es": {
      "display_name": "Moskvich-426",
      "description": "El modelo familiar hermano del Moskvich-408, con puerta trasera de dos piezas.",
      "class": "familiar compacto",
      "body_type": "familiar",
      "facts": [
            "Las primeras versiones tenían un diseño inusual de portón trasero dividido",
            "Ampliamente distribuido entre las redes postales soviéticas",
            "Excelente utilidad para las clínicas locales y periféricas"
      ],
      "tags": [
            "familiar",
            "compacto",
            "utilitario"
      ]
}
  },
  "moskvich-427": {
    "de": {
      "display_name": "Moskwitsch-427",
      "description": "Die leistungsstarke Kombi-Variante mit dem sportlichen Triebwerk des Moskwietsch-412.",
      "class": "Kompaktklasse",
      "body_type": "Kombi",
      "facts": [
            "Besitzt den modernen Aluminium-Motor mit obenliegender Nockenwelle",
            "Sehr erfolgreich auf skandinavischen und britischen Exportmärkten",
            "Überlegene Beschleunigung im Vergleich zu den Vorgängermodellen"
      ],
      "tags": [
            "kombi",
            "kompakt",
            "export"
      ]
},
    "es": {
      "display_name": "Moskvich-427",
      "description": "Una familiar de alto rendimiento que utilizaba el motor UZAM avanzado de la familia Moskvich-412.",
      "class": "familiar compacto",
      "body_type": "familiar",
      "facts": [
            "Equipado con un motor de bloque de aluminio con árbol de levas en culata de 1.5L",
            "Muy popular en varios mercados de exportación de Europa",
            "Aceleraba mucho más rápido que sus homólogos anteriores"
      ],
      "tags": [
            "familiar",
            "compacto",
            "exportación"
      ]
}
  },
  "moskvich-433": {
    "de": {
      "display_name": "Moskwitsch-433",
      "description": "Ein dreitüriger Ganzmetall-Lieferwagen auf Basis des bewährten 408-Fahrgestells.",
      "class": "Nutzfahrzeug",
      "body_type": "Kastenwagen",
      "facts": [
            "Geprägte Sicken auf den Seitenblechen dienten der Steifigkeit",
            "Eine Querwand schützte den Fahrerbereich vor wegrutschenden Kisten",
            "Ein fester Bestandteil des innerstädtischen Lieferverkehrs der 60er und 70er"
      ],
      "tags": [
            "nutzfahrzeug",
            "kastenwagen",
            "kommerziell"
      ]
},
    "es": {
      "display_name": "Moskvich-433",
      "description": "Un furgón de reparto metálico comercial de tres puertas basado en la plataforma del Moskvich-408.",
      "class": "furgón utilitario",
      "body_type": "furgoneta",
      "facts": [
            "Presentaba paneles laterales estriados para aumentar la resistencia",
            "Una pantalla de cabina dividía al conductor de las mercancías pesadas",
            "Un emblema clásico de las entregas minoristas de la Unión Soviética"
      ],
      "tags": [
            "utilitario",
            "furgoneta",
            "comercial"
      ]
}
  },
  "moskvich-434": {
    "de": {
      "display_name": "Moskwitsch-434",
      "description": "Der schnelle und modernisierte geschlossene Lieferwagen mit dem kräftigen 75-PS-Triebwerk.",
      "class": "Nutzfahrzeug",
      "body_type": "Kastenwagen",
      "facts": [
            "Entworfen für schnelle Paketlieferungen in verstopften Metropolen",
            "Eingesetzt von Rennsport-Teams als Servicefahrzeug für Rallyes",
            "Ausgestattet mit einer kürzeren, durchzugsstärkeren Hinterachsübersetzung"
      ],
      "tags": [
            "nutzfahrzeug",
            "kastenwagen",
            "kommerziell"
      ]
},
    "es": {
      "display_name": "Moskvich-434",
      "description": "El furgón comercial de alto rendimiento mejorado que presenta el robusto motor de 75 hp.",
      "class": "furgón utilitario",
      "body_type": "furgoneta",
      "facts": [
            "Diseñado para operaciones de entrega ágiles en distritos urbanos",
            "Muy solicitado en los equipos de asistencia de rally en Europa",
            "Equipado con un eje trasero de relación de transmisión baja especial"
      ],
      "tags": [
            "utilitario",
            "furgoneta",
            "comercial"
      ]
}
  },
  "zaz-966": {
    "de": {
      "display_name": "Saporoshez 966",
      "description": "Das europäisch gezeichnete kantige Modell der Saporoshez-Heckmotorfamilie mit den unverkennbaren Luftschaufeln.",
      "class": "Mikroauto",
      "body_type": "Limousine",
      "facts": [
            "Erhielt wegen der Luftansaugung den einprägsamen Spitznamen 'Das Ohren-Auto' (Ushastiy)",
            "Überzeugte durch eine robuste Allrad-Drehstabfederung aller Räder",
            "Die benzinbetriebene Heizung funktionierte auch bei abgestelltem Motor"
      ],
      "tags": [
            "mikroauto",
            "hintermotor",
            "wirtschaftlich"
      ]
},
    "es": {
      "display_name": "Zaporozhets 966",
      "description": "El Zaporozhets de segunda generación, de carrocería angulosa, tomas de aire laterales y tracción trasera.",
      "class": "microcoche",
      "body_type": "sedán",
      "facts": [
            "Apodado 'Ushastiy' (Orejón) por sus tomas de aire de refrigeración del motor",
            "Suspensión de barras de torsión independiente en las cuatro ruedas",
            "Calefactor de combustible integrado independiente del encendido del motor"
      ],
      "tags": [
            "microcoche",
            "motor trasero",
            "presupuesto"
      ]
}
  },
};

export const FACTORY_TRANSLATIONS: Record<string, { de: FactoryTranslation; es: FactoryTranslation }> = {
  "vaz": {
    "de": {
      "name": "VAZ",
      "description": "Volzhsky Avtomobilny Zavod, der Hauptproduzent von Personenkraftwagen in der Sowjetunion.",
      "city": "Tolyatti"
    },
    "es": {
      "name": "VAZ",
      "description": "Volzhsky Avtomobilny Zavod, el principal productor de automóviles de pasajeros en la Unión Soviética.",
      "city": "Tolyatti"
    }
  },
  "gaz": {
    "de": {
      "name": "GAZ",
      "description": "Gorkowski Automobilwerk, bekannt für repräsentative Limousinen und leichte Lastwagen.",
      "city": "Nischni Nowgorod"
    },
    "es": {
      "name": "GAZ",
      "description": "Fábrica de Automóviles de Gorki, conocida por sus sedanes ejecutivos y camiones ligeros.",
      "city": "Nizhni Nóvgorod"
    }
  },
  "azlk": {
    "de": {
      "name": "AZLK / Moskvich",
      "description": "Avtomobilny Zavod imeni Leninskogo Komsomola, Hersteller der Moskvich-Familie.",
      "city": "Moskau"
    },
    "es": {
      "name": "AZLK / Moskvich",
      "description": "Avtomobilny Zavod imeni Leninskogo Komsomola, productor de la familia Moskvich.",
      "city": "Moscú"
    }
  },
  "zaz": {
    "de": {
      "name": "ZAZ",
      "description": "Zaporizkyi Avtomobilnyi Zavod, spezialisiert auf Mikrowagen und Personentransport.",
      "city": "Saporischschja"
    },
    "es": {
      "name": "ZAZ",
      "description": "Zaporizkyi Avtomobilnyi Zavod, especializado en microcoches y transporte de personas.",
      "city": "Zaporiyia"
    }
  },
  "uaz": {
    "de": {
      "name": "UAZ",
      "description": "Ulyanovsky Avtomobilny Zavod, berühmt für robuste Geländewagen.",
      "city": "Uljanowsk"
    },
    "es": {
      "name": "UAZ",
      "description": "Ulyanovsky Avtomobilny Zavod, famoso por sus resistentes vehículos todoterreno.",
      "city": "Ulyanovsk"
    }
  },
  "zil": {
    "de": {
      "name": "ZIL / ZIS",
      "description": "Zavod imeni Likhachyova, Hersteller von Limousinen für die sowjetische Elite.",
      "city": "Moskau"
    },
    "es": {
      "name": "ZIL / ZIS",
      "description": "Zavod imeni Likhachyova, productor de limusinas para la élite soviética.",
      "city": "Moscú"
    }
  },
  "izh": {
    "de": {
      "name": "IZH",
      "description": "Izhevsk Mechanischer Betrieb, Hersteller von einzigartigen Liftbacks und Nutzfahrzeugen.",
      "city": "Ischewsk"
    },
    "es": {
      "name": "IZH",
      "description": "Planta Mecánica de Izhevsk, productor de liftbacks únicos y furgonetas de carga y pasajeros.",
      "city": "Izhevsk"
    }
  }
};
