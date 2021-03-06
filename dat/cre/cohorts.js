/* +------------------------------------------------------------------------+ */
/* ////////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/* +------------------------------------------------------------------------+ */
/* |                                                                        | */
/* |                            *** COHORTS ***                             | */
/* |                                                                        | */
/* +------------------------------------------------------------------------+ */
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||//////////////////////////////////// */
/* +------------------------------------------------------------------------+ */

$cohorts = [
	{"id" : "COHORT", "name" : "Compagnon", "init" : 0},

	//////////////////////////////////////////////////////////////////////////////
	// * IMOEN
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "IMOEN",
		"name" : $lng.imoen,
		"type" : "humanoid",
		"subt" : "human",
		"size" : "m",
		"gend" : "f",
		"cls" : {"rogue" : 2},
		"ab" : [9,18,16,17,11,16],
		// "sk" : {"rogue" : []}, // TODO
		"ft" : ["dodge", "deft_hands"],
		"sab" : ["human_traits"],
		"eqp" : {"wpn" : ["DAGG01", "SBOW01"], "wnd" : "WAND03", "ptn" : ["POTN14", {"POTN08" : 3}], "amo" : {"AROW01" : 20}},
		"aln" : ["neutral", "good"],
		"adv" : "class",
		"adj" : 0,
		"snd" : "imoen",
		"img" : {"src" : "coo/imoen.jpg", "txt" : "&copy; Black Isle Studios &reg;"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * XZAR
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * MONTARON
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * KHALID
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * JAHEIRA
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * GARRICK
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "GARRICK",
		"name" : $lng.garrick,
		"type" : "humanoid",
		"subt" : "human",
		"size" : "m",
		"gend" : "m",
		"cls" : {"bard" : 2},
		"ab" : [14,16,9,13,14,15],
		// "sk" : {"bard" : []}, // TODO
		"ft" : [{"skill_focus" : "perform_sing"}, {"spell_focus" : "enchantment"}], // TEMP
		"sab" : ["human_traits"],
		"eqp" : {"arm" : "LEAT01", "wpn" : ["SSWD01", "LXBW01"]},
		"aln" : ["chaotic", "neutral"],
		"adv" : "class",
		"adj" : 0,
		"snd" : "garrick",
		"img" : {"src" : "coo/garrick.jpg", "txt" : "&copy; Black Isle Studios &reg;"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * KAGAIN
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "KAGAIN",
		"name" : $lng.kagain,
		"type" : "humanoid",
		"subt" : "dwarf",
		"size" : "m",
		"gend" : "m",
		"cls" : {"fighter" : 2},
		"ab" : [16,12,20,15,11,8],
		"sk" : {"fighter" : ["intimidate", "appraise", "profession", "craft"]},
		"ft" : ["iron_will", "power_attack", "cleave"],
		"sab" : ["dwarf_traits"],
		"eqp" : {"hlm" : "HELM06", "arm" : "STUD01", "shd" : "HSHD01", "wpn" : ["BAXE01", {"TAXE01" : 10}]},
		"aln" : ["lawful", "evil"],
		"adv" : "class",
		"adj" : 0,
		"snd" : "kagain",
		"img" : {"src" : "coo/kagain.jpg", "txt" : "&copy; Black Isle Studios &reg;"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * KIVAN
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "KIVAN",
		"name" : $lng.kivan,
		"type" : "humanoid",
		"subt" : "elf",
		"size" : "m",
		"gend" : "m",
		"cls" : {"ranger" : 3},
		"ab" : [18,17,14,10,14,8],
		"sk" : {"ranger" : ["hide", "move_silently", "spot", "listen", "survival", "search", "knowledge_geography"]},
		"ft" : ["improved_initiative", {"weapon_focus" : "longbow"}],
		"sab" : ["elf_traits"],
		"eqp" : {"arm" : "STUD01", "wpn" : ["HALB01", "LBOW01"], "amo" : {"AROW01" : 20}},
		"aln" : ["chaotic", "good"],
		"adv" : "class",
		"adj" : 0,
		"snd" : "kivan",
		"img" : {"src" : "coo/kivan.jpg", "txt" : "&copy; Black Isle Studios &reg;"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * MINSC
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * EDWIN
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * BRANWEN
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * XAN
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * DYNAHEIR
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * AJANTIS
	//////////////////////////////////////////////////////////////////////////////
	{
		"id" : "AJANTIS",
		"name" : $lng.ajantis,
		"type" : "humanoid",
		"subt" : "human",
		"size" : "m",
		"gend" : "m",
		"cls" : {"paladin" : 3},
		"ab" : [17,13,16,12,13,17],
		"sk" : {"paladin" : ["diplomacy", "sense_motive", "knowledge_religion", "knowledge_nobility_and_royalty"]},
		"ft" : [{"weapon_focus" : "bastard_sword"}, "power_attack", "cleave"],
		"sab" : ["human_traits"],
		"eqp" : {"hlm" : "HELM04", "arm" : "CHAN01", "shd" : "HSHD01", "wpn" : ["BSWD01"]},
		"aln" : ["lawful", "good"],
		"adv" : "class",
		"adj" : 0,
		"snd" : "ajantis",
		"img" : {"src" : "coo/ajantis.jpg", "txt" : "&copy; Black Isle Studios &reg;"},
		"src" : "bg1_fr"
	},

	//////////////////////////////////////////////////////////////////////////////
	// * SAFANA
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * SHAR-TEEL
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * CORAN
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * ELDOTH
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * FALDORN
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * YESLICK
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * QUAYLE
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * TIAX
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * SKIE
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * ALORA
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
	// * VICONIA
	//////////////////////////////////////////////////////////////////////////////

];
