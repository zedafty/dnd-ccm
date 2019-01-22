/* -------------------------------------------------------------------------- */
/* # Characters Encoding */
/* -------------------------------------------------------------------------- */

$chr.html = {
	"half_dash" : "&ndash;",
	"long_dash" : "&mdash;"
}

$chr.utf8 = {
	"half_dash" : "–",
	"long_dash" : "—"
}

/* -------------------------------------------------------------------------- */
/* # Configuration */
/* -------------------------------------------------------------------------- */

$def = { // TODO : default values
	"dr_val" : 5,
	"dr_off" : $chr[$cfg.chr].long_dash,
};

$cfg.cre = {
	"npc_cr_mod" : 0.5,
	"def_hit_die" : 8,
	"def_avg_hit_die" : 4.5,
	"def_atk_mul" : 0.75,
	"def_key_ab" : "str",
	"def_sk_pts" : 2,
	"def_type" : "humanoid",
	"def_size" : "m",
	"def_cls" : {"commoner" : 1},
	"def_ab" : [8,8,8,8,8,8],
};

$cfg.wpn = {
	"dmg_def" : "1d6",
	"cri_rng_def" : 20,
	"cri_mul_def" : 2
};

$cfg.img = {
	"alt_def" : "Image"
};

$cfg.str = {
	"snd_len" : 32, // [int] Maximum characters length for sound lists items (0 for none). Default : 32
};

$dbg = {
	"xp" : false,
	"sk" : false
};

/* -------------------------------------------------------------------------- */
/* # Sources (i.e. bibliography) */
/* -------------------------------------------------------------------------- */

$src = {
	"unknown" : $lng.unknown_source,
	"none" : $lng.no_source,
	"home" : $lng.homebrew,
	"bg1_en" : "Baldur's Gate, Black Isle Studios, 1998",
	"bg1_fr" : "Baldur's Gate, Black Isle Studios, 1999, VF",
	"dmg_en" : "Dungeon Master's Guide v.3.5",
	"gdm_fr" : "Guide du Maître v.3.5",
	"phb_en" : "Player's Handbook v.3.5",
	"mdj_fr" : "Manuel des Joueurs v.3.5",
	"mm1_en" : "Monster Manual v.3.5",
	"mm1_fr" : "Manuel des Monstres v.3.5"
};

/* -------------------------------------------------------------------------- */
/* # Tables */
/* -------------------------------------------------------------------------- */

$tab.exp = [
// cr1,   cr2,    cr3,  cr4,   cr5,   cr6,   cr7,   cr8,   cr9,  cr10,   cr11, cr12,  cr13,  cr14,  cr15,  cr16,  cr17,  cr18,  cr19,  cr20
	[300,   600,   900,  1350,  1800,  2700,  3600,  5400,  7200, 10800,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1], // ecl1
	[300,   600,   900,  1350,  1800,  2700,  3600,  5400,  7200, 10800,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1], // ecl2
	[300,   600,   900,  1350,  1800,  2700,  3600,  5400,  7200, 10800,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1], // ecl3
	[300,   600,   800,  1200,  1600,  2400,  3200,  4800,  6400,  9600, 12800,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1], // ecl4
	[300,   500,   750,  1000,  1500,  2250,  3000,  4500,  6000,  9000, 12000, 18000,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1], // ecl5
	[300,   450,   600,   900,  1200,  1800,  2700,  3600,  5400,  7200, 10800, 14400, 21600,    -1,    -1,    -1,    -1,    -1,    -1,    -1], // ecl6
	[263,   350,   525,   700,  1050,  1400,  2100,  3150,  4200,  6300,  8400, 12600, 16800, 25200,    -1,    -1,    -1,    -1,    -1,    -1], // ecl7
	[200,   300,   450,   600,   800,  1200,  1600,  2400,  3600,  4800,  7200,  9600, 14400, 19200, 28800,    -1,    -1,    -1,    -1,    -1], // ecl8
	[  0,   225,   338,   450,   675,   900,  1350,  1800,  2700,  4050,  5400,  8100, 10800, 16200, 21600, 32400,    -1,    -1,    -1,    -1], // ecl9
	[  0,     0,   250,   375,   500,   750,  1000,  1500,  2000,  3000,  4500,  6000,  9000, 12000, 18000, 24000, 36000,    -1,    -1,    -1], // ecl10
	[  0,     0,     0,   275,   413,   550,   825,  1100,  1650,  2200,  3300,  4950,  6600,  9900, 13200, 19800, 26400, 39600,    -1,    -1], // ecl11
	[  0,     0,     0,     0,   300,   450,   600,   900,  1200,  1800,  2400,  3600,  5400,  7200, 10800, 14400, 21600, 28800, 43200,    -1], // ecl12
	[  0,     0,     0,     0,     0,   325,   488,   650,   975,  1300,  1950,  2600,  3900,  5850,  7800, 11700, 15600, 23400, 31200, 46800], // ecl13
	[  0,     0,     0,     0,     0,     0,   350,   525,   700,  1050,  1400,  2100,  2800,  4200,  6300,  8400, 12600, 16800, 25200, 33600], // ecl14
	[  0,     0,     0,     0,     0,     0,     0,   375,   563,   750,  1125,  1500,  2250,  3000,  4500,  6750,  9000, 13500, 18000, 27000], // ecl15
	[  0,     0,     0,     0,     0,     0,     0,     0,   400,   600,   800,  1200,  1600,  2400,  3200,  4800,  7200,  9600, 14400, 19200], // ecl16
	[  0,     0,     0,     0,     0,     0,     0,     0,     0,   425,   638,   850,  1275,  1700,  2550,  3400,  5100,  7650, 10200, 15300], // ecl17
	[  0,     0,     0,     0,     0,     0,     0,     0,     0,     0,   450,   675,   900,  1350,  1800,  2700,  3600,  5400,  8100, 10800], // ecl18
	[  0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,   475,   713,   950,  1425,  1900,  2850,  3800,  5700,  8550], // ecl19
	[  0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,   500,   750,  1000,  1500,  2000,  3000,  4000,  6000]  // ecl20
];

/* -------------------------------------------------------------------------- */
/* # Navigation */
/* -------------------------------------------------------------------------- */

$nav.stores = [
	{"href" : "candlekeep", "text" : $lng.candlekeep},
	{"href" : "friendly_arm", "text" : $lng.friendly_arm},
	{"href" : "beregost", "text" : $lng.beregost},
	{"href" : "nashkel", "text" : $lng.nashkel}
];

$nav.cohorts = [
	{"href" : "imoen", "text" : $lng.imoen},
	{"href" : "garrick", "text" : $lng.garrick},
	{"href" : "kagain", "text" : $lng.kagain},
	{"href" : "kivan", "text" : $lng.kivan},
	{"href" : "ajantis", "text" : $lng.ajantis},
];

$nav.npcs = [
	{"href" : "cohorts", "text" : $lng.cohorts, "fold" : $nav.cohorts}
];

$nav.monsters = [
	{"href" : "test", "text" : "TEST"},
	{"href" : "gibber", "text" : $lng.gibberling},
	{"href" : "xvart", "text" : $lng.xvart},
	{"href" : "tasloi", "text" : $lng.tasloi},
	{"href" : "bandit", "text" : $lng.bandit},
	{"href" : "hobgoblin", "text" : $lng.hobgoblin},
	{"href" : "half_ogre", "text" : $lng.half_ogre},
	{"href" : "ogrillon", "text" : $lng.ogrillon},
];

$nav.creatures = [
	{"href" : "monsters", "text" : $lng.monsters, "fold" : $nav.monsters},
	{"href" : "npcs", "text" : $lng.npcs, "fold" : $nav.npcs}
];

$nav.treasures = [
	{"href" : "jewels", "text" : $lng.jewels},
	{"href" : "gems", "text" : $lng.gems}
];

$nav.root = [
	{"href" : "stores", "text" : $lng.stores, "fold" : $nav.stores},
	{"href" : "creatures", "text" : $lng.creatures, "fold" : $nav.creatures},
	{"href" : "treasures", "text" : $lng.treasures, "fold" : $nav.treasures},
	{"href" : "encounter", "text" : $lng.encounter},
	{"href" : "license", "text" : $lng.license},
];

/* -------------------------------------------------------------------------- */
/* # Content */
/* -------------------------------------------------------------------------- */

var _header = ""
	+ "<h1 class='title'><a href='index.html' title='" + $lng.home + "'><i class='cogs'></i><span class='hide-s'>" + $lng.app_name + " </span><span class='hide'> &ndash; </span><span class='only-s'>" + $lng.app_abbr + " </span><small>(" + $app.ver + ")</small></a></h1>"
	+ "<div><span class='hide'>" + $lng.language + "&#8239;: </span><strong class='lng' tabindex='0' id='lng'>" + $cfg.lng.toUpperCase() + "</strong></div>"
	+ "<div><span class='hide'>" + $lng.edition + "&#8239;: </span><strong class='ver'>v3.5</strong></div>";
var _footer = "&nbsp;";
var _home = "<a href='index.html'>" + $lng.home + "</a>";
