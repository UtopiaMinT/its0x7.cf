let globalTerritories = {
    "Ragni": {
        "name": "Ragni",
        "startX": -955,
        "startZ": -1415,
        "endX": -756,
        "endZ": -1748,
        "output": {
            "emerald": 48600,
            "crop": 3600
        },
        "routes": [
            "Ragni Main Entrance",
            "Ragni North Entrance",
            "Pigmen Ravines Entrance"
        ]
    },
    "Emerald Trail": {
        "name": "Emerald Trail",
        "startX": -615,
        "startZ": -1530,
        "endX": -436,
        "endZ": -1652,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Maltic Plains",
            "Ragni Main Entrance",
            "Nivla Woods Entrance"
        ]
    },
    "Ragni North Entrance": {
        "name": "Ragni North Entrance",
        "startX": -944,
        "startZ": -1761,
        "endX": -818,
        "endZ": -1859,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Ragni North Suburbs",
            "Ragni",
            "Katoa Ranch"
        ]
    },
    "Ragni North Suburbs": {
        "name": "Ragni North Suburbs",
        "startX": -817,
        "startZ": -1859,
        "endX": -762,
        "endZ": -1761,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Katoa Ranch",
            "Ragni Plains",
            "Ragni North Entrance"
        ]
    },
    "Ragni Plains": {
        "name": "Ragni Plains",
        "startX": -747,
        "startZ": -1776,
        "endX": -605,
        "endZ": -1945,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Maltic",
            "Coastal Trail",
            "Ragni North Suburbs",
            "Ragni East Suburbs"
        ]
    },
    "Maltic Coast": {
        "name": "Maltic Coast",
        "startX": -564,
        "startZ": -2059,
        "endX": -400,
        "endZ": -1946,
        "output": {
            "fish": 7200,
            "emerald": 9000,
            "crop": 7200
        },
        "routes": [
            "South Farmers Valley",
            "Maltic",
            "Coastal Trail",
            "North Farmers Valley"
        ]
    },
    "Maltic Plains": {
        "name": "Maltic Plains",
        "startX": -564,
        "startZ": -1883,
        "endX": -436,
        "endZ": -1653,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Maltic",
            "Plains",
            "Ragni East Suburbs",
            "South Farmers Valley",
            "Emerald Trail"
        ]
    },
    "Pigmen Ravines Entrance": {
        "name": "Pigmen Ravines Entrance",
        "startX": -924,
        "startZ": -1398,
        "endX": -784,
        "endZ": -1307,
        "output": {
            "ore": 14400,
            "emerald": 9000
        },
        "routes": [
            "Pigmen Ravines",
            "Ragni",
            "South Pigmen Ravines"
        ]
    },
    "South Pigmen Ravines": {
        "name": "South Pigmen Ravines",
        "startX": -898,
        "startZ": -1298,
        "endX": -678,
        "endZ": -1221,
        "output": {
            "ore": 9600,
            "emerald": 9000
        },
        "routes": [
            "Little Wood",
            "Pigmen Ravines Entrance"
        ]
    },
    "Time Valley": {
        "name": "Time Valley",
        "startX": -563,
        "startZ": -1261,
        "endX": -406,
        "endZ": -1006,
        "output": {
            "wood": 9600,
            "emerald": 9000
        },
        "routes": [
            "Little Wood",
            "Elkurn Fields",
            "Abandoned Farm"
        ]
    },
    "Sanctuary Bridge": {
        "name": "Sanctuary Bridge",
        "startX": -324,
        "startZ": -1130,
        "endX": -192,
        "endZ": -993,
        "output": {
            "fish": 9600,
            "emerald": 9000
        },
        "routes": [
            "Time Valley",
            "Nesaak Plains Upper North West"
        ]
    },
    "Elkurn Fields": {
        "name": "Elkurn Fields",
        "startX": -357,
        "startZ": -1325,
        "endX": -99,
        "endZ": -1141,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "South Nivla Woods",
            "Elkurn",
            "Time Valley",
            "Road to Elkurn"
        ]
    },
    "Nivla Woods": {
        "name": "Nivla Woods",
        "startX": -325,
        "startZ": -1624,
        "endX": -196,
        "endZ": -1460,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Road to Time Valley",
            "South Nivla Woods",
            "Nivla Woods Entrance",
            "Nivla Woods Exit"
        ]
    },
    "South Nivla Woods": {
        "name": "South Nivla Woods",
        "startX": -350,
        "startZ": -1440,
        "endX": -99,
        "endZ": -1330,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "Road to Time Valley",
            "Nivla Woods",
            "Elkurn Fields",
            "Road to Elkurn",
            "Nivla Woods Exit"
        ]
    },
    "Elkurn": {
        "name": "Elkurn",
        "startX": -98,
        "startZ": -1250,
        "endX": 62,
        "endZ": -1080,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Corrupted Road",
            "Elkurn Fields",
            "Road to Elkurn",
            "Nesaak Plains Upper North West"
        ]
    },
    "Corrupted Road": {
        "name": "Corrupted Road",
        "startX": 22,
        "startZ": -1479,
        "endX": 96,
        "endZ": -1261,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Nether Plains Upper",
            "Elkurn",
            "Nether Gate",
            "Detlas Far Suburbs"
        ]
    },
    "Detlas Far Suburbs": {
        "name": "Detlas Far Suburbs",
        "startX": 29,
        "startZ": -1657,
        "endX": 188,
        "endZ": -1500,
        "output": {
            "ore": 14400,
            "fish": 14400,
            "wood": 14400,
            "crop": 14400
        },
        "routes": [
            "Corrupted Road",
            "Detlas Suburbs",
            "Nether Plains Upper",
            "Detlas Trail West Plains",
            "Nivla Woods Edge"
        ]
    },
    "Detlas Close Suburbs": {
        "name": "Detlas Close Suburbs",
        "startX": 300,
        "startZ": -1657,
        "endX": 389,
        "endZ": -1500,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Nether Plains Upper",
            "Detlas",
            "Detlas Suburbs",
            "Detlas Trail East Plains"
        ]
    },
    "South Farmers Valley": {
        "name": "South Farmers Valley",
        "startX": -472,
        "startZ": -1944,
        "endX": -255,
        "endZ": -1887,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Maltic",
            "Maltic Plains",
            "North Farmers Valley",
            "Plains",
            "Maltic Coast"
        ]
    },
    "Arachnid Route": {
        "name": "Arachnid Route",
        "startX": -261,
        "startZ": -1881,
        "endX": -109,
        "endZ": -1808,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "North Nivla Woods",
            "Nemract Plains West",
            "Plains"
        ]
    },
    "Tower of Ascension": {
        "name": "Tower of Ascension",
        "startX": -400,
        "startZ": -450,
        "endX": -315,
        "endZ": -330,
        "output": {
            "ore": 4500,
            "fish": 4500,
            "wood": 4500,
            "crop": 4500
        },
        "routes": [
            "Icy Descent"
        ]
    },
    "Mage Island": {
        "name": "Mage Island",
        "startX": 805,
        "startZ": -2960,
        "endX": 983,
        "endZ": -2787,
        "output": {
            "emerald": 36000,
            "crop": 3600
        },
        "routes": [
            "Durum Isles East",
            "Half Moon Island",
            "Santa's Hideout",
            "Durum Isles Upper"
        ]
    },
    "Twain Mansion": {
        "name": "Twain Mansion",
        "startX": 95,
        "startZ": -407,
        "endX": 140,
        "endZ": -310,
        "output": {
            "ore": 9000,
            "fish": 9000,
            "wood": 9000,
            "crop": 9000
        },
        "routes": [
            "Twain Lake"
        ]
    },
    "Nesaak Plains South East": {
        "name": "Nesaak Plains South East",
        "startX": 76,
        "startZ": -757,
        "endX": 230,
        "endZ": -660,
        "output": {
            "wood": 3600,
            "emerald": 12150
        },
        "routes": [
            "Nesaak Village",
            "Bob's Tomb",
            "Nesaak Plains South West"
        ]
    },
    "Nesaak Plains North East": {
        "name": "Nesaak Plains North East",
        "startX": 110,
        "startZ": -873,
        "endX": 240,
        "endZ": -1035,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "Nesaak Transition",
            "Bob's Tomb",
            "Nesaak Plains Lower North West",
            "Nesaak Village",
            "Nesaak Plains Upper North West"
        ]
    },
    "Nesaak Plains Upper North West": {
        "name": "Nesaak Plains Upper North West",
        "startX": 70,
        "startZ": -950,
        "endX": -140,
        "endZ": -1060,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Sanctuary Bridge",
            "Elkurn",
            "Nesaak Plains Lower North West",
            "Nesaak Plains North East",
            "Nesaak Plains Mid North West"
        ]
    },
    "Nesaak Bridge Transition": {
        "name": "Nesaak Bridge Transition",
        "startX": -115,
        "startZ": -630,
        "endX": -240,
        "endZ": -780,
        "output": {
            "wood": 3600,
            "emerald": 12150
        },
        "routes": [
            "Nesaak Plains South West",
            "Great Bridge Nesaak"
        ]
    },
    "Great Bridge Nesaak": {
        "name": "Great Bridge Nesaak",
        "startX": -275,
        "startZ": -620,
        "endX": -390,
        "endZ": -790,
        "output": {
            "ore": 43200,
            "emerald": 12150
        },
        "routes": [
            "Nesaak Bridge Transition",
            "Great Bridge Jungle"
        ]
    },
    "Jungle Lower": {
        "name": "Jungle Lower",
        "startX": -515,
        "startZ": -610,
        "endX": -600,
        "endZ": -790,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Jungle Mid",
            "Dernel Jungle Lower",
            "Great Bridge Jungle"
        ]
    },
    "Jungle Upper": {
        "name": "Jungle Upper",
        "startX": -671,
        "startZ": -779,
        "endX": -810,
        "endZ": -630,
        "output": {
            "ore": 12600,
            "fish": 12600,
            "wood": 12600,
            "crop": 12600
        },
        "routes": [
            "Jungle Mid"
        ]
    },
    "Temple of Legends": {
        "name": "Temple of Legends",
        "startX": -631,
        "startZ": -973,
        "endX": -745,
        "endZ": -1093,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Jungle Lake",
            "City of Troms"
        ]
    },
    "Rymek East Lower": {
        "name": "Rymek East Lower",
        "startX": 1210,
        "startZ": -1270,
        "endX": 1400,
        "endZ": -1390,
        "owner": "Ultra Violet",
        "output": {
            "ore": 18000,
            "emerald": 24300
        },
        "routes": [
            "Rymek East Mid",
            "Rymek West Lower"
        ],
        "stored": {
            "ore": [
                189,
                500
            ],
            "fish": [
                16,
                500
            ],
            "wood": [
                50,
                500
            ],
            "emerald": [
                582,
                20000
            ],
            "crop": [
                136,
                500
            ]
        },
        "hq": false,
        "id": "z/-1248393294"
    },
    "Rymek East Upper": {
        "name": "Rymek East Upper",
        "startX": 1479,
        "startZ": -1579,
        "endX": 1210,
        "endZ": -1780,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert East Lower",
            "Rymek East Mid",
            "Rymek West Upper"
        ]
    },
    "Rymek West Mid": {
        "name": "Rymek West Mid",
        "startX": 1211,
        "startZ": -1410,
        "endX": 1000,
        "endZ": -1530,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Rymek East Mid",
            "Rymek West Lower",
            "Rymek West Upper"
        ]
    },
    "Desert East Upper": {
        "name": "Desert East Upper",
        "startX": 1260,
        "startZ": -2170,
        "endX": 1450,
        "endZ": -2370,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert East Mid"
        ]
    },
    "Desert East Lower": {
        "name": "Desert East Lower",
        "startX": 1450,
        "startZ": -2020,
        "endX": 1270,
        "endZ": -1785,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert East Mid",
            "Rymek East Upper",
            "Desert Mid-Lower"
        ]
    },
    "Desert Mid-Upper": {
        "name": "Desert Mid-Upper",
        "startX": 1195,
        "startZ": -2120,
        "endX": 1060,
        "endZ": -1935,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert Upper",
            "Almuj City",
            "Desert East Mid",
            "Desert Mid-Lower"
        ]
    },
    "Desert Lower": {
        "name": "Desert Lower",
        "startX": 1210,
        "startZ": -1810,
        "endX": 1040,
        "endZ": -1680,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert West Lower",
            "Rymek West Upper",
            "Desert Mid-Lower"
        ]
    },
    "Mummy's Tomb": {
        "name": "Mummy's Tomb",
        "startX": 990,
        "startZ": -2270,
        "endX": 1120,
        "endZ": -2400,
        "output": {
            "emerald": 9000,
            "crop": 7200
        },
        "routes": [
            "Desert Upper"
        ]
    },
    "Desert West Lower": {
        "name": "Desert West Lower",
        "startX": 1040,
        "startZ": -1681,
        "endX": 900,
        "endZ": -1870,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert Mid-Lower",
            "Almuj City",
            "Desert Lower"
        ]
    },
    "Savannah East Upper": {
        "name": "Savannah East Upper",
        "startX": 750,
        "startZ": -2060,
        "endX": 820,
        "endZ": -1895,
        "output": {
            "emerald": 24300,
            "crop": 7200
        },
        "routes": [
            "Almuj City",
            "Savannah West Upper",
            "Savannah East Lower"
        ]
    },
    "Savannah West Upper": {
        "name": "Savannah West Upper",
        "startX": 750,
        "startZ": -2060,
        "endX": 570,
        "endZ": -1870,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Cathedral Harbour",
            "Savannah West Lower",
            "Bremminglar",
            "Savannah East Upper"
        ]
    },
    "Lion Lair": {
        "name": "Lion Lair",
        "startX": 890,
        "startZ": -2140,
        "endX": 790,
        "endZ": -2320,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "Bremminglar"
        ]
    },
    "Plains Coast": {
        "name": "Plains Coast",
        "startX": 5,
        "startZ": -2270,
        "endX": -320,
        "endZ": -2090,
        "output": {
            "fish": 9600,
            "emerald": 9000
        },
        "routes": [
            "Nemract Quarry",
            "North Farmers Valley",
            "Nemract Town"
        ]
    },
    "Nemract Plains West": {
        "name": "Nemract Plains West",
        "startX": 5,
        "startZ": -1960,
        "endX": -100,
        "endZ": -1810,
        "output": {
            "emerald": 9000,
            "crop": 5400
        },
        "routes": [
            "Nivla Woods Edge",
            "Nemract Quarry",
            "Arachnid Route",
            "Nemract Road"
        ]
    },
    "Ancient Nemract": {
        "name": "Ancient Nemract",
        "startX": 152,
        "startZ": -1832,
        "endX": 290,
        "endZ": -1999,
        "output": {
            "emerald": 9000,
            "crop": 5400
        },
        "routes": [
            "Cathedral Harbour",
            "Nemract Road",
            "Nemract Cathedral",
            "Detlas Trail West Plains",
            "Detlas Trail East Plains"
        ]
    },
    "Cathedral Harbour": {
        "name": "Cathedral Harbour",
        "startX": 385,
        "startZ": -2180,
        "endX": 570,
        "endZ": -1950,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Durum Isles East",
            "Durum Isles Lower",
            "Savannah West Upper",
            "Ancient Nemract",
            "Nemract Cathedral"
        ]
    },
    "Rooster Island": {
        "name": "Rooster Island",
        "startX": -128,
        "startZ": -2448,
        "endX": -30,
        "endZ": -2538,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Selchar",
            "The Bear Zoo",
            "Nemract Town",
            "Durum Isles Lower"
        ]
    },
    "Selchar": {
        "name": "Selchar",
        "startX": -100,
        "startZ": -3070,
        "endX": 210,
        "endZ": -3270,
        "output": {
            "fish": 3600,
            "emerald": 288000
        },
        "routes": [
            "Durum Isles Center",
            "Rooster Island",
            "Durum Isles Upper",
            "Skiens Island",
            "Durum Isles Lower"
        ]
    },
    "Durum Isles Upper": {
        "name": "Durum Isles Upper",
        "startX": 537,
        "startZ": -2994,
        "endX": 595,
        "endZ": -2924,
        "output": {
            "emerald": 9000,
            "crop": 43200
        },
        "routes": [
            "Selchar",
            "Durum Isles Center",
            "Mage Island",
            "Nodguj Nation"
        ]
    },
    "Durum Isles Lower": {
        "name": "Durum Isles Lower",
        "startX": 390,
        "startZ": -2851,
        "endX": 347,
        "endZ": -2791,
        "output": {
            "wood": 36000,
            "emerald": 18000
        },
        "routes": [
            "Rooster Island",
            "Selchar",
            "Durum Isles Center"
        ]
    },
    "Skiens Island": {
        "name": "Skiens Island",
        "startX": 527,
        "startZ": -3386,
        "endX": 297,
        "endZ": -3644,
        "output": {
            "ore": 36000,
            "emerald": 18000
        },
        "routes": [
            "Selchar",
            "Nodguj Nation",
            "Dead Island South West",
            "Maro Peaks"
        ]
    },
    "Nodguj Nation": {
        "name": "Nodguj Nation",
        "startX": 695,
        "startZ": -3210,
        "endX": 880,
        "endZ": -3440,
        "output": {
            "fish": 7200,
            "emerald": 16200
        },
        "routes": [
            "Dujgon Nation",
            "Santa's Hideout",
            "Mage Island",
            "Icy Island",
            "Skiens Island"
        ]
    },
    "Dead Island South East": {
        "name": "Dead Island South East",
        "startX": 870,
        "startZ": -3920,
        "endX": 1000,
        "endZ": -3810,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Dujgon Nation",
            "Regular Island",
            "Dead Island South West",
            "Dead Island North East"
        ]
    },
    "Dead Island South West": {
        "name": "Dead Island South West",
        "startX": 870,
        "startZ": -3920,
        "endX": 745,
        "endZ": -3810,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Dead Island South East",
            "Dujgon Nation",
            "Dead Island North West",
            "Skiens Island"
        ]
    },
    "Volcano Upper": {
        "name": "Volcano Upper",
        "startX": -929,
        "startZ": -3831,
        "endX": -722,
        "endZ": -3530,
        "output": {
            "ore": 28800,
            "emerald": 9000
        },
        "routes": [
            "Tree Island",
            "Pirate Town",
            "Lost Atoll",
            "Volcano Lower"
        ]
    },
    "Tree Island": {
        "name": "Tree Island",
        "startX": -454,
        "startZ": -3905,
        "endX": -323,
        "endZ": -3766,
        "output": {
            "wood": 18000,
            "emerald": 9000
        },
        "routes": [
            "Volcano Upper",
            "Lost Atoll"
        ]
    },
    "Ternaves Plains Upper": {
        "name": "Ternaves Plains Upper",
        "startX": 770,
        "startZ": -1675,
        "endX": 655,
        "endZ": -1430,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Ternaves",
            "Detlas Savannah Transition",
            "Ternaves Plains Lower",
            "Savannah West Lower"
        ]
    },
    "Mining Base Upper": {
        "name": "Mining Base Upper",
        "startX": 880,
        "startZ": -1330,
        "endX": 670,
        "endZ": -1225,
        "output": {
            "ore": 43200,
            "emerald": 9000
        },
        "routes": [
            "Mining Base Lower",
            "Abandoned Pass",
            "Ternaves Plains Lower"
        ]
    },
    "Nesaak Transition": {
        "name": "Nesaak Transition",
        "startX": 330,
        "startZ": -1040,
        "endX": 75,
        "endZ": -1145,
        "output": {
            "emerald": 9000,
            "crop": 7200
        },
        "routes": [
            "Desolate Valley",
            "Elkurn",
            "Nether Plains Lower",
            "Nesaak Plains North East"
        ]
    },
    "Nether Plains Lower": {
        "name": "Nether Plains Lower",
        "startX": 75,
        "startZ": -1145,
        "endX": 325,
        "endZ": -1210,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Elkurn",
            "Desolate Valley",
            "Nesaak Transition",
            "Nether Gate"
        ]
    },
    "Mine Base Plains": {
        "name": "Mine Base Plains",
        "startX": 550,
        "startZ": -1190,
        "endX": 650,
        "endZ": -1430,
        "output": {
            "emerald": 9000,
            "crop": 7200
        },
        "routes": [
            "Mining Base Lower",
            "Plains Lake",
            "Ternaves Plains Lower",
            "The Silent Road",
            "Mining Base Upper"
        ]
    },
    "Nether Plains Upper": {
        "name": "Nether Plains Upper",
        "startX": 115,
        "startZ": -1360,
        "endX": 390,
        "endZ": -1495,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Plains Lake",
            "Detlas Suburbs",
            "Corrupted Road",
            "Nether Gate",
            "Detlas Far Suburbs",
            "Detlas Close Suburbs"
        ]
    },
    "Detlas Trail West Plains": {
        "name": "Detlas Trail West Plains",
        "startX": 25,
        "startZ": -1660,
        "endX": 200,
        "endZ": -1800,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Detlas Suburbs",
            "Nemract Plains East",
            "Ancient Nemract",
            "Detlas Far Suburbs"
        ]
    },
    "Llevigar Gate East": {
        "name": "Llevigar Gate East",
        "startX": -1932,
        "startZ": -4648,
        "endX": -2059,
        "endZ": -4746,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Llevigar Gate West",
            "Llevigar",
            "Llevigar Farm Plains East",
            "Orc Road"
        ]
    },
    "Llevigar Farm Plains East": {
        "name": "Llevigar Farm Plains East",
        "startX": -2059,
        "startZ": -4747,
        "endX": -1931,
        "endZ": -4828,
        "output": {
            "emerald": 16200,
            "crop": 43200
        },
        "routes": [
            "Llevigar Farm Plains West",
            "Orc Road",
            "Llevigar Gate East",
            "Llevigar Plains East Lower"
        ]
    },
    "Hive": {
        "name": "Hive",
        "startX": 381,
        "startZ": -5413,
        "endX": 286,
        "endZ": -5593,
        "output": {
            "emerald": 9000,
            "crop": 36000
        },
        "routes": [
            "Hive South",
            "Thanos Exit Upper"
        ]
    },
    "Llevigar Plains East Lower": {
        "name": "Llevigar Plains East Lower",
        "startX": -2059,
        "startZ": -4831,
        "endX": -1937,
        "endZ": -4909,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Orc Lake",
            "Llevigar Plains East Upper",
            "Llevigar Plains West Lower",
            "Llevigar Farm Plains East"
        ]
    },
    "Llevigar Plains West Upper": {
        "name": "Llevigar Plains West Upper",
        "startX": -2060,
        "startZ": -4912,
        "endX": -2171,
        "endZ": -5000,
        "output": {
            "wood": 36000,
            "emerald": 9000
        },
        "routes": [
            "Swamp West Lower",
            "Llevigar Plains East Upper",
            "Llevigar Plains West Lower"
        ]
    },
    "Swamp West Lower": {
        "name": "Swamp West Lower",
        "startX": -2060,
        "startZ": -5003,
        "endX": -2171,
        "endZ": -5075,
        "output": {
            "ore": 72000,
            "emerald": 9000
        },
        "routes": [
            "Swamp West Mid",
            "Llevigar Plains West Upper",
            "Swamp East Lower"
        ]
    },
    "Swamp East Mid": {
        "name": "Swamp East Mid",
        "startX": -1955,
        "startZ": -5081,
        "endX": -2059,
        "endZ": -5186,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp East Mid-Upper",
            "Swamp West Mid",
            "Swamp Mountain Base",
            "Swamp East Lower"
        ]
    },
    "Swamp West Mid-Upper": {
        "name": "Swamp West Mid-Upper",
        "startX": -2171,
        "startZ": -5190,
        "endX": -2060,
        "endZ": -5309,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Swamp East Mid-Upper",
            "Swamp West Mid",
            "Swamp West Upper"
        ]
    },
    "Swamp West Upper": {
        "name": "Swamp West Upper",
        "startX": -2171,
        "startZ": -5312,
        "endX": -2060,
        "endZ": -5419,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp West Mid-Upper",
            "Swamp Mountain Transition Mid",
            "Swamp Mountain Transition Mid-Upper",
            "Swamp East Upper"
        ]
    },
    "Swamp Dark Forest Transition Lower": {
        "name": "Swamp Dark Forest Transition Lower",
        "startX": -1519,
        "startZ": -5134,
        "endX": -1631,
        "endZ": -5288,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Entrance to Olux",
            "Swamp Lower",
            "Fortress North",
            "Forgotten Path",
            "Swamp Dark Forest Transition Mid",
            "Fortress South"
        ]
    },
    "Swamp Dark Forest Transition Upper": {
        "name": "Swamp Dark Forest Transition Upper",
        "startX": -1519,
        "startZ": -5492,
        "endX": -1626,
        "endZ": -5607,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp Dark Forest Transition Mid",
            "Olux",
            "Taproot Descent"
        ]
    },
    "Entrance to Olux": {
        "name": "Entrance to Olux",
        "startX": -1649,
        "startZ": -5246,
        "endX": -1764,
        "endZ": -5396,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp Lower",
            "Olux",
            "Swamp Dark Forest Transition Lower",
            "Swamp Plains Basin",
            "Swamp Dark Forest Transition Mid"
        ]
    },
    "Swamp Mountain Base": {
        "name": "Swamp Mountain Base",
        "startX": -1776,
        "startZ": -5134,
        "endX": -1898,
        "endZ": -5240,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Sunspark Camp",
            "Swamp Lower",
            "Swamp East Mid",
            "Swamp Plains Basin"
        ]
    },
    "Swamp Mountain Transition Lower": {
        "name": "Swamp Mountain Transition Lower",
        "startX": -2173,
        "startZ": -5466,
        "endX": -2128,
        "endZ": -5603,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Swamp Mountain Transition Mid"
        ]
    },
    "Swamp Mountain Transition Mid-Upper": {
        "name": "Swamp Mountain Transition Mid-Upper",
        "startX": -2065,
        "startZ": -5466,
        "endX": -1982,
        "endZ": -5603,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Swamp Mountain Transition Mid",
            "Swamp Mountain Transition Upper",
            "Swamp East Upper"
        ]
    },
    "Quartz Mines South West": {
        "name": "Quartz Mines South West",
        "startX": -1776,
        "startZ": -4352,
        "endX": -1609,
        "endZ": -4524,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Quartz Mines South East",
            "Llevigar",
            "Quartz Mines North West"
        ]
    },
    "Quartz Mines North West": {
        "name": "Quartz Mines North West",
        "startX": -1776,
        "startZ": -4664,
        "endX": -1609,
        "endZ": -4526,
        "output": {
            "ore": 43200,
            "emerald": 9000
        },
        "routes": [
            "Llevigar Farm",
            "Loamsprout Camp",
            "Quartz Mines South West",
            "Quartz Mines North East"
        ]
    },
    "Sunspark Camp": {
        "name": "Sunspark Camp",
        "startX": -1930,
        "startZ": -5099,
        "endX": -1816,
        "endZ": -4968,
        "output": {
            "ore": 36000,
            "emerald": 9000
        },
        "routes": [
            "Orc Lake",
            "Llevigar Plains East Upper",
            "Swamp Mountain Base",
            "Swamp East Lower",
            "Meteor Crater"
        ]
    },
    "Orc Road": {
        "name": "Orc Road",
        "startX": -1927,
        "startZ": -4852,
        "endX": -1815,
        "endZ": -4700,
        "output": {
            "ore": 36000,
            "emerald": 9000
        },
        "routes": [
            "Orc Lake",
            "Llevigar Farm Plains East",
            "Loamsprout Camp"
        ]
    },
    "Sablestone Camp": {
        "name": "Sablestone Camp",
        "startX": -1800,
        "startZ": -4962,
        "endX": -1695,
        "endZ": -4854,
        "output": {
            "ore": 3600,
            "emerald": 16200
        },
        "routes": [
            "Orc Lake",
            "Goblin Plains West",
            "Meteor Crater",
            "Loamsprout Camp"
        ]
    },
    "Iron Road": {
        "name": "Iron Road",
        "startX": -1688,
        "startZ": -5099,
        "endX": -1608,
        "endZ": -4969,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp Lower",
            "Forgotten Path",
            "Goblin Plains West",
            "Meteor Crater"
        ]
    },
    "Llevigar Farm": {
        "name": "Llevigar Farm",
        "startX": -1663,
        "startZ": -4849,
        "endX": -1556,
        "endZ": -4714,
        "output": {
            "emerald": 144000,
            "crop": 50400
        },
        "routes": [
            "Quartz Mines North East",
            "Goblin Plains West",
            "Goblin Plains East",
            "Pre-Light Forest Transition",
            "Quartz Mines North West",
            "Loamsprout Camp"
        ]
    },
    "Goblin Plains East": {
        "name": "Goblin Plains East",
        "startX": -1603,
        "startZ": -4963,
        "endX": -1527,
        "endZ": -4853,
        "output": {
            "emerald": 12150,
            "crop": 50400
        },
        "routes": [
            "Goblin Plains West",
            "Forgotten Path",
            "Llevigar Farm",
            "Pre-Light Forest Transition"
        ]
    },
    "Leadin Fortress": {
        "name": "Leadin Fortress",
        "startX": -1403,
        "startZ": -4869,
        "endX": -1284,
        "endZ": -4748,
        "output": {
            "ore": 36000,
            "emerald": 24000
        },
        "routes": [
            "Pre-Light Forest Transition",
            "Road To Light Forest",
            "Orc Battlegrounds"
        ]
    },
    "Efilim Village": {
        "name": "Efilim Village",
        "startX": -1020,
        "startZ": -4943,
        "endX": -1134,
        "endZ": -5078,
        "output": {
            "ore": 36000,
            "emerald": 24300
        },
        "routes": [
            "Efilim East Plains",
            "Efilim South Plains",
            "Twisted Housing"
        ]
    },
    "Efilim East Plains": {
        "name": "Efilim East Plains",
        "startX": -1014,
        "startZ": -4944,
        "endX": -949,
        "endZ": -5079,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Efilim South East Plains",
            "Efilim Village"
        ]
    },
    "Light Forest North Entrance": {
        "name": "Light Forest North Entrance",
        "startX": -1134,
        "startZ": -4708,
        "endX": -1030,
        "endZ": -4845,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest Entrance",
            "Light Forest West Upper",
            "Efilim South Plains"
        ]
    },
    "Light Forest South Entrance": {
        "name": "Light Forest South Entrance",
        "startX": -1134,
        "startZ": -4548,
        "endX": -1038,
        "endZ": -4426,
        "output": {
            "ore": 9000,
            "fish": 9000,
            "wood": 9000,
            "crop": 9000
        },
        "routes": [
            "Heavenly Ingress",
            "Light Forest West Lower",
            "Light Forest Entrance"
        ]
    },
    "Light Forest South Exit": {
        "name": "Light Forest South Exit",
        "startX": -646,
        "startZ": -4699,
        "endX": -733,
        "endZ": -4559,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest North Exit",
            "Mantis Nest"
        ]
    },
    "Light Forest West Lower": {
        "name": "Light Forest West Lower",
        "startX": -1014,
        "startZ": -4428,
        "endX": -929,
        "endZ": -4549,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Hobbit River",
            "Light Forest West Mid",
            "Light Forest South Entrance"
        ]
    },
    "Light Forest West Upper": {
        "name": "Light Forest West Upper",
        "startX": -1014,
        "startZ": -4708,
        "endX": -935,
        "endZ": -4845,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest North Entrance",
            "Light Forest East Mid",
            "Light Forest West Mid",
            "Efilim South East Plains"
        ]
    },
    "Light Forest East Mid": {
        "name": "Light Forest East Mid",
        "startX": -834,
        "startZ": -4839,
        "endX": -926,
        "endZ": -4708,
        "output": {
            "fish": 36000,
            "emerald": 24300
        },
        "routes": [
            "Light Forest East Lower",
            "Light Forest Canyon",
            "Light Forest West Upper"
        ]
    },
    "Hobbit River": {
        "name": "Hobbit River",
        "startX": -926,
        "startZ": -4550,
        "endX": -806,
        "endZ": -4428,
        "output": {
            "ore": 36000,
            "emerald": 24300
        },
        "routes": [
            "Light Forest East Lower",
            "Aldorei Valley West Entrance",
            "Light Forest West Lower"
        ]
    },
    "Light Forest Canyon": {
        "name": "Light Forest Canyon",
        "startX": -738,
        "startZ": -4708,
        "endX": -818,
        "endZ": -4840,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest East Mid",
            "Light Forest North Exit",
            "Mantis Nest"
        ]
    },
    "Lone Farmstead": {
        "name": "Lone Farmstead",
        "startX": -942,
        "startZ": -5227,
        "endX": -1050,
        "endZ": -5116,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Gelibord",
            "Abandoned Manor",
            "Twisted Housing"
        ]
    },
    "Gelibord Corrupted Farm": {
        "name": "Gelibord Corrupted Farm",
        "startX": -1056,
        "startZ": -5355,
        "endX": -1179,
        "endZ": -5448,
        "output": {
            "emerald": 9000,
            "crop": 14400
        },
        "routes": [
            "Gelibord Castle",
            "Gelibord",
            "Taproot Descent",
            "Twisted Housing"
        ]
    },
    "Taproot Descent": {
        "name": "Taproot Descent",
        "startX": -1425,
        "startZ": -5407,
        "endX": -1194,
        "endZ": -5589,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Gelibord Castle",
            "Swamp Dark Forest Transition Upper",
            "Gelibord Corrupted Farm",
            "Fortress North",
            "Swamp Dark Forest Transition Mid"
        ]
    },
    "Fortress South": {
        "name": "Fortress South",
        "startX": -1460,
        "startZ": -5025,
        "endX": -1272,
        "endZ": -5210,
        "output": {
            "wood": 36000,
            "emerald": 9000
        },
        "routes": [
            "Mansion of Insanity",
            "Fortress North",
            "Swamp Dark Forest Transition Lower",
            "Orc Battlegrounds"
        ]
    },
    "Twisted Housing": {
        "name": "Twisted Housing",
        "startX": -1133,
        "startZ": -5116,
        "endX": -1053,
        "endZ": -5272,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Mansion of Insanity",
            "Gelibord Corrupted Farm",
            "Efilim Village",
            "Lone Farmstead",
            "Gelibord"
        ]
    },
    "Viscera Pits West": {
        "name": "Viscera Pits West",
        "startX": -771,
        "startZ": -5504,
        "endX": -899,
        "endZ": -5412,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Lexdales Prison",
            "Viscera Pits East",
            "Twisted Ridge",
            "Entrance to Kander"
        ]
    },
    "Abandoned Manor": {
        "name": "Abandoned Manor",
        "startX": -896,
        "startZ": -5232,
        "endX": -802,
        "endZ": -5102,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Mesquis Tower",
            "Kander Mines",
            "Lone Farmstead",
            "Entrance to Kander"
        ]
    },
    "Kander Mines": {
        "name": "Kander Mines",
        "startX": -785,
        "startZ": -5229,
        "endX": -725,
        "endZ": -5102,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Abandoned Manor",
            "Dark Forest Village",
            "Mesquis Tower",
            "Path to Talor"
        ]
    },
    "Viscera Pits East": {
        "name": "Viscera Pits East",
        "startX": -659,
        "startZ": -5424,
        "endX": -766,
        "endZ": -5508,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Viscera Pits West",
            "Lexdale",
            "Path to Talor"
        ]
    },
    "Old Crossroads South": {
        "name": "Old Crossroads South",
        "startX": -648,
        "startZ": -5311,
        "endX": -567,
        "endZ": -5234,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Dark Forest Village",
            "Fungal Grove",
            "Cinfras Outskirts",
            "Path to Talor",
            "Old Crossroads North"
        ]
    },
    "Lexdale": {
        "name": "Lexdale",
        "startX": -650,
        "startZ": -5511,
        "endX": -562,
        "endZ": -5406,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Heart of Decay",
            "Viscera Pits East",
            "Old Crossroads North",
            "Decayed Basin"
        ]
    },
    "Decayed Basin": {
        "name": "Decayed Basin",
        "startX": -471,
        "startZ": -5405,
        "endX": -549,
        "endZ": -5512,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Mushroom Hill",
            "Lexdale",
            "Fungal Grove",
            "Heart of Decay"
        ]
    },
    "Cinfras Entrance": {
        "name": "Cinfras Entrance",
        "startX": -555,
        "startZ": -4996,
        "endX": -717,
        "endZ": -4868,
        "output": {
            "wood": 3600,
            "emerald": 36000
        },
        "routes": [
            "Light Forest North Exit",
            "Path to Cinfras",
            "Cinfras",
            "Mesquis Tower"
        ]
    },
    "Fallen Village": {
        "name": "Fallen Village",
        "startX": -288,
        "startZ": -5409,
        "endX": -392,
        "endZ": -5294,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Dark Forest Cinfras Transition",
            "Mushroom Hill",
            "Fungal Grove",
            "Gylia Lake North West"
        ]
    },
    "Guild Hall": {
        "name": "Guild Hall",
        "startX": -349,
        "startZ": -5093,
        "endX": -137,
        "endZ": -4814,
        "output": {
            "ore": 36000,
            "emerald": 36000
        },
        "routes": [
            "Cinfras"
        ]
    },
    "Cinfras's Small Farm": {
        "name": "Cinfras's Small Farm",
        "startX": -224,
        "startZ": -4793,
        "endX": -130,
        "endZ": -4643,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Cinfras County Mid-Lower",
            "Aldorei Lowlands",
            "Aldorei Valley South Entrance",
            "Cinfras County Lower"
        ]
    },
    "Cinfras County Mid-Lower": {
        "name": "Cinfras County Mid-Lower",
        "startX": -127,
        "startZ": -4761,
        "endX": 3,
        "endZ": -4895,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Cinfras County Mid-Upper",
            "Cinfras County Lower",
            "Cinfras's Small Farm"
        ]
    },
    "Cinfras County Upper": {
        "name": "Cinfras County Upper",
        "startX": -127,
        "startZ": -5155,
        "endX": 3,
        "endZ": -5051,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Path To Thanos",
            "Cinfras County Mid-Upper",
            "Gylia Lake South East"
        ]
    },
    "Gylia Lake South West": {
        "name": "Gylia Lake South West",
        "startX": -130,
        "startZ": -5173,
        "endX": -241,
        "endZ": -5271,
        "output": {
            "fish": 14400,
            "emerald": 9000
        },
        "routes": [
            "Dark Forest Cinfras Transition",
            "Gylia Lake South East",
            "Gylia Lake North West"
        ]
    },
    "Gylia Lake North East": {
        "name": "Gylia Lake North East",
        "startX": -128,
        "startZ": -5416,
        "endX": 21,
        "endZ": -5273,
        "output": {
            "fish": 14400,
            "emerald": 9000
        },
        "routes": [
            "Gylia Lake South East",
            "Military Base",
            "Gylia Lake North West",
            "Gert Camp"
        ]
    },
    "Jitak's Farm": {
        "name": "Jitak's Farm",
        "startX": -122,
        "startZ": -5430,
        "endX": -218,
        "endZ": -5567,
        "output": {
            "emerald": 9000,
            "crop": 14400
        },
        "routes": [
            "Gert Camp",
            "Mushroom Hill",
            "Gylia Lake North West"
        ]
    },
    "Aldorei Valley Mid": {
        "name": "Aldorei Valley Mid",
        "startX": -322,
        "startZ": -4499,
        "endX": -557,
        "endZ": -4395,
        "output": {
            "emerald": 24300,
            "crop": 36000
        },
        "routes": [
            "Aldorei Valley Lower",
            "Aldorei Valley Upper"
        ]
    },
    "Aldorei's River": {
        "name": "Aldorei's River",
        "startX": -437,
        "startZ": -4656,
        "endX": -338,
        "endZ": -4756,
        "output": {
            "wood": 3600,
            "emerald": 24000
        },
        "routes": [
            "Aldorei Lowlands",
            "Cinfras"
        ]
    },
    "Aldorei's North Exit": {
        "name": "Aldorei's North Exit",
        "startX": -127,
        "startZ": -4639,
        "endX": 3,
        "endZ": -4509,
        "output": {
            "ore": 9000,
            "fish": 9000,
            "wood": 9000,
            "crop": 9000
        },
        "routes": [
            "Aldorei Valley South Entrance",
            "Path To The Arch",
            "Cinfras County Lower"
        ]
    },
    "Path To The Arch": {
        "name": "Path To The Arch",
        "startX": 35,
        "startZ": -4521,
        "endX": 107,
        "endZ": -4641,
        "output": {
            "ore": 5400,
            "emerald": 9000
        },
        "routes": [
            "Aldorei's Arch",
            "Aldorei's North Exit",
            "Ghostly Path"
        ]
    },
    "Burning Farm": {
        "name": "Burning Farm",
        "startX": 107,
        "startZ": -4755,
        "endX": 35,
        "endZ": -4857,
        "output": {
            "ore": 5400,
            "emerald": 9000
        },
        "routes": [
            "Burning Airship",
            "Ghostly Path"
        ]
    },
    "Cinfras Thanos Transition": {
        "name": "Cinfras Thanos Transition",
        "startX": 98,
        "startZ": -4957,
        "endX": 35,
        "endZ": -5046,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Path To Thanos",
            "Cinfras County Mid-Upper",
            "Burning Airship"
        ]
    },
    "Path To Thanos": {
        "name": "Path To Thanos",
        "startX": 98,
        "startZ": -5049,
        "endX": 35,
        "endZ": -5149,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thanos",
            "Cinfras Thanos Transition"
        ]
    },
    "Military Base": {
        "name": "Military Base",
        "startX": 104,
        "startZ": -5393,
        "endX": 166,
        "endZ": -5518,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Military Base Upper",
            "Path To Military Base"
        ]
    },
    "Military Base Lower": {
        "name": "Military Base Lower",
        "startX": 244,
        "startZ": -5407,
        "endX": 168,
        "endZ": -5315,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Military Base Upper",
            "Thanos Valley West",
            "Path To Ozoth's Spire Lower"
        ]
    },
    "Path To Ozoth's Spire Mid": {
        "name": "Path To Ozoth's Spire Mid",
        "startX": 199,
        "startZ": -5164,
        "endX": 260,
        "endZ": -5042,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Path To Ozoth's Spire Upper",
            "Canyon Walk Way"
        ]
    },
    "Bandit Cave Lower": {
        "name": "Bandit Cave Lower",
        "startX": 111,
        "startZ": -5043,
        "endX": 194,
        "endZ": -4958,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Path To Ozoth's Spire Upper",
            "Canyon Valley South"
        ]
    },
    "Canyon Entrance Waterfall": {
        "name": "Canyon Entrance Waterfall",
        "startX": 110,
        "startZ": -4869,
        "endX": 194,
        "endZ": -4741,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Path North West",
            "Canyon Path North Mid"
        ]
    },
    "Canyon Path South East": {
        "name": "Canyon Path South East",
        "startX": 194,
        "startZ": -4649,
        "endX": 115,
        "endZ": -4521,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Path North West",
            "Canyon Lower South East"
        ]
    },
    "Canyon Upper North West": {
        "name": "Canyon Upper North West",
        "startX": 200,
        "startZ": -4380,
        "endX": 265,
        "endZ": -4518,
        "output": {
            "wood": 28800,
            "emerald": 9000
        },
        "routes": [
            "Aldorei's Arch",
            "Canyon Waterfall North"
        ]
    },
    "Canyon Path South West": {
        "name": "Canyon Path South West",
        "startX": 265,
        "startZ": -4652,
        "endX": 200,
        "endZ": -4741,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Path North West",
            "Canyon Lower South East"
        ]
    },
    "Bandit Camp Exit": {
        "name": "Bandit Camp Exit",
        "startX": 264,
        "startZ": -4877,
        "endX": 203,
        "endZ": -4971,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Path North Mid",
            "Canyon Valley South"
        ]
    },
    "Thanos Valley West": {
        "name": "Thanos Valley West",
        "startX": 250,
        "startZ": -5401,
        "endX": 311,
        "endZ": -5315,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Military Base Lower"
        ]
    },
    "Canyon Walk Way": {
        "name": "Canyon Walk Way",
        "startX": 271,
        "startZ": -5165,
        "endX": 338,
        "endZ": -5041,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Canyon Mountain East",
            "Path To Ozoth's Spire Mid",
            "Bandits Toll"
        ]
    },
    "Canyon Mountain South": {
        "name": "Canyon Mountain South",
        "startX": 271,
        "startZ": -4946,
        "endX": 337,
        "endZ": -4857,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Waterfall Mid North",
            "Krolton's Cave"
        ]
    },
    "Canyon Fortress": {
        "name": "Canyon Fortress",
        "startX": 271,
        "startZ": -4739,
        "endX": 338,
        "endZ": -4630,
        "output": {
            "ore": 3600,
            "fish": 3600,
            "wood": 3600,
            "crop": 3600
        },
        "routes": [
            "Canyon Waterfall Mid North",
            "Valley of the Lost"
        ]
    },
    "Canyon Dropoff": {
        "name": "Canyon Dropoff",
        "startX": 334,
        "startZ": -4518,
        "endX": 269,
        "endZ": -4395,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Cliff Side of the Lost",
            "Mountain Path"
        ]
    },
    "Bandits Toll": {
        "name": "Bandits Toll",
        "startX": 439,
        "startZ": -5038,
        "endX": 345,
        "endZ": -5181,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thanos Exit Upper",
            "Wizard Tower North",
            "Canyon Walk Way",
            "Cliffside Valley"
        ]
    },
    "Mountain Path": {
        "name": "Mountain Path",
        "startX": 334,
        "startZ": -4393,
        "endX": 276,
        "endZ": -4314,
        "output": {
            "ore": 72000,
            "emerald": 18000
        },
        "routes": [
            "Canyon Dropoff"
        ]
    },
    "Cliff Side of the Lost": {
        "name": "Cliff Side of the Lost",
        "startX": 340,
        "startZ": -4395,
        "endX": 437,
        "endZ": -4508,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Survivor",
            "Canyon Dropoff",
            "Canyon Of The Lost",
            "Mountain Edge",
            "Valley of the Lost"
        ]
    },
    "Temple of the Lost East": {
        "name": "Temple of the Lost East",
        "startX": 440,
        "startZ": -4672,
        "endX": 341,
        "endZ": -4838,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Krolton's Cave",
            "Valley of the Lost"
        ]
    },
    "Hive South": {
        "name": "Hive South",
        "startX": 440,
        "startZ": -5315,
        "endX": 560,
        "endZ": -5449,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thanos Exit Upper",
            "Hive",
            "Chained House",
            "Canyon High Path",
            "Cherry Blossom Forest"
        ]
    },
    "Cliffside Waterfall": {
        "name": "Cliffside Waterfall",
        "startX": 440,
        "startZ": -5183,
        "endX": 563,
        "endZ": -5080,
        "output": {
            "ore": 3600,
            "fish": 3600,
            "wood": 3600,
            "crop": 3600
        },
        "routes": [
            "Canyon High Path"
        ]
    },
    "Air Temple Lower": {
        "name": "Air Temple Lower",
        "startX": 445,
        "startZ": -4972,
        "endX": 563,
        "endZ": -4835,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Air Temple Upper",
            "Krolton's Cave",
            "Cliffside Valley"
        ]
    },
    "Cliffside Lake": {
        "name": "Cliffside Lake",
        "startX": 445,
        "startZ": -4689,
        "endX": 570,
        "endZ": -4568,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Canyon Of The Lost",
            "Cliffside Passage"
        ]
    },
    "Kandon-Beda": {
        "name": "Kandon-Beda",
        "startX": 607,
        "startZ": -4579,
        "endX": 760,
        "endZ": -4372,
        "output": {
            "ore": 3600,
            "emerald": 18000
        },
        "routes": [
            "Canyon Of The Lost"
        ]
    },
    "Cliffside Passage": {
        "name": "Cliffside Passage",
        "startX": 699,
        "startZ": -4817,
        "endX": 572,
        "endZ": -4691,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Cliffside Passage North",
            "Cliffside Lake"
        ]
    },
    "Entrance to Thesead North": {
        "name": "Entrance to Thesead North",
        "startX": 572,
        "startZ": -4935,
        "endX": 700,
        "endZ": -5028,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Entrance to Thesead South",
            "Cliffside Passage North"
        ]
    },
    "Chained House": {
        "name": "Chained House",
        "startX": 574,
        "startZ": -5375,
        "endX": 699,
        "endZ": -5242,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Hive South",
            "Thesead Suburbs",
            "Entrance to Thesead South",
            "Cherry Blossom Forest"
        ]
    },
    "Ranol's Farm": {
        "name": "Ranol's Farm",
        "startX": 810,
        "startZ": -5551,
        "endX": 701,
        "endZ": -5377,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Eltom",
            "Cherry Blossom Forest",
            "Thesead Suburbs"
        ]
    },
    "Thesead": {
        "name": "Thesead",
        "startX": 747,
        "startZ": -5104,
        "endX": 872,
        "endZ": -4964,
        "output": {
            "ore": 3600,
            "emerald": 36000
        },
        "routes": [
            "Thesead Suburbs",
            "Entrance to Thesead South"
        ]
    },
    "Eltom": {
        "name": "Eltom",
        "startX": 1029,
        "startZ": -5581,
        "endX": 828,
        "endZ": -5376,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Ranol's Farm",
            "Entrance to Rodoroc"
        ]
    },
    "Lava Lake": {
        "name": "Lava Lake",
        "startX": 1531,
        "startZ": -5553,
        "endX": 1387,
        "endZ": -5369,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Molten Heights Portal",
            "Active Volcano",
            "Volcanic Slope"
        ]
    },
    "Crater Descent": {
        "name": "Crater Descent",
        "startX": 1383,
        "startZ": -5238,
        "endX": 1230,
        "endZ": -5067,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Rodoroc",
            "Lava Lake Bridge",
            "Molten Heights Portal"
        ]
    },
    "Volcanic Slope": {
        "name": "Volcanic Slope",
        "startX": 1531,
        "startZ": -5637,
        "endX": 1221,
        "endZ": -5555,
        "output": {
            "ore": 10800,
            "fish": 10800,
            "wood": 10800,
            "crop": 10800
        },
        "routes": [
            "Lava Lake",
            "Active Volcano"
        ]
    },
    "Temple Island": {
        "name": "Temple Island",
        "startX": 991,
        "startZ": -4643,
        "endX": 1124,
        "endZ": -4750,
        "output": {
            "wood": 5400,
            "emerald": 12150
        },
        "routes": [
            "Kandon Ridge",
            "Swamp Island",
            "Ahmsord",
            "Snail Island",
            "Central Islands"
        ]
    },
    "Dernel Jungle Lower": {
        "name": "Dernel Jungle Lower",
        "startX": -737,
        "startZ": -317,
        "endX": -502,
        "endZ": -530,
        "output": {
            "fish": 9600,
            "emerald": 9000
        },
        "routes": [
            "Dernel Jungle Mid",
            "Jungle Lower"
        ]
    },
    "Dernel Jungle Upper": {
        "name": "Dernel Jungle Upper",
        "startX": -970,
        "startZ": -795,
        "endX": -900,
        "endZ": -547,
        "output": {
            "wood": 28800,
            "emerald": 9000
        },
        "routes": [
            "Dernel Jungle Mid"
        ]
    },
    "Corkus Castle": {
        "name": "Corkus Castle",
        "startX": -1555,
        "startZ": -2968,
        "endX": -1452,
        "endZ": -2835,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Corkus City"
        ]
    },
    "Fallen Factory": {
        "name": "Fallen Factory",
        "startX": -1579,
        "startZ": -2662,
        "endX": -1681,
        "endZ": -2518,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Factory Entrance",
            "Corkus City South",
            "Corkus Sea Port",
            "Ruined Houses"
        ]
    },
    "Corkus City Mine": {
        "name": "Corkus City Mine",
        "startX": -1394,
        "startZ": -2750,
        "endX": -1466,
        "endZ": -2831,
        "output": {
            "ore": 18000,
            "emerald": 9000
        },
        "routes": [
            "Road To Mine",
            "Corkus Sea Cove",
            "Corkus Statue"
        ]
    },
    "Factory Entrance": {
        "name": "Factory Entrance",
        "startX": -1683,
        "startZ": -2571,
        "endX": -1798,
        "endZ": -2730,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Corkus City South",
            "Fallen Factory",
            "Corkus Forest South",
            "Ruined Houses"
        ]
    },
    "Corkus Forest North": {
        "name": "Corkus Forest North",
        "startX": -1888,
        "startZ": -2862,
        "endX": -1682,
        "endZ": -2995,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Corkus City South",
            "Corkus Mountain",
            "Corkus City",
            "Corkus Forest South"
        ]
    },
    "Avos Workshop": {
        "name": "Avos Workshop",
        "startX": -1681,
        "startZ": -3178,
        "endX": -1888,
        "endZ": -3375,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Avos Temple"
        ]
    },
    "Corkus Countryside": {
        "name": "Corkus Countryside",
        "startX": -1503,
        "startZ": -3191,
        "endX": -1680,
        "endZ": -3012,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Corkus City",
            "Corkus Outskirts",
            "Avos Temple",
            "Corkus Mountain"
        ]
    },
    "Ruined Houses": {
        "name": "Ruined Houses",
        "startX": -1684,
        "startZ": -2569,
        "endX": -1793,
        "endZ": -2453,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Factory Entrance",
            "Corkus Sea Port",
            "Fallen Factory"
        ]
    },
    "Avos Temple": {
        "name": "Avos Temple",
        "startX": -1526,
        "startZ": -3225,
        "endX": -1378,
        "endZ": -3426,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Bloody Beach",
            "Avos Workshop"
        ]
    },
    "Corkus Outskirts": {
        "name": "Corkus Outskirts",
        "startX": -1502,
        "startZ": -2976,
        "endX": -1230,
        "endZ": -3224,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Corkus Countryside",
            "Bloody Beach",
            "Corkus Statue"
        ]
    },
    "Sky Castle": {
        "name": "Sky Castle",
        "startX": 954,
        "startZ": -4425,
        "endX": 854,
        "endZ": -4340,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Path to Ahmsord Lower"
        ]
    },
    "Path to Ahmsord Upper": {
        "name": "Path to Ahmsord Upper",
        "startX": 885,
        "startZ": -4571,
        "endX": 779,
        "endZ": -4639,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Path to Ahmsord Lower",
            "Kandon Ridge"
        ]
    },
    "Old Coal Mine": {
        "name": "Old Coal Mine",
        "startX": 719,
        "startZ": -4778,
        "endX": 885,
        "endZ": -4900,
        "output": {
            "ore": 1350,
            "fish": 1350,
            "wood": 1350,
            "crop": 1350
        },
        "routes": [
            "Kandon Ridge"
        ]
    },
    "Astraulus' Tower": {
        "name": "Astraulus' Tower",
        "startX": 1102,
        "startZ": -5016,
        "endX": 1250,
        "endZ": -4916,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Swamp Island",
            "Dragonling Nests"
        ]
    },
    "Ahmsord Outskirts": {
        "name": "Ahmsord Outskirts",
        "startX": 1336,
        "startZ": -4893,
        "endX": 1179,
        "endZ": -4730,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Wybel Island",
            "Angel Refuge",
            "Swamp Island",
            "Central Islands"
        ]
    },
    "Angel Refuge": {
        "name": "Angel Refuge",
        "startX": 1354,
        "startZ": -4727,
        "endX": 1484,
        "endZ": -4877,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Ahmsord Outskirts",
            "Molten Reach"
        ]
    },
    "Central Islands": {
        "name": "Central Islands",
        "startX": 1250,
        "startZ": -4718,
        "endX": 1183,
        "endZ": -4535,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Ahmsord Outskirts",
            "Temple Island",
            "Wybel Island",
            "Sky Island Ascent",
            "Ahmsord"
        ]
    },
    "Sky Falls": {
        "name": "Sky Falls",
        "startX": 1380,
        "startZ": -4458,
        "endX": 1466,
        "endZ": -4653,
        "output": {
            "ore": 28800,
            "emerald": 9000
        },
        "routes": [
            "Wybel Island",
            "Sky Island Ascent",
            "Frozen Fort"
        ]
    },
    "Raider's Base Lower": {
        "name": "Raider's Base Lower",
        "startX": 1558,
        "startZ": -4316,
        "endX": 1305,
        "endZ": -4253,
        "output": {
            "ore": 7200,
            "emerald": 9000
        },
        "routes": [
            "Raider's Base Upper"
        ]
    },
    "Jofash Docks": {
        "name": "Jofash Docks",
        "startX": 1178,
        "startZ": -4175,
        "endX": 1445,
        "endZ": -4012,
        "output": {
            "fish": 28800,
            "emerald": 9000
        },
        "routes": [
            "Dead Island North East",
            "Regular Island",
            "Jofash Tunnel"
        ]
    },
    "Lusuco": {
        "name": "Lusuco",
        "startX": -267,
        "startZ": -348,
        "endX": -91,
        "endZ": -250,
        "output": {
            "emerald": 72000,
            "crop": 14400
        },
        "routes": [
            "Icy Descent"
        ]
    },
    "Phinas Farm": {
        "name": "Phinas Farm",
        "startX": -1633,
        "startZ": -2162,
        "endX": -1842,
        "endZ": -2058,
        "output": {
            "emerald": 9000,
            "crop": 10800
        },
        "routes": [
            "Lighthouse Plateau",
            "Royal Gate"
        ]
    },
    "Cinfras Outskirts": {
        "name": "Cinfras Outskirts",
        "startX": -392,
        "startZ": -5116,
        "endX": -534,
        "endZ": -5278,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Dark Forest Village",
            "Fungal Grove",
            "Cinfras",
            "Dark Forest Cinfras Transition",
            "Old Crossroads South"
        ]
    },
    "Llevigar": {
        "name": "Llevigar",
        "startX": -1800,
        "startZ": -4643,
        "endX": -2171,
        "endZ": -4405,
        "output": {
            "ore": 3600,
            "emerald": 288000
        },
        "routes": [
            "Llevigar Gate East",
            "Llevigar Entrance",
            "Quartz Mines South West"
        ]
    },
    "Herb Cave": {
        "name": "Herb Cave",
        "startX": -448,
        "startZ": -813,
        "endX": -557,
        "endZ": -876,
        "output": {
            "emerald": 16200,
            "crop": 43200
        },
        "routes": [
            "Great Bridge Jungle"
        ]
    },
    "Icy Island": {
        "name": "Icy Island",
        "startX": 1001,
        "startZ": -3274,
        "endX": 1172,
        "endZ": -3430,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Dujgon Nation",
            "Regular Island",
            "Santa's Hideout",
            "Nodguj Nation"
        ]
    },
    "Fleris Trail": {
        "name": "Fleris Trail",
        "startX": -1390,
        "startZ": -4594,
        "endX": -1254,
        "endZ": -4351,
        "output": {
            "wood": 86400,
            "emerald": 9000
        },
        "routes": [
            "Road To Light Forest"
        ]
    },
    "Abandoned Pass": {
        "name": "Abandoned Pass",
        "startX": 881,
        "startZ": -1225,
        "endX": 1019,
        "endZ": -1380,
        "output": {
            "ore": 43200,
            "emerald": 9000
        },
        "routes": [
            "Ternaves Plains Lower",
            "Mining Base Upper"
        ]
    },
    "Southern Outpost": {
        "name": "Southern Outpost",
        "startX": -1258,
        "startZ": -2204,
        "endX": -1444,
        "endZ": -2306,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Lighthouse Plateau",
            "Legendary Island"
        ]
    },
    "Corkus Sea Cove": {
        "name": "Corkus Sea Cove",
        "startX": -1578,
        "startZ": -2662,
        "endX": -1330,
        "endZ": -2513,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Road To Mine",
            "Corkus Sea Port",
            "Corkus City Mine",
            "Fallen Factory"
        ]
    },
    "The Broken Road": {
        "name": "The Broken Road",
        "startX": 686,
        "startZ": -923,
        "endX": 493,
        "endZ": -783,
        "output": {
            "emerald": 16200,
            "crop": 7200
        },
        "routes": [
            "Worm Tunnel",
            "The Silent Road"
        ]
    },
    "Grey Ruins": {
        "name": "Grey Ruins",
        "startX": 683,
        "startZ": -619,
        "endX": 477,
        "endZ": -515,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Worm Tunnel",
            "Forgotten Town"
        ]
    },
    "Forest of Eyes": {
        "name": "Forest of Eyes",
        "startX": 813,
        "startZ": -333,
        "endX": 1043,
        "endZ": -504,
        "output": {
            "wood": 28800,
            "emerald": 12000
        },
        "routes": [
            "Forgotten Town",
            "Sinister Forest"
        ]
    },
    "Lutho": {
        "name": "Lutho",
        "startX": 936,
        "startZ": -654,
        "endX": 1027,
        "endZ": -754,
        "output": {
            "emerald": 72000,
            "crop": 3600
        },
        "routes": [
            "Sinister Forest",
            "Paths of Sludge"
        ]
    },
    "Toxic Drip": {
        "name": "Toxic Drip",
        "startX": 893,
        "startZ": -876,
        "endX": 1086,
        "endZ": -992,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Paths of Sludge",
            "Gateway to Nothing",
            "Toxic Caves"
        ]
    },
    "Gateway to Nothing": {
        "name": "Gateway to Nothing",
        "startX": 1120,
        "startZ": -882,
        "endX": 1244,
        "endZ": -1058,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Final Step",
            "Toxic Drip",
            "Void Valley"
        ]
    },
    "Final Step": {
        "name": "Final Step",
        "startX": 1388,
        "startZ": -869,
        "endX": 1254,
        "endZ": -932,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Bizarre Passage",
            "Gateway to Nothing"
        ]
    },
    "The Gate": {
        "name": "The Gate",
        "startX": 1350,
        "startZ": -520,
        "endX": 1265,
        "endZ": -410,
        "output": {
            "emerald": 12000,
            "crop": 72000
        },
        "routes": [
            "Bizarre Passage"
        ]
    },
    "Luminous Plateau": {
        "name": "Luminous Plateau",
        "startX": -894,
        "startZ": -5957,
        "endX": -962,
        "endZ": -6066,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Field of Life"
        ]
    },
    "Primal Fen": {
        "name": "Primal Fen",
        "startX": -894,
        "startZ": -6244,
        "endX": -1026,
        "endZ": -6066,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Field of Life"
        ]
    },
    "Otherwordly Monolith": {
        "name": "Otherwordly Monolith",
        "startX": -775,
        "startZ": -6164,
        "endX": -662,
        "endZ": -6003,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Path to Light",
            "Azure Frontier"
        ]
    },
    "Nexus of Light": {
        "name": "Nexus of Light",
        "startX": -645,
        "startZ": -6384,
        "endX": -855,
        "endZ": -6561,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Azure Frontier"
        ]
    },
    "Ragni Main Entrance": {
        "name": "Ragni Main Entrance",
        "startX": -747,
        "startZ": -1530,
        "endX": -616,
        "endZ": -1652,
        "output": {
            "emerald": 9000,
            "crop": 5400
        },
        "routes": [
            "Ragni",
            "Ragni East Suburbs",
            "Emerald Trail"
        ]
    },
    "Katoa Ranch": {
        "name": "Katoa Ranch",
        "startX": -914,
        "startZ": -1860,
        "endX": -748,
        "endZ": -1955,
        "output": {
            "emerald": 9000,
            "crop": 28800
        },
        "routes": [
            "Ragni North Entrance",
            "Ragni North Suburbs"
        ]
    },
    "Coastal Trail": {
        "name": "Coastal Trail",
        "startX": -747,
        "startZ": -1946,
        "endX": -565,
        "endZ": -2059,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Ragni Plains",
            "Maltic Coast"
        ]
    },
    "Plains": {
        "name": "Plains",
        "startX": -435,
        "startZ": -1883,
        "endX": -270,
        "endZ": -1653,
        "output": {
            "fish": 9600,
            "emerald": 9000
        },
        "routes": [
            "Maltic Plains",
            "Nivla Woods Entrance",
            "North Nivla Woods",
            "South Farmers Valley"
        ]
    },
    "Little Wood": {
        "name": "Little Wood",
        "startX": -812,
        "startZ": -1177,
        "endX": -636,
        "endZ": -1094,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Time Valley",
            "South Pigmen Ravines"
        ]
    },
    "Road to Time Valley": {
        "name": "Road to Time Valley",
        "startX": -461,
        "startZ": -1525,
        "endX": -359,
        "endZ": -1412,
        "output": {
            "wood": 9600,
            "emerald": 9000
        },
        "routes": [
            "Nivla Woods",
            "South Nivla Woods",
            "Nivla Woods Entrance"
        ]
    },
    "Nivla Woods Exit": {
        "name": "Nivla Woods Exit",
        "startX": -175,
        "startZ": -1630,
        "endX": -105,
        "endZ": -1514,
        "output": {
            "wood": 9600,
            "emerald": 9000
        },
        "routes": [
            "Nivla Woods Edge",
            "South Nivla Woods",
            "North Nivla Woods",
            "Nivla Woods"
        ]
    },
    "Road to Elkurn": {
        "name": "Road to Elkurn",
        "startX": -89,
        "startZ": -1481,
        "endX": 2,
        "endZ": -1267,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Elkurn",
            "Elkurn Fields",
            "South Nivla Woods"
        ]
    },
    "Detlas Suburbs": {
        "name": "Detlas Suburbs",
        "startX": 188,
        "startZ": -1657,
        "endX": 300,
        "endZ": -1500,
        "output": {
            "emerald": 18000,
            "crop": 3600
        },
        "routes": [
            "Nether Plains Upper",
            "Detlas Trail East Plains",
            "Detlas Far Suburbs",
            "Detlas Close Suburbs"
        ]
    },
    "North Farmers Valley": {
        "name": "North Farmers Valley",
        "startX": -348,
        "startZ": -2060,
        "endX": -254,
        "endZ": -1954,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Maltic Plains",
            "Maltic Coast",
            "South Farmers Valley"
        ]
    },
    "Half Moon Island": {
        "name": "Half Moon Island",
        "startX": 900,
        "startZ": -2660,
        "endX": 1100,
        "endZ": -2480,
        "output": {
            "emerald": 9000,
            "crop": 28800
        },
        "routes": [
            "Mage Island"
        ]
    },
    "Bob's Tomb": {
        "name": "Bob's Tomb",
        "startX": 246,
        "startZ": -747,
        "endX": 380,
        "endZ": -867,
        "output": {
            "wood": 7200,
            "emerald": 16200
        },
        "routes": [
            "Nesaak Plains North East",
            "Nesaak Plains South East",
            "Nesaak Village"
        ]
    },
    "Nesaak Plains Lower North West": {
        "name": "Nesaak Plains Lower North West",
        "startX": 70,
        "startZ": -834,
        "endX": -120,
        "endZ": -910,
        "output": {
            "wood": 5400,
            "emerald": 16200
        },
        "routes": [
            "Nesaak Village",
            "Nesaak Plains Upper North West",
            "Nesaak Plains South West",
            "Nesaak Plains Mid North West"
        ]
    },
    "Nesaak Plains Mid North West": {
        "name": "Nesaak Plains Mid North West",
        "startX": -140,
        "startZ": -860,
        "endX": -180,
        "endZ": -980,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Nesaak Plains Lower North West",
            "Nesaak Plains Upper North West"
        ]
    },
    "Jungle Mid": {
        "name": "Jungle Mid",
        "startX": -600,
        "startZ": -610,
        "endX": -670,
        "endZ": -780,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "Jungle Lake",
            "Jungle Lower",
            "Jungle Upper"
        ]
    },
    "City of Troms": {
        "name": "City of Troms",
        "startX": -726,
        "startZ": -970,
        "endX": -899,
        "endZ": -826,
        "output": {
            "wood": 3600,
            "emerald": 72000
        },
        "routes": [
            "Jungle Lake",
            "South Pigmen Ravines",
            "Temple of Legends"
        ]
    },
    "Rymek West Lower": {
        "name": "Rymek West Lower",
        "startX": 1209,
        "startZ": -1269,
        "endX": 1020,
        "endZ": -1380,
        "output": {
            "ore": 18000,
            "emerald": 16200
        },
        "routes": [
            "Rymek East Lower",
            "Rymek West Mid"
        ]
    },
    "Desert East Mid": {
        "name": "Desert East Mid",
        "startX": 1260,
        "startZ": -2170,
        "endX": 1450,
        "endZ": -2020,
        "output": {
            "fish": 21600,
            "emerald": 12000
        },
        "routes": [
            "Desert Mid-Upper",
            "Desert East Lower",
            "Desert East Upper"
        ]
    },
    "Desert Mid-Lower": {
        "name": "Desert Mid-Lower",
        "startX": 1060,
        "startZ": -1935,
        "endX": 1210,
        "endZ": -1810,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert East Lower",
            "Desert West Lower",
            "Almuj City",
            "Desert Lower",
            "Desert Mid-Upper"
        ]
    },
    "Desert West Upper": {
        "name": "Desert West Upper",
        "startX": 990,
        "startZ": -2270,
        "endX": 895,
        "endZ": -2140,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert Upper",
            "Almuj City"
        ]
    },
    "Savannah West Lower": {
        "name": "Savannah West Lower",
        "startX": 775,
        "startZ": -1675,
        "endX": 630,
        "endZ": -1830,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Savannah West Upper",
            "Ternaves Plains Upper",
            "Savannah East Lower"
        ]
    },
    "Nemract Town": {
        "name": "Nemract Town",
        "startX": 10,
        "startZ": -2070,
        "endX": 210,
        "endZ": -2270,
        "output": {
            "emerald": 48600,
            "crop": 3600
        },
        "routes": [
            "Nemract Road",
            "Nemract Cathedral",
            "Plains Coast",
            "Rooster Island"
        ]
    },
    "Nemract Plains East": {
        "name": "Nemract Plains East",
        "startX": 151,
        "startZ": -1870,
        "endX": 20,
        "endZ": -1810,
        "output": {
            "ore": 9600,
            "emerald": 9000
        },
        "routes": [
            "Detlas Trail West Plains",
            "Nemract Road"
        ]
    },
    "The Bear Zoo": {
        "name": "The Bear Zoo",
        "startX": -409,
        "startZ": -2539,
        "endX": -283,
        "endZ": -2414,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Zhight Island",
            "Rooster Island"
        ]
    },
    "Durum Isles Center": {
        "name": "Durum Isles Center",
        "startX": 405,
        "startZ": -2846,
        "endX": 504,
        "endZ": -2972,
        "output": {
            "emerald": 9000,
            "crop": 36000
        },
        "routes": [
            "Durum Isles East",
            "Durum Isles Lower",
            "Selchar",
            "Durum Isles Upper"
        ]
    },
    "Pirate Town": {
        "name": "Pirate Town",
        "startX": -750,
        "startZ": -3251,
        "endX": -580,
        "endZ": -3006,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Lost Atoll",
            "Bloody Beach",
            "Zhight Island"
        ]
    },
    "Dead Island North East": {
        "name": "Dead Island North East",
        "startX": 870,
        "startZ": -3920,
        "endX": 1000,
        "endZ": -4040,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Dead Island South East",
            "Dead Island North West",
            "Jofash Docks"
        ]
    },
    "Maro Peaks": {
        "name": "Maro Peaks",
        "startX": -41,
        "startZ": -4174,
        "endX": 453,
        "endZ": -3793,
        "output": {
            "ore": 18000,
            "emerald": 9000
        },
        "routes": [
            "Tree Island",
            "Skiens Island"
        ]
    },
    "Ternaves": {
        "name": "Ternaves",
        "startX": 770,
        "startZ": -1675,
        "endX": 880,
        "endZ": -1540,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Savannah East Lower",
            "Ternaves Plains Upper",
            "Ternaves Plains Lower"
        ]
    },
    "Mining Base Lower": {
        "name": "Mining Base Lower",
        "startX": 870,
        "startZ": -1130,
        "endX": 670,
        "endZ": -1225,
        "output": {
            "ore": 43200,
            "emerald": 12000
        },
        "routes": [
            "Mining Base Upper"
        ]
    },
    "Plains Lake": {
        "name": "Plains Lake",
        "startX": 395,
        "startZ": -1365,
        "endX": 550,
        "endZ": -1190,
        "output": {
            "fish": 50400,
            "emerald": 24300
        },
        "routes": [
            "Nether Plains Upper",
            "Nether Gate",
            "Mine Base Plains",
            "Desolate Valley"
        ]
    },
    "Detlas Trail East Plains": {
        "name": "Detlas Trail East Plains",
        "startX": 200,
        "startZ": -1820,
        "endX": 510,
        "endZ": -1675,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Cathedral Harbour",
            "Detlas",
            "Detlas Suburbs",
            "Detlas Close Suburbs",
            "Ancient Nemract"
        ]
    },
    "Llevigar Gate West": {
        "name": "Llevigar Gate West",
        "startX": -2060,
        "startZ": -4746,
        "endX": -2171,
        "endZ": -4644,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Llevigar Farm Plains West",
            "Llevigar Gate East"
        ]
    },
    "Cinfras": {
        "name": "Cinfras",
        "startX": -534,
        "startZ": -4807,
        "endX": -375,
        "endZ": -5088,
        "output": {
            "wood": 3600,
            "emerald": 72000
        },
        "routes": [
            "Aldorei's River",
            "Guild Hall",
            "Cinfras Outskirts",
            "Cinfras Entrance"
        ]
    },
    "Llevigar Plains East Upper": {
        "name": "Llevigar Plains East Upper",
        "startX": -2059,
        "startZ": -4912,
        "endX": -1940,
        "endZ": -5000,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Orc Lake",
            "Sunspark Camp",
            "Llevigar Plains East Lower",
            "Llevigar Plains West Upper",
            "Swamp East Lower"
        ]
    },
    "Swamp West Mid": {
        "name": "Swamp West Mid",
        "startX": -2060,
        "startZ": -5082,
        "endX": -2171,
        "endZ": -5186,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp West Lower",
            "Swamp West Mid-Upper",
            "Swamp East Mid"
        ]
    },
    "Swamp East Upper": {
        "name": "Swamp East Upper",
        "startX": -1955,
        "startZ": -5311,
        "endX": -2059,
        "endZ": -5419,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp Mountain Transition Upper",
            "Swamp West Upper",
            "Swamp Mountain Transition Mid-Upper",
            "Swamp East Mid-Upper",
            "Swamp Plains Basin"
        ]
    },
    "Swamp Lower": {
        "name": "Swamp Lower",
        "startX": -1649,
        "startZ": -5134,
        "endX": -1763,
        "endZ": -5241,
        "output": {
            "wood": 36000,
            "emerald": 9000
        },
        "routes": [
            "Entrance to Olux",
            "Swamp Dark Forest Transition Lower",
            "Swamp Mountain Base",
            "Iron Road"
        ]
    },
    "Swamp Plains Basin": {
        "name": "Swamp Plains Basin",
        "startX": -1776,
        "startZ": -5246,
        "endX": -1898,
        "endZ": -5396,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp East Mid-Upper",
            "Entrance to Olux",
            "Swamp East Upper",
            "Swamp Mountain Base"
        ]
    },
    "Swamp Mountain Transition Upper": {
        "name": "Swamp Mountain Transition Upper",
        "startX": -1981,
        "startZ": -5466,
        "endX": -1889,
        "endZ": -5603,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp Mountain Transition Mid-Upper",
            "Swamp East Upper",
            "Olux"
        ]
    },
    "Quartz Mines North East": {
        "name": "Quartz Mines North East",
        "startX": -1391,
        "startZ": -4664,
        "endX": -1607,
        "endZ": -4526,
        "output": {
            "ore": 36000,
            "emerald": 12150
        },
        "routes": [
            "Quartz Mines South East",
            "Llevigar Farm",
            "Quartz Mines North West",
            "Pre-Light Forest Transition"
        ]
    },
    "Meteor Crater": {
        "name": "Meteor Crater",
        "startX": -1800,
        "startZ": -5099,
        "endX": -1690,
        "endZ": -4969,
        "output": {
            "ore": 36000,
            "emerald": 9000
        },
        "routes": [
            "Sunspark Camp",
            "Sablestone Camp",
            "Iron Road"
        ]
    },
    "Goblin Plains West": {
        "name": "Goblin Plains West",
        "startX": -1688,
        "startZ": -4962,
        "endX": -1611,
        "endZ": -4854,
        "output": {
            "ore": 36000,
            "emerald": 9000
        },
        "routes": [
            "Goblin Plains East",
            "Llevigar Farm",
            "Sablestone Camp",
            "Iron Road"
        ]
    },
    "Pre-Light Forest Transition": {
        "name": "Pre-Light Forest Transition",
        "startX": -1553,
        "startZ": -4850,
        "endX": -1476,
        "endZ": -4719,
        "output": {
            "wood": 43200,
            "emerald": 144000
        },
        "routes": [
            "Goblin Plains East",
            "Llevigar Farm",
            "Leadin Fortress",
            "Quartz Mines North East"
        ]
    },
    "Efilim South Plains": {
        "name": "Efilim South Plains",
        "startX": -1030,
        "startZ": -4940,
        "endX": -1134,
        "endZ": -4847,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest North Entrance",
            "Efilim Village",
            "Efilim South East Plains"
        ]
    },
    "Light Forest Entrance": {
        "name": "Light Forest Entrance",
        "startX": -1040,
        "startZ": -4706,
        "endX": -1134,
        "endZ": -4552,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest North Entrance",
            "Light Forest West Mid",
            "Light Forest South Entrance",
            "Road To Light Forest"
        ]
    },
    "Light Forest North Exit": {
        "name": "Light Forest North Exit",
        "startX": -733,
        "startZ": -4707,
        "endX": -654,
        "endZ": -4848,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest South Exit",
            "Light Forest Canyon",
            "Cinfras Entrance"
        ]
    },
    "Light Forest East Upper": {
        "name": "Light Forest East Upper",
        "startX": -926,
        "startZ": -4842,
        "endX": -831,
        "endZ": -4945,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Path to Cinfras",
            "Efilim South East Plains"
        ]
    },
    "Mantis Nest": {
        "name": "Mantis Nest",
        "startX": -736,
        "startZ": -4559,
        "endX": -802,
        "endZ": -4698,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest South Exit",
            "Aldorei Valley West Entrance",
            "Aldorei Valley Lower",
            "Light Forest East Lower",
            "Light Forest Canyon"
        ]
    },
    "Gelibord": {
        "name": "Gelibord",
        "startX": -1050,
        "startZ": -5244,
        "endX": -958,
        "endZ": -5342,
        "output": {
            "wood": 3600,
            "emerald": 144000
        },
        "routes": [
            "Gelibord Corrupted Farm",
            "Lone Farmstead",
            "Twisted Housing",
            "Entrance to Kander"
        ]
    },
    "Fortress North": {
        "name": "Fortress North",
        "startX": -1452,
        "startZ": -5211,
        "endX": -1272,
        "endZ": -5395,
        "output": {
            "wood": 36000,
            "emerald": 9000
        },
        "routes": [
            "Mansion of Insanity",
            "Taproot Descent",
            "Fortress South"
        ]
    },
    "Lexdales Prison": {
        "name": "Lexdales Prison",
        "startX": -873,
        "startZ": -5518,
        "endX": -772,
        "endZ": -5585,
        "output": {
            "wood": 72000,
            "emerald": 9000
        },
        "routes": [
            "Viscera Pits West",
            "Twisted Ridge"
        ]
    },
    "Mesquis Tower": {
        "name": "Mesquis Tower",
        "startX": -834,
        "startZ": -5078,
        "endX": -727,
        "endZ": -4999,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Kander Mines",
            "Abandoned Manor",
            "Path to Cinfras",
            "Cinfras Entrance"
        ]
    },
    "Dark Forest Village": {
        "name": "Dark Forest Village",
        "startX": -723,
        "startZ": -5229,
        "endX": -574,
        "endZ": -5147,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Cinfras Outskirts",
            "Kander Mines",
            "Path to Talor",
            "Old Crossroads South"
        ]
    },
    "Fungal Grove": {
        "name": "Fungal Grove",
        "startX": -489,
        "startZ": -5279,
        "endX": -549,
        "endZ": -5398,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Fallen Village",
            "Cinfras Outskirts",
            "Old Crossroads South",
            "Old Crossroads North",
            "Decayed Basin"
        ]
    },
    "Mushroom Hill": {
        "name": "Mushroom Hill",
        "startX": -288,
        "startZ": -5411,
        "endX": -392,
        "endZ": -5601,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Heart of Decay",
            "Fallen Village",
            "Jitak's Farm",
            "Decayed Basin"
        ]
    },
    "Aldorei Valley South Entrance": {
        "name": "Aldorei Valley South Entrance",
        "startX": -130,
        "startZ": -4641,
        "endX": -222,
        "endZ": -4509,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Aldorei's Waterfall",
            "Cinfras's Small Farm",
            "Aldorei's North Exit"
        ]
    },
    "Cinfras County Mid-Upper": {
        "name": "Cinfras County Mid-Upper",
        "startX": -127,
        "startZ": -4896,
        "endX": 3,
        "endZ": -5050,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Cinfras County Mid-Lower",
            "Cinfras County Upper",
            "Cinfras Thanos Transition"
        ]
    },
    "Gylia Lake North West": {
        "name": "Gylia Lake North West",
        "startX": -218,
        "startZ": -5427,
        "endX": -130,
        "endZ": -5273,
        "output": {
            "fish": 14400,
            "emerald": 9000
        },
        "routes": [
            "Gylia Lake North East",
            "Gylia Lake South West",
            "Fallen Village",
            "Jitak's Farm"
        ]
    },
    "Aldorei Valley Lower": {
        "name": "Aldorei Valley Lower",
        "startX": -714,
        "startZ": -4395,
        "endX": -559,
        "endZ": -4499,
        "output": {
            "emerald": 24300,
            "crop": 36000
        },
        "routes": [
            "Aldorei Valley Mid",
            "Aldorei Valley West Entrance"
        ]
    },
    "Aldorei's Waterfall": {
        "name": "Aldorei's Waterfall",
        "startX": -237,
        "startZ": -4514,
        "endX": -321,
        "endZ": -4648,
        "output": {
            "emerald": 36000,
            "crop": 43200
        },
        "routes": [
            "Aldorei Valley South Entrance",
            "Aldorei Valley Upper"
        ]
    },
    "Ghostly Path": {
        "name": "Ghostly Path",
        "startX": 35,
        "startZ": -4643,
        "endX": 107,
        "endZ": -4753,
        "output": {
            "ore": 5400,
            "emerald": 9000
        },
        "routes": [
            "Path To The Arch",
            "Burning Farm"
        ]
    },
    "Thanos": {
        "name": "Thanos",
        "startX": 51,
        "startZ": -5189,
        "endX": 194,
        "endZ": -5295,
        "output": {
            "ore": 3600,
            "emerald": 36000
        },
        "routes": [
            "Gylia Lake South East",
            "Path To Military Base",
            "Path To Thanos",
            "Path To Ozoth's Spire Lower"
        ]
    },
    "Military Base Upper": {
        "name": "Military Base Upper",
        "startX": 168,
        "startZ": -5408,
        "endX": 250,
        "endZ": -5518,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Military Base",
            "Military Base Lower"
        ]
    },
    "Path To Ozoth's Spire Upper": {
        "name": "Path To Ozoth's Spire Upper",
        "startX": 194,
        "startZ": -5165,
        "endX": 111,
        "endZ": -5045,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Path To Thanos",
            "Bandit Cave Lower",
            "Path To Ozoth's Spire Mid",
            "Cinfras Thanos Transition"
        ]
    },
    "Canyon Path North West": {
        "name": "Canyon Path North West",
        "startX": 110,
        "startZ": -4736,
        "endX": 194,
        "endZ": -4651,
        "output": {
            "emerald": 12150,
            "crop": 14400
        },
        "routes": [
            "Canyon Entrance Waterfall",
            "Canyon Path South East"
        ]
    },
    "Canyon Lower South East": {
        "name": "Canyon Lower South East",
        "startX": 265,
        "startZ": -4521,
        "endX": 199,
        "endZ": -4649,
        "output": {
            "ore": 3600,
            "emerald": 18000
        },
        "routes": [
            "Canyon Survivor",
            "Canyon Path South East",
            "Canyon Upper North West",
            "Canyon Path South West"
        ]
    },
    "Canyon Valley South": {
        "name": "Canyon Valley South",
        "startX": 263,
        "startZ": -4973,
        "endX": 199,
        "endZ": -5035,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Bandit Cave Lower",
            "Canyon Mountain East",
            "Bandit Camp Exit"
        ]
    },
    "Canyon Mountain East": {
        "name": "Canyon Mountain East",
        "startX": 271,
        "startZ": -5039,
        "endX": 337,
        "endZ": -4948,
        "output": {
            "ore": 72000,
            "emerald": 18000
        },
        "routes": [
            "Canyon Walk Way",
            "Canyon Valley South"
        ]
    },
    "Canyon Survivor": {
        "name": "Canyon Survivor",
        "startX": 338,
        "startZ": -4628,
        "endX": 269,
        "endZ": -4522,
        "output": {
            "emerald": 36000,
            "crop": 36000
        },
        "routes": [
            "Canyon Lower South East",
            "Cliff Side of the Lost"
        ]
    },
    "Wizard Tower North": {
        "name": "Wizard Tower North",
        "startX": 438,
        "startZ": -5037,
        "endX": 345,
        "endZ": -4966,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Krolton's Cave",
            "Bandits Toll"
        ]
    },
    "Valley of the Lost": {
        "name": "Valley of the Lost",
        "startX": 435,
        "startZ": -4511,
        "endX": 341,
        "endZ": -4670,
        "output": {
            "ore": 3600,
            "emerald": 18000
        },
        "routes": [
            "Canyon Of The Lost",
            "Canyon Fortress",
            "Temple of the Lost East"
        ]
    },
    "Canyon High Path": {
        "name": "Canyon High Path",
        "startX": 562,
        "startZ": -5313,
        "endX": 440,
        "endZ": -5191,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thanos Exit Upper",
            "Hive South",
            "Cliffside Waterfall"
        ]
    },
    "Air Temple Upper": {
        "name": "Air Temple Upper",
        "startX": 570,
        "startZ": -4833,
        "endX": 445,
        "endZ": -4692,
        "output": {
            "ore": 5400,
            "emerald": 9000
        },
        "routes": [
            "Air Temple Lower"
        ]
    },
    "Kandon Farm": {
        "name": "Kandon Farm",
        "startX": 710,
        "startZ": -4587,
        "endX": 614,
        "endZ": -4682,
        "output": {
            "emerald": 9000,
            "crop": 28800
        },
        "routes": [
            "Kandon Ridge"
        ]
    },
    "Entrance to Thesead South": {
        "name": "Entrance to Thesead South",
        "startX": 700,
        "startZ": -5030,
        "endX": 574,
        "endZ": -5181,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thesead",
            "Chained House",
            "Entrance to Thesead North",
            "Cliffside Valley"
        ]
    },
    "Thesead Suburbs": {
        "name": "Thesead Suburbs",
        "startX": 703,
        "startZ": -5374,
        "endX": 810,
        "endZ": -5216,
        "output": {
            "emerald": 18000,
            "crop": 43200
        },
        "routes": [
            "Ranol's Farm",
            "Chained House",
            "Thesead",
            "Entrance to Rodoroc"
        ]
    },
    "Molten Heights Portal": {
        "name": "Molten Heights Portal",
        "startX": 1535,
        "startZ": -5067,
        "endX": 1387,
        "endZ": -5366,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Lava Lake",
            "Lava Lake Bridge",
            "Crater Descent"
        ]
    },
    "Active Volcano": {
        "name": "Active Volcano",
        "startX": 1233,
        "startZ": -5553,
        "endX": 1379,
        "endZ": -5369,
        "output": {
            "emerald": 9000,
            "crop": 43200
        },
        "routes": [
            "Lava Lake Bridge",
            "Lava Lake",
            "Volcanic Slope"
        ]
    },
    "Snail Island": {
        "name": "Snail Island",
        "startX": 949,
        "startZ": -4885,
        "endX": 1057,
        "endZ": -4804,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Temple Island"
        ]
    },
    "Corkus City": {
        "name": "Corkus City",
        "startX": -1557,
        "startZ": -2835,
        "endX": -1680,
        "endZ": -3010,
        "output": {
            "fish": 3600,
            "emerald": 18000
        },
        "routes": [
            "Corkus Countryside",
            "Corkus Forest South",
            "Corkus Castle",
            "Corkus City South",
            "Corkus Forest North"
        ]
    },
    "Road To Mine": {
        "name": "Road To Mine",
        "startX": -1467,
        "startZ": -2834,
        "endX": -1557,
        "endZ": -2691,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Corkus City Mine",
            "Corkus City South",
            "Corkus Sea Cove"
        ]
    },
    "Corkus Forest South": {
        "name": "Corkus Forest South",
        "startX": -1681,
        "startZ": -2732,
        "endX": -1883,
        "endZ": -2861,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Corkus City",
            "Factory Entrance",
            "Corkus City South",
            "Corkus Forest North"
        ]
    },
    "Corkus Docks": {
        "name": "Corkus Docks",
        "startX": -1891,
        "startZ": -2997,
        "endX": -2022,
        "endZ": -3274,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Corkus Mountain"
        ]
    },
    "Corkus Statue": {
        "name": "Corkus Statue",
        "startX": -1322,
        "startZ": -2917,
        "endX": -1393,
        "endZ": -2836,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Corkus City Mine",
            "Corkus Outskirts"
        ]
    },
    "Frozen Fort": {
        "name": "Frozen Fort",
        "startX": 1501,
        "startZ": -4513,
        "endX": 1586,
        "endZ": -4789,
        "output": {
            "emerald": 9000,
            "crop": 28800
        },
        "routes": [
            "Sky Falls"
        ]
    },
    "Kandon Ridge": {
        "name": "Kandon Ridge",
        "startX": 885,
        "startZ": -4640,
        "endX": 719,
        "endZ": -4777,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Kandon Farm",
            "Old Coal Mine",
            "Path to Ahmsord Upper"
        ]
    },
    "Molten Reach": {
        "name": "Molten Reach",
        "startX": 1251,
        "startZ": -4894,
        "endX": 1500,
        "endZ": -4964,
        "output": {
            "ore": 10800,
            "emerald": 9000
        },
        "routes": [
            "Angel Refuge",
            "Molten Heights Portal"
        ]
    },
    "Wybel Island": {
        "name": "Wybel Island",
        "startX": 1355,
        "startZ": -4700,
        "endX": 1253,
        "endZ": -4595,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Ahmsord Outskirts",
            "Sky Falls",
            "Central Islands"
        ]
    },
    "Raider's Base Upper": {
        "name": "Raider's Base Upper",
        "startX": 1380,
        "startZ": -4457,
        "endX": 1551,
        "endZ": -4316,
        "output": {
            "ore": 7200,
            "emerald": 9000
        },
        "routes": [
            "Raider's Base Lower",
            "Sky Island Ascent"
        ]
    },
    "Santa's Hideout": {
        "name": "Santa's Hideout",
        "startX": 1057,
        "startZ": -3077,
        "endX": 1221,
        "endZ": -3209,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Mage Island",
            "Icy Island"
        ]
    },
    "Aldorei Lowlands": {
        "name": "Aldorei Lowlands",
        "startX": -337,
        "startZ": -4756,
        "endX": -225,
        "endZ": -4657,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Aldorei's Waterfall",
            "Aldorei's River",
            "Cinfras's Small Farm"
        ]
    },
    "Regular Island": {
        "name": "Regular Island",
        "startX": 1202,
        "startZ": -3764,
        "endX": 1458,
        "endZ": -3597,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Icy Island",
            "Dujgon Nation",
            "Jofash Docks"
        ]
    },
    "Royal Gate": {
        "name": "Royal Gate",
        "startX": -1822,
        "startZ": -1995,
        "endX": -2015,
        "endZ": -1725,
        "output": {
            "fish": 14400,
            "emerald": 9000
        },
        "routes": [
            "Phinas Farm"
        ]
    },
    "Lost Atoll": {
        "name": "Lost Atoll",
        "startX": -472,
        "startZ": -3590,
        "endX": -688,
        "endZ": -3385,
        "output": {
            "fish": 43200,
            "emerald": 9000
        },
        "routes": [
            "Volcano Upper",
            "Tree Island",
            "Pirate Town"
        ]
    },
    "The Silent Road": {
        "name": "The Silent Road",
        "startX": 540,
        "startZ": -1088,
        "endX": 704,
        "endZ": -961,
        "output": {
            "emerald": 16200,
            "crop": 7200
        },
        "routes": [
            "Mine Base Plains",
            "The Broken Road"
        ]
    },
    "Forgotten Town": {
        "name": "Forgotten Town",
        "startX": 480,
        "startZ": -493,
        "endX": 734,
        "endZ": -355,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Grey Ruins",
            "Forest of Eyes"
        ]
    },
    "Paths of Sludge": {
        "name": "Paths of Sludge",
        "startX": 1040,
        "startZ": -767,
        "endX": 892,
        "endZ": -870,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Lutho",
            "Toxic Drip"
        ]
    },
    "Void Valley": {
        "name": "Void Valley",
        "startX": 1082,
        "startZ": -1161,
        "endX": 1250,
        "endZ": -1078,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Gateway to Nothing"
        ]
    },
    "Heavenly Ingress": {
        "name": "Heavenly Ingress",
        "startX": -814,
        "startZ": -6015,
        "endX": -894,
        "endZ": -5928,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Light Forest South Entrance",
            "Field of Life"
        ]
    },
    "Azure Frontier": {
        "name": "Azure Frontier",
        "startX": -894,
        "startZ": -6164,
        "endX": -684,
        "endZ": -6313,
        "output": {
            "fish": 5400,
            "emerald": 9000
        },
        "routes": [
            "Otherwordly Monolith",
            "Field of Life",
            "Nexus of Light",
            "Path to Light"
        ]
    },
    "Ragni East Suburbs": {
        "name": "Ragni East Suburbs",
        "startX": -747,
        "startZ": -1653,
        "endX": -616,
        "endZ": -1776,
        "output": {
            "emerald": 9000,
            "crop": 9600
        },
        "routes": [
            "Ragni Plains",
            "Maltic Plains",
            "Ragni Main Entrance"
        ]
    },
    "Pigmen Ravines": {
        "name": "Pigmen Ravines",
        "startX": -784,
        "startZ": -1398,
        "endX": -617,
        "endZ": -1317,
        "output": {
            "ore": 7200,
            "emerald": 9000
        },
        "routes": [
            "Pigmen Ravines Entrance",
            "Abandoned Farm"
        ]
    },
    "Nemract Quarry": {
        "name": "Nemract Quarry",
        "startX": -105,
        "startZ": -2069,
        "endX": 20,
        "endZ": -1960,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Nemract Plains West",
            "Nemract Road",
            "Plains Coast"
        ]
    },
    "Nether Gate": {
        "name": "Nether Gate",
        "startX": 106,
        "startZ": -1341,
        "endX": 342,
        "endZ": -1222,
        "output": {
            "emerald": 16200,
            "crop": 3600
        },
        "routes": [
            "Nether Plains Lower",
            "Nether Plains Upper",
            "Plains Lake",
            "Corrupted Road"
        ]
    },
    "Nivla Woods Edge": {
        "name": "Nivla Woods Edge",
        "startX": -74,
        "startZ": -1777,
        "endX": -3,
        "endZ": -1485,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "North Nivla Woods",
            "Nivla Woods Exit",
            "Road to Elkurn",
            "Detlas Far Suburbs"
        ]
    },
    "Nesaak Plains South West": {
        "name": "Nesaak Plains South West",
        "startX": 70,
        "startZ": -820,
        "endX": -110,
        "endZ": -625,
        "output": {
            "wood": 7200,
            "emerald": 16200
        },
        "routes": [
            "Icy Descent",
            "Twain Lake",
            "Nesaak Plains South East",
            "Nesaak Plains Lower North West",
            "Nesaak Village",
            "Nesaak Bridge Transition"
        ]
    },
    "Great Bridge Jungle": {
        "name": "Great Bridge Jungle",
        "startX": -395,
        "startZ": -790,
        "endX": -515,
        "endZ": -610,
        "output": {
            "wood": 7200,
            "emerald": 18000
        },
        "routes": [
            "Jungle Lower",
            "Great Bridge Nesaak",
            "Herb Cave"
        ]
    },
    "Rymek East Mid": {
        "name": "Rymek East Mid",
        "startX": 1211,
        "startZ": -1410,
        "endX": 1480,
        "endZ": -1578,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Rymek East Upper",
            "Rymek East Lower",
            "Rymek West Mid"
        ]
    },
    "Desert Upper": {
        "name": "Desert Upper",
        "startX": 990,
        "startZ": -2270,
        "endX": 1195,
        "endZ": -2120,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Desert West Upper",
            "Mummy's Tomb",
            "Desert Mid-Upper"
        ]
    },
    "Savannah East Lower": {
        "name": "Savannah East Lower",
        "startX": 775,
        "startZ": -1675,
        "endX": 890,
        "endZ": -1860,
        "output": {
            "wood": 36000,
            "emerald": 24300
        },
        "routes": [
            "Savannah West Lower",
            "Ternaves",
            "Savannah East Upper"
        ]
    },
    "Nemract Road": {
        "name": "Nemract Road",
        "startX": 20,
        "startZ": -2065,
        "endX": 151,
        "endZ": -1871,
        "output": {
            "emerald": 9000,
            "crop": 5400
        },
        "routes": [
            "Nemract Quarry",
            "Nemract Plains East",
            "Nemract Plains West",
            "Ancient Nemract",
            "Nemract Town",
            "Nemract Cathedral"
        ]
    },
    "Zhight Island": {
        "name": "Zhight Island",
        "startX": -727,
        "startZ": -2846,
        "endX": -440,
        "endZ": -2629,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Pirate Town",
            "The Bear Zoo",
            "Legendary Island"
        ]
    },
    "Dujgon Nation": {
        "name": "Dujgon Nation",
        "startX": 1000,
        "startZ": -3550,
        "endX": 925,
        "endZ": -3380,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Regular Island",
            "Nodguj Nation",
            "Dead Island South West",
            "Icy Island",
            "Dead Island South East"
        ]
    },
    "Volcano Lower": {
        "name": "Volcano Lower",
        "startX": -1164,
        "startZ": -3831,
        "endX": -930,
        "endZ": -3530,
        "output": {
            "ore": 21600,
            "emerald": 9000
        },
        "routes": [
            "Volcano Upper",
            "Bloody Beach",
            "Llevigar Entrance"
        ]
    },
    "Desolate Valley": {
        "name": "Desolate Valley",
        "startX": 330,
        "startZ": -1040,
        "endX": 450,
        "endZ": -1170,
        "output": {
            "emerald": 9000,
            "crop": 7200
        },
        "routes": [
            "Nether Plains Lower",
            "Plains Lake",
            "Nesaak Transition"
        ]
    },
    "Llevigar Entrance": {
        "name": "Llevigar Entrance",
        "startX": -2048,
        "startZ": -4250,
        "endX": -1932,
        "endZ": -4403,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Llevigar"
        ]
    },
    "Llevigar Plains West Lower": {
        "name": "Llevigar Plains West Lower",
        "startX": -2060,
        "startZ": -4831,
        "endX": -2171,
        "endZ": -4909,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Llevigar Farm Plains West",
            "Llevigar Gate West",
            "Llevigar Plains East Lower",
            "Llevigar Plains West Upper"
        ]
    },
    "Swamp East Mid-Upper": {
        "name": "Swamp East Mid-Upper",
        "startX": -2059,
        "startZ": -5188,
        "endX": -1955,
        "endZ": -5309,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Swamp West Mid-Upper",
            "Swamp East Mid",
            "Swamp East Upper",
            "Swamp Plains Basin"
        ]
    },
    "Olux": {
        "name": "Olux",
        "startX": -1810,
        "startZ": -5397,
        "endX": -1668,
        "endZ": -5597,
        "output": {
            "ore": 3600,
            "emerald": 288000
        },
        "routes": [
            "Swamp Dark Forest Transition Mid",
            "Entrance to Olux",
            "Swamp Dark Forest Transition Upper",
            "Swamp Mountain Transition Upper"
        ]
    },
    "Quartz Mines South East": {
        "name": "Quartz Mines South East",
        "startX": -1391,
        "startZ": -4352,
        "endX": -1607,
        "endZ": -4524,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Quartz Mines North East",
            "Quartz Mines South West"
        ]
    },
    "Loamsprout Camp": {
        "name": "Loamsprout Camp",
        "startX": -1800,
        "startZ": -4852,
        "endX": -1670,
        "endZ": -4684,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Sablestone Camp",
            "Llevigar Farm",
            "Orc Road",
            "Quartz Mines North West"
        ]
    },
    "Road To Light Forest": {
        "name": "Road To Light Forest",
        "startX": -1387,
        "startZ": -4595,
        "endX": -1252,
        "endZ": -4713,
        "output": {
            "wood": 36000,
            "emerald": 9000
        },
        "routes": [
            "Light Forest Entrance",
            "Fleris Trail",
            "Leadin Fortress"
        ]
    },
    "Aldorei Valley West Entrance": {
        "name": "Aldorei Valley West Entrance",
        "startX": -736,
        "startZ": -4428,
        "endX": -802,
        "endZ": -4553,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Aldorei Valley Lower",
            "Hobbit River",
            "Mantis Nest"
        ]
    },
    "Light Forest East Lower": {
        "name": "Light Forest East Lower",
        "startX": -926,
        "startZ": -4700,
        "endX": -805,
        "endZ": -4552,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest West Mid",
            "Hobbit River",
            "Light Forest East Mid",
            "Mantis Nest"
        ]
    },
    "Gelibord Castle": {
        "name": "Gelibord Castle",
        "startX": -1027,
        "startZ": -5470,
        "endX": -1180,
        "endZ": -5600,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Gelibord Corrupted Farm",
            "Taproot Descent"
        ]
    },
    "Entrance to Kander": {
        "name": "Entrance to Kander",
        "startX": -896,
        "startZ": -5408,
        "endX": -792,
        "endZ": -5233,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Viscera Pits West",
            "Abandoned Manor",
            "Path to Talor",
            "Gelibord"
        ]
    },
    "Old Crossroads North": {
        "name": "Old Crossroads North",
        "startX": -648,
        "startZ": -5314,
        "endX": -567,
        "endZ": -5400,
        "output": {
            "emerald": 9000,
            "crop": 14400
        },
        "routes": [
            "Lexdale",
            "Path to Talor",
            "Old Crossroads South",
            "Fungal Grove"
        ]
    },
    "Dark Forest Cinfras Transition": {
        "name": "Dark Forest Cinfras Transition",
        "startX": -290,
        "startZ": -5292,
        "endX": -392,
        "endZ": -5116,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Cinfras Outskirts",
            "Gylia Lake South West",
            "Fallen Village"
        ]
    },
    "Gylia Lake South East": {
        "name": "Gylia Lake South East",
        "startX": 30,
        "startZ": -5157,
        "endX": -127,
        "endZ": -5271,
        "output": {
            "fish": 14400,
            "emerald": 9000
        },
        "routes": [
            "Thanos",
            "Gylia Lake North East",
            "Gylia Lake South West",
            "Cinfras County Upper"
        ]
    },
    "Aldorei Valley Upper": {
        "name": "Aldorei Valley Upper",
        "startX": -557,
        "startZ": -4501,
        "endX": -322,
        "endZ": -4656,
        "output": {
            "emerald": 24300,
            "crop": 43200
        },
        "routes": [
            "Aldorei Valley Mid",
            "Aldorei's Waterfall"
        ]
    },
    "Burning Airship": {
        "name": "Burning Airship",
        "startX": 35,
        "startZ": -4859,
        "endX": 107,
        "endZ": -4955,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Bandit Cave Upper",
            "Cinfras Thanos Transition",
            "Burning Farm"
        ]
    },
    "Path To Ozoth's Spire Lower": {
        "name": "Path To Ozoth's Spire Lower",
        "startX": 260,
        "startZ": -5298,
        "endX": 199,
        "endZ": -5169,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thanos",
            "Military Base Lower"
        ]
    },
    "Canyon Waterfall North": {
        "name": "Canyon Waterfall North",
        "startX": 115,
        "startZ": -4380,
        "endX": 194,
        "endZ": -4518,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Upper North West"
        ]
    },
    "Thanos Exit": {
        "name": "Thanos Exit",
        "startX": 338,
        "startZ": -5310,
        "endX": 262,
        "endZ": -5168,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Thanos Exit Upper"
        ]
    },
    "Thanos Exit Upper": {
        "name": "Thanos Exit Upper",
        "startX": 347,
        "startZ": -5313,
        "endX": 438,
        "endZ": -5183,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Hive South",
            "Canyon High Path",
            "Thanos Exit",
            "Hive",
            "Bandits Toll"
        ]
    },
    "Krolton's Cave": {
        "name": "Krolton's Cave",
        "startX": 341,
        "startZ": -4841,
        "endX": 438,
        "endZ": -4962,
        "output": {
            "fish": 14400,
            "emerald": 9000
        },
        "routes": [
            "Temple of the Lost East",
            "Canyon Mountain South",
            "Air Temple Lower",
            "Wizard Tower North"
        ]
    },
    "Canyon Of The Lost": {
        "name": "Canyon Of The Lost",
        "startX": 443,
        "startZ": -4566,
        "endX": 570,
        "endZ": -4392,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Kandon-Beda",
            "Cliff Side of the Lost",
            "Cliffside Lake",
            "Valley of the Lost"
        ]
    },
    "Cherry Blossom Forest": {
        "name": "Cherry Blossom Forest",
        "startX": 699,
        "startZ": -5378,
        "endX": 575,
        "endZ": -5551,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Ranol's Farm",
            "Hive South",
            "Chained House"
        ]
    },
    "Lava Lake Bridge": {
        "name": "Lava Lake Bridge",
        "startX": 1230,
        "startZ": -5240,
        "endX": 1379,
        "endZ": -5366,
        "output": {
            "ore": 43200,
            "emerald": 36000
        },
        "routes": [
            "Molten Heights Portal",
            "Crater Descent",
            "Active Volcano"
        ]
    },
    "Dernel Jungle Mid": {
        "name": "Dernel Jungle Mid",
        "startX": -744,
        "startZ": -528,
        "endX": -965,
        "endZ": -264,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Dernel Jungle Lower",
            "Dernel Jungle Upper"
        ]
    },
    "Legendary Island": {
        "name": "Legendary Island",
        "startX": -1212,
        "startZ": -2576,
        "endX": -1001,
        "endZ": -2342,
        "output": {
            "ore": 3600,
            "fish": 3600,
            "wood": 3600,
            "crop": 3600
        },
        "routes": [
            "Zhight Island",
            "Southern Outpost"
        ]
    },
    "Corkus Sea Port": {
        "name": "Corkus Sea Port",
        "startX": -1680,
        "startZ": -2512,
        "endX": -1437,
        "endZ": -2307,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Lighthouse Plateau",
            "Fallen Factory",
            "Corkus Sea Cove",
            "Ruined Houses"
        ]
    },
    "Path to Ahmsord Lower": {
        "name": "Path to Ahmsord Lower",
        "startX": 779,
        "startZ": -4480,
        "endX": 885,
        "endZ": -4570,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Sky Castle",
            "Path to Ahmsord Upper",
            "Ahmsord"
        ]
    },
    "Swamp Island": {
        "name": "Swamp Island",
        "startX": 1178,
        "startZ": -4754,
        "endX": 1101,
        "endZ": -4915,
        "output": {
            "wood": 5400,
            "emerald": 9000
        },
        "routes": [
            "Temple Island",
            "Ahmsord Outskirts",
            "Astraulus' Tower"
        ]
    },
    "Jofash Tunnel": {
        "name": "Jofash Tunnel",
        "startX": 1304,
        "startZ": -4354,
        "endX": 1126,
        "endZ": -4176,
        "output": {
            "ore": 7200,
            "emerald": 9000
        },
        "routes": [
            "Sky Island Ascent",
            "Jofash Docks"
        ]
    },
    "Rodoroc": {
        "name": "Rodoroc",
        "startX": 1200,
        "startZ": -5067,
        "endX": 965,
        "endZ": -5238,
        "output": {
            "ore": 36000,
            "emerald": 288000
        },
        "routes": [
            "Crater Descent"
        ]
    },
    "Orc Battlegrounds": {
        "name": "Orc Battlegrounds",
        "startX": -1460,
        "startZ": -5024,
        "endX": -1282,
        "endZ": -4870,
        "output": {
            "ore": 36000,
            "emerald": 9000
        },
        "routes": [
            "Fortress South",
            "Leadin Fortress"
        ]
    },
    "Worm Tunnel": {
        "name": "Worm Tunnel",
        "startX": 641,
        "startZ": -767,
        "endX": 543,
        "endZ": -640,
        "output": {
            "emerald": 12000,
            "crop": 5400
        },
        "routes": [
            "Grey Ruins",
            "The Broken Road"
        ]
    },
    "Toxic Caves": {
        "name": "Toxic Caves",
        "startX": 1017,
        "startZ": -1146,
        "endX": 844,
        "endZ": -993,
        "output": {
            "fish": 14400,
            "emerald": 12000
        },
        "routes": [
            "Toxic Drip"
        ]
    },
    "Field of Life": {
        "name": "Field of Life",
        "startX": -894,
        "startZ": -6010,
        "endX": -827,
        "endZ": -6164,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Heavenly Ingress",
            "Azure Frontier",
            "Primal Fen",
            "Luminous Plateau"
        ]
    },
    "Nivla Woods Entrance": {
        "name": "Nivla Woods Entrance",
        "startX": -435,
        "startZ": -1530,
        "endX": -372,
        "endZ": -1652,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "Road to Time Valley",
            "Nivla Woods",
            "Plains",
            "Emerald Trail"
        ]
    },
    "Abandoned Farm": {
        "name": "Abandoned Farm",
        "startX": -577,
        "startZ": -1395,
        "endX": -478,
        "endZ": -1335,
        "output": {
            "emerald": 9000,
            "crop": 9600
        },
        "routes": [
            "Time Valley",
            "Pigmen Ravines"
        ]
    },
    "Detlas": {
        "name": "Detlas",
        "startX": 402,
        "startZ": -1657,
        "endX": 536,
        "endZ": -1518,
        "output": {
            "emerald": 18000,
            "crop": 3600
        },
        "routes": [
            "Detlas Savannah Transition",
            "Detlas Trail East Plains",
            "Detlas Close Suburbs"
        ]
    },
    "Nesaak Village": {
        "name": "Nesaak Village",
        "startX": 75,
        "startZ": -850,
        "endX": 160,
        "endZ": -760,
        "output": {
            "wood": 9600,
            "emerald": 144000
        },
        "routes": [
            "Nesaak Plains North East",
            "Nesaak Plains South West",
            "Bob's Tomb",
            "Nesaak Plains South East",
            "Nesaak Plains Lower North West"
        ]
    },
    "Rymek West Upper": {
        "name": "Rymek West Upper",
        "startX": 1190,
        "startZ": -1665,
        "endX": 975,
        "endZ": -1540,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Rymek East Upper",
            "Desert West Lower",
            "Desert Lower",
            "Rymek West Mid"
        ]
    },
    "Bremminglar": {
        "name": "Bremminglar",
        "startX": 760,
        "startZ": -2070,
        "endX": 615,
        "endZ": -2120,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Lion Lair",
            "Savannah West Upper"
        ]
    },
    "Durum Isles East": {
        "name": "Durum Isles East",
        "startX": 482,
        "startZ": -2841,
        "endX": 548,
        "endZ": -2785,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Durum Isles Center",
            "Mage Island"
        ]
    },
    "Ternaves Plains Lower": {
        "name": "Ternaves Plains Lower",
        "startX": 655,
        "startZ": -1430,
        "endX": 880,
        "endZ": -1330,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Abandoned Pass",
            "Ternaves",
            "Mine Base Plains",
            "Ternaves Plains Upper",
            "Mining Base Upper"
        ]
    },
    "Llevigar Farm Plains West": {
        "name": "Llevigar Farm Plains West",
        "startX": -2060,
        "startZ": -4746,
        "endX": -2171,
        "endZ": -4828,
        "output": {
            "emerald": 16200,
            "crop": 36000
        },
        "routes": [
            "Llevigar Farm Plains East",
            "Llevigar Plains West Lower",
            "Llevigar Gate West"
        ]
    },
    "Swamp Dark Forest Transition Mid": {
        "name": "Swamp Dark Forest Transition Mid",
        "startX": -1519,
        "startZ": -5291,
        "endX": -1626,
        "endZ": -5492,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Entrance to Olux",
            "Swamp Dark Forest Transition Upper",
            "Olux",
            "Swamp Dark Forest Transition Lower",
            "Taproot Descent"
        ]
    },
    "Orc Lake": {
        "name": "Orc Lake",
        "startX": -1933,
        "startZ": -4962,
        "endX": -1816,
        "endZ": -4854,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Llevigar Plains East Upper",
            "Sunspark Camp",
            "Orc Road",
            "Sablestone Camp",
            "Llevigar Plains East Lower"
        ]
    },
    "Efilim South East Plains": {
        "name": "Efilim South East Plains",
        "startX": -949,
        "startZ": -4942,
        "endX": -1014,
        "endZ": -4847,
        "output": {
            "emerald": 24300,
            "crop": 36000
        },
        "routes": [
            "Efilim East Plains",
            "Light Forest East Upper",
            "Light Forest West Upper",
            "Efilim South Plains"
        ]
    },
    "Path to Cinfras": {
        "name": "Path to Cinfras",
        "startX": -734,
        "startZ": -4842,
        "endX": -818,
        "endZ": -4953,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest East Upper",
            "Cinfras Entrance"
        ]
    },
    "Path to Talor": {
        "name": "Path to Talor",
        "startX": -653,
        "startZ": -5231,
        "endX": -785,
        "endZ": -5401,
        "output": {
            "ore": 36000,
            "emerald": 9000
        },
        "routes": [
            "Dark Forest Village",
            "Viscera Pits East",
            "Old Crossroads South",
            "Kander Mines",
            "Old Crossroads North",
            "Entrance to Kander"
        ]
    },
    "Cinfras County Lower": {
        "name": "Cinfras County Lower",
        "startX": 3,
        "startZ": -4760,
        "endX": -127,
        "endZ": -4640,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Cinfras's Small Farm",
            "Aldorei's North Exit",
            "Cinfras County Mid-Lower"
        ]
    },
    "Aldorei's Arch": {
        "name": "Aldorei's Arch",
        "startX": 33,
        "startZ": -4367,
        "endX": 107,
        "endZ": -4519,
        "output": {
            "ore": 5400,
            "emerald": 9000
        },
        "routes": [
            "Path To The Arch",
            "Canyon Upper North West"
        ]
    },
    "Bandit Cave Upper": {
        "name": "Bandit Cave Upper",
        "startX": 194,
        "startZ": -4956,
        "endX": 111,
        "endZ": -4872,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Burning Airship"
        ]
    },
    "Canyon Waterfall Mid North": {
        "name": "Canyon Waterfall Mid North",
        "startX": 337,
        "startZ": -4855,
        "endX": 271,
        "endZ": -4741,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Canyon Path North Mid",
            "Canyon Fortress",
            "Canyon Mountain South"
        ]
    },
    "Cliffside Valley": {
        "name": "Cliffside Valley",
        "startX": 563,
        "startZ": -5079,
        "endX": 440,
        "endZ": -4975,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Entrance to Thesead North",
            "Entrance to Thesead South",
            "Bandits Toll",
            "Air Temple Lower"
        ]
    },
    "Entrance to Rodoroc": {
        "name": "Entrance to Rodoroc",
        "startX": 854,
        "startZ": -5257,
        "endX": 1113,
        "endZ": -5367,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Rodoroc",
            "Eltom",
            "Thesead Suburbs"
        ]
    },
    "Corkus City South": {
        "name": "Corkus City South",
        "startX": -1559,
        "startZ": -2662,
        "endX": -1679,
        "endZ": -2833,
        "output": {
            "fish": 3600,
            "emerald": 12150
        },
        "routes": [
            "Factory Entrance",
            "Road To Mine",
            "Fallen Factory",
            "Corkus Forest South",
            "Corkus City"
        ]
    },
    "Bloody Beach": {
        "name": "Bloody Beach",
        "startX": -1376,
        "startZ": -3225,
        "endX": -1097,
        "endZ": -3426,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Corkus Countryside",
            "Pirate Town",
            "Volcano Lower",
            "Corkus Outskirts",
            "Avos Temple"
        ]
    },
    "Sky Island Ascent": {
        "name": "Sky Island Ascent",
        "startX": 1180,
        "startZ": -4524,
        "endX": 1379,
        "endZ": -4355,
        "output": {
            "ore": 10800,
            "emerald": 9000
        },
        "routes": [
            "Central Islands",
            "Sky Falls",
            "Jofash Tunnel",
            "Raider's Base Upper"
        ]
    },
    "Twisted Ridge": {
        "name": "Twisted Ridge",
        "startX": -1020,
        "startZ": -5603,
        "endX": -910,
        "endZ": -5343,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Viscera Pits West",
            "Entrance to Kander"
        ]
    },
    "Sinister Forest": {
        "name": "Sinister Forest",
        "startX": 815,
        "startZ": -506,
        "endX": 1059,
        "endZ": -629,
        "output": {
            "wood": 36000,
            "emerald": 12000
        },
        "routes": [
            "Forest of Eyes",
            "Lutho"
        ]
    },
    "Path to Light": {
        "name": "Path to Light",
        "startX": -775,
        "startZ": -6164,
        "endX": -827,
        "endZ": -6010,
        "output": {
            "fish": 3600,
            "emerald": 9000
        },
        "routes": [
            "Azure Frontier",
            "Otherwordly Monolith"
        ]
    },
    "North Nivla Woods": {
        "name": "North Nivla Woods",
        "startX": -194,
        "startZ": -1632,
        "endX": -86,
        "endZ": -1800,
        "output": {
            "wood": 7200,
            "emerald": 9000
        },
        "routes": [
            "Nivla Woods Exit",
            "Plains",
            "Nivla Woods Edge"
        ]
    },
    "Jungle Lake": {
        "name": "Jungle Lake",
        "startX": -601,
        "startZ": -791,
        "endX": -680,
        "endZ": -940,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Jungle Mid",
            "City of Troms",
            "Temple of Legends"
        ]
    },
    "Nemract Cathedral": {
        "name": "Nemract Cathedral",
        "startX": 385,
        "startZ": -2180,
        "endX": 270,
        "endZ": -2030,
        "output": {
            "fish": 9600,
            "emerald": 9000
        },
        "routes": [
            "Cathedral Harbour",
            "Nemract Road",
            "Ancient Nemract",
            "Nemract Town"
        ]
    },
    "Detlas Savannah Transition": {
        "name": "Detlas Savannah Transition",
        "startX": 545,
        "startZ": -1520,
        "endX": 650,
        "endZ": -1670,
        "output": {
            "emerald": 9000,
            "crop": 3600
        },
        "routes": [
            "Detlas",
            "Savannah West Lower",
            "Mine Base Plains",
            "Ternaves Plains Upper"
        ]
    },
    "Swamp Mountain Transition Mid": {
        "name": "Swamp Mountain Transition Mid",
        "startX": -2127,
        "startZ": -5466,
        "endX": -2066,
        "endZ": -5603,
        "output": {
            "fish": 36000,
            "emerald": 9000
        },
        "routes": [
            "Swamp West Upper",
            "Swamp Mountain Transition Mid-Upper",
            "Swamp Mountain Transition Lower"
        ]
    },
    "Light Forest West Mid": {
        "name": "Light Forest West Mid",
        "startX": -929,
        "startZ": -4552,
        "endX": -1014,
        "endZ": -4706,
        "output": {
            "wood": 3600,
            "emerald": 16200
        },
        "routes": [
            "Light Forest East Lower",
            "Light Forest Entrance",
            "Light Forest West Upper",
            "Light Forest West Lower"
        ]
    },
    "Heart of Decay": {
        "name": "Heart of Decay",
        "startX": -598,
        "startZ": -5580,
        "endX": -454,
        "endZ": -5518,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Lexdale",
            "Mushroom Hill",
            "Decayed Basin"
        ]
    },
    "Path To Military Base": {
        "name": "Path To Military Base",
        "startX": 51,
        "startZ": -5297,
        "endX": 166,
        "endZ": -5391,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Military Base",
            "Thanos"
        ]
    },
    "Mountain Edge": {
        "name": "Mountain Edge",
        "startX": 437,
        "startZ": -4314,
        "endX": 336,
        "endZ": -4392,
        "output": {
            "wood": 14400,
            "emerald": 9000
        },
        "routes": [
            "Cliff Side of the Lost"
        ]
    },
    "Ahmsord": {
        "name": "Ahmsord",
        "startX": 1163,
        "startZ": -4462,
        "endX": 942,
        "endZ": -4604,
        "output": {
            "wood": 5400,
            "emerald": 288000
        },
        "routes": [
            "Temple Island",
            "Path to Ahmsord Lower",
            "Path to Ahmsord Upper",
            "Sky Island Ascent"
        ]
    },
    "Dragonling Nests": {
        "name": "Dragonling Nests",
        "startX": 925,
        "startZ": -4916,
        "endX": 1101,
        "endZ": -5016,
        "output": {
            "wood": 72000,
            "emerald": 9000
        },
        "routes": [
            "Astraulus' Tower",
            "Snail Island"
        ]
    },
    "Lighthouse Plateau": {
        "name": "Lighthouse Plateau",
        "startX": -1633,
        "startZ": -2162,
        "endX": -1445,
        "endZ": -2306,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Phinas Farm",
            "Corkus Sea Port",
            "Southern Outpost"
        ]
    },
    "Twain Lake": {
        "name": "Twain Lake",
        "startX": 0,
        "startZ": -330,
        "endX": 80,
        "endZ": -530,
        "output": {
            "fish": 18000,
            "emerald": 16200
        },
        "routes": [
            "Twain Mansion",
            "Nesaak Plains South West"
        ]
    },
    "Dead Island North West": {
        "name": "Dead Island North West",
        "startX": 870,
        "startZ": -3920,
        "endX": 745,
        "endZ": -4040,
        "output": {
            "ore": 900,
            "fish": 900,
            "wood": 900,
            "crop": 900
        },
        "routes": [
            "Dead Island South West",
            "Dead Island North East"
        ]
    },
    "Forgotten Path": {
        "name": "Forgotten Path",
        "startX": -1603,
        "startZ": -4969,
        "endX": -1529,
        "endZ": -5100,
        "output": {
            "emerald": 16200,
            "crop": 43200
        },
        "routes": [
            "Iron Road",
            "Swamp Dark Forest Transition Lower",
            "Goblin Plains East"
        ]
    },
    "Gert Camp": {
        "name": "Gert Camp",
        "startX": 30,
        "startZ": -5447,
        "endX": -83,
        "endZ": -5605,
        "output": {
            "wood": 3600,
            "emerald": 9000
        },
        "routes": [
            "Gylia Lake North East",
            "Jitak's Farm"
        ]
    },
    "Cliffside Passage North": {
        "name": "Cliffside Passage North",
        "startX": 572,
        "startZ": -4818,
        "endX": 700,
        "endZ": -4933,
        "output": {
            "wood": 28800,
            "emerald": 9000
        },
        "routes": [
            "Entrance to Thesead North",
            "Cliffside Passage"
        ]
    },
    "Icy Descent": {
        "name": "Icy Descent",
        "startX": -311,
        "startZ": -358,
        "endX": -104,
        "endZ": -496,
        "output": {
            "wood": 3600,
            "emerald": 12150
        },
        "routes": [
            "Tower of Ascension",
            "Lusuco"
        ]
    },
    "Maltic": {
        "name": "Maltic",
        "startX": -604,
        "startZ": -1945,
        "endX": -475,
        "endZ": -1884,
        "output": {
            "ore": 2400,
            "fish": 2400,
            "wood": 2400,
            "crop": 2400
        },
        "routes": [
            "Ragni Plains",
            "Maltic Plains",
            "Maltic Coast",
            "South Farmers Valley",
            "Coastal Trail"
        ]
    },
    "Swamp East Lower": {
        "name": "Swamp East Lower",
        "startX": -2059,
        "startZ": -5003,
        "endX": -1956,
        "endZ": -5074,
        "output": {
            "ore": 3600,
            "emerald": 9000
        },
        "routes": [
            "Sunspark Camp",
            "Swamp West Lower",
            "Swamp East Mid",
            "Llevigar Plains East Upper"
        ]
    },
    "Canyon Path North Mid": {
        "name": "Canyon Path North Mid",
        "startX": 200,
        "startZ": -4743,
        "endX": 264,
        "endZ": -4875,
        "output": {
            "ore": 3600,
            "emerald": 12150
        },
        "routes": [
            "Bandit Camp Exit",
            "Canyon Waterfall Mid North",
            "Canyon Entrance Waterfall",
            "Canyon Path South West"
        ]
    },
    "Bizarre Passage": {
        "name": "Bizarre Passage",
        "startX": 1187,
        "startZ": -680,
        "endX": 1388,
        "endZ": -530,
        "output": {
            "emerald": 12000,
            "crop": 3600
        },
        "routes": [
            "Final Step",
            "The Gate"
        ]
    },
    "Almuj City": {
        "name": "Almuj City",
        "startX": 1050,
        "startZ": -1900,
        "endX": 840,
        "endZ": -2060,
        "output": {
            "emerald": 48600,
            "crop": 18000
        },
        "routes": [
            "Desert West Upper",
            "Savannah East Upper",
            "Desert West Lower",
            "Desert Mid-Lower",
            "Desert Mid-Upper"
        ]
    },
    "Corkus Mountain": {
        "name": "Corkus Mountain",
        "startX": -1888,
        "startZ": -2997,
        "endX": -1683,
        "endZ": -3175,
        "output": {
            "fish": 7200,
            "emerald": 9000
        },
        "routes": [
            "Corkus Countryside",
            "Corkus Docks",
            "Corkus Forest North"
        ]
    },
    "Mansion of Insanity": {
        "name": "Mansion of Insanity",
        "startX": -1237,
        "startZ": -5116,
        "endX": -1144,
        "endZ": -5268,
        "output": {
            "ore": 4500,
            "fish": 4500,
            "wood": 4500,
            "crop": 4500
        },
        "routes": [
            "Fortress North",
            "Fortress South",
            "Twisted Housing"
        ]
    }
}
