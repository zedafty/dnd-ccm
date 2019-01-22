/* +------------------------------------------------------------------------+ */
/* ////////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/* +------------------------------------------------------------------------+ */
/* |                                                                        | */
/* |                            *** MONSTERS ***                            | */
/* |                                                                        | */
/* +------------------------------------------------------------------------+ */
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||//////////////////////////////////// */
/* +------------------------------------------------------------------------+ */

$monsters = [

	// ===========================================================================
	// ---------------------------------------------------------------------------
	// # Default * UNUSED
	// ---------------------------------------------------------------------------
	// ===========================================================================

	/*
	{ // DEFAULT
		"id" : "ID",
		"name" : "Nom",
		"type" : "humanoid",
		"size" : "m",
		"cls" : {"commoner" : 1},
		"ab" : [8,8,8,8,8,8]
	},
	*/

	// ===========================================================================
	// ---------------------------------------------------------------------------
	// # Base Creatures Set (minimal DB)
	// ---------------------------------------------------------------------------
	// ===========================================================================

	{"id" : "NONE", "name" : "Monstre", "hp" : 1, "init" : 0, "cr" : 0, "coins" : 0, "goods" : 0, "items" : 0},
	{"id" : "GIBBER", "name" : "Grouilleux", "hp" : 5, "init" : 2, "cr" : "1/3", "coins" : 0, "goods" : 0, "items" : 0},
	{"id" : "XVART", "name" : "Xvart", "hp" : 5, "init" : 1, "cr" : "1/3", "coins" : "1/2", "goods" : "1/2", "items" : "1/2"},
	{"id" : "TASLOI", "name" : "Tasloï", "hp" : 4, "init" : 3, "cr" : "1/2", "coins" : 1, "goods" : 1, "items" : 1},

	// ===========================================================================
	// ---------------------------------------------------------------------------
	// # Advanced Creatures Set (full DB)
	// ---------------------------------------------------------------------------
	// ===========================================================================

	//////////////////////////////////////////////////////////////////////////////
	// * BANDIT [BANDIT]
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "BANDIT",
		"name" : $lng.bandit,
		"type" : "humanoid",
		"subt" : "human",
		"size" : "m",
		"cls" : {"warrior" : 1},
		"sab" : ["human_traits"],
		"ab" : [13,13,12,9,9,8],
		"sk" : {"warrior" : ["hide", "move_silently", "intimidate"]},
		"ft" : ["toughness", "improved_initiative"],
		"env" : "any",
		"org" : {"gang" : "3-5", "band" : "6-9", "group" : "10-20"},
		"eqp" : {"arm" : "LEAT01", "wpn" : ["LSWD01", "SBOW01"], "amo" : {"AROW01" : 20}},
		"trs" : [1, 1, 1],
		"aln" : ["chaotic", "neutral", "often"],
		"adv" : "char",
		"adj" : 0,
		"snd" : "bandit",
		"img" : {"src" : "cre/bandit.jpg", "txt" : "Damon Westenhofer, 2013 &copy; Paizo Inc.&trade;"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * HOBGOBLIN [HOBGO]
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "HOBGOBLIN",
		"name" : $lng.hobgoblin,
		"type" : "humanoid",
		"subt" : "goblinoid",
		"size" : "m",
		"cls" : {"warrior" : 1},
		"sab" : [{"darkvision" : "60f"}],
		"ab" : [13,13,14,10,9,8],
		"sk" : {"warrior" : ["hide", "listen", "spot"]},
		"sk_bon" : {"move_silently" : 4},
		"ft" : ["alertness"],
		"env" : "warm_hills",
		"org" : {"gang" : "4-9", "band" : "10-100", "warband" : "10-24", "tribe" : "30-300"},
		"eqp" : {"hlm" : "HELM01", "shd" : "LSHD01", "arm" : "STUD01", "wpn" : ["SCIM01", "JAVL01"]},
		"trs" : [1, 1, 1],
		"aln" : ["lawful", "evil", "usually"],
		"adv" : "char",
		"adj" : 1,
		"snd" : "hobgoblin",
		"img" : {"src" : "mon/hobgoblin_3e.jpg", "txt" : "WotC &copy; Manuel des monstres, p. 153"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * HALF_OGRE [OGREHA]
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "HALF_OGRE",
		"name" : $lng.half_ogre,
		"type" : "giant",
		"subt" : "human",
		"size" : "m",
		"cls" : {"giant" : 2},
		"ac_nat" : 2,
		"sab" : [{"darkvision" : "60f"}],
		"ab" : [17,10,14,9,9,8],
		"sk" : {"giant" : ["spot", "listen", "search"]},
		"ft" : ["great_fortitude"],
		"env" : "any_ground",
		"org" : {"solitary" : null, "pair" : null, "gang" : "2-4", "band" : "2-20"},
		"cr" : 1,
		"eqp" : {"hlm" : "HELM01", "arm" : "HIDE01", "wpn" : ["BSWD01"]},
		"trs" : [1, 1, 1],
		"aln" : ["chaotic", "evil", "usually"],
		"adv" : "char",
		"adj" : 2,
		"img" : {"src" : "mon/half_ogre_3e.jpg", "txt" : "WotC &copy; Guide des Personnages Monstrueux, p. 218"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * OGRILLON [OGREGR]
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "OGRILLON",
		"name" : $lng.ogrillon,
		"type" : "giant",
		"subt" : "orc",
		"size" : "m",
		"cls" : {"giant" : 2},
		"ac_nat" : 6,
		"sab" : [{"darkvision" : "60f"}, "low_light_vision", "armor_discomfort"],
		"ab" : [21,11,14,8,7,6],
		"sk" : {"warrior" : ["climb", "listen", "spot"]},
		"ft" : ["alertness"],
		"env" : "any_ground",
		"org" : {"solitary" : null, "pair" : null, "gang" : "2-4", "band" : "2-20"},
		"cr" : 1,
		"eqp" : {"nat_wpn" : ["SLAM02"]},
		"trs" : [1, 1, 1],
		"aln" : ["chaotic", "evil", "usually"],
		"adv" : "char",
		"adj" : 3,
		"img" : {"src" : "mon/orc_yy6242.jpg", "txt" : "yy6242 &copy; 2014 <i class='external-link-square'></i>&nbsp;<a href='http://yy6242.deviantart.com/art/orc-470915243'>DeviantArt</a>"}, // http://yy6242.deviantart.com/art/orc-470915243
		"src" : "bg1_fr"
	},

	// ===========================================================================
	// ---------------------------------------------------------------------------
	// # TEMP
	// ---------------------------------------------------------------------------
	// ===========================================================================

	//////////////////////////////////////////////////////////////////////////////
	// * TEST [OGRE]
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "TEST", // "OGRE"
		"name" : "TEST", // "Ogre"
		"type" : "giant", // "giant"
		"subt" : undefined, // undefined || "aquatic" || ["aquatic", "chaotic", "evil"]
		"size" : "l", // "l"
		"gend" : undefined, // undefined || "m"

		// -------------------------------------------------------------------------
		"cls" : {"giant" : 4, "barbarian" : 4}, // {"giant" : 4} || {"giant" : 4, "barbarian" : 4}
		// -------------------------------------------------------------------------
		// "cls" : {"giant" : 4, "barbarian" : 4}, // TEST
		// "cls" : {"giant" : 4, "barbarian" : 4, "wizard" : 3, "rogue" : 1}, // TEST
		// -------------------------------------------------------------------------

		"hp" : undefined, // undefined || 29

		"init" : undefined, // undefined || 4
		"limbs" : undefined, // undefined || 2
		"speed" : undefined, // undefined || 6 || "6s" || "30f" || "9m"

		"space" : undefined, // undefined || 2 || "2s" || "10f" || "3m"
		"reach" : undefined, // undefined || 2 || "2s" || "10f" || "3m"

		"ac_nat" : 5, // undefined || 5
		"ac_dod" : undefined, // undefined || 0
		"ac_def" : undefined, // undefined || 0

		"bab" : undefined, // undefined || 3
		"grap" : undefined, // undefined || 12

		// -------------------------------------------------------------------------
		"sab" : [{"darkvision" : "60f"}, "low_light_vision"], // undefined || ["darkvision"] || ["darkvision", "low_light_vision"] ||  [{"darkvision" : "60f"}, "low_light_vision"]
		// -------------------------------------------------------------------------
		// "sab" : [{"damage_reduction" : [10, "magic", "evil"]}, {"resistance_to_energy" : {"fire" : 10, "cold" : 5, "acid" : 5}}, {"turn_resistance" : 2}, {"spell_resistance" : 2}, {"darkvision" : "60f"}], // TEST
		// "sab" : ["gaze_attack", {"gaze_attack" : ["paralyzing", "evil", "death"]}, {"gaze_attack" : "charming"}], // TEST
		// "sab" : [{"immunities" : ["error", "cold", "fire", "critical_hits"]}], // TEST
		// "sab" : [{"vulnerability_to_energy" : ["fire", "cold", "error", "acid", "poison"]}], // TEST
		// "sab" : ["spell_like_abilities", "spells", "rage", "fire_immunity", {"rend" : "2d4"}, "constrict", {"damage_reduction" : [10, "magic", "evil"]}, {"resistance_to_energy" : {"fire" : 10, "cold" : 5, "acid" : 5}}, {"turn_resistance" : 2}, {"spell_resistance" : 14}, {"darkvision" : "60f"}, "gaze_attack", {"gaze_attack" : ["paralyzing", "evil", "death"]}, {"gaze_attack" : "death"}, {"immunities" : ["zizi", "cold", "fire", "critical_hits"]}, {"vulnerability_to_energy" : ["fire", "cold", "zizi", "acid", "poison"]}], // TEST
		// "sab" : [{"slow_fall" : "60f"}, {"favored_enemy" : 5}, {"sneak_attack" : 3}], // TEST
		// "sab" : [{"school_specialization" : "evocation"}], // TEST
		// -------------------------------------------------------------------------

		"sv" : undefined, // undefined || [6,0,1] => [Fort, Ref, Will]

		"ab" : [21,8,15,6,10,7], // [21,8,15,6,10,7] => [Str, Dex, Con, Int, Wis, Cha]

		// -------------------------------------------------------------------------
		"sk" : {"giant" : ["climb", "listen", "spot"]}, // undefined || ["climb"] || ["climb", "listen", "spot"]
		// -------------------------------------------------------------------------
		// "sk" : {"giant" : ["climb", "listen", "spot"], "barbarian" : {"intimidate", "climb", "listen"}}, // TEST
		// "sk" : {"giant" : ["climb", "listen", "spot", "hide", "move_silently", "appraise", "diplomacy", "bluff", "spellcraft"]}, // TEST
		// -------------------------------------------------------------------------

		"sk_bon" : undefined, // undefined ||  {"climb" : 8} || {"climb" : 8, "listen" : -4, "spot" : 4}

		// -------------------------------------------------------------------------
		"ft" : ["toughness", {"weapon_focus" : "greatclub"}], // undefined || ["toughness"] || ["toughness", "weapon_focus_greatclub"]
		// -------------------------------------------------------------------------
		// "ft" : ["toughness", {"weapon_focus" : "error"}, {"rapid_reload" : "sling"}, {"skill_focus" : ["spot", "listen", "concentration"]}, {"skill_focus" : "climb"}, {"skill_focus" : "craft_alchemy"}, {"martial_weapon_proficiency" : "warhammer"}, {"exotic_weapon_proficiency" : "siangham"}, {"weapon_focus" : "club"}, {"weapon_specialization" : "club"}, {"greater_weapon_focus" : "club"}, {"greater_weapon_specialization" : "club"}, {"improved_critical" : "club"}, {"spell_focus" : "necromancy"}, {"greater_spell_focus" : "necromancy"}], // TEST
		// "ft" : ["toughness", {"rapid_reload" : "sling"}, {"skill_focus" : "climb"}, {"skill_focus" : "craft_alchemy"}, {"martial_weapon_proficiency" : "warhammer"}, {"exotic_weapon_proficiency" : "siangham"}, {"weapon_focus" : "club"}, {"weapon_specialization" : "club"}, {"greater_weapon_focus" : "club"}, {"greater_weapon_specialization" : "club"}, {"improved_critical" : "club"}, {"spell_focus" : "necromancy"}, {"greater_spell_focus" : "necromancy"}], // TEST
		// "ft" : [{"rapid_reload" : "sling"}, {"rapid_reload" : "light_crossbow"}], // TEST
		// -------------------------------------------------------------------------

		"env" : "temperate_hills", // undefined || "temperate_hills"

		"org" : {"solitary" : null, "pair" : null, "gang" : "3-4", "band" : "5-8"}, // undefined || {"solitary" : null, "pair" : null, "gang" : "3-4", "band" : "5-8"}

		"cr" : 3, // undefined || "9/3" || 3 || 3.5

		// -------------------------------------------------------------------------
		"eqp" : {"arm" : "HIDE01", "wpn" : ["GCLB02", "JAVL02"]}, // undefined || {"arm" : "HIDE01", "wpn" : "GCLB02"} || {"arm" : "HIDE01", "wpn" : ["GCLB02", "JAVL02"]}
		// -------------------------------------------------------------------------
		// "eqp" : {"arm" : "HIDE01", "nat_wpn" : ["CLAW01", "BITE01"]}, // // TEST
		// "eqp" : {"arm" : "HIDE01", "nat_wpn" : ["BITE01"]}, // TEST
		// "eqp" : {"arm" : "HIDE01", "nat_wpn" : ["CLAW01", "TAIL01", "BITE01"], "wpn" : ["GCLB02", "JAVL02"]}, // {"arm" : "HIDE01", "wpn1" : "GCLB02"} // TEST
		// "eqp" : undefined, // TEST
		// -------------------------------------------------------------------------

		// -------------------------------------------------------------------------
		// * NOTE : 0 = coins, 1 = goods, 2 = items -- 1.0 = normal, else fractional if possible
		// -------------------------------------------------------------------------
		"trs" : ["2", "4/2", 2], // undefined || ["1/2", 2.0, null]

		"aln" : ["chaotic", "evil", "usually"], // undefined || ["chaotic", "evil"] || ["chaotic", "evil", "usually"]

		// -------------------------------------------------------------------------
		"adv" : "char", // undefined || "char" || {"hd" : {"l" : "3-6"}} || {"hd" : {"l" : "3-6", "h" : "7-12"}} || {"hd" : {"l" : "3-6", "h" : "7-12"}, "char" : null}
		// -------------------------------------------------------------------------
		// "adv" : {"hd" : {"l" : "3-6", "h" : "7-12"}, "char" : null}, // TEST
		// "adv" : {"char" : null}, // TEST
		// "adv" : "base", // TEST
		// -------------------------------------------------------------------------

		"adj" : 2, // undefined || 2

		"snd" : ["GIBBER01", "GIBBER02", "BANDIT01", "BANDIT02", "GIBBER08", "GIBBER09"],

		"img" : {"src" : "cre/ogre_3e.jpg", "wotc" : true}, // undefined || {"src" : ""} || {"src" : "", "txt" : ""} || {"src" : "", "alt : "", "", txt" : "", "wotc" : true}

		"src" : {"man" : "mm1_fr", "pge" : "206"}, // undefined || "Dragon Magazine #133 p. 34" || "mm1_fr" || {"man" : "mm1_fr"} || {"man" : "mm1_fr", "pge" : "206"}
	}
];
