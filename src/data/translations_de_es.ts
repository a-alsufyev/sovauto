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
  }
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
