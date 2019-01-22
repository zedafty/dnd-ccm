/* +------------------------------------------------------------------------+ */
/* ////////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/* +------------------------------------------------------------------------+ */
/* |                                                                        | */
/* |                             *** ITEMS ***                              | */
/* |                                                                        | */
/* +------------------------------------------------------------------------+ */
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||//////////////////////////////////// */
/* +------------------------------------------------------------------------+ */

/**
	NOTE :
	Attribute 'type' is used as a discriminant when all tables are merged.
	It's an identifier whose name has to be unique across tables.

	TODO
	Items may have 'blank' values (like 'wght', 'cost' or 'size' and even 'name' or 'desc').
	This 'template' system is set up a posteriori.
	No pre-processing mechanism exists right now to fill the empty values on load.
	It's up to each functions that call any item to give it the proper default values or not.
	The index 0 of each table in used to define a default item holding required values.
	Thus, the first item in each table MUST NOT be parsed by calling functions.
*/

// =============================================================================
// -----------------------------------------------------------------------------
// # Amunitions
// -----------------------------------------------------------------------------
// =============================================================================

$amunitions = [
// {"id" : "", "type" : "amo", "wght" : 0, "cost" : 0, "name" : "", "desc" : ""},
	{"id" : "AROW01", "type" : "amo", "wght" : 0.5, "cost" : 0.05, "name" : $lng.amo.arrow},
	{"id" : "AROW02", "type" : "amo", "wght" : 0.5, "cost" : 10, "name" : $lng.amo.arrow_plus_1, "desc" : $msg.amo.arrow_plus_1},
	{"id" : "BOLT01", "type" : "amo", "wght" : 0.1, "cost" : 0.1, "name" : $lng.amo.bolt},
	{"id" : "BULL01", "type" : "amo", "wght" : 0.15, "cost" : 0.01, "name" : $lng.amo.bullet},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Potions
// -----------------------------------------------------------------------------
// =============================================================================

$potions = [
	// {"id" : "", "type" : "ptn", "wght" : 1, "cost" : 0, "name" : "", "desc" : ""},
	{"id" : "POTN08", "type" : "ptn", "wght" : 1, "cost" : 75, "name" : $lng.ptn.healing, "desc" : $msg.ptn.healing},
	{"id" : "POTN14", "type" : "ptn", "wght" : 1, "cost" : 500, "name" : $lng.ptn.speed, "desc" : $msg.ptn.speed},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Scrolls
// -----------------------------------------------------------------------------
// =============================================================================

$scrolls = [
	// {"id" : "", "type" : "scr", "cost" : 0, "wght" : 0, "name" : "", "desc" : ""},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Wands
// -----------------------------------------------------------------------------
// =============================================================================

$wands = [
	// {"id" : "", "type" : "wnd", "wght" : 1, "cost" : 0, "name" : "", "desc" : ""},
	{"id" : "WAND03", "type" : "wnd", "wght" : 1, "cost" : 5000, "name" : $lng.wnd.magic_missile, "desc" : $msg.wnd.magic_missile},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Weapons
// -----------------------------------------------------------------------------
// =============================================================================

$weapons = [

	// {"id" : "", "type" : "xxx_wpn", "tag" : "", "size" : "", "wght" : 0, "cost" : 0, "name" : "", "desc" : "", "prop" : {"dmg" : "1d3", "cri_rng" : 20, "cri_mul" : 2}},

	// Simple Weapons
	{"id" : "FIST01", "type" : "lgt_wpn", "tag" : "unarmed_strike", "size" : "s", "wght" : 0, "cost" : 0, "name" : $lng.wpn.unarmed_strike, "prop" : {"dmg" : "1d3"}},
	{"id" : "DAGG01", "type" : "lgt_wpn", "tag" : "dagger", "size" : "t", "wght" : 1, "cost" : 2, "name" : $lng.wpn.dagger, "prop" : {"dmg" : "1d4", "cri_rng" : 19}},
	{"id" : "PDAG01", "type" : "lgt_wpn", "tag" : "punching_dagger", "size" : "s", "wght" : 1, "cost" : 2, "name" : $lng.wpn.punching_dagger, "prop" : {"dmg" : "1d4", "cri_mul" : 3}},
	{"id" : "LMAC01", "type" : "lgt_wpn", "tag" : "light_mace", "size" : "s", "wght" : 4, "cost" : 5, "name" : $lng.wpn.light_mace, "prop" : {"dmg" : "1d6"}},
	{"id" : "SICK01", "type" : "lgt_wpn", "tag" : "sickle", "size" : "s", "wght" : 2, "cost" : 6, "name" : $lng.wpn.sickle, "prop" : {"dmg" : "1d6"}},
	{"id" : "CLUB01", "type" : "1hd_wpn", "tag" : "club", "size" : "m", "wght" : 3, "cost" : 0, "name" : $lng.wpn.club, "prop" : {"dmg" : "1d6"}},
	{"id" : "HMAC01", "type" : "1hd_wpn", "tag" : "heavy_mace", "size" : "m", "wght" : 8, "cost" : 12, "name" : $lng.wpn.heavy_mace, "prop" : {"dmg" : "1d8"}},
	{"id" : "MORN01", "type" : "1hd_wpn", "tag" : "morningstar", "size" : "m", "wght" : 6, "cost" : 8, "name" : $lng.wpn.morningstar, "prop" : {"dmg" : "1d8"}},
	{"id" : "SSPR01", "type" : "1hd_wpn", "tag" : "shortspear", "size" : "m", "wght" : 3, "cost" : 1, "name" : $lng.wpn.shortspear, "prop" : {"dmg" : "1d6"}},
	{"id" : "LSPR01", "type" : "2hd_wpn", "tag" : "longspear", "size" : "l", "wght" : 9, "cost" : 5, "name" : $lng.wpn.longspear, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "STAF01", "type" : "2hd_wpn", "tag" : "quarterstaff", "size" : "l", "wght" : 4, "cost" : 0, "name" : $lng.wpn.quarterstaff, "prop" : {"dmg" : "1d6"}},
	{"id" : "SPEA01", "type" : "2hd_wpn", "tag" : "spear", "size" : "l", "wght" : 6, "cost" : 2, "name" : $lng.wpn.spear, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "HXBW01", "type" : "prj_wpn", "tag" : "heavy_crossbow", "size" : "m", "wght" : 8, "cost" : 50, "name" : $lng.wpn.heavy_crossbow, "prop" : {"dmg" : "1d10", "cri_rng" : 19}},
	{"id" : "LXBW01", "type" : "prj_wpn", "tag" : "light_crossbow", "size" : "m", "wght" : 4, "cost" : 35, "name" : $lng.wpn.light_crossbow, "prop" : {"dmg" : "1d8", "cri_rng" : 19}},
	{"id" : "DART01", "type" : "thr_wpn", "tag" : "dart", "size" : "t", "wght" : 0.5, "cost" : 0.5, "name" : $lng.wpn.dart, "prop" : {"dmg" : "1d4"}},
	{"id" : "JAVL01", "type" : "thr_wpn", "tag" : "javelin", "size" : "m", "wght" : 2, "cost" : 1, "name" : $lng.wpn.javelin, "prop" : {"dmg" : "1d6"}},
	{"id" : "SLNG01", "type" : "prj_wpn", "tag" : "sling", "size" : "s", "wght" : 0, "cost" : 0, "name" : $lng.wpn.sling, "prop" : {"dmg" : "1d4"}},

	// Martial Weapons
	{"id" : "TAXE01", "type" : "thr_wpn", "tag" : "throwing_axe", "size" : "s", "wght" : 2, "cost" : 8, "name" : $lng.wpn.throwing_axe, "prop" : {"dmg" : "1d6"}},
	{"id" : "LHAM01", "type" : "lgt_wpn", "tag" : "light_hammer", "size" : "s", "wght" : 2, "cost" : 1, "name" : $lng.wpn.light_hammer, "prop" : {"dmg" : "1d4"}},
	{"id" : "HAXE01", "type" : "lgt_wpn", "tag" : "handaxe", "size" : "s", "wght" : 3, "cost" : 6, "name" : $lng.wpn.handaxe, "prop" : {"dmg" : "1d6", "cri_mul" : 3}},
	{"id" : "KUKR01", "type" : "lgt_wpn", "tag" : "kukri", "size" : "s", "wght" : 2, "cost" : 8, "name" : $lng.wpn.kukri, "prop" : {"dmg" : "1d4", "cri_rng" : 18}},
	{"id" : "LPIC01", "type" : "lgt_wpn", "tag" : "light_pick", "size" : "s", "wght" : 3, "cost" : 4, "name" : $lng.wpn.light_pick, "prop" : {"dmg" : "1d4", "cri_mul" : 4}},
	{"id" : "SAPP01", "type" : "lgt_wpn", "tag" : "sap", "size" : "s", "wght" : 2, "cost" : 1, "name" : $lng.wpn.sap, "prop" : {"dmg" : "1d6"}},
	{"id" : "SSWD01", "type" : "lgt_wpn", "tag" : "short_sword", "size" : "s", "wght" : 2, "cost" : 10, "name" : $lng.wpn.short_sword, "prop" : {"dmg" : "1d6", "cri_rng" : 19}},
	{"id" : "BAXE01", "type" : "1hd_wpn", "tag" : "battleaxe", "size" : "m", "wght" : 6, "cost" : 10, "name" : $lng.wpn.battleaxe, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "FLAL01", "type" : "1hd_wpn", "tag" : "flail", "size" : "m", "wght" : 5, "cost" : 8, "name" : $lng.wpn.flail, "prop" : {"dmg" : "1d8"}},
	{"id" : "LSWD01", "type" : "1hd_wpn", "tag" : "longsword", "size" : "m", "wght" : 4, "cost" : 15, "name" : $lng.wpn.longsword, "prop" : {"dmg" : "1d8", "cri_rng" : 19}},
	{"id" : "HPIC01", "type" : "1hd_wpn", "tag" : "heavy_pick", "size" : "m", "wght" : 6, "cost" : 8, "name" : $lng.wpn.heavy_pick, "prop" : {"dmg" : "1d6", "cri_mul" : 4}},
	{"id" : "RAPR01", "type" : "1hd_wpn", "tag" : "rapier", "size" : "m", "wght" : 2, "cost" : 20, "name" : $lng.wpn.rapier, "prop" : {"dmg" : "1d6", "cri_rng" : 18}},
	{"id" : "SCIM01", "type" : "1hd_wpn", "tag" : "scimitar", "size" : "m", "wght" : 4, "cost" : 15, "name" : $lng.wpn.scimitar, "prop" : {"dmg" : "1d6", "cri_rng" : 18}},
	{"id" : "TRID01", "type" : "1hd_wpn", "tag" : "trident", "size" : "m", "wght" : 4, "cost" : 15, "name" : $lng.wpn.trident, "prop" : {"dmg" : "1d8"}},
	{"id" : "WHAM01", "type" : "1hd_wpn", "tag" : "warhammer", "size" : "m", "wght" : 5, "cost" : 12, "name" : $lng.wpn.warhammer, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "FALC01", "type" : "2hd_wpn", "tag" : "falchion", "size" : "l", "wght" : 8, "cost" : 75, "name" : $lng.wpn.falchion, "prop" : {"dmg" : "2d4", "cri_rng" : 18}},
	{"id" : "GLAV01", "type" : "2hd_wpn", "tag" : "glaive", "size" : "l", "wght" : 10, "cost" : 8, "name" : $lng.wpn.glaive, "prop" : {"dmg" : "1d10", "cri_mul" : 3}},
	{"id" : "GAXE01", "type" : "2hd_wpn", "tag" : "greataxe", "size" : "l", "wght" : 12, "cost" : 20, "name" : $lng.wpn.greataxe, "prop" : {"dmg" : "1d12", "cri_mul" : 3}},
	{"id" : "GCLB01", "type" : "2hd_wpn", "tag" : "greatclub", "size" : "l", "wght" : 8, "cost" : 5, "name" : $lng.wpn.greatclub, "prop" : {"dmg" : "1d10"}},
	{"id" : "HFLA01", "type" : "2hd_wpn", "tag" : "heavy_flail", "size" : "l", "wght" : 10, "cost" : 15, "name" : $lng.wpn.heavy_flail, "prop" : {"dmg" : "1d10", "cri_rng" : 19}},
	{"id" : "GSWD01", "type" : "2hd_wpn", "tag" : "greatsword", "size" : "l", "wght" : 8, "cost" : 50, "name" : $lng.wpn.greatsword, "prop" : {"dmg" : "2d6", "cri_rng" : 19}},
	{"id" : "GUIS01", "type" : "2hd_wpn", "tag" : "guisarme", "size" : "l", "wght" : 12, "cost" : 9, "name" : $lng.wpn.guisarme, "prop" : {"dmg" : "2d4", "cri_mul" : 3}},
	{"id" : "HALB01", "type" : "2hd_wpn", "tag" : "halberd", "size" : "l", "wght" : 12, "cost" : 10, "name" : $lng.wpn.halberd, "prop" : {"dmg" : "1d10", "cri_mul" : 3}},
	{"id" : "LANC01", "type" : "2hd_wpn", "tag" : "lance", "size" : "l", "wght" : 10, "cost" : 10, "name" : $lng.wpn.lance, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "RANS01", "type" : "2hd_wpn", "tag" : "ranseur", "size" : "l", "wght" : 12, "cost" : 10, "name" : $lng.wpn.ranseur, "prop" : {"dmg" : "2d4", "cri_mul" : 3}},
	{"id" : "SCYT01", "type" : "2hd_wpn", "tag" : "scythe", "size" : "l", "wght" : 10, "cost" : 18, "name" : $lng.wpn.scythe, "prop" : {"dmg" : "2d4", "cri_mul" : 4}},
	{"id" : "LBOW01", "type" : "prj_wpn", "tag" : "longbow", "size" : "l", "wght" : 3, "cost" : 75, "name" : $lng.wpn.longbow, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "CLBW01", "type" : "prj_wpn", "tag" : "longbow", "size" : "l", "wght" : 3, "cost" : 150, "name" : $lng.wpn.composite_longbow, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "SBOW01", "type" : "prj_wpn", "tag" : "shortbow", "size" : "m", "wght" : 2, "cost" : 30, "name" : $lng.wpn.shortbow, "prop" : {"dmg" : "1d6", "cri_mul" : 3}},
	{"id" : "CLBW01", "type" : "prj_wpn", "tag" : "shortbow", "size" : "m", "wght" : 2, "cost" : 100, "name" : $lng.wpn.composite_shortbow, "prop" : {"dmg" : "1d6", "cri_mul" : 3}},

	// Exotic Weapons
	{"id" : "KAMA01", "type" : "lgt_wpn", "tag" : "kama", "size" : "s", "wght" : 2, "cost" : 2, "name" : $lng.wpn.kama, "prop" : {"dmg" : "1d6"}},
	{"id" : "NUNC01", "type" : "lgt_wpn", "tag" : "nunchaku", "size" : "m", "wght" : 2, "cost" : 2, "name" : $lng.wpn.nunchaku, "prop" : {"dmg" : "1d6"}},
	{"id" : "SAII01", "type" : "lgt_wpn", "tag" : "sai", "size" : "s", "wght" : 1, "cost" : 1, "name" : $lng.wpn.sai, "prop" : {"dmg" : "1d4"}},
	{"id" : "SIAN01", "type" : "lgt_wpn", "tag" : "siangham", "size" : "s", "wght" : 1, "cost" : 3, "name" : $lng.wpn.siangham, "prop" : {"dmg" : "1d6"}},
	{"id" : "BSWD01", "type" : "1hd_wpn", "tag" : "bastard_sword", "size" : "m", "wght" : 6, "cost" : 35, "name" : $lng.wpn.bastard_sword, "prop" : {"dmg" : "1d10", "cri_rng" : 19}},
	{"id" : "DAXE01", "type" : "1hd_wpn", "tag" : "dwarven_waraxe", "size" : "m", "wght" : 8, "cost" : 30, "name" : $lng.wpn.dwarven_waraxe, "prop" : {"dmg" : "1d10", "cri_mul" : 3}},
	{"id" : "WHIP01", "type" : "1hd_wpn", "tag" : "whip", "size" : "s", "wght" : 2, "cost" : 1, "name" : $lng.wpn.whip, "prop" : {"dmg" : "1d3"}},
	{"id" : "OAXE01", "type" : "2hd_wpn", "tag" : "orc_double_axe", "size" : "l", "wght" : 15, "cost" : 60, "name" : $lng.wpn.orc_double_axe, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "SPIK01", "type" : "2hd_wpn", "tag" : "spiked_chain", "size" : "m", "wght" : 10, "cost" : 25, "name" : $lng.wpn.spiked_chain, "prop" : {"dmg" : "2d4"}},
	{"id" : "DFLA01", "type" : "2hd_wpn", "tag" : "dire_flail", "size" : "l", "wght" : 10, "cost" : 90, "name" : $lng.wpn.dire_flail, "prop" : {"dmg" : "1d8"}},
	{"id" : "GHAM01", "type" : "2hd_wpn", "tag" : "gnome_hooked_hammer", "size" : "m", "wght" : 6, "cost" : 20, "name" : $lng.wpn.gnome_hooked_hammer, "prop" : {"dmg" : "1d6", "cri_mul" : 4}},
	{"id" : "TSWD01", "type" : "2hd_wpn", "tag" : "two_bladed_sword", "size" : "l", "wght" : 10, "cost" : 100, "name" : $lng.wpn.two_bladed_sword, "prop" : {"dmg" : "1d8", "cri_rng" : 19}},
	{"id" : "DURG01", "type" : "2hd_wpn", "tag" : "dwarven_urgrosh", "size" : "m", "wght" : 12, "cost" : 50, "name" : $lng.wpn.dwarven_urgrosh, "prop" : {"dmg" : "1d8", "cri_mul" : 3}},
	{"id" : "BOLA01", "type" : "thr_wpn", "tag" : "bolas", "size" : "s", "wght" : 2, "cost" : 5, "name" : $lng.wpn.bolas, "prop" : {"dmg" : "1d3"}},
	{"id" : "HDXB01", "type" : "prj_wpn", "tag" : "hand_crossbow", "size" : "m", "wght" : 2, "cost" : 100, "name" : $lng.wpn.hand_crossbow, "prop" : {"dmg" : "1d4", "cri_rng" : 19}},
	{"id" : "RHXB01", "type" : "prj_wpn", "tag" : "repeating_heavy_crossbow", "size" : "m", "wght" : 12, "cost" : 400, "name" : $lng.wpn.repeating_heavy_crossbow, "prop" : {"dmg" : "1d10", "cri_rng" : 19}},
	{"id" : "RLXB01", "type" : "prj_wpn", "tag" : "repeating_light_crossbow", "size" : "m", "wght" : 6, "cost" : 250, "name" : $lng.wpn.repeating_light_crossbow, "prop" : {"dmg" : "1d8", "cri_rng" : 19}},
	{"id" : "NETT01", "type" : "thr_wpn", "tag" : "net", "size" : "m", "wght" : 6, "cost" : 20, "name" : $lng.wpn.net, "prop" : {"dmg" : "1d1"}},
	{"id" : "SHUR01", "type" : "thr_wpn", "tag" : "shuriken", "size" : "t", "wght" : 0.5, "cost" : 1, "name" : $lng.wpn.shuriken, "prop" : {"dmg" : "1d2"}},

	//////////////////////////////////////////////////////////////////////////////
	// * TEST
	//////////////////////////////////////////////////////////////////////////////

	// {"id" : "GCLB02", "type" : "2hd_wpn", "tag" : "greatclub", "name" : "Massue", "size" : "h", "prop" : {"dmg" : "2d8", "to_hit" : ["1d6_fire", "disease", "poison"]}},
	// {"id" : "GCLB02", "type" : "2hd_wpn", "tag" : "greatclub", "name" : "Massue", "size" : "h", "prop" : {"dmg" : "2d8", "to_hit" : "1d6_fire"}},
	{"id" : "GCLB02", "type" : "1hd_wpn", "tag" : "greatclub", "name" : "Massue", "size" : "h", "prop" : {"dmg" : "2d8", "cri_rng" : 19}},
	{"id" : "JAVL02", "type" : "thr_wpn", "tag" : "javelin", "name" : "Javeline", "size" : "l", "prop" : {"dmg" : "1d8"}},

	//////////////////////////////////////////////////////////////////////////////
	// * TEMP
	//////////////////////////////////////////////////////////////////////////////

	{"id" : "SW1H10", "type" : "1hd_wpn", "tag" : "longsword", "name" : "Épée longue +2", "desc" : "Cette épée irradie d'énergie magique. Elle procure des bonus à l'attaque et aux dégâts", "prop" : {"enhance" : 3}},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Natural Weapons
// -----------------------------------------------------------------------------
// =============================================================================

$natural_weapons = [
	{"id" : "BITE01", "type" : "nat_wpn", "tag" : "bite", "name" : $lng.nwp.bite},
	{"id" : "CLAW01", "type" : "nat_wpn", "tag" : "claw", "name" : $lng.nwp.claw},
	{"id" : "HORN01", "type" : "nat_wpn", "tag" : "horn", "name" : $lng.nwp.horn}, // can be 'gore' ???
	{"id" : "HOOF01", "type" : "nat_wpn", "tag" : "hoof", "name" : $lng.nwp.hoof},
	{"id" : "PINC01", "type" : "nat_wpn", "tag" : "pincer", "name" : $lng.nwp.pincer}, // same as 'claw' ???
	{"id" : "SLAM01", "type" : "nat_wpn", "tag" : "slam", "name" : $lng.nwp.slam},
	{"id" : "STIN01", "type" : "nat_wpn", "tag" : "sting", "name" : $lng.nwp.sting},
	{"id" : "TAIL01", "type" : "nat_wpn", "tag" : "tail", "name" : $lng.nwp.tail},
	{"id" : "TALO01", "type" : "nat_wpn", "tag" : "talon", "name" : $lng.nwp.talon},
	{"id" : "TENT01", "type" : "nat_wpn", "tag" : "tentacle", "name" : $lng.nwp.tentacle},
	{"id" : "TEND01", "type" : "nat_wpn", "tag" : "tendril", "name" : $lng.nwp.tendril}, // same as tentacle ???
	{"id" : "SWAR01", "type" : "nat_wpn", "tag" : "swarm", "name" : $lng.nwp.swarm},
	{"id" : "WING01", "type" : "nat_wpn", "tag" : "wing", "name" : $lng.nwp.wing}, // same as 'slam' ???
	{"id" : "CLAW02", "type" : "mul_wpn", "tag" : "claw", "name" : $lng.nwp.two_claws},
	{"id" : "SLAM02", "type" : "mul_wpn", "tag" : "slam", "name" : $lng.nwp.two_slams},

	//////////////////////////////////////////////////////////////////////////////
	// * TEMP
	//////////////////////////////////////////////////////////////////////////////

	{"id" : "CLAW03", "type" : "nat_wpn", "tag" : "claw", "name" : "Griffe", "prop" : {"to_hit" : true}},
	{"id" : "CLAW04", "type" : "nat_wpn", "tag" : "claw", "name" : "Griffe", "prop" : {"dmg" : "2d8"}},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Helmets
// -----------------------------------------------------------------------------
// =============================================================================

$helmets = [
	// {"id" : "", "type" : "", "wght" : 0, "cost" : 0, "name" : "", "desc" : ""},
	{"id" : "HELM01", "type" : "hlm_arm", "name" : $lng.hlm.horned_helmet, "wght" : 4, "cost" : 1},
	{"id" : "HELM02", "type" : "hlm_arm", "name" : $lng.hlm.winged_helmet, "wght" : 4, "cost" : 4},
	{"id" : "HELM03", "type" : "hlm_arm", "name" : $lng.hlm.feathered_helmet, "wght" : 4, "cost" : 5},
	{"id" : "HELM04", "type" : "hlm_arm", "name" : $lng.hlm.crested_helmet, "wght" : 2, "cost" : 5},
	{"id" : "HELM05", "type" : "hlm_arm", "name" : $lng.hlm.spiked_helmet, "wght" : 3, "cost" : 3},
	{"id" : "HELM06", "type" : "hlm_arm", "name" : $lng.hlm.golden_helmet, "wght" : 2, "cost" : 4},
	{"id" : "HELM07", "type" : "hlm_arm", "name" : $lng.hlm.bronze_helmet, "wght" : 2, "cost" : 4},
	{"id" : "HELM08", "type" : "hlm_arm", "name" : $lng.hlm.leather_cap, "wght" : 1, "cost" : 0.5},
	{"id" : "HELM09", "type" : "hlm_arm", "name" : $lng.hlm.mail_cap, "wght" : 3, "cost" : 3},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Armors
// -----------------------------------------------------------------------------
// =============================================================================

$armors = [

// {"id" : "", "type" : "xxx_arm", "wght" : 0, "cost" : 0, "size" : "", "name" : "", "prop" : {"ac_mod" : 0, "max_dex" : 0, "sk_chk" : 0, "sp_fail" : 0}},

	// Light armor
	{"id" : "PADD01", "type" : "lgt_arm", "wght" : 10, "cost" : 5, "name" : $lng.arm.padded_armor, "prop" : {"ac_mod" : 1, "max_dex" : 8, "sk_chk" : 0, "sp_fail" : 5}},
	{"id" : "LEAT01", "type" : "lgt_arm", "wght" : 15, "cost" : 10, "name" : $lng.arm.leather_armor, "prop" : {"ac_mod" : 2, "max_dex" : 6, "sk_chk" : 0, "sp_fail" : 10}},
	{"id" : "STUD01", "type" : "lgt_arm", "wght" : 20, "cost" : 25, "name" : $lng.arm.studded_leather_armor, "prop" : {"ac_mod" : 3, "max_dex" : 5, "sk_chk" : -1, "sp_fail" : 15}},
	{"id" : "SHIR01", "type" : "lgt_arm", "wght" : 25, "cost" : 100, "name" : $lng.arm.chain_shirt, "prop" : {"ac_mod" : 4, "max_dex" : 4, "sk_chk" : -2, "sp_fail" : 20}},

	// Medium armor
	{"id" : "HIDE01", "type" : "med_arm", "wght" : 25, "cost" : 15, "name" : $lng.arm.hide_armor, "prop" : {"ac_mod" : 3, "max_dex" : 4, "sk_chk" : -3, "sp_fail" : 20}},
	{"id" : "SCAL01", "type" : "med_arm", "wght" : 30, "cost" : 50, "name" : $lng.arm.scale_mail, "prop" : {"ac_mod" : 4, "max_dex" : 3, "sk_chk" : -4, "sp_fail" : 25}},
	{"id" : "CHAN01", "type" : "med_arm", "wght" : 40, "cost" : 150, "name" : $lng.arm.chainmail, "prop" : {"ac_mod" : 5, "max_dex" : 2, "sk_chk" : -5, "sp_fail" : 30}},
	{"id" : "BREA01", "type" : "med_arm", "wght" : 30, "cost" : 200, "name" : $lng.arm.breastplate, "prop" : {"ac_mod" : 5, "max_dex" : 3, "sk_chk" : -4, "sp_fail" : 25}},

	// Heavy armor
	{"id" : "SPLI01", "type" : "hvy_arm", "wght" : 45, "cost" : 200, "name" : $lng.arm.splint_mail, "prop" : {"ac_mod" : 6, "max_dex" : 0, "sk_chk" : -7, "sp_fail" : 40}},
	{"id" : "BAND01", "type" : "hvy_arm", "wght" : 35, "cost" : 250, "name" : $lng.arm.banded_mail, "prop" : {"ac_mod" : 6, "max_dex" : 1, "sk_chk" : -6, "sp_fail" : 35}},
	{"id" : "HALF01", "type" : "hvy_arm", "wght" : 50, "cost" : 600, "name" : $lng.arm.half_plate, "prop" : {"ac_mod" : 7, "max_dex" : 0, "sk_chk" : -7, "sp_fail" : 40}},
	{"id" : "PLAT01", "type" : "hvy_arm", "wght" : 50, "cost" : 1500, "name" : $lng.arm.full_plate, "prop" : {"ac_mod" : 8, "max_dex" : 1, "sk_chk" : -6, "sp_fail" : 35}},

	//////////////////////////////////////////////////////////////////////////////
	// * TEST
	//////////////////////////////////////////////////////////////////////////////

	{"id" : "HIDE02", "type" : "med_arm", "name" : "Armure de peau +1", "wght" : 20, "cost" : 115, "prop" : {"enhance" : 1, "ac_mod" : 3, "max_dex" : 4, "sk_chk" : -2, "sp_fail" : 20}},
];

// =============================================================================
// -----------------------------------------------------------------------------
// # Shields
// -----------------------------------------------------------------------------
// =============================================================================

$shields = [

	// {"id" : "", "type" : "xxx_shd", "wght" : 0, "cost" : 0, "size" : "", "name" : "", "desc" : "", "prop" : {"ac_mod" : 0, "sk_chk" : 0, "sp_fail" : 0}},

	{"id" : "BUCK01", "type" : "min_shd", "name" : $lng.shd.buckler, "wght" : 2.5, "cost" : 15, "prop" : {"ac_mod" : 1, "sk_chk" : 0, "sp_fail" : 5}},
	{"id" : "LSHD01", "type" : "lgt_shd", "name" : $lng.shd.light_wooden_shield, "wght" : 5, "cost" : 3, "prop" : {"ac_mod" : 1, "sk_chk" : -1, "sp_fail" : 5}},
	{"id" : "LSHD02", "type" : "lgt_shd", "name" : $lng.shd.light_steel_shield, "wght" : 6, "cost" : 9, "prop" : {"ac_mod" : 1, "sk_chk" : -1, "sp_fail" : 5}},
	{"id" : "HSHD01", "type" : "hvy_shd", "name" : $lng.shd.heavy_wooden_shield, "wght" : 10, "cost" : 7, "prop" : {"ac_mod" : 2, "sk_chk" : -2, "sp_fail" : 15}},
	{"id" : "HSHD02", "type" : "hvy_shd", "name" : $lng.shd.heavy_steel_shield, "wght" : 15, "cost" : 20, "prop" : {"ac_mod" : 2, "sk_chk" : -2, "sp_fail" : 15}},
	{"id" : "TSHD01", "type" : "max_shd", "name" : $lng.shd.tower_shield, "wght" : 45, "cost" : 30, "prop" : {"ac_mod" : 4, "max_dex" : 2, "sk_chk" : -10, "sp_fail" : 50}},

	//////////////////////////////////////////////////////////////////////////////
	// * TEST
	//////////////////////////////////////////////////////////////////////////////

	{"id" : "SHLD20", "type" : "min_shd", "name" : "Targe de Kiel", "wght" : 2.5, "cost" : 2000, "prop" : {"ac_mod" : 1, "sk_chk" : 0, "sp_fail" : 5}},
	{"id" : "SHLD02", "type" : "lgt_shd", "name" : "Rondache +1", "wght" : 6, "cost" : 1000, "prop" : {"ac_mod" : 1, "sk_chk" : -1, "sp_fail" : 5}},
	{"id" : "SHLD04", "type" : "hvy_shd", "name" : "Écu +1", "wght" : 15, "cost" : 1500, "prop" : {"ac_mod" : 2, "sk_chk" : -2, "sp_fail" : 15}},
	{"id" : "SHLD06", "type" : "max_shd", "name" : "Pavois +1", "wght" : 45, "cost" : 2000, "prop" : {"ac_mod" : 4, "max_dex" : 2, "sk_chk" : -10, "sp_fail" : 50}},
	{"id" : "SHLD07", "type" : "max_shd", "name" : "Pavois +1, +4 c. les projectiles", "wght" : 45, "cost" : 3500, "prop" : {"ac_mod" : 4, "max_dex" : 2, "sk_chk" : -10, "sp_fail" : 50}},
	{"id" : "SHLD19", "type" : "max_shd", "name" : "Pavois +2", "wght" : 45, "cost" : 3500, "prop" : {"ac_mod" : 4, "max_dex" : 2, "sk_chk" : -10, "sp_fail" : 50}},
];
