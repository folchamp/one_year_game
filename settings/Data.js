"use strict";

class Data {
    static resources = {
    "water": {
        "displayName": "Eau",
        "category": "food",
        "imageName": "water",
        "actions": {
            "draw": {
                "requiresOneOf": [],
                "learn": [
                    "hygiene",
                    "hydrology",
                    "water_sources"
                ],
                "fatigue": 5,
                "get": "water",
                "displayName": "Puiser"
            },
            "boil": {
                "requiresOneOf": [
                    "fire",
                    "cooking",
                    "containers"
                ],
                "learn": [
                    "purification",
                    "hygiene",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "clean_water",
                "displayName": "Faire bouillir"
            },
            "sample": {
                "requiresOneOf": [
                    "science",
                    "hydrology",
                    "sampling"
                ],
                "learn": [
                    "water_quality",
                    "sampling",
                    "measurement"
                ],
                "fatigue": 5,
                "get": "water_sample",
                "displayName": "Prélever un échantillon"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "clean_water": {
        "displayName": "Eau potable",
        "category": "",
        "imageName": "clean_water",
        "actions": {
            "drink": {
                "requiresOneOf": [],
                "learn": [
                    "nutrition",
                    "hygiene",
                    "water_quality"
                ],
                "fatigue": 5,
                "get": "clean_water",
                "displayName": "Boire"
            },
            "store": {
                "requiresOneOf": [
                    "storage",
                    "containers",
                    "water_storage"
                ],
                "learn": [
                    "water_storage",
                    "food_storage",
                    "sanitation"
                ],
                "fatigue": 5,
                "get": "clean_water",
                "displayName": "Stocker"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "water_quality",
                    "measurement"
                ],
                "learn": [
                    "water_quality",
                    "chemistry",
                    "microbiology"
                ],
                "fatigue": 5,
                "get": "water_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "water_sample": {
        "displayName": "Échantillon d'eau",
        "category": "",
        "imageName": "water_sample",
        "actions": {
            "examine": {
                "requiresOneOf": [],
                "learn": [
                    "observation",
                    "water_quality",
                    "classification"
                ],
                "fatigue": 5,
                "get": "water_data",
                "displayName": "Examiner"
            },
            "compare": {
                "requiresOneOf": [
                    "comparison",
                    "science",
                    "measurement"
                ],
                "learn": [
                    "hydrology",
                    "chemistry",
                    "causality"
                ],
                "fatigue": 5,
                "get": "water_data",
                "displayName": "Comparer"
            },
            "test": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "water_quality"
                ],
                "learn": [
                    "contamination",
                    "microbiology",
                    "experimentation"
                ],
                "fatigue": 5,
                "get": "water_data",
                "displayName": "Tester"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "rainwater": {
        "displayName": "Eau de pluie",
        "category": "",
        "imageName": "rainwater",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "rainwater",
                    "weather",
                    "water_storage"
                ],
                "fatigue": 5,
                "get": "rainwater",
                "displayName": "Recueillir"
            },
            "measure": {
                "requiresOneOf": [
                    "measurement",
                    "science",
                    "weather"
                ],
                "learn": [
                    "meteorology",
                    "hydrology",
                    "recording"
                ],
                "fatigue": 5,
                "get": "weather_data",
                "displayName": "Mesurer"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "water_quality"
                ],
                "learn": [
                    "water_quality",
                    "chemistry",
                    "atmosphere"
                ],
                "fatigue": 5,
                "get": "water_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "wood": {
        "displayName": "Bois",
        "category": "",
        "imageName": "wood",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "wood_working",
                    "observation",
                    "tools"
                ],
                "fatigue": 5,
                "get": "wood",
                "displayName": "Ramasser"
            },
            "cut": {
                "requiresOneOf": [
                    "tools",
                    "cutting",
                    "wood_working"
                ],
                "learn": [
                    "woodworking",
                    "timber",
                    "shaping"
                ],
                "fatigue": 5,
                "get": "lumber",
                "displayName": "Couper"
            },
            "burn": {
                "requiresOneOf": [
                    "fire",
                    "combustion",
                    "heat"
                ],
                "learn": [
                    "combustion",
                    "heat",
                    "charcoal_making"
                ],
                "fatigue": 5,
                "get": "ash",
                "displayName": "Brûler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "lumber": {
        "displayName": "Bois d'œuvre",
        "category": "",
        "imageName": "lumber",
        "actions": {
            "shape": {
                "requiresOneOf": [],
                "learn": [
                    "woodworking",
                    "shaping",
                    "crafting"
                ],
                "fatigue": 5,
                "get": "wooden_parts",
                "displayName": "Façonner"
            },
            "dry": {
                "requiresOneOf": [
                    "drying",
                    "wood_working",
                    "temperature"
                ],
                "learn": [
                    "seasoning",
                    "woodworking",
                    "preservation"
                ],
                "fatigue": 5,
                "get": "seasoned_wood",
                "displayName": "Sécher"
            },
            "build": {
                "requiresOneOf": [
                    "construction",
                    "carpentry",
                    "architecture"
                ],
                "learn": [
                    "carpentry",
                    "construction",
                    "architecture"
                ],
                "fatigue": 5,
                "get": "wooden_structure",
                "displayName": "Construire"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "charcoal": {
        "displayName": "Charbon de bois",
        "category": "",
        "imageName": "charcoal",
        "actions": {
            "produce": {
                "requiresOneOf": [],
                "learn": [
                    "charcoal_making",
                    "combustion",
                    "heat"
                ],
                "fatigue": 5,
                "get": "charcoal",
                "displayName": "Produire"
            },
            "burn": {
                "requiresOneOf": [
                    "combustion",
                    "fire",
                    "temperature"
                ],
                "learn": [
                    "metallurgy",
                    "kiln_firing",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "heat",
                "displayName": "Brûler"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "material_science"
                ],
                "learn": [
                    "chemistry",
                    "material_science",
                    "experimentation"
                ],
                "fatigue": 5,
                "get": "carbon_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "sandstone": {
        "displayName": "Grès",
        "category": "",
        "imageName": "sandstone",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "geology",
                    "observation",
                    "stone_working"
                ],
                "fatigue": 5,
                "get": "sandstone",
                "displayName": "Ramasser"
            },
            "knap": {
                "requiresOneOf": [
                    "tools",
                    "stone_knapping",
                    "crafting"
                ],
                "learn": [
                    "stone_knapping",
                    "shaping",
                    "cutting"
                ],
                "fatigue": 5,
                "get": "stone_tools",
                "displayName": "Tailler"
            },
            "grind": {
                "requiresOneOf": [
                    "grinding",
                    "tools",
                    "stone_working"
                ],
                "learn": [
                    "grinding",
                    "material_science",
                    "chemistry"
                ],
                "fatigue": 5,
                "get": "stone_powder",
                "displayName": "Broyer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "flint": {
        "displayName": "Silex",
        "category": "",
        "imageName": "flint",
        "actions": {
            "knap": {
                "requiresOneOf": [],
                "learn": [
                    "flint_knapping",
                    "stone_knapping",
                    "cutting"
                ],
                "fatigue": 5,
                "get": "flint_tool",
                "displayName": "Tailler"
            },
            "strike": {
                "requiresOneOf": [
                    "fire",
                    "tools",
                    "flint_knapping"
                ],
                "learn": [
                    "combustion",
                    "fire",
                    "experimentation"
                ],
                "fatigue": 5,
                "get": "spark",
                "displayName": "Frapper"
            },
            "analyze": {
                "requiresOneOf": [
                    "geology",
                    "science",
                    "mineral_identification"
                ],
                "learn": [
                    "geology",
                    "material_science",
                    "classification"
                ],
                "fatigue": 5,
                "get": "flint_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "clay": {
        "displayName": "Argile",
        "category": "",
        "imageName": "clay",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "clay_identification",
                    "geology",
                    "clay_working"
                ],
                "fatigue": 5,
                "get": "clay",
                "displayName": "Prélever"
            },
            "shape": {
                "requiresOneOf": [
                    "clay_working",
                    "shaping",
                    "crafting"
                ],
                "learn": [
                    "pottery",
                    "containers",
                    "shaping"
                ],
                "fatigue": 5,
                "get": "pottery",
                "displayName": "Façonner"
            },
            "fire": {
                "requiresOneOf": [
                    "fire",
                    "kiln",
                    "heat"
                ],
                "learn": [
                    "ceramics",
                    "kiln_firing",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "ceramics",
                "displayName": "Cuire"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "pottery": {
        "displayName": "Poterie",
        "category": "",
        "imageName": "pottery",
        "actions": {
            "dry": {
                "requiresOneOf": [],
                "learn": [
                    "drying",
                    "pottery",
                    "storage"
                ],
                "fatigue": 5,
                "get": "pottery",
                "displayName": "Sécher"
            },
            "fire": {
                "requiresOneOf": [
                    "fire",
                    "kiln",
                    "temperature"
                ],
                "learn": [
                    "ceramics",
                    "kiln_firing",
                    "heat"
                ],
                "fatigue": 5,
                "get": "ceramics",
                "displayName": "Cuire"
            },
            "glaze": {
                "requiresOneOf": [
                    "ceramics",
                    "chemistry",
                    "kiln_firing"
                ],
                "learn": [
                    "glazing",
                    "chemistry",
                    "glassmaking"
                ],
                "fatigue": 5,
                "get": "glazed_pottery",
                "displayName": "Émailler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "sand": {
        "displayName": "Sable",
        "category": "",
        "imageName": "sand",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "sand",
                    "geology",
                    "observation"
                ],
                "fatigue": 5,
                "get": "sand",
                "displayName": "Ramasser"
            },
            "wash": {
                "requiresOneOf": [
                    "filtration",
                    "water_quality",
                    "science"
                ],
                "learn": [
                    "filtration",
                    "material_science",
                    "classification"
                ],
                "fatigue": 5,
                "get": "clean_sand",
                "displayName": "Laver"
            },
            "melt": {
                "requiresOneOf": [
                    "fire",
                    "heat",
                    "kiln"
                ],
                "learn": [
                    "glassmaking",
                    "temperature",
                    "silica"
                ],
                "fatigue": 5,
                "get": "glass",
                "displayName": "Faire fondre"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "glass": {
        "displayName": "Verre",
        "category": "",
        "imageName": "glass",
        "actions": {
            "shape": {
                "requiresOneOf": [],
                "learn": [
                    "glass_working",
                    "shaping",
                    "containers"
                ],
                "fatigue": 5,
                "get": "glass_container",
                "displayName": "Façonner"
            },
            "melt": {
                "requiresOneOf": [
                    "kiln",
                    "glassmaking",
                    "heat"
                ],
                "learn": [
                    "temperature",
                    "material_science",
                    "glass_working"
                ],
                "fatigue": 5,
                "get": "glass",
                "displayName": "Refondre"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "material_science"
                ],
                "learn": [
                    "chemistry",
                    "silica",
                    "glassmaking"
                ],
                "fatigue": 5,
                "get": "glass_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "plants": {
        "displayName": "Plantes",
        "category": "",
        "imageName": "plants",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "botany",
                    "plant_identification",
                    "food_plants"
                ],
                "fatigue": 5,
                "get": "plants",
                "displayName": "Cueillir"
            },
            "identify": {
                "requiresOneOf": [
                    "botany",
                    "observation",
                    "classification"
                ],
                "learn": [
                    "plant_anatomy",
                    "plant_reproduction",
                    "ecology"
                ],
                "fatigue": 5,
                "get": "plant_data",
                "displayName": "Identifier"
            },
            "sample": {
                "requiresOneOf": [
                    "sampling",
                    "science",
                    "botany"
                ],
                "learn": [
                    "sampling",
                    "plant_anatomy",
                    "medicinal_plants"
                ],
                "fatigue": 5,
                "get": "plant_sample",
                "displayName": "Prélever un échantillon"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "medicinal_plants": {
        "displayName": "Plantes médicinales",
        "category": "",
        "imageName": "medicinal_plants",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "medicinal_plants",
                    "herbalism",
                    "botany"
                ],
                "fatigue": 5,
                "get": "medicinal_plants",
                "displayName": "Cueillir"
            },
            "prepare": {
                "requiresOneOf": [
                    "herbalism",
                    "cooking",
                    "medicinal_plants"
                ],
                "learn": [
                    "medicinal_preparations",
                    "dosage",
                    "symptoms"
                ],
                "fatigue": 5,
                "get": "medicine",
                "displayName": "Préparer"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "sampling"
                ],
                "learn": [
                    "chemistry",
                    "pharmacology",
                    "experimentation"
                ],
                "fatigue": 5,
                "get": "plant_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "resin": {
        "displayName": "Résine",
        "category": "",
        "imageName": "resin",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "resin",
                    "plant_anatomy",
                    "botany"
                ],
                "fatigue": 5,
                "get": "resin",
                "displayName": "Récolter"
            },
            "heat": {
                "requiresOneOf": [
                    "fire",
                    "heat",
                    "chemistry"
                ],
                "learn": [
                    "chemistry",
                    "adhesives",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "pitch",
                "displayName": "Chauffer"
            },
            "mix": {
                "requiresOneOf": [
                    "chemistry",
                    "experimentation",
                    "crafting"
                ],
                "learn": [
                    "chemistry",
                    "joining",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "adhesive",
                "displayName": "Mélanger"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "wild_wheat": {
        "displayName": "Blé sauvage",
        "category": "",
        "imageName": "wild_wheat",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "cereal_identification",
                    "botany",
                    "food_plants"
                ],
                "fatigue": 5,
                "get": "wild_wheat",
                "displayName": "Cueillir"
            },
            "collect_seeds": {
                "requiresOneOf": [
                    "seeds",
                    "botany",
                    "plant_reproduction"
                ],
                "learn": [
                    "seed_selection",
                    "agriculture",
                    "plant_reproduction"
                ],
                "fatigue": 5,
                "get": "wheat_seeds",
                "displayName": "Sélectionner les graines"
            },
            "cultivate": {
                "requiresOneOf": [
                    "cultivation",
                    "seed_selection",
                    "agriculture"
                ],
                "learn": [
                    "agriculture",
                    "irrigation",
                    "soil_quality"
                ],
                "fatigue": 5,
                "get": "wheat",
                "displayName": "Cultiver"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "wheat": {
        "displayName": "Blé",
        "category": "",
        "imageName": "wheat",
        "actions": {
            "harvest": {
                "requiresOneOf": [],
                "learn": [
                    "agriculture",
                    "harvesting",
                    "grain_processing"
                ],
                "fatigue": 5,
                "get": "wheat",
                "displayName": "Récolter"
            },
            "thresh": {
                "requiresOneOf": [
                    "agriculture",
                    "tools",
                    "grain_processing"
                ],
                "learn": [
                    "threshing",
                    "grain_processing",
                    "seeds"
                ],
                "fatigue": 5,
                "get": "grain",
                "displayName": "Battre"
            },
            "grind": {
                "requiresOneOf": [
                    "grinding",
                    "grain_processing",
                    "stone_working"
                ],
                "learn": [
                    "milling",
                    "flour",
                    "nutrition"
                ],
                "fatigue": 5,
                "get": "flour",
                "displayName": "Moudre"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "grain": {
        "displayName": "Grain",
        "category": "",
        "imageName": "grain",
        "actions": {
            "store": {
                "requiresOneOf": [],
                "learn": [
                    "grain_storage",
                    "food_storage",
                    "storage"
                ],
                "fatigue": 5,
                "get": "grain",
                "displayName": "Stocker"
            },
            "grind": {
                "requiresOneOf": [
                    "grinding",
                    "milling",
                    "tools"
                ],
                "learn": [
                    "milling",
                    "flour",
                    "nutrition"
                ],
                "fatigue": 5,
                "get": "flour",
                "displayName": "Moudre"
            },
            "ferment": {
                "requiresOneOf": [
                    "fermentation",
                    "cooking",
                    "experimentation"
                ],
                "learn": [
                    "fermentation_food",
                    "microbiology",
                    "food_preservation"
                ],
                "fatigue": 5,
                "get": "fermented_grain",
                "displayName": "Faire fermenter"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "flour": {
        "displayName": "Farine",
        "category": "",
        "imageName": "flour",
        "actions": {
            "mix": {
                "requiresOneOf": [],
                "learn": [
                    "dough",
                    "cooking",
                    "baking"
                ],
                "fatigue": 5,
                "get": "dough",
                "displayName": "Mélanger"
            },
            "bake": {
                "requiresOneOf": [
                    "fire",
                    "cooking",
                    "heat"
                ],
                "learn": [
                    "baking",
                    "food_storage",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "bread",
                "displayName": "Cuire"
            },
            "store": {
                "requiresOneOf": [
                    "storage",
                    "food_storage",
                    "containers"
                ],
                "learn": [
                    "food_safety",
                    "grain_storage",
                    "preservation"
                ],
                "fatigue": 5,
                "get": "flour",
                "displayName": "Stocker"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "bread": {
        "displayName": "Pain",
        "category": "",
        "imageName": "bread",
        "actions": {
            "eat": {
                "requiresOneOf": [],
                "learn": [
                    "nutrition",
                    "food_safety",
                    "cooking"
                ],
                "fatigue": 5,
                "get": "nutrition_data",
                "displayName": "Manger"
            },
            "dry": {
                "requiresOneOf": [
                    "drying_food",
                    "preservation",
                    "food_storage"
                ],
                "learn": [
                    "drying_food",
                    "preservation",
                    "storage"
                ],
                "fatigue": 5,
                "get": "dried_bread",
                "displayName": "Sécher"
            },
            "ferment": {
                "requiresOneOf": [
                    "fermentation",
                    "microbiology",
                    "cooking"
                ],
                "learn": [
                    "fermentation_food",
                    "microbiology",
                    "food_safety"
                ],
                "fatigue": 5,
                "get": "fermented_food",
                "displayName": "Faire fermenter"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "plant_fibers": {
        "displayName": "Fibres végétales",
        "category": "",
        "imageName": "plant_fibers",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "plant_fibers",
                    "botany",
                    "textile"
                ],
                "fatigue": 5,
                "get": "plant_fibers",
                "displayName": "Récolter"
            },
            "twist": {
                "requiresOneOf": [
                    "cordage",
                    "tools",
                    "textile"
                ],
                "learn": [
                    "cordage",
                    "spinning",
                    "joining"
                ],
                "fatigue": 5,
                "get": "string",
                "displayName": "Torsader"
            },
            "weave": {
                "requiresOneOf": [
                    "weaving",
                    "loom",
                    "textile"
                ],
                "learn": [
                    "weaving",
                    "loom",
                    "textile"
                ],
                "fatigue": 5,
                "get": "cloth",
                "displayName": "Tisser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "string": {
        "displayName": "Ficelle",
        "category": "",
        "imageName": "string",
        "actions": {
            "braid": {
                "requiresOneOf": [],
                "learn": [
                    "cordage",
                    "braiding",
                    "strength"
                ],
                "fatigue": 5,
                "get": "rope",
                "displayName": "Tresser"
            },
            "weave": {
                "requiresOneOf": [
                    "weaving",
                    "textile",
                    "loom"
                ],
                "learn": [
                    "weaving",
                    "textile",
                    "loom"
                ],
                "fatigue": 5,
                "get": "cloth",
                "displayName": "Tisser"
            },
            "knot": {
                "requiresOneOf": [
                    "cordage",
                    "joining",
                    "tools"
                ],
                "learn": [
                    "knots",
                    "joining",
                    "construction"
                ],
                "fatigue": 5,
                "get": "rope",
                "displayName": "Nouer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "hide": {
        "displayName": "Peau brute",
        "category": "",
        "imageName": "hide",
        "actions": {
            "scrape": {
                "requiresOneOf": [],
                "learn": [
                    "hide_processing",
                    "leatherworking",
                    "tools"
                ],
                "fatigue": 5,
                "get": "hide",
                "displayName": "Racler"
            },
            "tan": {
                "requiresOneOf": [
                    "tanning",
                    "chemistry",
                    "plants"
                ],
                "learn": [
                    "tanning",
                    "leatherworking",
                    "chemistry"
                ],
                "fatigue": 5,
                "get": "leather",
                "displayName": "Tanner"
            },
            "dry": {
                "requiresOneOf": [
                    "drying",
                    "preservation",
                    "leatherworking"
                ],
                "learn": [
                    "drying",
                    "hide_processing",
                    "preservation"
                ],
                "fatigue": 5,
                "get": "rawhide",
                "displayName": "Sécher"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "leather": {
        "displayName": "Cuir",
        "category": "",
        "imageName": "leather",
        "actions": {
            "cut": {
                "requiresOneOf": [],
                "learn": [
                    "leatherworking",
                    "cutting",
                    "shaping"
                ],
                "fatigue": 5,
                "get": "leather_parts",
                "displayName": "Découper"
            },
            "stitch": {
                "requiresOneOf": [
                    "sewing",
                    "textile",
                    "tools"
                ],
                "learn": [
                    "sewing",
                    "leatherworking",
                    "clothing"
                ],
                "fatigue": 5,
                "get": "leather_clothing",
                "displayName": "Coudre"
            },
            "waterproof": {
                "requiresOneOf": [
                    "resin",
                    "chemistry",
                    "waterproofing"
                ],
                "learn": [
                    "waterproofing",
                    "resin",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "treated_leather",
                "displayName": "Imperméabiliser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "saltwater": {
        "displayName": "Eau salée",
        "category": "",
        "imageName": "saltwater",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "salt_extraction",
                    "hydrology",
                    "observation"
                ],
                "fatigue": 5,
                "get": "saltwater",
                "displayName": "Prélever"
            },
            "evaporate": {
                "requiresOneOf": [
                    "heat",
                    "evaporation",
                    "fire"
                ],
                "learn": [
                    "evaporation",
                    "salt_extraction",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "salt",
                "displayName": "Évaporer"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "water_quality"
                ],
                "learn": [
                    "chemistry",
                    "salinity",
                    "measurement"
                ],
                "fatigue": 5,
                "get": "saltwater_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "salt": {
        "displayName": "Sel",
        "category": "",
        "imageName": "salt",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "salt_extraction",
                    "preservation",
                    "food_storage"
                ],
                "fatigue": 5,
                "get": "salt",
                "displayName": "Récolter"
            },
            "preserve": {
                "requiresOneOf": [
                    "preservation",
                    "food_storage",
                    "salt_preservation"
                ],
                "learn": [
                    "salting",
                    "food_safety",
                    "preservation"
                ],
                "fatigue": 5,
                "get": "preserved_food",
                "displayName": "Saler"
            },
            "dissolve": {
                "requiresOneOf": [
                    "chemistry",
                    "water_quality",
                    "experimentation"
                ],
                "learn": [
                    "brine",
                    "chemistry",
                    "measurement"
                ],
                "fatigue": 5,
                "get": "brine",
                "displayName": "Dissoudre"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "fruits": {
        "displayName": "Fruits",
        "category": "",
        "imageName": "fruits",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "botany",
                    "food_plants",
                    "plant_identification"
                ],
                "fatigue": 5,
                "get": "fruits",
                "displayName": "Cueillir"
            },
            "dry": {
                "requiresOneOf": [
                    "drying_food",
                    "preservation",
                    "heat"
                ],
                "learn": [
                    "drying_food",
                    "preservation",
                    "food_storage"
                ],
                "fatigue": 5,
                "get": "dried_fruit",
                "displayName": "Sécher"
            },
            "ferment": {
                "requiresOneOf": [
                    "fermentation",
                    "cooking",
                    "microbiology"
                ],
                "learn": [
                    "fermentation_food",
                    "microbiology",
                    "food_preservation"
                ],
                "fatigue": 5,
                "get": "fermented_fruit",
                "displayName": "Faire fermenter"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "mushrooms": {
        "displayName": "Champignons",
        "category": "",
        "imageName": "mushrooms",
        "actions": {
            "gather": {
                "requiresOneOf": [],
                "learn": [
                    "botany",
                    "fungi",
                    "food_safety"
                ],
                "fatigue": 5,
                "get": "mushrooms",
                "displayName": "Cueillir"
            },
            "identify": {
                "requiresOneOf": [
                    "botany",
                    "classification",
                    "observation"
                ],
                "learn": [
                    "fungi",
                    "poisoning",
                    "food_safety"
                ],
                "fatigue": 5,
                "get": "mushroom_data",
                "displayName": "Identifier"
            },
            "dry": {
                "requiresOneOf": [
                    "drying_food",
                    "preservation",
                    "food_storage"
                ],
                "learn": [
                    "drying_food",
                    "preservation",
                    "food_storage"
                ],
                "fatigue": 5,
                "get": "dried_mushrooms",
                "displayName": "Sécher"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "meat": {
        "displayName": "Viande",
        "category": "",
        "imageName": "meat",
        "actions": {
            "butcher": {
                "requiresOneOf": [],
                "learn": [
                    "butchery",
                    "anatomy",
                    "food_safety"
                ],
                "fatigue": 5,
                "get": "meat",
                "displayName": "Dépecer"
            },
            "smoke": {
                "requiresOneOf": [
                    "fire",
                    "smoking_food",
                    "preservation"
                ],
                "learn": [
                    "smoking_food",
                    "preservation",
                    "food_storage"
                ],
                "fatigue": 5,
                "get": "smoked_meat",
                "displayName": "Fumer"
            },
            "salt": {
                "requiresOneOf": [
                    "salt",
                    "salting",
                    "preservation"
                ],
                "learn": [
                    "salting",
                    "food_safety",
                    "preservation"
                ],
                "fatigue": 5,
                "get": "salted_meat",
                "displayName": "Saler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "medicine": {
        "displayName": "Préparation médicinale",
        "category": "",
        "imageName": "medicine",
        "actions": {
            "administer": {
                "requiresOneOf": [],
                "learn": [
                    "dosage",
                    "symptoms",
                    "medicine"
                ],
                "fatigue": 5,
                "get": "treated_patient",
                "displayName": "Administrer"
            },
            "compare": {
                "requiresOneOf": [
                    "science",
                    "medicine",
                    "observation"
                ],
                "learn": [
                    "diagnosis",
                    "pharmacology",
                    "experimentation"
                ],
                "fatigue": 5,
                "get": "medical_data",
                "displayName": "Comparer"
            },
            "improve": {
                "requiresOneOf": [
                    "chemistry",
                    "herbalism",
                    "experimentation"
                ],
                "learn": [
                    "medicinal_preparations",
                    "dosage",
                    "chemistry"
                ],
                "fatigue": 5,
                "get": "medicine",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "iron_ore": {
        "displayName": "Minerai de fer",
        "category": "",
        "imageName": "iron_ore",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "mineral_identification",
                    "geology",
                    "ore_processing"
                ],
                "fatigue": 5,
                "get": "iron_ore",
                "displayName": "Extraire"
            },
            "crush": {
                "requiresOneOf": [
                    "grinding",
                    "ore_processing",
                    "tools"
                ],
                "learn": [
                    "ore_processing",
                    "grinding",
                    "mineral_identification"
                ],
                "fatigue": 5,
                "get": "iron_ore_powder",
                "displayName": "Broyer"
            },
            "smelt": {
                "requiresOneOf": [
                    "fire",
                    "charcoal",
                    "metallurgy"
                ],
                "learn": [
                    "smelting",
                    "metallurgy",
                    "iron_working"
                ],
                "fatigue": 5,
                "get": "iron",
                "displayName": "Réduire"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "iron": {
        "displayName": "Fer",
        "category": "",
        "imageName": "iron",
        "actions": {
            "hammer": {
                "requiresOneOf": [],
                "learn": [
                    "iron_working",
                    "forging",
                    "hammering"
                ],
                "fatigue": 5,
                "get": "iron_tool",
                "displayName": "Marteler"
            },
            "forge": {
                "requiresOneOf": [
                    "forging",
                    "heat",
                    "metallurgy"
                ],
                "learn": [
                    "forging",
                    "annealing",
                    "tempering"
                ],
                "fatigue": 5,
                "get": "iron_tool",
                "displayName": "Forger"
            },
            "alloy": {
                "requiresOneOf": [
                    "alloying",
                    "metallurgy",
                    "chemistry"
                ],
                "learn": [
                    "alloying",
                    "material_science",
                    "metallurgy"
                ],
                "fatigue": 5,
                "get": "steel",
                "displayName": "Allier"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "copper_ore": {
        "displayName": "Minerai de cuivre",
        "category": "",
        "imageName": "copper_ore",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "geology",
                    "mineral_identification",
                    "ore_processing"
                ],
                "fatigue": 5,
                "get": "copper_ore",
                "displayName": "Extraire"
            },
            "crush": {
                "requiresOneOf": [
                    "grinding",
                    "ore_processing",
                    "tools"
                ],
                "learn": [
                    "ore_processing",
                    "grinding",
                    "mineral_identification"
                ],
                "fatigue": 5,
                "get": "copper_ore_powder",
                "displayName": "Broyer"
            },
            "smelt": {
                "requiresOneOf": [
                    "fire",
                    "charcoal",
                    "metallurgy"
                ],
                "learn": [
                    "smelting",
                    "copper_working",
                    "metallurgy"
                ],
                "fatigue": 5,
                "get": "copper",
                "displayName": "Fondre"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "copper": {
        "displayName": "Cuivre",
        "category": "",
        "imageName": "copper",
        "actions": {
            "hammer": {
                "requiresOneOf": [],
                "learn": [
                    "copper_working",
                    "hammering",
                    "metalworking"
                ],
                "fatigue": 5,
                "get": "copper",
                "displayName": "Marteler"
            },
            "cast": {
                "requiresOneOf": [
                    "casting",
                    "molds",
                    "metallurgy"
                ],
                "learn": [
                    "casting",
                    "molds",
                    "metalworking"
                ],
                "fatigue": 5,
                "get": "copper_parts",
                "displayName": "Couler"
            },
            "alloy": {
                "requiresOneOf": [
                    "alloying",
                    "metallurgy",
                    "bronze"
                ],
                "learn": [
                    "bronze",
                    "alloying",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "bronze",
                "displayName": "Allier"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "bronze": {
        "displayName": "Bronze",
        "category": "",
        "imageName": "bronze",
        "actions": {
            "hammer": {
                "requiresOneOf": [],
                "learn": [
                    "bronze",
                    "hammering",
                    "metalworking"
                ],
                "fatigue": 5,
                "get": "bronze_tool",
                "displayName": "Marteler"
            },
            "cast": {
                "requiresOneOf": [
                    "casting",
                    "molds",
                    "metallurgy"
                ],
                "learn": [
                    "casting",
                    "molds",
                    "alloying"
                ],
                "fatigue": 5,
                "get": "bronze_tool",
                "displayName": "Couler"
            },
            "polish": {
                "requiresOneOf": [
                    "polishing",
                    "metalworking",
                    "tools"
                ],
                "learn": [
                    "polishing",
                    "metalworking",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "polished_bronze",
                "displayName": "Polir"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "stone_tools": {
        "displayName": "Outils en pierre",
        "category": "",
        "imageName": "stone_tools",
        "actions": {
            "use": {
                "requiresOneOf": [],
                "learn": [
                    "tools",
                    "crafting",
                    "cutting"
                ],
                "fatigue": 5,
                "get": "worked_material",
                "displayName": "Utiliser"
            },
            "sharpen": {
                "requiresOneOf": [
                    "stone_working",
                    "grinding",
                    "shaping"
                ],
                "learn": [
                    "sharpening",
                    "cutting",
                    "grinding"
                ],
                "fatigue": 5,
                "get": "sharp_tool",
                "displayName": "Affûter"
            },
            "improve": {
                "requiresOneOf": [
                    "experimentation",
                    "crafting",
                    "material_science"
                ],
                "learn": [
                    "experimentation",
                    "toolmaking",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "improved_tool",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "limestone": {
        "displayName": "Calcaire",
        "category": "",
        "imageName": "limestone",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "geology",
                    "quarrying",
                    "stone_working"
                ],
                "fatigue": 5,
                "get": "limestone",
                "displayName": "Extraire"
            },
            "burn": {
                "requiresOneOf": [
                    "fire",
                    "heat",
                    "kiln"
                ],
                "learn": [
                    "lime",
                    "chemistry",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "lime",
                "displayName": "Calciner"
            },
            "crush": {
                "requiresOneOf": [
                    "grinding",
                    "tools",
                    "stone_working"
                ],
                "learn": [
                    "grinding",
                    "mortar",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "limestone_powder",
                "displayName": "Broyer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "lime": {
        "displayName": "Chaux",
        "category": "",
        "imageName": "lime",
        "actions": {
            "mix": {
                "requiresOneOf": [],
                "learn": [
                    "mortar",
                    "construction",
                    "chemistry"
                ],
                "fatigue": 5,
                "get": "mortar",
                "displayName": "Mélanger"
            },
            "plaster": {
                "requiresOneOf": [
                    "construction",
                    "masonry",
                    "lime"
                ],
                "learn": [
                    "architecture",
                    "construction",
                    "waterproofing"
                ],
                "fatigue": 5,
                "get": "plaster",
                "displayName": "Enduire"
            },
            "analyze": {
                "requiresOneOf": [
                    "chemistry",
                    "science",
                    "material_science"
                ],
                "learn": [
                    "chemistry",
                    "material_science",
                    "causality"
                ],
                "fatigue": 5,
                "get": "lime_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "bricks": {
        "displayName": "Briques",
        "category": "",
        "imageName": "bricks",
        "actions": {
            "build": {
                "requiresOneOf": [],
                "learn": [
                    "masonry",
                    "construction",
                    "architecture"
                ],
                "fatigue": 5,
                "get": "brick_structure",
                "displayName": "Construire"
            },
            "fire": {
                "requiresOneOf": [
                    "kiln",
                    "fire",
                    "ceramics"
                ],
                "learn": [
                    "kiln_firing",
                    "ceramics",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "fired_bricks",
                "displayName": "Cuire"
            },
            "improve": {
                "requiresOneOf": [
                    "masonry",
                    "material_science",
                    "architecture"
                ],
                "learn": [
                    "architecture",
                    "construction",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "improved_bricks",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "wood_parts": {
        "displayName": "Pièces en bois",
        "category": "",
        "imageName": "wood_parts",
        "actions": {
            "assemble": {
                "requiresOneOf": [],
                "learn": [
                    "joining",
                    "crafting",
                    "construction"
                ],
                "fatigue": 5,
                "get": "wooden_machine",
                "displayName": "Assembler"
            },
            "rotate": {
                "requiresOneOf": [
                    "wheel",
                    "axle",
                    "mechanics"
                ],
                "learn": [
                    "mechanics",
                    "wheel",
                    "axle"
                ],
                "fatigue": 5,
                "get": "wooden_mechanism",
                "displayName": "Faire tourner"
            },
            "improve": {
                "requiresOneOf": [
                    "experimentation",
                    "mechanics",
                    "woodworking"
                ],
                "learn": [
                    "mechanics",
                    "crafting",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "wooden_mechanism",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "containers": {
        "displayName": "Récipients",
        "category": "",
        "imageName": "containers",
        "actions": {
            "fill": {
                "requiresOneOf": [],
                "learn": [
                    "storage",
                    "water_storage",
                    "containers"
                ],
                "fatigue": 5,
                "get": "stored_water",
                "displayName": "Remplir"
            },
            "preserve": {
                "requiresOneOf": [
                    "food_storage",
                    "preservation",
                    "ceramics"
                ],
                "learn": [
                    "food_storage",
                    "food_safety",
                    "preservation"
                ],
                "fatigue": 5,
                "get": "preserved_food",
                "displayName": "Conserver"
            },
            "improve": {
                "requiresOneOf": [
                    "pottery",
                    "ceramics",
                    "material_science"
                ],
                "learn": [
                    "ceramics",
                    "storage",
                    "crafting"
                ],
                "fatigue": 5,
                "get": "improved_container",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "organic_waste": {
        "displayName": "Déchets organiques",
        "category": "",
        "imageName": "organic_waste",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "sanitation",
                    "hygiene",
                    "observation"
                ],
                "fatigue": 5,
                "get": "organic_waste",
                "displayName": "Collecter"
            },
            "compost": {
                "requiresOneOf": [
                    "ecology",
                    "soil",
                    "agriculture"
                ],
                "learn": [
                    "composting",
                    "soil_quality",
                    "ecology"
                ],
                "fatigue": 5,
                "get": "compost",
                "displayName": "Composter"
            },
            "burn": {
                "requiresOneOf": [
                    "fire",
                    "combustion",
                    "sanitation"
                ],
                "learn": [
                    "combustion",
                    "sanitation",
                    "ash"
                ],
                "fatigue": 5,
                "get": "ash",
                "displayName": "Brûler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "compost": {
        "displayName": "Compost",
        "category": "",
        "imageName": "compost",
        "actions": {
            "apply": {
                "requiresOneOf": [],
                "learn": [
                    "fertilization",
                    "soil_quality",
                    "agriculture"
                ],
                "fatigue": 5,
                "get": "fertile_soil",
                "displayName": "Épandre"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "soil",
                    "agriculture"
                ],
                "learn": [
                    "soil_quality",
                    "chemistry",
                    "ecology"
                ],
                "fatigue": 5,
                "get": "soil_data",
                "displayName": "Analyser"
            },
            "improve": {
                "requiresOneOf": [
                    "experimentation",
                    "ecology",
                    "soil_quality"
                ],
                "learn": [
                    "ecology",
                    "fertilization",
                    "regeneration"
                ],
                "fatigue": 5,
                "get": "rich_compost",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "soil": {
        "displayName": "Sol",
        "category": "",
        "imageName": "soil",
        "actions": {
            "observe": {
                "requiresOneOf": [],
                "learn": [
                    "soil",
                    "observation",
                    "ecology"
                ],
                "fatigue": 5,
                "get": "soil_data",
                "displayName": "Observer"
            },
            "cultivate": {
                "requiresOneOf": [
                    "agriculture",
                    "cultivation",
                    "soil_quality"
                ],
                "learn": [
                    "agriculture",
                    "soil_quality",
                    "irrigation"
                ],
                "fatigue": 5,
                "get": "cultivated_soil",
                "displayName": "Cultiver"
            },
            "sample": {
                "requiresOneOf": [
                    "sampling",
                    "science",
                    "geology"
                ],
                "learn": [
                    "soil_quality",
                    "geology",
                    "chemistry"
                ],
                "fatigue": 5,
                "get": "soil_sample",
                "displayName": "Prélever"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "clay_bricks": {
        "displayName": "Briques d'argile",
        "category": "",
        "imageName": "clay_bricks",
        "actions": {
            "build": {
                "requiresOneOf": [],
                "learn": [
                    "construction",
                    "masonry",
                    "architecture"
                ],
                "fatigue": 5,
                "get": "building",
                "displayName": "Construire"
            },
            "fire": {
                "requiresOneOf": [
                    "fire",
                    "kiln",
                    "ceramics"
                ],
                "learn": [
                    "kiln_firing",
                    "ceramics",
                    "temperature"
                ],
                "fatigue": 5,
                "get": "fired_bricks",
                "displayName": "Cuire"
            },
            "analyze": {
                "requiresOneOf": [
                    "science",
                    "material_science",
                    "ceramics"
                ],
                "learn": [
                    "material_science",
                    "chemistry",
                    "clay_identification"
                ],
                "fatigue": 5,
                "get": "clay_data",
                "displayName": "Analyser"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "rope": {
        "displayName": "Corde",
        "category": "",
        "imageName": "rope",
        "actions": {
            "use": {
                "requiresOneOf": [],
                "learn": [
                    "cordage",
                    "knots",
                    "construction"
                ],
                "fatigue": 5,
                "get": "rope",
                "displayName": "Utiliser"
            },
            "weave": {
                "requiresOneOf": [
                    "weaving",
                    "textile",
                    "cordage"
                ],
                "learn": [
                    "weaving",
                    "strength",
                    "textile"
                ],
                "fatigue": 5,
                "get": "rope",
                "displayName": "Tresser"
            },
            "sail": {
                "requiresOneOf": [
                    "sailing",
                    "textile",
                    "navigation"
                ],
                "learn": [
                    "sailing",
                    "wind",
                    "navigation"
                ],
                "fatigue": 5,
                "get": "sail",
                "displayName": "Fabriquer une voile"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "wax": {
        "displayName": "Cire",
        "category": "",
        "imageName": "wax",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "observation",
                    "animal_behavior",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "wax",
                "displayName": "Récolter"
            },
            "melt": {
                "requiresOneOf": [
                    "heat",
                    "fire",
                    "temperature"
                ],
                "learn": [
                    "temperature",
                    "material_science",
                    "casting"
                ],
                "fatigue": 5,
                "get": "liquid_wax",
                "displayName": "Faire fondre"
            },
            "seal": {
                "requiresOneOf": [
                    "containers",
                    "storage",
                    "crafting"
                ],
                "learn": [
                    "sealing",
                    "preservation",
                    "storage"
                ],
                "fatigue": 5,
                "get": "sealed_container",
                "displayName": "Sceller"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "stars_data": {
        "displayName": "Données astronomiques",
        "category": "",
        "imageName": "stars_data",
        "actions": {
            "observe": {
                "requiresOneOf": [],
                "learn": [
                    "stars",
                    "astronomy",
                    "observation"
                ],
                "fatigue": 5,
                "get": "stars_data",
                "displayName": "Observer"
            },
            "record": {
                "requiresOneOf": [
                    "recording",
                    "writing",
                    "science"
                ],
                "learn": [
                    "mapping",
                    "astronomy",
                    "recording"
                ],
                "fatigue": 5,
                "get": "star_chart",
                "displayName": "Consigner"
            },
            "compare": {
                "requiresOneOf": [
                    "comparison",
                    "astronomy",
                    "measurement"
                ],
                "learn": [
                    "navigation",
                    "orientation",
                    "astronomy"
                ],
                "fatigue": 5,
                "get": "star_data",
                "displayName": "Comparer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "wool": {
        "displayName": "Laine",
        "category": "",
        "imageName": "wool",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "animal_husbandry",
                    "textile",
                    "animal_nutrition"
                ],
                "fatigue": 5,
                "get": "wool",
                "displayName": "Tondre"
            },
            "spin": {
                "requiresOneOf": [
                    "spinning",
                    "textile",
                    "tools"
                ],
                "learn": [
                    "spinning",
                    "textile",
                    "weaving"
                ],
                "fatigue": 5,
                "get": "wool_yarn",
                "displayName": "Filer"
            },
            "felt": {
                "requiresOneOf": [
                    "textile",
                    "crafting",
                    "experimentation"
                ],
                "learn": [
                    "textile",
                    "material_science",
                    "clothing"
                ],
                "fatigue": 5,
                "get": "felt",
                "displayName": "Feutrer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "tools": {
        "displayName": "Outils",
        "category": "",
        "imageName": "tools",
        "actions": {
            "use": {
                "requiresOneOf": [],
                "learn": [
                    "crafting",
                    "tools",
                    "experimentation"
                ],
                "fatigue": 5,
                "get": "worked_material",
                "displayName": "Utiliser"
            },
            "repair": {
                "requiresOneOf": [
                    "crafting",
                    "metalworking",
                    "woodworking"
                ],
                "learn": [
                    "repair",
                    "maintenance",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "repaired_tool",
                "displayName": "Réparer"
            },
            "improve": {
                "requiresOneOf": [
                    "experimentation",
                    "material_science",
                    "crafting"
                ],
                "learn": [
                    "toolmaking",
                    "experimentation",
                    "specialization"
                ],
                "fatigue": 5,
                "get": "improved_tool",
                "displayName": "Améliorer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "soil_sample": {
        "displayName": "Échantillon de sol",
        "category": "",
        "imageName": "soil_sample",
        "actions": {
            "examine": {
                "requiresOneOf": [],
                "learn": [
                    "soil_quality",
                    "observation",
                    "classification"
                ],
                "fatigue": 5,
                "get": "soil_data",
                "displayName": "Examiner"
            },
            "compare": {
                "requiresOneOf": [
                    "comparison",
                    "science",
                    "geology"
                ],
                "learn": [
                    "geology",
                    "ecology",
                    "causality"
                ],
                "fatigue": 5,
                "get": "soil_data",
                "displayName": "Comparer"
            },
            "test": {
                "requiresOneOf": [
                    "science",
                    "chemistry",
                    "experimentation"
                ],
                "learn": [
                    "chemistry",
                    "fertilization",
                    "soil_quality"
                ],
                "fatigue": 5,
                "get": "soil_data",
                "displayName": "Tester"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "plant_sample": {
        "displayName": "Échantillon végétal",
        "category": "",
        "imageName": "plant_sample",
        "actions": {
            "examine": {
                "requiresOneOf": [],
                "learn": [
                    "botany",
                    "plant_anatomy",
                    "classification"
                ],
                "fatigue": 5,
                "get": "plant_data",
                "displayName": "Examiner"
            },
            "dry": {
                "requiresOneOf": [
                    "drying",
                    "botany",
                    "preservation"
                ],
                "learn": [
                    "preservation",
                    "medicinal_plants",
                    "plant_anatomy"
                ],
                "fatigue": 5,
                "get": "dried_plant_sample",
                "displayName": "Sécher"
            },
            "compare": {
                "requiresOneOf": [
                    "comparison",
                    "science",
                    "botany"
                ],
                "learn": [
                    "plant_identification",
                    "plant_reproduction",
                    "ecology"
                ],
                "fatigue": 5,
                "get": "plant_data",
                "displayName": "Comparer"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "ancient_metal": {
        "displayName": "Métal ancien",
        "category": "",
        "imageName": "ancient_metal",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "archaeology",
                    "material_science",
                    "ruins"
                ],
                "fatigue": 5,
                "get": "ancient_metal",
                "displayName": "Récupérer"
            },
            "examine": {
                "requiresOneOf": [
                    "archaeology",
                    "observation",
                    "science"
                ],
                "learn": [
                    "artifact_analysis",
                    "ancient_technology",
                    "metallurgy"
                ],
                "fatigue": 5,
                "get": "artifact_data",
                "displayName": "Examiner"
            },
            "recycle": {
                "requiresOneOf": [
                    "metalworking",
                    "recycling",
                    "metallurgy"
                ],
                "learn": [
                    "recycling",
                    "material_science",
                    "metalworking"
                ],
                "fatigue": 5,
                "get": "metal",
                "displayName": "Recycler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "ancient_glass": {
        "displayName": "Verre ancien",
        "category": "",
        "imageName": "ancient_glass",
        "actions": {
            "collect": {
                "requiresOneOf": [],
                "learn": [
                    "archaeology",
                    "glassmaking",
                    "ruins"
                ],
                "fatigue": 5,
                "get": "ancient_glass",
                "displayName": "Récupérer"
            },
            "examine": {
                "requiresOneOf": [
                    "archaeology",
                    "science",
                    "glassmaking"
                ],
                "learn": [
                    "artifact_analysis",
                    "glassmaking",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "artifact_data",
                "displayName": "Examiner"
            },
            "recycle": {
                "requiresOneOf": [
                    "glassmaking",
                    "recycling",
                    "material_science"
                ],
                "learn": [
                    "recycling",
                    "glass_working",
                    "material_science"
                ],
                "fatigue": 5,
                "get": "glass",
                "displayName": "Recycler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
    },
    "ancient_plastic": {
        "displayName": "plastique ancien",
        "category": "",
        "imageName": "ancient_plastic",
        "actions": {
            "salvage": {
                "requiresOneOf": [],
                "learn": [
                    "material_science",
                    "recycling",
                    "ancient_world"
                ],
                "fatigue": 5,
                "get": "ancient_plastic",
                "displayName": "Récupérer"
            },
            "identify": {
                "requiresOneOf": [
                    "material_science",
                    "chemistry",
                    "ancient_world"
                ],
                "learn": [
                    "material_science",
                    "chemistry",
                    "identification"
                ],
                "fatigue": 5,
                "get": "plastic",
                "displayName": "Identifier"
            },
            "recycle": {
                "requiresOneOf": [
                    "recycling",
                    "chemistry",
                    "material_science"
                ],
                "learn": [
                    "recycling",
                    "chemistry",
                    "processing"
                ],
                "fatigue": 5,
                "get": "plastic",
                "displayName": "Recycler"
            }
        },
        "popGrowth": 3,
        "regeneration": 1,
        "fatigueRecovery": 2
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

console.log(JSON.stringify(Data.resources));