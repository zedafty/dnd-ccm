/* +------------------------------------------------------------------------+ */
/* ////////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/* +------------------------------------------------------------------------+ */
/* |                                                                        | */
/* |                             *** FRENCH ***                             | */
/* |                                                                        | */
/* +------------------------------------------------------------------------+ */
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||//////////////////////////////////// */
/* +------------------------------------------------------------------------+ */

// =============================================================================
// -----------------------------------------------------------------------------
// # Core
// -----------------------------------------------------------------------------
// =============================================================================

$lng = {
	// Application
	"app_name" : "Gestionnaire de campagne personnalisée",
	"app_abbr" : "GCP",
	// ---------------------------------------------------------------------------
	// * Common Words
	// ---------------------------------------------------------------------------
	// System
	"language" : "Langue",
	"version" : "Version",
	"edition" : "Édition",
	// Action
	"clear" : "Effacer",
	"generate" : "Générer",
	// Result
	"copy_of" : "Copie",
	"nothing" : "Rien",
	"total" : "Total",
	// Properties
	"id" : "ID",
	"name" : "Nom",
	"desc" : "Description",
	"value" : "Valeur",
	"avg_value" : "Valeur moyenne",
	// Abbreviation
	"hp" : "PV",
	"hd" : "DV",
	"xp" : "PX",
	// ---------------------------------------------------------------------------
	// * References
	// ---------------------------------------------------------------------------
	// "credits" : "Crédits",
	"license" : "Licence",
	// Sources
	"source" : "Source",
	"unknown_source" : "Source inconnue",
	"no_source" : "Pas de source",
	"homebrew" : "Règles maison",
	// Copyright
	"copy_wotc" : "&copy; Wizards of the Coast, Inc.&trade;",
	// ---------------------------------------------------------------------------
	// * Units
	// ---------------------------------------------------------------------------
	// Number
	"digit_group_mark" : " ", // WARNING : Should be HTML &#8239;
	"decimal_mark" : ",",
	// Nth
	"n_st" : "er",
	"n_nd" : "ème",
	"n_rd" : "ème",
	"n_th" : "ème",
	// Curency
	"currency_separator" : " ", // WARNING : Should be HTML &nbsp;
	"gp" : "po",
	"pp" : "pp",
	"sp" : "pa",
	"cp" : "pc",
	// Length
	"square" : "case",
	"squares" : "cases",
	"foot" : "pied",
	"feet" : "pieds",
	"meter" : "mètre",
	"meters" : "mètres",
	"unit_ft" : "pi", // TEMP : Mispelling
	"unit_m" : "m", // TEMP : Mispelling
	"unit_sq" : "c.", // TEMP : Mispelling
	// ---------------------------------------------------------------------------
	// * Categories
	// ---------------------------------------------------------------------------
	"home" : "Accueil",
	"encounter" : "Rencontre",
	"treasures" : "Trésors",
	// ---------------------------------------------------------------------------
	// * Stores
	// ---------------------------------------------------------------------------
	"store" : "Commerce",
	"stores" : "Commerces",
	"shop" : "Échoppe",
	"inn" : "Auberge",
	"tavern" : "Taverne",
	"temple" : "Temple",
	"drink" : "Boissons",
	"meal" : "Repas",
	"lodge" : "Gîte",
	"cure" : "Soins",
	"potion" : "Potions",
	"scroll" : "Parchemins",
	"item" : "Objets",
	// ---------------------------------------------------------------------------
	// * Items
	// ---------------------------------------------------------------------------
	"itm_item" : "Objet",
	// ---------------------------------------------------------------------------
	// * Treasures
	// ---------------------------------------------------------------------------
	"gem" : "Gemme",
	"gems" : "Gemmes",
	"jewel" : "Bijou",
	"jewels" : "Bijoux",
	// ---------------------------------------------------------------------------
	// * Creatures
	// ---------------------------------------------------------------------------
	"creature" : "Créature",
	// Directories
	"creatures" : "Créatures",
	"monsters" : "Monstres",
	"associates" : "Associés",
	"summons" : "Convocations",
	// Categories
	"pcs" : "PJ",
	"npcs" : "PNJ",
	"cohorts" : "Compagnons",
	"familiars" : "Familiers",
	"animal_companions" : "Compagnons animaux",
	"mounts" : "Montures",
	"summoned_monsters" : "Monstres convoqués",
	"natural_allies" : "Alliés naturels",
	// Types
	"aberration" : "Aberration",
	"animal" : "Animal",
	"construct" : "Créature artificielle",
	"dragon" : "Dragon",
	"elemental" : "Élémentaire",
	"fey" : "Fée",
	"giant" : "Géant",
	"humanoid" : "Humanoïde",
	"magical_beast" : "Créature magique",
	"monstrous_humanoid" : "Humanoïde monstrueux",
	"ooze" : "Vase",
	"outsider" : "Extérieur",
	"plant" : "Plante",
	"undead" : "Mort-vivant",
	"vermin" : "Vermine",
	// Subtypes : Matter
	"augmented" : "Altéré",
	"incorporeal" : "Intangible",
	"shapechanger" : "Métamorphe",
	"swarm" : "Nuée",
	// Subtypes : Planar
	"angel" : "Ange",
	"archon" : "Archon",
	"extraplanar" : "Extraplanaire",
	"native" : "Natif",
	// Subtypes : Alignment
	"chaotic" : "Chaos",
	"evil" : "Mal",
	"good" : "Bien",
	"lawful" : "Loi",
	// Subtypes : Environment
	"aquatic" : "Aquatique",
	"cold" : "Froid",
	// Subtypes : Elemental
	"air" : "Air",
	"earth" : "Terre",
	"fire" : "Feu",
	"water" : "Eau",
	// Subtypes : Humanoid
	"goblinoid" : "Gobelinoïde",
	"reptilian" : "Reptilien",
	"human" : "Humain",
	"orc" : "Orque",
	"elf" : "Elfe",
	"dwarf" : "Nain",
	"gnome" : "Gnome",
	"halfling" : "Halfelin",
	// Sizes
	"size_f_abbr" : "I",
	"size_d_abbr" : "Min",
	"size_t_abbr" : "TP",
	"size_s_abbr" : "P",
	"size_m_abbr" : "M",
	"size_l_abbr" : "G",
	"size_h_abbr" : "TG",
	"size_g_abbr" : "Gig",
	"size_c_abbr" : "C",
	"size_f_long" : "Infime",
	"size_d_long" : "Minuscule",
	"size_t_long" : "Très petite",
	"size_s_long" : "Petite",
	"size_m_long" : "Moyenne",
	"size_l_long" : "Grande",
	"size_h_long" : "Très grande",
	"size_g_long" : "Gigantesque",
	"size_c_long" : "Colossale",
	// Classes : Character
	"barbarian_m" : "Barbare",
	"barbarian_f" : "Barbare",
	"bard_m" : "Barde",
	"bard_f" : "Bardesse",
	"cleric_m" : "Prêtre",
	"cleric_f" : "Prêtresse",
	"druid_m" : "Druide",
	"druid_f" : "Druidesse",
	"fighter_m" : "Guerrier",
	"fighter_f" : "Guerrière",
	"monk_m" : "Moine",
	"monk_f" : "Moniale",
	"paladin_m" : "Paladin",
	"paladin_f" : "Paladine",
	"ranger_m" : "Rôdeur",
	"ranger_f" : "Rôdeuse",
	"rogue_m" : "Roublard",
	"rogue_f" : "Roublarde",
	"sorcerer_m" : "Ensorceleur",
	"sorcerer_f" : "Ensorceleuse",
	"wizard_m" : "Magicien",
	"wizard_f" : "Magicienne",
	// Classes : NPC
	"adept_m" : "Adepte",
	"adept_f" : "Adepte",
	"aristocrat_m" : "Noble",
	"aristocrat_f" : "Noble",
	"commoner_m" : "Homme du peuple", // Gens du peuple
	"commoner_f" : "Femme du peuple", // Gens du peuple
	"expert_m" : "Expert",
	"expert_f" : "Experte",
	"warrior_m" : "Homme d'armes", // Homme d'armes
	"warrior_f" : "Femme d'armes", // Homme d'armes
	// Speed
	"speed_in" : "en",
	"speed_base" : "vitesse de déplacement de base",
	// Armor Class
	"ac_size" : "taille",
	"ac_dodge" : "esquive",
	"ac_deflect" : "parade",
	"ac_natural" : "naturelle",
	"ac_armor" : "armure",
	"ac_shield" : "bouclier",
	"ac_touch" : "contact",
	"ac_flat_footed" : "pris au dépourvu",
	// Saves
	"sv_fort_abbr" : "Vig",
	"sv_refl_abbr" : "Réf",
	"sv_will_abbr" : "Vol",
	"sv_fort_long" : "Vigueur",
	"sv_refl_long" : "Réflexes",
	"sv_will_long" : "Volonté",
	// Abilities
	"ab_str_abbr" : "For",
	"ab_dex_abbr" : "Dex",
	"ab_con_abbr" : "Con",
	"ab_int_abbr" : "Int",
	"ab_wis_abbr" : "Sag",
	"ab_cha_abbr" : "Cha",
	"ab_str_long" : "Force",
	"ab_dex_long" : "Dextérité",
	"ab_con_long" : "Constitution",
	"ab_int_long" : "Intelligence",
	"ab_wis_long" : "Sagesse",
	"ab_cha_long" : "Charisme",
	// Skills
	"sk_appraise" : "Estimation",
	"sk_balance" : "Équilibre",
	"sk_bluff" : "Bluff",
	"sk_climb" : "Escalade",
	"sk_concentration" : "Concentration",
	"sk_craft" : "Artisanat",
	"sk_craft_alchemy" : "Artisanat (alchimie)",
	"sk_craft_weaponsmithing" : "Artisanat (fabrication d'armes)",
	"sk_craft_armorsmithing" : "Artisanat (fabrication d'armures)",
	"sk_craft_bowmaking" : "Artisanat (fabrication d'arcs)",
	"sk_craft_trapmaking" : "Artisanat (fabrication de pièges)",
	"sk_decipher_script" : "Décryptage",
	"sk_diplomacy" : "Diplomatie",
	"sk_disable_device" : "Désamorçage",
	"sk_disguise" : "Déguisement",
	"sk_escape_artist" : "Évasion",
	"sk_forgery" : "Contrefaçon",
	"sk_gather_information" : "Renseignements",
	"sk_handle_animal" : "Dressage",
	"sk_heal" : "Premiers secours",
	"sk_hide" : "Discrétion",
	"sk_intimidate" : "Intimidation",
	"sk_jump" : "Saut",
	"sk_knowledge" : "Connaissances",
	"sk_knowledge_arcana" : "Connaissances (mystères)",
	"sk_knowledge_architecture_and_engineering" : "Connaissances (architecture et ingénierie)",
	"sk_knowledge_dungeoneering" : "Connaissances (exploration souterraine)",
	"sk_knowledge_geography" : "Connaissances (géographie)",
	"sk_knowledge_history" : "Connaissances (histoire)",
	"sk_knowledge_local" : "Connaissances (folklore local)",
	"sk_knowledge_nature" : "Connaissances (nature)",
	"sk_knowledge_nobility_and_royalty" : "Connaissances (noblesse et royauté)",
	"sk_knowledge_religion" : "Connaissances (religion)",
	"sk_knowledge_the_planes" : "Connaissances (plans)",
	"sk_listen" : "Perception auditive",
	"sk_move_silently" : "Déplacement silencieux",
	"sk_open_lock" : "Crochetage",
	"sk_perform" : "Représentation",
	"sk_perform_act" : "Représentation (scène)",
	"sk_perform_comedy" : "Représentation (farce)",
	"sk_perform_dance" : "Représentation (danse)",
	"sk_perform_keyboard_instruments" : "Représentation (instruments à clavier)",
	"sk_perform_oratory" : "Représentation (déclamation)",
	"sk_perform_percussion_instruments" : "Représentation (percussions)",
	"sk_perform_string_instruments" : "Représentation (instruments à cordes)",
	"sk_perform_wind_instruments" : "Représentation (instruments à vent)",
	"sk_perform_sing" : "Représentation (chant)",
	"sk_profession" : "Profession",
	"sk_ride" : "Équitation",
	"sk_search" : "Fouille",
	"sk_sense_motive" : "Psychologie",
	"sk_sleight_of_hand" : "Escamotage",
	"sk_speak_language" : "Langue",
	"sk_spellcraft" : "Art de la magie",
	"sk_spot" : "Détection",
	"sk_survival" : "Survie",
	"sk_swim" : "Natation",
	"sk_tumble" : "Acrobaties",
	"sk_use_magic_device" : "Utilisation d'objets magiques",
	"sk_use_rope" : "Maîtrise des cordes",
	// Weapons
	"wpn_unarmed_strike" : "attaque à mains nues",
	"wpn_melee_type" : "corps à corps",
	"wpn_range_type" : "distance",
	"wpn_and" : "et",
	"wpn_or" : "ou",
	"wpn_plus" : "plus",
	// To Hit Effects
	"to_hit_fire" : "feu",
	"to_hit_cold" : "froid",
	"to_hit_elec" : "électricité",
	"to_hit_acid" : "acide",
	"to_hit_sonic" : "son",
	"to_hit_negative_energy" : "énergie négative",
	"to_hit_positive_energy" : "énergie positive",
	"to_hit_str_drain" : "affaiblissement temporaire de Force",
	"to_hit_dex_drain" : "affaiblissement temporaire de Dextérité",
	"to_hit_con_drain" : "affaiblissement temporaire de Constitution",
	"to_hit_int_drain" : "affaiblissement temporaire d'Intelligence",
	"to_hit_wis_drain" : "affaiblissement temporaire de Sagesse",
	"to_hit_cha_drain" : "affaiblissement temporaire de Charisme",
	"to_hit_energy_drain" : "absorption d'énergie",
	"to_hit_magic_drain" : "absorption de magie",
	"to_hit_poison" : "poison",
	"to_hit_disease" : "maladie",
	"to_hit_entangle" : "enchevêtrement",
	"to_hit_slow" : "lenteur",
	"to_hit_stun" : "étourdissement",
	"to_hit_paralysis" : "paralysie",
	"to_hit_fear" : "terreur",
	"to_hit_curse" : "malédiction",
	"to_hit_blindness" : "cécité",
	"to_hit_deafness" : "surdité",
	"to_hit_combustion" : "combustion",
	"to_hit_petrification" : "pétrification",
	"to_hit_slaying" : "mort instantanée",
	// Creature
	"cre_stats" : "Statistiques",
	"cre_desc" : "Description",
	"cre_combat" : "Combat",
	"cre_specs" : "Spécificités",
	// Statistics
	"class_and_level" : "Classe et niveau",
	"type_and_size" : "Type et taille",
	"hit_dice" : "Dés de vie",
	"initiative" : "Initiative",
	"speed" : "Vitesse de déplacement",
	"armor_class" : "Classe d'armure",
	"base_attack_grapple" : "Attaque de base/Lutte",
	"attack" : "Attaque",
	"full_attack" : "Attaque à outrance",
	"space_reach" : "Espace occupé/Allonge",
	"special_attacks" : "Attaques spéciales",
	"special_qualities" : "Particularités",
	"saves" : "Jets de sauvegarde",
	"abilities" : "Caractéristiques",
	"skills" : "Compétences",
	"feats" : "Dons",
	"environment" : "Environnement",
	"organization" : "Organisation sociale",
	"challenge_rating" : "Facteur de puissance",
	"treasure" : "Trésor",
	"alignment" : "Alignement",
	"advancement" : "Évolution possible",
	"level_adjustment" : "Ajustement de niveau",
	// Environment
	"any" : "Quelconque",
	"any_ground" : "Terre ferme et souterrains",
	"any_like_base_creature" : "Quelconque, généralement identique à celui de la créature de base",
	"underground" : "Souterrains",
	"cold_aquatic" : "Milieux aquatiques froids",
	"cold_deserts" : "Déserts froids",
	"cold_forests" : "Forêts froides",
	"cold_hills" : "Collines froides",
	"cold_marshes" : "Marécages froids",
	"cold_mountains" : "Montagnes froides",
	"cold_plains" : "Plaines froides",
	"temperate_aquatic" : "Milieux aquatiques tempérés",
	"temperate_deserts" : "Déserts tempérés",
	"temperate_forests" : "Forêts tempérées",
	"temperate_hills" : "Collines tempérées",
	"temperate_marshes" : "Marécages tempérés",
	"temperate_mountains" : "Montagnes tempérées",
	"temperate_plains" : "Plaines tempérées",
	"warm_aquatic" : "Milieux aquatiques chauds",
	"warm_deserts" : "Déserts chauds",
	"warm_forests" : "Forêts chaudes",
	"warm_hills" : "Collines chaudes",
	"warm_marshes" : "Marécages chauds",
	"warm_mountains" : "Montagnes chaudes",
	"warm_plains" : "Plaines chaudes",
	"any_good_plane" : "N'importe quel plan d'alignement bon",
	"any_lawful_good_plane" : "N'importe quel plan d'alignement loyal bon",
	"any_chaotic_good_plane" : "N'importe quel plan d'alignement chaotique bon",
	"any_evil_plane" : "N'importe quel plan d'alignement mauvais",
	"any_lawful_evil_plane" : "N'importe quel plan d'alignement loyal mauvais",
	"any_chaotic_evil_plane" : "N'importe quel plan d'alignement chaotique mauvais",
	"plane_of_air" : "Plan élémentaire de l'Air",
	"plane_of_earth" : "Plan élémentaire de la Terre",
	"plane_of_fire" : "Plan élémentaire du Feu",
	"plane_of_water" : "Plan élémentaire de l'Eau",
	"astral_plane" : "Plan Astral",
	"ethereal_plane" : "Plan Éthéré",
	"plane_of_shadow" : "Plan de l'Ombre",
	"positive_energy_plane" : "Plan Positif",
	"negative_energy_plane" : "Plan Négatif",
	"the_limbo" : "Le Chaos tourbillonnant des Limbes",
	// Organization
	"org_or" : "ou",
	"org_solitary" : "Solitaire",
	"org_pair" : "Couple",
	"org_band" : "Bande",
	"org_clan" : "Clan",
	"org_cluster" : "Groupe",
	"org_clutch" : "Groupe",
	"org_colony" : "Colonie",
	"org_company" : "Compagnie",
	"org_crowd" : "Foule",
	"org_family" : "Famille",
	"org_flight" : "Volée",
	"org_flock" : "Troupeau",
	"org_gang" : "Clique",
	"org_group" : "Groupe",
	"org_herd" : "Harde",
	"org_mob" : "Horde",
	"org_pack" : "Meute",
	"org_patch" : "Groupe",
	"org_patrol" : "Patrouille",
	"org_pride" : "Troupe",
	"org_squad" : "Escouade",
	"org_storm" : "Tempête",
	"org_swarm" : "Nuée",
	"org_team" : "Brigade",
	"org_tribe" : "Tribu",
	"org_troop" : "Troupe",
	"org_troupe" : "Groupe mixte",
	"org_wing" : "Flopée",
	"org_warband" : "Troupe de guerre",
	"org_hunting_party" : "Groupe de chasseurs",
	"org_hunting_raiding_party" : "Groupe de chasseurs/maraudeurs",
	"org_tangle" : "Enchevêtrement", // Swarms
	"org_fright" : "Horreur",
	"org_terror" : "Terreur",
	"org_cloud" : "Nuage",
	"org_plague" : "Fléau",
	"org_infestation" : "Infestation",
	"org_covey" : "Cercle", // Hags and Witches
	"org_grove" : "Bosquet", // Dryads and Treants
	"org_grace" : "Groupe", // Unicorns
	"org_string" : "Défilé", // Will-o-Wisp
	"org_brood" : "Nichée", // Aboleths
	"org_slaver_brood" : "Nichée mixte",
	"org_nest" : "Couvée", // Nagas
	"org_warden_squad" : "Escouade de gardiens", // Mummies
	"org_guardian_detail" : "Détachement de protecteurs",
	"org_eyrie" : "Nichée", // Eagles
	"org_school" : "Banc", // Sharks
	// Treasure
	"trs_mark" : ",",
	"trs_plus" : "et",
	"trs_none" : "aucun",
	"trs_standard" : "normal",
	"trs_double" : "normal (x2)",
	"trs_triple" : "normal (x3)",
	"trs_coins" : "pièces",
	"trs_goods" : "biens précieux",
	"trs_items" : "objets",
	"trs_no_coins" : "pas de pièces",
	"trs_standard_coins" : "pièces normales",
	"trs_double_coins" : "pièces normales (x2)",
	"trs_triple_coins" : "pièces normales (x3)",
	"trs_no_goods" : "pas de biens précieux",
	"trs_standard_goods" : "biens précieux normaux",
	"trs_double_goods" : "biens précieux normaux (x2)",
	"trs_triple_goods" : "biens précieux normaux (x3)",
	"trs_no_items" : "pas d'objets",
	"trs_standard_items" : "objets normaux",
	"trs_double_items" : "objets normaux (x2)",
	"trs_triple_items" : "objets normaux (x3)",
	// Alignment
	"aln_any" : "quelconque",
	"aln_any_law_chaos" : "loyal, neutre ou chaotique",
	"aln_any_good_evil" : "bon, neutre ou mauvais",
	"aln_usually" : "généralement",
	"aln_often" : "souvent",
	"aln_always" : "toujours",
	"aln_neutral" : "neutre",
	"aln_true_neutral" : "neutre strict",
	"aln_lawful" : "loyal",
	"aln_chaotic" : "chaotique",
	"aln_good" : "bon",
	"aln_evil" : "mauvais",
	// Advancement
	"adv_or" : "ou",
	"adv_mark" : ",",
	"adv_size_f" : "taille I",
	"adv_size_d" : "taille Min",
	"adv_size_t" : "taille TP",
	"adv_size_s" : "taille P",
	"adv_size_m" : "taille M",
	"adv_size_l" : "taille G",
	"adv_size_h" : "taille TG",
	"adv_size_g" : "taille Gig",
	"adv_size_c" : "taille C",
	"adv_hd" : "DV",
	"adv_none" : "—",
	"adv_spec" : "Spécial (voir description)",
	"adv_base" : "Comme la créature de base (ou « — » si celle-ci évolue par une classe de personnage).",
	"adv_dble" : "Comme la créature de base, mais doublez les dés de vie (20 maximum), ou « — » si celle-ci évolue par une classe de personnage.",
	"adv_char" : "par une classe de personnage",
	"adv_class" : "classe de personnage",
	// Special_abilities
	"sab_pre" : "(", // Special ability value character prefix (e.g. '10' => '<sab_pre>10<sab_suf>' => '[10]')
	"sab_suf" : ")", // Special ability value character suffix (e.g. '10' => '<sab_pre>10<sab_suf>' => '[10]')
	"sab_per_pre" : "",
	"sab_per_suf" : "",
	"sab_per_day" : "jour",
	"sab_per_week" : "semaine",
	// ---------------------------------------------------------------------------
	// * Campaign Settings
	// ---------------------------------------------------------------------------
	// Locations
	"candlekeep" : "Château-suif",
	"friendly_arm" : "Brasamical",
	"beregost" : "Bérégost",
	"nashkel" : "Nashkel",
	// Monsters
	"gibberling" : "Grouilleux",
	"xvart" : "Xvart",
	"tasloi" : "Tasloï",
	"bandit" : "Brigand",
	"hobgoblin" : "Hobgobelin",
	"half_ogre" : "Demi-ogre",
	"ogrillon" : "Ogrillon",
	// NPCs
	"imoen" : "Imoen",
	"garrick" : "Garrick",
	"kagain" : "Kagain",
	"kivan" : "Kivan",
	"ajantis" : "Ajantis",
};

$msg = {};

// =============================================================================
// -----------------------------------------------------------------------------
// # System
// -----------------------------------------------------------------------------
// =============================================================================

////////////////////////////////////////////////////////////////////////////////
// * Damage Reduction (DR)
////////////////////////////////////////////////////////////////////////////////

$lng.dr = {
	"or" : "ou", // DR 'or' operator
	"and" : "et", // DR 'and' operator
	"none" : "—", // No DR overcoming (alias for null, undefined and false)
	"epic" : "épique", // Weapon enhancement
	"magic" : "magie",
	"bludgeoning" : "contondant", // Damage type
	"piercing" : "perforant",
	"slashing" : "tranchant",
	"adamantine" : "adamantium", // Special material
	"cold_iron" : "fer froid",
	"silver" : "argent",
	"chaotic" : "Chaos", // Alignment
	"evil" : "Mal",
	"good" : "Bien",
	"lawful" : "Loi",
};

////////////////////////////////////////////////////////////////////////////////
// * Energy Resistance
////////////////////////////////////////////////////////////////////////////////

$lng.enr = {
	"key" : "Résistance", // Energy Resistance Key word
	"and" : "et", // Energy Resistance 'and' operator
	"fire" : "feu",
	"cold" : "froid",
	"electricity" : "électricité",
	"acid" : "acide",
	"sonic" : "son",
	"to_fire" : "au feu",
	"to_cold" : "au froid",
	"to_electricity" : "à l'électricité",
	"to_acid" : "à l'acide",
	"to_sonic" : "au son",
}

////////////////////////////////////////////////////////////////////////////////
// * Gaze Attack
////////////////////////////////////////////////////////////////////////////////

$lng.gze = {
	"key" : "Regard", // Gaze Attack Key word
	"more" : ", ", // Gaze Attack 'not last' separator (more occurences)
	"last" : " et ", // Gaze Attack 'no more' separator (last occurence)
	"charming" : "charmeur",
	"corrupting" : "corrupteur",
	"death" : "mortel",
	"evil" : "imprécatoire",
	"paralyzing" : "paralysant",
	"petrifying" : "pétrifiant",
	"unnerving" : "déstabilisant",
}

////////////////////////////////////////////////////////////////////////////////
// * Immunities
////////////////////////////////////////////////////////////////////////////////

$lng.imn = {
	"key" : "Immunité contre ", // Immunities Key word
	"more" : ", ", // Immunities 'not last' separator (more occurences)
	"last" : " et ", // Immunities 'no more' separator (last occurence)
	"fire" : "le feu", // Elemental Energies
	"cold" : "le froid",
	"electricity" : "l'électricité",
	"acid" : "l'acide",
	"sonic" : "le son",
	"poison" : "le poison", // Debilitating Effects
	"disease" : "la maladie",
	"paralysis" : "la paralysie", // Movement Restriction
	"stunning" : "l'étourdissement",
	"petrification" : "la pétrification", // Transmutation
	"polymorph" : "la métamorphose",
	"transformation" : "les changements de formes",
	"mind_affecting_effects" : "les effets mentaux", // Mind-affecting Effects
	"charms" : "les charmes",
	"compulsions" : "les coercitions",
	"fear" : "la terreur",
	"sleep" : "le sommeil",
	"morale_effects" : "les effets de moral",
	"illusions" : "les illusions", // Illusions
	"patterns" : "les mirages",
	"phantasms" : "les fantasmes",
	"visual_effects" : "les effets visuels",
	"magic" : "la magie", // Magical Effects
	"maze_spell" : "le sort Dédale",
	"energy_drain" : "l'absorption d'énergie", // Creatures' Special Abilities
	"gaze_attacks" : "les attaques de regard",
	"critical_hits" : "les coups critiques", // Critical Hits
}

////////////////////////////////////////////////////////////////////////////////
// * Vulnerability to Energy
////////////////////////////////////////////////////////////////////////////////

$lng.vnr = {
	"key" : "Vulnérabilité", // Energy Resistance Key word
	"more" : ", ", // Immunities 'not last' separator (more occurences)
	"last" : " et ", // Immunities 'no more' separator (last occurence)
}

////////////////////////////////////////////////////////////////////////////////
// * Spell Schools
////////////////////////////////////////////////////////////////////////////////

$lng.spsch = {
	"abjuration" : "Abjuration",
	"conjuration" : "Invocation",
	"divination" : "Divination",
	"enchantment" : "Enchantement",
	"evocation" : "Évocation",
	"illusion" : "Illusion",
	"necromancy" : "Nécromancie",
	"transmutation" : "Transmutation",
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Items
// -----------------------------------------------------------------------------
// =============================================================================

////////////////////////////////////////////////////////////////////////////////
// * Ammunitions
////////////////////////////////////////////////////////////////////////////////

$lng.amo = {
	"arrow" : "Flèche",
	"arrow_plus_1" : "Flèche +1",
	"bolt" : "Carreau",
	"bullet" : "Bille",
};

$msg.amo = {
	"arrow_plus_1" : "Cette flèche magique procure un bonus de +1 aux jets d'attaque et aux dégâts.",
};

////////////////////////////////////////////////////////////////////////////////
// * Potions
////////////////////////////////////////////////////////////////////////////////

$lng.ptn = {
	"healing" : "Potion de soins",
	"speed" : "Huile de vitesse",
};

$msg.ptn = {
	"healing" : "Consommée en entier, cette potion rend 9 points de vie au buveur. L'effet est instantané, et la potion ne sert qu'une seule fois.",
	"speed" : "Cette huile double les capacités de déplacement et de combat de celui qui la boit. Un déplacement de 9 mètres passe à 18 mètres, et un personnage qui peut normalement porter une attaque par round en porte deux. Cependant, ceci ne réduit en rien le temps d'incantation des sorts. Cet effet dure 5 tours.",
};

////////////////////////////////////////////////////////////////////////////////
// * Scrolls
////////////////////////////////////////////////////////////////////////////////

$lng.scr = {};
$msg.scr = {};

////////////////////////////////////////////////////////////////////////////////
// * Wands
////////////////////////////////////////////////////////////////////////////////

$lng.wnd = {
	"magic_missile" : "Baguette de projectile magique",
};
$msg.wnd = {
	"magic_missile" : "Une fois activée, la baguette crache un projectile d'énergie magique qui file toucher automatiquement sa cible, y compris un ennemi engagé dans un combat au corps à corps. La créature doit être vue, ou au moins détectable, si bien qu'une couverture presque totale, telle celle qu'offre une archère, peut rendre le projectile inopérant. Celui-ci inflige 1d4+1 points de dégâts à la créature qu'il frappe.",
};

////////////////////////////////////////////////////////////////////////////////
// * Simple Weapons
////////////////////////////////////////////////////////////////////////////////

$lng.swp = {
	// Simple Weapons
	"unarmed_strike" : "Attaque à maines nues",
	"dagger" : "Dague",
	"punching_dagger" : "Dague coup-de-poing",
	"light_mace" : "Masse d'armes légère",
	"sickle" : "Serpe",
	"club" : "Gourdin",
	"heavy_mace" : "Masse d'armes lourde",
	"morningstar" : "Morgenstern",
	"shortspear" : "Épieu",
	"longspear" : "Pique",
	"quarterstaff" : "Bâton",
	"spear" : "Lance",
	"heavy_crossbow" : "Arbalète lourde",
	"light_crossbow" : "Arbalète légère",
	"dart" : "Dard",
	"javelin" : "Javeline",
	"sling" : "Fronde",
}

$msg.swp = {};

////////////////////////////////////////////////////////////////////////////////
// * Martial Weapons
////////////////////////////////////////////////////////////////////////////////

$lng.mwp = {
	// Martial Weapons
	"throwing_axe" : "Hache de lancer",
	"light_hammer" : "Marteau léger",
	"handaxe" : "Hachette",
	"kukri" : "Kukri",
	"light_pick" : "Pic de guerre léger",
	"sap" : "Matraque",
	"short_sword" : "Épée courte",
	"battleaxe" : "Hache d'armes",
	"flail" : "Fléau d'armes léger",
	"longsword" : "Épée longue",
	"heavy_pick" : "Pic de guerre lourd",
	"rapier" : "Rapière",
	"scimitar" : "Cimeterre",
	"trident" : "Trident",
	"warhammer" : "Marteau de guerre",
	"falchion" : "Cimeterre à deux mains",
	"glaive" : "Coutille",
	"greataxe" : "Hache à deux mains",
	"greatclub" : "Massue",
	"heavy_flail" : "Fléau d'armes lourd",
	"greatsword" : "Épée à deux mains",
	"guisarme" : "Guisarme",
	"halberd" : "Hallebarde",
	"lance" : "Lance d'arçon",
	"ranseur" : "Corsèque",
	"scythe" : "Faux",
	"longbow" : "Arc long",
	"composite_longbow" : "Arc long composite",
	"shortbow" : "Arc court",
	"composite_shortbow" : "Arc court composite",
}

$msg.mwp = {};

////////////////////////////////////////////////////////////////////////////////
// * Exotic Weapons
////////////////////////////////////////////////////////////////////////////////

$lng.ewp = {
	// Exotic Weapons
	"kama" : "Kama",
	"nunchaku" : "Nunchaku",
	"sai" : "Saï",
	"siangham" : "Siangham",
	"bastard_sword" : "Épée bâtarde",
	"dwarven_waraxe" : "Hache de guerre naine",
	"whip" : "Fouet",
	"orc_double_axe" : "Hache double orque",
	"spiked_chain" : "Chaîne cloutée",
	"dire_flail" : "Fléau double",
	"gnome_hooked_hammer" : "Marteau-piolet gnome",
	"two_bladed_sword" : "Double-lame",
	"dwarven_urgrosh" : "Urgrosh nain",
	"bolas" : "Bolas",
	"hand_crossbow" : "Arbalète de poing",
	"repeating_heavy_crossbow" : "Arbalète lourde à répétition",
	"repeating_light_crossbow" : "Arbalète légère à répétition",
	"net" : "Filet",
	"shuriken" : "Shuriken",
}

$msg.ewp = {};

////////////////////////////////////////////////////////////////////////////////
// * Weapons (only manufactured)
////////////////////////////////////////////////////////////////////////////////

$lng.wpn = Object.assign($lng.swp, $lng.mwp, $lng.ewp);

$msg.wpn = {};

////////////////////////////////////////////////////////////////////////////////
// * Natural Weapons
////////////////////////////////////////////////////////////////////////////////

$lng.nwp = {
	"bite" : "Morsure",
	"claw" : "Griffe",
	"horn" : "Corne",
	"hoof" : "Sabot",
	"pincer" : "Pince",
	"slam" : "Coup",
	"sting" : "Dard",
	"tail" : "Queue",
	"talon" : "Serre",
	"tentacle" : "Tentacule",
	"tendril" : "Appendice",
	"swarm" : "Nuée",
	"wing" : "Ailes",
	"two_slams" : "2 Coups",
	"two_claws" : "2 Griffes",
};

$msg.nwp = {};

////////////////////////////////////////////////////////////////////////////////
// * Reloading Weapons
////////////////////////////////////////////////////////////////////////////////

$lng.rwp = {
	"hand_crossbow" : $lng.ewp.hand_crossbow,
	"light_crossbow" : $lng.swp.light_crossbow,
	"heavy_crossbow" : $lng.swp.heavy_crossbow,
	"sling" : $lng.swp.sling,
}

////////////////////////////////////////////////////////////////////////////////
// * (All) Weapons
////////////////////////////////////////////////////////////////////////////////

$lng.awp = Object.assign($lng.wpn, $lng.nwp);

$msg.awp = {};

////////////////////////////////////////////////////////////////////////////////
// * Helms
////////////////////////////////////////////////////////////////////////////////

$lng.hlm = {
	"horned_helmet" : "Casque à cornes",
	"winged_helmet" : "Casque à ailettes",
	"feathered_helmet" : "Casque à plumes",
	"crested_helmet" : "Casque à panache",
	"spiked_helmet" : "Casque à pointes",
	"golden_helmet" : "Casque doré",
	"bronze_helmet" : "Casque en bronze",
	"leather_cap" : "Coiffe de cuir",
	"mail_cap" : "Coiffe de mailles",
};

$msg.hlm = {};

////////////////////////////////////////////////////////////////////////////////
// * Armors
////////////////////////////////////////////////////////////////////////////////

$lng.arm = {
	// Light armor
	"padded_armor" : "Armure matelassée",
	"leather_armor" : "Armure de cuir",
	"studded_leather_armor" : "Armure de cuir cloutée",
	"chain_shirt" : "Chemise de mailles",

	// Medium armor
	"hide_armor" : "Armure de peau",
	"scale_mail" : "Armure d'écailles",
	"chainmail" : "Cotte de mailles",
	"breastplate" : "Cuirasse",

	// Heavy armor
	"splint_mail" : "Clibanion",
	"banded_mail" : "Crevice",
	"half_plate" : "Armure à plaques",
	"full_plate" : "Harnois",
};

$msg.arm = {};

////////////////////////////////////////////////////////////////////////////////
// * Shields
////////////////////////////////////////////////////////////////////////////////

$lng.shd = {
	// Shields
	"buckler" : "Targe",
	"light_wooden_shield" : "Rondache en bois",
	"light_steel_shield" : "Rondache en acier",
	"heavy_wooden_shield" : "Écu en bois",
	"heavy_steel_shield" : "Écu en acier",
	"tower_shield" : "Pavois",
};

$msg.shd = {};

////////////////////////////////////////////////////////////////////////////////
// * Cloaks
////////////////////////////////////////////////////////////////////////////////

$lng.clk = {};
$msg.clk = {};

////////////////////////////////////////////////////////////////////////////////
// * Bracers
////////////////////////////////////////////////////////////////////////////////

$lng.brc = {};
$msg.brc = {};

////////////////////////////////////////////////////////////////////////////////
// * Gauntlets
////////////////////////////////////////////////////////////////////////////////

$lng.gnt = {};
$msg.gnt = {};

////////////////////////////////////////////////////////////////////////////////
// * Belts
////////////////////////////////////////////////////////////////////////////////

$lng.blt = {};
$msg.blt = {};

////////////////////////////////////////////////////////////////////////////////
// * Boots
////////////////////////////////////////////////////////////////////////////////

$lng.bts = {};
$msg.bts = {};

////////////////////////////////////////////////////////////////////////////////
// * Rings
////////////////////////////////////////////////////////////////////////////////

$lng.rng = {};
$msg.rng = {};

////////////////////////////////////////////////////////////////////////////////
// * Amulets
////////////////////////////////////////////////////////////////////////////////

$lng.amu = {};
$msg.amu = {};

////////////////////////////////////////////////////////////////////////////////
// * Gems
////////////////////////////////////////////////////////////////////////////////

$lng.gem = {};
$msg.gem = {};

////////////////////////////////////////////////////////////////////////////////
// * Books
////////////////////////////////////////////////////////////////////////////////

$lng.boo = {};
$msg.boo = {};

////////////////////////////////////////////////////////////////////////////////
// * Miscellaneous
////////////////////////////////////////////////////////////////////////////////

$lng.msc = {};
$msg.msc = {};

// =============================================================================
// -----------------------------------------------------------------------------
// # Perks
// -----------------------------------------------------------------------------
// =============================================================================

////////////////////////////////////////////////////////////////////////////////
// * Feats
////////////////////////////////////////////////////////////////////////////////

$lng.fts = {
	// Skills
	"acrobatic" : "Voltigeur",
	"agile" : "Funambule",
	"alertness" : "Vigilance",
	"animal_affinity" : "Fraternité animale",
	"athletic" : "Athlétisme",
	"deceitful" : "Fourberie",
	"deft_hands" : "Doigts de fée",
	"diligent" : "Méticuleux",
	"investigator" : "Fin limier",
	"magical_aptitude" : "Affinité magique",
	"negotiator" : "Négociation",
	"nimble_fingers" : "Savoir faire mécanique",
	"persuasive" : "Persuasion",
	"self_sufficient" : "Autonome",
	"stealthy" : "Discret",

	// Skill Focus
	"skill_focus" : "Talent",

	// Saves
	"lightning_reflexes" : "Réflexes surhumains",
	"great_fortitude" : "Vigueur surhumaine",
	"iron_will" : "Volonté de fer",

	// Resistances
	"endurance" : "Endurance",
	"diehard" : "Dur à cuire",
	"toughness" : "Robustesse",

	// Survival
	"run" : "Course",
	"track" : "Pistage",
	"leadership" : "Prestige",

	// Armor Proficiency
	"armor_proficiency_light" : "Port des armures légères",
	"armor_proficiency_medium" : "Port des armures intermédiaires",
	"armor_proficiency_heavy" : "Port des armures lourdes",

	// Shield Proficiency
	"shield_proficiency" : "Maniement des boucliers",
	"tower_shield_proficiency" : "Maniement du pavois",
	"improved_shield_bash" : "Science du coup de bouclier",

	// Weapon Proficiency
	"simple_weapon_proficiency" : "Maniement des armes courantes",
	"martial_weapon_proficiency" : "Maniement d'une arme de guerre",
	"exotic_weapon_proficiency" : "Maniement d'une arme exotique",

	// Weapon Mastery
	"weapon_focus" : "Arme de prédilection",
	"weapon_specialization" : "Spécialisation martiale",
	"greater_weapon_focus" : "Arme de prédilection supérieure",
	"greater_weapon_specialization" : "Spécialisation martiale supérieure",
	"improved_critical" : "Science du critique",

	// Martial Abilities
	"blind_fight" : "Combat en aveugle",
	"combat_reflexes" : "Attaques réflexes",
	"improved_initiative" : "Science de l'initiative",
	"quick_draw" : "Arme en main",
	"weapon_finesse" : "Attaque en finesse",

	// Offense Abilities
	"power_attack" : "Attaque en puissance",
	"cleave" : "Enchaînement",
	"great_cleave" : "Succession d'enchaînements",
	"improved_bull_rush" : "Science de la bousculade",
	"improved_overrun" : "Science du renversement",
	"improved_sunder" : "Science de la destruction",

	// Defense Abilities
	"dodge" : "Esquive",
	"mobility" : "Souplesse du serpent",
	"spring_attack" : "Attaque éclair",

	// Combat Mastery
	"combat_expertise" : "Expertise du combat",
	"whirlwind_attack" : "Attaque en rotation",
	"improved_disarm" : "Science du désarmement",
	"improved_feint" : "Science de la feinte",
	"improved_trip" : "Science du croc en jambe",

	// Two-Weapon Fighting
	"two_weapon_fighting" : "Combat à deux armes",
	"two_weapon_defense" : "Défense à deux armes",
	"improved_two_weapon_fighting" : "Science du combat à deux armes",
	"greater_two_weapon_fighting" : "Maîtrise du combat à deux armes",

	// Unarmed Fighting
	"improved_unarmed_strike" : "Science du combat à mains nues",
	"stunning_fist" : "Coup étourdissant",
	"deflect_arrows" : "Parade de projectiles",
	"snatch_arrows" : "Interception de projectile",
	"improved_grapple" : "Science de la lutte",

	// Archery
	"rapid_reload" : "Rechargement rapide",
	"point_blank_shot" : "Tir à bout portant",
	"far_shot" : "Tir de loin",
	"precise_shot" : "Tir de précision",
	"improved_precise_shot" : "Science du tir de précision",
	"rapid_shot" : "Tir rapide",
	"manyshot" : "Feu nourri",
	"shot_on_the_run" : "Tir en mouvement",

	// Mounted Combat
	"mounted_combat" : "Combat monté",
	"ride_by_attack" : "Attaque au galop",
	"spirited_charge" : "Charge dévastatrice",
	"mounted_archery" : "Tir monté",
	"trample" : "Piétinement",

	// Turning
	"extra_turning" : "Emprise sur les morts vivants",
	"improved_turning" : "Science du renvoi",

	// Wildshape
	"natural_spell" : "Incantation animale",

	// Spellbook
	"spell_mastery" : "Maîtrise des sorts",

	// Spellcasting
	"combat_casting" : "Magie de guerre",
	"eschew_materials" : "Dispense de composantes matériels",

	// Spell Power
	"spell_focus" : "École renforcée",
	"greater_spell_focus" : "École supérieure",
	"augment_summoning" : "Amélioration des créatures convoquées",
	"spell_penetration" : "Efficacité des sorts accrue",
	"greater_spell_penetration" : "Efficacité des sorts supérieure",
	"improved_counterspell" : "Science du contresort",

	// Craft Magic Items
	"scribe_scroll" : "Écriture de parchemins",
	"brew_potion" : "Préparation de potions",
	"craft_wondrous_item" : "Création d'objets merveilleux",
	"craft_magic_arms_and_armor" : "Création d'armes et d'armures magiques",
	"craft_wand" : "Création de baguettes magiques",
	"craft_rod" : "Création de sceptres magiques",
	"craft_staff" : "Création de bâtons magiques",
	"forge_ring" : "Création d'anneaux magiques",

	// Metamagic
	"heighten_spell" : "Augmentation d'intensité",
	"silent_spell" : "Incantation silencieuse",
	"still_spell" : "Incantation statique",
	"extend_spell" : "Extension de durée",
	"enlarge_spell" : "Extension de portée",
	"empower_spell" : "Extension d'effet",
	"widen_spell" : "Extension de zone d'effet",
	"maximize_spell" : "Quintessence des sorts",
	"quicken_spell" : "Incantation rapide",
};

$msg.fts = {
	// Skills
	"acrobatic" : "Le personnage obtient un bonus de +2 sur tous ses tests d'Acrobaties et de Saut.",
	"agile" : "Le personnage obtient un bonus de +2 sur tous ses tests d'Équilibre et d'Évasion.",
	"alertness" : "Le personnage bénéficie d'un bonus de +2 sur tous ses tests de Détection et de Perception auditive.",
	"animal_affinity" : "Le personnage obtient un bonus de +2 sur tous ses tests de Dressage et d'Équitation.",
	"athletic" : "Le personnage obtient un bonus de +2 sur tous ses tests d'Escalade et de Natation.",
	"deceitful" : "Le personnage obtient un bonus de +2 sur tous ses tests de Contrefaçon et de Déguisement.",
	"deft_hands" : "Le personnage obtient un bonus de +2 sur tous ses tests d'Escamotage et de Maîtrise des cordes.",
	"diligent" : "Le personnage obtient un bonus de +2 sur tous ses tests de Décryptage et d'Éstimation.",
	"investigator" : "Le personnage obtient un bonus de +2 sur tous ses tests de Fouille et de Renseignement.",
	"magical_aptitude" : "Le personnage obtient un bonus de +2 sur tous ses tests d'Art de la magie et d'Utilisation des objets magiques.",
	"negotiator" : "Le personnage obtient un bonus de +2 sur tous ses tests de Diplomatie et de Psychologie.",
	"nimble_fingers" : "Le personnage obtient un bonus de +2 sur tous ses tests de Crochetage et de Désamorçage/sabotage.",
	"persuasive" : "Le personnage obtient un bonus de +2 sur tous ses tests de Bluff et d'Intimidation.",
	"self_sufficient" : "Le personnage obtient un bonus de +2 sur tous ses tests de Premiers secours et de Survie.",
	"stealthy" : "Le personnage obtient un bonus de +2 sur tous ses tests de Déplacement silencieux et de Discrétion.",

	// Skill Focus
	"skill_focus" : "Le personnage bénéficie d'un bonus de +3 à tous les tests concernant la compétence choisie.",

	// Saves
	"lightning_reflexes" : "Le personnage bénéficie d'un bonus de +2 aux jets de Réflexes.",
	"great_fortitude" : "Le personnage bénéficie d'un bonus de +2 à tous ses jets de Vigueur.",
	"iron_will" : "Le personnage bénéficie d'un bonus de +2 à tous ses jets de Volonté",

	// Resistances
	"endurance" : "Le personnage bénéficie d'un bonus de +4 sur chacun des tests et jets de sauvegarde suivants : les test de Natation joués pour résister à des dégâts temporaires, les tests de Constitution joués pour continuer à courir, les tests de Constitution joués pour éviter les dégâts non-létaux infligés par une marche forcée, les tests de Constitution joués pour retenir sa respiration, les tests de Constitution joués pour éviter les dégâts non-létaux infligés par la famine ou la soif, les jets de Vigueur joués pour éviter les dégâts non-létaux infligés par les climats chauds ou froids, ainsi que les jets de Vigueur joués pour résister aux dégâts infligés par l'asphyxie. De plus, le personnage peut dormir en armure légère ou intermédiaire sans se réveiller fatigué le lendemain.",
	"diehard" : "Lorsque le total de points de vie du personnage est compris entre –1 et –9, il se stabilise automatiquement. Le joueur n'a pas à lancer 1d100 chaque round pour savoir si son personnage perd 1 point de vie. Lorsque le total de points de vie du personnage est négatif, il peut choisir de se considérer comme hors de combat plutôt que mourant. Le joueur doit prendre cette décision dès que son personnage atteint un total de points de vie négatif (même si cela arrive en dehors de son tour de jeu). Si le personnage ne choisit pas cette option, il tombe aussitôt inconscient. Lorsqu'il utilise ce don, le personnage peut effectuer soit un déplacement simple, soit une action simple lors de son tour de jeu (mais pas les deux). Il est incapable d'accomplir une action complexe. Effectuer une action de mouvement n'aggrave pas ses blessures, mais s'il entreprend une action simple (ou toute autre action fatigante, y compris certaines actions libres comme lancer un sort à incantation rapide), le personnage subit 1 point de dégâts aussitôt après avoir accompli son action. Le personnage meurt immédiatement si son total de points de vie atteint –10.",
	"toughness" : "Le personnage gagne 3 points de vie supplémentaires.",

	// Survival
	"run" : "Lorsqu'il court, l'aventurier couvre une distance égale à cinq fois sa vitesse de déplacement normale (s'il ne porte aucune armure ou une armure légère et qu'il transporte un poids léger ou moins) ou quatre fois sa vitesse de déplacement (s'il porte une armure intermédiaire ou lourde ou s'il transporte un poids intermédiaire ou lourd). Lorsqu'il exécute un saut avec élan (voir la compétence Saut), il bénéficie d'un bonus de +4 sur son test de Saut. Enfin, le personnage conserve son bonus de Dextérité à la CA lorsqu'il court.",
	"track" : "Le personnage peut trouver des traces à l'aide de la compétence Survie, quel que soit le DD.", // TEMP : Incomplete desc
	"leadership" : "Ce don permet au personnage de s'attirer les services de compagnons d'armes et de suivants qui l'assistent de leur mieux. Voir la table ci-dessous pour connaître le type de compagnons d'armes et le nombre de suivants sur lesquels l'aventurier peut compter.",

	// Armor Proficiency
	"armor_proficiency_light" : "Lorsqu'un personnage est formé au port d'une armure, le malus d'armures aux tests associés à celle-ci ne s'applique qu'aux tests d'Acrobaties, Déplacement silencieux, Discrétion, Équilibre, Escalade, Escamotage, Évasion et Saut.",
	"armor_proficiency_medium" : "Lorsqu'un personnage est formé au port d'une armure, le malus d'armures aux tests associés à celle-ci ne s'applique qu'aux tests d'Acrobaties, Déplacement silencieux, Discrétion, Équilibre, Escalade, Escamotage, Évasion et Saut.",
	"armor_proficiency_heavy" : "Lorsqu'un personnage est formé au port d'une armure, le malus d'armures aux tests associés à celle-ci ne s'applique qu'aux tests d'Acrobaties, Déplacement silencieux, Discrétion, Équilibre, Escalade, Escamotage, Évasion et Saut.",

	// Shield Proficiency
	"shield_proficiency" : "Lorsque le personnage utilise un bouclier (autre qu'un pavois) au combat, il ne subit que les malus habituels.",
	"tower_shield_proficiency" : "Lorsque le personnage utilise un pavois au combat, il ne subit que les malus habituels.",
	"improved_shield_bash" : "Lorsque le personnage donne un coup de bouclier, il peut tout de même appliquer le bonus de bouclier de celui-ci à sa classe d'armure.",

	// Weapon Proficiency
	"simple_weapon_proficiency" : "Lorsqu'il utilise une arme courante, le personnage joue ses jets d'attaque normalement.",
	"martial_weapon_proficiency" : "Lorsqu'il utilise l'arme de guerre choisie, le personnage joue ses jets d'attaque normalement.",
	"exotic_weapon_proficiency" : "Lorsqu'il utilise l'arme exotique choisie, le personnage joue ses jets d'attaque normalement.",

	// Weapon Mastery
	"weapon_focus" : "Le personnage bénéficie d'un bonus de +1 à tous ses jets d'attaque lorsqu'il utilise son arme de prédilection.",
	"weapon_specialization" : "Le personnage obtient un bonus de +2 sur les jets de dégâts de l'arme choisie.",
	"greater_weapon_focus" : "Le personnage bénéficie d'un bonus de +1 à tous ses jets d'attaque lorsqu'il utilise l'arme choisie. Ce bonus se cumule avec tous les autres bonus aux jets d'attaque, y compris celui du don Arme de prédilection.",
	"greater_weapon_specialization" : "Le personnage obtient un bonus de +2 sur les jets de dégâts de l'arme choisie. Ce bonus se cumule avec tous les autres bonus aux jets de dégâts, y compris celui du don Spécialisation martiale.",
	"improved_critical" : "La zone de critique possible de l'arme choisie est doublée. Par exemple, une épée longue peut normalement obtenir une possibilité de coup critique sur un résultat de 19–20 au dé (2 nombres). Avec ce don, la zone de critique possible de cette arme passe à 17–20 (4 nombres).",

	// Martial Abilities
	"blind_fight" : "Lors d'un combat au corps à corps, chaque fois que le personnage rate son adversaire en raison du camouflage de ce dernier, il peut jeter une nouvelle fois 1d100 afin de voir s'il touche (voir Camouflage). Un assaillant invisible ne bénéficie d'aucun avantage offensif contre le personnage. Autrement dit, ce dernier ne perd pas son bonus de Dextérité à la CA et son adversaire n'a pas droit au bonus habituel de +2 des créatures invisibles. Un assaillant invisible conserve cependant ses avantages pour les attaques à distance. En cas de mauvaises conditions de visibilité, la vitesse de déplacement du personnage est deux fois moins réduite que la normale. Dans l'obscurité, il progresse donc à 75 % de sa vitesse de déplacement normale, au lieu de 50 % pour les autres créatures.",
	"combat_reflexes" : "Chaque round, le personnage a droit un nombre d'attaques d'opportunité supplémentaires égal à son bonus de Dextérité. Il ne peut pas porter plus d'une attaques d'opportunité par opportunité. Le personnage peut exécuter des attaques d'opportunité même s'il est pris au dépourvu.",
	"improved_initiative" : "Le personnage bénéficie d'un bonus de +4 au test d'initiative.",
	"quick_draw" : "Le personnage peut dégainer une arme par une action libre. Il peut aussi dégainer une arme dissimulée (voir la compétence Escamotage) par une action de mouvement. Grâce à ce don, un personnage qui combat à l'aide d'armes de jet bénéficie de son nombre d'attaques entier (ces armes fonctionnent alors plus ou moins comme les arcs).",
	"weapon_finesse" : "Lorsqu'il utilise une arme légère, une rapière, un fouet ou une chaîne cloutée (et que cette arme est destinée à une créature de sa catégorie de taille), le personnage peut choisir d'appliquer son bonus de Dextérité à ses jets d'attaque plutôt que celui de Force. Si le personnage utilise un bouclier, le malus d'armure aux tests imposé par ce dernier s'applique aux jets d'attaque.",

	// Offense Abilities
	"power_attack" : "Pendant son tour de jeu et avant d'effectuer ses jets d'attaque, le personnage peut choisir un nombre, qu'il applique en tant que malus à tous ses jets d'attaque au corps à corps et en tant que bonus à tous ses jets de dégâts au corps à corps. La valeur choisie ne peut dépasser son bonus de base à l'attaque. Les modificateurs aux jets d'attaque et aux dégâts s'appliquent jusqu'au prochain tour de jeu du personnage.",
	"cleave" : "Si le personnage inflige suffisamment de dégâts à son adversaire pour l'abattre (généralement en l'amenant à moins de 0 pv ou en le tuant), il peut porter immédiatement une attaque de corps à corps supplémentaire contre un autre ennemi de son choix à portée. Il ne peut pas faire un pas de placement avant de tenter cette nouvelle attaque. Une attaque d'enchaînement doit absolument être portée avec l'arme qui a porté le coup décisif, et bénéficie du même bonus à l'attaque. On ne peut faire appel à ce don qu'une seule fois par round.",
	"great_cleave" : "Ce don fonctionne comme Enchaînement, mais sans aucune limite au nombre d'attaques d'enchaînement que le personnage peut effectuer par round. Chaque fois qu'il abat un de ses adversaires, le personnage a droit à une attaque supplémentaire contre une autre cible.",
	"improved_bull_rush" : "Le personnage peut tenter une bousculade sans provoquer d'attaque d'opportunité de la part de la cible. Le personnage bénéficie de plus d'un bonus de +4 sur le test de Force opposé effectué pour repousser sa cible.",
	"improved_overrun" : "Lorsque le personnage tente un renversement, sa cible ne peut choisir de l'éviter. Le personnage bénéficie de plus d'un bonus de +4 sur le test de Force opposé effectué pour envoyer sa cible à terre.",
	"improved_sunder" : "Lorsque le personnage tente de détruire un objet tenu ou porté par un adversaire (comme une arme ou un bouclier), il ne s'expose pas à une attaque d'opportunité. De plus, le personnage bénéficie d'un bonus de +4 sur les jets d'attaque contre les objets tenus ou portés par un adversaire.",

	// Defense Abilities
	"dodge" : "Au cours de son tour de jeu, le personnage choisit un adversaire. Il bénéficie aussitôt d'un bonus d'esquive de +1 à la CA contre les attaques portées par cet adversaire.",
	"mobility" : "Le personnage bénéficie d'un bonus d'esquive de +4 à la CA contre les attaques d'opportunité provoquées lorsqu'il se déplace dans un espace contrôlé (ou lorsqu'il en sort). Il perd automatiquement ce bonus s'il se trouve dans une situation lui faisant perdre son bonus de Dextérité à la CA. Contrairement à la plupart des types de bonus, le bonus d'esquive est cumulatif (il peut par exemple s'ajouter à celui dont les nains bénéficient naturellement contre les géants).",
	"spring_attack" : "Lorsque le personnage entreprend une action d'attaque à l'aide d'une arme de corps à corps, il peut se déplacer avant et après avoir frappé, à condition que son mouvement total reste dans les limites de sa vitesse de déplacement. L'ensemble de ce déplacement ne provoque pas d'attaque d'opportunité de la part de la cible de son attaque, mais d'autres créatures peuvent éventuellement porter des attaques d'opportunité selon les cas. Il est impossible d'utiliser ce don en armure lourde. Pour bénéficier des avantages d'une attaque éclair, le personnage doit se déplacer d'au moins 1,50 mètre à la fois avant et après avoir porté son attaque.",

	// Combat Mastery
	"combat_expertise" : "Lorsqu'il utilise l'action d'attaque (ou d'attaque à outrance) au corps à corps, le personnage peut choisir un nombre, qu'il applique en tant que malus aux jets d'attaque et en tant que bonus d'esquive à la classe d'armure. La valeur choisie ne peut être supérieure ni à 5, ni à son bonus de base à l'attaque. Les modificateurs au jet d'attaque et à la CA durent jusqu'au prochain tour de jeu du personnage.",
	"whirlwind_attack" : "Lors d'une action d'attaque à outrance, le personnage peut sacrifier ses attaques normales pour porter à la place une attaque de corps à corps avec son bonus de base maximal à l'attaque contre chacun de ses adversaires dans sa zone de contrôle. Un personnage qui effectue une attaque en rotation sacrifie aussi toutes les attaques supplémentaires dont il bénéficie habituellement, quelle que soit leur origine (comme le don Enchaînement ou le sort rapidité).",
	"improved_disarm" : "Le personnage ne provoque pas d'attaque d'opportunité quand il tente de désarmer son ennemi, et ce dernier n'a aucune chance de le désarmer en retour. Le personnage bénéficie de plus d'un bonus de +4 sur le jet d'attaque opposé visant à désarmer son adversaire.",
	"improved_feint" : "Le personnage peut effectuer un test de Bluff pour tenter une feinte par une action de mouvement.",
	"improved_trip" : "Le personnage ne provoque pas d'attaque d'opportunité lorsqu'il tente de faire un croc- en-jambe à mains nues. De plus, il bénéficie d'un bonus de +4 sur le test de Force visant à faire tomber son adversaire. Si le personnage parvient à faire un croc-en-jambe au corps à corps, il peut automatiquement porter une attaque à son adversaire, comme s'il n'avait pas utilisé son attaque pour tenter le croc- en-jambe.",

	// Two-Weapon Fighting
	"two_weapon_fighting" : "Le personnage subit des malus moins importants lorsqu'il combat avec deux armes. Le malus sur la main principale est réduit de 2 points et le malus sur la main secondaire est réduit de 6 points.",
	"two_weapon_defense" : "Lorsqu'il tient une arme double ou deux armes (sans compter les armes naturelles ou les attaques à mains nues), le personnage bénéficie d'un bonus de bouclier de +1 à la classe d'armure. Lors d'une action de d'attaque sur la défensive ou de défense totale, ce bonus de bouclier passe à +2.",
	"improved_two_weapon_fighting" : "Lorsque le personnage combat avec deux armes, il peut porter deux attaques supplémentaires à l'aide de son arme secondaire au lieu d'une seule. Cependant, cette deuxième attaque secondaire subit un malus de –5 au jet d'attaque.",
	"greater_two_weapon_fighting" : "Le personnage obtient une troisième attaque avec son arme secondaire, mais avec un malus de –10.",

	// Unarmed Fighting
	"improved_unarmed_strike" : "Le personnage est considéré comme armé même quand il n'a pas d'arme. Cela signifie que le fait d'attaquer à mains nues un adversaire armé ne provoque pas d'attaque d'opportunité. De plus, le personnage a droit à une attaque d'opportunité chaque fois qu'on l'attaque à mains nues. Enfin, les attaques à mains nues du personnage peuvent infliger des dégâts létaux ou non-létaux, à sa discrétion.",
	"stunning_fist" : "Le joueur doit annoncer que son personnage donne un coup étourdissant avant d'effectuer son jet d'attaque (en cas d'échec, l'utilisation du don est donc perdue). Si son attaque à mains nues porte, son adversaire subit les dégâts normaux et doit réussir un jet de Vigueur (DD 10 + modificateur de Sagesse du personnage + 1/2 niveau du personnage) pour éviter d'être étourdi pendant 1 round (soit jusqu'au début du prochain tour de jeu du personnage). Un individu étourdi est incapable d'agir, perd son bonus de Dextérité à la CA et subit un malus de –2 à la classe d'armure. Chaque jour, le personnage peut tenter un nombre de coups étourdissants égal à un quart de son niveau global, dans la limite d'un par round. Les créatures artificielles, les morts- vivants, les plantes et les vases, ainsi que les créatures intangibles et les créatures immunisées contre les coups critiques ne peuvent être étourdies.",
	"deflect_arrows" : "Le personnage doit avoir au moins une main libre pour faire appel à ce don. Une fois par round, lorsqu'une arme à distance devrait le toucher, il peut la dévier à l'ultime seconde et ne subir aucun dégâts. Le personnage doit être conscient de l'attaque. Il ne doit pas être pris au dépourvu. Le geste extrêmement rapide qu'il effectue ne compte pas comme une action. Il est impossible de parer les projectiles massifs, comme un rocher lancé par un géant, et les attaques à distance générées par des sorts, comme une flèche acide de Melf.",
	"snatch_arrows" : "Lorsqu'il utilise le don Parade de projectiles, le personnage peut intercepter l'arme au lieu de simplement le dévier. Les armes de jet, comme les lances ou les haches de lancer, peuvent être relancées immédiatement (même si ce n'est pas le tour de jeu du personnage), ou conservées pour un usage ultérieur. Il faut au moins une main libre pour utiliser ce don.",
	"improved_grapple" : "You do not provoke an attack of opportunity when you make a touch attack to start a grapple. You also gain a +4 bonus on all grapple checks, regardless of whether you started the grapple.",

	// Archery
	"rapid_reload" : "Le temps nécessaire pour que le personnage recharge son arme est réduit à une action libre (pour une arbalète de poing, une arbalète légère ou une fronde) ou une action de mouvement (pour une arbalète lourde). Recharger une arme à projectiles provoque tout de même une attaque d'opportunité. Un personnage qui possède ce don pour une arbalète de poing, une arbalète légère ou une fronde peut tirer plusieurs fois par round lors d'une attaque à outrance, comme s'il utilisait un arc.",
	"point_blank_shot" : "Le personnage bénéficie d'un bonus de +1 aux jets d'attaque et de dégâts avec n'importe quelle arme à distance, à condition que sa cible soit distante de 9 mètres ou moins.",
	"far_shot" : "Si le personnage utilise une arme à projectiles, par exemple un arc, son facteur de portée augmente de 50% (multipliez-le par 1,5). S'il utilise une arme de jet, le facteur de portée est doublé.",
	"precise_shot" : "Le personnage peut tirer sur un adversaire impliqué dans un combat au corps à corps sans subir le malus habituel de –4 sur son jet d'attaque.",
	"improved_precise_shot" : "Les attaques à distance du personnage ignorent le bonus à la classe d'armure dont bénéficient les créatures derrière un abri autre que total, ainsi que la chance d'échec lié à un camouflage autre que total. Un abri total ou un camouflage total conservent leurs effets habituels. De plus, quand le personnage tire ou lance une arme à distance sur un agrippé en situation de lutte, il frappe automatiquement l'adversaire visé.",
	"rapid_shot" : "Lorsqu'il entreprend une action d'attaque à outrance avec une arme à distance, le personnage a droit à une attaque supplémentaire. Cette attaque se fait avec son bonus de base à l'attaque maximal, mais toutes les attaques du round subissent un malus de –2 (l'attaque supplémentaire y compris).",
	"manyshot" : "Au prix d'une action simple, le personnage peut tirer deux flèches sur un adversaire unique situé à 9 mètres ou moins. Le personnage effectue un seul jet d'attaque (avec un malus de –4) qui s'applique aux deux flèches. Les flèches infligent des dégâts normaux. Si son bonus de base à l'attaque est au moins de +11, le personnage peut choisir de tirer trois flèches d'un coup au lieu de deux, mais avec un malus de –6 au lieu de –4. À partir d'un bonus de base à l'attaque de +16, il peut aussi tirer quatre flèches, avec un malus de –8. Une éventuelle réduction des dégâts ou résistance s'applique séparément sur chaque flèche tirée.",
	"shot_on_the_run" : "Lorsqu'il entreprend une action d'attaque avec une arme à distance, le personnage peut se déplacer avant et après son attaque, du moment que le total de la distance parcourue durant le round ne dépasse pas sa vitesse de déplacement.",

	// Mounted Combat
	"mounted_combat" : "Lorsque sa monture est frappée au combat (dans la limite d'une fois par round), le personnage peut tenter d'annuler le coup en réussissant un test d'Équitation. C'est une réaction, pas une action. Le coup est annulé à condition que le test de compétence du personnage soit supérieur au jet d'attaque de l'adversaire. (Le test d'Équitation devient en quelque sorte la CA de la monture).",
	"ride_by_attack" : "Lorsqu'un personnage lance une charge à cheval (ou toute autre monture), il peut se déplacer et attaquer comme lors d'une charge normale, puis se déplacer de nouveau en poursuivant son mouvement (en ligne droite). Son mouvement total au cours du round ne peut pas dépasser le double de sa vitesse de déplacement monté. Le mouvement du personnage et de sa monture ne provoque alors pas d'attaque d'opportunité de la part de l'adversaire qu'ils chargent.",
	"spirited_charge" : "Quand le personnage conduit une charge à cheval (ou toute autre monture), les dégâts qu'il cause sont doublés s'il utilise une arme de corps à corps (ou triplés s'il s'agit d'une lance d'arçon).",
	"mounted_archery" : "Le malus subi normalement quand on utilise une arme à distance à dos de monture est divisé par deux : –2 au lieu de –4 si la monture effectue un déplacement double, et –4 au lieu de –8 si elle court.",
	"trample" : "Lors d'une tentative de renversement monté, la cible du personnage ne peut choisir de l'éviter. La monture du personnage peut porter un coup de sabot contre un adversaire renversé, en bénéficiant du bonus habituel au jet d'attaque de +4 contre les créatures à terre.",

	// Turning
	"extra_turning" : "À chaque fois qu'il choisit ce don, le personnage acquiert quatre utilisations quotidiennes supplémentaires de son pouvoir de renvoi ou d'intimidation de créatures. Si le personnage peut renvoyer ou intimider plus d'un type de créature (comme un prêtre d'alignement bon ayant accès au pouvoir accordé du domaine du Feu, qui peut repousser les morts-vivants et les créatures du Feu, et intimider les créatures de l'Eau), il peut utiliser chacun de ses pouvoirs de renvoi et d'intimidation quatre fois de plus par jour.",
	"improved_turning" : "Le personnage peut utiliser son pouvoir de renvoi ou d'intimidation avec un bonus de +1 au niveau de la classe qui lui offre cette aptitude.",

	// Wildshape
	"natural_spell" : "Le personnage peut exécuter les composantes verbales et gestuelles des sorts lorsqu'il est sous forme animale. Il est aussi possible d'utiliser des composantes matérielles ou des focaliseurs en possession du personnage, même si ceux-ci sont fondus dans sa forme actuelle. Ce don ne permet pas d'utiliser des objets magiques qu'un animal ne pourrait pas utiliser normalement, pas plus qu'il ne permet de parler sous forme animale.",

	// Spellbook
	"spell_mastery" : "Chaque fois que le personnage obtient ce don, il peut sélectionner un nombre de sorts égal à son modificateur d'Intelligence parmi les sorts de magicien qu'il connaît déjà. Il peut alors préparer les sorts sélectionnés sans compulser son grimoire profane.",

	// Spellcasting
	"combat_casting" : "Le personnage bénéficie d'un bonus de +4 à ses tests de Concentration lorsqu'il tente de lancer un sort sur la défensive, ou lorsqu'il tente de lancer un sort alors qu'il est agrippé ou immobilisé en situation de lutte.",
	"eschew_materials" : "Le personnage peut lancer les sorts nécessitant une composante matérielle coûtant 1 po ou moins sans utiliser cette composante. (L'incantation provoque tout de même des attaques d'opportunité.) Le personnage doit fournir normalement les composantes matérielles dont le prix est supérieur à 1 po.",

	// Spell Power
	"spell_focus" : "Le DD des jets de sauvegarde contre tous les sorts de l'école choisie lancés par le personnage augmente de +1.",
	"greater_spell_focus" : "Le degré de difficulté (DD) des jets de sauvegarde contre les sorts de l'école choisie lancés par le personnage augmente de +1. Ce bonus se cumule avec celui d'École renforcée.",
	"augment_summoning" : "Toutes les créatures que le personnage convoque grâce à un sort de convocation quelconque obtiennent un bonus d'altération de +4 en Force et en Constitution pendant la durée du sort qui les a convoquées.",
	"spell_penetration" : "Le personnage bénéficie d'un bonus de +2 à son test de niveau de lanceur de sorts (1d20 + niveau de lanceur de sorts) lorsqu'il s'agit de vaincre la résistance à la magie d'une cible.",
	"greater_spell_penetration" : "Le personnage obtient un bonus de +2 sur les tests de niveau de lanceur de sorts (1d20 + niveau de lanceur de sorts) effectués pour vaincre la résistance à la magie d'une créature. Ce bonus se cumule avec celui d'Efficacité des sorts accrue.",
	"improved_counterspell" : "Lorsque le personnage tente de contrer un sort, il peut utiliser n'importe quel sort de la même école et d'au moins un niveau de sort supérieur à la place du sort d'origine.",

	// Craft Magic Items
	"scribe_scroll" : "Le personnage peut écrire un parchemin à partir de tout sort qu'il connaît, ce qui lui prend 1 jour par tranche de 1000 po du prix de base. Le prix de base d'un parchemin est de 25 po × son niveau de lanceur de sorts × niveau du sort reproduit. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base du parchemin et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). Un parchemin dont le sort nécessite une composante matérielle coûteuse ou un sacrifice en termes de points d'expérience exige une dépense supplémentaire. En plus du prix de base indiqué ci-dessus, le personnage doit acquitter le prix exigé par le sort (et, le cas échéant, sacrifier les PX ",
	"brew_potion" : "Le personnage peut créer une potion reproduisant les effets de n'importe quel sort du 3e niveau maximum. La préparation demande 1 jour. C'est à ce moment que l'aventurier décide du niveau de lanceur de sorts de la potion, qui doit être compris entre le niveau minimum permettant de lancer le sort correspondant et le niveau de lanceur de sorts actuel du personnage. Le prix de base d'une potion est de 50 po × son niveau de lanceur de sorts × niveau du sort reproduit. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base de la potion et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base indiqué). Lorsque le personnage prépare la potion, il fait tous les choix qui devraient normalement lui revenir au moment de l'incantation. Quiconque boit la potion devient le sujet du sort. Une potion dont le sort stocké nécessite une composante matérielle coûteuse ou un prix en points d'expérience exige une dépense supplémentaire. En plus du coût de base indiqué ci-dessus, le personnage doit acquitter le prix exigé par le sort (et, le cas échéant, sacrifier les PX correspondants).",
	"craft_wondrous_item" : "Le personnage peut créer n'importe quel objet merveilleux, du moment qu'il satisfait aux conditions. Le processus de fabrication prend 1 jour par tranche de 1000 po du prix de base de l'objet. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base de l'objet et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). Le personnage peut également réparer un objet magique cassé s'il remplit les conditions de création de ce type d'objet. La procédure à suivre est la même, mais tous les chiffres sont réduits de moitié (deux fois moins de temps, de PX et de matières premières). Certains objets merveilleux s'accompagnent d'un coût supplémentaire, mentionné dans leur description. Ce surcoût vient en plus du prix de base. Le personnage doit s'en acquitter s'il veut pouvoir fabriquer (ou réparer) l'objet en question.",
	"craft_magic_arms_and_armor" : "Le personnage peut créer n'importe quel bouclier, arme ou armure magiques, du moment qu'il satisfait aux conditions. Le processus de fabrication prend 1 jour par tranche de 1000 po du prix de base des altérations à apporter à l'objet. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base de ces altérations et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). L'arme, armure ou bouclier devant être enchanté doit nécessairement être un objet de maître (son coût n'est pas inclus dans le total précédent). Le personnage peut également réparer armes, armures ou boucliers cassés s'il remplit les conditions de création de ce type d'objet. La procédure à suivre est la même, mais tous les chiffres sont réduits de moitié (deux fois moins de temps, de PX et de matières premières).",
	"craft_wand" : "Le personnage peut créer une baguette stockant n'importe quel sort du 4e niveau maximum. Le processus de fabrication prend 1 jour par tranche de 1000 po du prix de base de l'objet (le prix de base d'une baguette étant de 750 po × son niveau de lanceur de sorts × niveau du sort que l'objet contient). Le personnage doit payer un nombre de points d'expérience égal à 1/25e du prix de base de la baguette et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). Une baguette nouvellement créée contient 50 charges. Une baguette dont le sort stocké nécessite une composante matérielle coûteuse ou un sacrifice en termes de points d'expérience exige une dépense supplémentaire. En plus du prix de base indiqué ci-dessus, le personnage doit acquitter cinquante fois le prix exigé par le sort (et, le cas échéant, sacrifier cinquante fois les PX correspondants).",
	"craft_rod" : "Le personnage peut créer n'importe quel sceptre, du moment qu'il satisfait aux conditions. Le processus de fabrication prend 1 jour par tranche de 1000 po du prix de base de l'objet. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base du sceptre et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). Certains sceptres exigent un coût supplémentaire en termes de composantes matérielles et/ou de points d'expérience, comme mentionné dans leur description. Dans ce cas, ce surcoût vient s'ajouter au prix de base de l'objet.",
	"craft_staff" : "Le personnage peut créer n'importe quel bâton, du moment qu'il satisfait aux conditions. Le processus de fabrication prend 1 jour par tranche de 1000 po du prix de base de l'objet. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base du bâton et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). Un bâton nouvellement créé contient 50 charges. Certains bâtons exigent un coût supplémentaire en termes de composantes matérielles et/ou de points d'expérience, comme mentionné dans leur description. Dans ce cas, ce surcoût vient s'ajouter au prix de base de l'objet.",
	"forge_ring" : "Le personnage peut créer n'importe quel anneau magique, du moment qu'il satisfait aux conditions. Le processus de fabrication prend 1 jour par tranche de 1000 po du prix de base de l'objet. Le personnage doit sacrifier un nombre de points d'expérience égal à 1/25e du prix de base de l'anneau et acheter les matières premières nécessaires (pour une valeur totale de la moitié du prix de base). Le personnage peut également réparer un anneau cassé s'il remplit les conditions de création de ce type d'anneau. La procédure à suivre est la même, mais tous les chiffres sont réduits de moitié (deux fois moins de temps, de PX et de matières premières). Certains anneaux s'accompagnent d'un coût supplémentaire, mentionné dans leur description. Le personnage doit acquitter ce surcoût s'il veut pouvoir fabriquer (ou réparer) l'anneau en question.",

	// Metamagic
	"heighten_spell" : "Ce don permet d'amplifier l'intensité du sort choisi en augmentant son niveau effectif (d'un ou plusieurs niveaux sans toutefois dépasser le 9e). Contrairement aux autres dons de métamagie, il accroît réellement le niveau du sort modifié. Toutes les propriétés du sort dépendantes de son niveau (telles que le DD de son jet de sauvegarde et sa capacité à traverser un globe d'invulnérabilité partielle) sont calculées en fonction de son nouveau niveau, choisi par le personnage. Un sort à intensité augmentée nécessite un emplacement de sort de son nouveau niveau effectif.",
	"silent_spell" : "Un sort à incantation silencieuse se lance sans composante verbale. Les sorts sans composante verbale ne sont pas affectés. Un sort à incantation silencieuse nécessite un emplacement de sort d'un niveau de plus que son niveau réel.",
	"still_spell" : "Un sort à incantation statique se lance sans composante gestuelle. Les sorts sans composante gestuelle ne sont pas affectés. Un sort à incantation statique nécessite un emplacement de sort d'un niveau de plus que son niveau réel.",
	"extend_spell" : "Un sort à durée étendue dure deux fois plus longtemps qu'indiqué dans sa description. Les sorts permanents, instantanés, ou dont la durée dépend de la concentration du personnage ne sont pas concernés. Un sort à durée étendue nécessite un emplacement de sort d'un niveau de plus que son niveau réel.",
	"enlarge_spell" : "Le personnage peut altérer un sort dont la portée est courte, moyenne ou longue afin d'en doubler cette dernière. Une fois étendue, une portée courte devient alors égale à 15 mètres + 1,50 mètre/niveau, une portée moyenne à 60 mètres + 6 mètres/niveau et une portée longue à 240 mètres + 24 mètres/niveau. Un sort à portée étendue nécessite un emplacement de sort d'un niveau de plus que son niveau réel. Les sorts dont la portée ne s'exprime pas par une mesure physique ou dont la portée n'est ni courte, ni moyenne, ni longue, ne peuvent être affectés par ce don. ",
	"empower_spell" : "Tous les effets numériques et aléatoires d'un sort à effet étendu augmentent de 50%. Ce sort pourra ainsi causer davantage de dégâts, soigner plus de points de vie, affecter des cibles supplémentaires, etc. Les jets de sauvegarde et les jets opposés (comme celui que l'on joue en cas de dissipation de la magie) ne sont pas affectés, pas plus que les sorts sans variable numérique et aléatoire. Un sort à effet étendu nécessite un emplacement de sort de deux niveaux de plus que son niveau réel.",
	"widen_spell" : "Le personnage peut altérer un sort dont la zone d'effet est une émanation, une étendue, une ligne ou un rayonnement afin d'augmenter la surface couverte. Toutes les données numériques déterminant la surface de la zone d'effet augmentent de +100%. Un sort à zone d'effet étendue nécessite un emplacement de sort de trois niveaux de plus que son niveau réel. Les sorts dont la zone d'effet n'est pas d'un des quatre types précédents, ou qui ne sont pas définis par une zone d'effet, ne peuvent être affectés par ce don.",
	"maximize_spell" : "Tous les effets numériques et aléatoires de la quintessence d'un sort prennent automatiquement leur valeur maximale, tant en termes de points de dégâts causés que de points de vie rendus, de cibles affectées, etc. Les jets de sauvegarde et les jets opposés (comme celui que l'on joue en cas de dissipation de la magie) ne sont pas affectés, pas plus que les sorts sans données numériques et aléatoires. La quintessence d'un sort nécessite un emplacement de sort de trois niveaux de plus que son niveau réel. Dans le cas de la quintessence d'un sort à effet étendu, les deux effets s'appliquent séparément sur le sort d'origine. L'effet total est la somme du résultat maximum et de la moitié du résultat lancé normalement. Ainsi, une quintessence de boule de feu à effet étendu lancée par un magicien de niveau 15 inflige jusqu'à 60 + (10d6/2) points de dégâts.",
	"quicken_spell" : "L'incantation du sort ne demande qu'une action libre et le personnage peut se livrer à une autre action (et même jeter un second sort !) au cours du même round. Il n'est possible de lancer qu'un sort à incantation rapide par round. Si le temps d'incantation du sort est supérieur à un round, il est impossible de l'accélérer avec ce don. Un sort à incantation rapide nécessite un emplacement de sort de quatre niveaux de plus que son niveau réel. Lancer un sort à incantation rapide ne provoque pas d'attaque d'opportunité.",
}

////////////////////////////////////////////////////////////////////////////////
// * Special Abilities
////////////////////////////////////////////////////////////////////////////////

$lng.sab = {

	// Core
	"ability_damage" : "Affaiblissement de caractéristique",
	"ability_drain" : "Diminution de caractéristique",
	"alternate_form" : "Transformation",
	"antimagic" : "Antimagie",
	"blindsense" : "Perception aveugle",
	"blindsight" : "Vision aveugle",
	"breath_weapon" : "Souffle",
	"burrow" : "Creusement",
	"change_shape" : "Change-forme",
	"climb" : "Escalade",
	"cold_immunity" : "Immunité contre le froid",
	"constrict" : "Constriction",
	"damage_reduction" : "Réduction des dégâts",
	"darkvision" : "Vision dans le noir",
	"death_attack" : "Attaque de mort",
	"disease" : "Maladie",
	"distraction" : "Distraction",
	"energy_drain" : "Absorption d'énergie",
	"etherealness" : "Passage dans l'éther",
	"evasion" : "Esquive totale",
	"fast_healing" : "Guérison accélérée",
	"fear" : "Terreur",
	"fire_immunity" : "Immunité contre le feu",
	"fly" : "Vol",
	"frightful_presence" : "Présence terrifiante",
	"gaseous_form" : "État gazeux",
	"gaze_attack" : "Regard",
	"immunities" : "Immunités",
	"improved_evasion" : "Esquive extraordinaire",
	"improved_grab" : "Étreinte",
	"incorporeality" : "Intangibilité",
	"invisibility" : "Invisibilité",
	"level_loss" : "Perte de niveau",
	"low_light_vision" : "Vision nocturne",
	"manufactured_weapons" : "Armes manufacturées",
	"natural_weapons" : "Armes naturelles",
	"nonabilities" : "Caractéristiques inexistantes",
	"paralysis" : "Paralysie",
	"poison" : "Poison/venin",
	"polymorph" : "Métamorphose",
	"pounce" : "Bond",
	"powerful_charge" : "Charge en puissance",
	"psionics" : "Facultés psioniques",
	"rake" : "Pattes arrière",
	"ray" : "Rayon",
	"regeneration" : "Régénération",
	"resistance_to_energy" : "Résistance à une énergies destructive",
	"scent" : "Odorat",
	"sonic_attack" : "Attaque sonique",
	"spell_immunity" : "Immunité contre les sorts",
	"spell_like_abilities" : "Pouvoirs magiques",
	"spell_resistance" : "Résistance à la magie",
	"spells" : "Sorts",
	"summon" : "Convocation",
	"swallow_whole" : "Engloutissement",
	"swarm_attack" : "Attaque de nuée",
	"swim" : "Nage",
	"telepathy" : "Télépathie",
	"trample" : "Piétinement",
	"tremorsense" : "Perception des vibrations",
	"turn_resistance" : "Résistance au renvoi des morts-vivants",
	"vulnerability_to_energy" : "Vulnérabilité à une énergie destructive ",

	// Monster Abilities
	"armor_discomfort" : "Armure inconfortable",
	"rend" : "Éventration",

	// Types
	"plant_traits": "Traits des plantes",
	"undead_traits": "Traits des morts-vivants",
	"construct_traits": "Traits des créatures artificielles",
	"elemental_traits": "Traits des élémentaires",
	"ooze_traits": "Traits des vases",
	"vermin_traits": "Traits des vermines",

	// Subtypes
	"angel_traits": "Traits des anges",
	"archon_traits": "Traits des archons",
	"demon_traits": "Traits des démons",
	"devil_traits": "Traits des diables",
	"incorporeal_traits": "Traits des créatures intangibles",
	"swarm_traits": "Traits des nuées",

	// Humans
	"human_traits": "Traits des humains",

	// Dwarves
	"dwarf_traits": "Traits des nains",
	"duergar_traits": "Traits des duergars",
	"deep_dwarf_traits": "Traits des nains des profondeurs",

	// Elves
	"elf_traits": "Traits des elfes",
	"aquatic_elf_traits": "Traits des elfes aquatiques",
	"drow_traits": "Traits des drows",
	"gray_elf_traits": "Traits des elfes gris",
	"wild_elf_traits": "Traits des elfes sauvages",
	"wood_elf_traits": "Traits des elfes des bois",
	"half_elf_traits": "Traits des demi-elfes",

	// Gnomes
	"gnome_traits": "Traits des gnomes",
	"svirfneblin_traits": "Traits des svirfnebelins",
	"forest_gnome_traits": "Traits des gnomes des forêts",

	// Halflings
	"halfling_traits": "Traits des halfelins",
	"deep_halfling_traits": "Traits des halfelins des profondeurs",
	"tallfellow_halfling_traits" : "Traits des halfelins grand-gars",

	// Cross-class Features
	"trap_sense" : "Sens des pièges",
	"uncanny_dodge" : "Esquive instinctive",
	"improved_uncanny_dodge" : "Esquive instinctive supérieure",
	"summon_familiar" : "Appel de familier",
	"animal_companion" : "Compagnon animal",
	"wild_empathy" : "Empathie sauvage",
	"woodland_stride" : "Déplacement facilité",
	"timeless_body" : "Éternelle jeunesse",
	"bonus_feat" : "Don supplémentaire",

	// Fighter
	"fighter_features" : "Caractéristiques des guerriers",

	// Barbarian
	"barbarian_features" : "Caractéristiques des barbares",
	"barbarian_fast_movement" : "Déplacement accéléré",
	"barbarian_rage" : "Rage de berserker",
	"barbarian_damage_reduction" : "Réduction des dégâts",
	"greater_rage" : "Rage de grand berserker",
	"indomitable_will" : "Volonté indomptable",
	"tireless_rage" : "Rage sans fatigue",
	"mighty_rage" : "Rage de maître berserker",

	// Paladin
	"paladin_features" : "Caractéristiques des paladins",
	"aura_of_good" : "Aura de Bien",
	"detect_evil" : "Détection du Mal",
	"smite_evil" : "Châtiment du Mal",
	"divine_grace" : "Grâce divine",
	"lay_on_hands" : "Imposition des mains",
	"aura_of_courage" : "Aura de bravoure",
	"divine_health" : "Santé divine",
	"turn_undead" : "Renvoi des morts-vivants",
	"special_mount" : "Destrier de paladin",
	"remove_disease" : "Guérison des maladies",

	// Ranger
	"ranger_features" : "Caractéristiques des rôdeurs",
	"favored_enemy" : "Ennemi juré",
	"ranger_combat_style" : "Style de combat",
	"ranger_improved_combat_style" : "Science du style de combat",
	"swift_tracker" : "Pistage accéléré",
	"ranger_combat_style_mastery" : "Maîtrise du style de combat",
	"camouflage" : "Camouflage",
	"hide_in_plain_sight" : "Discrétion totale",

	// Monk
	"monk_features" : "Caractéristiques des moines",
	"monk_ac_bonus" : "Bonus de moine à la CA",
	"monk_unarmed_strike" : "Combat à mains nues",
	"flurry_of_blows" : "Déluge de coups",
	"monk_fast_movement" : "Déplacement accéléré",
	"still_mind" : "Sérénité",
	"ki_strike_magic" : "Frappe ki (magie)",
	"slow_fall" : "Chute ralentie",
	"purity_of_body" : "Pureté physique",
	"wholeness_of_body" : "Plénitude physique",
	"ki_strike_lawful" : "Frappe ki (loi)",
	"diamond_body" : "Corps de diamant",
	"greater_flurry" : "Déluge de coups supérieur",
	"abundant_step" : "Pas chassé",
	"diamond_soul" : "Âme de diamant",
	"quivering_palm" : "Paume vibratoire",
	"ki_strike_adamantine" : "Frappe ki (adamantium)",
	"tongue_of_the_sun_and_moon" : "Langues du soleil et de la lune",
	"empty_body" : "Désertion de l'âme",
	"perfect_self" : "Perfection de l'être",

	// Cleric
	"cleric_features" : "Caractéristiques des prêtres",
	"turn_or_rebuke_undead" : "Renvoi ou intimidation des morts-vivants",
	"aura" : "Aura",

	// Cleric Domains
	"air_domain" : "Air",
	"animal_domain" : "Faune",
	"chaos_domain" : "Chaos",
	"death_domain" : "Mort",
	"destruction_domain" : "Destruction",
	"earth_domain" : "Terre",
	"evil_domain" : "Mal",
	"fire_domain" : "Feu",
	"good_domain" : "Bien",
	"healing_domain" : "Guérison",
	"knowledge_domain" : "Connaissance ",
	"law_domain" : "Loi",
	"luck_domain" : "Chance",
	"magic_domain" : "Magie",
	"plant_domain" : "Flore",
	"protection_domain" : "Protection",
	"strength_domain" : "Force",
	"sun_domain" : "Soleil",
	"travel_domain" : "Voyage",
	"trickery_domain" : "Duperie",
	"war_domain" : "Guerre",
	"water_domain" : "Eau",

	// Cleric Domains (non-core)
	"artifice_domain" : "Artisanat",
	"charm_domain" : "Charme",
	"community_domain" : "Communauté",
	"creation_domain" : "Création",
	"darkness_domain" : "Obscurité",
	"glory_domain" : "Gloire",
	"liberation_domain" : "Libération",
	"madness_domain" : "Folie",
	"nobility_domain" : "Noblesse",
	"repose_domain" : "Repos éternel",
	"rune_domain" : "Runes",
	"skalykind_domain" : "Reptiles",
	"weather_domain" : "Climat",

	// Druid
	"druid_features" : "Caractéristiques des druides",
	"nature_sense" : "Instinct naturel",
	"trackless_step" : "Absence de traces",
	"resist_nature_s_lure" : "Résistance à l'appel de la nature",
	"wild_shape" : "Forme animale",
	"wild_shape_large" : "Forme animale (taille G)",
	"venom_immunity" : "Immunité contre le venin",
	"wild_shape_tiny" : "Forme animale (taille TP)",
	"wild_shape_plant" : "Forme animale (plantes)",
	"a_thousand_faces" : "Mille visages",
	"wild_shape_huge" : "Forme animale (taille TG)",
	"wild_shape_elemental" : "Forme élémentaire",
	"wild_shape_huge_elemental" : "Forme élémentaire (taille TG)",

	// Rogue
	"rogue_features" : "Caractéristiques des roublards",
	"sneak_attack" : "Attaque sournoise",
	"rogue_special_ability" : "Pouvoir spécial",

	// Bard
	"bard_features" : "Caractéristiques des bardes",
	"bardic_music" : "Musique de barde",
	"bardic_knowledge" : "Savoir bardique",
	"countersong" : "Contre-chant",
	"fascinate" : "Fascination",
	"inspire_courage" : "Inspiration vaillante",
	"inspire_competence" : "Inspiration talentueuse",
	"suggestion" : "Suggestion",
	"inspire_greatness" : "Inspiration héroïque",
	"song_of_freedom" : "Chant de liberté",
	"inspire_heroics" : "Inspiration intrépide",
	"mass_suggestion" : "Suggestion de groupe",

	// Wizard
	"wizard_features" : "Caractéristiques des magiciens",
	"school_specialization" : "École de prédilection",

	// Sorcerer
	"sorcerer_features" : "Caractéristiques des ensorceleurs",
}

$msg.sab = {

	// Core
	"ability_score_loss" : "<p>Certaines attaques réduisent la valeur des caractéristiques de l’adversaire. Leur effet peut être temporaire (affaiblissement) ou permanent (diminution).</p><p>Dans certains cas, cette attaque autorise un jet de Vigueur dont le DD est égal à 10 + ½ DV raciaux de la créature + son modificateur de Charisme (le DD exact est calculé dans la description de la créature). Si aucun jet de sauvegarde n’est mentionné, c’est que l’attaque n’en autorise pas.</p><p><strong>Affaiblissement de caractéristique</strong>. Cette attaque réduit temporairement une caractéristique de l’adversaire. La description de la créature indique la caractéristique affectée et le nombre de points perdus à chaque attaque réussie. En cas de coup critique, la cible perd deux fois plus de points de caractéristique (s’il faut normalement jeter un dé, jetez-  en deux). Les points de caractéristique temporairement affaiblis sont récupérés au rythme de 1 par jour et par caractéristique (deux fois plus vite si le blessé ne fait que se reposer) ou grâce aux sorts <em>Restauration partielle</em>, <em>Restauration</em> et <em>Restauration suprême</em>.</p><p><strong>Diminution de caractéristique</strong>. Cette attaque réduit de façon permanente une caractéristique de l’adversaire quand la créature touche au corps à corps. La description de la créature indique la caractéristique concernée et le nombre de points perdus. En cas de coup critique, la cible perd deux fois plus de points de caractéristique (si la quantité de points perdus est déterminée par le jet d’un dé, jetez-le deux fois et additionnez les résultats). Sauf indication contraire, l’attaquant récupère 5 points de vie temporaires par attaque réussie (10 sur un coup critique). Ces points de vie temporaires persistent pendant 1 heure. Pour leur part, les points de diminution permanente ne guérissent pas naturellement et ne peuvent être récupérés qu’à l’aide de <em>Restauration</em> et <em>Restauration suprême</em>.</p>",
	"alternate_form" : "<p>Une créature pourvue de cette particularité a le pouvoir d’adopter une ou plusieurs formes. L’effet fonctionne sur le même principe que le sort <em>Métamorphose</em>, si ce n’est que la créature est limitée aux formes précisées dans sa description et que le changement ne lui restitue aucun point de vie. La transformation engendre les modifications suivantes :</p><ul><li>La créature conserve le type et le sous-type de sa forme originelle, mais elle acquiert la taille de la nouvelle.</li><li>Elle perd les armes naturelles, l’armure naturelle, les modes de déplacement et les attaques spéciales extraordinaires de la forme d’origine.</li><li>Elle gagne les armes naturelles, l’armure naturelle, les modes de déplacement et les attaques spéciales extraordinaires de sa nouvelle forme.</li><li>Elle conserve les particularités de sa forme d’origine, mais ne gagne pas celles de la nouvelle.</li><li>Elle conserve les pouvoirs magiques et attaques surnaturelles de sa forme d’origine (à l’exception des souffles et des regards), mais ne gagne pas ceux de la nouvelle.</li><li>Elle gagne les valeurs de caractéristique physiques (For, Dex et Con) de sa nouvelle forme, mais conserve les valeurs mentales de sa forme d’origine.</li><li>Sauf exception mentionnée dans sa description, la créature conserve toutes les autres caractéristiques de sa forme origine, incluant (mais pas nécessairement limitativement) ses DV, ses points de vie, ses points de compétences, ses dons, son bonus à l’attaque de base et ses bonus aux jets de sauvegarde.</li><li>Elle conserve les facultés de lanceur de sorts de sa forme d’origine. Toutefois, elle doit être capable de parler intelligiblement pour jeter des sorts à composantes verbales et doit posséder des mains humanoïdes pour lancer des sorts à composantes gestuelles.</li><li>Enfin, le sujet ressemble effectivement à une créature de la nouvelle forme, ce qui lui confère un bonus de +10 aux tests de Déguisement quand il utilise ce pouvoir pour se déguiser.</li><li>Tout équipement que la créature ne peut pas tenir ou porter dans sa nouvelle forme tombe au sol dans l’espace que la créature occupe. Si la créature change de taille, tout équipement que la créature peut tenir ou porter dans sa nouvelle forme est modifié pour s’adapter à sa nouvelle taille (les créatures non humaines transformées ne peuvent pas porter d’armure conçue pour une forme humaine, et réciproquement). L’équipement transformé reprend sa taille normale s’il tombe au sol.</li></ul>",
	"antimagic" : "<p>Le sort <em>Zone d’antimagie</em> et les effets d’antimagie répriment tous les effets magiques. Les effets de l’antimagie sont les suivants.</p><ul><li>Sorts, pouvoirs magiques et pouvoirs surnaturels cessent de fonctionner dans une aire d’antimagie (les pouvoirs extraordinaires ne sont pas affectés).</li><li>L’antimagie ne fait pas disparaître la magie, elle la réprime. Cela signifie que les sorts et les objets magiques recommencent à faire effet dès que l’aire d’antimagie disparaît ou se déplace (sauf pour les sorts ou effets dont la durée s’est achevée entre temps).</li><li>Quand un sort de zone arrive au contact d’une aire d’antimagie, deux cas de figure peuvent se produire. Si le centre du sort se trouve à l’extérieur de l’aire d’antimagie, il continue de fonctionner normalement en dehors de cette dernière. Dans le cas contraire, le sort est totalement réprimé.</li><li>Golems et autres créatures artificielles, élémentaires, extérieurs et morts-vivants tangibles ne sont pas affectés par une aire d’antimagie (même si celle-ci réprime leurs sorts, pouvoirs magiques et autres pouvoirs surnaturels).</li><li>Créatures convoquées de tous types et morts-vivants intangibles disparaissent dès qu’ils pénètrent dans une aire d’antimagie. Ils réapparaissent au même endroit dès qu’elle bouge ou se dissipe.</li><li>Les objets magiques dont l’effet est permanent, comme les sacs sans fond, ne fonctionnent plus au sein d’une aire d’antimagie, mais leur effet n’est pas annulé (on ne peut donc pas accéder au contenu d’un sac sans fond, mais il n’est pas perdu pour autant).</li><li>Deux aires d’antimagie au contact l’une de l’autre ne s’annulent pas, pas plus que leurs effets ne se cumulent.</li><li>Les sorts <em>Mur de force</em>, <em>Mur prismatique</em> et <em>Sphère prismatique</em> ne sont pas affectés par l’antimagie. <em>Annulation d’enchantement</em>, <em>Dissipation de la magie</em> et <em>dissipation suprême ne peuvent rien contre l’antimagie, tandis que <em>Disjonction de Mordenkainen</em> possède une petite chance de dissiper une zone d’antimagie (1% par niveau du lanceur de sorts). Si la zone d’antimagie résiste, aucun des objets qu’elle englobe n’a à craindre la <em>Disjonction de Mordenkainen</em>.</li></ul>",
	"blindsense_and_blindsight" : "<p>Certaines créatures sont dotées de la <strong>Vision aveugle</strong>, le pouvoir extraordinaire d’utiliser un (ou plusieurs) autre sens que la vue de manière à pouvoir agir normalement même quand elles n’y voient pas. Les sens pouvant entrer en jeu sont variés : perception des vibrations, odorat exceptionnellement développé, ouïe hors du commun ou sonar. Grâce à ce pouvoir, la créature n’est pas affectée par l’invisibilité de ses adversaires, ni par le camouflage ou l’obscurité, même d’origine magique (mais elle reste incapable de discerner les entités éthérées). La vision aveugle porte à une distance précisée dans la description de la créature.</p><ul><li>La vision aveugle ne permet pas de distinguer les contrastes ou les couleurs, ni de lire.</li><li>Contrairement à la <strong>Vision dans le noir</strong>, elle ne rend pas vulnérable aux attaques de regard.</li><li>Les attaques aveuglantes n’affectent pas une créature bénéficiant de vision aveugle.</li><li>Par contre, les attaques assourdissantes « aveuglent » la créature si celle-ci se repère grâce aux ondes sonores (comme le sonar des chauves-souris).</li><li>La vision aveugle fonctionne sous l’eau, mais pas dans le vide.</li><li>La vision aveugle annule les effets des sorts <em>Flou</em> et <em>Déplacement</em>.</li></ul><p>D’autres créatures sont dotées de la <strong>Perception aveugle</strong>, un pouvoir moindre permettant à la créature de remarquer les choses qu’elle ne voit pas, mais sans la précision de vision aveugle. La créature dotée de la perception aveugle n’a généralement pas besoin d’effectuer de test de Détection ou de Perception auditive pour remarquer et localiser les créatures à portée de son pouvoir de perception aveugle, sous réserve qu’il existe une ligne directe vers ces créatures. Tout adversaire que la créature ne peut pas voir bénéficie d’un camouflage total (50 % de chances de rater) contre la créature dotée de la perception aveugle, et la créature dotée de la perception aveugle bénéficie toujours des chances de toucher normales contre les ennemis qui ont un camouflage. La visibilité continue d’affecter le mouvement d’une créature possédant la perception aveugle. Une créature ayant perception aveugle perd toujours sont bonnus de Dextérité à la CA contre les attaques portées par les créatures qu’elle ne peut pas voir.</p><p><strong>Perception aveugle</strong>. La perception aveugle est une version moins développée de la vision aveugle, possédée par certaines créatures comme les chauves-souris. Elle permet de remarquer ce qu’on ne peut pas voir, mais sans détails. À l’aide de sens autres que la vue (ouïe, odorat, etc.), la créature remarque tout ce qu’elle est incapable de distinguer par le biais de la vue. En règle générale, la créature n’a pas besoin d’effectuer de tests de Détection ou de Perception auditive pour remarquer les individus se trouvant à portée de son pouvoir de vision aveugle, mais elle doit disposer d’une ligne d’effet avec la créature qu’elle souhaite voir. Cependant, si la créature disposant de perception aveugle ne peut voir ses adversaires par d’autres moyens, ceux-ci bénéficient d’un camouflage total (50% de risque de rater) et elle perd son bonus de Dextérité à la CA face à eux. De même, ses attaques ont les chances de rater habituelles face à des adversaires profitant d’un camouflage. Enfin, le manque de visibilité handicape normalement ses mouvements.</p><p><strong>Vision aveugle (Ext)</strong>.Ce pouvoir est semblable à <strong>Perception aveugle</strong> mais est beaucoup plus précis. À l’aide de sens autres que la vue (ouïe, odorat, sonar, sensibilité aux vibrations, etc.), la créature se déplace et combat aussi bien que si elle voyait normalement. L’invisibilité, l’obscurité et la plupart des types de camouflage ne la gênent en rien, mais elle doit disposer d’une ligne d’effet avec l’objet ou la créature qu’elle souhaite voir. La portée de ce pouvoir est indiquée dans la description. En règle générale, la créature n’a pas besoin d’effectuer de tests de Détection ou de Perception auditive pour remarquer les individus se trouvant à portée de son pouvoir de vision aveugle. Sauf indication contraire, le pouvoir fonctionne en permanence et la créature n’a donc pas besoin de faire quoi que ce soit pour s’en servir. Cependant, certaines formes de vision aveugle doivent être déclenchées au prix d’une action libre. Dans ce cas, ce détail apparaît dans la description de la créature. Si cette dernière doit déclencher le pouvoir, elle n’en gagne le bénéficie qu’à son tour de jeu.</p>",
	"breath_weapon" : "<p>La créature crache la matière ou l’énergie (plutôt que de la faire apparaître par magie). La plupart des créatures possédant ce pouvoir sont limitées à un certain nombre d’utilisations quotidiennes ou doivent attendre que leurs réserves se reconstituent entre deux utilisations. En règle générale, elles sont assez intelligentes pour conserver leur souffle en cas de besoin urgent. Sauf cas particulier, les souffles sont des pouvoirs surnaturels.</p><ul><li>Utiliser un souffle est généralement une action simple.</li><li>Aucun jet d’attaque n’est nécessaire, le souffle emplissant automatiquement la zone définie.</li><li>Tout personnage pris dans la zone d’effet doit réussir le jet de sauvegarde correspondant sous peine de subir le plein effet du souffle. Dans la plupart des cas, un jet de sauvegarde réussi est synonyme de dégâts réduits de moitié (ou autre effet réduit).</li><li>Toute créature est immunisée contre son propre souffle.</li><li>Il n’est pas nécessaire de respirer pour pouvoir utiliser un souffle, et certaines créatures qui ne respirent pas disposent de ce pouvoir.</li></ul><p>Un souffle inflige généralement des dégâts et a de fortes chances d’être basée sur un type d’énergie destructive (comme le feu). Les cibles ont droit à un jet de Réflexes (pour demi-dégâts) dont le DD est égal à 10 + ½ DV raciaux de la créature + son modificateur de Constitution (le DD exact étant donné dans la description de chaque monstre doté de cette attaque). Sauf indication contraire, toute créature est immunisée contre son propre souffle. Certains souffles autorisent un jet de Vigueur ou de Volonté plutôt qu’un jet de Réflexes.</p>",
	"burrow" : "<p>La créature peut creuser des galeries dans la terre, mais pas dans la roche (sauf si sa description mentionne le contraire). Il lui est impossible de « courir » ou de « charger » en creusant. Généralement, elle ne laisse derrière elle aucun tunnel utilisable par autrui (ce qu’elle déblaye est laissé derrière elle ou elle se contente de traverser la terre).</p>",
	"change_shape" : "<p>Une créature pourvue de cette particularité a le pouvoir de prendre l’apparence d’une créature ou d’un type de créature précis (généralement humanoïde), mais elle conserve l’ensemble de ses attributs physiques. Sa nouvelle apparence ne peut s’éloigner de plus d’une catégorie de taille (en plus ou en moins) de sa forme d’origine. Le changement de forme engendre les modifications suivantes :</p><li>La créature conserve le type et le sous-type de sa forme d’origine, mais elle acquiert la taille de la nouvelle.</li><li>Elle perd les armes naturelles, les modes de déplacement et les attaques spéciales extraordinaires de sa forme d’origine.</li><li>Elle gagne les armes naturelles, les modes de déplacement et les attaques spéciales extraordinaires de sa nouvelle forme.</li><li>Elle conserve les attaques spéciales et particularités de sa forme d’origine (à l’exception des souffles et regards).</li><li>Elle conserve les valeurs de caractéristique de sa forme d’origine.</li><li>Sauf exception mentionnée dans sa description, la créature conserve toutes les autres caractéristiques de sa forme origine, incluant (mais pas nécessairement limitativement) ses DV, ses points de vie, ses points de compétences, ses dons, son bonus à l’attaque de base et ses bonus aux jets de sauvegarde.</li><li>Elle conserve les facultés de lanceur de sorts de sa forme d’origine. Toutefois, elle doit être capable de parler intelligiblement pour jeter des sorts à composantes verbales et doit posséder des mains humanoïdes pour lancer des sorts à composantes gestuelles.</li><li>Enfin, le sujet ressemble effectivement à une créature de la nouvelle forme, ce qui lui confère un bonus de +10 aux tests de Déguisement quand il utilise ce pouvoir pour se déguiser.</li><li>Tout équipement que la créature ne peut pas tenir ou porter dans sa nouvelle forme tombe au sol dans l’espace que la créature occupe. Si la créature change de taille, tout équipement que la créature peut tenir ou porter dans sa nouvelle forme est modifié pour s’adapter à sa nouvelle taille (les créatures non humaines transformées ne peuvent pas porter d’armure conçue pour une forme humaine, et réciproquement). L’équipement transformé reprend sa taille normale s’il tombe au sol.</li>",
	"climb" : "<p>Toute créature ayant ce mode de déplacement bénéficie d’un bonus racial de +8 aux tests d’Escalade. Elle doit effectuer un test de compétence chaque fois qu’elle tente de grimper à un mur (ou de gravir une pente) auquel est associé un DD supérieur à 0, mais elle a la possibilité de faire 10 même sous la menace de l’ennemi ou si elle n’avait théoriquement pas le temps de le faire. Elle grimpe toujours à la vitesse indiquée. Si le monstre tente une escalade accélérée, il double sa vitesse d’escalade (ou peut utiliser sa vitesse de base au sol, au choix) et n’effectue qu’un seul test de compétence, qui s’accompagne d’un malus de –5. Il est impossible de « courir » en grimpant. La créature conserve son bonus de Dextérité à la CA pendant une escalade, et ses adversaires ne bénéficient d’aucun bonus particulier pour la toucher.</p>",
	"cold_immunity" : "<p>Une créature immunisée contre le froid ne subit jamais les dégâts de froid. Elle est cependant vulnérable au feu, et les attaques de feu lui infligent 1,5 fois les dégâts habituels, qu’elles permettent un jet de sauvegarde ou pas, et que celui-ci soit raté ou réussi.</p>",
	"constrict" : "<p>La créature dotée de ce pouvoir écrase son adversaire, lui infligeant des dégâts contondants chaque fois qu’elle réussit un test de lutte. Les dégâts exacts sont indiqués dans la description de la créature. Si cette dernière possède également le pouvoir <strong>Étreinte</strong>, les dégâts infligés par la constriction s’ajoutent à ceux occasionnés par l’arme naturelle utilisée pour agripper la victime.</p>",
	"damage_reduction" : "<p>Certaines créatures possèdent un pouvoir surnaturel leur permettant d’ignorer les coups ou grâce auquel les blessures infligées par la majorité des armes se referment instantanément.</p><p>Le chiffre ou nombre apparaissant à gauche de la barre de fraction indique combien de points de dégâts la créature ignore à chaque attaque. Dans la plupart des cas, certaines armes peuvent ignorer cette réduction. Cette information se trouve à la droite de la barre de fraction. Différentes formes de réduction des dégâts peuvent être ignorées par les armes magiques (c’est-à-dire n’importe quelle arme disposant d’un bonus d’altération d’au moins +1, à l’exception des armes de maître), certains types d’armes (perforantes, tranchantes ou contondantes), certains matériaux (comme l’adamantium ou le fer froid) ou les armes alignées. Si la barre de fraction est suivie d’un tiret, la réduction des dégâts s’applique contre toutes les attaques, sauf celles qui sont spécifiquement indiquées comme ne tenant pas compte de la réduction des dégâts adverse.</p><p>Les munitions tirées par une arme à projectiles disposant d’un bonus d’altération de +1 ou plus (à l’exception des armes de maître) sont considérées comme magiques pour ce qui est d’ignorer la réduction des dégâts. De même, les munitions tirées depuis une arme à projectiles alignée obtiennent l’alignement de l’arme à projectiles (en plus de l’alignement qu’elles peuvent déjà avoir).</p><p>Quand la réduction des dégâts annule totalement les dégâts infligés par une attaque, les éventuels effets secondaires de l’attaque disparaissent également (poison, étourdissement si le coup a été porté par un moine, maladie, etc.). La réduction des dégâts est inefficace contre les attaques de contact, les dégâts de type énergie destructive accompagnant l’attaque principale ou l’absorption d’énergie. Elle reste également sans effet contre les poisons et maladies contractés par ingestion, inhalation ou contact.</p><p>Si la créature bénéficiant de la réduction des dégâts est en train de lancer un sort, elle n’a pas besoin d’effectuer de test de Concentration si l’attaque ne lui inflige aucun dégât.</p><p>Les sorts, pouvoirs magiques et les attaques d’énergie destructive (y compris le feu d’origine non magique) ne sont pas affectées par la réduction des dégâts.</p><p>Parfois, la réduction des dégâts prend la forme d’une guérison instantanée. Le reste du temps, les armes ricochent contre l’épiderme trop rigide de la créature. Quoi qu’il en soit, les personnages devraient vite comprendre qu’il est temps de changer de tactique.</p><p>Si une créature dispose de plusieurs réductions des dégâts (grâce à plusieurs sources distinctes), ces protections ne se cumulent pas. La créature bénéficie alors contre chaque attaque de la réduction la plus importante selon la situation.</p><hr><p>La créature ne tient aucun compte des attaques portées par la plupart des armes et attaques naturelles. Les blessures qui lui sont faites se referment instantanément, à moins que l’arme ne ricoche contre son cuir ou ses écailles (quoi qu’il en soit, l’adversaire sait que son attaque est restée sans effet). La créature est affectée normalement par les divers types d’énergie destructive (même d’origine non magique), les sorts et les pouvoirs magiques ou surnaturels. Certains types d’armes peuvent néanmoins lui infliger des dégâts normaux (voir ci- dessous).</p><p>La ligne mentionne le nombre de points de dégâts ignorés (qui est le plus souvent compris entre 5 et 15 points) et le type d’arme annulant ce pouvoir.</p><p>Certains monstres sont vulnérables aux dégâts perforants, contondants ou tranchants.</p><p>D’autres monstres sont vulnérables à certains matériaux, comme l’argent alchimique, l’adamantium ou le fer froid. Les attaques qui ne sont pas portées à l’aide du bon matériau voient leurs dégâts réduits, même si l’arme présente un bonus d’altération.</p><p>Certains monstres sont vulnérables aux armes magiques. Toute arme dotée d’un bonus d’altération de +1 au moins aux jets d’attaque et de dégâts passe leur réduction des dégâts. Les armes naturelles de ces monstres sont considérées comme des armes magiques pour ce qui est de vaincre la réduction des dégâts de leurs adversaires.</p><p>Quelques monstres très puissants ne sont vulnérables qu’aux armes épiques, à savoir des armes magiques dotées d’un bonus d’altération de +6 au moins. Les armes naturelles de ces créatures sont également considérées comme des armes épiques pour ce qui est de vaincre la réduction des dégâts de leurs adversaires.</p><p>Certains monstres sont vulnérables aux armes d’alignement bon, chaotique, loyal ou mauvais. Quand un prêtre lance <em>Arme alignée</em>, les armes affectées gagnent une ou plusieurs de ces propriétés, sachant que certaines armes magiques les possèdent déjà. Une créature dotée d’un sous-type d’alignement (Bien, Chaos, Loi ou Mal) peut vaincre ce type de dégâts à l’aide de ses armes naturelles ou manufacturées, comme si elle disposait de l’alignement (ou des alignements) correspondant au sous-type de la créature.</p><p>Lorsqu’une réduction des dégâts présente un tiret (—) après la barre oblique, cela signifie qu’aucune arme ne peut venir à bout de celle- ci.</p><p>Quelques créatures peuvent être blessées par plusieurs types d’armes. Les deux types d’armes passent donc outre cette réduction des dégâts.</p><p>Enfin, dans le cas d’une poignée de créatures, il faut employer une combinaison de différents types d’attaques pour passer outre la réduction des dégâts. Une arme qui entre dans une seule de deux catégories n’est donc d’aucune utilité pour vaincre sa réduction des dégâts.</p>",
	"darkvision" : "<p>La vision dans le noir est un pouvoir extraordinaire permettant de voir en l’absence de source de lumière. La portée est précisée dans la description de chaque créature.</p><p>La vision dans le noir permet seulement de voir en noir et blanc (elle ne permet pas de distinguer les couleurs). Elle ne permet pas de distinguer ce que l’on ne verrait pas sous un éclairage normal : les objets invisibles le restent et les illusions ne disparaissent pas. Elle rend vulnérable aux attaques de type regard.</p><p>La présence de lumière ne gêne pas la vision dans le noir.</p>",
	"death_attack" : "<p>Dans la plupart des cas, ce type d’attaque autorise un jet de Vigueur. S’il est raté, la victime meurt instantanément.</p><ul><li><em>Rappel à la vie</em> ne fonctionne pas sur quelqu’un qui a été tué par une attaque de mort.</li><li>Les attaques de mort tuent instantanément. Il n’est pas possible de stabiliser l’état de la victime pour la maintenir en vie.</li><li>Si une telle précision est nécessaire, un personnage mort est considéré comme ayant –10 points de vie, et ce quelle que soit la cause de son décès.</li><li>Le sort <em>Protection contre la mort</em> protège le sujet contre ce type d’attaque.</li></ul>",
	"disease" : "<p>Quand un personnage est blessé par un monstre porteur d’une maladie, mais aussi quand il touche un objet infecté ou avale de la nourriture avariée ou de l’eau croupie, il doit effectuer un jet de Vigueur. En cas de succès, son système immunitaire réussit à repousser l’infection. Dans le cas contraire, il est affecté après une période d’incubation variable. À partir de ce moment, il doit jouer un jet de Vigueur par jour pour éviter de s’affaiblir davantage. S’il en réussit deux d’affilée, son organisme vient à bout de la maladie.</p><p>Vous pouvez jouer le premier jet de Vigueur à la place du joueur, afin que ce dernier ne sache pas si son personnage a contracté la maladie ou non.</p>",
	"distraction" : "<p>Toute créature vivante vulnérable aux dégâts causés par une nuée commençant son tour de jeu dans le même espace qu’une nuée se sent nauséeuse pendant 1 round ; un jet de Vigueur (10 + ½ DV raciaux de la nuée + son modificateur de Constitution) annule cet effet.</p><p>Lancer un sort ou maintenir un sort dans la zone d’effet nécessite de réussir un test de Concentration (DD 20 + niveau du sort).</p><p>Utiliser une compétence qui exige patience et concentration nécessite de réussir un test de Concentration (DD 20).</p>",
	"energy_drain" : "<p>Certaines créatures, principalement des morts-vivants, possèdent un terrifiant pouvoir surnaturel qui leur permet de voler l’énergie vitale de leurs proies quand elles les touchent.</p><p>La plupart de ces attaques nécessite un jet d’attaque de corps à corps réussi ; un simple contact physique avec la cible n’est pas suffisant.</p><p>Chaque fois que la créature réussit son attaque, elle transmet un ou plusieurs niveaux négatifs à son adversaire, qui subit aussitôt les handicaps suivants (par niveau négatif accumulé) :</p><ul><li>–1 à tous les tests de compétence ou de caractéristique.</li><li>–1 aux jets d’attaque et de sauvegarde.</li><li>–1 niveau effectif (chaque fois que le niveau de la victime est utilisé pour un jet de dé ou un calcul, on le réduit de 1 par niveau négatif).</li></ul><p>Si la victime est capable de lancer des sorts, elle en perd un de son plus haut niveau disponible, comme si elle venait de le jeter (dans le cas où elle peut utiliser plusieurs sorts du même niveau, elle choisit celui qu’elle perd). De plus, la prochaine fois qu’elle préparera ses sorts (ou qu’elle récupérera son potentiel magique, dans le cas d’un barde ou d’un ensorceleur), le sort restera perdu. Le personnage perd donc un sort de son plus haut niveau par niveau négatif (un magicien pouvant préparer deux sorts du 6e niveau et ayant reçu trois niveaux négatifs perdra ses deux sorts du 6e niveau, ainsi qu’un autre du 5e niveau, choisi par le joueur).</p><p>Les niveaux négatifs persistent pendant 24 heures ou jusqu’à ce qu’on les fasse disparaître à l’aide d’un sort tel que <em>Restauration</em>. Au bout de ces 24 heures, la victime doit tenter un jet de Vigueur dont le DD est égal à 10 + ½ nombre de DV de l’attaquant + modificateur de Charisme de l’attaquant (ce DD est calculé dans la description de chaque monstre). En cas de succès, le niveau négatif se dissipe sans conséquence néfaste. Dans le cas contraire, il disparaît, mais la victime perd immédiatement un niveau d’expérience. Un jet de Vigueur distinct est joué pour chaque niveau négatif contracté.</p><p>Tout personnage ayant contracté autant de niveaux négatifs qu’il a de niveaux réels, ou tombant en dessous du niveau 1, meurt instantanément. Selon la créature qui l’a tué, il peut revenir à la vie dès la nuit suivante sous les traits d’une créature similaire. Sinon, il revient sous les traits d’un nécrophage.</p><hr><p>Cette attaque ponctionne l’énergie vitale de la cible. Elle est automatique dès que la créature touche (au corps à corps ou à distance).</p><p>Chaque fois, l’adversaire acquiert un ou plusieurs niveaux négatifs (le nombre exact est indiqué dans la description).</p><p>En cas de coup critique, la créature absorbe deux fois plus d’énergie.</p><p>Chaque fois qu’elle transmet un niveau négatif à son adversaire, elle-même gagne 5 points de vie temporaires (10 en cas de coup critique).</p><p>Ces points de vie temporaires persistent pendant 1 heure.</p>",
	"resistance_to_energy" : "<p>Une créature résistant à un type d’énergie destructive bénéficie d’une importante protection (mais pas d’une immunité totale) contre la source de dégâts correspondante. Ce pouvoir est généralement de nature extraordinaire.</p><p>Chaque pouvoir de résistance est défini par le type d’énergie destructive contre lequel il protège, ainsi que par le nombre de points de dégâts qu’il annule par attaque, que la source en soit magique ou non.</p><p>Si la créature est en train de lancer un sort, elle n’a pas besoin d’effectuer de test de Concentration si l’attaque est totalement stoppée par sa résistance.</p><p>Plusieurs pouvoirs de ce type de sources différentes ne se cumulent pas. Seule la résistance la plus efficace est prise en compte.<hr><p>Chaque round, la créature peut ignorer un certain nombre de points de dégâts occasionnés par le type d’énergie destructive auquel elle résiste (généralement acide, électricité, feu ou froid). Le type d’énergie et le nombre de points de dégâts sont systématiquement indiqués.</p>",
	"etherealness" : "<p>Les araignées de phase et quelques autres monstres vivent dans le plan Éthéré, qui existe parallèlement au plan Matériel (le monde réel). Les créatures évoluant dans ce plan sont dites éthérées. Contrairement aux créatures intangibles, les créatures éthérées ne sont pas présentes sur le plan Matériel.</p><p>Les créatures éthérées sont invisibles, inaudibles, dénuées de substance et d’odeur pour quiconque se trouve dans le plan Matériel. La plupart des attaques magiques restent sans effet sur elles. Détection de l’invisibilité et vision lucide permettent de les repérer.</p><p>Elles voient et entendent tout ce qui se passe à moins de 18 mètres d’elles dans le plan Matériel, mais les solides limitent normalement leur champ de vision (par exemple, elles ne voient pas au travers d’un mur). Une créature éthérée se trouvant dans un objet ne peut plus voir. Cela étant, les objets et créatures qui se trouvent dans le plan Matériel leur apparaissent gris, spectraux et indistincts. Elles ne peuvent pas affecter le plan Matériel, même à l’aide de magie. Par contre, elles ont des interactions normales avec les autres créatures et objets éthérés (qui sont solides pour elles).</p><p>Même lorsqu’une créature du plan Matériel peut voir une créature éthérée, elles sont sur deux plans d’existence distincts et sont incapables d’interagir. Par contre, deux créatures éthérées sont sur le même plan et peuvent s’affecter l’une l’autre normalement.</p><p>Les effets de force originaires du plan Matériel s’étendent jusqu’au plan Éthéré, avec pour conséquence qu’un mur de force bloque les créatures éthérées et que projectile magique les affecte normalement (à condition que le lanceur de sorts puisse voir sa cible éthérée). Les attaques de regard et les abjurations s’étendent elles aussi du plan Matériel vers le plan Éthéré. À l’inverse, si l’on fait appel à ces pouvoirs ou effets depuis le plan Éthéré, ils n’ont aucun impact sur le plan Matériel.</p><p>Les créatures éthérées peuvent se déplacer dans toutes les directions, y compris le haut et le bas. Elles n’ont pas besoin de marcher sur une surface dure et les solides ne constituent pas un obstacle pour elles (mais elles n’y voient plus rien quand leurs yeux se trouvent à l’intérieur d’un mur, par exemple).</p><p>Les fantômes possèdent le pouvoir de manifestation, qui leur permet d’apparaître dans le plan Matériel en tant que créatures intangibles. Malgré cela, ils continuent d’évoluer dans le plan Éthéré, et toute créature s’y trouvant avec eux peut les combattre normalement.</p><p>Les créatures éthérées ne sont pas gênées par les liquides, qui n’ont pour elles pas plus de substance que l’air. Elles agissent normalement sous l’eau.</p><p>Étant dénuées de masse, elles n’ont pas à craindre la moindre chute.</p>",
	"evasion_and_improved_evasion" : "<p>Ces pouvoirs extraordinaires permettent d’éviter tout ou partie d’une attaque de zone.</p><p>Quand il est pris pour cible par une attaque n’infligeant que des dégâts réduits de moitié en cas de jet de Réflexes réussi, un personnage possédant le pouvoir d’<strong>Esquive totale</strong> ne subit aucun dégât s’il réussit son jet de sauvegarde.</p><p>L’<strong>Esquive extraordinaire</strong> est similaire à l’<strong>Esquive totale</strong>, si ce n’est que le personnage ne subit que des dégâts réduits de moitié même s’il rate son jet de sauvegarde.</p><p>Comme toujours lorsqu’on a droit à un jet de Réflexes, le personnage doit disposer de la place nécessaire pour éviter l’attaque. S’il est ligoté ou s’il se trouve dans un espace confiné, il ne peut pas faire appel à ce pouvoir.</p><p>Ce pouvoir est en grande partie instinctif ; le personnage n’a pas besoin de voir venir l’attaque pour avoir une chance de s’y soustraire.</p><p>Les roublards et les moines gagnent l’<strong>Equive totale</strong> au niveau 2 ; les rôdeurs au niveau 9. Les moines gagnent l’<strong>Equive extraordinaire</strong> au niveau 9. D’autres créatures, telles que les familiers, possèdent également ces capacités.</p><p>Roublards, moines et rôdeurs ne peuvent pas bénéficier de l’<strong>Esquive totale</strong> ou de l’<strong>Esquive extraordinaire</strong> en armure lourde ou intermédiaire ou lorsqu'ils se trouvent sans défense (en raison d'un état d'inconscience ou de paralysie, par exemple). Certaines créatures possédant ces pouvoirs de façon innée ne sont pas concernées par cette restriction.</p>",
	"fast_healing" : "<p>Une créature possédant ce pouvoir extraordinaire récupère les points de vie perdus à un rythme stupéfiant. Ce détail crucial excepté, la guérison accélérée fonctionne exactement comme la guérison normale.</p><p>Dès que son tour de jeu arrive et avant d’agir, la créature récupère un nombre de points de vie fixe (indiqué dans sa description).</p><p>Contrairement à la régénération, la guérison accélérée ne fait pas repousser les membres tranchés ou perdus, pas plus qu’elle ne permet de les ressouder.</p><p>Si la créature a subi des dégâts létaux et des dégâts non-létaux, la guérison accélérée efface en priorité les dégâts non-létaux.</p><p>Ce pouvoir ne rend pas les points de vie perdus par asphyxie, déshydratation ou malnutrition.</p><p>Enfin, la guérison accélérée n’augmente pas le nombre de points de vie récupérés par une créature qui se métamorphose.</p>",
	"fear" : "<p>Les attaques de type terreur peuvent avoir plusieurs effets.</p><ul><li><strong>Aura de terreur</strong> (Sur). On utilise ce pouvoir au prix d’une action libre. L’aura peut paralyser la cible d’effroi (c’est le cas de celle qui entoure la momie), mais elle peut aussi fonctionner comme le sort terreur (voir l’aura de la liche). D’autres effets sont également possibles. L’aura de terreur est un effet de zone. La description de chacune précise la taille et le type de cette zone.</li><li><strong>Cônes de terreur</strong> (Mag) et <strong>Rayons de terreur</strong> (Sur). Ils fonctionnent généralement comme le sort terreur.</li></ul><p>Dans la plupart des cas, les cibles ont droit à un jet de Volonté. Si elles le ratent, elles sont secouées, effrayées ou paniquées, selon l’adversaire ou la source qu’elles ont en face d’elles. Si l’effet de terreur autorise un jet de sauvegarde, celui-ci est un jet de Volonté assorti d’un DD égal à 10 + ½ DV raciaux de la créature + son modificateur de Charisme. Toutes ces attaques sont des effets mentaux de terreur.</p><hr><p>Sorts, objets magiques et monstres peuvent inspirer une terreur plus ou moins grande aux personnages.</p><p><strong>Secoué</strong>. Le personnage subit un malus de –2 aux jets d’attaque et de sauvegarde, ainsi qu’aux tests de compétence et de caractéristique.</p><p><strong>Effrayé</strong>. Un personnage effrayé est secoué et s’enfuit aussi rapidement que possible. Il est toutefois capable de choisir sa direction de fuite et peut recommencer à agir comme il le souhaite dès qu’il ne voit plus (ou n’entend plus) ce qui l’a effrayé. Néanmoins, tant que l’effet persiste, il se remet à fuir s’il doit de nouveau affronter ce qui l’a terrifié la première fois. Si toute fuite lui est interdite, il peut se battre, mais il reste secoué.</p><p><strong>Paniqué</strong>. Un personnage paniqué est secoué et s’enfuit le plus vite possible. Il cherche juste à s’éloigner de ce qui le terrifie, sans réfléchir où il va, mais en fuyant toute autre source de danger potentielle. Si on l’empêche de s’échapper, il se recroqueville sur lui- même plutôt que de combattre.</p><p><strong>Intensification de la terreur</strong>. Les effets de type terreur sont cumulables : un personnage déjà secoué qui est secoué une seconde fois devient effrayé, tandis qu’un personnage secoué qui se retrouve effrayé par un second effet cède directement à la panique. De la même manière, un individu effrayé obtenant un résultat secoué ou effrayé devient paniqué.</p>",
	"fire_immunity" : "<p>Une créature immunisée contre le feu ne subit jamais les dégâts de feu. Elle est cependant vulnérable au froid, et les attaques de froid lui infligent 1,5 fois les dégâts habituels, qu’elles permettent un jet de sauvegarde ou pas, et que celui-ci soit raté ou réussi.</p>",
	"fly" : "<p>La créature peut voler à la vitesse indiquée si elle ne porte pas plus qu’une charge légère. Notez qu’une armure intermédiaire ne constitue pas forcément une charge intermédiaire. La vitesse en vol s’accompagne d’une parenthèse indiquant le degré de manœuvrabilité du monstre, selon les critères suivants :</p><ul><li><strong>Parfaite</strong>. La créature peut exécuter toutes les manœuvres aériennes qu’elle souhaite, ou presque. Elle se déplace dans les airs comme un humain en pleine possession de ses moyens le fait sur la terre ferme.</li><li><strong>Bonne</strong>. La créature est extrêmement agile dans les airs. Cela étant, elle ne change pas aussi aisément de direction que si elle disposait d’une manœuvrabilité parfaite.</li><li><strong>Moyenne</strong>. La créature vole comme un oiseau de petite taille.</li><li><strong>Médiocre</strong>. Elle vole comme un grand oiseau.</li><li><strong>Déplorable</strong>. Elle sait à peine voler.</li></ul><p>Une créature capable de voler peut attaquer en piqué. Cette attaque fonctionne comme une charge, mais la créature doit parcourir un minimum de 9 mètres tout en plongeant d’au moins 3 mètres. Elle ne peut frapper qu’à l’aide de ses griffes ou de ses serres, mais inflige des dégâts doublés en cas de coup au but. Il est possible de « courir » en volant, à condition de voler en ligne droite.</p><p>Une créature ayant cette capacité peut cesser de voler ou reprendre son vol quand elle le souhaite (action libre). S’il s’agit d’un pouvoir surnaturel, il n’est d’aucune utilité au sein d’une zone d’antimagie. La créature perd alors sa faculté de vol tant que persiste la zone.</p>",
	"frightful_presence" : "<p>Grâce à ce pouvoir, les adversaires de la créature sont affectés par sa seule présence. L’effet se déclenche automatiquement quand la créature exécute une action pouvant impressionner. Tous les adversaires à portée et voyant la créature peuvent être effrayés ou secoués.</p><p>Les actions déclenchant ce pouvoir sont indiquées dans la description de la créature. La portée de la présence terrifiante est généralement de 9 mètres et son effet dure souvent pendant 5d6 rounds.</p><p>À noter que ce pouvoir ne peut affecter que les adversaires ayant un nombre de niveaux ou de DV inférieur à celui de la créature. Les adversaires affectés peuvent résister à l’aide d’un jet de Volonté, dont le DD est égal à 10 + ½ DV raciaux de la créature + son modificateur de Charisme (le DD exact étant donné dans la description). Tout adversaire réussissant son jet de Volonté est immunisé contre la présence terrifiante de la créature pendant 24 heures. Il s’agit d’un effet de terreur mental.</p>",
	"gaseous_form" : "<p>Certaines créatures ont le pouvoir surnaturel ou magique de se transformer en gaz.</p><p>Les créatures gazeuses n’ont pas la possibilité de courir, mais elles savent voler. Elles peuvent se déplacer comme un nuage de vapeur, et passer par les plus infimes fissures. Elles sont par contre incapables de traverser les solides.</p><p>Elles ne peuvent pas attaquer physiquement, ni lancer des sorts à composantes verbales, gestuelles ou matérielles (ce qui exclut également les focaliseurs). Elles perdent tous leurs pouvoirs surnaturels, sauf celui qui leur permet de passer à l’état gazeux.</p><p>Elles bénéficient d’une réduction des dégâts de 10/magie. Sorts, pouvoirs magiques et surnaturels les affectent normalement. Elles perdent la protection conférée par leur armure (ce qui inclut une éventuelle armure naturelle), mais conservent les modificateurs qu’elles doivent à leur taille, à leur Dextérité, à leur bonus de parade et au bonus que peut conférer une armure de force.</p><p>Elles n’ont pas besoin de respirer et sont immunisées contre les agressions respiratoires (la puanteur des troglodytes, le gaz, etc.).</p><p>Elles ne peuvent pas s’enfoncer dans l’eau ni dans un autre liquide. Elles ne sont ni éthérées ni intangibles. Elles sont affectées par le vent et les autres mouvements d’air, qui les poussent devant eux. Mais même un vent extrêmement violent ne peut dissiper ou endommager une créature en état gazeux.</p><p>Un test de Détection (DD 15) est nécessaire pour faire la différence entre une créature en état gazeux et une nappe de brume. Si elle tente de se cacher dans la fumée ou le brouillard, la créature bénéficie d’un bonus de +20 à son test de Discrétion.</p>",
	"gaze_attack" : "<p>Cette attaque a lieu quand le regard de l’adversaire croise celui de la créature. Son effet peut être extrêmement varié : pétrification, mort, charme, etc. Sa portée est généralement de 9 mètres, mais il existe quelques exceptions.</p><p>Le type de jet de sauvegarde est variable, mais il s’agit le plus souvent d’un jet de Vigueur ou de Volonté. Le DD est égal à 10 + ½ DV raciaux de la créature + son modificateur de Charisme (le DD exact étant donné dans la description). En cas de succès, la cible n’est pas affectée. Les attaques de regard sont indiquées de façon abrégée dans la description du monstre.</p><p>Tous les adversaires à portée doivent effectuer un jet de sauvegarde à chaque round, au début de leur tour de jeu. Ils ne sont vulnérables que s’ils regardent la créature directement, et il existe deux moyens de se protéger, du moins en partie, contre ce type d’attaque :</p><p>Détourner les yeux. L’adversaire prend bien garde de ne pas regarder le visage de la créature (il se base sur son ombre, fixe ses pieds, l’observe dans une surface réfléchissante, etc.). Chaque round, il n’a que 50 % de chances de croiser accidentellement le regard de la créature. Dans le cas contraire, il n’a pas besoin de jouer de jet de sauvegarde. Cependant, la créature bénéficie d’un camouflage contre un adversaire qui détourne les yeux.</p><p>Se bander les yeux. L’adversaire ne voit pas du tout la créature (il peut également obtenir ce résultat en lui tournant le dos ou en fermant les yeux). Il n’a pas besoin de jouer le moindre jet de sauvegarde, mais en contrepartie, on considère que la créature bénéficie d’un camouflage total contre lui.</p><p>La créature peut également utiliser son regard volontairement, dans le cadre d’une action d’attaque. Dans ce cas, elle choisit un adversaire (et un seul) au cours du round. La cible doit effectuer un jet de sauvegarde, sauf si elle utilise l’un des deux moyens indiqués plus haut. Un adversaire peut donc être obligé d’effectuer deux jets de sauvegarde contre le regard au cours d’un même round : une fois quand c’est à lui de jouer, et une autre quand la créature le prend pour cible.</p><p>Les attaques de type regard affectent normalement les adversaires éthérés. Sauf indication contraire, toutes les créatures sont immunisées contre leur propre regard et celui des autres représentants de leur espèce.</p><p>Cette attaque peut affecter les alliés de la créature. Par contre, on considère qu’ils détournent les yeux. Ils ont donc 50 % de chances de ne pas avoir à effectuer de jet de sauvegarde contre le regard chaque round. La créature peut également être pourvue d’un voile, ce qui a pour effet d’annuler son pouvoir.</p><hr><p>Le regard pétrifiant de la méduse est connu de tous, mais ce type d’attaque peut aussi charmer, maudire, ou même tuer la cible, en fonction du monstre qui l’utilise. Cette attaque est d’origine surnaturelle, sauf quand elle est la conséquence d’un sort.</p><p>Tout personnage se trouvant à portée d’une attaque de type regard doit effectuer un jet de sauvegarde chaque round, au début de son tour de jeu (le plus souvent, il s’agit d’un jet de Vigueur ou de Volonté).</p><p>Il est possible de ne pas regarder la créature en face, et de se concentrer par exemple sur son corps ou son ombre (ou encore de suivre ses mouvements par le biais d’une surface réfléchissante). Dans ce cas, le personnage a, chaque round, 50% de chances de ne pas avoir de jet de sauvegarde à jouer. En contrepartie, la créature bénéficie d’un camouflage envers le personnage.</p><p>On peut se protéger totalement de ce type d’attaque en fermant les yeux ou en mettant un bandeau dessus, ou encore en tournant le dos à la créature. Dans ce cas, le personnage ne risque plus d’être affecté par le regard, mais la créature bénéficie d’un camouflage total contre le personnage.</p><p>La créature peut choisir d’activer son regard, au prix d’une action d’attaque. Dans ce cas, elle sélectionne une cible, et une seule, qui doit effectuer un jet de sauvegarde (à moins qu’elle ne se protège comme indiqué ci-dessus). À noter que, dans ce cas, la cible devra sans doute effectuer deux jets de sauvegarde au cours du même round : un au début de son tour de jeu, et une autre quand c’est au monstre de jouer.</p><p>On peut fixer l’image de la créature (illusion, miroir, etc.) sans être affecté par son regard.</p><p>Toutes les créatures possédant ce pouvoir sont immunisées contre leur propre regard.</p><p>Dans le cas où la visibilité est si réduite qu’elle procure un camouflage (obscurité, brouillard, etc.), les personnages ont, chaque round, une chance égale au pourcentage de camouflage conféré de ne pas avoir à effectuer de jet de sauvegarde. Cette chance ne s’ajoute pas à celle qu’offre le fait de détourner les yeux ; les deux pourcentages sont joués séparément.</p><p>Une créature invisible ne peut pas attaquer à l’aide de son regard.</p><p>Les personnages voyant dans l’obscurité totale à l’aide de <strong>Vision dans le noir</strong> sont affectés normalement par le regard des créatures qu’ils distinguent.</p><p>Sauf indication contraire, une créature intelligente peut réprimer le pouvoir de son regard si elle le désire.</p>",
	"improved_grab" : "<p>Si la créature réussit à toucher son adversaire à l’aide d’une arme naturelle de corps à corps (généralement sa morsure ou un coup de griffes), elle inflige des dégâts normaux et peut tenter d’engager une lutte par une action libre sans provoquer d’attaque d’opportunité. Aucune attaque de contact n’est nécessaire.</p><p>Sauf indication contraire, <strong>Étreinte</strong> ne fonctionne que contre les adversaires dont la taille est strictement inférieure à celle de la créature. Toute créature qui engage une lutte a deux options : mener la lutte normalement ou se contenter d’un membre pour saisir son adversaire. Si elle choisit la seconde, elle subit un malus de –20 aux tests de lutte, mais n’est pas considérée agrippée (autrement dit, elle ne perd pas son bonus de Dextérité à la CA, contrôle toujours la zone qui l’entoure et peut utiliser ses attaques restantes contre d’autres adversaires).</p><p>Une fois que la créature a assuré sa prise, elle n’inflige pas de dégâts supplémentaires, sauf si elle possède également le pouvoir de constriction. Par la suite, un test de lutte remporté lui permet d’infliger automatiquement les dégâts correspondant au membre qui immobilise l’adversaire plus les dégâts correspondant à la constriction, si la créature possède aussi ce pouvoir (ils sont détaillés dans la description de la créature).</p><p>Quand la créature saisit son adversaire suite à une attaque de type <strong>Étreinte<strong>, elle l’attire dans l’espace qu’elle occupe, ce qui ne provoque pas d’attaque d’opportunité. Si elle le tient d’un seul membre, elle peut même se déplacer, pour peu qu’elle soit assez forte pour le porter ou le traîner.</p>",
	"incorporeality" : "<p>Spectres, âmes-en-peine et quelques autres créatures similaires n’ont pas de corps physique. Étant dénuées de substance, elles ne peuvent pas manipuler les solides ou exercer la moindre force physique. De la même manière, la matière non magique les traverse sans les affecter. Cela étant, ils ont une présence substantielle qui peut ressembler à une attaque physique (comme le contact d’un spectre) contre les créatures tangibles.</p><p>Les créatures intangibles sont sur le même plan que les personnages et ceux-ci ont une chance de pouvoir les affecter.</p><p>Les créatures intangibles ne peuvent être blessées que par d’autres entités intangibles, les armes magiques, les sorts et les pouvoirs magiques ou surnaturels. Elles sont immunisées contre toutes les formes d’attaque non magiques. S’ils sont d’origine naturelle, le feu, le froid et l’acide sont sans effet sur elles.</p><p>Même si elles sont touchées par un effet magique ou une arme capable de les affecter, elles ont 50% de chances de ne pas être blessées par l’attaque si elle vient d’une source tangible. Les seules exceptions sont les armes spectrales ou les effets de force.</p><p>Les créatures intangibles sont immunisées contre les coups critiques, les dégâts supplémentaires d’ennemi juré et les attaques sournoises. Elles peuvent se déplacer dans toutes les directions, y compris vers le haut ou vers le bas. Elles n’ont pas besoin de marcher sur une surface solide. Elles peuvent traverser les solides à volonté, mais n’y voient rien quand leurs yeux sont entourés de matière.</p><p>Les créatures intangibles se dissimulant à l’intérieur d’un objet solide obtiennent un bonus de +2 sur les tests de Perception auditive, car les objets solides portent bien les sons. La procédure pour localiser un adversaire intangible dans un objet solide est la même que pour un adversaire invisible.</p><p>Elles ne font jamais aucun bruit, sauf si elles choisissent d’en faire.</p><p>Les attaques physiques d’une créature intangible ne tiennent aucun compte de l’armure de leurs cibles, même si celle-ci est magique. Les seules protections efficaces contre les créatures intangibles sont les armures spectrales et celles qui sont constituées de force (telles que le sort armure de mage et la protection conférée par des bracelets d’armure).</p><p>Les créatures intangibles conservent tous leurs pouvoirs dans l’eau. Elles se comportent en milieu aquatique comme à l’air libre.</p><p>Rien ne peut les faire tomber, car elles sont dénuées de masse. Elles ne sont donc jamais meurtries par les chutes.</p><p>Les créatures dotées d’un corps physique ne peuvent pas leur faire de croc-en-jambe ni lutter avec elles à bras le corps.</p><p>Étant dénuées de masse, les créatures intangibles ne déclenchent jamais les pièges liés au poids (plaques de pression, etc.).</p><p>Enfin, elles ne dégagent aucune odeur et ne laissent pas la moindre trace. Comme indiqué précédemment, elles ne font du bruit que si elles le souhaitent, par exemple pour faire peur à leurs proies.</p>",
	"invisibility" : "<p>La faculté de se déplacer sans être vu confère un énorme avantage, mais qui est loin d’être déterminant. Les créatures invisibles ne peuvent pas être vues, mais rien n’empêche de les entendre, de les sentir, ou tout simplement d’avoir la certitude qu’il y a quelqu’un à proximité.</p><p>Une créature invisible est indétectable par le sens de la vue, y compris par la vision dans le noir.</p><p>L’invisibilité ne confère pas en soi l’immunité contre les coups critiques, mais elle protège contre les dégâts supplémentaires d’ennemi juré et contre les attaques sournoises.</p><p>Généralement, on peut repérer une créature invisible en mouvement et distante de moins de 9 mètres pour peu que l’on réussisse un test de Détection (DD 20). L’observateur éprouve la sensation qu’il y a quelqu’un (ou quelque chose) non loin, mais sans savoir exactement où se trouve la créature en question. Si la créature invisible ne bouge pas (ou presque pas), il est bien plus difficile de la détecter (DD 30). Enfin, un objet, un être ne respirant pas (créature artificielle, mort-vivant, etc.) ou une créature totalement immobile accroît encore la difficulté du test de Détection (DD 40). Localiser précisément la créature ou l’objet est quasiment impossible (+20 au DD du test de Détection) et, même si le personnage réussit ce test, la créature invisible bénéficie toujours d’un camouflage total (50% de risque de rater).</p><p>Il est possible de localiser une créature invisible à l’oreille. Tout personnage cherchant à le faire doit effectuer un test de Perception auditive par round (au prix d’une action libre). S’il obtient un résultat supérieur ou égal au test de Déplacement silencieux de la créature invisible, il la détecte (si la créature ne maîtrise pas la compétence Déplacement silencieux, elle effectue un test de Dextérité assorti de son éventuel malus d’armure aux tests). Si le personnage remporte le test opposé, il sait juste qu’il y a quelque chose d’invisible dans une certaine direction. Pour localiser la créature avec précision, il lui faut dépasser d’au moins 20 le DD indiqué.</p><table><caption>Test de Perception auditive pour détecter l’invisible</caption><tr><th>La créature invisible</th><th>DD</th></tr><tr><td>Parle ou se bat</td><td>0</td></tr><tr><td>Se déplace à mi-vitesse</td><td>test de Déplacement silencieux</td></tr><tr><td>Se déplace à vitesse normale</td><td>test de Déplacement silencieux à –4</td></tr><tr><td>Court ou charge</td><td>test de Déplacement silencieux à –20</td></tr><tr><td>Est éloignée</td><td>+1 par tranche de 3 mètres</td></tr><tr><td>Est derrière un obstacle (porte)</td><td>+5</td></tr><tr><td>Est derrière un obstacle (mur de pierre)</td><td>+15</td></tr></table><p>Il est possible de repérer une créature invisible à tâtons. Un personnage peut tenter une attaque de contact, à l’aide de sa main ou d’une arme, dans deux cases (de 1,50 mètre de côté) adjacentes au prix d’une action simple. Si une créature invisible se trouve dans une de ces deux zones, l’attaque a 50% de chances de porter. Dans ce cas, le personnage n’inflige pas le moindre dégât mais localise la créature (sauf si cette dernière recommence à bouger, évidemment).</p><p>Si une créature invisible frappe un personnage, celui-ci sait d’où est venu le coup, ce qui lui permet de localiser son agresseur (sauf si ce dernier bouge aussitôt). L’exception à cette règle concerne les créatures invisibles ayant une allonge supérieure à 1,50 mètre. Dans ce cas, le personnage sait dans quelle direction se trouve son adversaire, mais pas où il se tient précisément.</p><p>Un personnage peut attaquer normalement une créature invisible localisée, mais sa cible bénéficie toujours d’un camouflage total (correspondant à 50% de chances de rater). Si vous le souhaitez, ce pourcentage peut diminuer si la créature est particulièrement lente ou imposante.</p><p>Si un personnage essaye de frapper une créature invisible qu’il n’est pas parvenu à localiser, demandez au joueur de choisir l’endroit exact (autrement dit, la case de 1,50 mètre de côté) où son personnage place son attaque. Si la créature se trouve bien là, jouez l’attaque normalement, sans oublier le camouflage total. Si le joueur s’est trompé de case, demandez-lui d’effectuer l’attaque, jouez normalement la chance de rater, et annoncez-lui qu’il a manqué son coup. De cette manière, le joueur ne saura pas si son personnage a raté parce qu’il a frappé au mauvais endroit ou en raison du résultat de votre jet de pourcentage.</p><p>Si une créature invisible ramasse un objet visible, celui-ci reste visible. Il est possible, par exemple, de recouvrir un objet invisible de farine afin de savoir constamment où il se trouve (du moins, jusqu’à ce que la farine tombe ou soit emportée par un courant d’air). Une créature invisible peut faire disparaître un objet pour peu qu’il soit suffisamment petit ; dans ce cas, elle n’a qu’à le glisser dans sa poche ou le cacher dans les replis de sa cape invisible.</p><p>Les créatures invisibles laissent des traces de leur passage. On peut les pister normalement et un sol meuble (sable, boue, etc.) risque de les trahir.</p><p>De la même manière, elles provoquent un déplacement de l’eau ou de tout autre liquide quand elles marchent dedans ou s’enfoncent à l’intérieur. Elles bénéficient alors d’un simple camouflage (et plus d’un camouflage total).</p><p>Une créature dotée d’un puissant odorat peut traquer les entités invisibles comme si ces dernières étaient visibles.</p><p>Un personnage ayant le don Combat en aveugle a plus de chances de toucher une créature invisible. Chaque fois qu’un de ses coups porte, jouez la chance de rater à deux reprises. Le personnage touche, sauf si les deux jets indiquent que le coup est raté (vous avez également la possibilité de n’effectuer qu’un seul jet, en faisant passer la chance de rater de 50% à 25%).</p><p>Les créatures dotées du pouvoir de vision aveugle localisent normalement les entités invisibles, qu’elles peuvent attaquer sans malus ni chances de rater.</p><p>Pour peu qu’elle soit allumée, une torche invisible dégage toujours de la lumière, de même qu’un objet invisible sur lequel on a lancé lumière ou un sort similaire.</p><p>Les créatures éthérées sont invisibles. Comme elles ne sont pas physiquement présentes, les tests de Détection ou de Perception auditive ne permettent pas de les localiser, pas plus que le don Combat en aveugle, l’odorat ou la vision aveugle. De la même manière, les créatures intangibles sont souvent invisibles. Dans leur cas, on ne peut pas les repérer à l’odorat, ni à l’aide de la vision aveugle ou du don Combat en aveugle. Par contre, un test de Détection ou de Perception auditive (si elles ont décidé de faire du bruit) permet parfois de les localiser.</p><p>Les créatures invisibles ne peuvent pas attaquer à l’aide de leur regard.</p><p>L’invisibilité n’affecte pas les sorts de détection.</p><p>Comme certaines créatures sont capables de détecter ou de voir l’invisible, il est utile de savoir se cacher, même quand on est invisible.</p>",
	"level_loss" : "<p>Un personnage perdant un niveau perd immédiatement un dé de vie, avec tout ce qui s’ensuit (diminution éventuelle des bonus de base à l’attaque et aux jets de sauvegarde, perte possible d’aptitudes ou de pouvoirs spéciaux, etc.). Le personnage perd également les autres avantages dus à une progression en niveau (points de caractéristiques, degré de maîtrise augmenté dans certaines compétences, etc.). En cas de doute quant aux compétences ou caractéristiques améliorées, le personnage perd un point dans sa meilleure caractéristique ou son degré de maîtrise le plus élevé baisse d’autant. Si le familier ou un autre compagnon du personnage a ses capacités liées au niveau de ce dernier, ses pouvoirs diminuent pour revenir au niveau correspondant.</p><p>Le total de points d’expérience de la victime tombe immédiatement à mi-chemin entre son nouveau niveau et le suivant.</p>",
	"low_light_vision" : "<p>Les personnages dotés de vision nocturne ont une rétine tellement sensible qu’ils voient deux fois plus loin que la normale dans des conditions de faible éclairage (clarté de la lune ou des étoiles, torche, etc.).. La vision nocturne est en couleur. Un lanceur de sorts peut s’en servir pour lire un parchemin, du moment qu’il bénéficie de la plus infime source de lumière (une petite flamme de bougie, par exemple).</p><p>En extérieur, les personnages dotés de vision nocturne voient aussi bien à la clarté de la lune qu’en plein jour.</p>",
	"manufactured_weapons" : "<p>Certains monstres se servent d’armes manufacturées. De fait, les créatures qui manient arcs, épées, lances et autres armes se conforment aux mêmes règles que les personnages (ce qui inclut les attaques supplémentaires découlant d’un bonus de base à l’attaque élevé et les malus de combat à deux armes). Cette catégorie renferme également les « armes ramassées », comme les rochers et les troncs, et de manière générale, toutes les armes qui ne sont pas naturelles.</p><p>Certaines créatures combinent attaques naturelles et armes manufacturées lorsqu’elles portent une attaque à outrance. Sauf indication contraire, l’arme manufacturée constitue alors l’attaque principale (car son utilisation monopolise la plus partie de l’attention du monstre qui la manie). Ainsi, les armes naturelles deviennent des attaques naturelles secondaires. Ces dernières n’interfèrent pas avec l’utilisation de l’arme principale, comme dans le cas de la main non directrice, mais elles s’accompagnent du malus habituel de –5 (ou de –2 si la créature possède le don Attaques multiples), même si l’arme naturelle utilisée est l’arme principale de la créature en temps normal.</p>",
	"natural_weapons" : "<p>Les armes naturelles font partie intégrante de la créature qui les possède. Un monstre qui porte une attaque au corps à corps à l’aide d’une arme naturelle est considéré comme armé et ne provoque pas d’attaque d’opportunité. Sa zone de contrôle s’étend sur toutes les cases situées à portée d’allonge.</p><p>Quand elle utilise ce type d’armes, une créature ne bénéficie pas d’attaques supplémentaires en raison d’un bonus de base à l’attaque élevé. Le nombre d’attaques qu’elle est capable de porter à l’aide d’armes naturelles dépend simplement du type d’attaque. En général, une créature porte une attaque de morsure, une par griffes ou tentacule, une de cornes, une de dard ou un coup (même si les créatures de taille G dotées de bras ou de membres peuvent porter un coup avec chacun). Reportez-vous à la description de chaque monstre.</p><p>Sauf indication contraire, une arme naturelle offre un critique possible sur un résultat naturel de 20 au jet d’attaque.</p><p>Quand une créature possède plusieurs armes naturelles, l’une d’elles est l’arme principale (mais il s’agit parfois d’une paire ou d’un ensemble). Les autres sont des armes secondaires.</p><p>L’arme principale de la créature apparaît à la ligne consacrée à l’attaque. Elle apparaît également en premier à la ligne réservée à l’attaque à outrance. L’arme naturelle principale d’une créature est son attaque naturelle la plus efficace. Elle découle généralement de sa physiologie, de son entraînement ou de quelque talent inné. L’attaque portée à l’aide de celle- ci exploite le bonus à l’attaque maximal de la créature. Les attaques portées à l’aide d’armes naturelles secondaires sont moins efficaces et subissent un malus de –5 aux jets d’attaque, quel que soit leur nombre (ce malus tombe à –2 si le monstre possède le don Attaques multiples). Ce malus est applicable même si la créature ne porte qu’une attaque à l’aide de l’arme secondaire (que ce soit au titre d’une action d’attaque ou d’une attaque d’opportunité).</p><p>Les armes naturelles s’accompagnent d’un type, comme toutes les armes. Voici les plus courants :</p><p><strong>Morsure</strong>. La créature attaque à l’aide de sa bouche, infligeant des dégâts perforants, tranchants et contondants.</p><p><strong>Griffes ou serres</strong>. La créature lacère sa victime à l’aide d’un appendice affûté, infligeant des dégâts perforants et tranchants.</p><p><strong>Cornes</strong>. La créature empale ses adversaires à l’aide d’andouillers, de cornes ou de quelque autre appendice, infligeant des dégâts perforants.</p><p><strong>Coup</strong>. La créature frappe ses adversaires à l’aide d’un membre, infligeant des dégâts contondants.</p><p><strong>Dard</strong>. La créature pique à l’aide d’un dard, infligeant des dégâts perforants. Ce type d’attaque inflige généralement des dégâts dus au venin en plus.</p><p><strong>Tentacule</strong>. La créature bat violemment son adversaire à l’aide d’un puissant tentacule, infligeant des dégâts contondants et parfois perforants.</p>",
	"nonabilities" : "<p>Il arrive que des créatures n’aient pas certaines caractéristiques. Cela ne signifie pas qu’elles ont une valeur de 0, mais bel et bien que cette caractéristique n’existe pas pour elles. Une caractéristique inexistante s’accompagne d’un modificateur de +0.</p><p><strong>Force</strong>. Toute créature capable de manipuler les solides manuellement a au moins 1 en Force. Les créatures qui ne possèdent pas cette caractéristique ne peuvent pas appliquer la moindre force, soit parce qu’elles n’ont pas de corps physique (ce qui est le cas des spectres), soit parce qu’elles sont incapables de bouger (criards). Elles ratent automatiquement tous leurs tests de Force. Si elles peuvent combattre, elles appliquent leur modificateur de Dextérité au bonus de base à l’attaque (à la place de celui de Force).</p><p><strong>Dextérité</strong>. Toute créature capable de se déplacer a au moins 1 en Dextérité. Les créatures n’ayant pas de valeur de Dextérité sont incapables de se déplacer (c’est le cas des criards). Si elles ont la possibilité d’agir, par exemple en lançant des sorts, elles appliquent leur modificateur d’Intelligence aux tests d’initiative (à la place de celui de Dextérité). Elles ratent automatiquement tous leurs jets de Réflexes et leurs tests de Dextérité.</p><p><strong>Constitution</strong>. Toute créature vivante a au moins 1 en Constitution. Les créatures sans Constitution n’ont pas de corps physique ou pas de métabolisme. Elles sont automatiquement immunisées contre toutes les attaques qui s’accompagnent d’un jet de Vigueur, sauf si celles- ci affectent les objets. Les créatures dénuées de Constitution sont également immunisées contre l’absorption d’énergie et l’affaiblissement temporaire ou la diminution permanente de caractéristique. Elles ratent automatiquement leurs tests de Constitution. Elles sont inépuisables et peuvent donc courir indéfiniment sans jamais se fatiguer (à moins que leurs description précise qu’elles sont incapables de courir).</p><p><strong>Intelligence</strong>. Toute créature capable de penser, d’apprendre ou de se souvenir a au moins 1 en Intelligence. Les créatures dénuées d’Intelligence sont de simples automates, qui fonctionnent en accord avec leurs instincts ou les instructions reçues. Elles sont immunisées contre les effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral) et ratent automatiquement leurs tests d’Intelligence. Elles ne gagnent ni dons ni compétences, mais peuvent disposer de dons supplémentaires ou de bonus de compétence raciaux.</p><p><strong>Sagesse</strong>. Toute créature ayant la moindre perception de ce qui l’entoure a au moins 1 en Sagesse. Seuls les objets sont dénués de Sagesse. Ce qui n’a pas de Sagesse n’a pas non plus de Charisme, et vice versa.</p><p><strong>Charisme</strong>. Toute créature capable de faire la différence entre elle-même et le reste du monde a au moins 1 en Charisme. Tout comme pour la Sagesse, seuls les objets sont dénués de Charisme. Ce qui n’a pas de Charisme n’a pas non plus de Sagesse, et vice versa.</p>",
	"paralysis" : "<p>Certains sorts ou monstres (grâce à un pouvoir magique ou surnaturel) peuvent paralyser leurs victimes, les maintenant immobiles par magie (le cas des poisons paralysants est évoqué dans la section Poison/venin).</p><p>Un personnage paralysé est incapable de parler ou d’accomplir la moindre action physique. Il reste totalement statique, et même ses amis ne peuvent bouger ses membres. Il n’a droit qu’aux actions purement mentales, par exemple lancer un sort sans composantes.</p><p>La paralysie affecte le corps et on y résiste au moyen d’un jet de Vigueur (la description de la créature donne le DD de sauvegarde). Contrairement à <em>Immobilisation de personne</em> et autres effets similaires, la paralysie n’autorise pas un jet de sauvegarde par round.</p><p>Une créature ailée paralysée dans les airs tombe. Une créature évoluant dans l’eau ne peut plus nager et court le risque de se noyer.</p>",
	"poison" : "<p>Dans l’immense majorité des cas, les poisons ou venins causent un affaiblissement temporaire. La cible a droit à un jet de Vigueur pour s’en prémunir. Sauf précision contraire, et quel que soit le résultat de ce premier jet de sauvegarde, elle doit en effectuer un second (identique) 1 minute après afin de déterminer si la substance toxique a un effet secondaire sur son organisme. La description de la créature fournit tous les détails nécessaires.</p><p>Une créature dotée d’une attaque empoisonnée est immunisée contre son propre venin et celui des autres représentants de son espèce.</p><p>Le jet de Vigueur à effectuer contre une substance toxique s’accompagne d’un DD égal à 10 + ½ DV raciaux de la créature + son modificateur de Constitution (le DD exact est donné dans la description). En cas de succès, l’adversaire échappe à l’effet.</p><p>Chaque fois qu’un personnage est blessé par une arme empoisonnée ou une créature venimeuse, mais aussi chaque fois qu’il touche un objet enduit d’un poison de contact ou mange un aliment empoisonnés, il doit effectuer un jet de Vigueur. En cas d’échec, il subit l’effet initial de la substance toxique, ce qui se traduit souvent par un affaiblissement temporaire de points de caractéristique. Même en cas de réussite, un second jet de Vigueur est nécessaire 1 minute plus tard pour effet un effet secondaire.</p><p>Les termes poisons et venins sont complètement interchangeables. Une créature immunisée contre les poisons l’est aussi contre les venins et inversement. On utilise généralement le premier terme pour les substances manufacturées ou minérales et le second pour les substances sécrétées par des créatures.</p><p>Une arme ou un objet enduit d’une dose de poison ne peut affecter qu’une seule et unique créature. Le poison conserve toute sa virulence jusqu’à ce que l’arme inflige une blessure ou que l’objet soit touché (à moins que la substance n’ait été essuyée au préalable). Un produit toxique répandu sur un objet ou exposé à l’air libre reste toujours aussi dangereux jusqu’à ce qu’on le touche.</p><p>Poisons magiques et surnaturels peuvent exister, mais pour la plupart, leurs effets sont d’origine extraordinaire.</p><hr><p>Les poisons sont répartis en quatre grandes catégories selon leur méthode d’inoculation : blessure, contact, ingestion et inhalation.</p><strong>Contact</strong>. Il suffit de toucher un poison de cette catégorie pour avoir à jouer un jet de sauvegarde. Il peut être inoculé à l’aide d’une arme ou d’une attaque de contact. Même si les dégâts de l’attaque en elle-même sont réduits à 0 par le biais d’une éventuelle réduction des dégâts, le poison l’affecte tout de même. Un coffre ou un autre objet peut être enduit d’un poison de contact pour piéger les importuns.<strong>Ingestion</strong>. Les poisons à ingestion sont quasiment inutilisables en combat. Un empoisonneur peut faire avaler une potion à une créature inconsciente, ou duper sa victime pour lui faire avaler de la nourriture empoisonnée. Les assassins et les utilisateurs de ces poisons les réservent à d’autres types de situations.<strong>Inhalation</strong>. On conserve habituellement le poison à inhalation dans des fioles fragiles ou des coquilles d’œufs. On peut les lancer par une attaque à distance ayant un facteur de portée de 3 mètres et elles relâchent leur contenu lorsqu’elles frappent une surface solide (ou qu’on les frappe). Un dose suffit pour remplir un cube de 3 mètres d’arête. Toutes les créatures dans cette zone d’effet doivent jouer un jet de Vigueur. (Il est inutile de retenir sa respiration. Ces poisons affectent la membrane nasale, le canal lacrymal ou d’autres parties du corps.)<strong>Blessure</strong>. Les poisons de blessures doivent être inoculés en blessant leur victime. Si les dégâts d’une attaque sont réduits à 0 par une éventuelle réduction des dégâts, le poison est sans effet. Les pièges attaquant à l’aide d’aiguilles, de fléchettes ou d’autres types d’armes contiennent parfois des poisons de ce type.<h4>Des risques de l’utilisation du poison</h4><p>Un personnage a 5% de risque de s’empoisonner chaque fois qu’il enduit une arme de poison (ou qu’il prépare la substance, par exemple en la mélangeant à des aliments). De même, s’il obtient un 1 naturel (avant modifications) au jet d’attaque, il doit réussir un jet de Réflexes (DD 15) sous peine de se couper accidentellement avec son arme empoisonnée.</p><hr><h4>Immunité contre le poison</h4><p>Les créatures sécrétant naturellement du venin sont immunisées contre leur propre toxine. Les créatures non vivantes (créatures artificielles et morts-vivants) et celles qui n’ont pas de métabolisme (telles que les élémentaires) sont immunisées contre tous les poisons. Vases, plantes et certains monstres sont également immunisés contre le poison. Mais, dans leur cas, on peut concevoir qu’il soit possible de concocter une substance spécialement conçue pour leur faire du mal.</p>",
	"polymorph" : "<p>La magie permet aux personnages et aux monstres de changer de forme. Parfois, cette transformation est involontaire, mais dans la plupart des cas, elle avantage la créature qui la décide ou qui accepte de s’y prêter. Une créature ayant changé de forme conserve son esprit et ses facultés de réflexion.</p><p>Ce pouvoir suit les règles du sort <em>Métamorphose</em>, exception faite des précisions suivantes.</p><p>Les créatures capables de se transformer à l’aide d’un pouvoir et non d’un sort ne subissent pas de désorientation (voir <em>Métamorphose</em>) en changeant de forme.</p><p>Une créature métamorphosée ne change pas de type. Même si elle est transformée en créature d’un autre type que le sien, elle est donc toujours affectée par les armes tueuses ou mortelles visant son propre type, et uniquement celui-ci.</p><p>Le rôdeur conserve son bonus contre ses ennemis jurés uniquement s’il a conscient d’être à face l’un d’entre eux. Si un de ses ennemis jurés change de forme, le rôdeur perd aussitôt son bonus.</p><p>Le bonus dont les nains et les gnomes bénéficient contre les géants dépend de la forme et de la taille de ces derniers. Nains et gnomes perdent leur bonus contre un géant transformé en autre chose. Par contre, ils le gagnent contre une autre créature métamorphosée en géant.</p>",
	"pounce" : "<p>Lorsque la créature charge un adversaire, elle peut porter une attaque à outrance, y compris deux coups de pattes arrière si elle possède également le pouvoir <strong>Pattes arrière</strong>.</p>",
	"powerful_charge" : "<p>Lorsqu’une créature dotée de ce pouvoir charge, elle inflige des dégâts supplémentaires. La quantité de dégâts figure dans la description de la créature.</p>",
	"psionics" : "<p>Ces pouvoirs magiques sont générés par la force mentale de la créature. Ils sont toujours utilisables à volonté.</p><hr><p>Le terme facultés psioniques regroupe tous les pouvoirs mentaux possédés par certaines créatures, et qui leur permettent, par exemple, de communiquer par télépathie ou d’utiliser leur énergie mentale comme une arme. Ce sont des pouvoirs magiques générés par la seule force de l’esprit, sans l’assistance d’une force magique extérieure ou d’un rituel. Si une créature possède des facultés psioniques, son entrée en fait la description détaillée.</p><p>Une attaque psionique s’accompagne presque systématiquement d’un jet de Volonté de la part de la cible, mais tous les pouvoirs psioniques ne prennent pas la forme d’attaques mentales. Certains permettent par exemple à leur utilisateur de changer de forme, de refermer ses blessures ou de se téléporter sur de longues distances. Quelques créatures psioniques sont capables de voir l’avenir, le passé ou le présent (dans des lieux lointains), ainsi que de lire les pensées des autres.</p>",
	"rake" : "<p>Une créature dotée de cette attaque spéciale bénéficie d’attaques naturelles supplémentaires quand elle parvient à agripper son adversaire. Normalement, un monstre ne peut attaquer qu’avec une seule de ses armes naturelles en situation de lutte. Cependant, s’il possède ce pouvoir, il peut généralement porter deux attaques de griffes supplémentaires, utilisables contre l’adversaire agrippé uniquement. Ces attaques ne sont pas sujettes au malus habituel de –4 que l’on applique lorsque l’on attaque à l’aide d’une arme naturelle en situation de lutte.</p><p>Pour utiliser ce pouvoir, le monstre doit commencer son tour agrippé à sa victime. Il lui est impossible d’engager une lutte et d’user de ses pattes arrière dans le même tour.</p>",
	"ray" : "<p>Toutes les attaques prenant la forme d’un rayon sont soumises au résultat d’une attaque de contact à distance, qu’il s’agisse des rayons projetés par les yeux des tyrannœils ou d’un sort tel que rayon affaiblissant. Chaque rayon s’accompagne d’une portée maximale et aucun malus de portée ne s’applique. Même si l’attaque de rayon réussit, la victime a généralement droit à un jet de sauvegarde (Vigueur ou Volonté). Ce n’est jamais un jet de Réflexes, mais si la Dextérité de la cible est suffisamment élevée, elle est sans doute difficile à toucher, même sur une attaque de contact.</p><hr><p>Tout rayon prend la forme d’une attaque de contact à distance. Il nécessite un jet d’attaque de contact à distance et ne tient aucun compte de l’armure, de l’armure naturelle ou du bouclier de la cible. Les rayons n’ont pas de facteur de portée. La description de la créature indique la portée maximale, les effets et le jet de sauvegarde applicable.</p>",
	"regeneration" : "<p>Les créatures qui possèdent ce pouvoir sont extrêmement dures à tuer. En effet, les dégâts qui leur sont infligés sont automatiquement traités comme des dégâts non-létaux et elles récupèrent ce type de points de vie à un rythme fixe par round, indiqué dans la description. Certaines formes d’attaque, généralement le feu et l’acide, infligent des dégâts létaux à la créature, qui ne récupère pas les points de vie correspondants. La description de chaque monstre détaille les limites de sa régénération.</p><p>Si une créature capable de se régénérer sombre dans l’inconscience suite à une accumulation de points de dégâts non-létaux, il est possible de lui porter un coup de grâce, mais celui-ci doit être donné à l’aide d’une arme infligeant des dégâts létaux à la créature.</p><p>Les attaques n’infligeant pas de points de dégâts (c’est le cas de la désintégration et de la plupart des poisons) ne tiennent aucun compte de la régénération. Ce pouvoir ne permet pas non plus de récupérer les points de vie perdus pour cause de malnutrition, déshydratation ou asphyxie.</p><p>Une créature capable de se régénérer peut ressouder un membre tranché, et un organe détruit ou tranché repousse de lui-même. Voir la description de chaque monstre pour plus de détails. Les membres tranchés et non ressoudés à la blessure se décomposent normalement.</p><p>Pour posséder ce pouvoir, la créature doit être dotée d’une valeur de Constitution.</p>",
	"scent" : "<p>Ce pouvoir permet à la créature de sentir l’approche de ses adversaires, de repérer ceux qui se cachent, ou de les pister à l’odeur. La créature peut identifier les odeurs familières, de la même manière que les humains sont capables de reconnaître ce qu’ils ont déjà vu.</p><p>L’odorat permet à la créature de repérer ses adversaires à 9 mètres de distance. S’ils sont dans le sens du vent, la portée passe à 18 mètres ; s’ils sont contre le vent, elle tombe à 4,50 mètres. Toutes ces distances sont doublées en cas d’odeur forte (fumée ou matière en décomposition), et triplées si l’odeur est particulièrement entêtante (musc de putois ou puanteur de troglodyte).</p><p>La créature est capable de déceler la présence de l’autre, mais pas de le localiser avec précision. Il faut une action de mouvement pour repérer de quelle direction vient l’odeur. Si elle se trouve à moins de 1,50 mètre de la source de l’odeur, la créature peut la localiser avec précision.</p><p>Si elle possède le don <strong>Pistage</strong>, la créature peut suivre des traces à l’odeur, pour peu qu’elle réussisse les tests de Sagesse (ou de Survie) nécessaires. Si la piste est fraîche, le DD du test est généralement de 10 (quelle que soit la surface sur laquelle l’adversaire est passé). Il augmente ou diminue en fonction de l’intensité de l’odeur, du nombre de cibles suivies et du temps qui s’est écoulé depuis leur passage (+2 par heure). Ces détails exceptés, cette utilisation du pouvoir obéit aux mêmes règles que le don <strong>Pistage</strong>. Une créature suivant les traces à l’odeur ignore les effets de la surface et de la mauvaise visibilité.</p><p>L’eau peut empêcher les créatures terrestres de suivre une piste, surtout s’il s’agit d’un cours d’eau. Pour leur part, les créatures aquatiques telles que le requin possèdent également ce pouvoir et s’en servent normalement sous l’eau.</p><p>Une odeur particulièrement forte peut servir à en cacher une autre pour masquer une piste. La présence d’une telle odeur (poivre, etc.) empêche de détecter ou d’identifier les créatures proches à l’aide de l’odorat, et le DD du test de Survie passe à 20 au lieu de 10.</p>",
	"sonic_attack" : "<p>Sauf indication contraire, les attaques soniques appliquent la règle des sorts à étendue, l’effet partant automatiquement de la créature. Lorsque l’attaque sonique est lancée, se boucher les oreilles ne sert plus à rien. Si l’adversaire se bouche les oreilles avant que l’attaque sonique n’ait lieu, il n’a pas à effectuer de jet de sauvegarde contre les attaques soniques à effet mental, mais il doit le faire contre celles qui infligent des dégâts. Se boucher les oreilles nécessite de la cire ou une autre matière similaire, et demande une action complexe.</p>",
	"spell_immunity" : "<p>Une créature dotée de ce pouvoir ignore les effets des sorts et pouvoirs magiques qui la prennent directement pour cible. Cela fonctionne sur le même principe que la résistance à la magie, si ce n’est qu’on ne peut en venir à bout. Parfois, cette immunité ne s’applique que face à certains types ou niveaux de sorts. Les sorts n’autorisant pas de test de résistance à la magie ne sont pas affectés par ce pouvoir.</p>",
	"spell_like_abilities" : "",
	"spell_resistance" : "<p>La résistance à la magie (ou RM) est un pouvoir extraordinaire permettant de ne pas être affecté par la magie (certains sorts confèrent temporairement une résistance à la magie plus ou moins élevée).</p><p>La créature peut échapper aux sorts et pouvoirs magiques cherchant à l’affecter directement. Pour déterminer si un sort ou un pouvoir magique fonctionne contre la créature, celui qui l’utilise doit effectuer un test de niveau de lanceur de sorts (1d20 + niveau de lanceur de sorts). Si le résultat est supérieur ou égal à la valeur de résistance à la magie de la créature, cette dernière est affectée normalement (à noter qu’elle a tout de même droit à un jet de sauvegarde si l’effet magique en autorise un). Une créature n’a pas besoin d’être consciente du danger pour que sa résistance à la magie fasse effet.</p><p>La résistance à la magie ne fonctionne que contre les sorts et les pouvoirs magiques, pas contre les pouvoirs extraordinaires ou surnaturels (ni contre le bonus d’altération des armes magiques). De la même manière, certains pouvoirs de créatures sont soumis à la résistance à la magie, d’autres non. À noter que certains sorts ne sont pas soumis à la résistance à la magie, comme indiqué par la ligne Résistance à la magie de leur description.</p><p>Une créature peut volontairement réduire ou réprimer sa résistance à la magie par une action simple ne provoquant pas d’attaque d’opportunité. Dans ce cas, la résistance à la magie conserve la valeur décidée jusqu’au prochain tour de jeu de la créature. Dès le round suivant, elle revient à sa valeur d’origine, sauf si la créature décide de la conserver diminuée, par une nouvelle action simple n’exposant pas à une attaque d’opportunité.</p><p>La résistance à la magie n’interfère jamais avec les propres sorts, pouvoirs ou objets magiques de la créature.</p><p>Une créature possédant une certaine résistance à la magie ne peut pas en faire bénéficier d’autres individus en les touchant ou en se tenant à côté d’eux. Les créatures et objets magiques capables d’un tel transfert de résistance à la magie se comptent sur les doigts de la main.</p><p>Différentes sources de résistance à la magie ne se cumulent pas. Elles coexistent, avec pour conséquence que seule la plus puissante est prise en compte.</p>",
	"spells" : "<p>Certaines créatures peuvent utiliser des sorts profanes ou divins, au même titre que les classes de lanceurs de sorts. À l’exception de ce qui suit, elles sont soumises aux mêmes règles que les personnages pour ce qui est des sorts et peuvent activer les objets magiques correspondants.</p><p>Une créature dépourvue de mains ou de bras peut s’acquitter des composantes gestuelles d’un sort en se contorsionnant, mais elle a besoin des composantes matérielles requises. Elle lance le sort en touchant les composantes (sauf si elles sont en possession d’une autre créature) ou en les portant. Parfois, de telles créatures ont recours au don Dispense de composantes matérielles pour ne pas trop s’encombrer.</p><p>Sauf indication contraire, ces créatures ne sont pas membres de la classe à laquelle correspondent leurs sorts ; elles ne gagnent donc pas les avantages qui vont avec. Par exemple, une créature lançant des sorts profanes comme un ensorceleur ne peut pas appeler de familier. De même, une autre utilisant des sorts de prêtre doit les préparer comme n’importe quel prêtre et reçoit des sorts de domaines si sa description le précise. Par contre, elle ne bénéficie des pouvoirs accordés par ceux-ci que si elle dispose d’au moins un niveau de prêtre.</p>",
	"summon" : "<p>Une créature dotée d’un tel pouvoir est à même de convoquer des créatures de son espèce, comme si elle lançait convocation de monstres, mais ses chances de succès sont généralement limitées (le pourcentage est précisé dans sa description). Lancez 1d100 ; en cas d’échec, aucune créature ne répond à l’appel. Les créatures convoquées repartent automatiquement d’où elles sont venues 1 heure après avoir été appelées. Notez qu’une créature convoquée ne peut pas user de ce pouvoir dans l’heure qui suit son appel.</p><p>La plupart des monstres dotés de ce pouvoir ne l’emploient pas à la légère, tout simplement parce qu’ils contractent une dette auprès de celui qu’ils appellent. En général, il y ont recours quand il leur faut sauver leur vie.</p><p>Un niveau de sort accompagne chaque pouvoir de convocation pour ce qui est des tests de Concentration et des tentatives de dissipation de la créature appelée. Aucun point d’expérience n’est accordé pour les créatures convoquées.</p>",
	"swallow_whole" : "<p>Si la créature dotée de cette attaque spéciale commence son tour avec un adversaire dans la gueule (voir <strong>Étreinte</strong>, ci-dessous), elle peut tenter un nouveau test de lutte (comme si elle faisait une tentative d’immobilisation). En cas de succès, elle engloutit sa proie, qui subit les dégâts de morsure. Sauf indication contraire, la catégorie de taille de l’adversaire doit être strictement inférieure à la sienne.</p><p>Les conséquences de l’engloutissement varient d’une créature à l’autre ; elles sont détaillées dans la description de chacune. Les adversaires avalés sont considérés agrippés, mais pas la créature. Un personnage avalé peut se frayer un passage hors de la cavité stomacale à l’aide d’une arme légère tranchante ou perforante (les dégâts à infliger sont indiqués dans la description de la créature). L’estomac a une CA de 10 + ½ bonus d’armure naturelle, sans ajustement de taille ou de Dextérité. Si la victime remporte un test de lutte, elle remonte dans la bouche, où elle peut être mordue et éventuellement avalée de nouveau.</p>",
	"swarm_attack" : "<p>Les créatures dotées du sous-type « nuée » ne portent pas d’attaques classiques au corps à corps. Elles infligent automatiquement des dégâts aux créatures dont elles occupent l’espace au terme de leur déplacement, sans effectuer de jet d’attaque. Leur profil propose « nuée » aux lignes consacrées à l’attaque et à l’attaque à outrance, sans que le moindre bonus à l’attaque soit précisé. La quantité de dégâts infligée par une nuée est basée sur le nombre de ses dés de vie, comme le montre la table ci-dessous</p><table><tr><th>DV de la nuée</th><th>Dégâts de base de la nuée</th></tr><tr><td>1-5</td><td>1d6</td></tr><tr><td>6-10</td><td>2d6</td></tr><tr><td>11-15</td><td>3d6</td></tr><tr><td>16-20</td><td>4d6</td></tr><tr><td>21 ou plus</td><td>5d6</td></tr></table><p>Sauf indication contraire, les attaques d’une nuée ne sont pas magiques. Une réduction des dégâts suffisamment élevée, l’intangibilité et autres pouvoirs spéciaux confèrent une immunité contre les nuées (ou une bonne résistance). Ceci dit, certaines usent également d’acide, de venin, d’absorption de sang ou d’autres attaques spéciales.</p><p>Les nuées ne contrôlent pas la case dans laquelle elles se trouvent en compagnie de leur victime, et ne portent donc pas d’attaques d’opportunité.</p>",
	"swim" : "<p>La créature peut se déplacer dans l’eau à la vitesse indiquée sans avoir besoin d’effectuer de test de Natation. Chaque fois qu’elle tente une action spéciale ou d’éviter un danger, elle bénéficie d’un bonus racial de +8 aux tests de Natation. Elle peut toujours choisir de faire 10, même si on la distrait ou si elle n’avait théoriquement pas le temps de le faire. Il est possible de « courir » en nageant, mais uniquement à condition de nager en ligne droite.</p>",
	"telepathy" : "<p>Le monstre peut communiquer mentalement avec toute créature douée de langage située dans un rayon donné (généralement de 30 mètres, mais précisé dans la description). Il est possible de s’adresser ainsi à plusieurs créatures à la fois et d’entretenir une véritable conversation télépathique. Cependant, c’est aussi difficile que d’écouter et de parler avec plusieurs personnes à la fois.</p><p>Certaines créatures présentent une forme de télépathie limitée, alors que d’autres proposent une version plus puissante de ce pouvoir.</p>",
	"trample" : "<p>En entreprenant une action complexe, la créature peut se déplacer à deux fois sa vitesse  et piétiner un adversaire dont la catégorie de taille est strictement inférieure à la sienne. Pour ce faire, elle n’a qu’à marcher sur sa cible. Toute créature dont l’espace est totalement occupé par l’assaillant est sujette à l’attaque de piétinement.</p><p>Si l’espace de la cible fait plus de 1,50 mètre, elle n’est piétinée que si l’assaillant passe sur toutes les cases qu’elle occupe. Si celui- ci ne passe que sur une partie de l’espace occupé par la cible, cette dernière est en droit de lui porter une attaque d’opportunité (accompagnée d’un malus de –4). Si l’assaillant achève son déplacement dans une case qui lui est interdite, il est déplacé vers la dernière case possible par laquelle il est passé ou vers la case la plus proche (le cas échéant).</p><p>Cette attaque inflige des dégâts contondants (dégâts de coup de la créature + 1,5 fois son modificateur de Force). Le nombre exact est indiqué dans la description.</p><p>L’adversaire pris pour cible peut tenter une attaque d’opportunité, mais avec un malus de –4. S’il décide de ne pas la porter, il peut s’écarter partiellement en réussissant un jet de Réflexes pour réduire les dégâts de moitié.</p><p>Le DD de sauvegarde est égal à 10 + ½ DV de la créature + son modificateur de Force (le DD exact est donné dans la description). L’assaillant ne peut infliger des dégâts de piétinement à une même cible qu’une seule fois par round, même s’il lui passe plusieurs fois de plus.</p>",
	"tremorsense" : "<p>Les créatures qui possèdent ce pouvoir localisent leurs proies grâce aux vibrations propagées par le sol. La créature sait automatiquement où se trouve tout ce qui est en contact avec le sol dans les limites de portée.</p><p>S’il est impossible de tracer une ligne directe entre la créature et sa proie (pour cause de faille, etc.), la portée indique le plus court chemin pris par les vibrations pour contourner l’obstacle. À noter que la créature ne détecte que ce qui se déplace en contact avec le sol.</p><p>On considère qu’un individu se déplace tant qu’il exécute une action physique (même s’il lance un sort en restant sur place). Il n’a pas besoin d’avancer pour être détecté par une créature dotée du pouvoir de perception des vibrations.</p><p>Les monstres aquatiques dotés de ce pouvoir ressentent également la présence des créatures évoluant dans l’eau. Le rayon est indiqué dans la description.</p>",
	"turn_resistance" : "<p>Certaines créatures (principalement des morts-vivants) sont moins affectées par les prêtres et les paladins cherchant à les repousser ou à les intimider.</p><p>Ce pouvoir est de nature extraordinaire.</p><p>Chaque fois que quelqu’un tente de repousser, d’intimider, de détruire ou de contrôler la créature (mais aussi d’augmenter son moral), le bonus indiqué vient s’ajouter au nombre de dés de vie de la créature pour tous les aspects du renvoi.</p>",
	"vulnerability_to_energy" : "<p>Des créatures sont vulnérables à certains types d’énergie destructive (généralement le feu ou le froid). Le monstre concerné subit 50 % de dégâts en plus, qu’il ait droit à un jet de sauvegarde ou pas, et qu’il le réussisse ou non.</p>",

	// Types
	"plant_traits" : "<p>Les plantes ont les traits suivants (sauf indication contraire dans le profil) :</p><ul><li>Vision nocturne.</li><li>Immunité contre les effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral).</li><li>Immunité contre le poison, les effets de sommeil, la paralysie, la métamorphose et l’étourdissement.</li><li>Immunité contre les coups critiques.</li><li>Formées au maniement de leurs armes naturelles uniquement.</li><li>Non formées au port des armures.</li><li>Les plantes mangent et respirent, mais elles ne dorment pas.</li></ul>",
	"undead_traits" : "<p>Les morts-vivants ont les traits suivants (sauf indication contraire dans le profil) :</p><ul><li>Pas de valeur de Constitution.</li><li>Vision dans le noir sur 18 mètres.</li><li>Immunité contre les effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral).</li><li>Immunité contre le poison, les effets de sommeil, la paralysie, l’étourdissement, les maladies et les effets de mort.</li><li>Immunité contre les coups critiques, les dégâts non-létaux, les diminutions permanentes de caractéristique, l’absorption d’énergie, la fatigue et l’épuisement.. Immunité contre les affaiblissements temporaires visant les caractéristiques physiques (Force, Dextérité et Constitution)</li><li>Ne peuvent soigner seuls les dégâts s’ils n’ont pas de valeur d’Intelligence. Toutefois, l’énergie négative (comme un sort de blessure) permet de les soigner. La particularité guérison accélérée fonctionne normalement, qu’elle que soit l’Intelligence de la créature.</li><li>Immunité contre les effets nécessitant un jet de Vigueur (sauf quand ils affectent également les objets ou quand ils sont inoffensifs).</li><li>Utilisent le modificateur de Charisme dans le cadre des tests de Concentration.</li><li>Immunité contre la mort par dégâts excessifs, mais destruction immédiate lorsque les points de vie chutent à 0 ou moins.</li><li>Non affectés par les pouvoirs et sorts de rappel à la vie ou réincarnation. Cependant, résurrection et résurrection suprême les affectent normalement. Ces sorts font d’eux les créatures vivantes qu’ils étaient avant.</li><li>Formés au maniement de leurs armes naturelles, des armes courantes et des armes mentionnées dans leur profil.</li><li>Formés au port du type d’armure (légère, intermédiaire ou lourde) apparaissant dans leur profil, ainsi qu’aux types plus légers. Les morts-vivants dont le profil n’indique aucune armure ne sont pas formés au port de l’armure. Ils sont formés au maniement des boucliers s’ils sont également formés au port d’un type d’armure.</li><li>Les morts-vivants ne mangent pas, ne dorment pas et ne respirent pas.</li></ul>",
	"construct_traits" : "<p>Les créatures artificielles ont les traits suivants (sauf indication contraire dans le profil) :</p><ul><li>Pas de valeur de Constitution.</li><li>Vision nocturne.</li><li>Vision dans le noir sur 18 mètres.</li><li>Immunité contre les effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral).</li><li>Immunité contre le poison, les effets de sommeil, la paralysie, l’étourdissement, les maladies, les effets de mort et les effets de nécromancie.</li><li>Ne peuvent soigner les dégâts, mais peuvent être réparées par un certain type d’effet (voir la description de chaque créature) ou par le biais du don Création de créature artificielle. Une créature artificielle dotée de guérison accélérée bénéficie normalement de cette particularité.</li><li>Immunité contre les coups critiques, les dégâts non-létaux, les affaiblissements temporaires de caractéristique, les diminutions permanentes de caractéristique, l’épuisement et l’absorption d’énergie.</li><li>Immunité contre les effets nécessitant un jet de Vigueur (sauf quand ils affectent également les objets ou quand ils sont inoffensifs).</li><li>Immunité contre la mort par dégâts excessifs. Destruction immédiate lorsque les points de vie chutent à0 ou moins.</li><li>N’ayant jamais connu la vie, une créature artificielle ne peut pas être rappelée à la vie ou ressuscitée.</li><li>Comme son corps est une masse de matière inerte, il est difficile de détruire une créature artificielle. Elle bénéficie de points de vie supplémentaires selon sa taille, comme le montre la table ci-dessous.</li></ul><table><tr><th>Taille de la créature artificielle</th><th>Points de vie supplémentaires</th></tr><tr><td>Infime</td><td>—</td></tr><tr><td>Minuscule</td><td>—</td></tr><tr><td>Très petite</td><td>—</td></tr><tr><td>Petite</td><td>10</td></tr><tr><td>Moyenne</td><td>20</td></tr><tr><td>Grande</td><td>30</td></tr><tr><td>Très grande</td><td>40</td></tr><tr><td>Gigantesque</td><td>60</td></tr><tr><td>Colossale</td><td>80</td></tr></table><ul><li>Formées au maniement de leurs armes naturelles uniquement, sauf quand elles sont de forme vaguement humanoïde, auquel cas elles sont également formées au maniement de toutes les armes mentionnées dans leur profil.</li><li>Non formée au port des armures.</li><li>Les créatures artificielles ne mangent pas, ne dorment pas et ne respirent pas.</li></ul>",
	"elemental_traits" : "<p>Les élémentaires ont les traits suivants (sauf indication contraire dans le profil) :</p><ul><li>Vision dans le noir sur 18 mètres.</li><li>Immunité contre le poison, les effets de sommeil, la paralysie et l’étourdissement.</li><li>Immunité contre les coups critiques et la prise en tenaille.</li><li>Contrairement à la plupart des autres créatures, les élémentaires ne sont pas affublés d’une nature duale : leur âme et leur corps ne font qu’un. Quand un élémentaire est tué, nulle âme n’est libérée. Les sorts rappelant l’âme, comme rappel à la vie, réincarnation et résurrection, sont donc sans effet. Pour rappeler un élémentaire à la vie, il faut user de souhait, souhait limité, miracle ou résurrection suprême.</li><li>Formés au maniement de leurs armes naturelles uniquement, sauf quand ils sont de forme vaguement humanoïde, auquel cas ils sont également formés au maniement des armes courantes et de toutes les armes mentionnées dans leur profil.</li><li>Formés au port du type d’armure (légère, intermédiaire ou lourde) apparaissant dans leur profil, ainsi qu’aux types plus légers. Les élémentaires dont le profil n’indique aucune armure ne sont pas formés au port de l’armure. Ils sont formés au maniement des boucliers s’ils sont également formés au port d’un type d’armure.</li><li>Les élémentaires ne mangent pas, ne dorment pas et ne respirent pas.</li></ul>",
	"ooze_traits" : "<p>Les vases ont les traits suivants (sauf indication contraire dans le profil) :</p><ul><li><b>Dénuées d’intelligence</b>. Pas de valeur d’Intelligence et immunité contre les effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral).</li><li>Aveugles (mais dotées de la particularité vision aveugle). Immunité contre les regards, les effets visuels, les illusions et autres formes d’attaque s’appuyant sur la vue.</li><li>Immunité contre le poison, les effets de sommeil, la paralysie, la métamorphose et l’étourdissement.</li><li>Certaines vases ont le pouvoir d’infliger des dégâts d’acide aux objets. Dans ce cas, le montant des dégâts s’élève à 10 + ½ DV de la vase + son modificateur de Constitution par round entier de contact.</li><li>Immunité contre les coups critiques et la prise en tenaille.</li><li>Formées au maniement de leurs armes naturelles uniquement.</li><li>Non formés au port des armures.</li><li>Les vases mangent et respirent, mais elles ne dorment pas.</li></ul>",
	"vermin_traits" : "<p>Les vermines ont les traits suivants (sauf indication contraire dans le profil) :</p><ul><li><b>Dénuées d’intelligence</b>. Pas de valeur d’Intelligence et immunité contre les effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral).</li><li>Vision dans le noir sur 18 mètres.</li><li>Formées au maniement de leurs armes naturelles uniquement.</li><li>Non formés au port des armures.</li><li>Les vermines mangent, dorment et respirent.</li></ul>",

	// Subtypes
	"angel_traits" : "<p>Les anges possèdent les traits suivants, à moins que le contraire ne soit noté dans leur description.</p><ul><li>Vision dans le noir sur 18 mètres et vision nocturne.</li><li>Immunité contre l’acide, le froid et la pétrification.</li><li>Résistance à l’électricité et au feu de 10.</li><li>Bonus racial de +4 sur les jets de sauvegarde contre le poison.</li><li><strong>Aura de protection (Sur)</strong>. Toute créature à moins de 6 mètres d’un ange bénéficie d’un bonus de parade de +4 à la CA et d’un bonus de résistance de +4 aux jets de sauvegarde contre les attaques et effets créés par des créatures d’alignement mauvais. Cette aura combine par ailleurs les effets des sorts cercle magique contre le Mal et globe d’invulnérabilité partielle, chacun sur une zone de 6 mètres de rayon (niveau de lanceur de sorts égal au nombre de DV de l’ange). L’aura peut être dissipée, mais l’ange n’a besoin que d’une action libre pour la réactiver dès son prochain tour de jeu. (Les bonus conférés par le cercle ne sont pas inclus dans les profils ci-dessous.)</li><li><strong>Don des langues (Sur)</strong>. Les anges peuvent converser avec toute créature parlant un langage, quel qu’il soit, comme s’ils bénéficiaient constamment du sort don des langues (niveau de lanceur de sorts égal au nombre de DV de l’ange). Ce pouvoir fonctionne en permanence.</li></ul>",
	"archon_traits" : "<p>Les archons possèdent les traits raciaux suivants, à moins que le contraire ne soit noté dans leur description.</p><ul><li>Vision dans le noir sur 18 mètres et vision nocturne.</li><li><b>Aura de menace (Sur)</b>. Une aura extrêmement intimidante entoure tout archon en colère. Les créatures hostiles se trouvant à 6 mètres ou moins de distance doivent réussir un jet de Volonté pour résister à son effet (Jet de Volonté DD 12 pour annuler, lié au Charisme et comprend un bonus racial de +2). En cas d’échec, la créature subit un malus de moral de –2 à ses attaques, à sa CA et à ses jets de sauvegarde pendant une journée entière, ou jusqu’à ce qu’elle réussisse à frapper l’archon qui génère l’aura. Une créature résistant à ce pouvoir ou parvenant à toucher l’archon ne peut plus être affectée par l’aura de menace du dit archon pendant une journée entière.</li><li>Immunité contre l’électricité et la pétrification.</li><li>Bonus racial de +4 sur les jets de sauvegarde contre le poison.</li><li><b>Cercle magique contre le Mal (Sur)</b>. Tous les archons sont protégés par un effet similaire au sort cercle magique contre le Mal (niveau de lanceur de sorts égal au nombre de DV de l’archon). (Les bonus conférés par le cercle ne sont pas inclus dans les profils ci-dessous.)</li><li><b>Téléportation (Sur)</b>. Les archons peuvent utiliser un effet semblable à téléportation suprême à volonté, comme le sort du même nom au niveau 14 de lanceur de sorts, si ce n’est qu’ils ne peuvent transporter que 25 kg en plus d’eux- mêmes.</li><li><b>Don des langues (Sur)</b>. Les archons peuvent converser avec toute créature parlant un langage, quel qu’il soit, comme s’ils bénéficiaient constamment du sort don des langues (niveau de lanceur de sorts égal au nombre de DV de l’archon). Ce pouvoir fonctionne en permanence.</li></ul>",
	"demon_traits" : "<p>La plupart des démons possèdent les traits suivants, à moins que le contraire ne soit noté dans leur description.</p><ul><li>Immunité contre l’électricité et le poison.</li><li>Résistance de 10 points à l’acide, au feu et au froid.</li><li><b>Convocation (Mag)</b>. La plupart des démons peuvent s’appeler mutuellement (les chances de succès et le type de démon convoqué sont indiqué dans leur description). Cependant, ils rechignent à utiliser cette faculté, qui fait d’eux les obligés du ou des démons qui répondent à leur appel. En règle générale, ils ne s’en servent que quand leur vie est en jeu.</li><li><b>Télépathie</b>.</li></ul><p>Sauf indication contraire, tous les démons parlent l’abyssal, le céleste et le draconien.</p>",
	"devil_traits" : "<p>Les diables possèdent les traits suivants, à moins que le contraire ne soit noté dans leur description.</p><ul><li>Immunité contre le feu et le poison.</li><li>Résistance de 10 points à l’acide et au froid.</li><li><b>Vision dans les ténèbres (Sur)</b>. Ils voient dans toutes les formes d’obscurité, même celles créées par le sort ténèbres profondes.</li><li><b>Convocation (Mag)</b>. Les diables peuvent s’appeler mutuellement (les chances de succès et le type de diable convoqué sont indiqués dans leur description).</li><li><b>Télépathie</b>.</li></ul><p>Sauf indication contraire, tous les diables parlent l’infernal, le céleste et le draconien.</p>",
	"incorporeal_traits" : "<p>Les créatures intangibles n’ont pas de corps physique. Elles ne peuvent être touchées que par les autres entités intangibles, les armes magiques et les créatures qui frappent comme si elles maniaient des armes magiques, les sorts et les pouvoirs magiques ou surnaturels. Elles sont immunisées contre toutes les attaques non magiques. Même quand elles sont touchées par un sort ou une arme magique, elles ont 50 % de chances de ne pas être affectées par l’attaque (sauf si celle-ci est portée avec une arme spectrale, relève de l’énergie négative ou de l’énergie positive, ou provient d’un effet de force, comme c’est le cas pour projectile magique). Bien qu’il ne s’agisse pas d’une attaque magique, l’eau bénite affecte les morts-vivants intangibles (là encore, avec 50 % de chances de fonctionner).</p><p>Les créatures intangibles n’ont pas d’armure naturelle, mais disposent d’un bonus de parade égal à leur bonus de Charisme (+1 minimum, même si leur valeur de Charisme est trop faible pour qu’elles puissent prétendre au moindre bonus).</p><p>Les créatures intangibles peuvent, dans une certaine mesure, traverser les objets solides à volonté, mais elles doivent rester adjacentes à la surface extérieure de ces derniers. Cela signifie qu’elles sont incapables de traverser des objets dont l’espace est plus grand que le leur. Elles ressentent la présence des créatures et objets situés dans une case adjacente, mais leurs ennemis bénéficient d’un camouflage total (50 % de chances de rater) quand elles se trouvent dans un objet. Pour voir plus loin et porter une attaque normale, il leur faut en sortir. De son côté, la créature intangible ainsi dissimulée bénéficie d’un abri total. Il ne s’agit plus que d’un abri quand elle s’en prend à un adversaire situé hors de l’objet. Cela signifie que son ennemi peut également la frapper s’il a préparé son action. Notez que les créatures intangibles sont incapables de traverser un effet de force.</p><p>Les attaques des créatures intangibles traversent, sans en tenir compte, l’armure, le bouclier et l’armure naturelle de leurs cibles, même si ces dernières continuent de bénéficier normalement de leur bonus de parade et de celui qu’elles doivent éventuellement à un effet de force (comme armure de mage). Elles se déplacent et agissent aussi aisément dans l’eau qu’à l’air libre. Elles ne tombent pas et ne peuvent donc pas subir de dégâts de chute. Elles sont incapables de se livrer à des attaques de croc-en- jambe ou de lutte (et sont immunisées contre celles-ci). En fait, elles sont incapables de se livrer à une action physique consistant à déplacer ou à manipuler un adversaire ou son équipement (et ne peuvent être sujettes à de telles actions). Elles ne pèsent rien et ne déclenchent donc pas les pièges actionnés par le poids.</p><p>Les créatures intangibles se déplacent dans un silence total et ne peuvent pas être entendues à l’aide de tests de Perception auditive, sauf si elles font volontairement du bruit. Enfin, elles n’ont pas de valeur de Force ; c’est donc leur modificateur de Dextérité qui s’applique à leurs attaques au corps à corps (de même qu’à leurs attaques à distance). Face à elles, les sens qui ne dépendent pas de la vue, comme l’odorat ou la vision aveugle, sont peu ou pas utiles. Enfin, elles sont pourvues d’un sens de l’orientation inné et se déplacent à leur vitesse maximale, même quand elles ne voient rien.</p>",
	"swarm_traits" : "<p>Une nuée n’a ni avant, ni arrière, ni anatomie discernable. Elle est donc immunisée contre les coups critiques et la prise en tenaille. Les armes tranchantes et perforantes infligent des dégâts réduits de moitié aux nuées constituées de créatures de taille TP. De leur côté, les nuées de taille I ou Min sont immunisées contre les dégâts de toutes les armes.</p><p>Les nuées se dispersent quand elles tombent à 0 pv ou moins. Elles ne sont jamais chancelantes et les dégâts qu’elles subissent ne peuvent les conduire à un état mourant. En outre, il est impossible de leur faire un croc-en- jambe, de les agripper ou de les bousculer. Elles ne peuvent pas davantage agripper un adversaire.</p><p>Les nuées sont immunisées contre les sorts et effets qui visent un nombre précis de créatures (ce qui inclut les sorts ne visant qu’une cible, comme désintégration), à l’exception des effets mentaux (charmes, coercition, fantasmes, mirages et effets de moral) quand elles possèdent une valeur d’Intelligence et un esprit de ruche. Les sorts et effets de zone, comme les armes à impact et de nombreuses évocations, leur infligent demi-dégâts.</p><p>Les nuées composées de créatures de taille I ou Min sont vulnérables aux grands vents, comme ceux créés par une bourrasque. Pour ce qui est de déterminer les effets du vent sur une nuée, considérez celle-ci comme un monstre de même taille que les créatures qui la constituent (voir Vents). Les effets de vent infligent à une nuée 1d6 points de dégâts non-létaux par niveau de sort (ou dé de vie de la créature qui en est à l’origine, comme dans le cas du cyclone d’un élémentaire de l’Air). Une nuée qui sombre dans l’inconscience en raison d’un trop grand nombre de points de dégâts non-létaux est désorganisée et se disperse. Elle ne se réorganise pas avant que ses points de vie ne dépassent les dégâts qui lui ont étéinfligés.</p>",

	// Humans
	"human_traits" : "<p>Un humain gagne un don supplémentaire au niveau 1 et dispose de 1 point de compétence supplémentaire par niveau (x4 au niveau 1).</p>",

	// Dwarves
	"dwarf_traits" : "<p>Les nains bénéficient des traits raciaux suivants.</p><ul><li>+2 en Constitution, –2 en Charisme.</li><li><b>Large d’épaules</b>. La vitesse de base au sol d’un nain est de 6 mètres. Cependant, cette vitesse n’est pas réduite par le port d’une armure intermédiaire ou lourde ou une charge intermédiaire ou lourde.</li><li>Vision dans le noir sur 18 mètres.</li><li><b>Connaissance de la pierre</b>. Les nains bénéficient d’un bonus racial de +2 à tous les tests de Fouille visant à remarquer que la roche a été travaillée de manière inhabituelle, comme des murs coulissants, des pièges à base de pierre, des constructions récentes (même si elles ont été conçues pour s’intégrer à l’ancien), des surfaces rocheuses dangereuses, des plafonds de pierre instables et ainsi de suite. Elle fonctionne également si la surface travaillée n’est pas en pierre, pour peu qu’elle en ait l’aspect. Un nain approchant à 3 mètres ou moins de l’endroit travaillé a droit à un test de Fouille automatique comme s’il était en train de fouiller activement, et il peut utiliser cette compétence comme un roublard pour détecter les pièges intégrés à la roche. Il sait également à tout instant à quelle profondeur il se trouve sous terre, de même qu’un humain distingue sans réfléchir le haut du bas. Les nains disposent d’un sixième sens en ce qui concerne le travail de la pierre, et ils ont tout le temps de travailler et d’affiner cette capacité innée dans leur habitat souterrain.</li><li><b>Armes familières</b>. Les nains peuvent considérer la hache de guerre naine et l’urgrosh nain comme des armes de guerre plutôt que comme des armes exotiques.</li><li><b>Stabilité</b>. Les nains sont exceptionnellement stables. Ils bénéficient d’un bonus de +4 sur les tests de caractéristique joués pour résister à une bousculade ou un croc-en-jambe, à condition d’être debout sur le sol (et pas en train de grimper, de voler ou sur une monture).</li><li>Bonus racial de +2 aux jets de sauvegarde contre le poison.</li><li>Bonus racial de +2 aux jets de sauvegarde contre tous les sorts et pouvoirs magiques.</li><li>Bonus racial de +1 aux jets d’attaque contre les orques (y compris les demi-orques) et les gobelinoïdes (gobelins, hobgobelins et gobelours).</li><li>Bonus d’esquive de +4 contre les créatures appartenant au type géant (comme les ogres, les trolls et les géants de collines).</li><li>Bonus racial de +2 aux tests d’Estimation en rapport avec la pierre ou les métaux.</li><li>Bonus racial de +2 aux tests d’Artisanat en rapport avec la pierre ou les métaux.</li><li><b>Langues connues d’office</b>. Commun et nain.</li><li><b>Langues supplémentaires</b>. Commun des Profondeurs, géant, gnome, gobelin, orque et terreux.</li><li><b>Classe de prédilection</b>. Guerrier.</li><li><b>Ajustement de niveau</b>. +0.</li></ul>",
	"duergar_traits" : "<p>Sauf précision contraire, ces traits s’ajoutent à ceux décrits plus haut.</p><ul><li>Ajustement de –4 en Charisme au lieu de –2.</li><li>Vision dans le noir sur 36 mètres.</li><li>Immunisés contre la paralysie, les fantasmes et les poisons. Ce trait remplace le bonus racial de +2 aux jets de sauvegarde contre le poison des nains des collines.</li><li>Bonus racial de +2 aux jets de sauvegarde contre tous les sorts et pouvoirs magiques. </li><li><b>Pouvoirs magiques</b>. <em>Agrandissement</em> et <em>Invisibilité</em> 1 fois par jour (niveau de lanceur de sorts égal au double des niveaux de classe du duergar, niveau 3 minimum). Ces pouvoirs n’affectent que le duergar qui les lance (et ce qu’il porte).</li><li><b>Sensibilité à la lumière (Ext)</b>. Les duergars sont éblouis en plein jour ou dans la zone d’effet du sort lumière du jour.</li><li>Bonus racial de +4 aux tests de Déplacement silencieux.</li><li>Bonus racial de +1 aux tests de Détection et en Perception auditive.</li><li><b>Langues connues d’office</b>. Commun, commun des profondeurs et nain. Ce trait remplace les langues habituelles des nains des collines.</li><li><b>Langues supplémentaires</b>. Draconien, géant, gobelin, orque et terreux.</li><li><b>Classe de prédilection</b>. Guerrier.</li><li><b>Ajustement de niveau</b>. +1.</li><li>Contrairement aux autres nains, les duergars ne sont pas familiers avec la hache de guerre naine et l’urgrosh nain.</li></ul>",
	"deep_dwarf_traits" : "<p>Sauf précision contraire, ces traits s’ajoutent à ceux des nains des montages.</p><ul><li>Le bonus racial aux jets de sauvegarde contre les sorts et pouvoirs magiques passe à +3.</li><li>Le bonus racial aux jets de sauvegarde contre le poison passe à +3.</li><li>Vision dans le noir sur 27 mètres.</li><li><b>Sensibilité à la lumière (Ext)</b>. Les nains des profondeurs sont éblouis en plein jour ou dans la zone d’effet du sort lumière du jour.</li></ul>",

	// Elves
	"elf_traits" : "<p>Voici les traits raciaux des elfes.</p><ul><li>+2 en Dextérité, –2 en Constitution.</li><li>Immunité contre les sorts et effets magiques de type sommeil. Bonus racial de +2 aux jets de sauvegarde contre les sorts et effets magiques de type enchantement.</li><li>Vision nocturne.</li><li><b>Maniement des armes</b>. Formation automatique au maniement de l’épée longue, de la rapière, de l’arc long (composite ou non) et de l’art court (composite ou non).</li><li>Bonus racial de +2 aux tests de Détection, Fouille et Perception auditive. Lorsqu’ils passent à 1,50 mètre ou moins d’une porte dissimulée ou d’un passage secret, ils ont droit à un test de Fouille pour le remarquer.</li><li><b>Langues connues d’office</b>. Commun et elfe.</li><li><b>Langues supplémentaires</b>. Draconien, gnoll, gnome, gobelin, orque et sylvestre.</li><li><b>Classe de prédilection</b>. Magicien.</li><li><b>Ajustement de niveau</b>. +0.</li></ul>",
	"aquatic_elf_traits" : "<p>Les elfes aquatiques possèdent les traits suivants, en plus de ceux des elfes (sauf mention contraire).</p><ul><li>+2 en Dextérité, –2 en Intelligence. Ces ajustements remplacent ceux des elfes.</li><li>Les elfes aquatiques ont le sous-type aquatique.</li><li>La vitesse de base de nage d’un elfe aquatique est de 12 mètres.</li><li><b>Branchies</b>. Les elfes aquatiques peuvent survivre hors de l’eau pendant 1 heure par point de Constitution (passé ce délai, consultez les règles concernant l’asphyxie).</li><li><b>Vision nocturne exceptionnelle</b>. Ils voient quatre fois plus loin que les humains (et non deux) dans des conditions de faible luminosité (clarté de la lune ou des étoiles, torche, etc.). Ce trait remplace la vision nocturne des elfes.</li><li><b>Classe de prédilection</b>. Guerrier. Ce trait remplace la classe de prédilection des elfes.</li></ul>",
	"drow_traits" : "<p>Les drows possèdent les traits suivants, en plus de ceux des elfes (sauf mention contraire).</p><ul><li>+2 en Intelligence, +2 en Charisme.</li><li>Vision dans le noir sur 36 mètres. Ce trait remplace la vision nocturne des elfes.</li><li>Résistance à la magie de 11 + niveaux de classe.</li><li>Bonus racial de +2 aux jets de Volonté contre les sorts et les pouvoirs magiques.</li><li><b>Pouvoirs magiques</b>. Lueur féerique, lumières dansantes et ténèbres 1 fois par jour. Niveau de lanceur de sorts égal aux niveaux de classe de l’elfe noir.</li><li><b>Maniement des armes</b>. Formation automatique au maniement de l’arbalète de poing, de la rapière, de l’épée courte.</li><li><b>Vulnérabilité à la lumière (Ext)</b>. Une exposition brutale à une vive lumière (telle que les rayons du soleil ou l’effet du sort lumière du jour) aveugle les drows pendant 1 round. Par la suite, ils sont l’éblouis tant qu’ils restent dans la zone illuminée.</li><li><b>Langues connues d’office</b>. Commun, commun des profondeurs et elfe.</li><li><b>Langues supplémentaires</b>. Abyssal, aquatique, draconien, gnome, gobelin, kua-toa, langue des signes drow.</li><li><b>Classe de prédilection</b>. Magicien (hommes) ou prêtre (femmes). Ce trait remplace la classe de prédilection des elfes.</li><li><b>Ajustement de niveau</b>. +2.</li></ul>",
	"gray_elf_traits" : "<p>Les elfes gris possèdent les traits suivants, en plus de ceux des elfes.</p><ul><li>+2 en Intelligence, –2 en Force.</li></ul>",
	"wild_elf_traits" : "<p>Les elfes sauvages possèdent les traits suivants, en plus de ceux des elfes (sauf mention contraire).</p><ul><li>+2 en Dextérité, –2 en Intelligence. Ces ajustements remplacent ceux des elfes.</li><li><b>Classe de prédilection</b>. Ensorceleur. Ce trait remplace la classe de prédilection des elfes.</li></ul>",
	"wood_elf_traits" : "<p>Les elfes des bois possèdent les traits suivants, en plus de ceux des elfes (sauf mention contraire).</p><ul><li>+2 en Force, –2 en Intelligence.</li><li><b>Classe de prédilection</b>. Rôdeur. Ce trait remplace la classe de prédilection des elfes.</li></ul>",
	"half_elf_traits" : "<p>Voici les traits raciaux des demi-elfes.</p><ul><li>Immunité contre les sorts et effets magiques de type sommeil. Bonus racial de +2 aux jets de sauvegarde contre les sorts et effets magiques de type enchantement.</li><li>Vision nocturne.</li><li>Bonus racial de +1 aux tests de Détection, Fouille et Perception auditive. Les demi-elfes sont incapables de détecter portes dissimulées et passages secrets rien qu’en passant à côté (ils doivent les chercher normalement).</li><li>Bonus racial de +2 aux tests de Diplomatie et Renseignement. Les demi-elfes s’entendent facilement dans n’importe quelle société. Ce bonus peut être annulé dans les régions où les demi- elfes sont mal vus (comme dans un village humain reculé).</li><li><b>Sang elfique</b>. Les demi-elfes sont considérés comme des elfes à part entière pour tous les effets dépendant de la race. Les demi- elfes sont aussi vulnérables aux attaques qui ciblent les elfes que leurs ancêtres, et ils peuvent utiliser les objets magiques réservés aux elfes.</li><li><b>Langues connues d’office</b>. Commun et elfe.</li><li><b>Langues supplémentaires</b>. Au choix (à l’exception des langages secrets, tels que la langue des druides).</li><li><b>Classe de prédilection</b>. Spécial. La classe la plus élevée d’un demi-elfe multiclassé n’est pas prise en compte quand on détermine s’il subit ou non un malus de PX.</li><li><b>Ajustement de niveau</b>. +0.</li></ul>",

	// Gnomes
	"gnome_traits" : "<p>Les gnomes bénéficient des traits raciaux suivants.</p><ul><li>+2 en Constitution, –2 en Force.</li><li><b>Petite taille</b>. Bonus de +1 à la classe d’armure, bonus de +1 aux jets d’attaque, bonus de +4 aux tests de Discrétion, malus de –4 aux tests de lutte. Le poids transportable et la charge qu’ils peuvent soulever correspondent à 75 % de ceux des créatures de taille M.</li><li>Vision nocturne.</li><li><b>Armes familières</b>. Les gnomes peuvent considérer le marteau-piolet gnome comme une arme de guerre plutôt que comme une arme exotique.</li><li>Bonus racial de +2 aux jets de sauvegarde contre les illusions.</li><li>Bonus de +1 au DD du jet de sauvegarde contre tous les sorts de l’école des illusions lancés par un gnome. Ce bonus se cumule avec les autres bonus du même genre, comme celui d’École de prédilection.</li><li>Bonus racial de +1 au jet d’attaque contre les kobolds et les gobelinoïdes (gobelins, hobgobelins et gobelours).</li><li>Bonus d’esquive de +4 contre les créatures appartenant au type géant (comme les ogres, les trolls et les géants de collines).</li><li>Bonus racial de +2 aux tests de Perception auditive.</li><li>Bonus racial de +2 aux tests d’Artisanat (alchimie).</li><li><b>Langues connues d’office</b>. Commun et gnome.</li><li><b>Langues supplémentaires</b>. Draconien, elfe, géant, gobelin, nain et orque.</li><li><b>Pouvoirs magiques</b>. Niveau de lanceur de sorts de 1, DD des jets de sauvegarde de 10 + le modificateur de Cha du gnome + le niveau du sort.</li><li><em>Communication avec les animaux</em> (animaux fouisseurs uniquement) 1 fois par jour.</li><li>Les gnomes ayant au moins 10 en Charisme ont aussi les pouvoirs magiques suivants :</li><li><em>Lumières dansantes</em>, <em>Prestidigitation</em> et <em>Son imaginaire</em> 1 fois par jour.</li><li><b>Classe de prédilection</b>. Barde.</li><li><b>Ajustement de niveau</b>. +0.</li></ul>",
	"svirfneblin_traits" : "<p>Sauf précision contraire, ces traits s’ajoutent à ceux des gnomes des roches.</p><ul><li>–2 en Force, +2 en Dextérité, +2 en Sagesse, –4 en Charisme. Ces ajustements remplacent ceux des gnomes des roches.</li><li><b>Connaissance de la pierre</b>. Les svirfnebelins bénéficient d’un bonus racial de +2 à tous les tests de Fouille visant à remarquer que la roche a été travaillée de manière inhabituelle. Un svirfnebelin approchant à 3 mètres ou moins de l’endroit travaillé a droit à un test de Fouille automatique comme s’il était en train de fouiller activement, et il peut utiliser cette compétence comme un roublard pour détecter les pièges intégrés à la roche. Il sait également à tout instant à quelle profondeur il se trouve sous terre, de même qu’un humain distingue sans réfléchir le haut du bas.</li><li>Vision dans le noir sur 36 mètres et vision nocturne.</li><li>Résistance à la magie de 11 + niveaux de classe.</li><li>Bonus racial de +2 à tous les jets de sauvegarde. Ce trait remplace le bonus racial des gnomes des roches contre les illusions.</li><li>Bonus de +1 au DD du jet de sauvegarde contre tous les sorts de l’école des illusions lancés par un gnome. Ce bonus se cumule avec les autres bonus du même genre, comme celui d’École de prédilection.</li><li>Bonus racial de +1 au jet d’attaque contre les kobolds et les gobelinoïdes.</li><li>Bonus d’esquive de +4 contre toutes les créatures. Ce trait remplace le bonus d’esquive des gnomes des roches contre les géants.</li><li><b>Langues connues d’office</b>. Commun, commun des profondeurs et gnome.</li><li><b>Langues supplémentaires</b>. Draconien, elfe, géant, gobelin, nain, orque et terreux. Ce trait remplace les langues d’office et supplémentaires des gnomes des roches.</li><li><b>Pouvoirs magiques</b>. Niveau de lanceur de sorts égal aux niveaux de classe du svirfnebelin. Les DD de sauvegarde sont liés au Charisme et incluent un bonus racial de +4. Ce trait remplace les pouvoirs magiques des gnomes des roches.</li><li><em>Cécité/surdité</em> (typiquement DD 13), <em>Déguisement</em> et <em>Flou</em> 1 fois par jour.</li><li><b>Antidétection (Sur)</b>. Les svirfnebelins sont protégés en permanence par l’équivalent du sort antidétection (niveau de lanceur de sorts égal aux niveaux de classe du svirfnebelin).</li><li>Bonus racial de +2 aux tests d’Artisanat (alchimie) et aux tests de Perception auditive.</li><li>Bonus racial de +2 aux tests de Discrétion, bonus qui passe à +4 sous terre.</li><li><b>Classe de prédilection</b>. Roublard.</li><li><b>Ajustement de niveau</b>. +3.</li></ul>",
	"forest_gnome_traits" : "<p>Sauf précision contraire, ces traits s’ajoutent à ceux des gnomes des roches.</p><ul><li><b>Passage sans trace (Sur)</b>. Dès la naissance, les gnomes des forêts ont la faculté de se déplacer en forêt sans laisser de traces de leur passage, comme s’ils employaient le sort passage sans trace (uniquement sur lui-même, par une action libre ; niveau de lanceur de sorts égal aux niveaux de classe du gnome).</li><li>Bonus racial de +1 aux jets d’attaque contre les kobolds et les gobelinoïdes, les orques et les humanoïdes reptiliens.</li><li><b>Langues connues d’office</b>. Gnome, elfe, sylvestre et un langage extrêmement simpliste leur permettant de communiquer quelques concepts de base aux animaux de la forêt (cela remplace le pouvoir de <em>Communication avec les animaux</em> des gnomes des roches).</li><li><b>Langues supplémentaires</b>. Commun, draconien, elfe, géant, gobelin, nain et orque. Ce trait remplace les langues d’office et supplémentaires des gnomes des roches.</li><li>Bonus racial de +4 aux tests de Discrétion, qui passe à +8 dans les régions boisées.</li></ul>",

	// Halflings
	"halfling_traits" : "<p>Les halfelins possèdent les traits raciaux suivants.</p><ul><li>+2 en Dextérité, –2 en Force.</li><li><b>Petite taille</b>. Bonus de +1 à la classe d’armure, bonus de +1 aux jets d’attaque, bonus de +4 aux tests de Discrétion, malus de –4 aux tests de lutte. Le poids transportable et la charge qu’ils peuvent soulever correspondent à 75 % de ceux des créatures de taille M.</li><li>Bonus racial de +2 aux tests de Déplacement silencieux, Escalade et Saut.</li><li>Bonus racial de +1 à tous les jets de sauvegarde.</li><li>Bonus de moral de +2 aux jets de sauvegarde contre la terreur (qui vient s’ajouter au bonus de +1 mentionné ci- dessus).</li><li>Bonus racial de +1 aux jets d’attaque avec les armes de jet et les frondes.</li><li>Bonus racial de +2 aux tests de Perception auditive.</li><li><b>Langues connues d’office</b>. Commun et halfelin.</li><li><b>Langues supplémentaires</b>. Elfe, gnome, gobelin, nain et orque.</li><li><b>Classe de prédilection</b>. Roublard.</li><li><b>Ajustement de niveau</b>. +0.</li></ul>",
	"deep_halfling_traits" : "<p>Sauf précision contraire, ces traits s’ajoutent à ceux des pieds- légers.</p><ul><li>Vision dans le noir sur 18 mètres.</li><li><b>Connaissance de la pierre</b>. Tout comme les nains, les halfelins des profondeurs bénéficient d’un bonus racial de +2 à tous les tests de Fouille visant à remarquer que la roche a été travaillée de manière inhabituelle. Elle fonctionne également si la surface travaillée n’est pas en pierre, pour peu qu’elle en ait l’aspect. Un halfelin des profondeurs approchant à 3 mètres ou moins de l’endroit travaillé a droit à un test de Fouille automatique, et il peut utiliser cette compétence comme un roublard pour détecter les pièges intégrés à la roche. Il sait également à tout instant à quelle profondeur il se trouve sous terre, de même qu’un humain distingue sans réfléchir le haut du bas.</li><li>Les halfelins des profondeurs gagnent automatiquement un bonus racial de +2 aux tests d’Artisanat et d’Estimation liés à la pierre ou aux métaux.</li><li>Moins athlétiques que les pieds-légers, ils ne bénéficient pas de bonus aux tests de Déplacement silencieux, d’Escalade ou de Saut.</li></ul>",
	"tallfellow_halfling_traits" : "<p>Sauf précision contraire, ces traits s’ajoutent à ceux des pieds-légers.</p><ul><li>Bonus racial de +2 aux tests de Détection, Fouille et Perception auditive. Tout comme un elfe, un Grand passant à 1,50 mètre ou moins d’un passage secret a automatiquement droit à un test de Fouille, comme s’il le cherchait activement. Ce trait remplace le bonus racial de +2 aux tests de Perception auditive des pieds-légers.</li><li>Moins athlétiques que les pieds-légers, les Grands ne bénéficient pas de bonus aux tests de Déplacement silencieux, d’Escalade ou de Saut.</li></ul>",

	// Monster Abilities
	"armor_discomfort" : "<p>La créature subit une pénalité supplémentaire de -2 au malus d’armure aux tests, aux jets d’attaque, et à tous les tests de compétence impliquant un déplacement (ce qui inclut l’Équitation) lorsqu’elle porte une armure. Elle se voit également infligée une pénalité additionnelle de +10% au risque d’échec des sorts profanes.</p>",
	"rend" : "<p>Si la créature réussit deux attaques de griffes sur un adversaire au cours du même round, elle lui déchire violemment l’abdomen, occasionnant automatiquement des dégâts supplémentaires à sa victime.</p>",

	// Cross-class Features
	"trap_sense" : "<p>À partir du niveau 3, un barbare ou un roublard acquiert un sens intuitif lui permettant d’éviter les dangers des pièges, ce qui se traduit par un bonus de +1 aux jets de Réflexes effectués pour éviter les pièges et un bonus d’esquive de +1 à la CA contre les attaques déclenchées par des pièges. Ces bonus augmentent de +1 tous les 3 niveaux de class supplémentaires (+2 au niveau 6, +3 au niveau 9, +4 au niveau 12, +5 au niveau 15 et +6 au niveau 18).</p><p>Les bonus de <strong>Sens des pièges</strong> provenant de plusieurs classes se cumulent entre eux.</p>",
	"uncanny_dodge" : "<p>Le personnage peut réagir instinctivement avant même que ses sens ne décèlent une menace. Il conserve son bonus de Dextérité à la CA même s’il est pris au dépourvu ou attaqué par un adversaire invisible (il perd toujours ce bonus s’il est immobilisé).</p><p>Un barbare obtient l’<strong>Esquive instinctive</strong> au niveau 2 tandis qu’un roublard l’obtient au niveau 4.</p><p>Si un barbare ou un roublard possède déjà l’<strong>Esquive instinctive</strong> grâce à une autre classe, il obtient automatiquement l’<strong>Esquive instinctive supérieure</strong> au lieu de l’<strong>Esquive instinctive</strong>.</p>",
	"improved_uncanny_dodge" : "<p>Au niveau 5, le barbare ne peut plus être pris en tenaille, car il pare les assauts de ses adversaires avec autant d’aisance que s’ils venaient tous de la même direction. Les roublards ne peuvent plus lui porter des attaques sournoises en le prenant en tenaille, à moins d’avoir au moins 4 niveaux de roublard de plus que le personnage n’a de niveaux de barbare.</p><p>Si un personnage possède déjà l’aptitude d’<strong>Esquive instinctive</strong> grâce à une autre classe, il obtient l’<strong>Esquive instinctive supérieure</strong> et les niveaux des différentes classes proposant cette aptitude se cumulent pour déterminer le niveau de roublard nécessaire pour le prendre en tenaille.</p><p>Un barbare obtient l’<strong>Esquive instinctive supérieure</strong> au niveau 5 tandis qu’un roublard l’obtient au niveau 8.</p>",
	"summon_familiar" : "<p>Le personnage a la possibilité d’appeler un familier, ce qui lui demande une journée entière et des composantes matérielles valant 100 po. Un familier est une créature magique qui ressemble à un petit animal, mais plus résistant et plus intelligent. Il est autant le compagnon que le serviteur du personnage.</p><p>Le personnage choisit le type de familier qui répond à son appel. La puissance du familier croît avec celle de son maître.</p><p>Si le familier meurt ou si le personnage le renvoie, le personnage doit jouer un jet de Vigueur (DD 15). En cas d’échec, il perd 200 PX par niveau de classe (en cas de réussite, ce total est réduit de moitié). Le nombre de points d’expérience du personnage ne peut jamais tomber en dessous de 0 suite au décès ou au renvoi de son familier. Un familier tué ou renvoyé ne peut être remplacé avant un an et un jour. Les familiers peuvent être ramenés à la vie de la même manière que les personnages, mais eux ne perdent alors pas de niveau (ou de points de Constitution).</p><p>Un personnage multiclassé dont plusieurs classes donnent droit à un familier ne peut tout de même avoir qu’un familier à la fois.</p>",
	"animal_companion" : "<p>Au début du jeu, un druide peut avoir un compagnon animal choisi dans la liste suivante : aigle, blaireau, chameau, cheval (léger ou lourd), chien de selle, chien, chouette, faucon, loup, poney, rat sanguinaire et serpent venimeux (petit ou de taille moyenne). Si la campagne se déroule entièrement ou partiellement dans un milieu aquatique, on peut ajouter les animaux suivants à cette liste : calmar, marsouin et requin de taille moyenne. Un compagnon animal suit loyalement le personnage au cours de ses aventures au mieux de ses capacités.</p><p>Le compagnon animal d’un druide de niveau 1 est un animal tout à fait normal pour son espèce, aux exceptions indiquées plus loin. Lorsque le druide progresse en expérience, la puissance de l’animal augmente elle aussi.</p><p>Si un druide décide de se séparer de son compagnon animal, il peut en obtenir un autre en accomplissant un rituel qui nécessite 24 heures de prières ininterrompues. Cette cérémonie peut aussi permettre de remplacer un compagnon animal qui aurait été tué.</p><p>Un druide de niveau 4 ou plus peut choisir un compagnon animal hors norme (voir plus loin). Dans ce cas, l’animal augmente en puissance comme si le personnage était d’un niveau de druide moins élevé. Il faut retirer le nombre indiqué dans l’en-tête correspondant à l’animal choisi au niveau de druide du personnage pour déterminer la puissance de l’animal. (Si cet ajustement réduit le niveau effectif de druide à 0 ou moins, le personnage ne peut posséder un compagnon animal de cette espèce.)</p><hr><p>À partir du niveau 4, un rôdeur peut avoir un compagnon animal choisi dans la liste suivante : aigle, blaireau, chameau, cheval (léger ou lourd), chien de selle, chien, chouette, faucon, loup, poney, rat sanguinaire et serpent venimeux (petit ou de taille moyenne). Si la campagne se déroule entièrement ou partiellement dans un milieu aquatique, on peut ajouter les animaux suivant à cette liste : calmar, marsouin et requin de taille moyenne. Un compagnon animal suit loyalement le personnage au cours de ses aventures au mieux de ses capacités. (Par exemple, une créature aquatique ne peut suivre un rôdeur sur terre et ne peut être choisi par un rôdeur n’habitant pas un milieu aquatique qu’avec des circonstances extraordinaire.) En tous cas, le rôle du compagnon animal est celui d’une monture, d’une sentinelle, d’un éclaireur ou d’un animal de chasse, mais pas celui d’un protecteur.</p><p>Cet aptitude fonctionne exactement comme celle de druide du même nom si ce n’est que le niveau de druide effectif du personnage n’est que la moitié de son niveau de rôdeur. Un rôdeur peut choisir un compagnon animal hors- norme, au même titre qu’un druide, mais encore avec un niveau effectif divisé par deux. Comme pour un druide, un rôdeur ne peut choisir un compagnon animal qui réduirait son niveau de druide effectif à 0 ou moins.</p>",
	"wild_empathy" : "<p>Un druide ou un rôdeur peut ajuster son comportement, son langage et ses expressions corporelles pour améliorer l’attitude d’un animal (comme un ours ou un varan). Cette aptitude suit les mêmes règles que les tests de Diplomatie joués pour modifier l’attitude d’une personne. Le résultat d’un test d’<strong>Empathie sauvage</strong> est déterminé par 1d20 + le niveau du druide ou du rôdeur + le modificateur de Charisme du druide. L’attitude initiale des animaux domestiques est l’indifférence, tandis que les animaux sauvages sont généralement inamicaux.</p><p>Pour utiliser l’<strong>Empathie sauvage</strong>, le druide ou le rôdeur et l’animal doivent être en mesure de se voir et de s’étudier l’un l’autre, ce qui signifie qu’ils doivent se trouver à moins de 9 mètres de distance dans des conditions normales. Il faut en moyenne une minute pour influencer un animal de cette façon, mais, comme pour la diplomatie, cela peut parfois prendre plus longtemps ou être plus rapide.</p><p>Cette aptitude peut aussi servir à un druide ou à un rôdeur pour influencer une créature magique dont la valeur d’Intelligence est de 1 ou 2 (comme un basilic ou un girallon), avec cependant un malus de –4 sur son test.</p>",
	"woodland_stride" : "<p>Le personnage se déplace sans la moindre gêne dans toutes sortes de taillis, y compris les fourrés, les buissons (même épineux) et les autres zones de végétation dense. Il progresse normalement et ne subit aucun dégât. À noter toutefois que la végétation enchantée de manière à restreindre le mouvement continue de l’affecter.</p><p>Un druide obtient <strong>Déplacement accéléré</strong> au niveau 2 tandis qu’un rôdeur l’obtient au niveau 7.</p>",
	"timeless_body" : "<p>À partir du niveau 15, le druide ne subit plus les effets du vieillissement et devient immunisé contre les attaques provoquant un vieillissement accéléré. Les malus qu’il aurait pu subir avant d’atteindre ce niveau ne sont pas effacés pour autant. Le druide continue de vieillir et en tire tous les bénéfices en termes de bonus. Il meurt toujours de vieillesse lorsque son heure et venue.</p><p>Un druide obtient <strong>Éternelle jeunesse</strong> au niveau 15 tandis qu’un moine l’obtient au niveau 17.</p>",

	// Fighter
	"fighter_features" : "<p><strong>Armes et armures</strong>. Le guerrier est formé au maniement de toutes les armes courantes, des armes de guerre et des boucliers (y compris les pavois). Il est également formé au port de toutes les armures (légères, intermédiaires et lourdes).</p><p><strong>Dons supplémentaires</strong>. Au niveau 1, le guerrier peut choisir un don supplémentaire, en plus de celui auquel tout le monde a droit et de celui qui est offert aux humains. Par la suite, il en gagne un autre tous les niveaux pairs (2, 4, 6, 8, 10, 12, 14, 16, 18 et 20). Ses dons supplémentaires doivent forcément être choisis parmi ceux qui sont indiqués comme étant des dons de guerrier. Le personnage doit satisfaire à toutes les conditions requises pour chaque don, y compris les valeurs de caractéristiques et le bonus à l’attaque minimaux.</p><p>Ces dons sont obtenus en plus de ceux que n’importe quel personnage acquiert tous les trois niveaux. Lorsqu’il choisit un des dons auxquels tout le monde a droit, le guerrier n’est pas limité à la liste ci-dessus.</p>",

	// Barbarian
	"barbarian_features" : "<p><strong>Armes et armures</strong>. Le barbare est formé au maniement de toutes les armes courantes, des armes de guerre et des boucliers (à l’exception des pavois). Il est également formé au port des armures légères et intermédiaires.</p><p><strong>Illettrisme</strong>. Les barbares sont les seuls aventuriers qui ne sachent pas automatiquement lire et écrire. Ils peuvent dépenser 2 points de compétence pour apprendre d’un coup à lire et écrire toutes les langues qu’ils parlent.</p><p>Un barbare qui prend un niveau dans une autre classe apprend en même temps à lire. Un personnage d’une autre classe ne devient pas illettré s’il prend un niveau de barbare.</p><p><strong>Anciens barbares</strong>. Un barbare devenant loyal perd l’aptitude de rage de berserker et est incapable de progresser en niveau en tant que barbare. Il conserve toutefois ses autres aptitudes de classe (Déplacement accéléré, Esquive instinctive, Réduction des dégâts et Sens des pièges).</p>",
	"barbarian_fast_movement" : "<p>La vitesse de déplacement au sol d’un barbare est supérieure de +3 mètres à la norme de sa race. Ce bonus ne s’applique que s’il ne porte pas d’armure lourde ou de charge lourde. On applique le bonus avant les modificateurs dus à une armure ou une charge importante. Par exemple, un barbare humain a une vitesse de déplacement de 12 mètres, au lieu de 9 mètres, s’il ne porte pas d’armure ou une armure légère. S’il porte une armure intermédiaire, sa vitesse passe à 9 mètres. Un barbare halfelin a une vitesse de 9 mètres, au lieu de 6 mètres, lorsqu’il ne porte pas d’armure ou un armure légère. Lorsqu’il porte une armure intermédiaire (ou qu’il porte une charge intermédiaire), sa vitesse passe à 6 mètres.</p>",
	"barbarian_rage" : "<p>Un barbare peut entrer dans une rage destructrice un certain nombre de fois par jour. Dans cet état, il devient incroyablement plus fort et plus résistant, mais son mépris du danger l’empêche de se défendre efficacement. Il gagne temporairement un bonus de +4 en Force, un bonus de +4 en Constitution ainsi qu’un bonus de moral de +2 aux jets de Volonté, mais subit dans le même temps un malus de –2 à la classe d’armure.</p><p>Cette augmentation de Constitution lui confère 2 points de vie supplémentaires par niveau global, mais ces points de vie disparaissent immédiatement lorsque sa valeur de Constitution retombe à son niveau normal (ils ne disparaissent pas en premier, contrairement aux points de vie temporaires). Au cours de sa rage, un barbare est incapable d’utiliser les compétences associées à la Dextérité, l’Intelligence ou le Charisme (à l’exception d’Équilibre, Équitation, Évasion et Intimidation), la compétence Concentration ou les aptitudes exigeant un minimum de patience ou de concentration, ainsi que lancer des sorts ou activer des objets magiques à mot de commande, à potentiel magique (comme les baguettes) ou à fin d’incantation (comme les parchemins). Il peut se servir de tous ses dons, à l’exception d’<strong>Expertise du combat</strong> et des dons de création d’objets ou de métamagie.</p><p>Une crise de rage dure 3 rounds + modificateur de Constitution (c’est la valeur augmentée de 4 points qui est prise en compte pour ce calcul). S’il le souhaite, le personnage peut y mettre un terme prématurément. Quand le taux d’adrénaline retombe, le barbare perd les modificateurs de la rage et devient fatigué (malus de –2 en Force et en Dextérité, incapable de charger ou de courir) jusqu’à la fin de la rencontre (à moins qu’il ait atteint le niveau 17, auquel cas ce handicap ne le concerne plus).</p><p>Un barbare ne peut devenir enragé qu’une fois par rencontre. Au niveau 1, il peut utiliser sa rage de berserker une fois par jour. Au niveau 4 et pour chaque 4 niveaux après cela, il gagne une utilisation quotidienne supplémentaire (jusqu’à un maximum de 6 fois par jour au niveau 20). La transformation ne demande aucune action, mais le personnage ne peut s’y livrer que durant son tour de jeu, pas en réponse à l’action d’un autre. Il lui est par exemple impossible d’entrer dans une rage folle pour bénéficier des points de vie supplémentaires lorsqu’il reçoit une blessure (pour que les pv additionnels lui soient utiles, il lui faut anticiper le risque et faire appel à son aptitude avant que l’adversaire ne frappe).</p>",
	"barbarian_damage_reduction" : "<p>À partir du niveau 7, la résistance du barbare lui permet d’ignorer une partie des dégâts infligés par les coups qu’il encaisse. Chaque fois que le personnage est frappé par une arme ou une attaque naturelle, les dégâts qu’il subit sont diminués de 1 point. Au niveau 10, puis tous les 3 niveaux de barbare suivants (niveaux 13, 16 et 19), cette réduction des dégâts augmente d’un point. Ce pouvoir peut amener les dégâts d’une attaque à 0, mais pas en dessous.</p>",
	"greater_rage" : "<p>À partir du niveau 11, la rage de berserker confère au barbare un bonus de +6 en Force et en Constitution, ainsi qu’un bonus de moral de +3 aux jets de Volonté. Le malus à la CA reste de –2.</p>",
	"indomitable_will" : "<p>À partir du niveau 14, un barbare obtient pendant sa rage un bonus de +4 sur ses jets de Volonté joués pour résister aux sorts de l’école des enchantements. Ce bonus se cumule avec les autres modificateurs, y compris le bonus de moral sur les jets de Volonté qu’il reçoit pendant sa rage.</p>",
	"tireless_rage" : "<p>Au niveau 17 et au-delà, un barbare n’est plus fatigué au terme de sa rage de berserker.</p>",
	"mighty_rage" : "<p>Au niveau 20, la rage de berserker confère au barbare un bonus de +8 en Force et en Constitution, ainsi qu’un bonus de moral de +4 aux jets de Volonté. Le malus à la CA reste de –2.</p>",

	// Paladin
	"paladin_features" : "<p><strong>Armes et armures</strong>. Le paladin est formé au maniement des armes courantes, des armes de guerre et des boucliers (à l’exception des pavois). Il est également formé au port de toutes les armures (légères, intermédiaires et lourdes).</p><p><strong>Sorts</strong>. Dès le niveau 4, un paladin peut lancer un petit nombre de sorts divins (du même type que ceux des druides, prêtres et rôdeurs) appartenant à la liste de sorts de sa classe. Un paladin doit choisir et préparer ses sorts à l’avance.</p><p>La Sagesse est la caractéristique primordiale des sorts de paladin. Pour préparer ou lancer un sort, un paladin doit avoir une valeur de Sagesse au moins égale à 10 + le niveau du sort (soit Sag 11 pour les sorts du 1er niveau, Sag 12 pour ceux du 2e niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur de Sagesse du paladin.</p><p>Comme les autres lanceurs de sorts, le paladin ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur de Sagesse est suffisamment élevée. Les paladins ne bénéficient pas de sorts de domaines ou de pouvoirs accordés, contrairement aux prêtres.</p><p>Un paladin prépare et lance ses sorts comme un prêtre, si ce n’est qu’il est incapable de transformer spontanément ses sorts en sorts de soins ou de blessure. Un paladin peut lancer tous les sorts de la liste des sorts de paladin, à condition de pouvoir lancer des sorts de ce niveau, mais il doit choisir quels sort préparer au cours de sa méditation quotidienne.</p><p>Jusqu’au niveau 3, le paladin n’a pas de niveau de lanceur de sorts. À partir du niveau 4, son niveau de lanceur de sorts est égal à la moitié de son niveau de paladin.</p><p><strong>Code de conduite</strong>. Le paladin est obligatoirement loyal bon. S’il commet sciemment un acte maléfique, il perd aussitôt son statut et ses pouvoirs. De plus, son code de conduite l’oblige à respecter l’autorité légitime, à se comporter de façon honorable (c’est-à-dire à ne pas mentir, tricher, utiliser le poison, etc.), à aider les gens dans le besoin (à condition qu’ils ne cherchent pas à utiliser le paladin dans un but chaotique ou maléfique), et à châtier ceux qui menacent ou maltraitent les innocents.</p><p><strong>Compagnons</strong>. Le paladin peut faire partie d’un groupe réunissant des personnages d’alignement bon ou neutre, mais il ne s’associera jamais avec quelqu’un qu’il sait malfaisant. De même, il ne peut pas rester en compagnie de quelqu’un qui bafoue sans cesse son code de conduite. Enfin, il ne peut louer les services d’hommes d’armes que si ces derniers sont bons et loyaux.</p><p><strong>Anciens paladins</strong>. Un paladin changeant d’alignement, commettant sciemment un acte maléfique ou bafouant son code de conduite perd son statut, ses sorts, ses pouvoirs et son destrier (mais pas sa formation au maniement des armes et au ports des armures). Il est alors incapable de progresser en niveaux dans cette classe. Il récupère son statut et ses capacités s’il fait acte de contrition (voir le sort <em>Pénitence</em>).</p><p>Comme tout le monde, le paladin peut être multiclassé, mais il doit s’accommoder d’une restriction que ne connaissent pas les autres personnages (moine excepté) : s’il change de classe ou s’il gagne un niveau dans une classe qu’il possédait avant de devenir paladin, il ne pourra plus jamais améliorer son niveau de paladin (il conserve toutefois les pouvoirs acquis jusque-là). La voie du paladin requiert une grande constance. Quand on s’y engage, il faut laisser toutes les autres carrières de côté. Et si jamais l’on en dévie, il devient impossible de la retrouver.</p>",
	"aura_of_good" : "<p>Un paladin génère une puissante aura de Bien (voir le sort <em>Détection du Mal</em>), égale à son niveau de paladin et identique à l’aura d’un prêtre d’un dieu d’alignement bon.</p>",
	"detect_evil" : "<p>Un paladin peut utiliser à volonté la <em>Détection du Mal</em>, reproduisant les effets du sort.</p>",
	"smite_evil" : "<p>Une fois par jour, un paladin peut tenter de châtier une créature maléfique avec une attaque de corps à corps normale. Dans ce cas, il ajoute son bonus de Charisme (s’il en a un) au jet d’attaque et inflige 1 point de dégâts supplémentaire par niveau de paladin. Par exemple, un paladin de niveau 13 armé d’une épée longue infligera 1d8+13 points de dégâts (plus tous les autres modificateurs, comme ceux de Force, de magie, etc.). Si le personnage utilise accidentellement cette faculté contre une créature qui n’est pas d’alignement mauvais, le châtiment n’a aucun effet, mais il est tout de même dépensé.</p><p>Au niveau 5, et tous les 5 niveaux suivants, le paladin obtient une utilisation quotidienne supplémentaire de son pouvoir de châtiment du Mal (soit 2 au niveau 5, 3 au niveau 10, 4 au niveau 15 et 5 au niveau 20).</p>",
	"divine_grace" : "<p>Un paladin de niveau 2 ou plus bénéficie d’un bonus à tous ses jets de sauvegarde égal à son bonus de Charisme (s’il en a un).</p>",
	"lay_on_hands" : "<p>À partir du niveau 2, un paladin dont la valeur de Charisme est au moins de 12 peut refermer ses blessures ou celles de ses camarades d’un simple contact. Chaque jour, il peut restaurer un nombre de points de vie égal à son niveau ´  son bonus de Charisme. Le paladin a la possibilité de répartir ses soins entre autant de patients qu’il le souhaite (il n’a pas besoin d’utiliser tout son pouvoir curatif d’un seul coup). L’utilisation d’imposition des mains nécessite une action simple.</p><p>Le paladin peut également utiliser tout ou partie de ce pouvoir pour infliger des dégâts aux morts- vivants. Cela nécessite une attaque de contact au corps à corps, qui ne provoque pas d’attaque d’opportunité. Le paladin décide du nombre de points de dégâts qu’il souhaite lui infliger seulement une fois qu’il a touché son adversaire.</p>",
	"aura_of_courage" : "<p>Un paladin de niveau 3 est immunisé contre la terreur (magique ou non). Dans le même temps, tous ses alliés situés à 3 mètres ou moins bénéficient d’un bonus de moral de +4 aux jets de sauvegarde contre tous les effets de terreur. Cette aptitude fonctionne tant que le paladin est conscient, mais pas s’il est inconscient ou mort.</p>",
	"divine_health" : "<p>Un paladin de niveau 3 est immunisé contre toutes les maladies, y compris celles qui sont d’origine magique ou surnaturelle, comme la lycanthropie et la putréfaction transmise par les momies.</p>",
	"turn_undead" : "<p>Lorsque le paladin atteint le niveau 4, il acquiert le pouvoir de renvoi des morts-vivants. Chaque jour, il peut s’en servir un nombre de fois égal à 3 + son modificateur de Charisme. Il repousse les morts-vivants comme un prêtre ayant trois niveaux de moins que lui.</p>",
	"special_mount" : "<p>Dès qu’il a atteint le niveau 5, le personnage peut appeler un destrier intelligent, puissant et loyal qui l’épaule dans son combat permanent contre le Mal (voir plus loin). Cette monture est généralement un destrier lourd (pour un paladin de taille M) et un poney de guerre (pour un paladin de taille P).</p><p>Une fois par jour, et par une action complexe, le paladin peut appeler auprès de lui son destrier depuis les royaumes célestes où il réside. Le destrier apparaît immédiatement à côté du paladin et reste sur ce plan pendant 2 heures par niveau du paladin. Celui-ci peut cependant le renvoyer à tout moment par une action libre. Le paladin convoque toujours la même créature lors de chaque appel, mais il peut la libérer de son service (par exemple, si elle est devenue trop vieille pour l’assister dans sa croisade).</p><p>Quand la monture apparaît, elle est en pleine santé, quels que soient les dégâts qu’elle ait pu subir lors de sa dernière apparition. Elle conserve son équipement d’un appel à l’autre (y compris la barde, la selle, les fontes et ainsi de suite). Appeler ce destrier est un pouvoir de type invocation (appel).</p><p>Si le destrier vient à mourir, il disparaît immédiatement, laissant son équipement derrière lui. Le personnage est incapable d’appeler un autre destrier pendant trente jours (mais il récupère immédiatement cette capacité s’il obtient entre temps un nouveau niveau de paladin), et ce même si la monture est rappelée à la vie d’une façon ou d’une autre. Pendant cette période de trente jours, le paladin subit un malus de –1 aux jets d’attaque et de dégâts d’armes.</p>",
	"remove_disease" : "<p>À partir du niveau 6, le paladin peut lancer <em>Guérison des maladies</em> (comme le sort du même nom) une fois par semaine. Tous les 3 niveaux suivants, il dispose d’une utilisation hebdomadaire supplémentaire (2 par semaine au niveau 6, 3 au niveau 9, etc.).</p>",

	// Ranger
	"ranger_features" : "<p><strong>Armes et armures</strong>. Le rôdeur est formé au maniement des armes courantes, des armes de guerre, ainsi que des boucliers (à l’exception des pavois). Il est formé au port des armures légères.</p><p><strong>Sorts</strong>. Dès le niveau 4, un rôdeur peut lancer un petit nombre de sorts divins (du même type que ceux des druides, paladins et prêtres) appartenant à la liste de sorts de sa classe. Un rôdeur doit choisir et préparer ses sorts à l’avance (voir ci-dessous).</p><p>La Sagesse est la caractéristique primordiale des sorts de rôdeur. Pour préparer ou lancer un sort, un rôdeur doit avoir une valeur de Sagesse au moins égale à 10 + le niveau du sort (soit Sag 11 pour les sorts du 1er niveau, Sag 12 pour ceux du 2e niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur de Sagesse du rôdeur.</p><p>Comme les autres lanceurs de sorts, le rôdeur ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur de Sagesse est suffisamment élevée. Les rôdeurs ne bénéficient pas de sorts de domaines ou de pouvoirs accordés, contrairement aux prêtres.</p><p>Un rôdeur prépare et lance ses sorts comme un prêtre, si ce n’est qu’il est incapable de transformer spontanément ses sorts en sorts de soins ou de blessure. Un rôdeur peut lancer tous les sorts de la liste des sorts de rôdeur, à condition de pouvoir lancer des sorts de ce niveau, mais il doit choisir quels sorts préparer au cours de sa méditation quotidienne.</p><p>Jusqu’au niveau 3, le rôdeur n’a pas de niveau de lanceur de sorts. À partir du niveau 4, son niveau de lanceur de sorts est égal à la moitié de son niveau de rôdeur.</p>",
	"favored_enemy" : "<p>Au niveau 1, le rôdeur choisit un type de créatures pour être ses ennemis jurés. Pour avoir longuement étudié ses ennemis jurés et pour s’être exercé encore et encore aux techniques permettant de les vaincre, il bénéficie d’un bonus de +2 aux tests de Bluff, Détection, Perception auditive, Psychologie et Survie lorsqu’il les utilise contre des créatures de ce type. Il bénéficie également d’un bonus de +2 sur les jets de dégâts d’armes contre ces créatures.</p><p>Au niveau 5 et tous les cinq niveaux par la suite (c’est-à-dire aux niveaux 10, 15 et 20), le rôdeur peut choisir un nouvel ennemi juré. De plus, il peut augmenter de +2 le bonus dont il bénéficie contre l’un de ses ennemis jurés (y compris celui qu’il vient de choisir s’il le désire). Par exemple, un rôdeur de niveau 5 a deux ennemis jurés, un contre lequel il a un bonus de +4 sur les tests de Bluff, Détection, Perception auditive, Psychologie et Survie et les jets de dégâts d’arme et un autre pour lequel le bonus n’est que de +2. Au niveau 10, le même rôdeur a trois ennemis jurés et il peut augmenter son bonus contre l’un d’eux de +2. Ses bonus seront alors soit de +4, +4 et +2, soit de +6, +2 et +2.</p><p>Lorsqu’un rôdeur choisit les Extérieurs ou les humanoïdes comme ennemi juré, il doit aussi choisir un sous-type associé. Si une créature appartient à deux sous-types d’ennemi juré (par exemple, les démons sont à la fois du sous-type Chaos et Mal), les bonus ne se cumulent pas, le rôdeur ne profite que du plus élevé des deux.</p><table><tr><th>Type</th><th>Type (sous-type)</th><th>Type (sous-type)</th></tr><tr><td>Géant</td><td>Humanoïde monstrueux</td><td>Élémentaire</td></tr><tr><td>Animal</td><td>Humanoïde (goblinoïde)</td><td>Extérieur (Air)</td></tr><tr><td>Aberration</td><td>Humanoïde (orque)</td><td>Extérieur (Eau)</td></tr><tr><td>Créature magique</td><td>Humanoïde (gnoll)</td><td>Extérieur (Terre)</td></tr><tr><td>Plante</td><td>Humanoïde (reptilien)</td><td>Extérieur (Feu)</td></tr><tr><td>Vase</td><td>Humanoïde (humain)</td><td>Extérieur (Bien)</td></tr><tr><td>Vermine</td><td>Humanoïde (elfe)</td><td>Extérieur (Mal)</td></tr><tr><td>Fée</td><td>Humanoïde (nain)</td><td>Extérieur (Loi)</td></tr><tr><td>Dragon</td><td>Humanoïde (gnome)</td><td>Extérieur (Chaos)</td></tr><tr><td>Mort-vivant</td><td>Humanoïde (halfelin)</td><td>Extérieur (natif)</td></tr><tr><td>Créature artificielle</td><td>Humanoïde (aquatique)</td><td></td></tr></table>",
	"ranger_combat_style" : "<p>Au niveau 2, un rôdeur doit choisir entre le style de combat à deux armes et le style de combat à distance. Ce choix détermine quelques aptitudes de classe, mais ne limite en rien le rôdeur pour le choix de ses dons ou de ses pouvoirs spéciaux.</p><p>Si le rôdeur choisit le combat à distance, il peut se battre comme s’il possédait le don <strong>Tir rapide</strong>, même s’il n’en remplit pas les conditions.</p><p>Si le rôdeur choisit le combat à deux armes, il peut se battre comme s’il possédait le don <strong>Combat à deux armes</strong>, même s’il n’en remplit pas les conditions.</p><p>Le rôdeur ne doit porter aucune armure ou seulement une armure légère pour bénéficier de son style de combat. Il en perd tous les avantages s’il porte une arme intermédiaire ou lourde.</p>",
	"ranger_improved_combat_style" : "<p>Au niveau 6, le rôdeur progresse dans son style de combat (à deux armes ou à distance).</p><p>S’il a choisi le style de combat à distance au niveau 2, il peut maintenant se battre comme s’il possédait le don <strong>Feu nourri</strong>, même s’il n’en remplit pas les conditions.</p><p>S’il a choisi le style de combat à deux armes au niveau 2, il peut maintenant se battre comme s’il possédait le don <strong>Science du combat à deux armes</strong>, même s’il n’en remplit pas les conditions.</p><p>Comme précédemment, le rôdeur ne doit porter aucune armure ou seulement une armure légère pour bénéficier de son style de combat. Il en perd tous les avantages s’il porte une arme intermédiaire ou lourde.</p>",
	"swift_tracker" : "<p>Un rôdeur de niveau 8 peut se déplacer à sa vitesse habituelle lorsqu’il suit une piste, sans subir le malus de –5 sur ses tests de Survie. Il ne subit qu’un malus de –10 (au lieu de –20) sur ses tests de Survie lorsqu’il se déplace au double de sa vitesse lorsqu’il suit une piste.</p>",
	"ranger_combat_style_mastery" : "<p>Au niveau 11, le rôdeur maîtrise totalement son style de combat (à deux armes ou à distance).</p><p>S’il a choisi le style de combat à distance au niveau 2, il peut maintenant se battre comme s’il possédait le don <strong>Science du tir de précision</strong>, même s’il n’en remplit pas les conditions.</p><p>S’il a choisi le style de combat à deux armes au niveau 2, il peut maintenant se battre comme s’il possédait le don <strong>Maîtrise du combat à deux armes</strong>, même s’il n’en remplit pas les conditions.</p><p>Comme précédemment, le rôdeur ne doit porter aucune armure ou seulement une armure légère pour bénéficier de son style de combat. Il en perd tous les avantages s’il porte une arme intermédiaire ou lourde.</p>",
	"camouflage" : "<p>Un rôdeur de niveau 13 ou plus peut utiliser la compétence Discrétion même s’il ne bénéficie pas d’un abri ou de camouflage, à condition de se trouver sur un terrain de type naturel.</p>",
	"hide_in_plain_sight" : "<p>Un rôdeur de niveau 17 ou plus se trouvant sur un terrain de type naturel peut utiliser la compétence Discrétion même s’il est actuellement observé.</p>",

	// Monk
	"monk_features" : "<p><strong>Armes et armures</strong>. Le moine est formé au maniement des armes suivantes : arbalète légère ou lourde, bâton, dague, fronde, gourdin, hachette, javelot, kama, nunchaku, sai, shuriken et siangham. Le moine n’est formé ni au maniement des boucliers ni au port des armures. De fait, tous les talents du moine nécessitent une grande liberté de mouvement. S’il porte une armure ou un bouclier, ou s’il transporte une charge intermédiaire ou lourde, un moine perd ses bonus à la CA, ainsi que ses aptitudes de déplacement accéléré et de déluge de coup.</p><p><strong>Dons supplémentaires</strong>. Au niveau 1, un moine peut choisir soit <strong>Coup étourdissant</strong>, soit <strong>Science de la lutte</strong> en tant que don supplémentaire. Au niveau 2, il peut choisir soit <strong>Attaques réflexes</strong>, soit <strong>Parade de projectiles</strong> en tant que don supplémentaire. Au niveau 6, il peut choisir soit <strong>Science du croc-en-jambe</strong>, soit <strong>Science du désarmement</strong> en tant que don supplémentaire. Un moine n’a pas besoin de remplir les conditions d’un don pour le choisir en tant que don supplémentaire.</p><p><strong>Anciens moines</strong>. Un moine cessant d’être loyal ne peut plus progresser en niveaux dans cette classe, mais il conserve les pouvoirs acquis jusque-là.</p><p>Comme tout autre personnage, le moine peut être multiclassé, mais il doit s’accommoder d’une restriction que ne connaissent pas les autres personnages (paladin excepté) : s’il change de classe ou s’il gagne un niveau dans une classe qu’il possédait avant de devenir moine, il ne pourra plus jamais améliorer son niveau de moine (il conserve toutefois les pouvoirs acquis jusque-là).</p>",
	"monk_ac_bonus" : "<p>Un moine sait esquiver les coups et son “ sixième sens ” lui permet même d’éviter les attaques qui devraient normalement le surprendre. Tant qu’il ne porte pas d’armure et n’est pas encombré, un moine ajoute son bonus de Sagesse (s’il en a un) à sa CA. De plus, il obtient un bonus de +1 à la CA au niveau 5, qui augmente de +1 tous les 5 niveaux suivants (+2 au niveau 10, +3 au niveau 15 et +4 au niveau 20).</p><p>Ces bonus à la CA s’appliquent même contre les attaques de contact ou lorsque le moine est pris au dépourvu. Il ne les perd que s’il est incapable de se mouvoir ou sans défense et lorsqu’il porte une armure ou un bouclier, ou s’il transporte une charge intermédiaire ou lourde.</p>",
	"monk_unarmed_strike" : "<p>Le moine s’entraîne longuement à se battre à mains nues, ce qui lui confère d’énormes avantages dans ce genre de situation. Un moine de niveau 1 reçoit le don <strong>Science du combat à mains nues</strong> en tant que don supplémentaire. Ses attaques peuvent venir de ses poings, mais aussi des pieds, des coudes ou des genoux. Cela signifie qu’un moine peut même porter des attaques “ à mains nues ” alors que ses deux mains sont occupées à porter quelque chose. De plus, la notion d’attaque secondaire de main non- directrice n’a pas de sens quand il se bat à mains nues. Un moine bénéficie donc toujours de son bonus de Force entier sur les jets de dégâts à mains nues.</p><p>En règle générale, les attaques à mains nues du moine infligent des dégâts létaux, mais le moine peut choisir d’infliger des dégâts non- létaux s’il le souhaite et ceci sans malus sur son jet d’attaque. Ce même choix lui est offert en situation de lutte.</p><p>L’attaque à mains nues du moine est considérée à la fois comme une arme manufacturée et une arme naturelle pour les sorts et effets qui altèrent ou améliorent ces deux types d’armes (comme les sorts morsure magique et arme magique).</p><p>Les attaques à mains nues d’un moine infligent plus de dégâts que la normale. Les moines de taille P infligent des dégâts moins importants, tandis que ceux de taille G infligent des dégâts plus élevés.</p><table><tr><th>Level</th><th>Damage (Small)</th><th>Damage (Medium)</th><th>Damage (Large)</th></tr><tr><td>1st–3rd</td><td>1d4</td><td>1d6</td><td>1d8</td></tr><tr><td>4th–7th</td><td>1d6</td><td>1d8</td><td>2d6</td></tr><tr><td>8th–11th</td><td>1d8</td><td>1d10</td><td>2d8</td></tr><tr><td>12th–15th</td><td>1d10</td><td>2d6</td><td>3d6</td></tr><tr><td>16th–19th</td><td>2d6</td><td>2d8</td><td>3d8</td></tr><tr><td>20th</td><td>2d8</td><td>2d10</td><td>4d8</td></tr></table>",
	"flurry_of_blows" : "<p>Un moine sans armure et non-encombré peut porter une attaque supplémentaire en sacrifiant une partie de sa précision. Il le fait en appliquant son bonus le plus élevé, mais toutes les attaques qu’il tente au cours du round subissent un malus de –2 (y compris l’attaque supplémentaire). Le malus dure pendant 1 round entier, ce qui signifie qu’il affecte également les attaques d’opportunité que le moine pourrait porter avant son prochain tour de jeu. Quand un moine atteint le niveau 5, le malus est réduit à –1, et il disparaît à partir du niveau 9. Un déluge de coups ne peut se tenter que lors d’une action d’attaque à outrance.</p><p>Le personnage ne peut utiliser cette aptitude qu’à mains nues ou à l’aide d’une arme de moine (bâton, kama, nunchaku, sai, shuriken ou siangham). Un moine qui frappe à mains nues et avec une arme de moine peut utiliser les deux de façon interchangeable au cours du même round, selon ses besoins. Par exemple, au niveau 6 de moine, Ambre peut porter deux attaques lors d’un déluge de coup et elle pourrait utiliser ses poings pour la première (avec un bonus à l’attaque de +3) et son kama pour la seconde (avec un bonus à l’attaque de +3). Lorsqu’un moine utilise une arme de moine au cours d’un déluge de coups, il applique son bonus de Force (et pas 0,5 fois ou 1,5 fois son bonus de Force) aux jets de dégâts pour toutes ses attaques réussies, qu’elles soient portée à l’aide d’une arme tenue à une ou deux mains. Un moine ne peut utiliser aucune autre arme que des armes de moine au cours d’un déluge de coups.</p><p>Dans le cas d’un bâton, chaque tête compte comme une arme distincte pour l’aptitude de déluge de coups. Bien qu’un bâton requière habituellement deux mains pour être manié, un moine peut tout de même mélanger des attaques à coups de bâton et à mains nues au cours d’un déluge de coups (à condition d’avoir assez d’attaques dans sa séquence). Par exemple, un moine de niveau 8 pourrait faire deux attaques avec un bâton (une avec chaque tête) avec un bonus à l’attaque de +5 et une attaque à mains nues avec un bonus à l’attaque de +0. Il pourrait aussi faire une attaque de bâton et une attaque à mains nues avec un bonus à l’attaque de +5 et une attaque avec l’autre tête du bâton avec un bonus à l’attaque de +0. Par contre, un moine tenant un bâton ne peut utiliser d’autres armes en même temps.</p>",
	"monk_fast_movement" : "<p>À partir du niveau 3, un moine obtient un bonus d’altération à sa vitesse de déplacement. Il perd ce bonus s’il porte une armure (même légère), un bouclier ou une charge intermédiaire ou lourde.</p>",
	"still_mind" : "<p>Un moine de niveau 3 bénéficie d’un bonus de +2 aux jets de sauvegarde contre les sorts et effets de l’école des enchantements. Son entraînement et les techniques de méditation qu’il applique lui permettent de mieux résister aux agressions mentales.</p>",
	"ki_strike" : "<p>Au niveau 4, le moine peut utiliser son ki lorsqu’il combat à mains nues. Ses attaques à mains nues sont considérées comme des armes magiques pour ce qui est d’ignorer la réduction des dégâts des créatures. La puissance de la frappe ki du personnage augmente avec le niveau. Au niveau 10, les attaques à mains nues du moine sont considérées comme des armes de la Loi, uniquement pour ce qui est d’ignorer la réduction des dégâts des créatures. Enfin, les attaques à mains nues d’un moine de niveau 16 sont considérées comme des armes en adamatium pour ce qui est d’ignorer la réduction des dégâts des créatures et la solidité des objets.</p>",
	"ki_strike_magic" : "{{ki_strike}}",
	"slow_fall" : "<p>Au niveau 4, et pour peu qu’il puisse atteindre une paroi en tendant le bras, le moine peut l’utiliser pour freiner sa chute. À l’arrivée, les dégâts sont calculés comme si la hauteur de chute était raccourcie de 6 mètres (–2d6 points de dégâts). Cette faculté augmente en fonction du niveau, à tel point que, au niveau 20, le personnage en bénéficie quelle que soit la hauteur de chute.</p>",
	"purity_of_body" : "<p>Au niveau 5, le moine est capable de contrôler parfaitement son système immunitaire, ce qui le protège des maladies, sauf celles qui sont d’origine magique ou surnaturelle (telles que la lycanthropie et la putréfaction transmise par les momies).</p>",
	"wholeness_of_body" : "<p>Dès le niveau 7, le personnage est capable de se soigner. Ce pouvoir lui permet, chaque jour, de récupérer un nombre de points de vie égal au double de son niveau (tous d’un coup, ou en autant de fois qu’il le souhaite, au choix). Cette aptitude est un pouvoir surnaturel.</p>",
	"ki_strike_lawful" : "{{ki_strike}}",
	"diamond_body" : "<p>Au niveau 11, le moine acquiert un tel contrôle de son métabolisme qu’il devient immunisé contre tous les types de poison.</p>",
	"greater_flurry" : "<p>Un moine de niveau 11 atteint la maîtrise totale de son aptitude de déluge de coup. En plus de son attaque supplémentaire, il obtient une deuxième attaque à son bonus de base à l’attaque maximal.</p>",
	"abundant_step" : "<p>À partir du niveau 12, une fois par jour et en effectuant un simple pas de côté, le personnage peut se déplacer instantanément comme à l’aide du sort <em>Porte dimensionnelle</em>. Son niveau de lanceur de sorts est égal à la moitié de son niveau de moine.</p>",
	"diamond_soul" : "<p>Au niveau 13, le moine acquiert une résistance à la magie égale à son niveau de moine actuel + 10. Pour pouvoir l’affecter à l’aide d’un sort, son adversaire doit effectuer un test de niveau de lanceur de sorts (1d20 + son niveau de lanceur de sorts) et obtenir un résultat égal ou supérieur à la RM du moine.</p>",
	"quivering_palm" : "<p>Dès le niveau 15, le moine peut utiliser cette redoutable attaque lui permettant de transmettre des vibrations fatales à sa cible, qui peuvent devenir fatales si et quand il le désire. Le personnage peut se servir de la paume vibratoire une fois par semaine, et il doit l’annoncer avant de jouer son jet d’attaque. Les créatures artificielles, les morts-vivants, les plantes et les vases, ainsi que les créatures intangibles et celles qui sont immunisées contre les coups critiques ne sont pas affectés par ce pouvoir. Si le coup porte et si l’adversaire est blessé, les vibrations sont transmises avec succès au corps de la victime. À partir de ce moment, le moine peut décider de la tuer à tout instant (les vibrations durent pendant 1 jour par niveau du moine). Dès qu’il prend cette décision (ce qui lui demande une action libre), la cible doit effectuer un jet de Vigueur (DD 10 + 1/2 du niveau du moine + modificateur de Sagesse du moine). En cas d’échec, elle meurt. Si elle réussit, les vibrations cessent et elle ne risque plus rien (même si elle peut de nouveau être attaquée par la paume vibratoire).</p>",
	"ki_strike_adamantine" : "{{ki_strike}}",
	"tongue_of_the_sun_and_moon" : "<p>Un moine ayant atteint le niveau 17 est capable de communiquer avec toutes les créatures vivantes.</p>",
	"empty_body" : "<p>Au niveau 19, le personnage peut prendre une forme éthérée pendant 1 round par niveau de moine et par jour, comme s’il utilisait le sort <em>Passage dans l’éther</em>. Il peut le faire à plusieurs reprises au cours d’une même journée, tant que la durée d’utilisation totale (en rounds) ne dépasse pas son niveau de moine.</p>",
	"perfect_self" : "<p>Au niveau 20, le moine atteint un tel contrôle de soi qu’il devient une entité magique. À partir de cet instant, il n’est plus considéré comme un humanoïde, mais comme un Extérieur (autrement dit, un être natif d’un autre plan) pour ce qui est des sorts et des effets magiques. Par exemple, un sort comme charme-personne n’a plus le moindre effet sur lui. Dans le même temps, il gagne une réduction des dégâts de 10/magie, ce qui signifie qu’il ignore (ou plutôt qu’il régénère instantanément) les 10 premiers points de dégâts infligés par chaque attaque des armes non-magiques ou des armes naturelles d’une créature qui ne dispose pas du même pouvoir. À noter que, contrairement aux autres Extérieurs, le moine peut toujours être ramené à la vie s’il vient à décéder.</p>",

	// Cleric
	"cleric_features" : "<p><strong>Armes et armures</strong>. Le prêtre est formé au maniement des armes courantes ainsi que des boucliers (à l’exception des pavois). Il est formé au port de toutes les armures (légères, intermédiaires et lourdes).</p><p>Un prêtre qui choisit le domaine de la Guerre reçoit gratuitement le don <strong>Arme de prédilection</strong> pour l’arme de son dieu, ainsi que le don <strong>Maniement d’une arme de guerre</strong> nécessaire si l’arme appartient à cette catégorie.</p><p><strong>Sorts</strong>. Un prêtre peut lancer des sorts divins (du même type que ceux des druides, paladins et rôdeurs) appartenant à la liste de sorts de sa classe. Cependant, son alignement peut l’empêcher de lancer certains sorts opposés à sa morale ou à son éthique, voir la section Sorts du Bien, du Chaos, de la Loi et du Mal, ci- dessous. Un prêtre doit choisir et préparer ses sorts à l’avance (voir plus loin).</p><p>La Sagesse est la caractéristique primordiale des sorts de prêtre. Pour préparer ou lancer un sort, un prêtre doit avoir une valeur de Sagesse au moins égale à 10 + le niveau du sort (soit Sag 10 pour les sorts de niveau 0, Sag 11 pour ceux du 1er niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur de Sagesse du prêtre.</p><p>Comme les autres lanceurs de sorts, le prêtre ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur de Sagesse est suffisamment élevée. Un prêtre reçoit aussi un sort de domaine en bonus à chaque niveau de sort (à l’exception du niveau 0). Cet emplacement de sort est réservé aux sorts des listes de ses deux domaines (voir Dieux, domaines et sorts de domaines pour plus de détails).</p><p>Le prêtre ne trouve pas ses sorts dans les livres ou les parchemins, pas plus qu’il ne les prépare en les étudiant. Au lieu de cela, il médite et prie, puis son dieu lui envoie directement les sorts demandés (s’il ne vénère aucun dieu, c’est sa foi qui lui permet d’obtenir ses pouvoirs). Pour recevoir l’inspiration divine, le prêtre passe une heure entière à se recueillir à un moment choisi de la journée. Il s’agit généralement de l’aube ou à midi pour les prêtres bons, et du crépuscule ou à minuit pour leurs homologues mauvais. Le temps passé à dormir n’a aucun effet sur la préparation des sorts. Un prêtre peut lancer tous les sorts de la liste des sorts de prêtre, à condition de pouvoir lancer des sorts de ce niveau, mais il doit choisir quels sorts préparer au cours de sa méditation quotidienne.</p><p><strong>Sorts du Bien, du Chaos, de la Loi et du Mal</strong>. Un prêtre ne peut pas lancer de sort associé à un alignement opposé au sien ou à celui de son dieu (s’il en sert un). Par exemple, un prêtre bon (ou un prêtre neutre servant un dieu bon) ne peut pas jeter de sort du Mal. L’alignement d’un sort est indiqué par les registres Bien, Chaos, Loi et Mal dans son descriptif.</p><p><strong>Dieux, domaines et sorts de domaines</strong>. Le dieu du prêtre a une influence sur son alignement, les sorts qu’il peut lancer, ses valeurs et la manière dont les autres le perçoivent. Un prêtre peut choisir deux domaines dans la liste proposée. Vous ne pouvez choisir un domaine associé à un alignement (Bien, Chaos, Loi et Mal) que s’il correspond à l’un des aspects de l’alignement de votre personnage.</p><p>Un prêtre peut choisir de ne servir aucun dieu en particulier. Si votre prêtre ne vénère pas un dieu en particulier, sélectionnez tout de même deux domaines représentant ses choix profonds. Les restrictions concernant l’alignement s’appliquent toujours.</p><p>Chaque domaine propose un pouvoir accordé, ainsi qu’un sort par niveau à partir du 1er. Le prêtre a systématiquement droit aux pouvoirs accordés par les deux domaines choisis. Dans le même temps, il peut, chaque jour, préparer un sort de domaine par niveau (sur les deux qui lui sont offerts). Si un sort de domaine n’apparaît pas sur la liste générale des sorts de prêtre, le personnage ne peut le préparer qu’en tant que sort de domaine.</p><p><strong>Incantation spontanée</strong>. Un prêtre bon (ou un prêtre neutre servant un dieu d’alignement bon) peut canaliser l’énergie réservée pour un sort afin de la transformer spontanément en un sort de guérison qu’il n’avait pas préparé à l’avance. Pour ce faire, il lui suffit de “ sacrifier ” l’un des sorts qu’il a préparés (et qui ne soit pas un sort de domaine) pour pouvoir lancer à la place un sort de soins de niveau égal ou inférieur. On appelle sort de soins tout sort ayant “ soins ” dans son intitulé. Par exemple, un prêtre bon ayant préparé injonction (sort du 1er niveau) peut choisir de le remplacer spontanément par soins légers (également du 1er niveau). Les prêtres des dieux bons sont tellement habitués à manipuler l’énergie positive que cette pratique ne leur demande aucun effort particulier.</p><p>En revanche, un prêtre mauvais (ou un prêtre neutre fidèle à un dieu maléfique) ne peut convertir ses sorts en sorts de soins, mais peut obtenir des sorts de blessure (c’est-à-dire tout sort ayant “ blessure ” dans son intitulé). Cela s’explique par le fait que ces prêtres sont extrêmement doués pour canaliser l’énergie négative.</p><p>Un prêtre qui n’est ni bon ni mauvais et dont le dieu n’est lui aussi ni bon ni mauvais peut choisir de transformer ses sorts en sorts de soins ou de blessure (au choix du joueur), selon que le personnage se sent plus apte à canaliser l’énergie positive ou négative. Ce choix doit être fait en début de carrière, et il est irrévocable. C’est également cette décision qui détermine si le prêtre sera capable de repousser les morts- vivants ou de les intimider (voir ci-dessous).</p><p><strong>Langues supplémentaires</strong>. La liste des langues supplémentaires que le prêtre peut apprendre en plus de celles que lui autorise sa race comprend l’abyssal, le céleste et l’infernal. Il s’agit, respectivement, de la langue des Extérieurs d’alignement chaotique mauvais, bon, et loyal mauvais.</p><p><strong>Anciens prêtres</strong>. Un prêtre bafouant ouvertement le code de conduite imposé par son dieu (en allant à l’encontre des préceptes qu’il est censé enseigner) perd immédiatement tous ses sorts et ses aptitudes de classe, à l’exception de la formation au maniement des armes simples, des boucliers et du port des armures. Il ne peut plus gagner le moindre niveau de prêtre tant qu’il n’a pas fait acte de contrition (voir le sort <em>Pénitence</em>).</p>",
	"turn_or_rebuke_undead" : "<p>Un prêtre, quel que soit son alignement, a le pouvoir d’affecter les morts-vivants tels que les squelettes, zombis, fantômes et autres vampires en canalisant le pouvoir de la foi à travers son symbole sacré (ou impie).</p><p>Un prêtre bon (ou un prêtre neutre vénérant un dieu bon) a la faculté de repousser et de détruire les morts- vivants. Un prêtre mauvais (ou un prêtre neutre servant un dieu mauvais) peut au contraire intimider et contrôler les morts- vivants, en les forçant à s’incliner devant son pouvoir. Le prêtre neutre d’un dieu neutre doit choisir s’il affecte les morts-vivants comme un prêtre bon ou comme un prêtre mauvais. Ce choix est irrévocable et détermine également si le prêtre peut transformer spontanément ses sorts en sorts de soins ou de blessure (voir ci- dessus).</p><p>Chaque jour, un prêtre peut tenter de repousser ou d’intimider les morts- vivants un nombre de fois égal à 3 + modificateur de Charisme. Un prêtre ayant atteint un degré de maîtrise de 5 ou plus en Connaissances (religion) obtient un bonus de +2 sur les tests de renvoi ou d’intimidation des morts-  vivants.</p>",
	"aura" : "<p>Un prêtre d’un dieu bon, chaotique, loyal ou mauvais génère une puissante aura correspondant à l’alignement de son dieu (pour plus de détails voir le sort <em>Détection du Mal</em>). Les prêtres qui ne vénèrent pas un dieu spécifique, mais choisissent le domaine du Bien, du Chaos, de la Loi ou du Mal possèdent une aura similaire de l’alignement correspondant.</p>",

	// Cleric Domains
	"air_domain" : "<p><strong>Pouvoirs accordés</strong>. Le personnage peut renvoyer ou détruire les créatures de la terre comme un prêtre bon le fait avec les morts-vivants. Il peut également intimider, contrôler ou augmenter le moral des créatures de l’air comme un prêtre mauvais le fait avec les morts- vivants. Il peut utiliser ces pouvoirs 3 fois + modificateur de Charisme par jour. Il s’agit d’un pouvoir surnaturel.</p>",
	"animal_domain" : "<p><strong>Pouvoirs accordés</strong>. Le personnage peut lancer communication avec les animaux une fois par jour, en qualité de pouvoir magique.</p><p>Connaissances (nature) est une compétence de classe.</p>",
	"chaos_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage lance les sorts du Chaos avec un bonus de +1 au niveau de lanceur de sorts.</p>",
	"death_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le personnage peut utiliser un pouvoir surnaturel du nom de caresse mortelle. Il commence par toucher la créature vivante de son choix (en accord avec les règles concernant les attaques de contact). En cas de succès, il jette 1d6 par niveau de prêtre. Si le total obtenu atteint ou dépasse le nombre de points de vie de la cible, cette dernière meurt (pas de jet de sauvegarde). Sinon, elle n’est pas affectée.</p>",
	"destruction_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le personnage peut infliger un châtiment. Ce pouvoir surnaturel prend la forme d’une attaque de corps à corps accompagnée d’un bonus de +4 au jet d’attaque et d’un bonus aux dégâts égal au niveau du prêtre (en cas de coup au but). Le joueur doit déclarer son intention avant de lancer le dé d’attaque.</p>",
	"earth_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage peut renvoyer ou détruire les créatures de l’air comme un prêtre bon le fait avec les morts-vivants. Il peut également intimider, contrôler ou augmenter le moral des créatures de la terre comme un prêtre mauvais le fait avec les morts-vivants. Il peut utiliser ces pouvoirs 3 fois + modificateur de Charisme par jour. Il s’agit d’un pouvoir surnaturel.</p>",
	"evil_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage lance les sorts du Mal avec un bonus de +1 au niveau de lanceur de sorts.</p>",
	"fire_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage peut renvoyer ou détruire les créatures de l’eau comme un prêtre bon le fait avec les morts-vivants. Il peut également intimider, contrôler ou augmenter le moral des créatures du feu comme un prêtre mauvais le fait avec les morts-vivants. Il peut utiliser ces pouvoirs 3 fois + modificateur de Charisme par jour. Il s’agit d’un pouvoir surnaturel.</p>",
	"good_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage lance les sorts du Bien avec un bonus de +1 au niveau de lanceur de sorts.</p>",
	"healing_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage lance les sorts de guérison avec un bonus de +1 au niveau de lanceur de sorts.</p>",
	"knowledge_domain" : "<p><strong>Pouvoirs accordés</strong>. le personnage lance les sorts de Divination avec un bonus de +1 au niveau de lanceur de sorts.</p><p>Connaissances (sous toutes ses formes) est une compétence de classe.</p>",
	"law_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage lance les sorts de la Loi avec un bonus de +1 au niveau de lanceur de sorts.</p>",
	"luck_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le personnage peut faire appel à sa bonne fortune. Ce pouvoir extraordinaire lui permet de rejouer un jet de dés qu’il vient d’effectuer avant de prendre connaissance de l’issue de la situation. On applique systématiquement le résultat du second lancer, même s’il est moins favorable que le premier.</p>",
	"magic_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage peut utiliser les parchemins, baguettes et autres objets activés par une fin d’incantation ou le potentiel magique de leur utilisateur comme un magicien de la moitié de son niveau (niveau 1 minimum). Si le PJ est également magicien, le niveau “ virtuel ” conféré par son dieu s’ajoute à son niveau de magicien.</p>",
	"plant_domain" : "<p><strong>Pouvoirs accordés</strong>. Le personnage peut intimider ou contrôler les créatures végétales comme un prêtre mauvais le fait avec les morts- vivants. Il peut utiliser ces pouvoirs 3 fois + modificateur de Charisme par jour. Il s’agit d’un pouvoir surnaturel.</p><p>Connaissances (nature) est une compétence de classe.</p>",
	"protection_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le personnage peut utiliser le pouvoir surnaturel de protection divine sur la créature de son choix. Ce pouvoir confère au prochain jet de sauvegarde du sujet un bonus de résistance égal au niveau du prêtre. On l’active au prix d’une action simple et dure 1 heure ou jusqu’à utilisation.</p>",
	"strength_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le personnage peut réaliser un véritable exploit physique en faisant brusquement augmenter sa valeur de Force (il bénéficie alors d’un bonus d’altération égal à son niveau de prêtre). Ce pouvoir dure 1 round. On l’active au prix d’une action libre.</p>",
	"sun_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le personnage peut tenter un renvoi suprême. Ce pouvoir s’utilise comme une tentative de renvoi, d’intimidation ou de contrôle des morts-vivants, sauf que les créatures affectées sont automatiquement détruites.</p>",
	"travel_domain" : "<p><strong>Pouvoirs accordés</strong>. Le personnage peut agir normalement, même s’il est soumis à des effets magiques restreignant ses capacités de mouvement. Ce pouvoir extraordinaire semblable au sort <em>Liberté de mouvement</em>, peut être utilisé à volonté, dans la limite d’un total quotidien ne dépassant pas 1 round par niveau du personnage. Il prend effet immédiatement et dure jusqu’à ce que le PJ n’en ait plus besoin (ou jusqu’à ce que sa durée quotidienne soit épuisée).</p><p>Sens de la nature est une compétence de classe.</p>",
	"trickery_domain" : "<p><strong>Pouvoir accordé</strong>. Bluff, Déguisement et Discrétion sont des compétences de classe.</p>",
	"war_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage gagne les dons Maniement d’une arme de guerre (si nécessaire) et Arme de prédilection (l’arme étant celle de son dieu).</p>",
	"water_domain" : "<p><strong>Pouvoir accordé</strong>. Le personnage peut renvoyer ou détruire les créatures du feu comme un prêtre bon le fait avec les morts-vivants. Il peut également intimider, contrôler ou augmenter le moral des les créatures de l’eau comme un prêtre mauvais le fait avec les morts- vivants. Il peut utiliser ces pouvoirs 3 fois + modificateur de Charisme par jour. Il s’agit d’un pouvoir surnaturel.</p>",

	// Cleric Domains (non-core)
	"artifice_domain" : "<p><strong>Pouvoirs accordés</strong>. Le personnage jette les sorts de création avec un bonus de +1 au niveau de jeteur de sort.</p><p>En outre, il gagne le don <strong>Talent</strong> en qualité de don supplémentaire dans la compétence Artisanat de son choix.</p>",
	"charm_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le prêtre peut augmenter sa valeur de Charisme de 4 points. Ce pouvoir dure 1 minutes. On l’active au prix d’une action libre.</p>",
	"community_domain" : "<p><strong>Pouvoirs accordés</strong>. Une fois par jour, le personnage peut employer <em>Apaisement des émotions</em> en qualité de pouvoir magique.</p><p>Il bénéficie également d’un bonus de +2 aux tests de Diplomatie</p>",
	"creation_domain" : "<p><strong>Pouvoir accordé</strong>. Le prêtre lance les sorts de Invocation (création) avec un bonus de +1 au niveau de lanceur de sorts</p>",
	"darkness_domain" : "<p><strong>Pouvoir accordé</strong>. Le prêtre gagne <strong>Combat en aveugle</strong> en qualité de don supplémentaire</p>",
	"glory_domain" : "<p><strong>Pouvoir accordé</strong>. Le prêtre renvoie les morts-vivants avec un bonus de +2 au test de renvoi et de +1d6 au jet d’efficacité.</p>",
	"liberation_domain" : "<p><strong>Pouvoir accordé</strong>. Si le prêtre est affecté par un effet de charme, de coercition ou de terreur et qu’il rate son jet de sauvegarde, il peut le rejouer 1 round plus tard contre le même DD. Le prêtre n’a droit qu’à cette chance supplémentaire pour réussir son jet de sauvegarde. Il s’agit d’un pouvoir surnaturel.</p>",
	"madness_domain" : "<p><strong>Pouvoir accordé</strong>. Lentement mais sûrement, le personnage devient fou. Soustrayez 1 point â tous ses tests liés â la Sagesse (comme les tests de Perception auditive) et à ses jets de Volonté.</p><p>Cependant, 1 fois par jour, il peut agir avec la lucidité des fous. Ajoutez alors la moitié de son niveau à un test de compétence à la Sagesse ou à un jet de Volonté. L’utilisation de ce pouvoir doit être déclarée préalablement au jet de dé.</p>",
	"nobility_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le prêtre peut galvaniser ses alliés, leur conférant ainsi un bonus de moral de +1 aux jets de sauvegarde, jets d’attaque, tests de caracteristiques, tests de compétence et jets de dégâts des armes. Ses alliés doivent être à même de l’entendre prendre la parole pendant 1 round. On active ce pouvoir magique au prix d’une action simple et son effet dure un nombre de rounds égal au bonus de Charisme du personnage (1 round minmum).</p>",
	"repose_domain" : "<p><strong>Pouvoir accordé</strong>. Une fois par jour, le prêtre peut utiliser un pouvoir surnaturel du nom de caresse mortelle. Il commence par toucher la créature vivante de son choix (en accord avec les règles concernant les attaques de contact). En cas de succès, il jette 1d6 par niveau de prêtre. Si le total obtenu atteint ou dépasse le nombre de points de vie de la cible, cette dernière meurt (pas de jet de sauvegarde). Sinon, elle n’est pas affectée.</p>",
	"rune_domain" : "<p><strong>Pouvoir accordé</strong>. Le prêtre gagne <strong>Écriture de parchemins</strong> en qualité de don supplémentaire.</p>",
	"skalykind_domain" : "<p><strong>Pouvoir accordé</strong>. Le prêtre intimide ou contrôle les animaux (créatures reptiliennes ou serpents uniquement) comme un prêtre mauvais intimide ou contrôle les morts-vivants. Il peut utiliser ce pouvoir un nombre de fois égal à 3 + modificateur de Charisme</p>",
	"weather_domain" : "<p><strong>Pouvoir accordé</strong>. Le mauvais temps a peu d’effet sur le prêtre. La pluie et la neige ne pénalisent en rien ses tests de Détection et de Fouille. Il peut évoluer en terrein enneigé ou glacé à sa vitesse de déplacement normale. Enfin, qu’il soit d’origine naturelle ou magique, le vent l’affecte comme si il avie une catégorie de taille de plus.</p>",

	// Druid
	"druid_features" : "<p><strong>Armes et armures</strong>. Le druide est formé au maniement des armes suivantes : bâton, cimeterre, dague, dard, épieu, fronde, gourdin, lance et serpe. Il sait également utiliser toutes les attaques naturelles (griffes, morsure et ainsi de suite) des formes animales qu’il est capable de revêtir (voir l’aptitude forme animale, ci-dessous).</p><p>Il est formé au port des armures légères et intermédiaires, mais sa foi lui interdit les armures métalliques (il est donc limité à l’armure de cuir, de peau ou matelassée). (Un druide peut librement utiliser des armures en bois ayant acquis la dureté de l’acier grâce au sort <em>Bois de fer</em>). De même, il est formé au maniement des boucliers (à l’exception des pavois) mais ne peut utiliser que ceux en bois.</p><p>Un druide portant une armure ou un bouclier qui lui sont interdits perd l’accès à ses sorts de druides et à tous ses pouvoirs surnaturels ou magiques tant qu’il porte l’objet en question et pendant les 24 heures suivantes.</p><p><strong>Sorts</strong>. Un druide peut lancer des sorts divins (du même type que ceux des paladins, prêtres et rôdeurs) appartenant à la liste de sorts de sa classe. Cependant, son alignement peut l’empêcher de lancer certains sorts opposés à sa morale ou à son éthique, voir la section Sorts du Bien, du Chaos, de la Loi et du Mal, ci-dessous. Un druide doit choisir et préparer ses sorts à l’avance (voir plus loin).</p><p>La Sagesse est la caractéristique primordiale des sorts de druide. Pour préparer ou lancer un sort, un druide doit avoir une valeur de Sagesse au moins égale à 10 + le niveau du sort (soit Sag 10 pour les sorts de niveau 0, Sag 11 pour ceux du 1er niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur de Sagesse du druide.</p><p>Comme les autres lanceurs de sorts, le druide ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur de Sagesse est suffisamment élevée. Les druides ne bénéficient pas de sorts de domaines ou de pouvoirs accordés, contrairement aux prêtres.</p><p>Un druide prépare et lance ses sorts comme un prêtre, si ce n’est qu’il est incapable de transformer spontanément ses sorts en sorts de soins ou de blessure (mais voir Incantation spontanée, ci-dessous). Un druide peut lancer tous les sorts de la liste des sorts de druide, à condition de pouvoir lancer des sorts de ce niveau, mais il doit choisir quels sorts préparer au cours de sa méditation quotidienne.</p><p><strong>Sorts du Bien, du Chaos, de la Loi et du Mal</strong>. Un druide ne peut pas lancer de sorts dont l’alignement est opposé au sien ou à celui de son dieu (s’il en sert un). L’alignement d’un sort est indiqué par les registres Bien, Chaos, Loi et Mal dans son descriptif.</p><p><strong>Incantation spontanée</strong>. Un druide peut canaliser l’énergie réservée pour un sort afin de la transformer spontanément en un sort de convocation qu’il n’avait pas préparé à l’avance. Pour cela, il faut qu’il “ sacrifie ” un sort préparé pour pouvoir lancer à la place un sort de convocation d’alliés naturels de niveau égal ou inférieur.</p><p><strong>Langues supplémentaires</strong>. Le druide peut choisir la langue sylvestre au niveau 1 comme l’une des langues supplémentaires due à l’Intelligence. Ce choix s’ajoute aux langues que le personnage peut choisir grâce à sa race.</p><p>Dans le même temps, tous les druides de niveau 1 apprennent la langue des druides automatiquement et gratuitement (ils n’ont pas besoin de dépenser des points de compétence ou de l’inclure dans leurs langue supplémentaires). Cet idiome, qui possède son propre alphabet, est connu des seuls druides, lesquels ont interdiction de l’enseigner aux non-druides.</p><p><strong>Anciens druides</strong>. Un druide qui cesse de vénérer la nature, qui prend un alignement interdit ou apprend la langue des druides à un non-  druide perd tous ses sorts et pouvoirs de druide. Il ne peut gagner de nouveaux niveaux de druide que s’il fait acte de contrition (voir le sort <em>Pénitence</em>).</p>",
	"nature_sense" : "<p>Le druide bénéficie d’un bonus de +2 sur les tests de Connaissances (nature) et de Survie.</p>",
	"trackless_step" : "<p>Au niveau 3, le druide ne laisse plus la moindre trace en milieu naturel et il est impossible de le pister. Il peut néanmoins laisser des traces s’il le souhaite.</p>",
	"resist_nature_s_lure" : "<p>À partir du niveau 4, le druide bénéficie d’un bonus de +4 au jet de sauvegarde contre les pouvoirs magiques des fées (telles que les dryades, nymphes et autres esprits follets).</p>",
	"wild_shape" : "<p>Une fois par jour, un druide de niveau 5 peut se transformer en un animal de taille M ou P et reprendre son apparence initiale. Il peut prendre la forme de n’importe quelle créature du type animal. Ce pouvoir fonctionne comme le sort métamorphose, mis à part les exceptions présentées ici. La durée des effets est d’une heure par niveau de druide, ou jusqu’à ce que le personnage reprenne sa forme initiale. Une transformation (vers ou depuis la forme animale) est une action simple et ne provoque pas d’attaque d’opportunité.</p><p>La forme choisie doit être celle d’un animal que le personnage connaît bien. Par exemple, un druide qui n’a jamais quitté sa forêt tempérée natale ne peut se transformer en ours polaire.</p><p>Tant qu’il est transformé, un druide est incapable de parler. Il doit se contenter des bruits qu’un animal ordinaire est capable de produire sans entraînement. Il peut néanmoins communiquer normalement avec les autres animaux de la même espace, ou d’une espèce proche de sa forme actuelle. (Dans la nature, les perroquets poussent des cris, ils ne parlent pas. Un druide transformé en perroquet ne pas plus parler que s’il était transformé en poule.)</p><p>Le personnage dispose d’une utilisation quotidienne supplémentaire de ce pouvoir aux niveaux 6, 7, 10, 14 et 18.</p><p>Cependant, le personnage est limité aux animaux dont les dés de vies sont inférieurs ou égaux à son niveau de druide.</p>",
	"wild_shape_large" : "<p>Au niveau 8, un druide peut prendre la forme d’un animal de taille G.</p>",
	"venom_immunity" : "<p>À partir du niveau 9, le druide est immunisé contre toutes les formes de poisons et de venins.</p>",
	"wild_shape_tiny" : "<p>Au niveau 11, un druide peut prendre la forme d’un animal de taille TP</p>",
	"wild_shape_plant" : "<p>Au niveau 12, un druide peut utiliser ce pouvoir pour prendre la forme d’une créature de type plante, comme un tertre errant. Les restrictions sur la taille et les DV s’appliquent aussi. (Cela ne permet pas à un druide de se transformer en une plante qui n’est pas une créature, comme un chêne ou un rosier.)</p>",
	"a_thousand_faces" : "<p>Au niveau 13, le personnage acquiert le pouvoir surnaturel de se transformer à volonté, comme s’il utilisait le sort <em>Modification d’apparence</em>, mais uniquement sous sa forme normale.</p>",
	"wild_shape_huge" : "<p>Au niveau 15, un druide peut prendre la forme d’un animal de taille TG.</p>",
	"wild_shape_elemental" : "<p>Au niveau 16, un druide peut se transformer une fois par jour en un élémentaire d’Air, d’Eau, de Feu ou de Terre et de taille P, M ou G. Cette utilisation du pouvoir ne compte pas dans le quota quotidien de formes animales du druide, elle est comptabilisée séparément. Tant qu’il est transformé, le druide obtient temporairement tous les pouvoirs extraordinaires, surnaturels et magiques, ainsi que les dons, de l’élémentaire dont il prend la forme. Par contre, il conserve son propre type (c’est-à-dire humanoïde le plus souvent).</p><p>Au niveau 18, un druide peut se transformer en élémentaire deux fois par jour, puis trois fois au niveau 20.</p>",
	"wild_shape_huge_elemental" : "<p>Au niveau 20, un druide peut se transformer en un élémentaire de taille TG.</p>",

	// Rogue
	"rogue_features" : "<p><strong>Armes et armures</strong>. Le roublard est formé au maniement de toutes les armes courantes, ainsi que celui de l’arbalète de poing, l’arc court (normal et composite), l’épée courte, la matraque et la rapière. Il est également formé au port des armures légères mais pas au maniement des boucliers.</p><p><strong>Recherche des pièges</strong>. Seul un roublard peut utiliser la compétence Fouille pour localiser les pièges assortis d’un DD supérieur à 20. Les pièges non magiques mais particulièrement complexes ont un DD au moins égal à 20. Quant aux pièges magiques, leur DD est égal à 25 + niveau du sort entrant dans leur conception.</p><p>De même, seul un roublard peut utiliser la compétence Désamorçage/ sabotage pour désarmer les pièges magiques qu’il a repérés. Là encore, un piège magique a généralement un DD de 25 + niveau du sort entrant dans sa conception.</p><p>Si le personnage obtient au moins 10 points de plus que le DD indiqué à son test de Désamorçage/ sabotage, il étudie le piège avec tant de rigueur qu’il a la possibilité de le franchir avec ses compagnons sans le déclencher.</p><p><strong>Pouvoirs spéciaux</strong>. Au niveau 10, puis tous les 3 niveaux suivant (soit 13, 16 et 19), le roublard obtient un pouvoir spécial qu’il choisit sur la liste suivante :</p><ul><li><strong>Attaque handicapante (Ext)</strong>. Un roublard possédant ce pouvoir peut porter des attaques sournoises tellement précises que ses coups handicapent ses adversaires. Un adversaire blessé par une attaque sournoise portée par le roublard subit un affaiblissement temporaire de 2 points de Force. Les points perdus de la sorte reviennent au rythme de 1 par jour.</li><li><strong>Roulé-boulé (Ext)</strong>. Le roublard peut accompagner les coups mortels et ainsi encaisser moins de dégâts. Une fois par jour, alors qu’il vient d’être touché par une attaque qui le ferait tomber à 0 pv ou moins (mais pas s’il est victime d’un sort ou d’un pouvoir spécial), il peut tenter d’exécuter un roulé-boulé afin de réduire la violence du coup. Il effectue un jet de Réflexes (DD = points de dégâts encaissés) et, en cas de succès, les dégâts qu’il devait encaisser sont réduits de moitié. Pour tenter cette manœuvre désespérée, il doit voir venir l’attaque et pouvoir réagir (c’est impossible s’il se retrouve dans une situation où il perd son bonus de Dextérité à la CA). Comme ce type d’attaque n’autorise pas un jet de Réflexes pour demi-dégâts, le pouvoir d’esquive totale du roublard ne lui est d’aucune utilité dans un tel cas de figure.</li><li><strong>Esquive extraordinaire (Ext)</strong>. Ce pouvoir ressemble à esquive totale, mais l’agilité du roublard lui permet d’échapper au danger avec encore plus d’aisance, et les dégâts infligés par une attaque telle qu’une boule de feu ou un souffle de dragon rouge sont réduits de moitié même s’il rate son jet de Réflexes (s’il le réussit, il l’esquive totalement). Un roublard qui se trouve sans défense (parce qu’il est inconscient ou paralysé, par exemple) perd les avantages de l’esquive extraordinaire.</li><li><strong>Opportunisme (Ext)</strong>. Une fois par round, le roublard peut tenter une attaque d’opportunité contre une créature venant juste d’être touchée par un autre personnage. Cette attaque prend la place de celle à laquelle il a droit lors du round. Même si le personnage a pris le don <strong>Attaques réflexes</strong>, il ne peut pas faire appel à ce pouvoir spécial plus d’une fois par round.</li><li><strong>Maîtrise des compétences</strong>. Le roublard est tellement sûr de lui qu’il peut utiliser ses compétences sans trembler dans les cas extrêmes. Il sélectionne un nombre de compétences égal à 3 + son modificateur d’Intelligence. Chaque fois qu’il se sert de l’une d’elles, il peut faire 10 même en situation de stress ou lorsqu’il est distrait. Il peut prendre ce pouvoir spécial à plusieurs reprises, en choisissant à chaque fois de nouvelles compétences.</li><li><strong>Esprit fuyant (Ext)</strong>. Ce pouvoir représente l’aisance avec laquelle de nombreux roublards parviennent à échapper aux effets magiques cherchant à les contrôler. Chaque fois que le personnage est pris pour cible par un sort ou effet de l’école des enchantements et qu’il rate son jet de sauvegarde, il peut en tenter un second 1 round plus tard (avec le même DD). Il n’a droit qu’a une deuxième chance par attaque.</li><li><strong>Don</strong>. Un roublard peut choisir un don supplémentaire plutôt qu’un pouvoir spécial.</li></ul>",
	"sneak_attack" : "<p>Lorsqu’un roublard attaque son adversaire dans une situation où ce dernier est incapable de se défendre efficacement, il peut lui infliger des dégâts supplémentaires en touchant un point sensible. C’est-à- dire qu’il inflige des dégâts supplémentaires si sa cible se trouve dans un cas de figure lui ôtant son bonus de Dextérité à la CA (qu’elle en ait un ou pas) ou qu’elle est prise en tenaille par le roublard et un compagnon. Les dégâts supplémentaires se montent à 1d6 points au niveau 1, et ils augmentent de 1d6 points de plus tous les niveaux impairs. Si le roublard obtient un coup critique sur une attaque sournoise, ces dégâts supplémentaires ne sont pas multipliés.</p><p>Une attaque à distance ne peut se transformer en attaque sournoise que si la cible se trouve à 9 mètres ou moins ; au-delà, le roublard ne peut pas faire preuve d’une précision suffisante. (Notez qu’il est impossible de prendre en tenaille à l’aide d’une arme à distance.)</p><p>Pour peu qu’il utilise une matraque ou qu’il frappe à mains nues, le personnage peut également porter une attaque sournoise infligeant des dégâts non-létaux. Il ne peut pas choisir cette option avec une arme occasionnant des dégâts létaux (même à –4 au jet d’attaque), car une telle utilisation est contraire à l’attaque sournoise (qui l’oblige justement à tirer la quintessence de son arme, et non à retenir son coup).</p><p>Le roublard ne peut tenter une attaque sournoise que contre un adversaire dont il peut toucher les organes vitaux, ce qui n’est pas le cas des créatures artificielles, des morts-vivants, des plantes ou des vases, ainsi que des créatures intangibles ou immunisées contre les coups critiques. Le personnage doit voir sa cible et être capable d’atteindre l’organe vital qu’il vise. Il ne peut pas tenter d’attaque sournoise si son adversaire bénéficie d’un camouflage ou si grand que le personnage ne peut toucher ses organes vitaux.</p>",

	// Bard
	"bard_features" : "<p><strong>Armes et armures</strong>. Le barde est formé au maniement de toutes les armes courantes et des arcs courts, épées courtes, épées longues, fouets, matraques et rapières, ainsi que des boucliers (à l’exception des pavois). Il est également formé au port des armures légères.</p><p>Puisque les composantes gestuelles nécessaires à l’incantation des sorts de barde sont relativement simples, le port d’une armure légère n’entraîne pas de risque d’échec des sorts profanes. Cependant, un barde qui porte une armure intermédiaire ou lourde, ou qui utilise un bouclier, s’expose au risque d’échec habituel pour les sorts à composante gestuelle (qui constituent la majorité des sorts). De plus, cette aptitude ne profite qu’aux sorts de barde. Les sorts d’ensorceleur ou de magicien d’un personnage multiclassé sont affectés normalement par les armures, même légères.</p><p><strong>Sorts</strong>. Un barde peut lancer des sorts profanes (du même type que ceux des ensorceleurs et des magiciens) appartenant à la liste de sorts de sa classe. Il les lance sans avoir à les préparer à l’avance, à l’inverse des prêtres et des magiciens (voir ci- dessous). Tous les sorts de bardes s’accompagnent d’une composante verbale (qui peut prendre la forme d’une chanson, d’un poème ou d’un air de musique).</p><p>Le Charisme est la caractéristique primordiale des sorts de barde. Pour apprendre ou lancer un sort, un barde doit avoir une valeur de Charisme au moins égale à 10 + le niveau du sort (soit Cha 10 pour les sorts de niveau 0, Cha 11 pour ceux du 1er niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur de Charisme du barde.</p><p>Comme les autres lanceurs de sorts, le barde ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur de Charisme est suffisamment élevée.</p><p>Le répertoire de sorts d’un barde est très limité. Il commence sa carrière en connaissant seulement quatre sorts du niveau 0 (également appelés tours de magie) au choix du joueur. Lors de la plupart des passages de niveau, un barde apprend un ou plusieurs sorts supplémentaires (contrairement au quota de sorts quotidiens, le nombre de sorts connus par un barde n’est pas modifié par son éventuel bonus de Charisme).</p><p>Lorsqu’il atteint le niveau 5, et tous les 3 niveaux de barde après cela (niveaux 8, 11, etc.), un barde peut choisir d’apprendre un nouveau sort à la place de l’un de ceux qu’il connaît déjà. Le barde “ oublie ” alors un sort au profit d’un autre. Le niveau du nouveau sort doit être identique à celui du sort oublié, et ce niveau doit être inférieur de 2 niveaux au plus haut niveau de sorts accessibles au personnage. Un barde ne peut échanger qu’un seul sort à chaque fois, et doit choisir s’il procède à un échange en même temps qu’il apprend de nouveaux sorts lors du passage de niveau.</p><p>Un barde n’a pas besoin de préparer ses sorts à l’avance. Il peut lancer n’importe lequel des sorts de son répertoire à n’importe quel moment, à condition de ne pas avoir épuisé son quota de sorts de ce niveau pour la journée.</p><p><strong>Anciens bardes</strong>. Un barde devenu loyal ne peut plus gagner de niveaux de barde mais conserve tous les pouvoirs acquis jusque- là.</p>",
	"bardic_music" : "<p>Une fois par jour et par niveau, le barde peut faire appel à ses chants ou poèmes pour produire des effets magiques sur ceux qui l’entourent (généralement lui y compris, s’il le désire). Bien que tous ces pouvoirs soient réunis sous l’appellation de “ musique de barde ” et que leur description mentionne le chant et des instruments de musique, le personnage peut les utiliser en chantant, en sifflant, en jouant d’un instrument, etc. Chaque pouvoir impose un minimum sur le niveau du barde et sur son degré de maîtrise en Représentation. Si un barde ne possède pas le degré de maîtrise requis pour au moins une forme de la compétence Représentation, il ne peut utiliser ce pouvoir de musique de barde tant qu’il n’a pas progressé dans son art.</p><p>Activer un effet de musique de barde est une action simple. Certains pouvoirs de musique de barde nécessitent de conserver sa concentration, ce qui signifie que le barde doit effectuer une action simple chaque round pour maintenir l’effet de sa musique. Lorsqu’un barde utilise sa musique, même pour un pouvoir qui ne nécessite aucune concentration, il ne peut plus lancer de sorts, activer des objets à fin d’incantation (comme les parchemins), à potentiel magique (comme les baguettes) ou à mot de commande. Un barde sourd a 20 % de chances d’échouer quand il tente de faire appel à sa musique (ce pourcentage est le même que celui d’un personnage sourd essayant de lancer un sort). Même en cas d’échec, l’utilisation de son pouvoir est décomptée de son quota quotidien.</p>",
	"bardic_knowledge" : "<p>Un barde acquiert de nombreuses connaissances au cours de ses voyages et au contact de ses confrères. Chaque fois qu’il faut déterminer s’il détient des informations importantes au sujet d’un objet légendaire, des notables ou des sites connus de la région, il effectue un test spécial de savoir bardique, soit 1d20 + son niveau de barde + son modificateur d’Intelligence. (Si le barde possède un degré de maîtrise de 5 ou plus en Connaissances (histoire), il obtient un bonus de +2 sur ce test.)</p><p>Le savoir bardique ne révèle jamais les pouvoirs spécifiques d’un objet, mais il peut donner des indications quant à sa fonction. Le personnage n’a pas la possibilité de faire 10 ou de faire 20, ce type de connaissances étant extrêmement aléatoire. On détermine le degré de difficulté du test en se référant à la table suivante.</p><table><tr><th>DD</th><th>Type d’information</th></tr><tr><td>10</td><td>Courante, ou du moins connue par une minorité conséquente d’habitants de la région.</td></tr><tr><td>20</td><td>Peu courante ; connue par quelques personnes seulement.</td></tr><tr><td>25</td><td>Rare ; connue par une poignée d’individus seulement et difficile à obtenir.</td></tr><tr><td>30</td><td>Extrêmement rare ; ignorée de tous, ou presque (éventuellement oubliée par ceux qui la détenaient, ou connue de gens qui ignorent sa signification).</td></tr></table>",
	"countersong" : "<p>Un barde ayant atteint un degré de maîtrise de 3 ou plus dans une forme de Représentation peut utiliser sa voix ou sa musique pour contrer les sorts à base de son (mais pas ceux dont l’unique aspect sonore est une simple composante verbale). Chaque round que dure son contre-chant, il joue un test de Représentation. Toute créature se trouvant à 9 mètres ou moins de lui (y compris le barde lui-même) peut utiliser le test de Représentation du barde à la place de son propre jet de sauvegarde si elle est prise pour cible par une attaque magique de son ou de langage (comme cacophonie ou injonction). La créature effectue son jet de sauvegarde normalement et prend le plus avantageux des deux résultats. Toute créature qui se trouve à portée du contre-chant et qui subit les effets durables d’une attaque magique de son ou de langage a droit à un nouveau jet de sauvegarde, pour lequel elle ne peut utiliser que le résultat du test de Représentation du barde. Contre-chant est sans effet sur les attaques qui n’autorisent pas de jets de sauvegarde. Le barde peut maintenir un contre-chant pendant 10 rounds.</p>",
	"fascinate" : "<p>Avec un degré de maîtrise de 3 ou plus dans une forme de Représentation, le barde peut fasciner une ou plusieurs créatures grâce à sa musique ou sa poésie. Celles-ci doivent le voir et l’entendre, lui prêter attention et se trouver à 27 mètres ou moins de lui,. Le barde doit lui aussi voir sa cible. Un combat proche ou un danger manifeste empêche le fonctionnement de ce pouvoir. Une utilisation de ce pouvoir permet d’affecter une seule créature au niveau un de barde et une créature supplémentaire par trois niveaux de barde au-delà de 1 (soit deux au niveau 4, trois au niveau 7 et ainsi de suite).</p><p>Pour utiliser son pouvoir de fascination, le barde effectue un test de Représentation dont le résultat sert de DD aux jets de Volonté pour résister à l’effet. Si une cible réussit son jet de sauvegarde, elle n’est pas affectée et, de plus, le barde ne peut pas réessayer de la fasciner avant un délai de 24 heures. En cas d’échec au jet de sauvegarde, la cible s’assied, écoute attentivement le chant et ne prend plus aucune autre action tant que le barde continue à jouer et à se concentrer (pendant un maximum de 1 round par niveau du barde). Tant qu’elle est fascinée, elle subit un malus de –4 à ses tests de compétence joués de façon réactive, comme Détection et de Perception auditive. Toute menace potentielle (comme l’approche d’un ennemi dans son dos) oblige le barde à un nouveau test de Représentation et autorise la cible à un second jet de sauvegarde.</p><p>Si la menace est manifeste (comme le fait de lancer un sort, de dégainer son arme, etc.), le charme est automatiquement rompu. Fascination est un effet mental de type enchantement (charme).</p>",
	"inspire_courage" : "<p>Un barde ayant atteint un degré de maîtrise de 3 ou plus dans une forme de Représentation peut utiliser son répertoire musical pour susciter la bravoure chez ses alliés (y compris lui-même), les protéger de la peur et améliorer leurs compétences martiales. Pour en bénéficier, un personnage doit pouvoir entendre le barde chanter. L’effet dure tant que l’allié entend le barde chanter ou jouer de la musique, et pendant 5 rounds par la suite. La bravoure qu’il procure à ses compagnons prend la forme d’un bonus de moral de +1 aux jets de sauvegarde contre les effets de charme et de terreur, et d’un bonus de moral de +1 aux jets d’attaque et de dégâts des armes. Ces bonus augmentent de +1 au niveau 8 et tous les 6 niveaux de barde suivants (+2 au niveau 8, +3 au niveau 14 et +4 au niveau 20). L’inspiration vaillante est un pouvoir mental.</p>",
	"inspire_competence" : "<p>Un barde de niveau 3 ayant atteint un degré de maîtrise de 6 dans une forme de Représentation peut utiliser sa musique ou sa poésie pour aider un allié à mener à bien une tâche spécifique. Le compagnon du barde doit le voir, l’entendre et se trouver à 9 mètres ou moins de lui. Le barde doit également voir le sujet. En fonction de la tâche que ce dernier souhaite accomplir, le barde peut l’encourager, l’aider à se concentrer, etc.</p><p>Le personnage affecté bénéficie d’un bonus d’aptitude de +2 à ses tests de compétence (uniquement pour ce qui concerne la compétence choisie) tant qu’il entend la musique du barde. Cette aptitude n’est pas toujours utilisable (il serait par exemple stupide de chanter pour aider un roublard à… se déplacer en silence !). L’effet dure tant que le barde se concentre, jusqu’à un maximum de 2 minutes. Un barde ne peut utiliser cet effet sur lui- même. L’inspiration talentueuse est un pouvoir mental.</p>",
	"suggestion" : "<p>Un barde de niveau 6 ayant atteint un degré de maîtrise de 9 dans une forme de Représentation peut faire une <em>Suggestion</em> (comme le sort du même nom) à une créature qu’il vient de fasciner (voir ci-dessus). L’utilisation de suggestion ne rompt pas la concentration du barde sur sa fascination et n’autorise pas la cible à effectuer un nouveau jet de sauvegarde contre la fascination.</p><p>La suggestion n’est pas décomptée du nombre d’utilisations quotidiennes de ses aptitudes musicales. Un jet de Volonté réussi (DD 10 + 1/2 du niveau du barde + le modificateur de Charisme du barde) annule cet effet. La suggestion affecte une seule créature (mais voir suggestion de groupe). Suggestion est un pouvoir mental de langage et de type enchantement (coercition).</p>",
	"inspire_greatness" : "<p>Un barde de niveau 9 ayant atteint un degré de maîtrise de 12 ou plus dans une forme de Représentation peut faire appel à ses chants ou poèmes pour inspirer l’héroïsme chez un allié distant de 9 mètres ou moins (ou lui-même) et améliorer ses talents de combattant. Il peut inspirer de la sorte une personne supplémentaire tous les trois niveaux au- dessus du niveau 9 (deux au niveau 12, trois au niveau 15, quatre au niveau 18). Pour recevoir l’inspiration, l’allié doit entendre le chant du barde. Les effets durent tant que le sujet entend chanter le barde, et pendant 5 rounds par la suite. La créature inspirée à l’héroïsme bénéficie de 2 dés de vie de bonus (des d10), du nombre de points de vie temporaires correspondant (on applique normalement le modificateur de Constitution), d’un bonus d’aptitude de +2 aux jets d’attaque et d’un bonus d’aptitude de +1 aux jets de Vigueur. Les dés de vie de bonus comptent comme des dés de vie normaux pour ce qui est de déterminer l’effet de sorts tels que sommeil. L’inspiration héroïque est un pouvoir mental.</p>",
	"song_of_freedom" : "<p>Un barde de niveau 12 ayant atteint un degré de maîtrise de 15 dans une forme de Représentation peut utiliser sa musique ou sa poésie pour créer un effet semblable au sort <em>Annulation d’enchantement</em>, à un niveau de lanceur de sorts égal au niveau du barde. Le barde doit se concentrer et jouer de la musique sans interruption pendant une minute. Il peut affecter une seul cible distante de 9 mètres ou moins. Il ne peut utiliser un chant de liberté sur lui-même.</p>",
	"inspire_heroics" : "<p>Un barde de niveau 15 ayant atteint un degré de maîtrise de 18 ou plus dans une forme de Représentation peut faire appel à ses chants ou poèmes pour inspirer un allié distant de 9 mètres ou moins (ou lui-même) et en faire un combattant intrépide, capable de se battre bravement même lorsque tout espoir semble perdu. Il peut inspirer de la sorte une personne supplémentaire tous les trois niveaux au-dessus du niveau 15 (deux au niveau 18). Pour recevoir l’inspiration, l’allié doit entendre le chant du barde pendant un round entier. La créature inspirée à l’intrépidité bénéficie d’un bonus de moral de +4 sur les jets de sauvegarde et d’un bonus d’esquive de +4 à la CA. Les effets durent tant que le sujet entend chanter le barde, et pendant 5 rounds par la suite. L’inspiration intrépide est un pouvoir mental.</p>",
	"mass_suggestion" : "<p>Ce pouvoir fonctionne comme <em>Suggestion</em>, ci-dessus, excepté qu’un barde de niveau 18 ayant atteint un degré de maîtrise de 21 dans une forme de Représentation peut faire une suggestion simultanée à un nombre quelconque de créatures qu’il vient de fasciner. Suggestion de groupe est un pouvoir mental de langage et de type enchantement (coercition).</p>",

	// Wizard
	"wizard_features" : "<p><strong>Armes et armures</strong>. Le magicien est formé au maniement de l’arbalète (légère et lourde), du bâton, de la dague et du gourdin. Il n’est formé ni au maniement des boucliers ni au port des armures. En effet, l’armure restreint ses mouvements et risque de faire échouer ses sorts à composante gestuelle.</p><p><strong>Sorts</strong>. Un magicien peut lancer des sorts profanes (du même type que ceux des bardes et des ensorceleurs) appartenant à la liste de sorts d’ensorceleur et de magicien. Un magicien doit choisir et préparer ses sorts à l’avance (voir plus loin).</p><p>L’Intelligence est la caractéristique primordiale des sorts de magicien. Pour apprendre ou lancer un sort, un magicien doit avoir une valeur d’Intelligence au moins égale à 10 + le niveau du sort (soit Int 10 pour les sorts de niveau 0, Int 11 pour ceux du 1er niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur d’Intelligence du magicien.</p><p>Comme les autres lanceurs de sorts, le magicien ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur d’Intelligence est suffisamment élevée.</p><p>Contrairement au barde ou à l’ensorceleur, le magicien n’est pas limité quant au nombre de sorts qu’il peut connaître. Il doit cependant choisir et préparer ses sorts en avance en étudiant son grimoire profane pendant une heure, après une bonne nuit de sommeil. Pendant qu’il étudie, le magicien choisit quels sorts il va préparer pour la journée.</p><p><strong>Grimoire</strong>. Le magicien doit compulser son grimoire chaque jour afin de préparer les sorts qu’il souhaite utiliser. Il est incapable de préparer un sort qui ne se trouve pas dans son grimoire, exception faite de lecture de la magie, que tout magicien peut préparer de mémoire.</p><p>Le personnage commence sa carrière avec un grimoire contenant tous les sorts du niveau 0 (sauf ceux appartenant à une école interdite, s’il est spécialisé) plus trois du 1er niveau, choisis par le joueur. On y ajoute un nouveau sort du 1er niveau par point de bonus du modificateur d’Intelligence du personnage, qui est encore choisi par le joueur. Chaque fois que le personnage gagne un niveau de magicien, il ajoute deux nouveaux sorts dans son grimoire, ces sorts devant automatiquement être d’un niveau auquel il a accès (en considérant son niveau nouvellement augmenté). À n’importe quel moment, le personnage peut également recopier des sorts trouvées dans le grimoire d’un autre magicien.</p><p><strong>Langues supplémentaires</strong>. Le magicien peut apprendre le draconien à la place d’une des langues supplémentaires autorisées par sa race.</p><p><strong>Dons supplémentaires</strong>. Au niveau 5 et tous les 5 niveaux suivants (10, 15, 20), le magicien gagne un don supplémentaire. Ce don doit obligatoirement être un don de métamagie, un don de création d’objet ou <strong>Maîtrise des sorts</strong>. Le magicien doit satisfaire à toutes les conditions requises pour chaque don, y compris le niveau de lanceur de sorts minimal.</p><p>Ces dons viennent en plus de ceux que tout personnage gagne aux niveaux 3, 6, etc. Ces dons peuvent être choisis sur l’ensemble de la liste, ils n’ont pas besoin d’être des dons de métamagie ou de création d’objets ou <strong>Maîtrise des sorts</strong>.</p>",
	"school_specialization" : "<p>On appelle école une famille de sorts regroupés par thème, par exemple les illusions ou la nécromancie. Il en existe huit. Tout magicien qui le souhaite peut choisir une école de prédilection (voir ci-dessous), ce qui lui permet de lancer des sorts supplémentaires. Dans le même temps, certaines écoles lui sont interdites, car incompatibles avec celle qu’il a choisie. Le magicien obtient en fait une maîtrise exceptionnelle d’une école de magie en négligeant l’étude d’autres écoles.</p><p>Chaque jour, un magicien spécialiste peut préparer un sort supplémentaire de son école pour chaque niveau de sort auquel il a accès. Dans le même temps, il bénéficie d’un bonus de +2 aux tests d’Art de la magie visant à apprendre les sorts de son école.</p><p>C’est au niveau 1 que le magicien choisit ou non de se spécialiser et, si oui, pour quelle école. Le personnage doit alors choisir deux autres écoles de magie qui lui seront interdites (à moins qu’il ne choisisse la Divination, voir ci-dessous). Par exemple, un spécialiste de l’Invocation peut choisir d’abandonner l’Enchantement et la Nécromancie, ou l’Évocation et la Transmutation. Un magicien ne peut jamais choisir la Divination en tant qu’école interdite. Le personnage ne peut pas apprendre les sorts d’une école interdite, et il ne peut même pas les lancer à partir de baguettes ou de parchemins. Il est impossible de changer de spécialisation ou d’école interdite après avoir fait son choix.</p><p>Les huit écoles de magie profane sont les suivantes : Abjuration, Divination, Enchantement, Évocation, Illusion, Invocation, Nécromancie et Transmutation. Les sorts qui n’entrent dans aucune de ces catégories sont dits universels.</p><ul><li><strong>Abjuration</strong>. Tous les sorts qui protègent, bloquent ou bannissent. Un magicien spécialisé dans cette école se nomme un abjurateur.</li><li><strong>Divination</strong>. Les sorts qui révèlent des informations. Le spécialiste se nomme un devin. Contrairement aux autres écoles, il doit choisir une seule école interdite.</li><li><strong>Enchantement</strong>. Les sorts qui confèrent une faculté au sujet ou qui permettent au magicien de contrôler un autre être vivant. Le spécialiste est appelé enchanteur.</li><li><strong>Évocation</strong>. Tous les sorts qui manipulent l’énergie ou qui créent quelque chose à partir de rien. Le spécialiste est appelé un évocateur.</li><li><strong>Illusion</strong>. Les sorts qui modifient les perceptions ou créent de fausses images. Un spécialiste de l’illusion est un illusionniste.</li><li><strong>Invocation</strong>. Tous les sorts qui amènent créatures ou objets à proximité du magicien. Un spécialiste de l’invocation est un invocateur.</li><li><strong>Nécromancie</strong>. Les sorts qui manipulent, créent ou détruisent la vie et l’énergie vitale. Les nécromanciens sont les spécialistes de la nécromancie.</li><li><strong>Transmutation</strong>. Les sorts qui transforment physiquement le sujet ou qui modifient une ou plusieurs de ses facultés. Le spécialiste se nomme transmutateur.</li><li><strong>Universel</strong>. Il ne s’agit pas là d’une école, mais d’une catégorie de sorts que tous les magiciens peuvent apprendre. On ne peut pas choisir la magie universelle comme école de prédilection ni comme école interdite. Seuls quelques sorts appartiennent à cette école.</li></ul>",

	// Sorcerer
	"sorcerer_features" : "<p><strong>Armes et armures</strong>. L’ensorceleur est formé au maniement des armes courantes. Par contre, il n’est formé ni au maniement des boucliers, ni au port des armures. En effet, une armure restreint ses gestes, ce qui risque de faire échouer ses sorts à composante gestuelle.</p><p><strong>Sorts</strong>. Un ensorceleur peut lancer des sorts profanes (du même type que ceux des bardes et des magiciens) appartenant à la liste de sorts d’ensorceleur et de magicien, à quelques exceptions près. Il les lance sans avoir à les préparer à l’avance, à l’inverse des prêtres et des magiciens.</p><p>Le Charisme est la caractéristique primordiale des sorts d’ensorceleur. Pour apprendre ou lancer un sort, un ensorceleur doit avoir une valeur de Charisme au moins égale à 10 + le niveau du sort (soit Cha 10 pour les sorts de niveau 0, Cha 11 pour ceux du 1er niveau et ainsi de suite). Le DD des jets de sauvegarde contre ses sorts est égal à 10 + le niveau du sort + le modificateur de Charisme de l’ensorceleur.</p><p>Comme les autres lanceurs de sorts, l’ensorceleur ne peut lancer qu’un nombre de sorts donné de chaque niveau chaque jour. De plus, il reçoit des sorts en bonus si sa valeur de Charisme est suffisamment élevée.</p><p>Le répertoire de sorts d’un ensorceleur est très limité. Il commence sa carrière en connaissant seulement quatre sorts du niveau 0 (également appelés tours de magie) et deux sorts de 1er niveau, tous au choix du joueur. Lors de chaque passage de niveau, un ensorceleur apprend un ou plusieurs sorts supplémentaires (contrairement au quota de sorts quotidiens, le nombre de sorts connus par un ensorceleur n’est pas modifié par son éventuel bonus de Charisme). Ces sorts peuvent être choisis parmi la liste des sorts courants d’ensorceleur et de magicien, mais ils peuvent également sortir de ce cadre si le personnage les a trouvés au cours d’une aventure. Cette méthode ne permet jamais à l’ensorceleur de gagner davantage de sorts connus ; elle lui offre juste la possibilité d’apprendre des sorts originaux.</p><p>Lorsqu’il atteint le niveau 4, et tous les 2 niveaux d’ensorceleur après cela (niveaux 6, 8, etc.), un ensorceleur peut choisir d’apprendre un nouveau sort à la place de l’un de ceux qu’il connaît déjà. L’ensorceleur “ oublie ” alors un sort au profit d’un autre. Le niveau du nouveau sort doit être identique à celui du sort oublié, et ce niveau doit être inférieur de 2 niveaux au plus haut niveau de sorts accessibles au personnage. Un ensorceleur ne peut échanger qu’un seul sort à chaque fois, et doit choisir s’il procède à un échange en même temps qu’il apprend de nouveaux sorts lors du passage de niveau.</p><p>Contrairement à un magicien ou à un prêtre, un ensorceleur n’a pas besoin de préparer ses sorts à l’avance. Il peut lancer n’importe lequel des sorts de son répertoire à n’importe quel moment, à condition de ne pas avoir épuisé son quota de sorts de ce niveau pour la journée.</p>",
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Load
// -----------------------------------------------------------------------------
// =============================================================================

/**
	NOTE
	The language file can really be huge ... (tests were run with a 10 MB file).
	And if it is, the synchronous loading of scripts can be broken by some browsers.
	In order to prevent that issue, the loading of JS files is deferred at the end of this file.
	This way, it is certain that the whole file is correctly loaded and ready to be processed by other scripts.
*/
load(); // WARNING ! Do not remove !
