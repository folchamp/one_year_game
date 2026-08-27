"use strict";

class Data {
    static resources = {
        "water": {
            "displayName": "Eau",
            "actions": {
                "draw": {
                    "displayName": "Puiser",
                    "requiresOneOf": [],
                    "get": "water",
                    "learn": [
                        "hygiene",
                        "hydrology",
                        "water_sources"
                    ],
                    "fatigue": 5
                },
                "boil": {
                    "displayName": "Faire bouillir",
                    "requiresOneOf": [
                        "fire",
                        "cooking",
                        "containers"
                    ],
                    "get": "clean_water",
                    "learn": [
                        "purification",
                        "hygiene",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "sample": {
                    "displayName": "Prélever un échantillon",
                    "requiresOneOf": [
                        "science",
                        "hydrology",
                        "sampling"
                    ],
                    "get": "water_sample",
                    "learn": [
                        "water_quality",
                        "sampling",
                        "measurement"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "water",
            "imageName": "water",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "clean_water": {
            "displayName": "Eau potable",
            "actions": {
                "drink": {
                    "displayName": "Boire",
                    "requiresOneOf": [],
                    "get": "clean_water",
                    "learn": [
                        "nutrition",
                        "hygiene",
                        "water_quality"
                    ],
                    "fatigue": 5
                },
                "store": {
                    "displayName": "Stocker",
                    "requiresOneOf": [
                        "storage",
                        "containers",
                        "water_storage"
                    ],
                    "get": "clean_water",
                    "learn": [
                        "water_storage",
                        "food_storage",
                        "sanitation"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "water_quality",
                        "measurement"
                    ],
                    "get": "water_data",
                    "learn": [
                        "water_quality",
                        "chemistry",
                        "microbiology"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "clean_water",
            "imageName": "clean_water",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "water_sample": {
            "displayName": "Échantillon d'eau",
            "actions": {
                "examine": {
                    "displayName": "Examiner",
                    "requiresOneOf": [],
                    "get": "water_data",
                    "learn": [
                        "observation",
                        "water_quality",
                        "classification"
                    ],
                    "fatigue": 5
                },
                "compare": {
                    "displayName": "Comparer",
                    "requiresOneOf": [
                        "comparison",
                        "science",
                        "measurement"
                    ],
                    "get": "water_data",
                    "learn": [
                        "hydrology",
                        "chemistry",
                        "causality"
                    ],
                    "fatigue": 5
                },
                "test": {
                    "displayName": "Tester",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "water_quality"
                    ],
                    "get": "water_data",
                    "learn": [
                        "contamination",
                        "microbiology",
                        "experimentation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "water_sample",
            "imageName": "water_sample",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "rainwater": {
            "displayName": "Eau de pluie",
            "actions": {
                "collect": {
                    "displayName": "Recueillir",
                    "requiresOneOf": [],
                    "get": "rainwater",
                    "learn": [
                        "rainwater",
                        "weather",
                        "water_storage"
                    ],
                    "fatigue": 5
                },
                "measure": {
                    "displayName": "Mesurer",
                    "requiresOneOf": [
                        "measurement",
                        "science",
                        "weather"
                    ],
                    "get": "weather_data",
                    "learn": [
                        "meteorology",
                        "hydrology",
                        "recording"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "water_quality"
                    ],
                    "get": "water_data",
                    "learn": [
                        "water_quality",
                        "chemistry",
                        "atmosphere"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "rainwater",
            "imageName": "rainwater",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "wood": {
            "displayName": "Bois",
            "actions": {
                "gather": {
                    "displayName": "Ramasser",
                    "requiresOneOf": [],
                    "get": "wood",
                    "learn": [
                        "wood_working",
                        "observation",
                        "tools"
                    ],
                    "fatigue": 5
                },
                "cut": {
                    "displayName": "Couper",
                    "requiresOneOf": [
                        "tools",
                        "cutting",
                        "wood_working"
                    ],
                    "get": "lumber",
                    "learn": [
                        "woodworking",
                        "timber",
                        "shaping"
                    ],
                    "fatigue": 5
                },
                "burn": {
                    "displayName": "Brûler",
                    "requiresOneOf": [
                        "fire",
                        "combustion",
                        "heat"
                    ],
                    "get": "ash",
                    "learn": [
                        "combustion",
                        "heat",
                        "charcoal_making"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "wood",
            "imageName": "wood",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "lumber": {
            "displayName": "Bois d'œuvre",
            "actions": {
                "shape": {
                    "displayName": "Façonner",
                    "requiresOneOf": [],
                    "get": "wooden_parts",
                    "learn": [
                        "woodworking",
                        "shaping",
                        "crafting"
                    ],
                    "fatigue": 5
                },
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [
                        "drying",
                        "wood_working",
                        "temperature"
                    ],
                    "get": "seasoned_wood",
                    "learn": [
                        "seasoning",
                        "woodworking",
                        "preservation"
                    ],
                    "fatigue": 5
                },
                "build": {
                    "displayName": "Construire",
                    "requiresOneOf": [
                        "construction",
                        "carpentry",
                        "architecture"
                    ],
                    "get": "wooden_structure",
                    "learn": [
                        "carpentry",
                        "construction",
                        "architecture"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "lumber",
            "imageName": "lumber",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "charcoal": {
            "displayName": "Charbon de bois",
            "actions": {
                "produce": {
                    "displayName": "Produire",
                    "requiresOneOf": [],
                    "get": "charcoal",
                    "learn": [
                        "charcoal_making",
                        "combustion",
                        "heat"
                    ],
                    "fatigue": 5
                },
                "burn": {
                    "displayName": "Brûler",
                    "requiresOneOf": [
                        "combustion",
                        "fire",
                        "temperature"
                    ],
                    "get": "heat",
                    "learn": [
                        "metallurgy",
                        "kiln_firing",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "material_science"
                    ],
                    "get": "carbon_data",
                    "learn": [
                        "chemistry",
                        "material_science",
                        "experimentation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "charcoal",
            "imageName": "charcoal",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "sandstone": {
            "displayName": "Grès",
            "actions": {
                "collect": {
                    "displayName": "Ramasser",
                    "requiresOneOf": [],
                    "get": "sandstone",
                    "learn": [
                        "geology",
                        "observation",
                        "stone_working"
                    ],
                    "fatigue": 5
                },
                "knap": {
                    "displayName": "Tailler",
                    "requiresOneOf": [
                        "tools",
                        "stone_knapping",
                        "crafting"
                    ],
                    "get": "stone_tools",
                    "learn": [
                        "stone_knapping",
                        "shaping",
                        "cutting"
                    ],
                    "fatigue": 5
                },
                "grind": {
                    "displayName": "Broyer",
                    "requiresOneOf": [
                        "grinding",
                        "tools",
                        "stone_working"
                    ],
                    "get": "stone_powder",
                    "learn": [
                        "grinding",
                        "material_science",
                        "chemistry"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "sandstone",
            "imageName": "sandstone",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "flint": {
            "displayName": "Silex",
            "actions": {
                "knap": {
                    "displayName": "Tailler",
                    "requiresOneOf": [],
                    "get": "flint_tool",
                    "learn": [
                        "flint_knapping",
                        "stone_knapping",
                        "cutting"
                    ],
                    "fatigue": 5
                },
                "strike": {
                    "displayName": "Frapper",
                    "requiresOneOf": [
                        "fire",
                        "tools",
                        "flint_knapping"
                    ],
                    "get": "spark",
                    "learn": [
                        "combustion",
                        "fire",
                        "experimentation"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "geology",
                        "science",
                        "mineral_identification"
                    ],
                    "get": "flint_data",
                    "learn": [
                        "geology",
                        "material_science",
                        "classification"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "flint",
            "imageName": "flint",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "clay": {
            "displayName": "Argile",
            "actions": {
                "collect": {
                    "displayName": "Prélever",
                    "requiresOneOf": [],
                    "get": "clay",
                    "learn": [
                        "clay_identification",
                        "geology",
                        "clay_working"
                    ],
                    "fatigue": 5
                },
                "shape": {
                    "displayName": "Façonner",
                    "requiresOneOf": [
                        "clay_working",
                        "shaping",
                        "crafting"
                    ],
                    "get": "pottery",
                    "learn": [
                        "pottery",
                        "containers",
                        "shaping"
                    ],
                    "fatigue": 5
                },
                "fire": {
                    "displayName": "Cuire",
                    "requiresOneOf": [
                        "fire",
                        "kiln",
                        "heat"
                    ],
                    "get": "ceramics",
                    "learn": [
                        "ceramics",
                        "kiln_firing",
                        "temperature"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "clay",
            "imageName": "clay",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "pottery": {
            "displayName": "Poterie",
            "actions": {
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [],
                    "get": "pottery",
                    "learn": [
                        "drying",
                        "pottery",
                        "storage"
                    ],
                    "fatigue": 5
                },
                "fire": {
                    "displayName": "Cuire",
                    "requiresOneOf": [
                        "fire",
                        "kiln",
                        "temperature"
                    ],
                    "get": "ceramics",
                    "learn": [
                        "ceramics",
                        "kiln_firing",
                        "heat"
                    ],
                    "fatigue": 5
                },
                "glaze": {
                    "displayName": "Émailler",
                    "requiresOneOf": [
                        "ceramics",
                        "chemistry",
                        "kiln_firing"
                    ],
                    "get": "glazed_pottery",
                    "learn": [
                        "glazing",
                        "chemistry",
                        "glassmaking"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "pottery",
            "imageName": "pottery",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "sand": {
            "displayName": "Sable",
            "actions": {
                "collect": {
                    "displayName": "Ramasser",
                    "requiresOneOf": [],
                    "get": "sand",
                    "learn": [
                        "sand",
                        "geology",
                        "observation"
                    ],
                    "fatigue": 5
                },
                "wash": {
                    "displayName": "Laver",
                    "requiresOneOf": [
                        "filtration",
                        "water_quality",
                        "science"
                    ],
                    "get": "clean_sand",
                    "learn": [
                        "filtration",
                        "material_science",
                        "classification"
                    ],
                    "fatigue": 5
                },
                "melt": {
                    "displayName": "Faire fondre",
                    "requiresOneOf": [
                        "fire",
                        "heat",
                        "kiln"
                    ],
                    "get": "glass",
                    "learn": [
                        "glassmaking",
                        "temperature",
                        "silica"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "sand",
            "imageName": "sand",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "glass": {
            "displayName": "Verre",
            "actions": {
                "shape": {
                    "displayName": "Façonner",
                    "requiresOneOf": [],
                    "get": "glass_container",
                    "learn": [
                        "glass_working",
                        "shaping",
                        "containers"
                    ],
                    "fatigue": 5
                },
                "melt": {
                    "displayName": "Refondre",
                    "requiresOneOf": [
                        "kiln",
                        "glassmaking",
                        "heat"
                    ],
                    "get": "glass",
                    "learn": [
                        "temperature",
                        "material_science",
                        "glass_working"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "material_science"
                    ],
                    "get": "glass_data",
                    "learn": [
                        "chemistry",
                        "silica",
                        "glassmaking"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "glass",
            "imageName": "glass",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "plants": {
            "displayName": "Plantes",
            "actions": {
                "gather": {
                    "displayName": "Cueillir",
                    "requiresOneOf": [],
                    "get": "plants",
                    "learn": [
                        "botany",
                        "plant_identification",
                        "food_plants"
                    ],
                    "fatigue": 5
                },
                "identify": {
                    "displayName": "Identifier",
                    "requiresOneOf": [
                        "botany",
                        "observation",
                        "classification"
                    ],
                    "get": "plant_data",
                    "learn": [
                        "plant_anatomy",
                        "plant_reproduction",
                        "ecology"
                    ],
                    "fatigue": 5
                },
                "sample": {
                    "displayName": "Prélever un échantillon",
                    "requiresOneOf": [
                        "sampling",
                        "science",
                        "botany"
                    ],
                    "get": "plant_sample",
                    "learn": [
                        "sampling",
                        "plant_anatomy",
                        "medicinal_plants"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "plants",
            "imageName": "plants",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "medicinal_plants": {
            "displayName": "Plantes médicinales",
            "actions": {
                "gather": {
                    "displayName": "Cueillir",
                    "requiresOneOf": [],
                    "get": "medicinal_plants",
                    "learn": [
                        "medicinal_plants",
                        "herbalism",
                        "botany"
                    ],
                    "fatigue": 5
                },
                "prepare": {
                    "displayName": "Préparer",
                    "requiresOneOf": [
                        "herbalism",
                        "cooking",
                        "medicinal_plants"
                    ],
                    "get": "medicine",
                    "learn": [
                        "medicinal_preparations",
                        "dosage",
                        "symptoms"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "sampling"
                    ],
                    "get": "plant_data",
                    "learn": [
                        "chemistry",
                        "pharmacology",
                        "experimentation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "medicinal_plants",
            "imageName": "medicinal_plants",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "resin": {
            "displayName": "Résine",
            "actions": {
                "collect": {
                    "displayName": "Récolter",
                    "requiresOneOf": [],
                    "get": "resin",
                    "learn": [
                        "resin",
                        "plant_anatomy",
                        "botany"
                    ],
                    "fatigue": 5
                },
                "heat": {
                    "displayName": "Chauffer",
                    "requiresOneOf": [
                        "fire",
                        "heat",
                        "chemistry"
                    ],
                    "get": "pitch",
                    "learn": [
                        "chemistry",
                        "adhesives",
                        "material_science"
                    ],
                    "fatigue": 5
                },
                "mix": {
                    "displayName": "Mélanger",
                    "requiresOneOf": [
                        "chemistry",
                        "experimentation",
                        "crafting"
                    ],
                    "get": "adhesive",
                    "learn": [
                        "chemistry",
                        "joining",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "resin",
            "imageName": "resin",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "wild_wheat": {
            "displayName": "Blé sauvage",
            "actions": {
                "gather": {
                    "displayName": "Cueillir",
                    "requiresOneOf": [],
                    "get": "wild_wheat",
                    "learn": [
                        "cereal_identification",
                        "botany",
                        "food_plants"
                    ],
                    "fatigue": 5
                },
                "collect_seeds": {
                    "displayName": "Sélectionner les graines",
                    "requiresOneOf": [
                        "seeds",
                        "botany",
                        "plant_reproduction"
                    ],
                    "get": "wheat_seeds",
                    "learn": [
                        "seed_selection",
                        "agriculture",
                        "plant_reproduction"
                    ],
                    "fatigue": 5
                },
                "cultivate": {
                    "displayName": "Cultiver",
                    "requiresOneOf": [
                        "cultivation",
                        "seed_selection",
                        "agriculture"
                    ],
                    "get": "wheat",
                    "learn": [
                        "agriculture",
                        "irrigation",
                        "soil_quality"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "wild_wheat",
            "imageName": "wild_wheat",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "wheat": {
            "displayName": "Blé",
            "actions": {
                "harvest": {
                    "displayName": "Récolter",
                    "requiresOneOf": [],
                    "get": "wheat",
                    "learn": [
                        "agriculture",
                        "harvesting",
                        "grain_processing"
                    ],
                    "fatigue": 5
                },
                "thresh": {
                    "displayName": "Battre",
                    "requiresOneOf": [
                        "agriculture",
                        "tools",
                        "grain_processing"
                    ],
                    "get": "grain",
                    "learn": [
                        "threshing",
                        "grain_processing",
                        "seeds"
                    ],
                    "fatigue": 5
                },
                "grind": {
                    "displayName": "Moudre",
                    "requiresOneOf": [
                        "grinding",
                        "grain_processing",
                        "stone_working"
                    ],
                    "get": "flour",
                    "learn": [
                        "milling",
                        "flour",
                        "nutrition"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "wheat",
            "imageName": "wheat",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "grain": {
            "displayName": "Grain",
            "actions": {
                "store": {
                    "displayName": "Stocker",
                    "requiresOneOf": [],
                    "get": "grain",
                    "learn": [
                        "grain_storage",
                        "food_storage",
                        "storage"
                    ],
                    "fatigue": 5
                },
                "grind": {
                    "displayName": "Moudre",
                    "requiresOneOf": [
                        "grinding",
                        "milling",
                        "tools"
                    ],
                    "get": "flour",
                    "learn": [
                        "milling",
                        "flour",
                        "nutrition"
                    ],
                    "fatigue": 5
                },
                "ferment": {
                    "displayName": "Faire fermenter",
                    "requiresOneOf": [
                        "fermentation",
                        "cooking",
                        "experimentation"
                    ],
                    "get": "fermented_grain",
                    "learn": [
                        "fermentation_food",
                        "microbiology",
                        "food_preservation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "grain",
            "imageName": "grain",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "flour": {
            "displayName": "Farine",
            "actions": {
                "mix": {
                    "displayName": "Mélanger",
                    "requiresOneOf": [],
                    "get": "dough",
                    "learn": [
                        "dough",
                        "cooking",
                        "baking"
                    ],
                    "fatigue": 5
                },
                "bake": {
                    "displayName": "Cuire",
                    "requiresOneOf": [
                        "fire",
                        "cooking",
                        "heat"
                    ],
                    "get": "bread",
                    "learn": [
                        "baking",
                        "food_storage",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "store": {
                    "displayName": "Stocker",
                    "requiresOneOf": [
                        "storage",
                        "food_storage",
                        "containers"
                    ],
                    "get": "flour",
                    "learn": [
                        "food_safety",
                        "grain_storage",
                        "preservation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "flour",
            "imageName": "flour",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "bread": {
            "displayName": "Pain",
            "actions": {
                "eat": {
                    "displayName": "Manger",
                    "requiresOneOf": [],
                    "get": "nutrition_data",
                    "learn": [
                        "nutrition",
                        "food_safety",
                        "cooking"
                    ],
                    "fatigue": 5
                },
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [
                        "drying_food",
                        "preservation",
                        "food_storage"
                    ],
                    "get": "dried_bread",
                    "learn": [
                        "drying_food",
                        "preservation",
                        "storage"
                    ],
                    "fatigue": 5
                },
                "ferment": {
                    "displayName": "Faire fermenter",
                    "requiresOneOf": [
                        "fermentation",
                        "microbiology",
                        "cooking"
                    ],
                    "get": "fermented_food",
                    "learn": [
                        "fermentation_food",
                        "microbiology",
                        "food_safety"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "bread",
            "imageName": "bread",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "plant_fibers": {
            "displayName": "Fibres végétales",
            "actions": {
                "gather": {
                    "displayName": "Récolter",
                    "requiresOneOf": [],
                    "get": "plant_fibers",
                    "learn": [
                        "plant_fibers",
                        "botany",
                        "textile"
                    ],
                    "fatigue": 5
                },
                "twist": {
                    "displayName": "Torsader",
                    "requiresOneOf": [
                        "cordage",
                        "tools",
                        "textile"
                    ],
                    "get": "string",
                    "learn": [
                        "cordage",
                        "spinning",
                        "joining"
                    ],
                    "fatigue": 5
                },
                "weave": {
                    "displayName": "Tisser",
                    "requiresOneOf": [
                        "weaving",
                        "loom",
                        "textile"
                    ],
                    "get": "cloth",
                    "learn": [
                        "weaving",
                        "loom",
                        "textile"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "plant_fibers",
            "imageName": "plant_fibers",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "string": {
            "displayName": "Ficelle",
            "actions": {
                "braid": {
                    "displayName": "Tresser",
                    "requiresOneOf": [],
                    "get": "rope",
                    "learn": [
                        "cordage",
                        "braiding",
                        "strength"
                    ],
                    "fatigue": 5
                },
                "weave": {
                    "displayName": "Tisser",
                    "requiresOneOf": [
                        "weaving",
                        "textile",
                        "loom"
                    ],
                    "get": "cloth",
                    "learn": [
                        "weaving",
                        "textile",
                        "loom"
                    ],
                    "fatigue": 5
                },
                "knot": {
                    "displayName": "Nouer",
                    "requiresOneOf": [
                        "cordage",
                        "joining",
                        "tools"
                    ],
                    "get": "rope",
                    "learn": [
                        "knots",
                        "joining",
                        "construction"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "string",
            "imageName": "string",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "hide": {
            "displayName": "Peau brute",
            "actions": {
                "scrape": {
                    "displayName": "Racler",
                    "requiresOneOf": [],
                    "get": "hide",
                    "learn": [
                        "hide_processing",
                        "leatherworking",
                        "tools"
                    ],
                    "fatigue": 5
                },
                "tan": {
                    "displayName": "Tanner",
                    "requiresOneOf": [
                        "tanning",
                        "chemistry",
                        "plants"
                    ],
                    "get": "leather",
                    "learn": [
                        "tanning",
                        "leatherworking",
                        "chemistry"
                    ],
                    "fatigue": 5
                },
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [
                        "drying",
                        "preservation",
                        "leatherworking"
                    ],
                    "get": "rawhide",
                    "learn": [
                        "drying",
                        "hide_processing",
                        "preservation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "hide",
            "imageName": "hide",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "leather": {
            "displayName": "Cuir",
            "actions": {
                "cut": {
                    "displayName": "Découper",
                    "requiresOneOf": [],
                    "get": "leather_parts",
                    "learn": [
                        "leatherworking",
                        "cutting",
                        "shaping"
                    ],
                    "fatigue": 5
                },
                "stitch": {
                    "displayName": "Coudre",
                    "requiresOneOf": [
                        "sewing",
                        "textile",
                        "tools"
                    ],
                    "get": "leather_clothing",
                    "learn": [
                        "sewing",
                        "leatherworking",
                        "clothing"
                    ],
                    "fatigue": 5
                },
                "waterproof": {
                    "displayName": "Imperméabiliser",
                    "requiresOneOf": [
                        "resin",
                        "chemistry",
                        "waterproofing"
                    ],
                    "get": "treated_leather",
                    "learn": [
                        "waterproofing",
                        "resin",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "leather",
            "imageName": "leather",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "saltwater": {
            "displayName": "Eau salée",
            "actions": {
                "collect": {
                    "displayName": "Prélever",
                    "requiresOneOf": [],
                    "get": "saltwater",
                    "learn": [
                        "salt_extraction",
                        "hydrology",
                        "observation"
                    ],
                    "fatigue": 5
                },
                "evaporate": {
                    "displayName": "Évaporer",
                    "requiresOneOf": [
                        "heat",
                        "evaporation",
                        "fire"
                    ],
                    "get": "salt",
                    "learn": [
                        "evaporation",
                        "salt_extraction",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "water_quality"
                    ],
                    "get": "saltwater_data",
                    "learn": [
                        "chemistry",
                        "salinity",
                        "measurement"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "saltwater",
            "imageName": "saltwater",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "salt": {
            "displayName": "Sel",
            "actions": {
                "collect": {
                    "displayName": "Récolter",
                    "requiresOneOf": [],
                    "get": "salt",
                    "learn": [
                        "salt_extraction",
                        "preservation",
                        "food_storage"
                    ],
                    "fatigue": 5
                },
                "preserve": {
                    "displayName": "Saler",
                    "requiresOneOf": [
                        "preservation",
                        "food_storage",
                        "salt_preservation"
                    ],
                    "get": "preserved_food",
                    "learn": [
                        "salting",
                        "food_safety",
                        "preservation"
                    ],
                    "fatigue": 5
                },
                "dissolve": {
                    "displayName": "Dissoudre",
                    "requiresOneOf": [
                        "chemistry",
                        "water_quality",
                        "experimentation"
                    ],
                    "get": "brine",
                    "learn": [
                        "brine",
                        "chemistry",
                        "measurement"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "salt",
            "imageName": "salt",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "fruits": {
            "displayName": "Fruits",
            "actions": {
                "gather": {
                    "displayName": "Cueillir",
                    "requiresOneOf": [],
                    "get": "fruits",
                    "learn": [
                        "botany",
                        "food_plants",
                        "plant_identification"
                    ],
                    "fatigue": 5
                },
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [
                        "drying_food",
                        "preservation",
                        "heat"
                    ],
                    "get": "dried_fruit",
                    "learn": [
                        "drying_food",
                        "preservation",
                        "food_storage"
                    ],
                    "fatigue": 5
                },
                "ferment": {
                    "displayName": "Faire fermenter",
                    "requiresOneOf": [
                        "fermentation",
                        "cooking",
                        "microbiology"
                    ],
                    "get": "fermented_fruit",
                    "learn": [
                        "fermentation_food",
                        "microbiology",
                        "food_preservation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "fruits",
            "imageName": "fruits",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "mushrooms": {
            "displayName": "Champignons",
            "actions": {
                "gather": {
                    "displayName": "Cueillir",
                    "requiresOneOf": [],
                    "get": "mushrooms",
                    "learn": [
                        "botany",
                        "fungi",
                        "food_safety"
                    ],
                    "fatigue": 5
                },
                "identify": {
                    "displayName": "Identifier",
                    "requiresOneOf": [
                        "botany",
                        "classification",
                        "observation"
                    ],
                    "get": "mushroom_data",
                    "learn": [
                        "fungi",
                        "poisoning",
                        "food_safety"
                    ],
                    "fatigue": 5
                },
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [
                        "drying_food",
                        "preservation",
                        "food_storage"
                    ],
                    "get": "dried_mushrooms",
                    "learn": [
                        "drying_food",
                        "preservation",
                        "food_storage"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "mushrooms",
            "imageName": "mushrooms",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "meat": {
            "displayName": "Viande",
            "actions": {
                "butcher": {
                    "displayName": "Dépecer",
                    "requiresOneOf": [],
                    "get": "meat",
                    "learn": [
                        "butchery",
                        "anatomy",
                        "food_safety"
                    ],
                    "fatigue": 5
                },
                "smoke": {
                    "displayName": "Fumer",
                    "requiresOneOf": [
                        "fire",
                        "smoking_food",
                        "preservation"
                    ],
                    "get": "smoked_meat",
                    "learn": [
                        "smoking_food",
                        "preservation",
                        "food_storage"
                    ],
                    "fatigue": 5
                },
                "salt": {
                    "displayName": "Saler",
                    "requiresOneOf": [
                        "salt",
                        "salting",
                        "preservation"
                    ],
                    "get": "salted_meat",
                    "learn": [
                        "salting",
                        "food_safety",
                        "preservation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "meat",
            "imageName": "meat",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "medicine": {
            "displayName": "Préparation médicinale",
            "actions": {
                "administer": {
                    "displayName": "Administrer",
                    "requiresOneOf": [],
                    "get": "treated_patient",
                    "learn": [
                        "dosage",
                        "symptoms",
                        "medicine"
                    ],
                    "fatigue": 5
                },
                "compare": {
                    "displayName": "Comparer",
                    "requiresOneOf": [
                        "science",
                        "medicine",
                        "observation"
                    ],
                    "get": "medical_data",
                    "learn": [
                        "diagnosis",
                        "pharmacology",
                        "experimentation"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "chemistry",
                        "herbalism",
                        "experimentation"
                    ],
                    "get": "medicine",
                    "learn": [
                        "medicinal_preparations",
                        "dosage",
                        "chemistry"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "medicine",
            "imageName": "medicine",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "iron_ore": {
            "displayName": "Minerai de fer",
            "actions": {
                "collect": {
                    "displayName": "Extraire",
                    "requiresOneOf": [],
                    "get": "iron_ore",
                    "learn": [
                        "mineral_identification",
                        "geology",
                        "ore_processing"
                    ],
                    "fatigue": 5
                },
                "crush": {
                    "displayName": "Broyer",
                    "requiresOneOf": [
                        "grinding",
                        "ore_processing",
                        "tools"
                    ],
                    "get": "iron_ore_powder",
                    "learn": [
                        "ore_processing",
                        "grinding",
                        "mineral_identification"
                    ],
                    "fatigue": 5
                },
                "smelt": {
                    "displayName": "Réduire",
                    "requiresOneOf": [
                        "fire",
                        "charcoal",
                        "metallurgy"
                    ],
                    "get": "iron",
                    "learn": [
                        "smelting",
                        "metallurgy",
                        "iron_working"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "iron_ore",
            "imageName": "iron_ore",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "iron": {
            "displayName": "Fer",
            "actions": {
                "hammer": {
                    "displayName": "Marteler",
                    "requiresOneOf": [],
                    "get": "iron_tool",
                    "learn": [
                        "iron_working",
                        "forging",
                        "hammering"
                    ],
                    "fatigue": 5
                },
                "forge": {
                    "displayName": "Forger",
                    "requiresOneOf": [
                        "forging",
                        "heat",
                        "metallurgy"
                    ],
                    "get": "iron_tool",
                    "learn": [
                        "forging",
                        "annealing",
                        "tempering"
                    ],
                    "fatigue": 5
                },
                "alloy": {
                    "displayName": "Allier",
                    "requiresOneOf": [
                        "alloying",
                        "metallurgy",
                        "chemistry"
                    ],
                    "get": "steel",
                    "learn": [
                        "alloying",
                        "material_science",
                        "metallurgy"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "iron",
            "imageName": "iron",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "copper_ore": {
            "displayName": "Minerai de cuivre",
            "actions": {
                "collect": {
                    "displayName": "Extraire",
                    "requiresOneOf": [],
                    "get": "copper_ore",
                    "learn": [
                        "geology",
                        "mineral_identification",
                        "ore_processing"
                    ],
                    "fatigue": 5
                },
                "crush": {
                    "displayName": "Broyer",
                    "requiresOneOf": [
                        "grinding",
                        "ore_processing",
                        "tools"
                    ],
                    "get": "copper_ore_powder",
                    "learn": [
                        "ore_processing",
                        "grinding",
                        "mineral_identification"
                    ],
                    "fatigue": 5
                },
                "smelt": {
                    "displayName": "Fondre",
                    "requiresOneOf": [
                        "fire",
                        "charcoal",
                        "metallurgy"
                    ],
                    "get": "copper",
                    "learn": [
                        "smelting",
                        "copper_working",
                        "metallurgy"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "copper_ore",
            "imageName": "copper_ore",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "copper": {
            "displayName": "Cuivre",
            "actions": {
                "hammer": {
                    "displayName": "Marteler",
                    "requiresOneOf": [],
                    "get": "copper",
                    "learn": [
                        "copper_working",
                        "hammering",
                        "metalworking"
                    ],
                    "fatigue": 5
                },
                "cast": {
                    "displayName": "Couler",
                    "requiresOneOf": [
                        "casting",
                        "molds",
                        "metallurgy"
                    ],
                    "get": "copper_parts",
                    "learn": [
                        "casting",
                        "molds",
                        "metalworking"
                    ],
                    "fatigue": 5
                },
                "alloy": {
                    "displayName": "Allier",
                    "requiresOneOf": [
                        "alloying",
                        "metallurgy",
                        "bronze"
                    ],
                    "get": "bronze",
                    "learn": [
                        "bronze",
                        "alloying",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "copper",
            "imageName": "copper",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "bronze": {
            "displayName": "Bronze",
            "actions": {
                "hammer": {
                    "displayName": "Marteler",
                    "requiresOneOf": [],
                    "get": "bronze_tool",
                    "learn": [
                        "bronze",
                        "hammering",
                        "metalworking"
                    ],
                    "fatigue": 5
                },
                "cast": {
                    "displayName": "Couler",
                    "requiresOneOf": [
                        "casting",
                        "molds",
                        "metallurgy"
                    ],
                    "get": "bronze_tool",
                    "learn": [
                        "casting",
                        "molds",
                        "alloying"
                    ],
                    "fatigue": 5
                },
                "polish": {
                    "displayName": "Polir",
                    "requiresOneOf": [
                        "polishing",
                        "metalworking",
                        "tools"
                    ],
                    "get": "polished_bronze",
                    "learn": [
                        "polishing",
                        "metalworking",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "bronze",
            "imageName": "bronze",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "stone_tools": {
            "displayName": "Outils en pierre",
            "actions": {
                "use": {
                    "displayName": "Utiliser",
                    "requiresOneOf": [],
                    "get": "worked_material",
                    "learn": [
                        "tools",
                        "crafting",
                        "cutting"
                    ],
                    "fatigue": 5
                },
                "sharpen": {
                    "displayName": "Affûter",
                    "requiresOneOf": [
                        "stone_working",
                        "grinding",
                        "shaping"
                    ],
                    "get": "sharp_tool",
                    "learn": [
                        "sharpening",
                        "cutting",
                        "grinding"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "experimentation",
                        "crafting",
                        "material_science"
                    ],
                    "get": "improved_tool",
                    "learn": [
                        "experimentation",
                        "toolmaking",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "stone_tools",
            "imageName": "stone_tools",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "limestone": {
            "displayName": "Calcaire",
            "actions": {
                "collect": {
                    "displayName": "Extraire",
                    "requiresOneOf": [],
                    "get": "limestone",
                    "learn": [
                        "geology",
                        "quarrying",
                        "stone_working"
                    ],
                    "fatigue": 5
                },
                "burn": {
                    "displayName": "Calciner",
                    "requiresOneOf": [
                        "fire",
                        "heat",
                        "kiln"
                    ],
                    "get": "lime",
                    "learn": [
                        "lime",
                        "chemistry",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "crush": {
                    "displayName": "Broyer",
                    "requiresOneOf": [
                        "grinding",
                        "tools",
                        "stone_working"
                    ],
                    "get": "limestone_powder",
                    "learn": [
                        "grinding",
                        "mortar",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "limestone",
            "imageName": "limestone",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "lime": {
            "displayName": "Chaux",
            "actions": {
                "mix": {
                    "displayName": "Mélanger",
                    "requiresOneOf": [],
                    "get": "mortar",
                    "learn": [
                        "mortar",
                        "construction",
                        "chemistry"
                    ],
                    "fatigue": 5
                },
                "plaster": {
                    "displayName": "Enduire",
                    "requiresOneOf": [
                        "construction",
                        "masonry",
                        "lime"
                    ],
                    "get": "plaster",
                    "learn": [
                        "architecture",
                        "construction",
                        "waterproofing"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "chemistry",
                        "science",
                        "material_science"
                    ],
                    "get": "lime_data",
                    "learn": [
                        "chemistry",
                        "material_science",
                        "causality"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "lime",
            "imageName": "lime",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "bricks": {
            "displayName": "Briques",
            "actions": {
                "build": {
                    "displayName": "Construire",
                    "requiresOneOf": [],
                    "get": "brick_structure",
                    "learn": [
                        "masonry",
                        "construction",
                        "architecture"
                    ],
                    "fatigue": 5
                },
                "fire": {
                    "displayName": "Cuire",
                    "requiresOneOf": [
                        "kiln",
                        "fire",
                        "ceramics"
                    ],
                    "get": "fired_bricks",
                    "learn": [
                        "kiln_firing",
                        "ceramics",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "masonry",
                        "material_science",
                        "architecture"
                    ],
                    "get": "improved_bricks",
                    "learn": [
                        "architecture",
                        "construction",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "bricks",
            "imageName": "bricks",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "wood_parts": {
            "displayName": "Pièces en bois",
            "actions": {
                "assemble": {
                    "displayName": "Assembler",
                    "requiresOneOf": [],
                    "get": "wooden_machine",
                    "learn": [
                        "joining",
                        "crafting",
                        "construction"
                    ],
                    "fatigue": 5
                },
                "rotate": {
                    "displayName": "Faire tourner",
                    "requiresOneOf": [
                        "wheel",
                        "axle",
                        "mechanics"
                    ],
                    "get": "wooden_mechanism",
                    "learn": [
                        "mechanics",
                        "wheel",
                        "axle"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "experimentation",
                        "mechanics",
                        "woodworking"
                    ],
                    "get": "wooden_mechanism",
                    "learn": [
                        "mechanics",
                        "crafting",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "wood_parts",
            "imageName": "wood_parts",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "containers": {
            "displayName": "Récipients",
            "actions": {
                "fill": {
                    "displayName": "Remplir",
                    "requiresOneOf": [],
                    "get": "stored_water",
                    "learn": [
                        "storage",
                        "water_storage",
                        "containers"
                    ],
                    "fatigue": 5
                },
                "preserve": {
                    "displayName": "Conserver",
                    "requiresOneOf": [
                        "food_storage",
                        "preservation",
                        "ceramics"
                    ],
                    "get": "preserved_food",
                    "learn": [
                        "food_storage",
                        "food_safety",
                        "preservation"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "pottery",
                        "ceramics",
                        "material_science"
                    ],
                    "get": "improved_container",
                    "learn": [
                        "ceramics",
                        "storage",
                        "crafting"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "containers",
            "imageName": "containers",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "organic_waste": {
            "displayName": "Déchets organiques",
            "actions": {
                "collect": {
                    "displayName": "Collecter",
                    "requiresOneOf": [],
                    "get": "organic_waste",
                    "learn": [
                        "sanitation",
                        "hygiene",
                        "observation"
                    ],
                    "fatigue": 5
                },
                "compost": {
                    "displayName": "Composter",
                    "requiresOneOf": [
                        "ecology",
                        "soil",
                        "agriculture"
                    ],
                    "get": "compost",
                    "learn": [
                        "composting",
                        "soil_quality",
                        "ecology"
                    ],
                    "fatigue": 5
                },
                "burn": {
                    "displayName": "Brûler",
                    "requiresOneOf": [
                        "fire",
                        "combustion",
                        "sanitation"
                    ],
                    "get": "ash",
                    "learn": [
                        "combustion",
                        "sanitation",
                        "ash"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "organic_waste",
            "imageName": "organic_waste",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "compost": {
            "displayName": "Compost",
            "actions": {
                "apply": {
                    "displayName": "Épandre",
                    "requiresOneOf": [],
                    "get": "fertile_soil",
                    "learn": [
                        "fertilization",
                        "soil_quality",
                        "agriculture"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "soil",
                        "agriculture"
                    ],
                    "get": "soil_data",
                    "learn": [
                        "soil_quality",
                        "chemistry",
                        "ecology"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "experimentation",
                        "ecology",
                        "soil_quality"
                    ],
                    "get": "rich_compost",
                    "learn": [
                        "ecology",
                        "fertilization",
                        "regeneration"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "compost",
            "imageName": "compost",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "soil": {
            "displayName": "Sol",
            "actions": {
                "observe": {
                    "displayName": "Observer",
                    "requiresOneOf": [],
                    "get": "soil_data",
                    "learn": [
                        "soil",
                        "observation",
                        "ecology"
                    ],
                    "fatigue": 5
                },
                "cultivate": {
                    "displayName": "Cultiver",
                    "requiresOneOf": [
                        "agriculture",
                        "cultivation",
                        "soil_quality"
                    ],
                    "get": "cultivated_soil",
                    "learn": [
                        "agriculture",
                        "soil_quality",
                        "irrigation"
                    ],
                    "fatigue": 5
                },
                "sample": {
                    "displayName": "Prélever",
                    "requiresOneOf": [
                        "sampling",
                        "science",
                        "geology"
                    ],
                    "get": "soil_sample",
                    "learn": [
                        "soil_quality",
                        "geology",
                        "chemistry"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "soil",
            "imageName": "soil",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "clay_bricks": {
            "displayName": "Briques d'argile",
            "actions": {
                "build": {
                    "displayName": "Construire",
                    "requiresOneOf": [],
                    "get": "building",
                    "learn": [
                        "construction",
                        "masonry",
                        "architecture"
                    ],
                    "fatigue": 5
                },
                "fire": {
                    "displayName": "Cuire",
                    "requiresOneOf": [
                        "fire",
                        "kiln",
                        "ceramics"
                    ],
                    "get": "fired_bricks",
                    "learn": [
                        "kiln_firing",
                        "ceramics",
                        "temperature"
                    ],
                    "fatigue": 5
                },
                "analyze": {
                    "displayName": "Analyser",
                    "requiresOneOf": [
                        "science",
                        "material_science",
                        "ceramics"
                    ],
                    "get": "clay_data",
                    "learn": [
                        "material_science",
                        "chemistry",
                        "clay_identification"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "clay_bricks",
            "imageName": "clay_bricks",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "rope": {
            "displayName": "Corde",
            "actions": {
                "use": {
                    "displayName": "Utiliser",
                    "requiresOneOf": [],
                    "get": "rope",
                    "learn": [
                        "cordage",
                        "knots",
                        "construction"
                    ],
                    "fatigue": 5
                },
                "weave": {
                    "displayName": "Tresser",
                    "requiresOneOf": [
                        "weaving",
                        "textile",
                        "cordage"
                    ],
                    "get": "rope",
                    "learn": [
                        "weaving",
                        "strength",
                        "textile"
                    ],
                    "fatigue": 5
                },
                "sail": {
                    "displayName": "Fabriquer une voile",
                    "requiresOneOf": [
                        "sailing",
                        "textile",
                        "navigation"
                    ],
                    "get": "sail",
                    "learn": [
                        "sailing",
                        "wind",
                        "navigation"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "rope",
            "imageName": "rope",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "wax": {
            "displayName": "Cire",
            "actions": {
                "collect": {
                    "displayName": "Récolter",
                    "requiresOneOf": [],
                    "get": "wax",
                    "learn": [
                        "observation",
                        "animal_behavior",
                        "material_science"
                    ],
                    "fatigue": 5
                },
                "melt": {
                    "displayName": "Faire fondre",
                    "requiresOneOf": [
                        "heat",
                        "fire",
                        "temperature"
                    ],
                    "get": "liquid_wax",
                    "learn": [
                        "temperature",
                        "material_science",
                        "casting"
                    ],
                    "fatigue": 5
                },
                "seal": {
                    "displayName": "Sceller",
                    "requiresOneOf": [
                        "containers",
                        "storage",
                        "crafting"
                    ],
                    "get": "sealed_container",
                    "learn": [
                        "sealing",
                        "preservation",
                        "storage"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "wax",
            "imageName": "wax",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "stars_data": {
            "displayName": "Données astronomiques",
            "actions": {
                "observe": {
                    "displayName": "Observer",
                    "requiresOneOf": [],
                    "get": "stars_data",
                    "learn": [
                        "stars",
                        "astronomy",
                        "observation"
                    ],
                    "fatigue": 5
                },
                "record": {
                    "displayName": "Consigner",
                    "requiresOneOf": [
                        "recording",
                        "writing",
                        "science"
                    ],
                    "get": "star_chart",
                    "learn": [
                        "mapping",
                        "astronomy",
                        "recording"
                    ],
                    "fatigue": 5
                },
                "compare": {
                    "displayName": "Comparer",
                    "requiresOneOf": [
                        "comparison",
                        "astronomy",
                        "measurement"
                    ],
                    "get": "star_data",
                    "learn": [
                        "navigation",
                        "orientation",
                        "astronomy"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "stars_data",
            "imageName": "stars_data",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "wool": {
            "displayName": "Laine",
            "actions": {
                "collect": {
                    "displayName": "Tondre",
                    "requiresOneOf": [],
                    "get": "wool",
                    "learn": [
                        "animal_husbandry",
                        "textile",
                        "animal_nutrition"
                    ],
                    "fatigue": 5
                },
                "spin": {
                    "displayName": "Filer",
                    "requiresOneOf": [
                        "spinning",
                        "textile",
                        "tools"
                    ],
                    "get": "wool_yarn",
                    "learn": [
                        "spinning",
                        "textile",
                        "weaving"
                    ],
                    "fatigue": 5
                },
                "felt": {
                    "displayName": "Feutrer",
                    "requiresOneOf": [
                        "textile",
                        "crafting",
                        "experimentation"
                    ],
                    "get": "felt",
                    "learn": [
                        "textile",
                        "material_science",
                        "clothing"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "wool",
            "imageName": "wool",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "tools": {
            "displayName": "Outils",
            "actions": {
                "use": {
                    "displayName": "Utiliser",
                    "requiresOneOf": [],
                    "get": "worked_material",
                    "learn": [
                        "crafting",
                        "tools",
                        "experimentation"
                    ],
                    "fatigue": 5
                },
                "repair": {
                    "displayName": "Réparer",
                    "requiresOneOf": [
                        "crafting",
                        "metalworking",
                        "woodworking"
                    ],
                    "get": "repaired_tool",
                    "learn": [
                        "repair",
                        "maintenance",
                        "material_science"
                    ],
                    "fatigue": 5
                },
                "improve": {
                    "displayName": "Améliorer",
                    "requiresOneOf": [
                        "experimentation",
                        "material_science",
                        "crafting"
                    ],
                    "get": "improved_tool",
                    "learn": [
                        "toolmaking",
                        "experimentation",
                        "specialization"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "tools",
            "imageName": "tools",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "soil_sample": {
            "displayName": "Échantillon de sol",
            "actions": {
                "examine": {
                    "displayName": "Examiner",
                    "requiresOneOf": [],
                    "get": "soil_data",
                    "learn": [
                        "soil_quality",
                        "observation",
                        "classification"
                    ],
                    "fatigue": 5
                },
                "compare": {
                    "displayName": "Comparer",
                    "requiresOneOf": [
                        "comparison",
                        "science",
                        "geology"
                    ],
                    "get": "soil_data",
                    "learn": [
                        "geology",
                        "ecology",
                        "causality"
                    ],
                    "fatigue": 5
                },
                "test": {
                    "displayName": "Tester",
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "experimentation"
                    ],
                    "get": "soil_data",
                    "learn": [
                        "chemistry",
                        "fertilization",
                        "soil_quality"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "soil_sample",
            "imageName": "soil_sample",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "plant_sample": {
            "displayName": "Échantillon végétal",
            "actions": {
                "examine": {
                    "displayName": "Examiner",
                    "requiresOneOf": [],
                    "get": "plant_data",
                    "learn": [
                        "botany",
                        "plant_anatomy",
                        "classification"
                    ],
                    "fatigue": 5
                },
                "dry": {
                    "displayName": "Sécher",
                    "requiresOneOf": [
                        "drying",
                        "botany",
                        "preservation"
                    ],
                    "get": "dried_plant_sample",
                    "learn": [
                        "preservation",
                        "medicinal_plants",
                        "plant_anatomy"
                    ],
                    "fatigue": 5
                },
                "compare": {
                    "displayName": "Comparer",
                    "requiresOneOf": [
                        "comparison",
                        "science",
                        "botany"
                    ],
                    "get": "plant_data",
                    "learn": [
                        "plant_identification",
                        "plant_reproduction",
                        "ecology"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "plant_sample",
            "imageName": "plant_sample",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "ancient_metal": {
            "displayName": "Métal ancien",
            "actions": {
                "collect": {
                    "displayName": "Récupérer",
                    "requiresOneOf": [],
                    "get": "ancient_metal",
                    "learn": [
                        "archaeology",
                        "material_science",
                        "ruins"
                    ],
                    "fatigue": 5
                },
                "examine": {
                    "displayName": "Examiner",
                    "requiresOneOf": [
                        "archaeology",
                        "observation",
                        "science"
                    ],
                    "get": "artifact_data",
                    "learn": [
                        "artifact_analysis",
                        "ancient_technology",
                        "metallurgy"
                    ],
                    "fatigue": 5
                },
                "recycle": {
                    "displayName": "Recycler",
                    "requiresOneOf": [
                        "metalworking",
                        "recycling",
                        "metallurgy"
                    ],
                    "get": "metal",
                    "learn": [
                        "recycling",
                        "material_science",
                        "metalworking"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "ancient_metal",
            "imageName": "ancient_metal",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "ancient_glass": {
            "displayName": "Verre ancien",
            "actions": {
                "collect": {
                    "displayName": "Récupérer",
                    "requiresOneOf": [],
                    "get": "ancient_glass",
                    "learn": [
                        "archaeology",
                        "glassmaking",
                        "ruins"
                    ],
                    "fatigue": 5
                },
                "examine": {
                    "displayName": "Examiner",
                    "requiresOneOf": [
                        "archaeology",
                        "science",
                        "glassmaking"
                    ],
                    "get": "artifact_data",
                    "learn": [
                        "artifact_analysis",
                        "glassmaking",
                        "material_science"
                    ],
                    "fatigue": 5
                },
                "recycle": {
                    "displayName": "Recycler",
                    "requiresOneOf": [
                        "glassmaking",
                        "recycling",
                        "material_science"
                    ],
                    "get": "glass",
                    "learn": [
                        "recycling",
                        "glass_working",
                        "material_science"
                    ],
                    "fatigue": 5
                }
            },
            "resourceName": "ancient_glass",
            "imageName": "ancient_glass",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "ancient_plastic": {
            displayName: "plastique ancien",
            imageName: "ancient_plastic",
            "resourceName": "ancient_plastic",
            popGrowth: 3,
            actions: {
                salvage: {
                    "displayName": "Récupérer",
                    requiresOneOf: [],
                    get: "ancient_plastic",
                    learn: [
                        "material_science",
                        "recycling",
                        "ancient_world"
                    ],
                    "fatigue": 5
                },
                identify: {
                    "displayName": "Identifier",
                    requiresOneOf: [
                        "material_science",
                        "chemistry",
                        "ancient_world"
                    ],
                    get: "plastic",
                    learn: [
                        "material_science",
                        "chemistry",
                        "identification"
                    ],
                    "fatigue": 5
                },
                recycle: {
                    "displayName": "Recycler",
                    requiresOneOf: [
                        "recycling",
                        "chemistry",
                        "material_science"
                    ],
                    get: "plastic",
                    learn: [
                        "recycling",
                        "chemistry",
                        "processing"
                    ],
                    "fatigue": 5
                }
            },
            regeneration: 1,
            fatigueRecovery: 2
        }
    };
    static resources_old = {
        "fruit": {
            resourceName: "fruit",
            "imageName": "fruit",
            displayName: "fruits",
            "popGrowth": 8,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": ["biology", "botany", "permaculture", "nutrition", "horticulture", "nutrient_cycles", "conservation", "composting", "conservation", "botany"],
                    "fatigue": 5,
                    "get": "fruit"
                }
            },
            "regeneration": 1,
            "fatigueRecovery": 2
        },
        "concrete": {
            resourceName: "concrete",
            displayName: "béton",
            imageName: "concrete",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "concrete",
                    requiresOneOf: [{ knowledge: "salvage_concrete" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "concrete",
                    requiresOneOf: [{ knowledge: "destroy_concrete" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "concrete",
                    requiresOneOf: [{ knowledge: "recycle_concrete" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "electronics": {
            displayName: "électronique",
            resourceName: "electronics",
            imageName: "electronics",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "electronics",
                    requiresOneOf: [{ knowledge: "salvage_electronics" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "metal",
                    requiresOneOf: [{ knowledge: "destroy_electronics" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "metal",
                    requiresOneOf: [{ knowledge: "recycle_electronics" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "iron": {
            displayName: "fer",
            resourceName: "iron",
            imageName: "iron",
            popGrowth: 3,
            actions: {
                mine: {
                    fatigue: 8,
                    get: "iron",
                    requiresOneOf: [{ knowledge: "mine_iron" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        },
        "metal": {
            displayName: "métal",
            resourceName: "metal",
            imageName: "metal",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "metal",
                    requiresOneOf: [{ knowledge: "salvage_metal" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "metal",
                    requiresOneOf: [{ knowledge: "destroy_metal" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "metal",
                    requiresOneOf: [{ knowledge: "recycle_metal" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "plastic": {
            displayName: "plastique",
            resourceName: "plastic",
            imageName: "plastic",
            popGrowth: 3,
            actions: {
                salvage: {
                    fatigue: 10,
                    get: "plastic",
                    requiresOneOf: [{ knowledge: "salvage_plastic" }]
                },
                destroy: {
                    fatigue: 20,
                    get: "plastic",
                    requiresOneOf: [{ knowledge: "destroy_plastic" }]
                },
                recycle: {
                    fatigue: 5,
                    get: "plastic",
                    requiresOneOf: [{ knowledge: "recycle_plastic" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 0
        },
        "clean_water": {
            displayName: "eau potable",
            resourceName: "clean_water",
            imageName: "water",
            popGrowth: 5,
            actions: {
            },
            regeneration: 1,
            fatigueRecovery: 2
        },
        "water": {
            displayName: "eau",
            resourceName: "water",
            imageName: "water",
            popGrowth: 3,
            actions: {
                fetch: {
                    fatigue: 2,
                    get: "water",
                    requiresOneOf: [{ knowledge: "starter" }],
                    learn: ["water_collection"]
                },
                observation: {
                    fatigue: 0,
                    requiresOneOf: [{ knowledge: "water_collection" }],
                    learn: ["hydrology"]
                },
                filtration: {
                    fatigue: 1,
                    get: "clean_water",
                    requiresOneOf: [{ knowledge: "hydrology" }],
                }
            },
            regeneration: 1,
            fatigueRecovery: 2
        },
        "wood": {
            displayName: "bois",
            resourceName: "wood",
            imageName: "wood",
            popGrowth: 3,
            actions: {
                cut: {
                    fatigue: 2,
                    get: "wood",
                    requiresOneOf: [{ knowledge: "starter" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        },
        "oil": {
            displayName: "pétrole",
            resourceName: "oil",
            imageName: "oil",
            popGrowth: 3,
            actions: {
                drill: {
                    fatigue: 5,
                    get: "oil",
                    requiresOneOf: [{ knowledge: "drill_oil" }]
                }
            },
            regeneration: 1,
            fatigueRecovery: 1
        }
    }
    static biomeNamesForGeneration = [
        "city", "island", "swamp", "mountain", "forest"
    ];
    static biomes = {
        desert: {
            degradation: "desert",
            imageName: "desert"
        },

        broussailles: {
            degradation: "desert",
            imageName: "broussailles",
        },
        butte: {
            degradation: "desert",
            imageName: "butte",
        },
        friche: {
            degradation: "desert",
            imageName: "friche",
        },
        greve: {
            degradation: "desert",
            imageName: "greve",
        },
        landes: {
            degradation: "desert",
            imageName: "landes",
        },

        plains: {
            degradation: "landes",
            imageName: "plains",
            attribute: "elevation",
            amount: 0,
            propagation: { min: 1, max: 1 },
            minimum: 0,
            treshold: 0.0,
            amountOfResources: 1,
            resources: [
                // "nothing"
                "sandstone",
                "plants"
            ]
        },
        swamp: {
            degradation: "broussailles",
            imageName: "swamp",
            attribute: "humidity",
            amount: 2,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.5,
            amountOfResources: 1,
            resources: [
                // "water",
                "mushrooms",
                "clay",
                // "nothing"
            ]
        },
        island: {
            degradation: "greve",
            imageName: "island",
            attribute: "humidity",
            amount: 2,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.75,
            amountOfResources: 1,
            resources: [
                "water",
                "sand",
                // "nothing"
            ]
        },
        forest: {
            degradation: "friche",
            imageName: "forest",
            attribute: "life",
            amount: 10,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.4,
            amountOfResources: 2,
            resources: [
                // "water",
                "wood",
                "fruits",
                // "nothing"
            ]
        },
        mountain: {
            degradation: "butte",
            imageName: "mountain",
            attribute: "elevation",
            amount: 3,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.45,
            amountOfResources: 1,
            resources: [
                "iron_ore",
                "copper_ore",
                "limestone",
                "limestone",
                "limestone",
                "nothing",
                "nothing",
            ]
        },
        city: {
            degradation: undefined,
            imageName: "city",
            attribute: "humanInfluence",
            amount: 10,
            propagation: { min: 0.99, max: 0.99 },
            minimum: 0,
            treshold: 0.99,
            amountOfResources: 3,
            resources: [
                "ancient_metal",
                "ancient_plastic",
                "ancient_glass"
            ]
        }
    };
}