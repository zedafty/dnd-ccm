/* +------------------------------------------------------------------------+ */
/* ////////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/* +------------------------------------------------------------------------+ */
/* |                                                                        | */
/* |                             *** PERKS ***                              | */
/* |                                                                        | */
/* +------------------------------------------------------------------------+ */
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||//////////////////////////////////// */
/* +------------------------------------------------------------------------+ */

/**
	NOTE :
	$feats             = all perks gained by level (i.e. general feats, metamagic, craft magic items or monsters' feats)
	$special_abilities = all perks granted by race or class (i.e. monster abilities, creatures' traits or class features)
*/

// =============================================================================
// -----------------------------------------------------------------------------
// # Feats
// -----------------------------------------------------------------------------
// =============================================================================

// FEATS
// id
// name
// desc (alias for 'benefit')
// ? req (prerequisite) (operator is always >=)
// > req_ab = {"str" : 13, "dex" : 13}, -- ability score
// > req_at = 4, -- base attack bonus
// > req_ft = ["dodge", "mobility", "spring_attack", "combat_expertise"], -- feat
// > req_cc = {"fighter" : 8} -- class level
// > req_cl = 12 -- caster level
// > req_sk = {"ride" : 1} -- skill rank
// > req_sp = 3 -- spell level
// ? bon (benefit)
// ? std (normal)
// ? spe (special)
// ? cat (category) : fighter, metamagic, item_creation
// * subt (subtype) : ext, sup, nat, mag
// * usab (usage) : active/passive?
$feats = [

	// Skills
	{"id" : "acrobatic", "name" : $lng.fts.acrobatic, "desc" : $msg.fts.acrobatic},
	{"id" : "agile", "name" : $lng.fts.agile, "desc" : $msg.fts.agile},
	{"id" : "alertness", "name" : $lng.fts.alertness, "desc" : $msg.fts.alertness},
	{"id" : "animal_affinity", "name" : $lng.fts.animal_affinity, "desc" : $msg.fts.animal_affinity},
	{"id" : "athletic", "name" : $lng.fts.athletic, "desc" : $msg.fts.athletic},
	{"id" : "deceitful", "name" : $lng.fts.deceitful, "desc" : $msg.fts.deceitful},
	{"id" : "deft_hands", "name" : $lng.fts.deft_hands, "desc" : $msg.fts.deft_hands},
	{"id" : "diligent", "name" : $lng.fts.diligent, "desc" : $msg.fts.diligent},
	{"id" : "investigator", "name" : $lng.fts.investigator, "desc" : $msg.fts.investigator},
	{"id" : "magical_aptitude", "name" : $lng.fts.magical_aptitude, "desc" : $msg.fts.magical_aptitude},
	{"id" : "negotiator", "name" : $lng.fts.negotiator, "desc" : $msg.fts.negotiator},
	{"id" : "nimble_fingers", "name" : $lng.fts.nimble_fingers, "desc" : $msg.fts.nimble_fingers},
	{"id" : "persuasive", "name" : $lng.fts.persuasive, "desc" : $msg.fts.persuasive},
	{"id" : "self_sufficient", "name" : $lng.fts.self_sufficient, "desc" : $msg.fts.self_sufficient},
	{"id" : "stealthy", "name" : $lng.fts.stealthy, "desc" : $msg.fts.stealthy},

	// Skill Focus
	{"id" : "skill_focus", "name" : $lng.fts.skill_focus, "desc" : $msg.fts.skill_focus},

	// Saves
	{"id" : "lightning_reflexes", "name" : $lng.fts.lightning_reflexes, "desc" : $msg.fts.lightning_reflexes},
	{"id" : "great_fortitude", "name" : $lng.fts.great_fortitude, "desc" : $msg.fts.great_fortitude},
	{"id" : "iron_will", "name" : $lng.fts.iron_will, "desc" : $msg.fts.iron_will},

	// Resistances
	{"id" : "endurance", "name" : $lng.fts.endurance, "desc" : $msg.fts.endurance},
	{"id" : "diehard", "name" : $lng.fts.diehard, "desc" : $msg.fts.diehard},
	{"id" : "toughness", "name" : $lng.fts.toughness, "desc" : $msg.fts.toughness},

	// Survival
	{"id" : "run", "name" : $lng.fts.run, "desc" : $msg.fts.run},
	{"id" : "track", "name" : $lng.fts.track, "desc" : $msg.fts.track},
	{"id" : "leadership", "name" : $lng.fts.leadership, "desc" : $msg.fts.leadership},

	// Armor Proficiency
	{"id" : "armor_proficiency_light", "name" : $lng.fts.armor_proficiency_light, "desc" : $msg.fts.armor_proficiency_light},
	{"id" : "armor_proficiency_medium", "name" : $lng.fts.armor_proficiency_medium, "desc" : $msg.fts.armor_proficiency_medium},
	{"id" : "armor_proficiency_heavy", "name" : $lng.fts.armor_proficiency_heavy, "desc" : $msg.fts.armor_proficiency_heavy},

	// Shield Proficiency
	{"id" : "shield_proficiency", "name" : $lng.fts.shield_proficiency, "desc" : $msg.fts.shield_proficiency},
	{"id" : "tower_shield_proficiency", "name" : $lng.fts.tower_shield_proficiency, "desc" : $msg.fts.tower_shield_proficiency},
	{"id" : "improved_shield_bash", "name" : $lng.fts.improved_shield_bash, "desc" : $msg.fts.improved_shield_bash},

	// Weapon Proficiency
	{"id" : "simple_weapon_proficiency", "name" : $lng.fts.simple_weapon_proficiency, "desc" : $msg.fts.simple_weapon_proficiency},
	{"id" : "martial_weapon_proficiency", "name" : $lng.fts.martial_weapon_proficiency, "desc" : $msg.fts.martial_weapon_proficiency},
	{"id" : "exotic_weapon_proficiency", "name" : $lng.fts.exotic_weapon_proficiency, "desc" : $msg.fts.exotic_weapon_proficiency},

	// Weapon Mastery
	{"id" : "weapon_focus", "name" : $lng.fts.weapon_focus, "desc" : $msg.fts.weapon_focus},
	{"id" : "weapon_specialization", "name" : $lng.fts.weapon_specialization, "desc" : $msg.fts.weapon_specialization},
	{"id" : "greater_weapon_focus", "name" : $lng.fts.greater_weapon_focus, "desc" : $msg.fts.greater_weapon_focus},
	{"id" : "greater_weapon_specialization", "name" : $lng.fts.greater_weapon_specialization, "desc" : $msg.fts.greater_weapon_specialization},
	{"id" : "improved_critical", "name" : $lng.fts.improved_critical, "desc" : $msg.fts.improved_critical},

	// Martial Abilities
	{"id" : "blind_fight", "name" : $lng.fts.blind_fight, "desc" : $msg.fts.blind_fight},
	{"id" : "combat_reflexes", "name" : $lng.fts.combat_reflexes, "desc" : $msg.fts.combat_reflexes},
	{"id" : "improved_initiative", "name" : $lng.fts.improved_initiative, "desc" : $msg.fts.improved_initiative},
	{"id" : "quick_draw", "name" : $lng.fts.quick_draw, "desc" : $msg.fts.quick_draw},
	{"id" : "weapon_finesse", "name" : $lng.fts.weapon_finesse, "desc" : $msg.fts.weapon_finesse},

	// Offense Abilities
	{"id" : "power_attack", "name" : $lng.fts.power_attack, "desc" : $msg.fts.power_attack},
	{"id" : "cleave", "name" : $lng.fts.cleave, "desc" : $msg.fts.cleave},
	{"id" : "great_cleave", "name" : $lng.fts.great_cleave, "desc" : $msg.fts.great_cleave},
	{"id" : "improved_bull_rush", "name" : $lng.fts.improved_bull_rush, "desc" : $msg.fts.improved_bull_rush},
	{"id" : "improved_overrun", "name" : $lng.fts.improved_overrun, "desc" : $msg.fts.improved_overrun},
	{"id" : "improved_sunder", "name" : $lng.fts.improved_sunder, "desc" : $msg.fts.improved_sunder},

	// Defense Abilities
	{"id" : "dodge", "name" : $lng.fts.dodge, "desc" : $msg.fts.dodge},
	{"id" : "mobility", "name" : $lng.fts.mobility, "desc" : $msg.fts.mobility},
	{"id" : "spring_attack", "name" : $lng.fts.spring_attack, "desc" : $msg.fts.spring_attack},

	// Combat Mastery
	{"id" : "combat_expertise", "name" : $lng.fts.combat_expertise, "desc" : $msg.fts.combat_expertise},
	{"id" : "whirlwind_attack", "name" : $lng.fts.whirlwind_attack, "desc" : $msg.fts.whirlwind_attack},
	{"id" : "improved_disarm", "name" : $lng.fts.improved_disarm, "desc" : $msg.fts.improved_disarm},
	{"id" : "improved_feint", "name" : $lng.fts.improved_feint, "desc" : $msg.fts.improved_feint},
	{"id" : "improved_trip", "name" : $lng.fts.improved_trip, "desc" : $msg.fts.improved_trip},

	// Two-Weapon Fighting
	{"id" : "two_weapon_fighting", "name" : $lng.fts.two_weapon_fighting, "desc" : $msg.fts.two_weapon_fighting},
	{"id" : "two_weapon_defense", "name" : $lng.fts.two_weapon_defense, "desc" : $msg.fts.two_weapon_defense},
	{"id" : "improved_two_weapon_fighting", "name" : $lng.fts.improved_two_weapon_fighting, "desc" : $msg.fts.improved_two_weapon_fighting},
	{"id" : "greater_two_weapon_fighting", "name" : $lng.fts.greater_two_weapon_fighting, "desc" : $msg.fts.greater_two_weapon_fighting},

	// Unarmed Fighting
	{"id" : "improved_unarmed_strike", "name" : $lng.fts.improved_unarmed_strike, "desc" : $msg.fts.improved_unarmed_strike},
	{"id" : "stunning_fist", "name" : $lng.fts.stunning_fist, "desc" : $msg.fts.stunning_fist},
	{"id" : "deflect_arrows", "name" : $lng.fts.deflect_arrows, "desc" : $msg.fts.deflect_arrows},
	{"id" : "snatch_arrows", "name" : $lng.fts.snatch_arrows, "desc" : $msg.fts.snatch_arrows},
	{"id" : "improved_grapple", "name" : $lng.fts.improved_grapple, "desc" : $msg.fts.improved_grapple},

	// Archery
	{"id" : "rapid_reload", "name" : $lng.fts.rapid_reload, "desc" : $msg.fts.rapid_reload},
	{"id" : "point_blank_shot", "name" : $lng.fts.point_blank_shot, "desc" : $msg.fts.point_blank_shot},
	{"id" : "far_shot", "name" : $lng.fts.far_shot, "desc" : $msg.fts.far_shot},
	{"id" : "precise_shot", "name" : $lng.fts.precise_shot, "desc" : $msg.fts.precise_shot},
	{"id" : "improved_precise_shot", "name" : $lng.fts.improved_precise_shot, "desc" : $msg.fts.improved_precise_shot},
	{"id" : "rapid_shot", "name" : $lng.fts.rapid_shot, "desc" : $msg.fts.rapid_shot},
	{"id" : "manyshot", "name" : $lng.fts.manyshot, "desc" : $msg.fts.manyshot},
	{"id" : "shot_on_the_run", "name" : $lng.fts.shot_on_the_run, "desc" : $msg.fts.shot_on_the_run},

	// Mounted Combat
	{"id" : "mounted_combat", "name" : $lng.fts.mounted_combat, "desc" : $msg.fts.mounted_combat},
	{"id" : "ride_by_attack", "name" : $lng.fts.ride_by_attack, "desc" : $msg.fts.ride_by_attack},
	{"id" : "spirited_charge", "name" : $lng.fts.spirited_charge, "desc" : $msg.fts.spirited_charge},
	{"id" : "mounted_archery", "name" : $lng.fts.mounted_archery, "desc" : $msg.fts.mounted_archery},
	{"id" : "trample", "name" : $lng.fts.trample, "desc" : $msg.fts.trample},

	// Turning
	{"id" : "extra_turning", "name" : $lng.fts.extra_turning, "desc" : $msg.fts.extra_turning},
	{"id" : "improved_turning", "name" : $lng.fts.improved_turning, "desc" : $msg.fts.improved_turning},

	// Wildshape
	{"id" : "natural_spell", "name" : $lng.fts.natural_spell, "desc" : $msg.fts.natural_spell},

	// Spellbook
	{"id" : "spell_mastery", "name" : $lng.fts.spell_mastery, "desc" : $msg.fts.spell_mastery}, // TODO : Multiple choices

	// Spellcasting
	{"id" : "combat_casting", "name" : $lng.fts.combat_casting, "desc" : $msg.fts.combat_casting},
	{"id" : "eschew_materials", "name" : $lng.fts.eschew_materials, "desc" : $msg.fts.eschew_materials},

	// Spell Power
	{"id" : "spell_focus", "name" : $lng.fts.spell_focus, "desc" : $msg.fts.spell_focus},
	{"id" : "greater_spell_focus", "name" : $lng.fts.greater_spell_focus, "desc" : $msg.fts.greater_spell_focus},
	{"id" : "augment_summoning", "name" : $lng.fts.augment_summoning, "desc" : $msg.fts.augment_summoning},
	{"id" : "spell_penetration", "name" : $lng.fts.spell_penetration, "desc" : $msg.fts.spell_penetration},
	{"id" : "greater_spell_penetration", "name" : $lng.fts.greater_spell_penetration, "desc" : $msg.fts.greater_spell_penetration},
	{"id" : "improved_counterspell", "name" : $lng.fts.improved_counterspell, "desc" : $msg.fts.improved_counterspell},

	// Craft Magic Items
	{"id" : "scribe_scroll", "name" : $lng.fts.scribe_scroll, "desc" : $msg.fts.scribe_scroll},
	{"id" : "brew_potion", "name" : $lng.fts.brew_potion, "desc" : $msg.fts.brew_potion},
	{"id" : "craft_wondrous_item", "name" : $lng.fts.craft_wondrous_item, "desc" : $msg.fts.craft_wondrous_item},
	{"id" : "craft_magic_arms_and_armor", "name" : $lng.fts.craft_magic_arms_and_armor, "desc" : $msg.fts.craft_magic_arms_and_armor},
	{"id" : "craft_wand", "name" : $lng.fts.craft_wand, "desc" : $msg.fts.craft_wand},
	{"id" : "craft_rod", "name" : $lng.fts.craft_rod, "desc" : $msg.fts.craft_rod},
	{"id" : "craft_staff", "name" : $lng.fts.craft_staff, "desc" : $msg.fts.craft_staff},
	{"id" : "forge_ring", "name" : $lng.fts.forge_ring, "desc" : $msg.fts.forge_ring},

	// Metamagic
	{"id" : "heighten_spell", "name" : $lng.fts.heighten_spell, "desc" : $msg.fts.heighten_spell},
	{"id" : "silent_spell", "name" : $lng.fts.silent_spell, "desc" : $msg.fts.silent_spell},
	{"id" : "still_spell", "name" : $lng.fts.still_spell, "desc" : $msg.fts.still_spell},
	{"id" : "extend_spell", "name" : $lng.fts.extend_spell, "desc" : $msg.fts.extend_spell},
	{"id" : "enlarge_spell", "name" : $lng.fts.enlarge_spell, "desc" : $msg.fts.enlarge_spell},
	{"id" : "empower_spell", "name" : $lng.fts.empower_spell, "desc" : $msg.fts.empower_spell},
	{"id" : "widen_spell", "name" : $lng.fts.widen_spell, "desc" : $msg.fts.widen_spell},
	{"id" : "maximize_spell", "name" : $lng.fts.maximize_spell, "desc" : $msg.fts.maximize_spell},
	{"id" : "quicken_spell", "name" : $lng.fts.quicken_spell, "desc" : $msg.fts.quicken_spell},

	// Monsters' Feats * TODO
	{"id" : "multiattack", "name" : "Attaques multiples", "desc" : ""},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Special Abilities
// -----------------------------------------------------------------------------
// =============================================================================

/*
	TODO
	o merge special_attacks and special_qualities into special_abilities
	o insert a key to mark a perk as attack (active) or quality (passive)
	o add a key-value system for abilities containing numeric/text values in the name
	o add a hasSpecialAbility() function working like has hasFeat() but for special abilities
	o add traits for all creatures' types
	! add class_abilities into special_abilities
	! add weapon and armor proficiency to creatures
	! bind all class_abilities to a class check process based on class progression

	// syntax in monster database
	"sab" : "["human_traits", "darkvision", "immunities", {"damage_reduction" : [5, "magic"]}]",
	"sab" : "[{"damage_reduction" : 10}]",
	"sab" : "[{"damage_reduction" : [10, "evil"]}]",
	"sab" : "[{"damage_reduction" : [10, ["evil", "magic", "adamantium"]]}]", // DEFAULT = none (i.e. no bypass)
	"sab" : "[{"resistance_to_energy" : "fire"}]",
	"sab" : "[{"resistance_to_energy" : ["fire", 10]}]", // DEFAULT = 5 (i.e. min val)
	"sab" : "[{"gaze_attack" : "paralysis"}]",

	// special ability properties
	constrict (1d4+4)
	trample (2d12+15)
	rend (2d6+9)
	rake (2d6)
	powerful charge (4d6)
	darkvision (e.g. 60 ft.)
	tremorsense (e.g. 60 ft.)
	blindsight  (e.g. 30 ft.)
	blindsense  (e.g. 30 ft.)
	telepathy  (e.g. 100 ft.)
	damage_reduction (e.g. 10/evil)
	resistance_to_energy (e.g. fire 10)
	turn_resistance (e.g. +2)
	spell_resistance (e.g. 14)
	regeneration (e.g. 10)
	fast_healing (e.g. 2)
	gaze_attack (e.g. paralysis)
	immunities (e.g. poison)

	// spelling exception
	{"gaze_attack" : "paralysis"} => Paralyzing gaze
	{"gaze_attack" : "death"} => Death gaze
	{"resistance_to_energy" : "fire"} => Résistance au feu
	{"resistance_to_energy" : "electricity"} => Résistance à l'électricité

	// check special abilities
	if (hasSpecialAbility(h.sab, "darkvision")) => match a perk id
	if (hasSpecialAbility(h.sab, "gaze_attack", "paralysis")) => match a perk id along with a property value
	if (hasSpecialAbility(h.sab, "resistance_to_energy", "fire")) => match a perk id along with a property key
*/

/**
	NOTE
	Finding a special ability harmful or not is a real pain in the butt ...
	Rage is considered as an attack, but Change shape is not.
	Summon monster is considered as an attack while Summon familiar should not.
	No clear rule was find to separate the abilities into two categories.
	Usually, a special ability focused on combat is considered as an attack.
	Abilities that enhance an offensive ability have been considered of the same
	type of the enhanced ability (like Greater rage).
	While Inspire courage should be considered as a combat ability, it has been
	put under the qualities header in order to preserve abilities consistency.
*/

// SPECIAL ABILITIES
// - id
// - type : "na" = natural or undefined (optional - default), "ex" = extraordinary (Ex/Ext), "su" = supernatural (Su/Sup), "sp" = spell-like (Sp/Mag)
// - act : false = passive (i.e. no action required ; permanent) (default), true = active (i.e. using the ability requires an action)
// - atk : false = non-combat/favorable (i.e. special quality [qlt]) (default), true = combat/hostile (i.e. special attack [atk])
// - name
// - desc
$special_abilities = [

	// {"id" : "", "type" : "", "act" : false, "atk" : false, "name" : "", "desc" : ""},

	// Core
	{"id" : "ability_damage", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.ability_damage, "desc" : $msg.sab.ability_score_loss},
	{"id" : "ability_drain", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.ability_drain, "desc" : $msg.sab.ability_score_loss},
	{"id" : "alternate_form", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.alternate_form, "desc" : $msg.sab.alternate_form},
	{"id" : "antimagic", "type" : "na", "act" : false, "atk" : true, "name" : $lng.sab.antimagic, "desc" : $msg.sab.antimagic},
	{"id" : "blindsense", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.blindsense, "desc" : $msg.sab.blindsense_and_blindsight},
	{"id" : "blindsight", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.blindsight, "desc" : $msg.sab.blindsense_and_blindsight},
	{"id" : "breath_weapon", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.breath_weapon, "desc" : $msg.sab.breath_weapon},
	{"id" : "burrow", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.burrow, "desc" : $msg.sab.burrow},
	{"id" : "change_shape", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.change_shape, "desc" : $msg.sab.change_shape},
	{"id" : "climb", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.climb, "desc" : $msg.sab.climb},
	{"id" : "cold_immunity", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.cold_immunity, "desc" : $msg.sab.cold_immunity},
	{"id" : "constrict", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.constrict, "desc" : $msg.sab.constrict},
	{"id" : "damage_reduction", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.damage_reduction, "desc" : $msg.sab.damage_reduction}, // NOTE : Supernatural ability (used by undead) - Default
	{"id" : "damage_reduction_ex", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.damage_reduction, "desc" : $msg.sab.damage_reduction}, // NOTE : Extraordinary ability (used by lycanthropes)
	{"id" : "darkvision", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.darkvision, "desc" : $msg.sab.darkvision},
	{"id" : "death_attack", "type" : "na", "act" : true, "atk" : true, "name" : $lng.sab.death_attack, "desc" : $msg.sab.death_attack},
	{"id" : "disease", "type" : "na", "act" : false, "atk" : true, "name" : $lng.sab.disease, "desc" : $msg.sab.disease},
	{"id" : "distraction", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.distraction, "desc" : $msg.sab.distraction},
	{"id" : "energy_drain", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.energy_drain, "desc" : $msg.sab.energy_drain},
	{"id" : "etherealness", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.etherealness, "desc" : $msg.sab.etherealness},
	{"id" : "evasion", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.evasion, "desc" : $msg.sab.evasion_and_improved_evasion},
	{"id" : "fast_healing", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.fast_healing, "desc" : $msg.sab.fast_healing},
	{"id" : "fear", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.fear, "desc" : $msg.sab.fear}, // NOTE : Cone-shape, spell-like ability - Default
	{"id" : "fear_aura", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.fear, "desc" : $msg.sab.fear}, // NOTE : Aura, supernatural ability
	{"id" : "fear_ray", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.fear, "desc" : $msg.sab.fear}, // NOTE : Ray, supernatural ability
	{"id" : "fire_immunity", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.fire_immunity, "desc" : $msg.sab.fire_immunity},
	{"id" : "fly", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.fly, "desc" : $msg.sab.fly},
	{"id" : "frightful_presence", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.frightful_presence, "desc" : $msg.sab.frightful_presence},
	{"id" : "gaseous_form", "type" : "na", "act" : true, "atk" : false, "name" : $lng.sab.gaseous_form, "desc" : $msg.sab.gaseous_form},
	{"id" : "gaze_attack", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.gaze_attack, "desc" : $msg.sab.gaze_attack}, // NOTE : Master, additional property required (like gaze_paralysis)
	{"id" : "immunities", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.immunities, "desc" : undefined},
	{"id" : "improved_evasion", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.improved_evasion, "desc" : $msg.sab.evasion_and_improved_evasion},
	{"id" : "improved_grab", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.improved_grab, "desc" : $msg.sab.improved_grab},
	{"id" : "incorporeality", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.incorporeality, "desc" : $msg.sab.incorporeality},
	{"id" : "invisibility", "type" : "na", "act" : true, "atk" : false, "name" : $lng.sab.invisibility, "desc" : $msg.sab.invisibility},
	{"id" : "level_loss", "type" : "na", "act" : false, "atk" : true, "name" : $lng.sab.level_loss, "desc" : $msg.sab.level_loss},
	{"id" : "low_light_vision", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.low_light_vision, "desc" : $msg.sab.low_light_vision},
	{"id" : "manufactured_weapons", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.manufactured_weapons, "desc" : $msg.sab.manufactured_weapons},
	{"id" : "natural_weapons", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.natural_weapons, "desc" : $msg.sab.natural_weapons},
	{"id" : "nonabilities", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.nonabilities, "desc" : $msg.sab.nonabilities},
	{"id" : "paralysis", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.paralysis, "desc" : $msg.sab.paralysis}, // NOTE : Extraordinary ability (i.e. result from a melee or a ranged attack) ; not to be confused with special attack (e.g. gaze_paralysis)
	{"id" : "poison", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.poison, "desc" : $msg.sab.poison},
	{"id" : "polymorph", "type" : "na", "act" : true, "atk" : false, "name" : $lng.sab.polymorph, "desc" : $msg.sab.polymorph},
	{"id" : "pounce", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.pounce, "desc" : $msg.sab.pounce},
	{"id" : "powerful_charge", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.powerful_charge, "desc" : $msg.sab.powerful_charge},
	{"id" : "psionics", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.psionics, "desc" : $msg.sab.psionics},
	{"id" : "rake", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.rake, "desc" : $msg.sab.rake},
	{"id" : "ray", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.ray, "desc" : $msg.sab.ray}, // NOTE : Spell-like ability (e.g. Ray of Enfeeblement)
	{"id" : "ray_attack", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.ray, "desc" : $msg.sab.ray}, // NOTE : Supernatural ability (e.g. beholder and alike)
	{"id" : "regeneration", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.regeneration, "desc" : $msg.sab.regeneration},
	{"id" : "resistance_to_energy", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.resistance_to_energy, "desc" : $msg.sab.resistance_to_energy},
	{"id" : "scent", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.scent, "desc" : $msg.sab.scent},
	{"id" : "sonic_attack", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.sonic_attack, "desc" : $msg.sab.sonic_attack},
	{"id" : "spell_immunity", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.spell_immunity, "desc" : $msg.sab.spell_immunity},
	{"id" : "spell_like_abilities", "type" : "na", "act" : true, "atk" : true, "name" : $lng.sab.spell_like_abilities, "desc" : $msg.sab.spell_like_abilities},
	{"id" : "spell_resistance", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.spell_resistance, "desc" : $msg.sab.spell_resistance},
	{"id" : "spells", "type" : "na", "act" : true, "atk" : true, "name" : $lng.sab.spells, "desc" : $msg.sab.spells},
	{"id" : "summon", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.summon, "desc" : $msg.sab.summon},
	{"id" : "swallow_whole", "type" : "ex", "act" : true, "atk" : true, "name" : $lng.sab.swallow_whole, "desc" : $msg.sab.swallow_whole},
	{"id" : "swarm_attack", "type" : "na", "act" : false, "atk" : true, "name" : $lng.sab.swarm_attack, "desc" : $msg.sab.swarm_attack},
	{"id" : "swim", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.swim, "desc" : $msg.sab.swim},
	{"id" : "telepathy", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.telepathy, "desc" : $msg.sab.telepathy},
	{"id" : "trample", "type" : "ex", "act" : true, "atk" : true, "name" : $lng.sab.trample, "desc" : $msg.sab.trample},
	{"id" : "tremorsense", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.tremorsense, "desc" : $msg.sab.tremorsense},
	{"id" : "turn_resistance", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.turn_resistance, "desc" : $msg.sab.turn_resistance},
	{"id" : "vulnerability_to_energy", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.vulnerability_to_energy, "desc" : $msg.sab.vulnerability_to_energy},

	// Types
	{"id" : "plant_traits", "name" : $lng.sab.plant_traits, "desc" : $msg.sab.plant_traits},
	{"id" : "undead_traits", "name" : $lng.sab.undead_traits, "desc" : $msg.sab.undead_traits},
	{"id" : "construct_traits", "name" : $lng.sab.construct_traits, "desc" : $msg.sab.construct_traits},
	{"id" : "elemental_traits", "name" : $lng.sab.elemental_traits, "desc" : $msg.sab.elemental_traits},
	{"id" : "ooze_traits", "name" : $lng.sab.ooze_traits, "desc" : $msg.sab.ooze_traits},
	{"id" : "vermin_traits", "name" : $lng.sab.vermin_traits, "desc" : $msg.sab.vermin_traits},

	// Subtypes
	{"id" : "angel_traits", "name" : $lng.sab.angel_traits, "desc" : $msg.sab.angel_traits},
	{"id" : "archon_traits", "name" : $lng.sab.archon_traits, "desc" : $msg.sab.archon_traits},
	{"id" : "demon_traits", "name" : $lng.sab.demon_traits, "desc" : $msg.sab.demon_traits},
	{"id" : "devil_traits", "name" : $lng.sab.devil_traits, "desc" : $msg.sab.devil_traits},
	{"id" : "incorporeal_traits", "name" : $lng.sab.incorporeal_traits, "desc" : $msg.sab.incorporeal_traits},
	{"id" : "swarm_traits", "name" : $lng.sab.swarm_traits, "desc" : $msg.sab.swarm_traits},

	// Humans
	{"id" : "human_traits", "name" : $lng.sab.human_traits, "desc" : $msg.sab.human_traits},

	// Dwarves
	{"id" : "dwarf_traits", "name" : $lng.sab.dwarf_traits, "desc" : $msg.sab.dwarf_traits},
	{"id" : "duergar_traits", "name" : $lng.sab.duergar_traits, "desc" : $msg.sab.duergar_traits},
	{"id" : "deep_dwarf_traits", "name" : $lng.sab.deep_dwarf_traits, "desc" : $msg.sab.deep_dwarf_traits},

	// Elves
	{"id" : "elf_traits", "name" : $lng.sab.elf_traits, "desc" : $msg.sab.elf_traits},
	{"id" : "aquatic_elf_traits", "name" : $lng.sab.aquatic_elf_traits, "desc" : $msg.sab.aquatic_elf_traits},
	{"id" : "drow_traits", "name" : $lng.sab.drow_traits, "desc" : $msg.sab.drow_traits},
	{"id" : "gray_elf_traits", "name" : $lng.sab.gray_elf_traits, "desc" : $msg.sab.gray_elf_traits},
	{"id" : "wild_elf_traits", "name" : $lng.sab.wild_elf_traits, "desc" : $msg.sab.wild_elf_traits},
	{"id" : "wood_elf_traits", "name" : $lng.sab.wood_elf_traits, "desc" : $msg.sab.wood_elf_traits},
	{"id" : "half_elf_traits", "name" : $lng.sab.half_elf_traits, "desc" : $msg.sab.half_elf_traits},

	// Gnomes
	{"id" : "gnome_traits", "name" : $lng.sab.gnome_traits, "desc" : $msg.sab.gnome_traits},
	{"id" : "svirfneblin_traits", "name" : $lng.sab.svirfneblin_traits, "desc" : $msg.sab.svirfneblin_traits},
	{"id" : "forest_gnome_traits", "name" : $lng.sab.forest_gnome_traits, "desc" : $msg.sab.forest_gnome_traits},

	// Halflings
	{"id" : "halfling_traits", "name" : $lng.sab.halfling_traits, "desc" : $msg.sab.halfling_traits},
	{"id" : "deep_halfling_traits", "name" : $lng.sab.deep_halfling_traits, "desc" : $msg.sab.deep_halfling_traits},
	{"id" : "tallfellow_halfling_traits", "name" : $lng.sab.tallfellow_halfling_traits, "desc" : $msg.sab.tallfellow_halfling_traits},

	// Monsters' Abilities * TODO
	{"id" : "armor_discomfort", "type" : "na", "act" : false, "name" : $lng.sab.armor_discomfort, "desc" : $msg.sab.armor_discomfort},
	{"id" : "rend", "type" : "ex", "act" : true, "name" : $lng.sab.rend, "desc" : $msg.sab.rend},

	// Cross-class Features
	{"id" : "trap_sense", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.trap_sense, "desc" : $msg.sab.trap_sense},
	{"id" : "uncanny_dodge", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.uncanny_dodge, "desc" : $msg.sab.uncanny_dodge},
	{"id" : "improved_uncanny_dodge", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.improved_uncanny_dodge, "desc" : $msg.sab.improved_uncanny_dodge},
	{"id" : "summon_familiar", "type" : "na", "act" : true, "atk" : false, "name" : $lng.sab.summon_familiar, "desc" : $msg.sab.summon_familiar},
	{"id" : "animal_companion", "type" : "ex", "act" : true, "atk" : false, "name" : $lng.sab.animal_companion, "desc" : $msg.sab.animal_companion},
	{"id" : "wild_empathy", "type" : "ex", "act" : true, "atk" : false, "name" : $lng.sab.wild_empathy, "desc" : $msg.sab.wild_empathy},
	{"id" : "woodland_stride", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.woodland_stride, "desc" : $msg.sab.woodland_stride},
	{"id" : "timeless_body", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.timeless_body, "desc" : $msg.sab.timeless_body},

	// Fighter
	{"id" : "fighter_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.fighter_features, "desc" : $msg.sab.fighter_features},
	{"id" : "fighter_bonus_feat", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.bonus_feat},

	// Barbarian
	{"id" : "barbarian_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.barbarian_features, "desc" : $msg.sab.barbarian_features},
	{"id" : "barbarian_fast_movement", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.barbarian_fast_movement, "desc" : $msg.sab.barbarian_fast_movement},
	{"id" : "barbarian_rage", "type" : "na", "act" : true, "atk" : true, "name" : $lng.sab.barbarian_rage, "desc" : $msg.sab.barbarian_rage},
	{"id" : "barbarian_damage_reduction", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.barbarian_damage_reduction, "desc" : $msg.sab.barbarian_damage_reduction},
	{"id" : "greater_rage", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.greater_rage, "desc" : $msg.sab.greater_rage},
	{"id" : "indomitable_will", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.indomitable_will, "desc" : $msg.sab.indomitable_will},
	{"id" : "tireless_rage", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.tireless_rage, "desc" : $msg.sab.tireless_rage},
	{"id" : "mighty_rage", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.mighty_rage, "desc" : $msg.sab.mighty_rage},

	// Paladin
	{"id" : "paladin_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.paladin_features, "desc" : $msg.sab.paladin_features},
	{"id" : "aura_of_good", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.aura_of_good, "desc" : $msg.sab.aura_of_good},
	{"id" : "detect_evil", "type" : "sp", "act" : true, "atk" : false, "name" : $lng.sab.detect_evil, "desc" : $msg.sab.detect_evil},
	{"id" : "smite_evil", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.smite_evil, "desc" : $msg.sab.smite_evil},
	{"id" : "divine_grace", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.divine_grace, "desc" : $msg.sab.divine_grace},
	{"id" : "lay_on_hands", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.lay_on_hands, "desc" : $msg.sab.lay_on_hands},
	{"id" : "aura_of_courage", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.aura_of_courage, "desc" : $msg.sab.aura_of_courage},
	{"id" : "divine_health", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.divine_health, "desc" : $msg.sab.divine_health},
	{"id" : "turn_undead", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.turn_undead, "desc" : $msg.sab.turn_undead},
	{"id" : "special_mount", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.special_mount, "desc" : $msg.sab.special_mount},
	{"id" : "remove_disease", "type" : "sp", "act" : true, "atk" : false, "name" : $lng.sab.remove_disease, "desc" : $msg.sab.remove_disease},

	// Ranger
	{"id" : "ranger_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.ranger_features, "desc" : $msg.sab.ranger_features},
	{"id" : "favored_enemy", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.favored_enemy, "desc" : $msg.sab.favored_enemy},
	{"id" : "ranger_combat_style", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.ranger_combat_style, "desc" : $msg.sab.ranger_combat_style},
	{"id" : "ranger_improved_combat_style", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.ranger_improved_combat_style, "desc" : $msg.sab.ranger_improved_combat_style},
	{"id" : "swift_tracker", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.swift_tracker, "desc" : $msg.sab.swift_tracker},
	{"id" : "ranger_combat_style_mastery", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.ranger_combat_style_mastery, "desc" : $msg.sab.ranger_combat_style_mastery},
	{"id" : "camouflage", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.camouflage, "desc" : $msg.sab.camouflage},
	{"id" : "hide_in_plain_sight", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.hide_in_plain_sight, "desc" : $msg.sab.hide_in_plain_sight},

	// Monk
	{"id" : "monk_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.monk_features, "desc" : $msg.sab.monk_features},
	{"id" : "monk_bonus_feat", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.bonus_feat},
	{"id" : "monk_ac_bonus", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.monk_ac_bonus, "desc" : $msg.sab.monk_ac_bonus},
	{"id" : "monk_unarmed_strike", "type" : "na", "act" : false, "atk" : true, "name" : $lng.sab.monk_unarmed_strike, "desc" : $msg.sab.monk_unarmed_strike},
	{"id" : "flurry_of_blows", "type" : "ex", "act" : true, "atk" : true, "name" : $lng.sab.flurry_of_blows, "desc" : $msg.sab.flurry_of_blows},
	{"id" : "monk_fast_movement", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.monk_fast_movement, "desc" : $msg.sab.monk_fast_movement},
	{"id" : "still_mind", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.still_mind, "desc" : $msg.sab.still_mind},
	{"id" : "ki_strike_magic", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.ki_strike_magic, "desc" : $msg.sab.ki_strike_magic},
	{"id" : "slow_fall", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.slow_fall, "desc" : $msg.sab.slow_fall},
	{"id" : "purity_of_body", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.purity_of_body, "desc" : $msg.sab.purity_of_body},
	{"id" : "wholeness_of_body", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.wholeness_of_body, "desc" : $msg.sab.wholeness_of_body},
	{"id" : "ki_strike_lawful", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.ki_strike_lawful, "desc" : $msg.sab.ki_strike_lawful},
	{"id" : "diamond_body", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.diamond_body, "desc" : $msg.sab.diamond_body},
	{"id" : "greater_flurry", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.greater_flurry, "desc" : $msg.sab.greater_flurry},
	{"id" : "abundant_step", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.abundant_step, "desc" : $msg.sab.abundant_step},
	{"id" : "diamond_soul", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.diamond_soul, "desc" : $msg.sab.diamond_soul},
	{"id" : "quivering_palm", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.quivering_palm, "desc" : $msg.sab.quivering_palm},
	{"id" : "ki_strike_adamantine", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.ki_strike_adamantine, "desc" : $msg.sab.ki_strike_adamantine},
	{"id" : "tongue_of_the_sun_and_moon", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.tongue_of_the_sun_and_moon, "desc" : $msg.sab.tongue_of_the_sun_and_moon},
	{"id" : "empty_body", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.empty_body, "desc" : $msg.sab.empty_body},
	{"id" : "perfect_self", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.perfect_self, "desc" : $msg.sab.perfect_self},

	// Cleric
	{"id" : "cleric_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.cleric_features, "desc" : $msg.sab.cleric_features},
	{"id" : "turn_or_rebuke_undead", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.turn_or_rebuke_undead, "desc" : $msg.sab.turn_or_rebuke_undead},
	{"id" : "aura", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.aura, "desc" : $msg.sab.aura},

	// Cleric Domains
	{"id" : "air_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.air_domain, "desc" : $msg.sab.air_domain},
	{"id" : "animal_domain", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.animal_domain, "desc" : $msg.sab.animal_domain},
	{"id" : "chaos_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.chaos_domain, "desc" : $msg.sab.chaos_domain},
	{"id" : "death_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.death_domain, "desc" : $msg.sab.death_domain},
	{"id" : "destruction_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.destruction_domain, "desc" : $msg.sab.destruction_domain},
	{"id" : "earth_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.earth_domain, "desc" : $msg.sab.earth_domain},
	{"id" : "evil_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.evil_domain, "desc" : $msg.sab.evil_domain},
	{"id" : "fire_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.fire_domain, "desc" : $msg.sab.fire_domain},
	{"id" : "good_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.good_domain, "desc" : $msg.sab.good_domain},
	{"id" : "healing_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.healing_domain, "desc" : $msg.sab.healing_domain},
	{"id" : "knowledge_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.knowledge_domain, "desc" : $msg.sab.knowledge_domain},
	{"id" : "law_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.law_domain, "desc" : $msg.sab.law_domain},
	{"id" : "luck_domain", "type" : "ex", "act" : true, "atk" : false, "name" : $lng.sab.luck_domain, "desc" : $msg.sab.luck_domain},
	{"id" : "magic_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.magic_domain, "desc" : $msg.sab.magic_domain},
	{"id" : "plant_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.plant_domain, "desc" : $msg.sab.plant_domain},
	{"id" : "protection_domain", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.protection_domain, "desc" : $msg.sab.protection_domain},
	{"id" : "strength_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.strength_domain, "desc" : $msg.sab.strength_domain},
	{"id" : "sun_domain", "type" : "ex", "act" : true, "atk" : true, "name" : $lng.sab.sun_domain, "desc" : $msg.sab.sun_domain},
	{"id" : "travel_domain", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.travel_domain, "desc" : $msg.sab.travel_domain},
	{"id" : "trickery_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.trickery_domain, "desc" : $msg.sab.trickery_domain},
	{"id" : "war_domain", "type" : "su", "act" : false, "atk" : true, "name" : $lng.sab.war_domain, "desc" : $msg.sab.war_domain},
	{"id" : "water_domain", "type" : "na", "act" : true, "atk" : true, "name" : $lng.sab.water_domain, "desc" : $msg.sab.water_domain},

	// Cleric Domains (non-core)
	{"id" : "artifice_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.artifice_domain, "desc" : $msg.sab.artifice_domain},
	{"id" : "charm_domain", "type" : "na", "act" : true, "atk" : false, "name" : $lng.sab.charm_domain, "desc" : $msg.sab.charm_domain},
	{"id" : "community_domain", "type" : "sp", "act" : true, "atk" : false, "name" : $lng.sab.community_domain, "desc" : $msg.sab.community_domain},
	{"id" : "creation_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.creation_domain, "desc" : $msg.sab.creation_domain},
	{"id" : "darkness_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.darkness_domain, "desc" : $msg.sab.darkness_domain},
	{"id" : "glory_domain", "type" : "na", "act" : false, "atk" : true, "name" : $lng.sab.glory_domain, "desc" : $msg.sab.glory_domain},
	{"id" : "liberation_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.liberation_domain, "desc" : $msg.sab.liberation_domain},
	{"id" : "madness_domain", "type" : "na", "act" : true, "atk" : false, "name" : $lng.sab.madness_domain, "desc" : $msg.sab.madness_domain},
	{"id" : "nobility_domain", "type" : "sp", "act" : true, "atk" : false, "name" : $lng.sab.nobility_domain, "desc" : $msg.sab.nobility_domain},
	{"id" : "repose_domain", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.repose_domain, "desc" : $msg.sab.repose_domain},
	{"id" : "rune_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.rune_domain, "desc" : $msg.sab.rune_domain},
	{"id" : "skalykind_domain", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.skalykind_domain, "desc" : $msg.sab.skalykind_domain},
	{"id" : "weather_domain", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.weather_domain, "desc" : $msg.sab.weather_domain},

	// Druid
	{"id" : "druid_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.druid_features, "desc" : $msg.sab.druid_features},
	{"id" : "nature_sense", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.nature_sense, "desc" : $msg.sab.nature_sense},
	{"id" : "trackless_step", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.trackless_step, "desc" : $msg.sab.trackless_step},
	{"id" : "resist_nature_s_lure", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.resist_nature_s_lure, "desc" : $msg.sab.resist_nature_s_lure},
	{"id" : "wild_shape", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.wild_shape, "desc" : $msg.sab.wild_shape},
	{"id" : "wild_shape_large", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.wild_shape_large, "desc" : $msg.sab.wild_shape_large},
	{"id" : "venom_immunity", "type" : "ex", "act" : false, "atk" : false, "name" : $lng.sab.venom_immunity, "desc" : $msg.sab.venom_immunity},
	{"id" : "wild_shape_tiny", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.wild_shape_tiny, "desc" : $msg.sab.wild_shape_tiny},
	{"id" : "wild_shape_plant", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.wild_shape_plant, "desc" : $msg.sab.wild_shape_plant},
	{"id" : "a_thousand_faces", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.a_thousand_faces, "desc" : $msg.sab.a_thousand_faces},
	{"id" : "wild_shape_huge", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.wild_shape_huge, "desc" : $msg.sab.wild_shape_huge},
	{"id" : "wild_shape_elemental", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.wild_shape_elemental, "desc" : $msg.sab.wild_shape_elemental},
	{"id" : "wild_shape_huge_elemental", "type" : "su", "act" : false, "atk" : false, "name" : $lng.sab.wild_shape_huge_elemental, "desc" : $msg.sab.wild_shape_huge_elemental},

	// Rogue
	{"id" : "rogue_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.rogue_features, "desc" : $msg.sab.rogue_features},
	{"id" : "sneak_attack", "type" : "ex", "act" : false, "atk" : true, "name" : $lng.sab.sneak_attack, "desc" : $msg.sab.sneak_attack},
	{"id" : "rogue_special_ability", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.rogue_special_ability},

	// Bard
	{"id" : "bard_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.bard_features, "desc" : $msg.sab.bard_features},
	{"id" : "bardic_music", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.bardic_music, "desc" : $msg.sab.bardic_music},
	{"id" : "bardic_knowledge", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.bardic_knowledge, "desc" : $msg.sab.bardic_knowledge},
	{"id" : "countersong", "type" : "su", "act" : true, "atk" : true, "name" : $lng.sab.countersong, "desc" : $msg.sab.countersong},
	{"id" : "fascinate", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.fascinate, "desc" : $msg.sab.fascinate},
	{"id" : "inspire_courage", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.inspire_courage, "desc" : $msg.sab.inspire_courage},
	{"id" : "inspire_competence", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.inspire_competence, "desc" : $msg.sab.inspire_competence},
	{"id" : "suggestion", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.suggestion, "desc" : $msg.sab.suggestion},
	{"id" : "inspire_greatness", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.inspire_greatness, "desc" : $msg.sab.inspire_greatness},
	{"id" : "song_of_freedom", "type" : "sp", "act" : true, "atk" : false, "name" : $lng.sab.song_of_freedom, "desc" : $msg.sab.song_of_freedom},
	{"id" : "inspire_heroics", "type" : "su", "act" : true, "atk" : false, "name" : $lng.sab.inspire_heroics, "desc" : $msg.sab.inspire_heroics},
	{"id" : "mass_suggestion", "type" : "sp", "act" : true, "atk" : true, "name" : $lng.sab.mass_suggestion, "desc" : $msg.sab.mass_suggestion},

	// Wizard
	{"id" : "wizard_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.wizard_features, "desc" : $msg.sab.wizard_features},
	{"id" : "wizard_bonus_feat", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.bonus_feat},
	{"id" : "school_specialization", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.school_specialization, "desc" : $msg.sab.school_specialization},

	// Sorcerer
	{"id" : "sorcerer_features", "type" : "na", "act" : false, "atk" : false, "name" : $lng.sab.sorcerer_features, "desc" : $msg.sab.sorcerer_features},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Skills * UNUSED
// -----------------------------------------------------------------------------
// =============================================================================

// SKILLS
// id
// name
// * ab
// * train?
// * synergy?
// * armor_check?
