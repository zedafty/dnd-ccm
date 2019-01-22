/* -------------------------------------------------------------------------- */
/* # Globals */
/* -------------------------------------------------------------------------- */

$app = {
	"ver" : "alpha",
	"lng" : ["en", "fr"]
};

$cfg = {
	"chr" : "utf8",
	"lng" : "fr",
	"bld" : true
};

$usr = {
	"lng" : "CCM_lang",
	// "build" : "CCM_build", // bool
	"aside" : "CCM_aside", // int : slider length
	// "theme" : "CCM_theme", // str : dm or pc
	// "table" : "CCM_table", // str : color or border
	"combat" : "CCM_combat" // str : html (long string)
};

$loc = {
	"lng" : "lng/",
	"dat" : "dat/",
	"scr" : "scr/",
	"css" : "css/",
	"img" : "img/",
	"snd" : "snd/"
};

$chr = {};
$lng = {};
$tab = {};
$nav = {};

/* -------------------------------------------------------------------------- */
/* # Pre-Processing */
/* -------------------------------------------------------------------------- */

function getLanguage() {

	/* UNUSED : Only if match URL actived */
	/*
	var p = /lang=(\w{2})/;
	var t = location.search
	if (p.test(t)) {
		var r = t.match(p)[1];
		if ($app.lng.indexOf(r) > -1) s = r;
	} else
	*/

	if (sessionStorage.getItem($usr.lng) != null) {
		s = sessionStorage.getItem($usr.lng);
		$cfg.lng = s;
	} else {
		s = $cfg.lng;
	} return s;
}

/* -------------------------------------------------------------------------- */
/* # Load */
/* -------------------------------------------------------------------------- */

function load() {
	var inc = {
		"scr" : [
			{"elem" : "script", "attr" : {"src" : $loc.scr + "vars.js"}},
			{"elem" : "script", "attr" : {"src" : $loc.scr + "core.js"}}
		],
		"snd" : [
			{"elem" : "script", "attr" : {"src" : $loc.dat + "sounds.js"}},
			{"elem" : "script", "attr" : {"src" : $loc.scr + "media.js"}}
		],
		"cre" : [
			{"elem" : "script", "attr" : {"src" : $loc.dat + "items.js"}},
			{"elem" : "script", "attr" : {"src" : $loc.dat + "perks.js"}},
			{"elem" : "script", "attr" : {"src" : $loc.scr + "creature.js"}}
		],
		"pcs" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/pcs.js"}}],
		"npc" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/npcs.js"}}],
		"coo" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/cohorts.js"}}],
		"mon" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/monsters.js"}}],
		"mnt" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/mounts.js"}}],
		"fam" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/familiars.js"}}],
		"ani" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/animals.js"}}],
		"sum" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/summon_monsters.js"}}],
		"sun" : [{"elem" : "script", "attr" : {"src" : $loc.dat + "cre/summon_naturals.js"}}],
		"css" : [{"elem" : "link", "attr" : {"href" : $loc.css + "main.css", "rel" : "stylesheet"}}],
		"crs" : [{"elem" : "link", "attr" : {"href" : $loc.css + "creature.css", "rel" : "stylesheet"}}],
	};
	var h = document.getElementsByTagName("head")[0];
	var a = inc.scr;
	var i = h.dataset.include;
	if (i != undefined) {
		var b = i.split(","), m, t;
		for (m in b) {
			t = inc[b[m]];
			if (Array.isArray(t) && t.length > 0) a = a.concat(t);
		}
	} else a = a.concat(inc.css);
	var e, n, k;
	for (n in a) {
		e = document.createElement(a[n].elem);
		for (k in a[n].attr) e.setAttribute(k, a[n].attr[k]);
		h.appendChild(e);
	} h.removeAttribute("data-include");
}

/* -------------------------------------------------------------------------- */
/* # Boot */
/* -------------------------------------------------------------------------- */

(function boot() {
	var h = document.getElementsByTagName("head")[0];
	var e = document.createElement("script");
	e.setAttribute("src", $loc.lng + getLanguage() + ".js");
	h.appendChild(e);
}());
