"use strict";

class Data {
    static resources = {
        "water": {
            "resourceName": "water",
            "imageName": "water",
            "displayName": "Eau",
            "category": "raw_material",
            "regeneration": 1,
            "actions": {
                "draw": {
                    "requiresOneOf": [],
                    "learn": [
                        "hygiene",
                        "hydrology",
                        "water_sources"
                    ],
                    "get": "water",
                    "displayName": "Puiser"
                },
                "boil": {
                    "requiresOneOf": [
                        "fire",
                        "cooking",
                        "containers",
                        "food_safety"
                    ],
                    "learn": [
                        "purification",
                        "hygiene",
                        "temperature"
                    ],
                    "get": "clean_water",
                    "displayName": "Faire bouillir"
                },
                "sample": {
                    "requiresOneOf": [
                        "water_sources",
                        "science",
                        "hydrology",
                        "sampling"
                    ],
                    "learn": [
                        "water_quality",
                        "measurement"
                    ],
                    "get": "science",
                    "displayName": "Prélever un échantillon"
                }
            }
        },
        "clean_water": {
            "resourceName": "clean_water",
            "imageName": "clean_water",
            "displayName": "Eau potable",
            "category": "food",
            "regeneration": 1,
            "actions": {
                "irrigate": {
                    "requiresOneOf": [],
                    "learn": [
                        "nutrition",
                        "hygiene",
                        "water_quality"
                    ],
                    "get": "wild_wheat",
                    "displayName": "Arroser"
                },
                "store": {
                    "requiresOneOf": [
                        "water_sources",
                        "storage",
                        "containers",
                        "water_storage"
                    ],
                    "learn": [
                        "food_storage",
                        "sanitation"
                    ],
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
                        "chemistry",
                        "microbiology"
                    ],
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
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "woodworking",
                        "observation",
                        "tools"
                    ],
                    "get": "wood",
                    "displayName": "Ramasser"
                },
                "cut": {
                    "requiresOneOf": [
                        "tools",
                        "cutting",
                        "woodworking"
                    ],
                    "learn": [
                        "timber",
                        "shaping"
                    ],
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
                        "charcoal_making",
                        "smelting"
                    ],
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
            "regeneration": 1,
            "actions": {
                "shape": {
                    "requiresOneOf": [],
                    "learn": [
                        "woodworking",
                        "shaping",
                        "crafting"
                    ],
                    "get": "lumber",
                    "displayName": "Façonner"
                },
                "carbonize": {
                    "requiresOneOf": [
                        "drying",
                        "woodworking",
                        "temperature",
                        "charcoal_making"
                    ],
                    "learn": [
                        "seasoning",
                        "preservation"
                    ],
                    "get": "charcoal",
                    "displayName": "Carboniser"
                },
                "extract": {
                    "requiresOneOf": [
                        "construction",
                        "carpentry",
                        "architecture"
                    ],
                    "learn": [],
                    "get": "resin",
                    "displayName": "Extraire"
                }
            }
        },
        "charcoal": {
            "resourceName": "charcoal",
            "imageName": "charcoal",
            "displayName": "Charbon de bois",
            "category": "energy",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [
                        "charcoal_making",
                        "combustion",
                        "heat"
                    ],
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
                        "smelting"
                    ],
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
                        "experimentation"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "geology",
                        "observation",
                        "stone_working",
                        "sand"
                    ],
                    "get": "sandstone",
                    "displayName": "Ramasser"
                },
                "knap": {
                    "requiresOneOf": [
                        "tools",
                        "stone_knapping",
                        "crafting",
                        "strength"
                    ],
                    "learn": [
                        "shaping",
                        "cutting"
                    ],
                    "get": "tool",
                    "displayName": "Tailler"
                },
                "grind": {
                    "requiresOneOf": [
                        "grinding",
                        "tools",
                        "stone_working",
                        "timber",
                        "sand"
                    ],
                    "learn": [
                        "material_science",
                        "chemistry",
                        "purification"
                    ],
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
            "regeneration": 1,
            "actions": {
                "knap": {
                    "requiresOneOf": [],
                    "learn": [
                        "flint_knapping",
                        "stone_knapping",
                        "cutting"
                    ],
                    "get": "tool",
                    "displayName": "Tailler"
                },
                "strike": {
                    "requiresOneOf": [
                        "fire",
                        "tools",
                        "flint_knapping",
                        "timber"
                    ],
                    "learn": [
                        "combustion",
                        "experimentation"
                    ],
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
                        "material_science",
                        "classification"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "clay_identification",
                        "geology",
                        "clay_working"
                    ],
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
                        "containers"
                    ],
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
                    "get": "bricks",
                    "displayName": "Cuire"
                }
            }
        },
        "pottery": {
            "resourceName": "pottery",
            "imageName": "pottery",
            "displayName": "Poterie",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "dry": {
                    "requiresOneOf": [],
                    "learn": [
                        "drying",
                        "pottery",
                        "storage"
                    ],
                    "get": "pottery",
                    "displayName": "Sécher"
                },
                "fire": {
                    "requiresOneOf": [
                        "fire",
                        "kiln",
                        "temperature",
                        "glazing"
                    ],
                    "learn": [
                        "ceramics",
                        "kiln_firing",
                        "heat"
                    ],
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
                        "glassmaking"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "sand",
                        "geology",
                        "observation"
                    ],
                    "get": "sand",
                    "displayName": "Ramasser"
                },
                "wash": {
                    "requiresOneOf": [
                        "filtration",
                        "water_quality",
                        "science",
                        "water_sources",
                        "purification"
                    ],
                    "learn": [
                        "material_science",
                        "classification"
                    ],
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
            "regeneration": 1,
            "actions": {
                "shape": {
                    "requiresOneOf": [],
                    "learn": [
                        "glass_working",
                        "shaping",
                        "containers",
                        "silica"
                    ],
                    "get": "containers",
                    "displayName": "Façonner"
                },
                "melt": {
                    "requiresOneOf": [
                        "kiln",
                        "glassmaking",
                        "heat",
                        "dosage",
                        "tempering",
                        "silica"
                    ],
                    "learn": [
                        "temperature",
                        "material_science",
                        "glass_working"
                    ],
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
                        "silica",
                        "glassmaking"
                    ],
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
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "botany",
                        "plant_identification",
                        "food_plants"
                    ],
                    "get": "plants",
                    "displayName": "Cueillir"
                },
                "identify": {
                    "requiresOneOf": [
                        "botany",
                        "observation",
                        "classification",
                        "plant_identification",
                        "medicinal_preparations"
                    ],
                    "learn": [
                        "plant_anatomy",
                        "plant_reproduction",
                        "ecology"
                    ],
                    "get": "medicinal_plants",
                    "displayName": "Identifier"
                },
                "strip": {
                    "requiresOneOf": [
                        "plant_anatomy",
                        "science",
                        "botany",
                        "plant_fibers"
                    ],
                    "learn": [
                        "sampling",
                        "medicinal_plants"
                    ],
                    "get": "plant_fibers",
                    "displayName": "Dépouiller"
                }
            }
        },
        "medicinal_plants": {
            "resourceName": "medicinal_plants",
            "imageName": "medicinal_plants",
            "displayName": "Plantes médicinales",
            "category": "medicine",
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "medicinal_plants",
                        "herbalism",
                        "botany"
                    ],
                    "get": "medicinal_plants",
                    "displayName": "Cueillir"
                },
                "prepare": {
                    "requiresOneOf": [
                        "herbalism",
                        "cooking",
                        "medicinal_plants",
                        "anatomy"
                    ],
                    "learn": [
                        "medicinal_preparations",
                        "dosage"
                    ],
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
                        "pharmacology",
                        "experimentation"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "resin",
                        "plant_anatomy",
                        "botany"
                    ],
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
                        "adhesives",
                        "material_science"
                    ],
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
                        "joining",
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "cereal_identification",
                        "botany",
                        "food_plants",
                        "crop_cultivation"
                    ],
                    "get": "wild_wheat",
                    "displayName": "Cueillir"
                },
                "collect_seeds": {
                    "requiresOneOf": [
                        "seeds",
                        "botany",
                        "plant_reproduction",
                        "cereal_identification"
                    ],
                    "learn": [
                        "seed_selection",
                        "agriculture"
                    ],
                    "get": "seeds",
                    "displayName": "Sélectionner les graines"
                },
                "cultivate": {
                    "requiresOneOf": [
                        "cultivation",
                        "seed_selection",
                        "agriculture",
                        "irrigation",
                        "harvesting"
                    ],
                    "learn": [
                        "soil_quality"
                    ],
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
            "regeneration": 1,
            "actions": {
                "harvest": {
                    "requiresOneOf": [],
                    "learn": [
                        "agriculture",
                        "harvesting",
                        "grain_processing"
                    ],
                    "get": "wheat",
                    "displayName": "Récolter"
                },
                "thresh": {
                    "requiresOneOf": [
                        "agriculture",
                        "tools",
                        "grain_processing",
                        "timber"
                    ],
                    "learn": [
                        "seeds"
                    ],
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
            "regeneration": 1,
            "actions": {
                "store": {
                    "requiresOneOf": [],
                    "learn": [
                        "food_storage",
                        "storage"
                    ],
                    "get": "seeds",
                    "displayName": "Stocker"
                },
                "sow": {
                    "requiresOneOf": [
                        "agriculture",
                        "farming",
                        "soil",
                        "plant_breeding",
                        "crop_cultivation"
                    ],
                    "learn": [
                        "seed_sowing"
                    ],
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
                        "seed_selection"
                    ],
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
            "regeneration": 1,
            "actions": {
                "store": {
                    "requiresOneOf": [],
                    "learn": [
                        "grain_storage",
                        "food_storage",
                        "storage"
                    ],
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
                        "flour",
                        "nutrition"
                    ],
                    "get": "flour",
                    "displayName": "Moudre"
                },
                "ferment": {
                    "requiresOneOf": [
                        "fermentation",
                        "cooking",
                        "experimentation",
                        "seed_sowing"
                    ],
                    "learn": [
                        "microbiology",
                        "food_preservation"
                    ],
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
            "regeneration": 1,
            "actions": {
                "mix": {
                    "requiresOneOf": [],
                    "learn": [
                        "cooking",
                        "baking"
                    ],
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
                    "get": "bread",
                    "displayName": "Cuire"
                },
                "store": {
                    "requiresOneOf": [
                        "storage",
                        "food_storage",
                        "containers",
                        "flour",
                        "food_safety"
                    ],
                    "learn": [
                        "grain_storage",
                        "preservation"
                    ],
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
            "regeneration": 1,
            "actions": {
                "knead": {
                    "requiresOneOf": [],
                    "learn": [
                        "cooking",
                        "food_preparation"
                    ],
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
                        "microbiology"
                    ],
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
                        "bread_making",
                        "oven"
                    ],
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
            "regeneration": 1,
            "actions": {
                "prepare": {
                    "requiresOneOf": [],
                    "learn": [
                        "nutrition",
                        "food_safety",
                        "cooking"
                    ],
                    "get": "bread",
                    "displayName": "Manger"
                },
                "dry": {
                    "requiresOneOf": [
                        "drying_food",
                        "preservation",
                        "food_storage",
                        "nutrition",
                        "bread_making",
                        "food_preparation"
                    ],
                    "learn": [
                        "storage"
                    ],
                    "get": "preserved_food",
                    "displayName": "Sécher"
                },
                "ferment": {
                    "requiresOneOf": [
                        "fermentation",
                        "microbiology",
                        "cooking"
                    ],
                    "learn": [
                        "food_safety"
                    ],
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
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "plant_fibers",
                        "botany",
                        "textile"
                    ],
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
                        "spinning",
                        "joining"
                    ],
                    "get": "string",
                    "displayName": "Torsader"
                },
                "weave": {
                    "requiresOneOf": [
                        "weaving",
                        "loom",
                        "textile",
                        "braiding"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "braid": {
                    "requiresOneOf": [],
                    "learn": [
                        "cordage",
                        "braiding",
                        "strength"
                    ],
                    "get": "rope",
                    "displayName": "Tresser"
                },
                "weave": {
                    "requiresOneOf": [
                        "weaving",
                        "textile",
                        "loom",
                        "knots"
                    ],
                    "learn": [],
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
                        "construction"
                    ],
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
            "regeneration": 1,
            "actions": {
                "scrape": {
                    "requiresOneOf": [],
                    "learn": [
                        "hide_processing",
                        "leatherworking",
                        "tools"
                    ],
                    "get": "hide",
                    "displayName": "Racler"
                },
                "tan": {
                    "requiresOneOf": [
                        "tanning",
                        "chemistry",
                        "plants",
                        "timber",
                        "hide_processing"
                    ],
                    "learn": [
                        "leatherworking"
                    ],
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
                        "hide_processing"
                    ],
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
            "regeneration": 1,
            "actions": {
                "cut": {
                    "requiresOneOf": [],
                    "learn": [
                        "leatherworking",
                        "cutting",
                        "shaping"
                    ],
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
                        "leatherworking",
                        "clothing"
                    ],
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
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "salt_extraction",
                        "hydrology",
                        "observation",
                        "water_sources",
                        "salinity"
                    ],
                    "get": "saltwater",
                    "displayName": "Prélever"
                },
                "evaporate": {
                    "requiresOneOf": [
                        "heat",
                        "evaporation",
                        "fire",
                        "purification",
                        "salt_extraction"
                    ],
                    "learn": [
                        "temperature"
                    ],
                    "get": "salt",
                    "displayName": "Évaporer"
                },
                "clean": {
                    "requiresOneOf": [
                        "science",
                        "chemistry",
                        "water_quality",
                        "purification",
                        "salinity"
                    ],
                    "learn": [
                        "measurement"
                    ],
                    "get": "clean_water",
                    "displayName": "Purifier"
                }
            }
        },
        "salt": {
            "resourceName": "salt",
            "imageName": "salt",
            "displayName": "Sel",
            "category": "food",
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "salt_extraction",
                        "preservation",
                        "food_storage"
                    ],
                    "get": "salt",
                    "displayName": "Récolter"
                },
                "preserve": {
                    "requiresOneOf": [
                        "preservation",
                        "food_storage",
                        "salt_preservation",
                        "nutrition"
                    ],
                    "learn": [
                        "salting",
                        "food_safety"
                    ],
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
                        "measurement"
                    ],
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
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "botany",
                        "food_plants",
                        "plant_identification"
                    ],
                    "get": "fruits",
                    "displayName": "Cueillir"
                },
                "dry": {
                    "requiresOneOf": [
                        "drying_food",
                        "preservation",
                        "heat",
                        "nutrition",
                        "grain_storage",
                        "food_preservation"
                    ],
                    "learn": [
                        "food_storage"
                    ],
                    "get": "preserved_food",
                    "displayName": "Sécher"
                },
                "ferment": {
                    "requiresOneOf": [
                        "fermentation",
                        "cooking",
                        "microbiology",
                        "food_plants",
                        "fungi"
                    ],
                    "learn": [
                        "food_preservation"
                    ],
                    "get": "fermented_drink",
                    "displayName": "Faire fermenter"
                }
            }
        },
        "mushrooms": {
            "resourceName": "mushrooms",
            "imageName": "mushrooms",
            "displayName": "Champignons",
            "category": "food",
            "regeneration": 1,
            "actions": {
                "gather": {
                    "requiresOneOf": [],
                    "learn": [
                        "botany",
                        "fungi",
                        "food_safety"
                    ],
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
                    "get": "science",
                    "displayName": "Identifier"
                },
                "dry": {
                    "requiresOneOf": [
                        "drying_food",
                        "preservation",
                        "food_storage"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "butcher": {
                    "requiresOneOf": [],
                    "learn": [
                        "anatomy",
                        "food_safety"
                    ],
                    "get": "meat",
                    "displayName": "Découper"
                },
                "smoke": {
                    "requiresOneOf": [
                        "fire",
                        "smoking_food",
                        "preservation",
                        "food_preservation"
                    ],
                    "learn": [
                        "food_storage"
                    ],
                    "get": "preserved_food",
                    "displayName": "Fumer"
                },
                "salt": {
                    "requiresOneOf": [
                        "salt",
                        "salting",
                        "preservation",
                        "nutrition",
                        "seasoning"
                    ],
                    "learn": [
                        "food_safety"
                    ],
                    "get": "preserved_food",
                    "displayName": "Saler"
                }
            }
        },
        "medicine": {
            "resourceName": "medicine",
            "imageName": "medicine",
            "displayName": "Préparation médicinale",
            "category": "medicine",
            "regeneration": 1,
            "actions": {
                "test": {
                    "requiresOneOf": [],
                    "learn": [
                        "dosage",
                        "medicine"
                    ],
                    "get": "science",
                    "displayName": "Tester"
                },
                "analyze": {
                    "requiresOneOf": [
                        "science",
                        "medicine",
                        "observation",
                        "pharmacology"
                    ],
                    "learn": [
                        "experimentation"
                    ],
                    "get": "science",
                    "displayName": "Analyser"
                },
                "improve": {
                    "requiresOneOf": [
                        "chemistry",
                        "herbalism",
                        "experimentation",
                        "poisoning"
                    ],
                    "learn": [
                        "medicinal_preparations",
                        "dosage"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "mineral_identification",
                        "geology",
                        "ore_processing"
                    ],
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
                        "mineral_identification"
                    ],
                    "get": "iron_ore",
                    "displayName": "Broyer"
                },
                "smelt": {
                    "requiresOneOf": [
                        "fire",
                        "charcoal",
                        "metallurgy",
                        "smelting",
                        "iron_working"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "hammer": {
                    "requiresOneOf": [],
                    "learn": [
                        "iron_working",
                        "forging",
                        "hammering"
                    ],
                    "get": "tool",
                    "displayName": "Marteler"
                },
                "forge": {
                    "requiresOneOf": [
                        "forging",
                        "heat",
                        "metallurgy",
                        "iron_working"
                    ],
                    "learn": [
                        "tempering"
                    ],
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
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "forge": {
                    "requiresOneOf": [
                        "smithing",
                        "metalworking",
                        "fire"
                    ],
                    "learn": [
                        "forging",
                        "steelworking"
                    ],
                    "get": "tool",
                    "displayName": "Forger"
                },
                "temper": {
                    "requiresOneOf": [
                        "smithing",
                        "steelworking"
                    ],
                    "learn": [
                        "metallurgy",
                        "tempering"
                    ],
                    "get": "steel",
                    "displayName": "Tremper"
                },
                "machine": {
                    "requiresOneOf": [
                        "metalworking",
                        "machining",
                        "tools"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "geology",
                        "mineral_identification",
                        "ore_processing"
                    ],
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
                        "mineral_identification"
                    ],
                    "get": "copper_ore",
                    "displayName": "Broyer"
                },
                "smelt": {
                    "requiresOneOf": [
                        "fire",
                        "charcoal",
                        "metallurgy",
                        "smelting"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "hammer": {
                    "requiresOneOf": [],
                    "learn": [
                        "hammering",
                        "metalworking"
                    ],
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
                        "metalworking"
                    ],
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
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "hammer": {
                    "requiresOneOf": [],
                    "learn": [
                        "bronze",
                        "hammering",
                        "metalworking"
                    ],
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
                        "alloying"
                    ],
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
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "geology",
                        "quarrying",
                        "stone_working"
                    ],
                    "get": "limestone",
                    "displayName": "Extraire"
                },
                "burn": {
                    "requiresOneOf": [
                        "fire",
                        "heat",
                        "kiln",
                        "smelting"
                    ],
                    "learn": [
                        "lime",
                        "chemistry",
                        "temperature"
                    ],
                    "get": "lime",
                    "displayName": "Calciner"
                },
                "crush": {
                    "requiresOneOf": [
                        "grinding",
                        "tools",
                        "stone_working",
                        "quarrying"
                    ],
                    "learn": [
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "mix": {
                    "requiresOneOf": [],
                    "learn": [
                        "construction",
                        "chemistry"
                    ],
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
                        "waterproofing"
                    ],
                    "get": "plaster",
                    "displayName": "Enduire"
                },
                "analyze": {
                    "requiresOneOf": [
                        "chemistry",
                        "science",
                        "material_science"
                    ],
                    "learn": [],
                    "get": "science",
                    "displayName": "Analyser"
                }
            }
        },
        "plaster": {
            "resourceName": "plaster",
            "imageName": "plaster",
            "displayName": "Plâtre",
            "category": "building_material",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [
                        "architecture",
                        "ceramics",
                        "temperature",
                        "material_science"
                    ],
                    "get": "plaster",
                    "displayName": "Produire"
                }
            }
        },
        "mortar": {
            "resourceName": "mortar",
            "imageName": "mortar",
            "displayName": "Mortier",
            "category": "building_material",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [
                        "masonry",
                        "construction",
                        "architecture",
                        "architecture",
                        "construction",
                        "material_science"
                    ],
                    "get": "mortar",
                    "displayName": "Produire"
                }
            }
        },
        "bricks": {
            "resourceName": "bricks",
            "imageName": "bricks",
            "displayName": "Briques",
            "category": "building_material",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [
                        "masonry",
                        "construction",
                        "architecture",
                        "architecture",
                        "construction",
                        "material_science"
                    ],
                    "get": "bricks",
                    "displayName": "Produire"
                }
            }
        },
        "containers": {
            "resourceName": "containers",
            "imageName": "containers",
            "displayName": "Récipients",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "fill": {
                    "requiresOneOf": [],
                    "learn": [
                        "storage",
                        "water_storage",
                        "containers"
                    ],
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
                        "food_safety"
                    ],
                    "get": "preserved_food",
                    "displayName": "Conserver"
                },
                "improve": {
                    "requiresOneOf": [
                        "pottery",
                        "ceramics",
                        "material_science",
                        "food_safety"
                    ],
                    "learn": [
                        "storage",
                        "crafting"
                    ],
                    "get": "containers",
                    "displayName": "Améliorer"
                }
            }
        },
        "compost": {
            "resourceName": "compost",
            "imageName": "compost",
            "displayName": "Compost",
            "category": "energy",
            "regeneration": 1,
            "actions": {
                "complete": {
                    "requiresOneOf": [],
                    "learn": [
                        "fertilization",
                        "soil_quality",
                        "agriculture"
                    ],
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
                        "fertilization"
                    ],
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
            "regeneration": 1,
            "actions": {
                "observe": {
                    "requiresOneOf": [],
                    "learn": [
                        "soil",
                        "observation",
                        "ecology"
                    ],
                    "get": "science",
                    "displayName": "Observer"
                },
                "cultivate": {
                    "requiresOneOf": [
                        "agriculture",
                        "cultivation",
                        "soil_quality",
                        "fertilization"
                    ],
                    "learn": [
                        "irrigation"
                    ],
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
                        "chemistry"
                    ],
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
            "regeneration": 1,
            "actions": {
                "shape": {
                    "requiresOneOf": [
                        "pottery",
                        "crafting",
                        "clay"
                    ],
                    "learn": [
                        "ceramics"
                    ],
                    "get": "pottery",
                    "displayName": "Façonner"
                },
                "fire": {
                    "requiresOneOf": [
                        "fire",
                        "pottery",
                        "combustion",
                        "oven"
                    ],
                    "learn": [
                        "kiln",
                        "ceramics"
                    ],
                    "get": "ceramics",
                    "displayName": "Cuire"
                },
                "analyze": {
                    "requiresOneOf": [
                        "geology",
                        "science",
                        "material_identification",
                        "clay_identification"
                    ],
                    "learn": [
                        "material_science",
                        "ceramics",
                        "classification"
                    ],
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
            "regeneration": 1,
            "actions": {
                "lengthen": {
                    "requiresOneOf": [],
                    "learn": [
                        "cordage",
                        "knots",
                        "construction"
                    ],
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
                        "strength"
                    ],
                    "get": "rope",
                    "displayName": "Tresser"
                },
                "sail": {
                    "requiresOneOf": [
                        "sailing",
                        "textile",
                        "navigation"
                    ],
                    "learn": [],
                    "get": "sail",
                    "displayName": "Fabriquer une voile"
                }
            }
        },
        "wool": {
            "resourceName": "wool",
            "imageName": "wool",
            "displayName": "Laine",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "animal_husbandry",
                        "textile",
                        "animal_nutrition"
                    ],
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
                        "weaving"
                    ],
                    "get": "rope",
                    "displayName": "Filer"
                },
                "felt": {
                    "requiresOneOf": [
                        "textile",
                        "crafting",
                        "experimentation",
                        "clothing"
                    ],
                    "learn": [
                        "material_science"
                    ],
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
            "regeneration": 1,
            "actions": {
                "copy": {
                    "requiresOneOf": [],
                    "learn": [
                        "crafting",
                        "tools",
                        "experimentation"
                    ],
                    "get": "tool",
                    "displayName": "Répliquer"
                },
                "repair": {
                    "requiresOneOf": [
                        "crafting",
                        "metalworking",
                        "woodworking",
                        "timber",
                        "adhesives",
                        "hammering"
                    ],
                    "learn": [
                        "repair",
                        "material_science"
                    ],
                    "get": "tool",
                    "displayName": "Réparer"
                },
                "improve": {
                    "requiresOneOf": [
                        "experimentation",
                        "material_science",
                        "crafting"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "archaeology",
                        "material_science"
                    ],
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
                        "metallurgy"
                    ],
                    "get": "science",
                    "displayName": "Examiner"
                },
                "recycle": {
                    "requiresOneOf": [
                        "metallurgy",
                        "repair"
                    ],
                    "learn": [
                        "recycling",
                        "material_science",
                        "metalworking"
                    ],
                    "get": "iron",
                    "displayName": "Recycler"
                }
            }
        },
        "ancient_glass": {
            "resourceName": "ancient_glass",
            "imageName": "ancient_glass",
            "displayName": "Verre ancien",
            "category": "building_material",
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "archaeology",
                        "glassmaking",
                        "silica",
                        "glass_working"
                    ],
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
                        "material_science"
                    ],
                    "get": "science",
                    "displayName": "Examiner"
                },
                "recycle": {
                    "requiresOneOf": [
                        "glassmaking",
                        "recycling",
                        "material_science",
                        "glass_working",
                        "repair"
                    ],
                    "learn": [],
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
            "regeneration": 1,
            "actions": {
                "salvage": {
                    "requiresOneOf": [],
                    "learn": [
                        "material_science",
                        "recycling",
                        "ancient_world"
                    ],
                    "get": "ancient_plastic",
                    "displayName": "Récupérer"
                },
                "identify": {
                    "requiresOneOf": [
                        "material_science",
                        "chemistry",
                        "ancient_world"
                    ],
                    "learn": [],
                    "get": "ancient_plastic",
                    "displayName": "Identifier"
                },
                "recycle": {
                    "requiresOneOf": [
                        "recycling",
                        "chemistry",
                        "material_science",
                        "repair"
                    ],
                    "learn": [],
                    "get": "ancient_plastic",
                    "displayName": "Recycler"
                }
            }
        },
        "ash": {
            "resourceName": "ash",
            "imageName": "ash",
            "displayName": "Cendres",
            "category": "energy",
            "regeneration": 1,
            "actions": {
                "collect": {
                    "requiresOneOf": [],
                    "learn": [
                        "sanitation",
                        "hygiene",
                        "observation"
                    ],
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
                        "soil_quality"
                    ],
                    "get": "compost",
                    "displayName": "Composter"
                },
                "soap": {
                    "requiresOneOf": [
                        "hygiene",
                        "chemistry",
                        "sanitation"
                    ],
                    "learn": [],
                    "get": "soap",
                    "displayName": "Fabriquer du savon"
                }
            }
        },
        "science": {
            "resourceName": "science",
            "imageName": "science",
            "displayName": "Science",
            "category": "misc",
            "regeneration": 1,
            "actions": {
                "study": {
                    "requiresOneOf": [],
                    "learn": [
                        "agriculture",
                        "alloying",
                        "ancient_world",
                        "archaeology",
                        "architecture",
                        "baking",
                        "botany",
                        "bronze",
                        "carpentry",
                        "casting",
                        "ceramics",
                        "charcoal",
                        "chemistry",
                        "classification",
                        "clay",
                        "clay_working",
                        "combustion",
                        "construction",
                        "containers",
                        "cooking",
                        "cordage",
                        "crafting",
                        "cultivation",
                        "cutting",
                        "drying",
                        "drying_food",
                        "ecology",
                        "evaporation",
                        "experimentation",
                        "farming",
                        "fermentation",
                        "filtration",
                        "fire",
                        "flint_knapping",
                        "food_storage",
                        "forging",
                        "geology",
                        "glassmaking",
                        "grain_processing",
                        "grinding",
                        "heat",
                        "herbalism",
                        "hydrology",
                        "hygiene",
                        "joining",
                        "kiln",
                        "kiln_firing",
                        "leatherworking",
                        "lime",
                        "loom",
                        "machining",
                        "masonry",
                        "material_identification",
                        "material_science",
                        "measurement",
                        "medicinal_plants",
                        "medicine",
                        "metallurgy",
                        "metalworking",
                        "microbiology",
                        "milling",
                        "mineral_identification",
                        "molds",
                        "navigation",
                        "observation",
                        "ore_processing",
                        "plant_reproduction",
                        "plants",
                        "polishing",
                        "pottery",
                        "preservation",
                        "recycling",
                        "resin",
                        "sailing",
                        "salt",
                        "salt_preservation",
                        "salting",
                        "sampling",
                        "sanitation",
                        "science",
                        "seed_selection",
                        "seeds",
                        "sewing",
                        "shaping",
                        "smithing",
                        "smoking_food",
                        "soil",
                        "soil_quality",
                        "spinning",
                        "steelworking",
                        "stone_knapping",
                        "stone_working",
                        "storage",
                        "tanning",
                        "temperature",
                        "textile",
                        "tools",
                        "water_quality",
                        "water_storage",
                        "waterproofing",
                        "weaving",
                        "woodworking"
                    ],
                    "get": "science",
                    "displayName": "Étudier"
                }
            }
        },
        "soap": {
            "resourceName": "soap",
            "imageName": "soap",
            "displayName": "Savon",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "soap",
                    "displayName": "Produire"
                }
            }
        },
        "beer": {
            "resourceName": "beer",
            "imageName": "beer",
            "displayName": "Bière",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "beer",
                    "displayName": "Produire"
                }
            }
        },
        "clothes": {
            "resourceName": "clothes",
            "imageName": "clothes",
            "displayName": "Vêtements",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "clothes",
                    "displayName": "Produire"
                }
            }
        },
        "preserved_food": {
            "resourceName": "preserved_food",
            "imageName": "preserved_food",
            "displayName": "Conserves",
            "category": "food",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "preserved_food",
                    "displayName": "Produire"
                }
            }
        },
        "sail": {
            "resourceName": "sail",
            "imageName": "sail",
            "displayName": "Voiles",
            "category": "misc",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "sail",
                    "displayName": "Produire"
                }
            }
        },
        "oil": {
            "resourceName": "oil",
            "imageName": "oil",
            "displayName": "Pétrole",
            "category": "misc",
            "regeneration": 1,
            "actions": {
                "recycle": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "oil",
                    "displayName": "Recycler"
                }
            }
        },
        "electronics": {
            "resourceName": "electronics",
            "imageName": "electronics",
            "displayName": "Électronique",
            "category": "misc",
            "regeneration": 1,
            "actions": {
                "recycle": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "electronics",
                    "displayName": "Recycler"
                }
            }
        },
        "concrete": {
            "resourceName": "concrete",
            "imageName": "concrete",
            "displayName": "Béton",
            "category": "building_material",
            "regeneration": 1,
            "actions": {
                "recycle": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "concrete",
                    "displayName": "Recycler"
                }
            }
        },
        "animals": {
            "resourceName": "animals",
            "imageName": "animals",
            "displayName": "Animaux",
            "category": "living",
            "regeneration": 1,
            "actions": {
                "hunt": {
                    "requiresOneOf": [],
                    "learn": [
                        "animal_husbandry",
                        "tanning",
                        "domestication"
                    ],
                    "get": "meat",
                    "displayName": "Chasser"
                },
                "domesticate": {
                    "requiresOneOf": [
                        "animal_husbandry",
                        "animal_nutrition",
                        "domestication",
                        "timber"
                    ],
                    "learn": [
                        "hide_processing",
                        "leatherworking",
                        "weaving"
                    ],
                    "get": "domesticated_animals",
                    "displayName": "Domestiquer"
                },
                "study": {
                    "requiresOneOf": [
                        "animal_husbandry",
                        "animal_nutrition",
                        "domestication"
                    ],
                    "learn": [
                        "tanning"
                    ],
                    "get": "science",
                    "displayName": "Étudier"
                }
            }
        },
        "domesticated_animals": {
            "resourceName": "domesticated_animals",
            "imageName": "domesticated_animals",
            "displayName": "Animaux domestiqués",
            "category": "living",
            "regeneration": 1,
            "actions": {
                "shear": {
                    "requiresOneOf": [],
                    "learn": [
                        "textile",
                        "tools"
                    ],
                    "get": "wool",
                    "displayName": "Raser"
                },
                "slaughter": {
                    "requiresOneOf": [
                        "animal_husbandry",
                        "animal_nutrition",
                        "domestication"
                    ],
                    "learn": [
                        "anatomy",
                        "tanning"
                    ],
                    "get": "meat",
                    "displayName": "Abattre"
                },
                "skin": {
                    "requiresOneOf": [
                        "animal_husbandry",
                        "animal_nutrition",
                        "domestication"
                    ],
                    "learn": [],
                    "get": "hide",
                    "displayName": "Dépecer"
                }
            }
        },
        "alcohol": {
            "resourceName": "alcohol",
            "imageName": "alcohol",
            "displayName": "Alcool",
            "category": "comfort",
            "regeneration": 1,
            "actions": {
                "produce": {
                    "requiresOneOf": [],
                    "learn": [
                        "hygiene",
                        "pharmacology"
                    ],
                    "get": "alcohol",
                    "displayName": "Produire"
                }
            }
        },
        "fermented_drink": {
            "resourceName": "fermented_drink",
            "imageName": "fermented_drink",
            "displayName": "Boisson fermentée",
            "category": "food",
            "regeneration": 1,
            "actions": {
                "distill": {
                    "requiresOneOf": [],
                    "learn": [
                        "heat",
                        "chemistry"
                    ],
                    "get": "alcohol",
                    "displayName": "Distiller"
                }
            }
        },
        "fish": {
            "resourceName": "fish",
            "imageName": "fish",
            "displayName": "poisson",
            "category": "food",
            "regeneration": 1,
            "actions": {
                "fish": {
                    "requiresOneOf": [],
                    "learn": [],
                    "get": "fish",
                    "displayName": "Pêcher"
                }
            }
        }
    };

    static categories = {
        food: { categoryName: "food", categoryImageName: "food", categoryDisplayName: "Nourriture", fatigue: 4 },
        tool: { categoryName: "tool", categoryImageName: "tool", categoryDisplayName: "Outils", fatigue: 5 },
        raw_material: { categoryName: "raw_material", categoryImageName: "raw_material", categoryDisplayName: "Matériaux", fatigue: 6 },
        building_material: { categoryName: "building_material", categoryImageName: "building_material", categoryDisplayName: "Matériaux de construction", fatigue: 7 },
        comfort: { categoryName: "comfort", categoryImageName: "comfort", categoryDisplayName: "Confort", fatigue: 7 },
        misc: { categoryName: "misc", categoryImageName: "misc", categoryDisplayName: "Autres", fatigue: 6 },
        energy: { categoryName: "energy", categoryImageName: "energy", categoryDisplayName: "Énergie", fatigue: 5 },
        medicine: { categoryName: "medicine", categoryImageName: "medicine", categoryDisplayName: "Médicaments", fatigue: 5 },
        living: { categoryName: "living", categoryImageName: "living", categoryDisplayName: "Animaux", fatigue: 8 }
    }

    static creatableUnits = [
        "harvester", "explorer", "hunter"
    ]

    static units = {
        crow: {
            unitName: "crow",
            isHarvester: false,
            range: 2,
            sprite: { imageName: "crow", width: 64, height: 64, radius: 48 },
            hitbox: { type: "circle", radius: 48 },
            unitPrice: {
                food: 5,
                tool: 3
            },
            combatStats: {
                hp: 1,
                powers: {
                    basicAttack: {
                        displayName: "bécot",
                        damage: 1,
                        range: 1
                    }
                }
            }
        },
        hunter: {
            unitName: "hunter",
            isHarvester: false,
            range: 2,
            sprite: { imageName: "hunter", width: 64, height: 64, radius: 48 },
            hitbox: { type: "circle", radius: 48 },
            unitPrice: {
                food: 5,
                living: 3
            },
            combatStats: {
                hp: 20,
                amountOfSummons: 3,
                powers: {
                    basicAttack: {
                        displayName: "corbeau",
                        damage: 0,
                        range: 1,
                        effect: "summon",
                        summonName: "crow"
                    }
                }
            }
        },
        explorer: {
            unitName: "explorer",
            isHarvester: false,
            range: 2,
            sprite: { imageName: "explorer", width: 64, height: 64, radius: 48 },
            hitbox: { type: "circle", radius: 48 },
            unitPrice: {
                food: 5,
                tool: 3
            },
            combatStats: {
                hp: 20,
                powers: {
                    basicAttack: {
                        displayName: "transposition",
                        damage: 0,
                        range: 3,
                        effect: "transposition"
                    }
                }
            }
        },
        // hunter: {
        //     unitName: "hunter",
        //     isHarvester: false,
        //     range: 2,
        //     sprite: { imageName: "hunter", width: 64, height: 64, radius: 48 },
        //     hitbox: { type: "circle", radius: 48 },
        //     unitPrice: {
        //         food: 5,
        //         tool: 3
        //     },
        //     combatStats: {
        //         hp: 20,
        //         powers: {
        //             basicAttack: {
        //                 powerName: "Lancer de fronde",
        //                 damage: 9,
        //                 range: 1
        //             }
        //         }
        //     }
        // },
        // explorer: {
        //     unitName: "explorer",
        //     isHarvester: false,
        //     range: 4,
        //     sprite: { imageName: "explorer", width: 64, height: 64, radius: 48 },
        //     hitbox: { type: "circle", radius: 48 },
        //     unitPrice: {
        //         food: 6,
        //         tool: 4
        //     },
        //     combatStats: {
        //         hp: 17,
        //         powers: {
        //             basicAttack: {
        //                 powerName: "Tir à l'arc",
        //                 damage: 6,
        //                 range: 2
        //             }
        //         }
        //     }
        // },
        harvester: {
            unitName: "harvester",
            isHarvester: true,
            range: 2,
            sprite: { imageName: "harvester", width: 64, height: 64, radius: 48 },
            hitbox: { type: "circle", radius: 48 },
            unitPrice: {
                food: 3,
                raw_material: 3
            },
            combatStats: {
                hp: 9,
                powers: {
                    basicAttack: {
                        displayName: "Coup de fourche",
                        damage: 3,
                        range: 1
                    },
                    sandThrow: {
                        displayName: "Jet de sable",
                        damage: 1,
                        range: 2
                    }
                }
            }
        },
        campfire: {
            unitName: "campfire",
            sprite: { imageName: "campfire", width: 170, height: 170, radius: 100 },
            combatStats: {
                hp: 15,
            }
        }
    }

    static biomeNamesForGeneration = [
        "city", "island", "swamp", "mountain", "forest"
    ];
    static biomes = {
        desert: {
            biomeName: "desert",
            degradation: "desert",
            imageName: "desert"
        },
        broussailles: {
            biomeName: "broussailles",
            degradation: "desert",
            imageName: "broussailles",
        },
        butte: {
            biomeName: "butte",
            degradation: "desert",
            imageName: "butte",
        },
        friche: {
            biomeName: "friche",
            degradation: "desert",
            imageName: "friche",
        },
        greve: {
            biomeName: "greve",
            degradation: "desert",
            imageName: "greve",
        },
        landes: {
            biomeName: "landes",
            degradation: "desert",
            imageName: "landes",
        },

        plains: {
            biomeName: "plains",
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
                "animals",
                "sandstone",
                "flint",
                "plants",
                "wild_wheat",
            ]
        },
        swamp: {
            biomeName: "swamp",
            degradation: "broussailles",
            imageName: "swamp",
            attribute: "humidity",
            amount: 2,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.5,
            amountOfResources: 1,
            resources: [
                "water",
                "mushrooms",
                "clay",
            ]
        },
        island: {
            biomeName: "island",
            degradation: "greve",
            imageName: "island",
            attribute: "humidity",
            amount: 2,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.75,
            amountOfResources: 1,
            resources: [
                "saltwater",
                "sand",
                "fish"
            ]
        },
        forest: {
            biomeName: "forest",
            degradation: "friche",
            imageName: "forest",
            attribute: "life",
            amount: 10,
            propagation: { min: 0.15, max: 0.18 },
            minimum: 0,
            treshold: 0.4,
            amountOfResources: 1,
            resources: [
                "wood",
                "fruits",
                "animals"
            ]
        },
        mountain: {
            biomeName: "mountain",
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
                "flint",
                "nothing",
            ]
        },
        city: {
            biomeName: "city",
            degradation: "city",
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
                "ancient_glass",
                "concrete",
                "electronics",
                "oil"
            ]
        }
    };
}