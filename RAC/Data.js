"use strict";

class Data {
    static defaultPopGrowth = 5;
    static defaultFatigue = 5;
    static defaultFatigueRecovery = 2;
    static defaultRegeneration = 1;
    static resources = {
        water: "eau",
        wood: "bois"
    };

    static knowledges = {

        // ============================================================
        // FONDAMENTAUX
        // ============================================================

        observation: "Observation",
        exploration: "Exploration",
        sampling: "Prélèvement",
        measurement: "Mesure",
        classification: "Classification",
        identification: "Identification",
        comparison: "Comparaison",
        experimentation: "Expérimentation",
        recording: "Prise de notes",
        mapping: "Cartographie",
        environment: "Environnement",
        ecology: "Écologie",

        fire: "Feu",
        heat: "Chaleur",
        combustion: "Combustion",
        temperature: "Température",
        smoke: "Fumée",
        ash: "Cendres",

        tools: "Outils",
        crafting: "Artisanat",
        cutting: "Découpe",
        grinding: "Broyage",
        pounding: "Martelage",
        drilling: "Perçage",
        shaping: "Façonnage",
        joining: "Assemblage",
        cordage: "Cordage",
        weaving: "Tissage",
        sewing: "Couture",

        // ============================================================
        // EAU
        // ============================================================

        hydrology: "Hydrologie",
        water_quality: "Qualité de l'eau",
        water_sources: "Sources d'eau",
        groundwater: "Eaux souterraines",
        rainwater: "Eau de pluie",
        evaporation: "Évaporation",
        condensation: "Condensation",
        filtration: "Filtration",
        purification: "Purification",
        hygiene: "Hygiène",
        sanitation: "Assainissement",
        water_storage: "Stockage de l'eau",

        // ============================================================
        // PLANTES
        // ============================================================

        botany: "Botanique",
        plant_identification: "Identification des plantes",
        plant_anatomy: "Anatomie végétale",
        plant_reproduction: "Reproduction végétale",
        germination: "Germination",
        seeds: "Semences",
        seed_selection: "Sélection des semences",
        cultivation: "Culture",
        agriculture: "Agriculture",
        irrigation: "Irrigation",
        fertilization: "Fertilisation",
        composting: "Compostage",
        pruning: "Taille des végétaux",
        grafting: "Greffe",
        plant_fibers: "Fibres végétales",
        resin: "Résines",
        sap: "Sève",
        medicinal_plants: "Plantes médicinales",
        herbalism: "Herboristerie",
        food_plants: "Plantes alimentaires",

        // ============================================================
        // CÉRÉALES
        // ============================================================

        cereal_identification: "Identification des céréales",
        grain_processing: "Transformation des grains",
        threshing: "Battage",
        milling: "Mouture",
        flour: "Farine",
        dough: "Pâte",
        baking: "Panification",
        food_storage: "Conservation des aliments",
        grain_storage: "Stockage des grains",
        fermentation: "Fermentation",

        // ============================================================
        // BOIS
        // ============================================================

        wood_working: "Travail du bois",
        woodworking: "Menuiserie",
        carpentry: "Charpenterie",
        timber: "Bois d'œuvre",
        drying: "Séchage",
        seasoning: "Séchage du bois",
        charcoal: "Charbon de bois",
        charcoal_making: "Fabrication du charbon de bois",
        woodworking_tools: "Outils de travail du bois",

        // ============================================================
        // PIERRE
        // ============================================================

        geology: "Géologie",
        stone_working: "Travail de la pierre",
        stone_knapping: "Taille de la pierre",
        flint_knapping: "Taille du silex",
        polishing: "Polissage",
        grinding_stone: "Pierre à moudre",
        quarrying: "Extraction de pierre",
        masonry: "Maçonnerie",
        construction: "Construction",

        // ============================================================
        // ARGILE / CÉRAMIQUE
        // ============================================================

        clay_working: "Travail de l'argile",
        clay_identification: "Identification de l'argile",
        pottery: "Poterie",
        ceramics: "Céramique",
        kiln: "Four",
        kiln_firing: "Cuisson au four",
        glazing: "Émaillage",
        bricks: "Briques",
        mortar: "Mortier",
        lime: "Chaux",

        // ============================================================
        // SABLE / VERRE
        // ============================================================

        sand: "Sable",
        silica: "Silice",
        glassmaking: "Verrerie",
        glass: "Verre",
        glass_working: "Travail du verre",
        casting: "Coulée",
        molds: "Moules",

        // ============================================================
        // TEXTILES
        // ============================================================

        textile: "Textile",
        spinning: "Filage",
        loom: "Métier à tisser",
        textile_dyeing: "Teinture textile",
        natural_dyes: "Teintures naturelles",
        leatherworking: "Travail du cuir",
        tanning: "Tannage",
        hide_processing: "Préparation des peaux",

        // ============================================================
        // ALIMENTATION
        // ============================================================

        cooking: "Cuisine",
        preservation: "Conservation",
        drying_food: "Séchage des aliments",
        smoking_food: "Fumage des aliments",
        salting: "Salaison",
        fermentation_food: "Fermentation alimentaire",
        storage: "Stockage",
        nutrition: "Nutrition",
        food_safety: "Sécurité alimentaire",

        // ============================================================
        // SEL
        // ============================================================

        salt_extraction: "Extraction du sel",
        salt_preservation: "Conservation par le sel",
        brine: "Saumure",

        // ============================================================
        // MÉTAUX
        // ============================================================

        mineral_identification: "Identification des minerais",
        ore_processing: "Traitement du minerai",
        metallurgy: "Métallurgie",
        smelting: "Réduction du minerai",
        metalworking: "Travail des métaux",
        forging: "Forge",
        hammering: "Martelage des métaux",
        annealing: "Recuit",
        tempering: "Trempe",
        copper_working: "Travail du cuivre",
        iron_working: "Travail du fer",
        bronze: "Bronze",
        alloying: "Alliages",

        // ============================================================
        // MÉDECINE
        // ============================================================

        anatomy: "Anatomie",
        physiology: "Physiologie",
        symptoms: "Symptômes",
        diagnosis: "Diagnostic",
        disease: "Maladie",
        infection: "Infection",
        contagion: "Contagion",
        epidemiology: "Épidémiologie",
        wound_care: "Soins des plaies",
        antisepsis: "Antisepsie",
        medicinal_preparations: "Préparations médicinales",
        surgery: "Chirurgie",
        childbirth: "Accouchement",

        // ============================================================
        // ÉCOLOGIE
        // ============================================================

        ecosystems: "Écosystèmes",
        biodiversity: "Biodiversité",
        soil: "Sol",
        soil_quality: "Qualité du sol",
        erosion: "Érosion",
        regeneration: "Régénération",
        sustainability: "Exploitation durable",
        overexploitation: "Surexploitation",
        habitat: "Habitat",
        succession: "Succession écologique",

        // ============================================================
        // ANIMAUX / ÉLEVAGE
        // ============================================================

        animal_behavior: "Comportement animal",
        tracking: "Pistage",
        hunting: "Chasse",
        trapping: "Piégeage",
        domestication: "Domestication",
        animal_husbandry: "Élevage",
        breeding: "Reproduction animale",
        animal_nutrition: "Alimentation animale",
        pasture: "Pâturage",

        // ============================================================
        // CONSTRUCTION
        // ============================================================

        architecture: "Architecture",
        foundations: "Fondations",
        roofing: "Toiture",
        drainage: "Drainage",
        roads: "Routes",
        bridges: "Ponts",
        fortification: "Fortification",

        // ============================================================
        // NAVIGATION
        // ============================================================

        navigation: "Navigation",
        orientation: "Orientation",
        stars: "Observation des étoiles",
        astronomy: "Astronomie",
        weather: "Météorologie",
        wind: "Vent",
        sailing: "Navigation à voile",

        // ============================================================
        // SCIENCE
        // ============================================================

        science: "Méthode scientifique",
        hypothesis: "Hypothèse",
        controlled_experiment: "Expérience contrôlée",
        causality: "Causalité",
        chemistry: "Chimie",
        material_science: "Science des matériaux",
        mechanics: "Mécanique",
        optics: "Optique",

        // ============================================================
        // ÉNERGIE
        // ============================================================

        leverage: "Levier",
        pulley: "Poulie",
        wheel: "Roue",
        axle: "Essieu",
        gears: "Engrenages",
        water_power: "Énergie hydraulique",
        wind_power: "Énergie éolienne",

        // ============================================================
        // SOCIÉTÉ
        // ============================================================

        cooperation: "Coopération",
        specialization: "Spécialisation",
        trade: "Commerce",
        accounting: "Comptabilité",
        writing: "Écriture",
        education: "Transmission du savoir",
        organization: "Organisation",

        // ============================================================
        // VESTIGES / HISTOIRE
        // ============================================================

        archaeology: "Archéologie",
        ruins: "Étude des ruines",
        ancient_technology: "Technologies anciennes",
        artifact_analysis: "Analyse des artefacts",
        historical_records: "Archives historiques"
    };
    static actions = {
        cut: "couper",
        fetch: "puiser"
    };
}