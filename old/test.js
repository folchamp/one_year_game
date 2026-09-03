

let resources = {

    // ============================================================
    // EAU
    // ============================================================

    water: {
        displayName: "Eau",
        actions: {

            draw: {
                displayName: "Puiser",
                requiresOneOf: [],
                get: "water",
                learn: ["hygiene", "hydrology", "water_sources"]
            },

            boil: {
                displayName: "Faire bouillir",
                requiresOneOf: ["fire", "cooking", "containers"],
                get: "clean_water",
                learn: ["purification", "hygiene", "temperature"]
            },

            sample: {
                displayName: "Prélever un échantillon",
                requiresOneOf: ["science", "hydrology", "sampling"],
                get: "water_sample",
                learn: ["water_quality", "sampling", "measurement"]
            }
        }
    },

    clean_water: {
        displayName: "Eau potable",
        actions: {

            drink: {
                displayName: "Boire",
                requiresOneOf: [],
                get: "clean_water",
                learn: ["nutrition", "hygiene", "water_quality"]
            },

            store: {
                displayName: "Stocker",
                requiresOneOf: ["storage", "containers", "water_storage"],
                get: "clean_water",
                learn: ["water_storage", "food_storage", "sanitation"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "water_quality", "measurement"],
                get: "water_data",
                learn: ["water_quality", "chemistry", "microbiology"]
            }
        }
    },

    water_sample: {
        displayName: "Échantillon d'eau",
        actions: {

            examine: {
                displayName: "Examiner",
                requiresOneOf: [],
                get: "water_data",
                learn: ["observation", "water_quality", "classification"]
            },

            compare: {
                displayName: "Comparer",
                requiresOneOf: ["comparison", "science", "measurement"],
                get: "water_data",
                learn: ["hydrology", "chemistry", "causality"]
            },

            test: {
                displayName: "Tester",
                requiresOneOf: ["science", "chemistry", "water_quality"],
                get: "water_data",
                learn: ["contamination", "microbiology", "experimentation"]
            }
        }
    },

    rainwater: {
        displayName: "Eau de pluie",
        actions: {

            collect: {
                displayName: "Recueillir",
                requiresOneOf: [],
                get: "rainwater",
                learn: ["rainwater", "weather", "water_storage"]
            },

            measure: {
                displayName: "Mesurer",
                requiresOneOf: ["measurement", "science", "weather"],
                get: "weather_data",
                learn: ["meteorology", "hydrology", "recording"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "chemistry", "water_quality"],
                get: "water_data",
                learn: ["water_quality", "chemistry", "atmosphere"]
            }
        }
    },

    // ============================================================
    // BOIS
    // ============================================================

    wood: {
        displayName: "Bois",
        actions: {

            gather: {
                displayName: "Ramasser",
                requiresOneOf: [],
                get: "wood",
                learn: ["wood_working", "observation", "tools"]
            },

            cut: {
                displayName: "Couper",
                requiresOneOf: ["tools", "cutting", "wood_working"],
                get: "lumber",
                learn: ["woodworking", "timber", "shaping"]
            },

            burn: {
                displayName: "Brûler",
                requiresOneOf: ["fire", "combustion", "heat"],
                get: "ash",
                learn: ["combustion", "heat", "charcoal_making"]
            }
        }
    },

    lumber: {
        displayName: "Bois d'œuvre",
        actions: {

            shape: {
                displayName: "Façonner",
                requiresOneOf: [],
                get: "wooden_parts",
                learn: ["woodworking", "shaping", "crafting"]
            },

            dry: {
                displayName: "Sécher",
                requiresOneOf: ["drying", "wood_working", "temperature"],
                get: "seasoned_wood",
                learn: ["seasoning", "woodworking", "preservation"]
            },

            build: {
                displayName: "Construire",
                requiresOneOf: ["construction", "carpentry", "architecture"],
                get: "wooden_structure",
                learn: ["carpentry", "construction", "architecture"]
            }
        }
    },

    charcoal: {
        displayName: "Charbon de bois",
        actions: {

            produce: {
                displayName: "Produire",
                requiresOneOf: [],
                get: "charcoal",
                learn: ["charcoal_making", "combustion", "heat"]
            },

            burn: {
                displayName: "Brûler",
                requiresOneOf: ["combustion", "fire", "temperature"],
                get: "heat",
                learn: ["metallurgy", "kiln_firing", "temperature"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "chemistry", "material_science"],
                get: "carbon_data",
                learn: ["chemistry", "material_science", "experimentation"]
            }
        }
    },

    // ============================================================
    // PIERRE
    // ============================================================

    stone: {
        displayName: "Pierre",
        actions: {

            collect: {
                displayName: "Ramasser",
                requiresOneOf: [],
                get: "stone",
                learn: ["geology", "observation", "stone_working"]
            },

            knap: {
                displayName: "Tailler",
                requiresOneOf: ["tools", "stone_knapping", "crafting"],
                get: "stone_tools",
                learn: ["stone_knapping", "shaping", "cutting"]
            },

            grind: {
                displayName: "Broyer",
                requiresOneOf: ["grinding", "tools", "stone_working"],
                get: "stone_powder",
                learn: ["grinding", "material_science", "chemistry"]
            }
        }
    },

    flint: {
        displayName: "Silex",
        actions: {

            knap: {
                displayName: "Tailler",
                requiresOneOf: [],
                get: "flint_tool",
                learn: ["flint_knapping", "stone_knapping", "cutting"]
            },

            strike: {
                displayName: "Frapper",
                requiresOneOf: ["fire", "tools", "flint_knapping"],
                get: "spark",
                learn: ["combustion", "fire", "experimentation"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["geology", "science", "mineral_identification"],
                get: "flint_data",
                learn: ["geology", "material_science", "classification"]
            }
        }
    },

    // ============================================================
    // ARGILE
    // ============================================================

    clay: {
        displayName: "Argile",
        actions: {

            collect: {
                displayName: "Prélever",
                requiresOneOf: [],
                get: "clay",
                learn: ["clay_identification", "geology", "clay_working"]
            },

            shape: {
                displayName: "Façonner",
                requiresOneOf: ["clay_working", "shaping", "crafting"],
                get: "pottery",
                learn: ["pottery", "containers", "shaping"]
            },

            fire: {
                displayName: "Cuire",
                requiresOneOf: ["fire", "kiln", "heat"],
                get: "ceramics",
                learn: ["ceramics", "kiln_firing", "temperature"]
            }
        }
    },

    pottery: {
        displayName: "Poterie",
        actions: {

            dry: {
                displayName: "Sécher",
                requiresOneOf: [],
                get: "pottery",
                learn: ["drying", "pottery", "storage"]
            },

            fire: {
                displayName: "Cuire",
                requiresOneOf: ["fire", "kiln", "temperature"],
                get: "ceramics",
                learn: ["ceramics", "kiln_firing", "heat"]
            },

            glaze: {
                displayName: "Émailler",
                requiresOneOf: ["ceramics", "chemistry", "kiln_firing"],
                get: "glazed_pottery",
                learn: ["glazing", "chemistry", "glassmaking"]
            }
        }
    },

    // ============================================================
    // SABLE
    // ============================================================

    sand: {
        displayName: "Sable",
        actions: {

            collect: {
                displayName: "Ramasser",
                requiresOneOf: [],
                get: "sand",
                learn: ["sand", "geology", "observation"]
            },

            wash: {
                displayName: "Laver",
                requiresOneOf: ["filtration", "water_quality", "science"],
                get: "clean_sand",
                learn: ["filtration", "material_science", "classification"]
            },

            melt: {
                displayName: "Faire fondre",
                requiresOneOf: ["fire", "heat", "kiln"],
                get: "glass",
                learn: ["glassmaking", "temperature", "silica"]
            }
        }
    },

    glass: {
        displayName: "Verre",
        actions: {

            shape: {
                displayName: "Façonner",
                requiresOneOf: [],
                get: "glass_container",
                learn: ["glass_working", "shaping", "containers"]
            },

            melt: {
                displayName: "Refondre",
                requiresOneOf: ["kiln", "glassmaking", "heat"],
                get: "glass",
                learn: ["temperature", "material_science", "glass_working"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "chemistry", "material_science"],
                get: "glass_data",
                learn: ["chemistry", "silica", "glassmaking"]
            }
        }
    },

    // ============================================================
    // PLANTES
    // ============================================================

    plants: {
        displayName: "Plantes",
        actions: {

            gather: {
                displayName: "Cueillir",
                requiresOneOf: [],
                get: "plants",
                learn: ["botany", "plant_identification", "food_plants"]
            },

            identify: {
                displayName: "Identifier",
                requiresOneOf: ["botany", "observation", "classification"],
                get: "plant_data",
                learn: ["plant_anatomy", "plant_reproduction", "ecology"]
            },

            sample: {
                displayName: "Prélever un échantillon",
                requiresOneOf: ["sampling", "science", "botany"],
                get: "plant_sample",
                learn: ["sampling", "plant_anatomy", "medicinal_plants"]
            }
        }
    },

    medicinal_plants: {
        displayName: "Plantes médicinales",
        actions: {

            gather: {
                displayName: "Cueillir",
                requiresOneOf: [],
                get: "medicinal_plants",
                learn: ["medicinal_plants", "herbalism", "botany"]
            },

            prepare: {
                displayName: "Préparer",
                requiresOneOf: ["herbalism", "cooking", "medicinal_plants"],
                get: "medicine",
                learn: ["medicinal_preparations", "dosage", "symptoms"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "chemistry", "sampling"],
                get: "plant_data",
                learn: ["chemistry", "pharmacology", "experimentation"]
            }
        }
    },

    resin: {
        displayName: "Résine",
        actions: {

            collect: {
                displayName: "Récolter",
                requiresOneOf: [],
                get: "resin",
                learn: ["resin", "plant_anatomy", "botany"]
            },

            heat: {
                displayName: "Chauffer",
                requiresOneOf: ["fire", "heat", "chemistry"],
                get: "pitch",
                learn: ["chemistry", "adhesives", "material_science"]
            },

            mix: {
                displayName: "Mélanger",
                requiresOneOf: ["chemistry", "experimentation", "crafting"],
                get: "adhesive",
                learn: ["chemistry", "joining", "material_science"]
            }
        }
    },

    // ============================================================
    // CÉRÉALES
    // ============================================================

    wild_wheat: {
        displayName: "Blé sauvage",
        actions: {

            gather: {
                displayName: "Cueillir",
                requiresOneOf: [],
                get: "wild_wheat",
                learn: ["cereal_identification", "botany", "food_plants"]
            },

            collect_seeds: {
                displayName: "Sélectionner les graines",
                requiresOneOf: ["seeds", "botany", "plant_reproduction"],
                get: "wheat_seeds",
                learn: ["seed_selection", "agriculture", "plant_reproduction"]
            },

            cultivate: {
                displayName: "Cultiver",
                requiresOneOf: ["cultivation", "seed_selection", "agriculture"],
                get: "wheat",
                learn: ["agriculture", "irrigation", "soil_quality"]
            }
        }
    },

    wheat: {
        displayName: "Blé",
        actions: {

            harvest: {
                displayName: "Récolter",
                requiresOneOf: [],
                get: "wheat",
                learn: ["agriculture", "harvesting", "grain_processing"]
            },

            thresh: {
                displayName: "Battre",
                requiresOneOf: ["agriculture", "tools", "grain_processing"],
                get: "grain",
                learn: ["threshing", "grain_processing", "seeds"]
            },

            grind: {
                displayName: "Moudre",
                requiresOneOf: ["grinding", "grain_processing", "stone_working"],
                get: "flour",
                learn: ["milling", "flour", "nutrition"]
            }
        }
    },

    grain: {
        displayName: "Grain",
        actions: {

            store: {
                displayName: "Stocker",
                requiresOneOf: [],
                get: "grain",
                learn: ["grain_storage", "food_storage", "storage"]
            },

            grind: {
                displayName: "Moudre",
                requiresOneOf: ["grinding", "milling", "tools"],
                get: "flour",
                learn: ["milling", "flour", "nutrition"]
            },

            ferment: {
                displayName: "Faire fermenter",
                requiresOneOf: ["fermentation", "cooking", "experimentation"],
                get: "fermented_grain",
                learn: ["fermentation_food", "microbiology", "food_preservation"]
            }
        }
    },

    flour: {
        displayName: "Farine",
        actions: {

            mix: {
                displayName: "Mélanger",
                requiresOneOf: [],
                get: "dough",
                learn: ["dough", "cooking", "baking"]
            },

            bake: {
                displayName: "Cuire",
                requiresOneOf: ["fire", "cooking", "heat"],
                get: "bread",
                learn: ["baking", "food_storage", "temperature"]
            },

            store: {
                displayName: "Stocker",
                requiresOneOf: ["storage", "food_storage", "containers"],
                get: "flour",
                learn: ["food_safety", "grain_storage", "preservation"]
            }
        }
    },

    bread: {
        displayName: "Pain",
        actions: {

            eat: {
                displayName: "Manger",
                requiresOneOf: [],
                get: "nutrition_data",
                learn: ["nutrition", "food_safety", "cooking"]
            },

            dry: {
                displayName: "Sécher",
                requiresOneOf: ["drying_food", "preservation", "food_storage"],
                get: "dried_bread",
                learn: ["drying_food", "preservation", "storage"]
            },

            ferment: {
                displayName: "Faire fermenter",
                requiresOneOf: ["fermentation", "microbiology", "cooking"],
                get: "fermented_food",
                learn: ["fermentation_food", "microbiology", "food_safety"]
            }
        }
    },

    // ============================================================
    // FIBRES / TEXTILES
    // ============================================================

    plant_fibers: {
        displayName: "Fibres végétales",
        actions: {

            gather: {
                displayName: "Récolter",
                requiresOneOf: [],
                get: "plant_fibers",
                learn: ["plant_fibers", "botany", "textile"]
            },

            twist: {
                displayName: "Torsader",
                requiresOneOf: ["cordage", "tools", "textile"],
                get: "string",
                learn: ["cordage", "spinning", "joining"]
            },

            weave: {
                displayName: "Tisser",
                requiresOneOf: ["weaving", "loom", "textile"],
                get: "cloth",
                learn: ["weaving", "loom", "textile"]
            }
        }
    },

    string: {
        displayName: "Ficelle",
        actions: {

            braid: {
                displayName: "Tresser",
                requiresOneOf: [],
                get: "rope",
                learn: ["cordage", "braiding", "strength"]
            },

            weave: {
                displayName: "Tisser",
                requiresOneOf: ["weaving", "textile", "loom"],
                get: "cloth",
                learn: ["weaving", "textile", "loom"]
            },

            knot: {
                displayName: "Nouer",
                requiresOneOf: ["cordage", "joining", "tools"],
                get: "rope",
                learn: ["knots", "joining", "construction"]
            }
        }
    },

    // ============================================================
    // CUIR
    // ============================================================

    hide: {
        displayName: "Peau brute",
        actions: {

            scrape: {
                displayName: "Racler",
                requiresOneOf: [],
                get: "hide",
                learn: ["hide_processing", "leatherworking", "tools"]
            },

            tan: {
                displayName: "Tanner",
                requiresOneOf: ["tanning", "chemistry", "plants"],
                get: "leather",
                learn: ["tanning", "leatherworking", "chemistry"]
            },

            dry: {
                displayName: "Sécher",
                requiresOneOf: ["drying", "preservation", "leatherworking"],
                get: "rawhide",
                learn: ["drying", "hide_processing", "preservation"]
            }
        }
    },

    leather: {
        displayName: "Cuir",
        actions: {

            cut: {
                displayName: "Découper",
                requiresOneOf: [],
                get: "leather_parts",
                learn: ["leatherworking", "cutting", "shaping"]
            },

            stitch: {
                displayName: "Coudre",
                requiresOneOf: ["sewing", "textile", "tools"],
                get: "leather_clothing",
                learn: ["sewing", "leatherworking", "clothing"]
            },

            waterproof: {
                displayName: "Imperméabiliser",
                requiresOneOf: ["resin", "chemistry", "waterproofing"],
                get: "treated_leather",
                learn: ["waterproofing", "resin", "material_science"]
            }
        }
    },

    // ============================================================
    // SEL
    // ============================================================

    saltwater: {
        displayName: "Eau salée",
        actions: {

            collect: {
                displayName: "Prélever",
                requiresOneOf: [],
                get: "saltwater",
                learn: ["salt_extraction", "hydrology", "observation"]
            },

            evaporate: {
                displayName: "Évaporer",
                requiresOneOf: ["heat", "evaporation", "fire"],
                get: "salt",
                learn: ["evaporation", "salt_extraction", "temperature"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "chemistry", "water_quality"],
                get: "saltwater_data",
                learn: ["chemistry", "salinity", "measurement"]
            }
        }
    },

    salt: {
        displayName: "Sel",
        actions: {

            collect: {
                displayName: "Récolter",
                requiresOneOf: [],
                get: "salt",
                learn: ["salt_extraction", "preservation", "food_storage"]
            },

            preserve: {
                displayName: "Saler",
                requiresOneOf: ["preservation", "food_storage", "salt_preservation"],
                get: "preserved_food",
                learn: ["salting", "food_safety", "preservation"]
            },

            dissolve: {
                displayName: "Dissoudre",
                requiresOneOf: ["chemistry", "water_quality", "experimentation"],
                get: "brine",
                learn: ["brine", "chemistry", "measurement"]
            }
        }
    },

    // ============================================================
    // ALIMENTATION / CONSERVATION
    // ============================================================

    fruits: {
        displayName: "Fruits",
        actions: {

            gather: {
                displayName: "Cueillir",
                requiresOneOf: [],
                get: "fruits",
                learn: ["botany", "food_plants", "plant_identification"]
            },

            dry: {
                displayName: "Sécher",
                requiresOneOf: ["drying_food", "preservation", "heat"],
                get: "dried_fruit",
                learn: ["drying_food", "preservation", "food_storage"]
            },

            ferment: {
                displayName: "Faire fermenter",
                requiresOneOf: ["fermentation", "cooking", "microbiology"],
                get: "fermented_fruit",
                learn: ["fermentation_food", "microbiology", "food_preservation"]
            }
        }
    },

    mushrooms: {
        displayName: "Champignons",
        actions: {

            gather: {
                displayName: "Cueillir",
                requiresOneOf: [],
                get: "mushrooms",
                learn: ["botany", "fungi", "food_safety"]
            },

            identify: {
                displayName: "Identifier",
                requiresOneOf: ["botany", "classification", "observation"],
                get: "mushroom_data",
                learn: ["fungi", "poisoning", "food_safety"]
            },

            dry: {
                displayName: "Sécher",
                requiresOneOf: ["drying_food", "preservation", "food_storage"],
                get: "dried_mushrooms",
                learn: ["drying_food", "preservation", "food_storage"]
            }
        }
    },

    meat: {
        displayName: "Viande",
        actions: {

            butcher: {
                displayName: "Dépecer",
                requiresOneOf: [],
                get: "meat",
                learn: ["butchery", "anatomy", "food_safety"]
            },

            smoke: {
                displayName: "Fumer",
                requiresOneOf: ["fire", "smoking_food", "preservation"],
                get: "smoked_meat",
                learn: ["smoking_food", "preservation", "food_storage"]
            },

            salt: {
                displayName: "Saler",
                requiresOneOf: ["salt", "salting", "preservation"],
                get: "salted_meat",
                learn: ["salting", "food_safety", "preservation"]
            }
        }
    },

    // ============================================================
    // MÉDICAMENTS
    // ============================================================

    medicine: {
        displayName: "Préparation médicinale",
        actions: {

            administer: {
                displayName: "Administrer",
                requiresOneOf: [],
                get: "treated_patient",
                learn: ["dosage", "symptoms", "medicine"]
            },

            compare: {
                displayName: "Comparer",
                requiresOneOf: ["science", "medicine", "observation"],
                get: "medical_data",
                learn: ["diagnosis", "pharmacology", "experimentation"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["chemistry", "herbalism", "experimentation"],
                get: "medicine",
                learn: ["medicinal_preparations", "dosage", "chemistry"]
            }
        }
    },

    // ============================================================
    // MÉTAUX
    // ============================================================

    iron_ore: {
        displayName: "Minerai de fer",
        actions: {

            collect: {
                displayName: "Extraire",
                requiresOneOf: [],
                get: "iron_ore",
                learn: ["mineral_identification", "geology", "ore_processing"]
            },

            crush: {
                displayName: "Broyer",
                requiresOneOf: ["grinding", "ore_processing", "tools"],
                get: "iron_ore_powder",
                learn: ["ore_processing", "grinding", "mineral_identification"]
            },

            smelt: {
                displayName: "Réduire",
                requiresOneOf: ["fire", "charcoal", "metallurgy"],
                get: "iron",
                learn: ["smelting", "metallurgy", "iron_working"]
            }
        }
    },

    iron: {
        displayName: "Fer",
        actions: {

            hammer: {
                displayName: "Marteler",
                requiresOneOf: [],
                get: "iron_tool",
                learn: ["iron_working", "forging", "hammering"]
            },

            forge: {
                displayName: "Forger",
                requiresOneOf: ["forging", "heat", "metallurgy"],
                get: "iron_tool",
                learn: ["forging", "annealing", "tempering"]
            },

            alloy: {
                displayName: "Allier",
                requiresOneOf: ["alloying", "metallurgy", "chemistry"],
                get: "steel",
                learn: ["alloying", "material_science", "metallurgy"]
            }
        }
    },

    copper_ore: {
        displayName: "Minerai de cuivre",
        actions: {

            collect: {
                displayName: "Extraire",
                requiresOneOf: [],
                get: "copper_ore",
                learn: ["geology", "mineral_identification", "ore_processing"]
            },

            crush: {
                displayName: "Broyer",
                requiresOneOf: ["grinding", "ore_processing", "tools"],
                get: "copper_ore_powder",
                learn: ["ore_processing", "grinding", "mineral_identification"]
            },

            smelt: {
                displayName: "Fondre",
                requiresOneOf: ["fire", "charcoal", "metallurgy"],
                get: "copper",
                learn: ["smelting", "copper_working", "metallurgy"]
            }
        }
    },

    copper: {
        displayName: "Cuivre",
        actions: {

            hammer: {
                displayName: "Marteler",
                requiresOneOf: [],
                get: "copper",
                learn: ["copper_working", "hammering", "metalworking"]
            },

            cast: {
                displayName: "Couler",
                requiresOneOf: ["casting", "molds", "metallurgy"],
                get: "copper_parts",
                learn: ["casting", "molds", "metalworking"]
            },

            alloy: {
                displayName: "Allier",
                requiresOneOf: ["alloying", "metallurgy", "bronze"],
                get: "bronze",
                learn: ["bronze", "alloying", "material_science"]
            }
        }
    },

    bronze: {
        displayName: "Bronze",
        actions: {

            hammer: {
                displayName: "Marteler",
                requiresOneOf: [],
                get: "bronze_tool",
                learn: ["bronze", "hammering", "metalworking"]
            },

            cast: {
                displayName: "Couler",
                requiresOneOf: ["casting", "molds", "metallurgy"],
                get: "bronze_tool",
                learn: ["casting", "molds", "alloying"]
            },

            polish: {
                displayName: "Polir",
                requiresOneOf: ["polishing", "metalworking", "tools"],
                get: "polished_bronze",
                learn: ["polishing", "metalworking", "material_science"]
            }
        }
    },

    // ============================================================
    // PIERRE / OUTILS
    // ============================================================

    stone_tools: {
        displayName: "Outils en pierre",
        actions: {

            use: {
                displayName: "Utiliser",
                requiresOneOf: [],
                get: "worked_material",
                learn: ["tools", "crafting", "cutting"]
            },

            sharpen: {
                displayName: "Affûter",
                requiresOneOf: ["stone_working", "grinding", "shaping"],
                get: "sharp_tool",
                learn: ["sharpening", "cutting", "grinding"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["experimentation", "crafting", "material_science"],
                get: "improved_tool",
                learn: ["experimentation", "toolmaking", "material_science"]
            }
        }
    },

    // ============================================================
    // CONSTRUCTION
    // ============================================================

    limestone: {
        displayName: "Calcaire",
        actions: {

            collect: {
                displayName: "Extraire",
                requiresOneOf: [],
                get: "limestone",
                learn: ["geology", "quarrying", "stone_working"]
            },

            burn: {
                displayName: "Calciner",
                requiresOneOf: ["fire", "heat", "kiln"],
                get: "lime",
                learn: ["lime", "chemistry", "temperature"]
            },

            crush: {
                displayName: "Broyer",
                requiresOneOf: ["grinding", "tools", "stone_working"],
                get: "limestone_powder",
                learn: ["grinding", "mortar", "material_science"]
            }
        }
    },

    lime: {
        displayName: "Chaux",
        actions: {

            mix: {
                displayName: "Mélanger",
                requiresOneOf: [],
                get: "mortar",
                learn: ["mortar", "construction", "chemistry"]
            },

            plaster: {
                displayName: "Enduire",
                requiresOneOf: ["construction", "masonry", "lime"],
                get: "plaster",
                learn: ["architecture", "construction", "waterproofing"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["chemistry", "science", "material_science"],
                get: "lime_data",
                learn: ["chemistry", "material_science", "causality"]
            }
        }
    },

    bricks: {
        displayName: "Briques",
        actions: {

            build: {
                displayName: "Construire",
                requiresOneOf: [],
                get: "brick_structure",
                learn: ["masonry", "construction", "architecture"]
            },

            fire: {
                displayName: "Cuire",
                requiresOneOf: ["kiln", "fire", "ceramics"],
                get: "fired_bricks",
                learn: ["kiln_firing", "ceramics", "temperature"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["masonry", "material_science", "architecture"],
                get: "improved_bricks",
                learn: ["architecture", "construction", "material_science"]
            }
        }
    },

    // ============================================================
    // ROUES / MÉCANIQUE
    // ============================================================

    wood_parts: {
        displayName: "Pièces en bois",
        actions: {

            assemble: {
                displayName: "Assembler",
                requiresOneOf: [],
                get: "wooden_machine",
                learn: ["joining", "crafting", "construction"]
            },

            rotate: {
                displayName: "Faire tourner",
                requiresOneOf: ["wheel", "axle", "mechanics"],
                get: "wooden_mechanism",
                learn: ["mechanics", "wheel", "axle"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["experimentation", "mechanics", "woodworking"],
                get: "wooden_mechanism",
                learn: ["mechanics", "crafting", "material_science"]
            }
        }
    },

    // ============================================================
    // ARGILE / BRIQUES / STOCKAGE
    // ============================================================

    containers: {
        displayName: "Récipients",
        actions: {

            fill: {
                displayName: "Remplir",
                requiresOneOf: [],
                get: "stored_water",
                learn: ["storage", "water_storage", "containers"]
            },

            preserve: {
                displayName: "Conserver",
                requiresOneOf: ["food_storage", "preservation", "ceramics"],
                get: "preserved_food",
                learn: ["food_storage", "food_safety", "preservation"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["pottery", "ceramics", "material_science"],
                get: "improved_container",
                learn: ["ceramics", "storage", "crafting"]
            }
        }
    },

    // ============================================================
    // DÉCHETS / COMPOST
    // ============================================================

    organic_waste: {
        displayName: "Déchets organiques",
        actions: {

            collect: {
                displayName: "Collecter",
                requiresOneOf: [],
                get: "organic_waste",
                learn: ["sanitation", "hygiene", "observation"]
            },

            compost: {
                displayName: "Composter",
                requiresOneOf: ["ecology", "soil", "agriculture"],
                get: "compost",
                learn: ["composting", "soil_quality", "ecology"]
            },

            burn: {
                displayName: "Brûler",
                requiresOneOf: ["fire", "combustion", "sanitation"],
                get: "ash",
                learn: ["combustion", "sanitation", "ash"]
            }
        }
    },

    compost: {
        displayName: "Compost",
        actions: {

            apply: {
                displayName: "Épandre",
                requiresOneOf: [],
                get: "fertile_soil",
                learn: ["fertilization", "soil_quality", "agriculture"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "soil", "agriculture"],
                get: "soil_data",
                learn: ["soil_quality", "chemistry", "ecology"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["experimentation", "ecology", "soil_quality"],
                get: "rich_compost",
                learn: ["ecology", "fertilization", "regeneration"]
            }
        }
    },

    // ============================================================
    // TERRE / SOL
    // ============================================================

    soil: {
        displayName: "Sol",
        actions: {

            observe: {
                displayName: "Observer",
                requiresOneOf: [],
                get: "soil_data",
                learn: ["soil", "observation", "ecology"]
            },

            cultivate: {
                displayName: "Cultiver",
                requiresOneOf: ["agriculture", "cultivation", "soil_quality"],
                get: "cultivated_soil",
                learn: ["agriculture", "soil_quality", "irrigation"]
            },

            sample: {
                displayName: "Prélever",
                requiresOneOf: ["sampling", "science", "geology"],
                get: "soil_sample",
                learn: ["soil_quality", "geology", "chemistry"]
            }
        }
    },

    // ============================================================
    // MINÉRAUX
    // ============================================================

    clay_bricks: {
        displayName: "Briques d'argile",
        actions: {

            build: {
                displayName: "Construire",
                requiresOneOf: [],
                get: "building",
                learn: ["construction", "masonry", "architecture"]
            },

            fire: {
                displayName: "Cuire",
                requiresOneOf: ["fire", "kiln", "ceramics"],
                get: "fired_bricks",
                learn: ["kiln_firing", "ceramics", "temperature"]
            },

            analyze: {
                displayName: "Analyser",
                requiresOneOf: ["science", "material_science", "ceramics"],
                get: "clay_data",
                learn: ["material_science", "chemistry", "clay_identification"]
            }
        }
    },

    // ============================================================
    // NAVIGATION
    // ============================================================

    rope: {
        displayName: "Corde",
        actions: {

            use: {
                displayName: "Utiliser",
                requiresOneOf: [],
                get: "rope",
                learn: ["cordage", "knots", "construction"]
            },

            weave: {
                displayName: "Tresser",
                requiresOneOf: ["weaving", "textile", "cordage"],
                get: "rope",
                learn: ["weaving", "strength", "textile"]
            },

            sail: {
                displayName: "Fabriquer une voile",
                requiresOneOf: ["sailing", "textile", "navigation"],
                get: "sail",
                learn: ["sailing", "wind", "navigation"]
            }
        }
    },

    // ============================================================
    // CIRE / RÉSINES / LIANTS
    // ============================================================

    wax: {
        displayName: "Cire",
        actions: {

            collect: {
                displayName: "Récolter",
                requiresOneOf: [],
                get: "wax",
                learn: ["observation", "animal_behavior", "material_science"]
            },

            melt: {
                displayName: "Faire fondre",
                requiresOneOf: ["heat", "fire", "temperature"],
                get: "liquid_wax",
                learn: ["temperature", "material_science", "casting"]
            },

            seal: {
                displayName: "Sceller",
                requiresOneOf: ["containers", "storage", "crafting"],
                get: "sealed_container",
                learn: ["sealing", "preservation", "storage"]
            }
        }
    },

    // ============================================================
    // NAVIGATION / CIEL
    // ============================================================

    stars_data: {
        displayName: "Données astronomiques",
        actions: {

            observe: {
                displayName: "Observer",
                requiresOneOf: [],
                get: "stars_data",
                learn: ["stars", "astronomy", "observation"]
            },

            record: {
                displayName: "Consigner",
                requiresOneOf: ["recording", "writing", "science"],
                get: "star_chart",
                learn: ["mapping", "astronomy", "recording"]
            },

            compare: {
                displayName: "Comparer",
                requiresOneOf: ["comparison", "astronomy", "measurement"],
                get: "star_data",
                learn: ["navigation", "orientation", "astronomy"]
            }
        }
    },

    // ============================================================
    // ANIMAUX — MATIÈRES ET PRODUITS, PAS ENTITÉS
    // ============================================================

    wool: {
        displayName: "Laine",
        actions: {

            collect: {
                displayName: "Tondre",
                requiresOneOf: [],
                get: "wool",
                learn: ["animal_husbandry", "textile", "animal_nutrition"]
            },

            spin: {
                displayName: "Filer",
                requiresOneOf: ["spinning", "textile", "tools"],
                get: "wool_yarn",
                learn: ["spinning", "textile", "weaving"]
            },

            felt: {
                displayName: "Feutrer",
                requiresOneOf: ["textile", "crafting", "experimentation"],
                get: "felt",
                learn: ["textile", "material_science", "clothing"]
            }
        }
    },

    // ============================================================
    // ARTISANAT GÉNÉRAL
    // ============================================================

    tools: {
        displayName: "Outils",
        actions: {

            use: {
                displayName: "Utiliser",
                requiresOneOf: [],
                get: "worked_material",
                learn: ["crafting", "tools", "experimentation"]
            },

            repair: {
                displayName: "Réparer",
                requiresOneOf: ["crafting", "metalworking", "woodworking"],
                get: "repaired_tool",
                learn: ["repair", "maintenance", "material_science"]
            },

            improve: {
                displayName: "Améliorer",
                requiresOneOf: ["experimentation", "material_science", "crafting"],
                get: "improved_tool",
                learn: ["toolmaking", "experimentation", "specialization"]
            }
        }
    },

    // ============================================================
    // DONNÉES / ÉCHANTILLONS
    // ============================================================

    soil_sample: {
        displayName: "Échantillon de sol",
        actions: {

            examine: {
                displayName: "Examiner",
                requiresOneOf: [],
                get: "soil_data",
                learn: ["soil_quality", "observation", "classification"]
            },

            compare: {
                displayName: "Comparer",
                requiresOneOf: ["comparison", "science", "geology"],
                get: "soil_data",
                learn: ["geology", "ecology", "causality"]
            },

            test: {
                displayName: "Tester",
                requiresOneOf: ["science", "chemistry", "experimentation"],
                get: "soil_data",
                learn: ["chemistry", "fertilization", "soil_quality"]
            }
        }
    },

    plant_sample: {
        displayName: "Échantillon végétal",
        actions: {

            examine: {
                displayName: "Examiner",
                requiresOneOf: [],
                get: "plant_data",
                learn: ["botany", "plant_anatomy", "classification"]
            },

            dry: {
                displayName: "Sécher",
                requiresOneOf: ["drying", "botany", "preservation"],
                get: "dried_plant_sample",
                learn: ["preservation", "medicinal_plants", "plant_anatomy"]
            },

            compare: {
                displayName: "Comparer",
                requiresOneOf: ["comparison", "science", "botany"],
                get: "plant_data",
                learn: ["plant_identification", "plant_reproduction", "ecology"]
            }
        }
    },

    // ============================================================
    // ARTEFACTS PRIMITIFS / VESTIGES
    // ============================================================

    ancient_metal: {
        displayName: "Métal ancien",
        actions: {

            collect: {
                displayName: "Récupérer",
                requiresOneOf: [],
                get: "ancient_metal",
                learn: ["archaeology", "material_science", "ruins"]
            },

            examine: {
                displayName: "Examiner",
                requiresOneOf: ["archaeology", "observation", "science"],
                get: "artifact_data",
                learn: ["artifact_analysis", "ancient_technology", "metallurgy"]
            },

            recycle: {
                displayName: "Recycler",
                requiresOneOf: ["metalworking", "recycling", "metallurgy"],
                get: "metal",
                learn: ["recycling", "material_science", "metalworking"]
            }
        }
    },

    ancient_glass: {
        displayName: "Verre ancien",
        actions: {

            collect: {
                displayName: "Récupérer",
                requiresOneOf: [],
                get: "ancient_glass",
                learn: ["archaeology", "glassmaking", "ruins"]
            },

            examine: {
                displayName: "Examiner",
                requiresOneOf: ["archaeology", "science", "glassmaking"],
                get: "artifact_data",
                learn: ["artifact_analysis", "glassmaking", "material_science"]
            },

            recycle: {
                displayName: "Recycler",
                requiresOneOf: ["glassmaking", "recycling", "material_science"],
                get: "glass",
                learn: ["recycling", "glass_working", "material_science"]
            }
        }
    }
};

for (let resourceName in resources) {
    let resource = resources[resourceName];
    resource.resourceName = resourceName;
    resource.imageName = resourceName;
    resource.popGrowth = 3;
    resource.regeneration = 1;
    resource.fatigueRecovery = 2;
    for (let actionName in resource.actions) {
        resource.actions[actionName].fatigue = 5;
    }
}
