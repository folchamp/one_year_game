"use strict";

class Data {
    static resources = {
        "water": {
            "resourceName": "water",
            "imageName": "water",
            "displayName": "Eau",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "clean_water": {
            "resourceName": "clean_water",
            "imageName": "clean_water",
            "displayName": "Eau potable",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "water_sample": {
            "resourceName": "water_sample",
            "imageName": "water_sample",
            "displayName": "Échantillon d'eau",
            "category": "misc",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "examine": {
                    "requiresOneOf": [],
                    "learn": [
                        "observation",
                        "water_quality",
                        "classification"
                    ],
                    "fatigue": 5,
                    "get": "science",
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
                    "get": "science",
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
                    "get": "science",
                    "displayName": "Tester"
                }
            }
        },
        "rainwater": {
            "resourceName": "rainwater",
            "imageName": "rainwater",
            "displayName": "Eau de pluie",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "wood": {
            "resourceName": "wood",
            "imageName": "wood",
            "displayName": "Bois",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "lumber": {
            "resourceName": "lumber",
            "imageName": "lumber",
            "displayName": "Bois d'œuvre",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "shape": {
                    "requiresOneOf": [],
                    "learn": [
                        "woodworking",
                        "shaping",
                        "crafting"
                    ],
                    "fatigue": 5,
                    "get": "lumber",
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
                    "get": "charcoal",
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
                    "get": "lumber",
                    "displayName": "Construire"
                }
            }
        },
        "charcoal": {
            "resourceName": "charcoal",
            "imageName": "charcoal",
            "displayName": "Charbon de bois",
            "category": "energy",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "ash",
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "sandstone": {
            "resourceName": "sandstone",
            "imageName": "sandstone",
            "displayName": "Grès",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "tool",
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
                    "get": "sand",
                    "displayName": "Broyer"
                }
            }
        },
        "flint": {
            "resourceName": "flint",
            "imageName": "flint",
            "displayName": "Silex",
            "category": "tool",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "knap": {
                    "requiresOneOf": [],
                    "learn": [
                        "flint_knapping",
                        "stone_knapping",
                        "cutting"
                    ],
                    "fatigue": 5,
                    "get": "tool",
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
                    "get": "flint",
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "clay": {
            "resourceName": "clay",
            "imageName": "clay",
            "displayName": "Argile",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "pottery": {
            "resourceName": "pottery",
            "imageName": "pottery",
            "displayName": "Poterie",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "ceramics",
                    "displayName": "Émailler"
                }
            }
        },
        "sand": {
            "resourceName": "sand",
            "imageName": "sand",
            "displayName": "Sable",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "sand",
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
            }
        },
        "glass": {
            "resourceName": "glass",
            "imageName": "glass",
            "displayName": "Verre",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "shape": {
                    "requiresOneOf": [],
                    "learn": [
                        "glass_working",
                        "shaping",
                        "containers"
                    ],
                    "fatigue": 5,
                    "get": "container",
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "plants": {
            "resourceName": "plants",
            "imageName": "plants",
            "displayName": "Plantes",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
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
                    "get": "plants",
                    "displayName": "Prélever un échantillon"
                }
            }
        },
        "medicinal_plants": {
            "resourceName": "medicinal_plants",
            "imageName": "medicinal_plants",
            "displayName": "Plantes médicinales",
            "category": "medecine",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "resin": {
            "resourceName": "resin",
            "imageName": "resin",
            "displayName": "Résine",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "containers",
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
                    "get": "science",
                    "displayName": "Mélanger"
                }
            }
        },
        "wild_wheat": {
            "resourceName": "wild_wheat",
            "imageName": "wild_wheat",
            "displayName": "Blé sauvage",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "seeds",
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
            }
        },
        "wheat": {
            "resourceName": "wheat",
            "imageName": "wheat",
            "displayName": "Blé",
            "category": "food",
            "popGrowth": 6,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "seeds": {
            "resourceName": "seeds",
            "imageName": "seeds",
            "displayName": "Graines",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "store": {
                    "requiresOneOf": [],
                    "learn": [
                        "seed_storage",
                        "food_storage",
                        "storage"
                    ],
                    "fatigue": 5,
                    "get": "seeds",
                    "displayName": "Stocker"
                },
                "sow": {
                    "requiresOneOf": [
                        "agriculture",
                        "farming",
                        "soil"
                    ],
                    "learn": [
                        "agriculture",
                        "seed_sowing",
                        "crop_cultivation"
                    ],
                    "fatigue": 5,
                    "get": "wild_wheat",
                    "displayName": "Semer"
                },
                "select": {
                    "requiresOneOf": [
                        "agriculture",
                        "botany",
                        "observation"
                    ],
                    "learn": [
                        "plant_breeding",
                        "botany",
                        "seed_selection"
                    ],
                    "fatigue": 5,
                    "get": "wheat",
                    "displayName": "Sélectionner"
                }
            }
        },
        "grain": {
            "resourceName": "grain",
            "imageName": "grain",
            "displayName": "Grain",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "beer",
                    "displayName": "Faire fermenter"
                }
            }
        },
        "flour": {
            "resourceName": "flour",
            "imageName": "flour",
            "displayName": "Farine",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "dough": {
            "resourceName": "dough",
            "imageName": "dough",
            "displayName": "Pâte",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "knead": {
                    "requiresOneOf": [],
                    "learn": [
                        "kneading",
                        "cooking",
                        "food_preparation"
                    ],
                    "fatigue": 5,
                    "get": "dough",
                    "displayName": "Pétrir"
                },
                "ferment": {
                    "requiresOneOf": [
                        "fermentation",
                        "cooking",
                        "baking"
                    ],
                    "learn": [
                        "bread_making",
                        "fermentation_food",
                        "microbiology"
                    ],
                    "fatigue": 5,
                    "get": "dough",
                    "displayName": "Faire fermenter"
                },
                "bake": {
                    "requiresOneOf": [
                        "fire",
                        "cooking",
                        "baking"
                    ],
                    "learn": [
                        "baking",
                        "bread_making",
                        "oven"
                    ],
                    "fatigue": 5,
                    "get": "bread",
                    "displayName": "Cuire"
                }
            }
        },
        "bread": {
            "resourceName": "bread",
            "imageName": "bread",
            "displayName": "Pain",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "eat": {
                    "requiresOneOf": [],
                    "learn": [
                        "nutrition",
                        "food_safety",
                        "cooking"
                    ],
                    "fatigue": 5,
                    "get": "science",
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
                    "get": "preserver_food",
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
                    "get": "preserved_food",
                    "displayName": "Faire fermenter"
                }
            }
        },
        "plant_fibers": {
            "resourceName": "plant_fibers",
            "imageName": "plant_fibers",
            "displayName": "Fibres végétales",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "clothes",
                    "displayName": "Tisser"
                }
            }
        },
        "string": {
            "resourceName": "string",
            "imageName": "string",
            "displayName": "Ficelle",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "clothes",
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
            }
        },
        "hide": {
            "resourceName": "hide",
            "imageName": "hide",
            "displayName": "Peau brute",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "hide",
                    "displayName": "Sécher"
                }
            }
        },
        "leather": {
            "resourceName": "leather",
            "imageName": "leather",
            "displayName": "Cuir",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "cut": {
                    "requiresOneOf": [],
                    "learn": [
                        "leatherworking",
                        "cutting",
                        "shaping"
                    ],
                    "fatigue": 5,
                    "get": "leather",
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
                    "get": "clothes",
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
                    "get": "clothes",
                    "displayName": "Imperméabiliser"
                }
            }
        },
        "saltwater": {
            "resourceName": "saltwater",
            "imageName": "saltwater",
            "displayName": "Eau salée",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "salt": {
            "resourceName": "salt",
            "imageName": "salt",
            "displayName": "Sel",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "preserved_food",
                    "displayName": "Dissoudre"
                }
            }
        },
        "fruits": {
            "resourceName": "fruits",
            "imageName": "fruits",
            "displayName": "Fruits",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "preserved_food",
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
                    "get": "preserved_food",
                    "displayName": "Faire fermenter"
                }
            }
        },
        "mushrooms": {
            "resourceName": "mushrooms",
            "imageName": "mushrooms",
            "displayName": "Champignons",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
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
                    "get": "preserved_food",
                    "displayName": "Sécher"
                }
            }
        },
        "meat": {
            "resourceName": "meat",
            "imageName": "meat",
            "displayName": "Viande",
            "category": "food",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "preserved_food",
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
                    "get": "preserved_food",
                    "displayName": "Saler"
                }
            }
        },
        "medicine": {
            "resourceName": "medicine",
            "imageName": "medicine",
            "displayName": "Préparation médicinale",
            "category": "medecine",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "test": {
                    "requiresOneOf": [],
                    "learn": [
                        "dosage",
                        "symptoms",
                        "medicine"
                    ],
                    "fatigue": 5,
                    "get": "science",
                    "displayName": "Tester"
                },
                "analyze": {
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
                    "get": "science",
                    "displayName": "Analyser"
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
            }
        },
        "iron_ore": {
            "resourceName": "iron_ore",
            "imageName": "iron_ore",
            "displayName": "Minerai de fer",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "iron_ore",
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
            }
        },
        "iron": {
            "resourceName": "iron",
            "imageName": "iron",
            "displayName": "Fer",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "hammer": {
                    "requiresOneOf": [],
                    "learn": [
                        "iron_working",
                        "forging",
                        "hammering"
                    ],
                    "fatigue": 5,
                    "get": "tool",
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
                    "get": "tool",
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
            }
        },
        "steel": {
            "resourceName": "steel",
            "imageName": "steel",
            "displayName": "Acier",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "forge": {
                    "requiresOneOf": [
                        "smithing",
                        "metalworking",
                        "fire"
                    ],
                    "learn": [
                        "forging",
                        "steelworking",
                        "blacksmithing"
                    ],
                    "fatigue": 5,
                    "get": "tool",
                    "displayName": "Forger"
                },
                "temper": {
                    "requiresOneOf": [
                        "metallurgy",
                        "smithing",
                        "steelworking"
                    ],
                    "learn": [
                        "heat_treatment",
                        "metallurgy",
                        "tempering"
                    ],
                    "fatigue": 5,
                    "get": "steel",
                    "displayName": "Tremper"
                },
                "machine": {
                    "requiresOneOf": [
                        "metalworking",
                        "machining",
                        "tools"
                    ],
                    "learn": [
                        "machining",
                        "precision_engineering",
                        "metalworking"
                    ],
                    "fatigue": 5,
                    "get": "tool",
                    "displayName": "Usiner"
                }
            }
        },
        "copper_ore": {
            "resourceName": "copper_ore",
            "imageName": "copper_ore",
            "displayName": "Minerai de cuivre",
            "category": "raw_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "copper_ore",
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
            }
        },
        "copper": {
            "resourceName": "copper",
            "imageName": "copper",
            "displayName": "Cuivre",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "tool",
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
            }
        },
        "bronze": {
            "resourceName": "bronze",
            "imageName": "bronze",
            "displayName": "Bronze",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "hammer": {
                    "requiresOneOf": [],
                    "learn": [
                        "bronze",
                        "hammering",
                        "metalworking"
                    ],
                    "fatigue": 5,
                    "get": "tool",
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
                    "get": "tool",
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
                    "get": "bronze",
                    "displayName": "Polir"
                }
            }
        },
        "limestone": {
            "resourceName": "limestone",
            "imageName": "limestone",
            "displayName": "Calcaire",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "limestone",
                    "displayName": "Broyer"
                }
            }
        },
        "lime": {
            "resourceName": "lime",
            "imageName": "lime",
            "displayName": "Chaux",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "bricks": {
            "resourceName": "bricks",
            "imageName": "bricks",
            "displayName": "Briques",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "store": {
                    "requiresOneOf": [],
                    "learn": [
                        "masonry",
                        "construction",
                        "architecture"
                    ],
                    "fatigue": 5,
                    "get": "brick",
                    "displayName": "Stocker"
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
                    "get": "bricks",
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
                    "get": "bricks",
                    "displayName": "Améliorer"
                }
            }
        },
        "containers": {
            "resourceName": "containers",
            "imageName": "containers",
            "displayName": "Récipients",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "fill": {
                    "requiresOneOf": [],
                    "learn": [
                        "storage",
                        "water_storage",
                        "containers"
                    ],
                    "fatigue": 5,
                    "get": "preserved_food",
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
                    "get": "containers",
                    "displayName": "Améliorer"
                }
            }
        },
        "organic_waste": {
            "resourceName": "organic_waste",
            "imageName": "organic_waste",
            "displayName": "Déchets organiques",
            "category": "energy",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "compost": {
            "resourceName": "compost",
            "imageName": "compost",
            "displayName": "Compost",
            "category": "energy",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "complete": {
                    "requiresOneOf": [],
                    "learn": [
                        "fertilization",
                        "soil_quality",
                        "agriculture"
                    ],
                    "fatigue": 5,
                    "get": "soil",
                    "displayName": "Complèter"
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
                    "get": "science",
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
                    "get": "soil",
                    "displayName": "Améliorer"
                }
            }
        },
        "soil": {
            "resourceName": "soil",
            "imageName": "soil",
            "displayName": "Sol",
            "category": "energy",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "observe": {
                    "requiresOneOf": [],
                    "learn": [
                        "soil",
                        "observation",
                        "ecology"
                    ],
                    "fatigue": 5,
                    "get": "science",
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
                    "get": "wild_wheat",
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
                    "get": "science",
                    "displayName": "Prélever"
                }
            }
        },
        "ceramics": {
            "resourceName": "ceramics",
            "imageName": "ceramics",
            "displayName": "Céramiques",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "shape": {
                    "requiresOneOf": [
                        "pottery",
                        "crafting",
                        "clay"
                    ],
                    "learn": [
                        "pottery",
                        "ceramics",
                        "crafting"
                    ],
                    "fatigue": 5,
                    "get": "pottery",
                    "displayName": "Façonner"
                },
                "fire": {
                    "requiresOneOf": [
                        "fire",
                        "pottery",
                        "combustion"
                    ],
                    "learn": [
                        "kiln",
                        "ceramics",
                        "combustion"
                    ],
                    "fatigue": 5,
                    "get": "ceramics",
                    "displayName": "Cuire"
                },
                "analyze": {
                    "requiresOneOf": [
                        "geology",
                        "science",
                        "material_identification"
                    ],
                    "learn": [
                        "material_science",
                        "ceramics",
                        "classification"
                    ],
                    "fatigue": 5,
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "rope": {
            "resourceName": "rope",
            "imageName": "rope",
            "displayName": "Corde",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "lengthen": {
                    "requiresOneOf": [],
                    "learn": [
                        "cordage",
                        "knots",
                        "construction"
                    ],
                    "fatigue": 5,
                    "get": "rope",
                    "displayName": "Allonger"
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
            }
        },
        "stars_data": {
            "resourceName": "stars_data",
            "imageName": "stars_data",
            "displayName": "Données astronomiques",
            "category": "misc",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
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
                    "get": "science",
                    "displayName": "Comparer"
                }
            }
        },
        "wool": {
            "resourceName": "wool",
            "imageName": "wool",
            "displayName": "Laine",
            "category": "comfort",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "rope",
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
                    "get": "clothes",
                    "displayName": "Feutrer"
                }
            }
        },
        "tool": {
            "resourceName": "tool",
            "imageName": "tool",
            "displayName": "Outils",
            "category": "tool",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "copy": {
                    "requiresOneOf": [],
                    "learn": [
                        "crafting",
                        "tools",
                        "experimentation"
                    ],
                    "fatigue": 1,
                    "get": "tool",
                    "displayName": "Répliquer"
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
                    "fatigue": 0,
                    "get": "tool",
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
                    "get": "tool",
                    "displayName": "Améliorer"
                }
            }
        },
        "ancient_metal": {
            "resourceName": "ancient_metal",
            "imageName": "ancient_metal",
            "displayName": "Métal ancien",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
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
            }
        },
        "ancient_glass": {
            "resourceName": "ancient_glass",
            "imageName": "ancient_glass",
            "displayName": "Verre ancien",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
                    "get": "science",
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
            }
        },
        "ancient_plastic": {
            "resourceName": "ancient_plastic",
            "imageName": "ancient_plastic",
            "displayName": "plastique ancien",
            "category": "building_material",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
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
            }
        },
        "ash": {
            "resourceName": "ash",
            "imageName": "ash",
            "displayName": "Cendres",
            "category": "energy",
            "popGrowth": 3,
            "regeneration": 1,
            "fatigueRecovery": 2,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "sanitation",
                        "hygiene",
                        "observation"
                    ],
                    "fatigue": 5,
                    "get": "ash",
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
                "soap": {
                    "requiresOneOf": [
                        "hygiene",
                        "chemistry",
                        "sanitation"
                    ],
                    "learn": [
                        "soapmaking",
                        "hygiene",
                        "chemistry"
                    ],
                    "fatigue": 5,
                    "get": "soap",
                    "displayName": "Fabriquer du savon"
                }
            }
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
                "nothing",
                "sandstone",
                "flint",
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
                // "limestone",
                "limestone",
                "flint",
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

// console.log(JSON.stringify(Data.resources));

for (let resourceName in Data.resources) {
    const resourceData = Data.resources[resourceName];
    for (let actionName in resourceData.actions) {
        const get = resourceData.actions[actionName].get;
        if (Data.resources[get] === undefined) {
            console.warn(`${get} doesn't exist`);
        }
    }
}