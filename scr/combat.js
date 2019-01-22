// =============================================================================
// -----------------------------------------------------------------------------
// # HTML Elements
// -----------------------------------------------------------------------------
// =============================================================================

/**
	Returns an element index from its parent's nodelist (0-based).
*/
function getIndex(o) {
	var p = o.parentElement;
	var a = p.children;
	var i = undefined, j = 0, l = a.length;
	for (j; j < l; j++) if (a[j] == o) i = j;
	return i;
};

// =============================================================================
// -----------------------------------------------------------------------------
// # Events
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Events - Editable (Elements)
// -----------------------------------------------------------------------------

function checkOrder(o) {
	if (o.dataset.last !== o.innerHTML && getCombatStage() == "run") sortByOrder();
	delete o.dataset.last;
}

function checkHitPoints(o) {
	// 1. Calc hit points from text node
	var v = o.textContent;
	if (v == $chr[$cfg.chr].half_dash || v == "--" || v == "") {
		o.classList.remove("error");
		o.innerHTML = $chr[$cfg.chr].half_dash;
	} else if (isRegularSum(v)) {
		o.classList.remove("error");
		o.innerHTML = eval(v);
	} else {
		o.classList.add("error");
	}
	// 2. Set hit points styles
	var e = o.parentElement.children[getCol("name")];
	var n = parseInt(o.innerHTML);
	if (n <= -10) e.setAttribute("class", "dead");
	else if (n < 0) e.setAttribute("class", "dying");
	else if (n == 0) e.setAttribute("class", "disabled");
	else e.removeAttribute("class");
	// 3. Sort list
	if (o.dataset.last !== o.innerHTML && getCombatStage() == "run") sortByOrder();
	delete o.dataset.last;
}

function checkInitiativeRoll(o) {
	var v = o.textContent;
	if (v == "" || v == "?" || v == "d20" || v == "roll") {
		o.classList.remove("error");
		o.innerHTML = d(20);
	} else if (isRegularSum(v)) {
		o.classList.remove("error");
		o.innerHTML = eval(v);
	} else {
		o.classList.add("error");
	}
	if (o.innerHTML < 1 || o.innerHTML > 20) o.classList.add("error");
}

function checkInitiativeModifier(o) {
	var v = o.textContent;
	if (isRegularSum(v)) {
		o.classList.remove("error");
		o.innerHTML = convertToSignInt(eval(v));
	} else {
		o.classList.add("error");
	}
}

function checkEffectiveCharacterLevel(o) {
	var v = o.textContent;
	if (isRegularSum(v)) {
		o.classList.remove("error");
		o.innerHTML = eval(v);
	} else {
		o.classList.add("error");
	}
	if (o.innerHTML < 1 || o.innerHTML > 20) o.classList.add("error");
}

function handleEditableEventsIn(o) {
	switch (getTableHeadLine().children[getIndex(o)].dataset.col) {
		case "order" : o.dataset.last = o.innerHTML; break;
		case "hp"    : o.dataset.last = o.innerHTML; break;
	}
}

function handleEditableEventsOut(o) {
	switch (getTableHeadLine().children[getIndex(o)].dataset.col) {
		case "order"     : checkOrder(o);   break;
		case "hp"        : checkHitPoints(o); break;
		case "init_roll" : checkInitiativeRoll(o); break;
		case "init_mod"  : checkInitiativeModifier(o); break;
		case "ecl"       : checkEffectiveCharacterLevel(o); break;
	}
}

function bindEditableEvents(o) {
	var a = o.querySelectorAll("[contenteditable]"), i;
	for (i = 0; i < a.length; i++) {
		// Focus
		a[i].addEventListener("focus", function(e) {
			handleEditableEventsIn(e.target);
		});
		// Blur
		a[i].addEventListener("blur", function(e) {
			handleEditableEventsOut(e.target);
		});
		// Keydown
		a[i].addEventListener("keydown", function(e) {
			if (e.which == 13) e.target.blur();
		});
		// Paste
		a[i].addEventListener("paste", function(e) {
			e.preventDefault();
		});
	}
}

// -----------------------------------------------------------------------------
// # Events - Clickable (Elements)
// -----------------------------------------------------------------------------

function duplicateRow(o) {
	var e = o.parentElement;
	var c = e.cloneNode(true);
	// Re-roll on duplicate
	c.children[getCol("init_roll")].innerHTML = d(20);
	// Alter name on duplicate
	var j = getCol("name");
	var s = c.children[j].innerHTML;
	var t = " (" + $lng.copy_of.toLowerCase() + ")";
	if (s.slice(s.length - t.length, s.length) != t) {
		c.children[j].innerHTML += t;
	}
	e.parentElement.insertBefore(c, e);
	bindTableEvents(c);
	resetXP(); // TEMP
}

function deleteRow(o) {
	var e = o.parentElement;
	e.parentElement.removeChild(e);
	resetXP(); // TEMP
}

function handleClickableEvents(o) {
	switch (getTableHeadLine().children[getIndex(o)].dataset.col) {
		case "dup" : duplicateRow(o); break;
		case "del" : deleteRow(o); break;
	}
}

function bindClickableEvents(o) {
	var a = o.querySelectorAll("[data-click]"), i;
	for (i = 0; i < a.length; i++) {
		// Click
		a[i].addEventListener("click", function(e) {
			handleClickableEvents(e.target);
		});
	}
}

// -----------------------------------------------------------------------------
// # Events - Bind (Table)
// -----------------------------------------------------------------------------

function bindTableEvents(o) {
	bindEditableEvents(o);
	bindClickableEvents(o);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Get
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Get Elements By ID
// -----------------------------------------------------------------------------

function getCombatRoundElement() {
	return document.getElementById("combat_round");
}

function getTable() {
	return document.getElementById("encounter_table");
}

function getTableHead() {
	return document.getElementById("encounter_head");
}

function getTableBody() {
	return document.getElementById("combat_list");
}

function getMonsterList() {
	return document.getElementById("monster_list");
}

function getSummonMonsterList() {
	return document.getElementById("summon_monster_list");
}

function getSummonMonsterList() {
	return document.getElementById("summon_monster_list");
}

function getSummonNaturalList() {
	return document.getElementById("summon_natural_list");
}

function getNpcList() {
	return document.getElementById("npc_list");
}

function getPcList() {
	return document.getElementById("pc_list");
}
function getAssocList() {
	return document.getElementById("assoc_list");
}

function getButtons() {
	return document.getElementById("encounter_buttons");
}

// -----------------------------------------------------------------------------
// # Get Elements By Tag Name
// -----------------------------------------------------------------------------

function getTableHeadLine() {
	return getTableHead().getElementsByTagName("tr")[0];
}

// -----------------------------------------------------------------------------
// # Get Column Number By Data Attribute From Table Head Line
// -----------------------------------------------------------------------------

/**
	Returns a column position based on table head line 'data-col' attribute.
	> getCol("name") => 2
	> getCol(["name", "order"]) => [2, 1]
*/
function getCol(m) {
	if (typeof(m) === "string") m = [m];
	var r = [], a, i, j;
	a = getTableHeadLine().querySelectorAll("th");
	for (i = 0; i < a.length; i++) {
		for (j in m) {
			if (a[i].dataset.col == m[j]) {
				r.push(i);
			}
		}
	}
	return r.length == 1 ? r[0] : r;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Sort
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Sort By Faction and Name
// -----------------------------------------------------------------------------

function sortByFaction(reset_order) {
	var r = reset_order || false;
	var o = getTableBody();
	var l = o.getElementsByTagName("tr");
	var i, j;
	var a, b;
	var q = [];
	for (i = 0; i < l.length; i++) {
		switch (l[i].dataset.faction) {
			case "party"   : a = 1; break;
			case "ally"    : a = 2; break;
			case "enemy"   : a = 3; break;
			case "neutral" : a = 4; break;
			default        : a = 5; break;
		}
		b = l[i].children[getCol("name")].innerHTML;
		q.push({"faction" : a, "name" : b, "html" : l[i].outerHTML});
	}
	q.sort(function(a, b) {
		var r = a.faction - b.faction;
		if (r == 0) {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
			return 0;
		}
		return r;
	});
	o.innerHTML = "";
	for (j = 0; j < q.length; j++) {
		o.innerHTML += q[j].html;
		if (r) {
			o.children[j].children[getCol("order")].innerHTML = "#";
			o.children[j].children[getCol("order")].contentEditable = false;
		}
	}
	bindTableEvents(o); // WARNING : reset events
	o.dataset.sortBy = "faction"; // WARNING : set sort data
}

// -----------------------------------------------------------------------------
// # Sort By Initiative
// -----------------------------------------------------------------------------

function sortByInit() {
	var o = getTableBody();
	var l = o.getElementsByTagName("tr");
	var i, j;
	var a, b;
	var q = [];
	for (i = 0; i < l.length; i++) {
		a = parseInt(l[i].children[getCol("init_roll")].innerHTML);
		b = parseInt(l[i].children[getCol("init_mod")].innerHTML);
		q.push({"sum" : a + b, "val" : b, "html" : l[i].outerHTML});
	}
	q.sort(function(a, b) {
		var r = b.sum - a.sum;
		return r == 0 ? b.val - a.val : r;
	});
	o.innerHTML = "";
	for (j = 0; j < q.length; j++) {
		o.innerHTML += q[j].html;
		o.children[j].children[getCol("order")].innerHTML = j + 1;
		o.children[j].children[getCol("order")].contentEditable = true;
	}
	bindTableEvents(o); // WARNING : reset events
	o.dataset.sortBy = "init"; // WARNING : set sort data
}

// -----------------------------------------------------------------------------
// # Sort By Order and Hit Points
// -----------------------------------------------------------------------------

function sortByOrder() {
	var o = getTableBody();
	var l = o.getElementsByTagName("tr");
	var i, j;
	var n;
	var q = [];
	for (i = 0; i < l.length; i++) {
		n = parseFloat(l[i].children[getCol("order")].innerHTML);
		h = parseInt(l[i].children[getCol("hp")].innerHTML);
		if (h < 0) n = NaN;
		else if (h >= 0 && Number.isNaN(n)) n = 9999;
		q.push({"num" : n, "hp" : h, "html" : l[i].outerHTML});
	}
	q.sort(function(a, b) {
		if (a.hp < 0 && b.hp < 0) return b.hp - a.hp;
		if (a.hp < 0) return 1;
		if (b.hp < 0) return -1;

		if (Number.isNaN(a.num) && Number.isNaN(b.num)) return -1;
		if (Number.isNaN(a.num)) return 1;
		if (Number.isNaN(b.num)) return -1;

		return a.num - b.num;
	});
	o.innerHTML = "";
	for (j = 0; j < q.length; j++) {
		o.innerHTML += q[j].html;
		o.children[j].children[getCol("order")].innerHTML = Number.isNaN(q[j].num) ? $chr[$cfg.chr].half_dash : j + 1;
	}
	bindTableEvents(o); // WARNING : reset events
	o.dataset.sortBy = "order"; // WARNING : set sort data
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Creatures
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Get Faction
// -----------------------------------------------------------------------------

function getFaction(type) {
	switch (type) {
		case "pc"              : return "party";
		case "assoc"           : return "ally";
		case "monster"         : return "enemy";
		case "npc"             :
		case "summon_natural"  :
		case "summon_monster"  :
		default                : return "neutral";
	}
}

// -----------------------------------------------------------------------------
// # Create Creature List
// -----------------------------------------------------------------------------

function createCreaturesList(o, l, s) {
	var h, e, i, b = isSetStr(s);
	if (b) {
		h = document.createElement("optgroup");
		h.setAttribute("label", s);
	}
	for (i = 0; i < l.length; i++) {
		e = document.createElement("option");
		e.dataset.id = l[i].id;
		e.innerHTML = l[i].name;
		b ? h.appendChild(e) : o.appendChild(e);
	} if (b) o.appendChild(h);
}

// -----------------------------------------------------------------------------
// # Add Creature
// -----------------------------------------------------------------------------

function addCreature(type) {

	var faction = getFaction(type);

	var o = getTableBody();
	var l = getTableHeadLine().children;
	var n = o.getElementsByTagName("tr").length;
	var m = o.querySelectorAll("[data-faction='" + faction + "']").length + 1;

	var a, b;
	switch (type) {
		case "pc"             : a = $pcs; b = getPcList(); break;
		case "assoc"          : a = $assocs; b = getAssocList(); break;
		case "monster"        : a = $monsters; b = getMonsterList(); break;
		case "npc"            : a = $npcs; b = getNpcList(); break;
		case "summon_monster" : a = $summon_monsters; b = getSummonMonsterList(); break;
		case "summon_natural" : a = $summon_naturals; b = getSummonNaturalList(); break;
	}

	var h, i, j;

	var tr = document.createElement("tr");
	var td;

		for (i = 0; i < b.length; i++) {
			if (b[i].selected == true) {
				for (j = 0; j < a.length; j++) {
					if (a[j].id == b[i].dataset.id) h = a[j];
				}
			}
		}

	for (i = 0; i < l.length; i++) {
		td = document.createElement("td");
		tr.appendChild(td);

		switch (i) {
			case getCol("order")     : s = getCombatRound() > 0 ? n + 1 : "#"; break;
			case getCol("name")      : s = (typeof(h.name) !== "undefined" ? h.name + "&nbsp;" : "") + "#" + m++; break;
			// case getCol("hp")        : s = typeof(h.hp) !== "undefined" ? h.hp : $chr[$cfg.chr].half_dash; break; // OLD
			case getCol("hp")        : s = getHitPoints(h); break;
			case getCol("init_roll") : s = d(20); break;
			// case getCol("init_mod")  : s = convertToSignInt(h.init); break; // OLD
			case getCol("init_mod")  : s = convertToSignInt(getInitiative(h)); break;
			// case getCol("cr")        : s = typeof(h.cr) !== "undefined" ? h.cr : $chr[$cfg.chr].half_dash; break; // OLD
			case getCol("cr")        : s = getChallengeRating(h); break;
			case getCol("ecl")       : s = typeof(h.ecl) !== "undefined" ? h.ecl : $chr[$cfg.chr].half_dash; break;
			case getCol("xp")        : s = $chr[$cfg.chr].half_dash; break;
			case getCol("coins")     : s = typeof(h.coins) !== "undefined" ? h.coins : $chr[$cfg.chr].half_dash; break;
			case getCol("goods")     : s = typeof(h.goods) !== "undefined" ? h.goods : $chr[$cfg.chr].half_dash; break;
			case getCol("items")     : s = typeof(h.items) !== "undefined" ? h.items : $chr[$cfg.chr].half_dash; break;
			case getCol("dup")       : s = "<i class='clone'>"; break;
			case getCol("del")       : s = "<i class='trash'>"; break;
		}

		if (getTableHeadLine().children[i].style.display == "none") td.style.display = "none";

		td.innerHTML = s;
		if ((s != $chr[$cfg.chr].half_dash
			&& i != getCol("dup")
			&& i != getCol("del")
			&& i != getCol("order"))
			|| i == getCol("hp") || (getCombatRound() > 0 && i == getCol("order"))
			) td.setAttribute("contenteditable", "true");

		if (i == getCol("name")) td.spellcheck = false;
		if (i == getCol("dup") || i == getCol("del")) td.dataset.click = "";
	}

	tr.dataset.faction = faction;

	o.appendChild(tr);

	bindTableEvents(tr);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Display
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Set Columns Visibility
// -----------------------------------------------------------------------------

function setColsVisibility(arr, vis) {
	var v = vis || false;
	var c = arr, a, b, i, j;
	c = getCol(arr);

	// 1. Toggle thead
	a = getTableHeadLine();
	for (j = 0; j < c.length; j++) {
		v ? a.children[c[j]].show() : a.children[c[j]].hide();
	}

	// 2. Toggle tbody
	b = getTableBody().getElementsByTagName("tr");
	for (i = 0; i < b.length; i++) {
		for (j = 0; j < c.length; j++) {
			v ? b[i].children[c[j]].show() : b[i].children[c[j]].hide();
		}
	}
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Combat
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Start Combat
// -----------------------------------------------------------------------------

function startCombat() {
	// 1. Set Combat Stage
	setCombatStage("run");
	// 2. Sort Combat List
	sortByInit();
	// 3. Set Combat Round -- USELESS (set in event)
	// updateCombatRound(1);
	// NEW

	// -------------------------------------------------------------------------
	// Hide unused cols
	// setColsVisibility(["init_roll", "init_mod"], false);
	// Toggle buttons
	// e.target.hide();
	// reset_combat.show();
	// Enable End Round Button
	// next_round.removeAttribute("disabled");
}

// -----------------------------------------------------------------------------
// # Reset Combat
// -----------------------------------------------------------------------------

function resetCombat() {
	// 1. Set Combat Stage
	setCombatStage("setup");
	// 2. Sort Combat List
	sortByFaction(true);
	// 3. Set Combat Round
	setCombatRound(0)

	// -------------------------------------------------------------------------
	// Show hidden cols
	// setColsVisibility(["init_roll", "init_mod"], true);
	// Toggle buttons
	// e.target.hide();
	// start_combat.show();
	// Disabled End Round Button
	// next_round.setAttribute("disabled", "");
}

// -----------------------------------------------------------------------------
// # Get Combat Stage
// -----------------------------------------------------------------------------

function getCombatStage() {
	return getTableHead().dataset.stage;
}

// -----------------------------------------------------------------------------
// # Set Combat Stage
// -----------------------------------------------------------------------------

function setCombatStage(str) {
	getTableHead().dataset.stage = str;
}

// -----------------------------------------------------------------------------
// # Get Combat Round
// -----------------------------------------------------------------------------

function getCombatRound() {
	var o = getCombatRoundElement().querySelector("[data-round]");
	var i = parseInt(o.innerHTML);
	return i;
}

// -----------------------------------------------------------------------------
// # Set Combat Round
// -----------------------------------------------------------------------------

function setCombatRound(i) {
	updateCombatRound(i, true)
}

// -----------------------------------------------------------------------------
// # Update Combat Round
// -----------------------------------------------------------------------------

function updateCombatRound(i, b) {
	var i = i || 0, b = b || false;
	var o = getCombatRoundElement().querySelector("[data-round]");
	var n = parseInt(o.innerHTML);
	o.innerHTML = b ? i : n + i;
	if (i != 0) sortByOrder();
}

// =============================================================================
// -----------------------------------------------------------------------------
// # XP
// -----------------------------------------------------------------------------
// =============================================================================

// -----------------------------------------------------------------------------
// # Calc XP
// -----------------------------------------------------------------------------

function calcXP() {
	var o = getTableBody();
	var party = o.querySelectorAll("[data-faction='party']");
	var ally = o.querySelectorAll("[data-faction='ally']");
	var enemy = o.querySelectorAll("[data-faction='enemy']");
	var party_size = party.length + ally.length / 2;
	var enc_lvl = 0;
	var cr, ecl, xp;
	var i, j;
	for (i = 0; i < enemy.length; i++) {
		// enc_lvl += eval(cr); // OLD
		cr = enemy[i].children[getCol("cr")].innerHTML;
		if (isRegularFraction(cr)) enc_lvl += convertFractionToFloat(cr);
	}
	// ***************************************************************************
	// * DEBUG
	// ***************************************************************************
	if ($dbg.xp == true) {
		pln();
		log("> party : " + party.length);
		log("> ally : " + ally.length);
		log("> enemy : " + enemy.length);
		log("> party_size : " + party_size);
		log("> encounter_level : " + enc_lvl);
		pln();
	}
	// ***************************************************************************
	for (j = 0; j < party.length; j++) {
		ecl = parseInt(party[j].children[getCol("ecl")].innerHTML);
		if (enc_lvl < 1) {
			xp = $tab.exp[ecl + 1][0] * enc_lvl;
		} else {
			xp = $tab.exp[ecl + 1][Math.floor(enc_lvl) - 1];
		}
		party[j].children[getCol("xp")].innerHTML = xp < 0 || typeof(xp) === "undefined" ? "*" : Math.floor(xp / party_size);
	}
	o.dataset.calcXp = "true";
}

// -----------------------------------------------------------------------------
// # Reset XP
// -----------------------------------------------------------------------------

function resetXP() {
	var o = getTableBody();
	var p = o.querySelectorAll("[data-faction='party']");
	for (var j = 0; j < p.length; j++) {
		p[j].children[getCol("xp")].innerHTML = $chr[$cfg.chr].half_dash;
	}
	delete o.dataset.calcXp;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Initialize
// -----------------------------------------------------------------------------
// =============================================================================

function initializeCombat() {

	// Globals
	$assocs = [].concat($cohorts).concat($familiars).concat($animals).concat($mounts);

	// var o = getTableBody();
	var q = getButtons();
	// ---
	var add_monster        = q.querySelector("[data-add-monster]");
	var add_summon_monster = q.querySelector("[data-add-summon-monster]");
	var add_summon_natural = q.querySelector("[data-add-summon-natural]");
	var add_npc            = q.querySelector("[data-add-npc]");
	var add_assoc          = q.querySelector("[data-add-assoc]");
	var add_pc             = q.querySelector("[data-add-pc]");
	// ---
	var next_round         = q.querySelector("[data-next-round]");
	var prev_round         = q.querySelector("[data-prev-round]");
	// ---
	var calc_xp            = q.querySelector("[data-calc-xp]");
	// ---
	var sort_switch        = q.querySelector("[data-sort-switch]");
	var view_switch        = q.querySelector("[data-view-switch]");
	var theme              = q.querySelector("[data-theme]");
	// ---
	var save               = q.querySelector("[data-save]");
	var load               = q.querySelector("[data-load]");
	var erase              = q.querySelector("[data-erase]");

	createCreaturesList(getMonsterList(), $monsters, $lng.monsters);
	createCreaturesList(getSummonMonsterList(), $summon_monsters, $lng.summoned_monsters);
	createCreaturesList(getSummonNaturalList(), $summon_naturals, $lng.natural_allies);
	createCreaturesList(getNpcList(), $npcs, $lng.npcs);
	createCreaturesList(getPcList(), $pcs, $lng.pcs);
	createCreaturesList(getAssocList(), $assocs, $lng.associates);

	//bindTableEvents(o); // NOTE : done by sorting
	// TODO -- initialize table = check content editable cells + sort + init data values
	sortByFaction(true); // sort by faction and reset

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Calc XP
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	calc_xp.addEventListener("click", function() {
		var o = getTableBody();
		if (o.dataset.calcXp == "true") {
			resetXP();
		} else {
			calcXP();
		}
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * TODO -- Generate Treasure
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Add Monster
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	add_monster.addEventListener("click", function() {
		addCreature("monster");
		resetXP();
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Add Summon Monster
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	add_summon_monster.addEventListener("click", function() {
		addCreature("summon_monster");
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Add Summon Natural
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	add_summon_natural.addEventListener("click", function() {
		addCreature("summon_natural");
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Add NPC
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		add_npc.addEventListener("click", function() {
		addCreature("npc");
		resetXP();
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Add Associate
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	add_assoc.addEventListener("click", function() {
		addCreature("assoc");
		resetXP();
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Add PC
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	add_pc.addEventListener("click", function() {
		addCreature("pc");
		resetXP();
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Previous Combat Round
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	prev_round.addEventListener("click", function() {
		var r = getCombatRound();
		if (r == 0) {
			return;
		} else if (r == 1) {
			resetCombat();
		} else {
			updateCombatRound(-1);
		}
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Next Combat Round
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	next_round.addEventListener("click", function() {
		if (getCombatRound() == 0) startCombat();
		updateCombatRound(1);
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Sort Switch
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	sort_switch.addEventListener("click", function() {
		var o = getTableBody();
		if (getCombatRound() > 0) {
			if (o.dataset.sortBy == "order") {
				sortByFaction();
			} else {
				sortByOrder();
			}
		}
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * View Switch
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	view_switch.addEventListener("click", function() {
		var o = getTableBody();
		
			if (o.dataset.view == "combat") {
				setColsVisibility(["init_roll", "init_mod"], true);
				delete o.dataset.view;
			} else {
				setColsVisibility(["init_roll", "init_mod"], false);
				o.dataset.view = "combat";
			}
		
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Theme
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	theme.addEventListener("click", function() {
		var o = getTable();
		if (o.classList.contains("default")) {
			o.classList.remove("default");
			o.classList.add("vanilla");
		} else {
			o.classList.remove("vanilla");
			o.classList.add("default");
		}
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Save
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	save.addEventListener("click", function() {
		sessionStorage.setItem($usr.combat, getTable().innerHTML);
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Load
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	load.addEventListener("click", function() {
		var s = sessionStorage.getItem($usr.combat);
		var o = getTable();
		if (s !== null) {
			o.innerHTML = s;
			bindTableEvents(o);
		}
		// else console.log("ERROR : Nothing to load"); // DEBUG
	});
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// * Erase
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	erase.addEventListener("click", function() {
		sessionStorage.removeItem($usr.combat);
	});
}
