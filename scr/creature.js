// =============================================================================
// -----------------------------------------------------------------------------
// # Get
// -----------------------------------------------------------------------------
// =============================================================================

function getTopic() {
	return document.querySelector(".topic");
}

function getTopicTitle() {
	return getTopic().querySelector("h1");
}

function getTopicSource() {
	return getTopic().querySelector("cite");
}

function getMedia() {
	return document.querySelector(".media");
}

function getStatBlock() {
	return document.querySelector(".stat-block");
}

function getStatLines() {
	return document.querySelectorAll(".line");
}

function getDataLines() {
	return document.querySelectorAll("[data-stat]");
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Events
// -----------------------------------------------------------------------------
// =============================================================================

function toggleInfobox(e) { // e = event
	if (e.target.dataset.infobox == "true") {
		infobox.hide();
	} else {
		infobox.show(e.target, e.target.dataset.desc);
	}
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Type and Size
// -----------------------------------------------------------------------------
// =============================================================================

/**
	NOTE
	The 'Real humans', meant as pure-blood humans, can have multiple subtypes.
	This is admitted for the (rare) case where a human gains another subtype,
	or to provide some rare breed of humankind creatures the proper racial feats.
*/

function hasSubtype(h, t) { // h = cre hash, t = subtype -- returns bool
	var a = h.subt || null, n;
	if (isSetStr(a) && a == t) return true;
	else if (isSetArr(a)) for (n in a) if (a[n] == t) return true;
}

function isRealHuman(h) { // h = cre hash -- returns bool
	return h.type == "humanoid" && hasSubtype(h, "human");
}

function setTypeAndSize(e, h) { // e = html element, h = creature hash
	var type = h.type, subt = h.subt, size = h.size, s = "", t = "";
	// 1. Append type
	s += $lng[type];
	// 2. Append subtype
	if (typeof(subt) !== "undefined") {
		var a = typeof(subt) === "string" ? [subt] : subt, i = 0, l = a.length;
		for (i; i < l; i++) {
			t += $lng[a[i]];
			if (i < l - 1) t += ", ";
		} t = " (" + t + ")";
	}
	// 3. Append size
	if ($cfg.lng == "en") s = $lng["size_" + size + "_long"] + " " + s + t;
	else if ($cfg.lng == "fr") s += t.toLowerCase() + " de taille " + $lng["size_" + size + "_abbr"];
	// 4. Insert string
	e.innerHTML = s;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Class and Level
// -----------------------------------------------------------------------------
// =============================================================================

/**
	NOTE
	Character class is here and below understood as PC class as well as NPC class.
	If the disambiguation has to be made, then the terms 'PC' and 'NPC' are used.
	A 'Monster class' qualify a class that rely on creature's type.
*/

function isMonsterClass(c) { // c = cre class -- returns bool
	switch(c) {
		case "aberration" :
		case "animal" :
		case "construct" :
		case "dragon" :
		case "elemental" :
		case "fey" :
		case "giant" :
		case "humanoid" :
		case "magical_beast" :
		case "monstrous_humanoid" :
		case "ooze" :
		case "outsider" :
		case "plant" :
		case "undead" :
		case "vermin" :
			return true;
		default :
			return false;
	}
}

function isPcClass(c) { // c = cre class -- returns bool
	switch(c) {
		case "barbarian" : // PC Classes
		case "bard" :
		case "cleric" :
		case "druid" :
		case "fighter" :
		case "monk" :
		case "paladin" :
		case "ranger" :
		case "rogue" :
		case "sorcerer" :
		case "wizard" :
			return true;
		default :
			return false;
	}
}

function isNpcClass(c) { // c = cre class -- returns bool
	switch(c) {
		case "adept" : // NPC Classes
		case "aristocrat" :
		case "commoner" :
		case "expert" :
		case "warrior" :
			return true;
		default :
			return false;
	}
}

function isCharacterClass(c) { // c = cre class -- returns bool
	return isPcClass(c) || isNpcClass(c);
}

function hasMonsterClass(h) { // h = cre hash -- returns bool
	var a = h.cls, k;
	if (typeof(a) === "object") {
		for (k in a) if (isMonsterClass(k)) return true;
	}
}

function hasCharacterClass(h) { // h = cre hash -- returns bool
	var a = h.cls, k;
	if (typeof(a) === "object") {
		for (k in a) if (isCharacterClass(k)) return true;
	}
}

function getTotalHitDice(h) { // h = cre hash -- returns int
	var a = h.cls, k, n = 0;
	if (typeof(a) === "object") {
		for (k in a) if (a[k] > 0) n += a[k];
	} return n;
}

function setClassAndLevel(e, h) { // e = html element, h = creature hash
	if (!hasCharacterClass(h)) e.hide();
	else {
		var a = h.cls, k, i = 0, g = h.gend || "m", s = "";
		for (k in a) {
			if (isMonsterClass(k)) continue;
			if (i > 0) s += ", ";
			if ($cfg.lng == "en") s += convertToNth(a[k]) + "-Level " + $lng[k + "_" + g];
			else if ($cfg.lng == "fr") s += $lng[k + "_" + g] + " de niveau " + a[k];
			i++;
		} e.innerHTML = s;
		e.show();
	}
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Hit Dice
// -----------------------------------------------------------------------------
// =============================================================================

function getHitDieByClass(cls) {
	switch(cls) {
		case "sorcerer" :
		case "wizard" :
		case "commoner" :
			return 4;
		case "fey" :
		case "bard" :
		case "rogue" :
		case "adept" :
		case "expert" :
			return 6;
		case "aberration" :
		case "animal" :
		case "elemental" :
		case "giant" :
		case "humanoid" :
		case "monstrous_humanoid" :
		case "outsider" :
		case "plant" :
		case "vermin" :
		case "cleric" :
		case "druid" :
		case "monk" :
		case "ranger" :
		case "aristocrat" :
		case "warrior" :
			return 8;
		case "construct" :
		case "magical_beast" :
		case "ooze" :
		case "fighter" :
		case "paladin" :
			return 10;
		case "dragon" :
		case "undead" :
		case "barbarian" :
			return 12;
		default :
			return $cfg.cre.def_hit_die;
	}
}

function getAverageHitDieValue(hd) {
	switch(hd) {
		case 4  : return 2.5;
		case 6  : return 3.5;
		case 8  : return 4.5;
		case 10 : return 5.5;
		case 12 : return 6.5;
		default : return $cfg.cre.def_avg_hit_die;
	}
}

function getHitDice(h, p) { // h = creature hash, p = output ('hp' for hp as int or 'hd' for hd and hp as str)
	var s = "";
	var hp = h.hp || 0;
	var hd = 0;
	var ab_bon = getAbilityBonus(h.ab, "con");
	var ft_bon = false;
	var ft_val = 0;
	var a = h.cls, k;
	var r = "";
	var n = 0;
	var t = 0;
	// 1. Get hit points from feats
	if (hasFeat(h.ft, "toughness")) {
		ft_bon = true;
		ft_val = 3 * getFeatStackNumber(h.ft, "toughness");
	}
	// 2. Get hit dice from class
	for (k in a) {
		hd = a[k];
		n = getHitDieByClass(k);
		hp += hd * getAverageHitDieValue(n) + hd * ab_bon + ft_val;
		if (ab_bon > 0 || ft_bon) r = "+" + (hd * ab_bon + ft_val);
		if (p !== "hp") s += (t > 0 ? ", " : "") + hd + "d" + n + r;
		ft_bon = false;
		ft_val = 0;
		t++;
	}
	// 3. Get hit points from db or calc
	hp = isSetInt(h.hp) && h.hp > 0 ? h.hp : hp.toInt();
	switch(p) {
		case "hp" : return hp;
		case "hd" :
		default   : return s + " (" + hp + " " + $lng.hp.toLowerCase() + ")";
	}
}

function getHitPoints(h) { // h = creature hash -- returns integer
	return getHitDice(h, "hp");
}

function setHitDice(e, h) { // e = html element, h = creature hash
	e.innerHTML = getHitDice(h);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Initiative
// -----------------------------------------------------------------------------
// =============================================================================

function getInitiative(h) { // h = creature hash -- returns integer
	var init = 0;
	if (typeof(h.init) === "number") {
		init = h.init;
	} else {
		init = getAbilityModifier(h.ab, "dex");
		if (hasFeat(h.ft, "improved_initiative")) init += 4;
	} return init;
}

function setInitiative(e, h) { // e = html element, h = creature hash
	e.innerHTML = convertToSignInt(getInitiative(h));
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Speed
// -----------------------------------------------------------------------------
// =============================================================================

function getSpeedBySizeAndLimbs(s, l) { // s = size abbr 1-char, l = number of limbs -- returns squares
	var s = s.toLowerCase(), l = l || 2, v;
	switch(s) {
		case "f" : v = 2; break;
		case "d" : v = 3; break;
		case "t" : v = 4; break;
		case "s" : v = 4; break;
		case "m" : v = 6; break;
		case "l" : v = 8; break;
		case "h" : v = 8; break;
		case "g" : v = 10; break;
		case "c" : v = 12; break;
		default  : v = 0;
	}
	if (l > 2) v += 2;
	return v;
}

function getReducedSpeed(n) { // n = number in squares -- returns squares
	var r = 1;
	if (n >= 3 && n < 4) r = 2;
	else if (n >= 4 && n < 6) r = 3;
	else if (n >= 6 && n < 8) r = 4;
	else if (n >= 8 && n < 10) r = 6;
	else if (n >= 10 && n < 12) r = 7;
	else if (n >= 12 && n < 14) r = 8;
	else if (n >= 14 && n < 16) r = 10;
	else if (n >= 16 && n < 18) r = 11;
	else if (n >= 18 && n < 20) r = 12;
	else if (n >= 20 && n < 22) r = 14;
	else r = Math.floor(n * 0.75);
	return r;
}

function setSpeed(e, h) { // e = html element, h = creature hash
	var m, n, c, p, q, r, t, u = getLocaleLengthUnit(), s = "", v = 0, w = 0;
	if (typeof(h.speed) === "number") n = h.speed;
	else if (typeof(h.speed) === "string") {
		m = h.speed;
		n = parseFloat(m);
		p = m.substr(m.length - 1, 1);
		if (p == "f") n = convertFeetToSquares(n);
		else if (p == "m") n = convertMetersToSquares(n);
	} else n = getSpeedBySizeAndLimbs(h.size, h.limbs);
	if (hasSpecialAbility(h.sab, "barbarian_fast_movement")) v += 2;
	if (hasSpecialAbility(h.sab, "monk_fast_movement") && hasKey(h.cls, "monk")) {
		w += (h.cls.monk / 3).toInt() * 2;
	}
	c = u == "unit_m" ? convertSquaresToMeters(n + v + w) : convertSquaresToFeet(n + v + w);
	if (typeof(h.eqp) !== "undefined" && typeof(h.eqp.arm) !== "undefined") {
		var arm_name = getItemName(h.eqp.arm).toLowerCase();
		var arm_type = getItemType(h.eqp.arm);
		if (arm_type == "hvy_arm") v = 0;
		if (arm_type == "lgt_arm" || arm_type == "med_arm" || arm_type == "hvy_arm") w = 0;
		if (arm_type == "med_arm" || arm_type == "hvy_arm") {
			r = getReducedSpeed(n);
			t = r > 1 ? $lng.squares : $lng.square;
			q = u == "unit_m" ? convertSquaresToMeters(r + v + w) : convertSquaresToFeet(r + v + w);
			r = Math.floor(r);
			s = q + "&nbsp;" + $lng[u] + " " + $lng.speed_in + " " + arm_name + " " + "(" + (r + v + w) + " " + t + ") ; " + $lng.speed_base + " " + c + "&nbsp;" + $lng[u];
		}
	}
	if (s == "") {
		t = n > 1 ? $lng.squares : $lng.square;
		n = Math.floor(n);
		s = c + "&nbsp;" + $lng[u] + " " + "(" + (n + v + w) + " " + t + ")";
	}
	e.innerHTML = s;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Armor Class
// -----------------------------------------------------------------------------
// =============================================================================

function getArmorClassModifierBySize(s) { // s = size abbr 1-char -- returns integer
	var s = s.toLowerCase();
	switch(s) {
		case "f" : return 8;
		case "d" : return 4;
		case "t" : return 2;
		case "s" : return 1;
		case "m" : return 0;
		case "l" : return -1;
		case "h" : return -2;
		case "g" : return -4;
		case "c" : return -8;
	} return 0;
}

function getAttackModifierBySize(s) {
	return getArmorClassModifierBySize(s);
}

function getItemName(itm) { // itm = equip item
	if (typeof(itm) !== "undefined" && typeof(itm.name) !== "undefined") {
		return itm.name;
	} return $lng.itm_item;
}

function getItemType(itm) { // itm = equip item
	if (typeof(itm) !== "undefined" && typeof(itm.type) !== "undefined") {
		return itm.type;
	} return null;
}

function getItemSkillCheckPenalty(itm) { // itm = equip item
	if (typeof(itm) !== "undefined" && typeof(itm.prop) !== "undefined") {
		return itm.prop.sk_chk || 0;
	} return 0;
}

function getItemArmorClassModifier(itm) { // itm = equip item
	if (typeof(itm) !== "undefined" && typeof(itm.prop) !== "undefined") {
		var base = itm.prop.ac_mod || 0;
		var enhance = itm.prop.enhance || 0;
		return base + enhance;
	} return 0;
}

function getItemMaximumDexterityBonus(itm, dex) { // itm = equip item
	if (typeof(itm) !== "undefined" && typeof(itm.prop) !== "undefined") {
		var max = itm.prop.max_dex || 0;
		if (dex > max) return max;
	} return 0;
}

function setArmorClass(e, h) { // e = html element, h = creature hash
	function appendString(k, l) {
		if (k != 0) {
			if (t > 0) s += ", ";
			s += convertToSignInt(k) + " " + l;
			t++;
		}
	}
	var size = getArmorClassModifierBySize(h.size);
	var dex = getAbilityModifier(h.ab, "dex");
	var dodge = h.ac_dod || 0;
	var natural = h.ac_nat || 0;
	var deflect = h.ac_def || 0;
	var armor = 0;
	var shield = 0;
	var armor_dex = 0;
	var shield_dex = 0;
	var max_dex = 0;
	var armor_name = $lng.ac_armor;
	var shield_name = $lng.ac_shield;
	var base, touch, flat_footed, normal;
	var s = "", t = 0;
	if (typeof(h.eqp) !== "undefined") {
		armor = getItemArmorClassModifier(h.eqp.arm);
		shield = getItemArmorClassModifier(h.eqp.shd);
		armor_dex = getItemMaximumDexterityBonus(h.eqp.arm, dex);
		shield_dex = getItemMaximumDexterityBonus(h.eqp.shd, dex);
		if (armor_dex > 0 && shield_dex > 0) max_dex = Math.min(armor_dex, shield_dex);
		else if (armor_dex > 0) max_dex = armor_dex;
		else if (shield_dex > 0) max_dex = shield_dex;
		armor_name = getItemName(h.eqp.arm).toLowerCase();
		shield_name = getItemName(h.eqp.shd).toLowerCase();
	}
	base = 10 + size + deflect;
	touch = base + dex + dodge;
	flat_footed = base + natural + armor + shield;
	normal = touch + flat_footed - base - max_dex;
	if (dex < 0) flat_footed += dex;
	if (dodge < 0) flat_footed += dodge;
	if (max_dex > 0) dex -= max_dex;
	appendString(size, $lng.ac_size);
	appendString(dex, $lng.ab_dex_abbr + (max_dex > 0 ? "*" : ""));
	appendString(dodge, $lng.ac_dodge);
	appendString(deflect, $lng.ac_deflect);
	appendString(natural, $lng.ac_natural);
	appendString(armor, armor_name);
	appendString(shield, shield_name);
	if (t > 0) s = "(" + s + ")";
	e.innerHTML = normal + " " + s + ", " + $lng.ac_touch + " " + touch + ", " + $lng.ac_flat_footed + " " + flat_footed;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Base Attack / Grapple
// -----------------------------------------------------------------------------
// =============================================================================

function getBaseAttackMultiplierByClass(cls) {
	switch(cls) {
		case "fey" :
		case "undead" :
		case "sorcerer" :
		case "wizard" :
		case "adept" :
			return 0.5;
		case "aberration" :
		case "animal" :
		case "construct" :
		case "elemental" :
		case "giant" :
		case "humanoid" :
		case "ooze" :
		case "plant" :
		case "vermin" :
		case "bard" :
		case "cleric" :
		case "druid" :
		case "monk" :
		case "rogue" :
		case "aristocrat" :
		case "commoner" :
		case "expert" :
			return 0.75;
		case "dragon" :
		case "magical_beast" :
		case "monstrous_humanoid" :
		case "outsider" :
		case "barbarian" :
		case "fighter" :
		case "paladin" :
		case "ranger" :
		case "warrior" :
			return 1.0;
		default :
			return $cfg.cre.def_atk_mul;
	}
}

function getGrappleModifierBySize(s) { // s = size abbr 1-char -- returns integer
	s = s.toLowerCase();
	switch(s) {
		case "f" : return -16;
		case "d" : return -12;
		case "t" : return -8;
		case "s" : return -4;
		case "m" : return 0;
		case "l" : return 4;
		case "h" : return 8;
		case "g" : return 12;
		case "c" : return 16;
	} return 0;
}

function getHideModifierBySize(s) { // s = size abbr 1-char -- returns integer
	return getGrappleModifierBySize(s) * -1;
}

function setBaseAttackGrapple(e, h) { // e = html element, h = creature hash
	var bab = h.bab;
	var grap = h.grap;
	if (typeof(bab) === "undefined") {
		bab = 0;
		var hd = h.hd || 0;
		var cls = h.cls, k;
		for (var k in cls) if (cls[k] > 0) bab += Math.floor(getBaseAttackMultiplierByClass(k) * cls[k]);
	}
	if (typeof(grap) === "undefined") grap = bab + getGrappleModifierBySize(h.size) + getAbilityModifier(h.ab, "str");
	if (hasFeat(h.ft, "improved_grapple")) grap += 4;

	// TEMP : Update monster hash
	h.bab = bab;
	h.grap = bab;

	e.innerHTML = convertToSignInt(bab) + "/" + convertToSignInt(grap);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Attack
// -----------------------------------------------------------------------------
// =============================================================================

function getWeaponRangeType(w) { // w = weapon
	var type = typeof(w.type) !== "undefined" ? w.type.toLowerCase() : false;
	switch(type) {
		case "thr_wpn" :
		case "prj_wpn" : return "range";
		case "lgt_wpn" :
		case "1hd_wpn" :
		case "2hd_wpn" :
		default        : return "melee";
	}
}
// -----------------------------------------------------------------------------

function getWeaponCriticalRange(w) { // w = weapon -- returns int
	return typeof(w.prop) !== "undefined" ? w.prop.cri_rng : $cfg.wpn.cri_rng_def;
}

// -----------------------------------------------------------------------------

function getWeaponCriticalMultiplier(w) { // w = weapon -- returns int
	return typeof(w.prop) !== "undefined" ? w.prop.cri_mul : $cfg.wpn.cri_mul_def;
}

// -----------------------------------------------------------------------------

function getWeaponCritical(h, w) { // h = cre hash, w = weapon -- returns string
	var s = "";
	var t = w.tag || "";
	var cri_rng = getWeaponCriticalRange(w);
	var cri_mul = getWeaponCriticalMultiplier(w);
	if (hasFeat(h.ft, "improved_critical", t)) cri_rng = 21 - (21 - cri_rng) * 2;
	if (cri_rng > 0 && cri_rng < 20) s += cri_rng + "-20";
	if (cri_mul > 2) s += (s != "" ? "/" : "") + "x" + cri_mul;
	return s;
}

// -----------------------------------------------------------------------------

function getNaturalWeaponDamageBySize(t, s) { // t = weapon tag, s = cre size -- returns string
	var s = s.toLowerCase(), t = typeof(t) === "string" ? t.toLowerCase() : "";
	var a = t == "claw" || t == "sting";
	var b = a || t == "horn" || t == "tail";
	var c = a || t == "slam" || t == "tentacle";
	switch(s) {
		case "f" : return t == "bite" ? "1" : "0";
		case "d" : return t == "bite" ? "1d2" : "1";
		case "t" :
			if (t == "bite") return "1d3";
			else if (b) return "1d2";
			else return "1";
		case "s" : return c ? "1d3" : "1d4";
		case "m" : return c ? "1d4" : "1d6";
		case "l" : return c ? "1d6" : "1d8";
		case "h" : return c ? "1d8" : "2d6";
		case "g" : return c ? "2d6" : "2d8";
		case "c" : return c ? "2d8" : "4d6";
		default  : return "0";
	}
}

// -----------------------------------------------------------------------------

function getUnarmedStrikeDamageBySize(s) { // s = size
	var s = s.toLowerCase();
	switch(s) {
		case "f" :
		case "d" : return "0";
		case "t" : return "1";
		case "s" : return "1d2";
		case "m" : return "1d3";
		case "l" : return "1d4";
		case "h" : return "1d6";
		case "g" : return "1d8";
		case "c" : return "2d6";
		default  : return "0";
	}
}

// -----------------------------------------------------------------------------

function getEquippedWeaponAttackModifier(h, w) { // h = cre hash, w = weapon
	var type = getWeaponRangeType(w);
	var tag = w.tag || "";
	var atk = h.bab || 0;
	// 1. Add size modifier
	atk += getAttackModifierBySize(h.size);
	// 2. Add ability modifier
	atk += getAbilityModifier(h.ab, (type == "range" || (hasFeat(h.ft, "weapon_finesse") && getItemType(w) == "lgt_wpn") ? "dex" : "str"));
	// 3. Add feats modifier
	if (hasFeat(h.ft, "weapon_focus", tag)) atk += 1;
	if (hasFeat(h.ft, "greater_weapon_focus", tag)) atk += 1;
	// 4. Add prop modifiers
	if (typeof(w.prop) !== "undefined") {
		atk += w.prop.enhance || 0;
		atk += w.prop.masterwork ? 1 : 0;
	}
	return atk;
}

// -----------------------------------------------------------------------------

function hasShieldEquipped(h) { // h = cre hash
	return typeof(h.eqp.shd) !== "undefined";
}

// -----------------------------------------------------------------------------

function getEquippedWeaponDamageModifier(h, w, m) { // h = cre hash, w = weapon, m = damage modifier
	var type = w.type || "";
	var tag = w.tag || "";
	var dmg = 0;
	var mod = m || 1.0;
	// 1. Calc strength multiplier
	if (type == "2hd_wpn" || (type == "1hd_wpn" && !hasShieldEquipped(h))) mod = 1.5;
	// 2. Add ability modifier
	if (type != "prj_wpn") dmg += Math.floor(getAbilityModifier(h.ab, "str") * mod);
	// 3. Add feats modifier
	var a = h.ft || [], l = a.length, i = 0;
	for (i; i < l; i++) {
		if (a[i].id == "weapon_specialization_" + tag) dmg += 2;
		if (a[i].id == "greater_weapon_specialization_" + tag) dmg += 2;
	}
	// 4. Add prop modifiers
	if (typeof(w.prop) !== "undefined") {
		dmg += w.prop.enhance || 0;
	} return dmg;
}

// -----------------------------------------------------------------------------

function getEquippedWeaponDamageString(h, w, n, m) { // h = cre hash, w = weapon, n = is natural weapon ?, m = is only natural weapon ?
	var dmg, mod;
	// A. Get dmg
	if (w == "") dmg = getUnarmedStrikeDamageBySize(h.size)
	else if (n) dmg = getNaturalWeaponDamageBySize(w.tag, h.size)
	else if (isSetObj(w.prop) && isSetStr(w.prop.dmg)) dmg = w.prop.dmg;
	else dmg = $cfg.wpn.dmg_def
	// B. Calc dmg mod
	mod = getEquippedWeaponDamageModifier(h, w, m);
	return dmg + (mod != 0 ? convertToSignInt(mod) : "");
}

// -----------------------------------------------------------------------------

function getNumberOfAttacksPerRound(h) { // h = cre hash
	return Math.min(Math.floor((Math.max((h.bab || 0) - 1, 0)) / 5) + 1, 4);
}

// -----------------------------------------------------------------------------

function getEquippedWeaponAttacks(h, w, f, n, b) { // h = cre hash, w = weapon, f = full attack ?, n = natural weap ?, b = secondary weap ?
	var atk_mod = getEquippedWeaponAttackModifier(h, w);
	var atk_num = getNumberOfAttacksPerRound(h);
	var s = "", j = 0, n = 0;
	if (!n && f && atk_num > 1 && w.type !== "thr_wpn") {
		for (j; j < atk_num; j++) {
			s += convertToSignInt(atk_mod - 5 * j);
			if (j + 1 < atk_num) s += "/";
		}
	} else {
		if (f && n && b) n = hasFeat(h.ft, "multiattack") ? -2 : -5;
		s = convertToSignInt(atk_mod + n);
	} return s;
}

// -----------------------------------------------------------------------------

function getWeaponToHitEffects(p) { // p = weapon property list -- returns string
	var a = p.to_hit, s = "";
	if (typeof(a) !== "undefined") {
		if (typeof(a) === "string") a = [a];
		var l = a.length, i = 0, k, n, m;
		for (i; i < l; i++) {
			k = a[i];
			s += " " + $lng.wpn_plus + " ";
			if (!isNaN(k.substr(0,1))) {
				n = k.split("_");
				k = k.replace(n[0] + "_", "");
				s += n[0] + " ";
			}
			s += $lng["to_hit_" + k];
		}
	} return s;
}

// -----------------------------------------------------------------------------

function getAttacks(h, q, f, n) { // h = cre hash, q = equipped weapon list, f = full attack ?, n = natural weapons, u = unarmed ? -- returns string
	var f = f || false;
	var n = n || false;
	var a = typeof(q) === "string" ? [q] : q, l = a.length, i = 0, j = 0, t = 0, s = "";
	var type;
	var atk = "";
	var dmg;
	var crit;
	var to_hit = "";
	var name;
	var ope;
	var w, m;
	for (i; i < l; i++) {
		// Define vars
		w = a[i];
		// A. Get type
		type = $lng["wpn_" + getWeaponRangeType(w) + "_type"];
		// B. Get atk
		atk = getEquippedWeaponAttacks(h, w, f, n, i > 0);
		// C. Get dmg
		if (n && l == 1 && w.type != "mul_wpn") m = 1.5; // NOTE : one and half damage for all natural weapons except multiple ones (like 2 claws or 2 slams or 4 tentacles)
		else if (n && i > 0) m = 0.5;
		dmg = getEquippedWeaponDamageString(h, w, n, m);
		// D. Get crit
		crit = getWeaponCritical(h, w);
		if (crit.length > 0)  crit = "/" + crit;
		// E. Get to hit effects
		if (typeof(w.prop) !== "undefined") to_hit = getWeaponToHitEffects(w.prop);
		// F. Get weapon name
		name = w == "" ? $lng.wpn_unarmed_strike : getItemName(w).toLowerCase();
		// G. Define operator
		ope = f && n ? (i + 1 == l ? " " + $lng.wpn_and : ",") : " ; " + $lng.wpn_or;
		// H. Append string
		s += (i > 0 ? ope + " " : "") + name + " (" + atk + " " + type + ", " + dmg + crit + to_hit + ")";
	} return s;
}

// -----------------------------------------------------------------------------

function setAttack(e, h, f) { // e = html element, h = creature hash, f = full attack?
	var f = f || false;
	var q = h.eqp || null;
	var s = "";
	if (q != null) {
		// 1. Manufactured weapons
		if (typeof(q.wpn) !== "undefined") s += getAttacks(h, q.wpn, f);
		// 2. Natural weapons
		if (typeof(q.nat_wpn) !== "undefined") {
			if (s != "") s += " ; " + $lng["wpn_or"] + " ";
			s += getAttacks(h, q.nat_wpn, f, true);
		}
	}
	// 3. Unarmed strike
	if (s == "") s = getAttacks(h, "", f, false);
	e.innerHTML = s;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Space and Reach
// -----------------------------------------------------------------------------
// =============================================================================

function getSpaceBySize(s) { // s = size -- returns squares
	var s = s.toLowerCase();
	switch(s) {
		case "f" : return 0.1;
		case "d" : return 0.2;
		case "t" : return 0.5;
		case "s" : return 1;
		case "m" : return 1;
		case "l" : return 2;
		case "h" : return 3;
		case "g" : return 4;
		case "c" : return 6; // min
		default  : return 0;
	}
}

function getReachBySize(s, b) { // s = size -- returns squares, b = longer than high ?
	var s = s.toLowerCase(), b = b || false;
	switch(s) {
		case "f" : return 0;
		case "d" : return 0;
		case "t" : return 0;
		case "s" : return b ? 0 : 1;
		case "m" : return 1;
		case "l" : return b ? 1 : 2;
		case "h" : return b ? 2 : 3;
		case "g" : return b ? 3 : 4;
		case "c" : return b ? 4 : 6; // min
		default  : return 0;
	}
}

function setSpaceAndReach(e, h) { // e = html element, h = creature hash
	var limbs = h.limbs || 2;
	var space = getSquaresValue(h.space);
	var reach = getSquaresValue(h.reach);
	if (space == null) space = getSpaceBySize(h.size);
	if (reach == null) reach = getReachBySize(h.size, limbs > 2);
	e.innerHTML = convertSquaresToLocale(space) + "/" + convertSquaresToLocale(reach);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Special Abilities
// -----------------------------------------------------------------------------
// =============================================================================

/**
	NOTE
	The whole list is parsed ; no return or continue statement breaks the process.
	By default, each item is checked in order to handle multiple occurences case.
	To stop the function process at the first occurence matched, use the b param.
	This function is to be used with caution.
*/

function hasPerk(a, k, p, b, c) { // a = perk list, k =  perk id, p = perk prop, b = first match only ?, c = check in arr and obj props ? -- returns bool
	var p = p || null, b = b || false, c = c || false;
	if (typeof(a) !== "undefined") {
		var i = 0, l = a.length;
		for (i; i < l; i++) {
			if (a[i] == k || a[i].id == k) {
				if (p == null) return true;
				else {
					var v = a[i].prop, n;
					if (isSetStr(v) && p == v) return true;
					else if (c && isSetArr(v)) for (n in v) if (v[n] == p) return true;
					else if (c && isSetObj(v)) for (n in v) if (n == p) return true;
				} if (b) return false;
			}
		}
	}
}

function hasSpecialAbility(a, k, p, b) { // a = sab list, k =  sab id, p = sab prop, b = first match only ? -- returns bool
	return hasPerk(a, k, p, b, true);
}

function hasFeat(a, k, p) { // a = feat list, k =  feat id, p = feat prop -- returns bool
	return hasPerk(a, k, p);
}

function getSpecialProperty(n, b, z) { // n = sab obj, b = ab list, z = cre size -- returns array
	var k = n.id;
	var v = n.prop;
	var p = ""; // prefix
	var u = undefined; // name
	var f = ""; // suffix
	function affectSpecialProperty(prop, lng_core, lng_prop, is_adpos, use_to) {
		if (lng_prop == null) lng_prop = lng_core;
		var t;
		if (isSetStr(prop)) {
			t = lng_prop[(use_to ? "to_" : "") + prop] || null;
			if (isSetStr(t)) {
				u = lng_core.key;
				is_adpos && isAdjectivePrepositive() ? p = t + " " : f = " " + t;
			}
		} else if (isSetArr(prop)) {
			var a = [], i = 0, j = 0, c = " ", n;
			// 1. Setup a new array with valid properties only
			for (n in prop) if (isSetStr(lng_prop[prop[n]])) a.push(prop[n]);
			// 2. Register new array length
			var l = a.length
			// 3. Format remaining properties from array
			for (i; i < l; i++) {
				t = lng_prop[(use_to && (i == 0 || !isPrepositionOmittable()) ? "to_" : "") + a[i]] || null;
				if (isSetStr(t)) {
					if (is_adpos && isAdjectivePrepositive()) {
						if (j > 0) t = t.toLowerCase();
						if (i == l - 2) c = lng_core.last;
						else c = l > 1 && i < 1 ? lng_core.more : " ";
						p += t + c;
					} else {
						if (l > 1 && i == l - 1) c = lng_core.last;
						else c = j > 0 ? lng_core.more : " ";
						f += c + t;
					} j++;
				}
			} if (j > 0) u = lng_core.key;
		}
	}
	function getSpecialPropertyDamageBonus(k, m) {
		switch(k) {
			case "rake" : return Math.floor(m / 2);
			case "rend" :
			case "trample" :
			case "powerful_charge" : return Math.floor(m * 1.5);
			case "constrict" :
			default : return m;
		}
	}
	if (k == "damage_reduction" || k == "barbarian_damage_reduction") {
		if (typeof(v) !== "undefined") {
			var dr_val = $def.dr_val;
			var dr_off = "";
			var dr_txt = "";
			function switchDamageReductionValue(x) {
				if (isSetInt(x)) dr_val = x;
				else if (isSetStr(x)) dr_off = $lng.dr[x] || "";
			}
			if (isSetInt(v) || isSetStr(v)) switchDamageReductionValue(v);
			else if (isSetArr(v)) {
				switchDamageReductionValue(v[0]);
				if (v.length >= 2) {
					var i = 1, j = isSetInt(v[0]) ? 0 : 1, l = v.length;
					for (i; i < l; i++) {
						dr_txt = $lng.dr[v[i]];
						if (isSetStr(dr_txt)) {
							if (j > 0) dr_off += " " + $lng.dr.and + " ";
							dr_off += dr_txt;
							j++;
						} else wrn("Invalid type '" + v[i] + "' for Damage Reduction ; property not displayed"); // DEBUG
					}
				}
			} else wrn("Found error in Damage Reduction ; default values used."); // DEBUG
			if (dr_off == "") dr_off = $def.dr_off;
			f = $lng.sab_pre + dr_val + "/" + dr_off + $lng.sab_suf;
		}
	} else if (k == "resistance_to_energy") {
		var enr_val = 0;
		var enr_txt = "";
		var enr_rnm = false;
		if (isSetStr(v)) {
			enr_rnm = true;
			enr_txt = $lng.enr["to_" + v];
			if (isSetStr(enr_txt)) f = enr_txt;
		} else if (isSetInt(v)) {
			v = {"fire" : v, "cold" : v, "electricity" : v, "acid" : v, "sonic" : v};
		} if (isSetObj(v)) {
			var n, i = 0, l = getLen(v) - 1;
			for (n in v) {
				enr_val = v[n];
				enr_txt = $lng.enr[(isPrepositionOmittable() && i > 0 ? "" : "to_") + n];
				if (isSetStr(enr_txt) && isSetInt(enr_val)) {
					if (i > 0) f += i == l ? " " + $lng.enr.and + " " : ", ";
					f += " " + enr_txt + " "+ $lng.sab_pre + v[n] + $lng.sab_suf; i++;
				} else wrn("Invalid type '" + n + "' for Energy Resistance ; property not displayed"); // DEBUG
			} if (i > 0) enr_rnm = true;
		} if (enr_rnm) u = $lng.enr.key;
	} else if (k == "turn_resistance") {
		if (isSetInt(v)) {
			v = $lng.sab_pre + convertToSignInt(v) + $lng.sab_suf;
			isAdjectivePrepositive() ? p = v : f =  v;
		}
	} else if (k == "spell_resistance" || k == "regeneration" || k == "fast_healing") {
		if (isSetInt(v)) f = $lng.sab_pre + v + $lng.sab_suf;
	} else if (k == "constrict" || k == "rake" || k == "rend" || k == "trample" || k == "powerful_charge") {
		var x, q, r, m = 0;
		if (isSetStr(v) && isRegularRoll(v)) {
			q = v.match(/([1-9]\d*d[1-9]\d*)([\+-]\d+)?/i);
			r = q[1];
			m = parseInt(q[2]) || 0;
		} else r = getNaturalWeaponDamageBySize(null, z);
		x = getSpecialPropertyDamageBonus(k, getAbilityModifier(b, "str")) + m;
		f = r + (x == 0 ? "" : (x >= 0 ? "+" + x : x));
	} else if (k == "darkvision" || k == "blindsense" || k == "blindsight" || k == "telepathy" || k == "tremorsense" || k == "slow_fall") {
		if (isSetNum(v) || isSetStr(v)) {
			f = $lng.sab_pre + convertSquaresToLocale(getSquaresValue(v)) + $lng.sab_suf;
		}
	} else if (k == "gaze_attack") {
		affectSpecialProperty(v, $lng.gze, null, true, false);
	} else if (k == "immunities") {
		affectSpecialProperty(v, $lng.imn, null, false, false);
	} else if (k == "vulnerability_to_energy") {
		affectSpecialProperty(v, $lng.vnr, $lng.enr, false, true);
	} else if (k == "trap_sense" || k == "inspire_courage") {
		if (isSetInt(v)) f = $lng.sab_pre + convertToSignInt(v) + $lng.sab_suf;
	} else if (k == "barbarian_rage" || k == "smite_evil" || k == "wild_shape" || k == "wild_shape_elemental" || k == "remove_disease") {
		var t = k == "remove_disease" ? "sab_per_week" : "sab_per_day";
		if (isSetInt(v)) f = "(" + $lng.sab_per_pre + v + $lng.sab_per_suf + "/" + $lng[t] + ")";
	} else if (k == "favored_enemy") {
		if (isSetInt(v)) p = convertToNth(v);
	} else if (k == "sneak_attack") {
		if (isSetInt(v)) f = $lng.sab_pre + "+" + v + "d6" + $lng.sab_suf;
	} else if (k == "school_specialization") {
		if (isSetStr(v)) {
			var t = $lng.spsch[v] || null;
			if (isSetStr(t)) f = "(" + t.toLowerCase() + ")";
		}
	} return [p, u, f];
}

function getFeatProperty(n) { // n = feat obj -- returns string
	var k = n.id;
	var v = n.prop;
	var s = null;
	function affectFeatProperty(l, q, p) { // l = lng arr, q = prop type, p = lng prefix
		var t, q = q || "Feat property", p = p || "";
		if (isSetArr(v)) {
			wrn("Feat property '" + v.splice(1, v.length) + "' for '" + k +"' is invalid ; multiple properties are not allowed that way");
			v = v[0];
		}
		if (isSetStr(v)) {
			t = l[p + v];
			if (k == "skill_focus") t = t.replace("(", "[").replace(")", "]"); // WARNING : format exception
			if (isSetStr(t)) s = "(" + t.toLowerCase() + ")";
			else wrn(q + " name '" + v + "' is undefined for feat '" + k + "'");
		}
	}
	if (k == "skill_focus") {
		affectFeatProperty($lng, "Skill", "sk_");
	} else if (k == "martial_weapon_proficiency") {
		affectFeatProperty($lng.mwp, "Martial weapon");
	} else if (k == "exotic_weapon_proficiency") {
		affectFeatProperty($lng.ewp, "Exotic weapon");
	} else if (k == "weapon_focus" || k == "weapon_specialization" || k == "greater_weapon_focus" || k == "greater_weapon_specialization" || k == "improved_critical") {
		affectFeatProperty($lng.awp, "Weapon");
	} else if (k == "rapid_reload") {
		affectFeatProperty($lng.rwp, "Reloading Weapon");
	} else if (k == "spell_mastery") {
		// TODO : not implemented yet
	} else if (k == "spell_focus" || k == "greater_spell_focus") {
		affectFeatProperty($lng.spsch, "Spell school");
	} return s;
}

function allowSpecialProperty(k) { // k = sab id -- returns bool
	switch(k) {
		case "damage_reduction" : // arr (int + str | int + arr) >> DR string (e.g. [10, "good"] => "10/Bien")
		case "barbarian_damage_reduction" : // [Barbarian]
		case "resistance_to_energy" : // arr (str + int) >> energy resistance string (e.g. ["fire", 10] => "Feu 10")
		case "turn_resistance" : // int >> prepositive signed integer string (e.g. 2 => "+2")
		case "spell_resistance" : // int >> unsigned integer string (e.g. 14 => "14")
		case "regeneration" :
		case "fast_healing" :
		case "constrict" : // str >> variable damage roll string (e.g. "1d4" => "1d4+4")
		case "rake" :
		case "rend" :
		case "trample" :
		case "powerful_charge" :
		case "darkvision" : // str >> length unit string (e.g. "60f" => "18 m")
		case "blindsense" :
		case "blindsight" :
		case "telepathy" :
		case "tremorsense" :
		case "slow_fall" : // [Monk]
		case "gaze_attack" : // str >> attack type string (e.g. "paralysis" => "Regard de paralysie")
		case "immunities" : // str >> immunity to condition string (e.g. "poison" => "Immunité contre le poison")
		case "vulnerability_to_energy" : //  // str => vulnerability string (e.g. "fire" => "Vulnérabilité au feu")
		case "trap_sense" : // [Barbarian/Rogue] int >> postpositive signed integer string (e.g. 2 => "+2")
		case "inspire_courage" : // [Bard]
		case "barbarian_rage" : // [Barbarian] int >> per period integer string (e.g. 3 => "3/jour")
		case "smite_evil" : // [Paladin]
		case "wild_shape" : // [Druid]
		case "wild_shape_elemental" : // Druid
		case "remove_disease" : // [Paladin]
		case "favored_enemy" : // [Ranger] int >> prepositive nth integer string (e.g. 3 => "3rd")
		case "sneak_attack" : // [Rogue] int >> signed fixed six faced damage roll string (e.g. 6 => "+6d6")
		case "school_specialization" : // [Wizard] str >> magic school string (e.g. 6 => "évocation")
			return true;
		default :
			return false;
	}
}

function allowFeatProperty(k) { // k = feat id -- returns bool
	switch(k) {
		case "skill_focus" : // skill
		case "martial_weapon_proficiency" : // martial_weapon
		case "exotic_weapon_proficiency" : // exotic_weapon
		case "weapon_focus" : // weapon
		case "weapon_specialization" : // weapon
		case "greater_weapon_focus" : // weapon
		case "greater_weapon_specialization" : // weapon
		case "improved_critical" : // weapon
		case "rapid_reload" : // projectile_weapon
		case "spell_mastery" : // spell_list
		case "spell_focus" : // spell_school
		case "greater_spell_focus" : // spell_school
			return true;
		default :
			return false;
	}
}

function setSpecialAbilities(e, a, b, z, c, d) { // e = html element, a = cre sab list, b = cre ab list, z = cre size, c = lowercase ?, d = usable only ?
	var c = c || false;
	if (typeof(d) !== "boolean") d = null;
	if (isSetArr(a)) {
		e.innerHTML = "";
		sortByCharAsc(a, "name");
		var l = a.length, i = 0, j = 0;
		var p, u, f, s, g, q;
		for (i; i < l; i++) {
			u = a[i].name;
			q = a[i].atk || false;
			if ((d == true && q == false) || (d == false && q == true)) continue;
			if (isSetStr(u)) {
				p = null;
				f = null;
				s = document.createElement("span");
				if (allowFeatProperty(a[i].id)) f = getFeatProperty(a[i]) || null;
				else if (allowSpecialProperty(a[i].id)) {
					g = getSpecialProperty(a[i], b, z);
					p = g[0] || null;
					u = g[1] || u;
					f = g[2] || null;
				}
				if (isSetStr(a[i].desc)) {
					s.classList.add("link");
					s.dataset.desc = a[i].desc;
					s.addEventListener("click", function(e) {toggleInfobox(e)});
				}
				if (j > 0) e.appendChild(document.createTextNode(", "));
				if (p != null) e.appendChild(document.createTextNode((j > 0 ? p.toLowerCase() : p) + " "));
				s.innerHTML = c ? (p == "" && j == 0 && isCapitalLetterPermissive() ? u.capitalize() : u.toLowerCase()) : u;
				e.appendChild(s);
				if (f != null) e.appendChild(document.createTextNode(" " + f));
				j++;
			} else {
				wrn("Missing name for special ability '" + a[i].id + "' ; feature not displayed");
			}
		}
	} if (e.innerHTML == "") e.innerHTML = $chr[$cfg.chr].long_dash;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Special Attacks
// -----------------------------------------------------------------------------
// =============================================================================

function setSpecialAttacks(e, h) { // e = html element, h = creature hash
	setSpecialAbilities(e, h.sab, h.ab, h.size, true, true);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Special Qualities
// -----------------------------------------------------------------------------
// =============================================================================

function setSpecialQualities(e, h) { // e = html element, h = creature hash
	setSpecialAbilities(e, h.sab, h.ab, h.size, true, false);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Saves
// -----------------------------------------------------------------------------
// =============================================================================

function getGoodSavesByClass(cls) {
	switch(cls) {
		case "dragon" :
		case "outsider" :
		case "monk" :
			return [1,1,1];
		case "animal" :
		case "elemental" : // TODO : Air, Fire = Ref AND Water, Earth = Fort => need to check subtype, if none then apply good to both
		case "magical_beast" :
		case "ranger" :
			return [1,1,0];
		case "fey" :
		case "monstrous_humanoid" :
		case "bard" :
			return [0,1,1];
		case "cleric" :
		case "druid" :
			return [1,0,1];
		case "giant" :
		case "plant" :
		case "vermin" :
		case "barbarian" :
		case "fighter" :
		case "paladin" :
		case "warrior" :
			return [1,0,0];
		case "humanoid" :
		case "rogue" :
			return [0,1,0];
		case "aberration" :
		case "undead" :
		case "sorcerer" :
		case "wizard" :
		case "adept" :
		case "aristocrat" :
		case "expert" :
			return [0,0,1];
		case "construct" :
		case "ooze" :
		case "commoner" :
		default :
			return [0,0,0];
	}
}

function getBaseSaves(a, b, n) { // a = save result array, b = good saves array, n = levels -- returns ary
	var l = b.length, i = 0, m;
	for (i; i < l; i++) {
		m = b[i] == 1 ? Math.floor(n / 2 + 2) : Math.floor(n / 3);
		if (m > a[i]) a[i] = m;
	} return a;
}

function getCreatureSaves(h) { // h = cre hash -- returns ary
	var hd = h.hd, a = h.cls, ft = h.ft, sv = [0,0,0];
	// 1. Get good saves
	if (typeof(a) === "object") {
		for (var k in a) if (a[k] > 0) sv = getBaseSaves(sv, getGoodSavesByClass(k), a[k]);
	}
	// 2. Apply ab mod
	sv[0] += getAbilityModifier(h.ab, "con");
	sv[1] += getAbilityModifier(h.ab, "dex");
	sv[2] += getAbilityModifier(h.ab, "wis");
	// 3. Apply ft mod
	if (hasFeat(ft, "great_fortitude")) sv[0] += 2;
	if (hasFeat(ft, "lightning_reflexes")) sv[1] += 2;
	if (hasFeat(ft, "iron_will")) sv[2] += 2;
	// 4. Return saves
	return sv;
}

function setSaves(e, h) { // e = html element, h = creature hash
	var sv = h.sv, fort, refl, will, s;
	if (typeof(sv) !== "object" || sv.length != 3) sv = getCreatureSaves(h);
	fort = $lng.sv_fort_abbr + " " + convertToSignInt(sv[0]);
	refl = $lng.sv_refl_abbr + " " + convertToSignInt(sv[1]);
	will = $lng.sv_will_abbr + " " + convertToSignInt(sv[2]);
	s = $cfg.lng == "fr" ? refl + ", " + fort + ", " : fort + ", " + refl + ", ";
	e.innerHTML = s + will;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Abilities
// -----------------------------------------------------------------------------
// =============================================================================

function getAbilityModifier(a, k, b) { // a = ability array, k = ability key abrev 3-char (str, dex, etc.) -- returns expected : int
	var a = a, n = 0;
	if (typeof(a) !== "undefined") {
		var s = k.substr(0, 3).toLowerCase(), b = b || false, m = -1;
		switch(s) {
			case "str" : m = 0; break;
			case "dex" : m = 1; break;
			case "con" : m = 2; break;
			case "int" : m = 3; break;
			case "wis" : m = 4; break;
			case "cha" : m = 5; break;
		}
		if (m >= 0) n = Math.floor((a[m] - 10) / 2);
		if (b) n = Math.max(0, n);
	} return n;
}

function getAbilityBonus(a, k) {
	return getAbilityModifier(a, k, true);
}

function getKeyAbilityByClass(cls) { // UNUSED for now
	switch(cls) {
		// Strength
		case "barbarian" :
		case "fighter" :
		case "paladin" :
		case "warrior" :
			return "str";
		// Dexterity
		case "ranger" :
		case "rogue" :
			return "dex";
		// Constitution
		case "commoner" :
			return "con";
		// Intelligence
		case "wizard" :
		case "expert" :
			return "int";
		// Wisdom
		case "cleric" :
		case "druid" :
		case "monk" :
		case "adept" :
			return "wis";
		// Charisma
		case "bard" :
		case "sorcerer" :
		case "aristocrat" :
			return "cha";
		// None (default)
		case "aberration" :
		case "animal" :
		case "construct" :
		case "dragon" :
		case "elemental" :
		case "fey" :
		case "giant" :
		case "humanoid" :
		case "magical_beast" :
		case "monstrous_humanoid" :
		case "ooze" :
		case "outsider" :
		case "plant" :
		case "undead" :
		case "vermin" :
		default :
			return $cfg.cre.def_key_ab;
	}
}

function setAbilities(e, h) { // e = html element, h = creature hash
	var ab = h.ab, s = "";
	if (typeof(ab) !== "object" || ab.length != 6) ab = [0,0,0,0,0,0];
	var a = ["str", "dex", "con", "int", "wis", "cha"], i = 0;
	for (i; i < 6; i++) {
		if (i > 0)  s += ", ";
		s += $lng["ab_" + a[i] + "_abbr"] + " " + ab[i];
	}
	e.innerHTML = s;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Skills
// -----------------------------------------------------------------------------
// =============================================================================

function getSkillKeyAbility(k) { // k = skill id -- returns 3-chars ability key
	var s = k.substr(0, 4);
	if (s == "know") k = "knowledge";
	else if (s == "craf") k = "craft";
	else if (s == "perf") k = "perform";
	switch(k) {
		// Strength-Based
		case "climb" :
		case "jump" :
		case "swim" :
			return "str";
		// Dexterity-Based
		case "balance" :
		case "escape_artist" :
		case "hide" :
		case "move_silently" :
		case "open_lock" :
		case "ride" :
		case "sleight_of_hand" :
		case "tumble" :
		case "use_rope" :
			return "dex";
		// Constitution-Based
		case "concentration" :
			return "con";
		// Intelligence-Based
		case "appraise" :
		case "craft" :
		case "decipher_script" :
		case "disable_device" :
		case "forgery" :
		case "knowledge" :
		case "search" :
		case "spellcraft" :
			return "int";
		// Wisdom-Based
		case "heal" :
		case "listen" :
		case "profession" :
		case "sense_motive" :
		case "spot" :
		case "survival" :
			return "wis";
		// Charisma-Based
		case "bluff" :
		case "diplomacy" :
		case "disguise" :
		case "gather_information" :
		case "handle_animal" :
		case "intimidate" :
		case "perform" :
		case "use_magic_device" :
			return "cha";
		// Others
		case "speak_language" :
		default :
			return null;
	}
}

function isSkillTrainedOnly(k) { // k = skill id -- returns bool
	var s = k.substr(0, 4);
	if (s == "know") k = "knowledge";
	switch(k) {
		case "decipher_script" :
		case "disable_device" :
		case "handle_animal" :
		case "knowledge" :
		case "open_lock" :
		case "profession" :
		case "sleight_of_hand" :
		case "speak_language" :
		case "spellcraft" :
		case "tumble" :
		case "use_magic_device" :
			return true;
		default :
			return false;
	}
}

function isSkillArmorCheckPenalty(k) { // k = skill id -- returns bool
	switch(k) {
		case "balance" :
		case "climb" :
		case "escape_artist" :
		case "hide" :
		case "jump" :
		case "move_silently" :
		case "sleight_of_hand" :
		case "swim" :
		case "tumble" :
			return true;
		default :
			return false;
	}
}

function updateSkill(o, k, n, b) { // o = object, k = key, n = int, b = bypass skill training ?
	var b = b || false;
	if (hasKey(o, k)) o[k] += n;
	else if (b || !isSkillTrainedOnly(k)) o[k] = n;
	else wrn("Cannot update skill " + k + " without training (requires at least 1 point)"); // DEBUG
}

function getSkillSynergy(k) { // k = skill
	var s = k.substr(0, 4);
	if (s == "craf") k = "craft";
	switch(k) {
		case "bluff" : return ["diplomacy", "disguise", "sleight_of_hand", "intimidate"];
		case "decipher_script" : return ["use_magic_device"]; // WARNING -- only when trying to cast a spell from a scroll
		case "escape_artist" : return ["use_rope"]; // WARNING -- only when binding someone
		case "handle_animal" : return ["ride"]; // NOT YET IMPLEMENTED -- +2 to animal empathy checks
		case "jump" : return ["tumble"];
		case "search" : return ["survival"]; // WARNING -- only when following a track
		case "sense_motive" : return ["diplomacy"];
		case "spellcraft" : return ["use_magic_device"]; // WARNING -- only when trying to cast a spell from a scroll
		case "tumble" : return ["jump", "balance"];
		case "use_magic_device" : return ["spellcraft"]; // WARNING -- only when trying scribe a spell from a scroll
		case "use_rope" : return ["climb", "escape_artist"]; // WARNING -- only when climbing a rope and when trying to escape from rope bond
		case "craft" : return ["appraise"]; // WARNING -- only in the same craft form
		case "knowledge_arcana" : return ["spellcraft"];
		case "knowledge_architecture_and_engineering" : return ["search"]; // WARNING -- only when trying to find secret doors
		case "knowledge_dungeoneering" : return ["survival"]; // WARNING -- only while underground
		case "knowledge_geography" : return ["survival"]; // WARNING -- only when trying to avoid from being lost
		case "knowledge_history" : return []; // NOT YET IMPLEMENTED -- +2 to bardic knowledge checks
		case "knowledge_local" : return ["gather_information"];
		case "knowledge_nature" : return ["survival"]; // WARNING -- only in aboveground natural environments
		case "knowledge_nobility_and_royalty" : return ["diplomacy"];
		case "knowledge_religion" : return []; // NOT YET IMPLEMENTED -- +2 on turning undead checks
		case "knowledge_the_planes" : return ["survival"]; // WARNING -- only in other planes
		case "survival" :return  ["knowledge_nature"];
		default : return [];
	}
}

function setSkillSynergy(o) { // o = skill list
	var k, a, l, i;
	for (k in o) {
		if (o[k] >= 5) {
			a = getSkillSynergy(k), l = a.length;
			if (l > 0) for (i = 0; i < l; i++) updateSkill(o, a[i], 2);
		}
	}
}

function getSkillPointsByClass(cls) { // cls = cre class -- returns int
	switch(cls) {
		case "aberration" :
		case "animal" :
		case "construct" :
		case "elemental" :
		case "giant" :
		case "humanoid" :
		case "magical_beast" :
		case "monstrous_humanoid" :
		case "ooze" :
		case "plant" :
		case "vermin" :
		case "cleric" :
		case "fighter" :
		case "paladin" :
		case "sorcerer" :
		case "wizard" :
		case "adept" :
		case "commoner" :
		case "warrior" :
			return 2;
		case "undead" :
		case "barbarian" :
		case "druid" :
		case "monk" :
		case "aristocrat" :
			return 4;
		case "dragon" :
		case "fey" :
		case "bard" :
		case "ranger" :
		case "expert" :
			return 6;
		case "outsider" :
		case "rogue" :
			return 8;
		default :
			return $cfg.cre.def_sk_pts;
	}
}

/**
	NOTE
	SRD does not provide a specific type for craft and perform skills (as it does with knowledge).
	This is an issue for computing the proper class skills.
	In order to get through this, some particular types is given for those skills, as follow :
	+ craft
	- craft_alchemy                  : Wiz, Sor, Clr, Drd, Brd + Adept
	- craft_weaponsmithing           : Fgt, Pal, Bar, Mon + Expert
	- craft_armorsmithing            : Fgt, Pal + Expert
	- craft_bowmaking                : Fgt, Rng + Expert
	- craft_trapmaking               : Rog, Rng + Commoner
	+ perform
	- perform_act                    : *
	- perform_comedy                 : *
	- perform_dance                  : Mon
	- perform_keyboard_instruments   : *
	- perform_oratory                : Rog + Aristocrat, Expert
	- perform_percussion_instruments : *
	- perform_string_instruments     : *
	- perform_wind_instruments       : *
	- perform_sing                   : Brd
*/

function getClassSkills(cls) { // cls = class
	switch(cls) {
		// Character Classes
		case "barbarian" : return ["climb", "jump", "swim", "intimidate", "handle_animal", "ride", "listen", "survival", "craft_weaponsmithing"];
		case "bard" : return ["perform_sing", "listen", "bluff", "diplomacy", "use_magic_device", "knowledge_history", "disguise", "knowledge_nobility_and_royalty", "gather_information", "knowledge_local", "decipher_script", "knowledge_arcana", "spellcraft", "appraise", "sleight_of_hand", "tumble", "balance", "escape_artist", "hide", "move_silently", "knowledge_geography", "knowledge_the_planes", "knowledge_architecture_and_engineering", "knowledge_dungeoneering", "knowledge_nature", "knowledge_religion", "concentration", "sense_motive", "climb", "jump", "swim", "speak_language", "profession", "craft_alchemy"];
		case "cleric" : return ["heal", "concentration", "knowledge_religion", "knowledge_the_planes", "diplomacy", "spellcraft", "knowledge_arcana", "knowledge_history", "profession", "craft_alchemy"];
		case "druid" : return ["survival", "handle_animal", "knowledge_nature", "heal", "listen", "spot", "concentration", "spellcraft", "diplomacy", "swim", "ride", "craft_alchemy", "profession"];
		case "fighter" : return ["climb", "jump", "swim", "ride", "craft_weaponsmithing", "craft_armorsmithing", "craft_bowmaking", "handle_animal", "intimidate"];
		case "monk" : return ["jump", "tumble", "balance", "sense_motive", "hide", "move_silently", "spot", "listen", "diplomacy", "climb", "swim", "escape_artist", "knowledge_religion", "knowledge_arcana", "concentration", "profession", "perform_dance", "craft_weaponsmithing"];
		case "paladin" : return ["diplomacy", "sense_motive", "handle_animal", "ride", "heal", "knowledge_religion", "knowledge_nobility_and_royalty", "concentration", "profession", "craft_weaponsmithing", "craft_armorsmithing"];
		case "ranger" : return ["survival", "spot", "hide", "listen", "move_silently", "handle_animal", "knowledge_geography", "knowledge_nature", "knowledge_dungeoneering", "search", "ride", "use_rope", "climb", "jump", "swim", "heal", "concentration", "profession", "craft_bowmaking", "craft_trapmaking"];
		case "rogue" : return ["sleight_of_hand", "disable_device", "open_lock", "search", "move_silently", "hide", "use_rope", "escape_artist", "tumble", "balance", "gather_information", "knowledge_local", "appraise", "forgery", "disguise", "bluff", "intimidate", "diplomacy", "listen", "spot", "climb", "jump", "swim", "sense_motive", "decipher_script", "use_magic_device", "perform_oratory", "profession", "craft_trapmaking"];
		case "sorcerer" : return ["concentration", "spellcraft", "knowledge_arcana", "bluff", "profession", "craft_alchemy"];
		case "wizard" : return ["concentration", "spellcraft", "knowledge_arcana", "decipher_script", "craft_alchemy", "knowledge_the_planes", "knowledge_geography", "knowledge_architecture_and_engineering", "knowledge_dungeoneering", "knowledge_nature", "knowledge_local", "knowledge_history", "knowledge_religion", "knowledge_nobility_and_royalty", "profession"];
		// NPC Classes
		case "adept" : return ["concentration", "spellcraft", "knowledge_arcana", "knowledge_religion", "heal", "survival", "knowledge_the_planes", "knowledge_geography", "knowledge_nature", "knowledge_dungeoneering", "knowledge_architecture_and_engineering", "knowledge_nobility_and_royalty", "knowledge_history", "knowledge_local", "handle_animal", "profession", "craft_alchemy"];
		case "aristocrat" : return ["knowledge_nobility_and_royalty", "diplomacy", "intimidate", "bluff", "sense_motive", "knowledge_local", "gather_information", "handle_animal", "ride", "knowledge_history", "knowledge_geography", "disguise", "perform_oratory", "appraise", "forgery", "knowledge_religion", "knowledge_arcana", "knowledge_architecture_and_engineering", "knowledge_the_planes", "knowledge_dungeoneering", "knowledge_nature", "survival", "listen", "spot", "swim", "speak_language"];
		case "commoner" : return ["profession", "craft_trapmaking", "spot", "listen", "use_rope", "climb", "jump", "swim", "ride", "handle_animal"];
		case "expert" : return ["profession", "appraise", "craft_weaponsmithing", "craft_armorsmithing", "craft_bowmaking", "forgery", "decipher_script", "use_magic_device", "diplomacy", "bluff", "sense_motive", "gather_information", "knowledge_local", "knowledge_arcana", "spellcraft", "search", "sleight_of_hand", "open_lock", "disable_device", "intimidate", "knowledge_history", "knowledge_geography", "knowledge_nature", "knowledge_dungeoneering", "knowledge_the_planes", "knowledge_architecture_and_engineering", "knowledge_nobility_and_royalty", "knowledge_religion", "perform_oratory", "disguise", "survival", "handle_animal", "heal", "spot", "listen", "ride", "hide", "move_silently", "tumble", "balance", "escape_artist", "use_rope", "climb", "jump", "swim", "concentration", "speak_language"];
		case "warrior" : return ["climb", "jump", "swim", "ride", "handle_animal", "intimidate"];
		// Monster Classes
		case "aberration" :
		case "animal" :
		case "construct" :
		case "dragon" :
		case "elemental" :
		case "fey" :
		case "giant" :
		case "humanoid" :
		case "magical_beast" :
		case "monstrous_humanoid" :
		case "ooze" :
		case "outsider" :
		case "plant" :
		case "undead" :
		case "vermin" :
		default : return ["spot", "listen", "hide", "move_silently", "climb", "jump", "balance", "escape_artist"];
	}
}

function updateSkillsFromFeats(a, o) { // a = feat list, o = skill object
	if (typeof(a) !== "undefined") {
		var i = 0, l = a.length, t;
		for (i; i < l; i++) {
			var t = isSetStr(a[i]) ? a[i] : a[i].id;
			if (t == "skill_focus") {
				updateSkill(o, a[i].prop, 3);
				continue;
			}
			switch(t) {
				case "acrobatic" : {
					updateSkill(o, "jump", 2);
					updateSkill(o, "tumble", 2);
				} break;
				case "agile" : {
					updateSkill(o, "balance", 2);
					updateSkill(o, "escape_artist", 2);
				} break;
				case "alertness" : {
					updateSkill(o, "spot", 2);
					updateSkill(o, "listen", 2);
				} break;
				case "animal_affinity" : {
					updateSkill(o, "handle_animal", 2);
					updateSkill(o, "ride", 2);
				} break;
				case "athletic" : {
					updateSkill(o, "climb", 2);
					updateSkill(o, "swim", 2);
				} break;
				case "deceitful" : {
					updateSkill(o, "disguise", 2);
					updateSkill(o, "forgery", 2);
				} break;
				case "deft_hands" : {
					updateSkill(o, "sleight_of_hand", 2);
					updateSkill(o, "use_rope", 2);
				} break;
				case "diligent" : {
					updateSkill(o, "appraise", 2);
					updateSkill(o, "decipher_script", 2);
				} break;
				case "investigator" : {
					updateSkill(o, "gather_information", 2);
					updateSkill(o, "search", 2);
				} break;
				case "magical_aptitude" : {
					updateSkill(o, "spellcraft", 2);
					updateSkill(o, "use_magic_device", 2);
				} break;
				case "negotiator" : {
					updateSkill(o, "diplomacy", 2);
					updateSkill(o, "sense_motive", 2);
				} break;
				case "nimble_fingers" : {
					updateSkill(o, "disable_device", 2);
					updateSkill(o, "open_lock", 2);
				} break;
				case "persuasive" : {
					updateSkill(o, "bluff", 2);
					updateSkill(o, "intimidate", 2);
				} break;
				case "self_sufficient" : {
					updateSkill(o, "heal", 2);
					updateSkill(o, "survival", 2);
				} break;
				case "stealthy" : {
					updateSkill(o, "hide", 2);
					updateSkill(o, "move_silently", 2);
				} break;
			}
		}
	}
}

function getSkillRanks(o, a, p, q, c, n, m, f, g) { // o = skill object, a = skill array, p = skill points per lvl, n = lvl, m = hd, f = first level ?, g = fill out skill ranks ?
	var dbg = $dbg.sk;
	var l = a.length, i = 0;
	var y = isCharacterClass(c); // check class skills ?
	var sk_cls = getClassSkills(c); // class skills
	var sk_lvl = Math.max(p, 1) + q; // points per level
	var sk_max = 3 + m; // max points per skill
	var sk_tot = f ? (4 * sk_lvl) + ((n - 1) * sk_lvl) : sk_tot = n * sk_lvl;  // total points
	var sk_pts = 0; // current points
	var sk_avl = 0; // available points
	var sk_rnk = 0; // skill ranks (real)
	var sk_rem = 0; // remainder of points
	var sk_lim = sk_max; // points limit per skill
	var sk_uns = sk_tot; // unspent points
	log("Points per level : " + sk_lvl + (f ? " (" + sk_lvl * 4 + " at 1st)" : ''), dbg); // DEBUG
	log("> sk_max : " + sk_max, dbg); // DEBUG
	log("> sk_tot : " + sk_tot, dbg); // DEBUG
	if (g) {
		if (l > sk_tot) {
			wrn("Too many skills (not having at least 1 point available)", dbg); // DEBUG
			sk_lim = 1;
		} else if (sk_lvl < l)  {
			sk_lim = Math.floor(sk_tot / l);
			sk_rem = sk_tot % l;
		}
		log("> sk_lim : " + sk_lim, dbg); // DEBUG
		log("> sk_rem : " + sk_rem, dbg); // DEBUG
	}
	for (i; i < l; i++) {
		if (sk_uns <= 0) break;
		if (typeof(o[a[i]]) !== "undefined") sk_pts =  o[a[i]];
		if (sk_uns > 0 && sk_pts < sk_max) {
			if (g) {
				sk_avl = Math.min(sk_uns, sk_lim + sk_rem);
				if (sk_avl + sk_pts > sk_max) {
					sk_rem = sk_max - sk_avl + sk_pts;
					sk_avl = sk_max - sk_pts;
				} else {
					sk_rem = 0;
				}
			} else {
				sk_avl = Math.min(sk_uns, sk_max - sk_pts);
			}
			log("Spend " + sk_avl + " pts out of " + sk_uns + " in " + a[i] + " (" + sk_pts + " ranks)", dbg); // DEBUG
			if (y && sk_cls.indexOf(a[i]) == -1) {
				sk_rnk = sk_avl * 0.5;
				nfo(a[i] + " is not a " + c + " skill ; only 1/2 rank (" + sk_avl + " => " + sk_rnk + ")");
			} else {
				sk_rnk = sk_avl;
			}
			updateSkill(o, a[i], sk_rnk, true);
			sk_uns -= sk_avl;
		}
	}
	if (sk_uns > 0) wrn("Skill points lost : " + sk_uns, dbg); // DEBUG
}

function setSkills(e, h) { // e = html element, h = creature hash
	var dbg = $dbg.sk;
	var s = "";
	var a = h.cls
	var b = h.sk;
	var c = h.sk_bon;
	var f = true
	var g;
	var k;
	var l;
	var n = 0;
	var p = 1;
	var q = isRealHuman(h);
	var o = {};

	// 1. Get skill ranks from class
	for (k in a) {
		if (a[k] > 0) {
			pln("-", dbg); // DEBUG
			log("# Get Skill Ranks from " + k + " Class", dbg); // DEBUG
			pln("-", dbg); // DEBUG
			n += a[k];
			p = getSkillPointsByClass(k) + getAbilityModifier(h.ab, "int");
			if (isSetObj(b) && typeof(b[k]) !== "undefined") {
				nfo("Skill distribution enabled", dbg);
				l = b[k];
				g = true;
			} else {
				nfo("Load default class skills (skill distribution disabled)", dbg);
				l = getClassSkills(k);
				g = false;
			}
			getSkillRanks(o, l, p, q, k, a[k], n, f, g);
			f = false;
			log(o, dbg); // DEBUG
		}
	}

	// 2. Add skill bonus from synergy
	pln("-", dbg); // DEBUG
	log("Synergy Bonus :", dbg); // DEBUG
	setSkillSynergy(o);
	log(o, dbg); // DEBUG

	// 3. Add skill bonus from race
	log("Racial Bonus :", dbg); // DEBUG
	if (typeof(c) === "object") for (k in c) updateSkill(o, k, c[k]);
	log(o, dbg); // DEBUG

	// 4. Add skill bonus from feats
	log("Feats Bonus :", dbg); // DEBUG
	updateSkillsFromFeats(h.ft, o);
	log(o, dbg); // DEBUG

	// 5. Add skill modifiers from abilities
	log("Abilities Modifiers :", dbg); // DEBUG
	var ab;
	for (k in o) {
		ab = getSkillKeyAbility(k);
		if (ab != null) o[k] += getAbilityModifier(h.ab, ab);
	}
	log(o, dbg); // DEBUG

	// 6. Get and add armor penalty to skill checks
	log("Armor Penalties :", dbg); // DEBUG
	var sk_chk = 0;
	if (typeof(h.eqp) !== "undefined") {
		sk_chk += getItemSkillCheckPenalty(h.eqp.arm);
		sk_chk += getItemSkillCheckPenalty(h.eqp.shd);
	} if (sk_chk != 0) {
		for (k in o) if (isSkillArmorCheckPenalty(k)) o[k] += sk_chk;
	}
	log("> sk_chk : " + sk_chk, dbg);  // DEBUG
	log(o, dbg); // DEBUG

	// 7. Localize and sort skills list
	var z = {};
	for (k in o) z[$lng["sk_" + k]] = o[k];
	z = sortObj(z);

	// 8. Ouput string
	var i = 0;
	for (k in z) {
		if (z[k] != 0) {
			if (i > 0) s += ", ";
			s += k + " " + convertToSignInt(z[k]);
			i ++;
		}
	}

	e.innerHTML = s == "" ? $chr[$cfg.chr].long_dash : s;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Feats
// -----------------------------------------------------------------------------
// =============================================================================

function getMaxFeatsNumber(h) { // h = cre hash -- returns int
	return Math.floor(getTotalHitDice(h) / 3) + 1 + (isRealHuman(h) ? 1 : 0);
}

function getAvailableFeatsNumber(h) { // h = cre hash -- returns int
	return Math.max(getMaxFeatsNumber(h) - h.ft.length, 0);
}

function getOutOfMaxFeatsNumber(h) { // h = cre hash -- returns int
	return Math.max(h.ft.length - getMaxFeatsNumber(h), 0);
}

function getFeatStackNumber(a, k) { // a = feat array, k = feat id -- returns int
	if (typeof(a) !== "undefined") {
		var i = 0, l = a.length, n = 0;
		for (i; i < l; i++) if (a[i] == k || a[i].id == k) n++;
	} return n;
}

function setFeats(e, h) { // e = html element, h = creature hash
	setSpecialAbilities(e, h.ft);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Environment
// -----------------------------------------------------------------------------
// =============================================================================

function setEnvironment(e, h) { // e = html element, h = creature hash
	var env = h.env, s = $lng[env] || "";
	if (s != "" && $cfg.lng == "fr") s = s.substr(0, 1).toLowerCase() + s.substr(1, s.length);
	if (s == "") s = $chr[$cfg.chr].long_dash;
	e.innerHTML = s;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Organization
// -----------------------------------------------------------------------------
// =============================================================================

function setOrganization(e, h) { // e = html element, h = creature hash
	var a = h.org, s = "";
	if (typeof(a) === "object") {
		var l = getLen(a), i = 1, t;
		for (k in a) {
			t = $lng["org_" + k] || k;
			if (i > 1) {
				if (l > 2) s += ", ";
				if (i == l) s += " " + $lng.org_or + " ";
				s += t.toLowerCase();
			} else {
				s += $cfg.lng == "fr" ? t.toLowerCase() : t;
			}
			if (a[k] != null && a[k] != "") s += " (" + a[k] + ")";
			i++;
		}
	} e.innerHTML = s != "" ? s : $chr[$cfg.chr].long_dash;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Challenge Rating
// -----------------------------------------------------------------------------
// =============================================================================

/**
	NOTE :
	Challenge rating cannot be computed for monster classes.
	Indeed, it is described as an evaluation of a 4 players party average level
	at which the creature should be a moderate difficulty encounter.

	Nonetheless, an approximate rating can be deduced from various stats,
	such as hit dice, type, size and/or number of special abilities.

	Challenge Rating: Goblins with levels in NPC classes have a CR equal to their character level –2.
	Challenge Rating: Kobolds with levels in NPC classes have a CR equal to their character level –3.
	Challenge Rating: Drow with levels in NPC classes have a CR equal to their character level. Drow with levels in PC classes have a CR equal to their character level +1.
	Challenge Rating: Svirfneblin with levels in NPC classes have a CR equal to their character level. Svirfneblin with levels in PC classes have a CR equal to their character level +1.
	Challenge Rating: By class level or base creature, modified according to the HD of the base animal: 1 HD or 2 HD, +2; 3 HD to 5 HD, +3; 6 HD to 10 HD, +4; 11 HD to 20 HD, +5; 21 or more HD, +6.
	Challenge Rating: HD 3 or less, as base creature; HD 4 to 7, as base creature +1; HD 8 or more, as base creature +2.
	Challenge Rating: HD 4 or less, as base creature +1; HD 5 to 10, as base creature +2; HD 11 or more, as base creature +3.
	Challenge Rating: HD 5 or less, as base creature +1; HD 6 to 10, as base creature +2; HD 11 or more, as base creature +3.
	Challenge Rating: Same as the base creature + 2.
	Challenge Rating: Same as the base creature + 2 (minimum 3).

	Challenge Rating (Skeleton) : Depends on Hit Dice, as follows:
	HD     CR
	1/2    1/6
	1      1/3
	2–3    1
	4–5    2
	6–7    3
	8–9    4
	10–11  5
	12–14  6
	15–17  7
	18–20  8

	Challenge Rating (Zombie) : Depends on Hit Dice, as follows:
	HD     CR
	1/2    1/8
	1      1/4
	2      1/2
	4      1
	6      2
	8–10   3
	12–14  4
	15–16  5
	18–20  6
*/

function getChallengeRating(h) { // h = creature hash -- returns string
	var cr = h.cr || 0, cls = h.cls, s = $chr[$cfg.chr].long_dash;
	if (typeof(cr) === "string") cr = convertFractionToFloat(cr);
	if (hasCharacterClass(h)) {
		for (var k in cls) {
			if (isPcClass(k)) cr += cls[k];
			else cr += cls[k] * $cfg.cre.npc_cr_mod; // TEMP
		}
	} return cr > 0 ? convertFloatToFraction(cr) : $chr[$cfg.chr].long_dash;
}

function setChallengeRating(e, h) { // e = html element, h = creature hash
	e.innerHTML = getChallengeRating(h);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Treasure
// -----------------------------------------------------------------------------
// =============================================================================

function getEquipment(a) { // a = eqp object -- returns string
	var b, k, l, i, j = 0, q = 0, s ="";
	for (k in a) {
		b = a[k];
		if (k === "nat_wpn") continue;
		if (j > 0) s += ", "; j++;
		if (typeof(b) === "object" && !Array.isArray(b)) {
			q = b.qtt;
			s += getItemName(b).toLowerCase(); // TODO : add infobox
			if (q > 0) s += " (x" + q + ")";
		} else {
			l = b.length;
			for (i = 0; i < l; i++) {
				q = b[i].qtt;
				if (i > 0) s += ", ";
				s += getItemName(b[i]).toLowerCase(); // TODO : add infobox
				if (q > 0) s += " (x" + q + ")";
			}
		}
	} return s;
}

function setTreasure(e, h) { // e = html element, h = creature hash
	var trs = h.trs, eqp = h.eqp, s = "";
	// 1. Get treasure
	if (typeof(trs) === "object") {
		var a = trs, b = ["coins", "goods", "items"], l = 3, i = 0, n, u = "_", z = "";
		for (i; i < l; i++) a[i] = convertFractionToFloat(a[i]) || null;
		if (a[0] == a[1] && a[1] == a[2]) l = 1; u = ""; z = "ne";
		for (i = 0; i < l; i++) {
			n = a[i]; m = l > 1 ? b[i] : "";
			if (i > 0) s += $lng["trs_mark"] + " ";
			if (n == null) n = $lng["trs_no" + z + "" + u + m];
			else if (n < 1.0) n = convertFloatToFraction(n) + " " + $lng["trs" + (l > 1 ? u + m : "_standard")];
			else if (n >= 1.0 && n < 2.0) n = $lng["trs_standard" + u + m];
			else if (n >= 2.0 && n < 3.0) n = $lng["trs_double" + u + m];
			else if (n >= 3.0 && n < 4.0) n = $lng["trs_triple" + u + m];
			else n = $lng["trs_standard" + u + m] + " (x" + Math.floor(n) + ")";
			s += n;
		}
	}
	// 2. Get equipment
	if (typeof(eqp) === "object") {
		var p ="", t = getEquipment(eqp);
		if (t != "") {
			if (s != "") p = " " + $lng["trs_plus"] + " ";
			s += p + t;
		}
	} e.innerHTML = s || $chr[$cfg.chr].long_dash;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Alignment
// -----------------------------------------------------------------------------
// =============================================================================

function setAlignment(e, h) { // e = html element, h = creature hash
	var s = ""
	var aln = h.aln;
	if (typeof(aln) === "object") {
		var law_chaos = aln[0];
		var good_evil = aln[1];
		var frequency = aln[2] || null;
		var alignment = "";
		if (law_chaos == "any" && good_evil == "any") s = $lng.aln_any;
		else {
			if (law_chaos == "neutral" && good_evil == "neutral") alignment = $lng.aln_true_neutral;
			else if (law_chaos == "any") alignment = $lng["aln_" + good_evil] + " (" + $lng.aln_any_law_chaos + ")";
			else if (good_evil == "any") alignment = $lng["aln_" + law_chaos] + " (" + $lng.aln_any_good_evil + ")";
			else alignment = $lng["aln_" + law_chaos] + " " + $lng["aln_" + good_evil];
			s = (frequency != null ? $lng["aln_" + frequency] : "") + " " + alignment;
		}
	} e.innerHTML = s || $chr[$cfg.chr].long_dash;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Advancement
// -----------------------------------------------------------------------------
// =============================================================================

function setAdvancement(e, h) { // e = html element, h = creature hash
	var lng = $lng, adv = h.adv, s = "";
	if (typeof(adv) === "object") {
		var a = adv, k, i = 0, n = "", m = "";
		var b, q;
		for (k in a) {
			if (typeof(a[k]) === "object" && k == "hd") {
				b = a[k];
				for (q in b) {
					if (i > 0) n += lng["adv_mark"] + " ";
					n += b[q] + " " + lng["adv_" + k] + " (" + lng["adv_size_" + q] + ")";
					i++;
				}
			} else if (k == "char" || k == "class") m = lng["adv_" + k];
		}
		if (n != "" && m != "") n += lng["adv_mark"] + " " + lng["adv_or"] + " ";
		s = n + m;
	} else if (typeof(adv) === "string") s = lng["adv_" + adv] || "";
	e.innerHTML = s || $chr[$cfg.chr].long_dash;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Level Adjustment
// -----------------------------------------------------------------------------
// =============================================================================

// TODO
// if do not get character class OR advancement NOT contain by character class,
// then level adjustment should be always NULL
function setLevelAdjustment(e, h) { // e = html element, h = creature hash
	var adj = h.adj;
	e.innerHTML = typeof(adj) !== "undefined" ? convertToSignInt(adj) : $chr[$cfg.chr].long_dash;
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Topic
// -----------------------------------------------------------------------------
// =============================================================================

function setTopicTitle(h) { // h = cre hash
	var e = getTopicTitle();
	if (e.textContent == "" && isSetStr(h.name)) e.innerHTML = h.name;
}

function setTopicSource(h) { // h = cre hash
	var e = getTopicSource();
	if (e.textContent == "") {
		var s;
		if (isSetStr(h.src)) {
			s = hasKey($src, h.src) ? $src[h.src] : h.src;
		} else if (isSetObj(h.src)) {
			s = $src[h.src.man] + (hasKey(h.src, "pge") ? ", p. " + h.src.pge : "");
		} else {
			s = $src.unknown;
		} e.innerHTML = s;
	}
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Media
// -----------------------------------------------------------------------------
// =============================================================================

function setMediaImage(h) { // h = cre hash
	if (isObj(h.img)) {
		var src = h.img.src || null
		var alt = h.img.alt || h.name || $cfg.img.alt_def;
		var txt = h.img.txt || "";
		if (h.img.wotc) {
			if (txt != "") txt += "<br>";
			txt += $lng.copy_wotc;
		}
		if (src != null) getMedia().appendChild(createImage(src, alt, txt));
	}
}

function setMediaAudio(h) { // h = cre hash
	var lst = null;
	// 1. Arr : Get audio list by id
	if (isSetArr(h.snd)) lst = h.snd;
	// 2. Str : Get audio list by tag
	else if (isSetStr(h.snd)) {
		var a = $sounds || null, b = [], k;
		if (a != null) {
			for (k in a) if (a[k].tag == h.snd) b.push(a[k]);
			if (b.length > 0) lst = b;
		}
	}
	if (lst != null) getMedia().appendChild(createAudioPlayer(lst));
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Update Perks (i.e. automatic creature's features assignment )
// -----------------------------------------------------------------------------
// =============================================================================

function getPerkIndex(a, k, p) { // a = raw perk list, k = perk id, p = perk prop -- returns int
	var p = p || null, n;
	for (n in a) {
		if (isSetStr(a[n]) && a[n] == k) return n;
		else if (isSetObj(a[n]) && Object.keys(a[n])[0] == k) {
			if (p == null) return n;
			else if (a[n][k] == p) return n;
			return -1;
		}
	} return -1;
}

function updatePerk(a, k, p) { // a = raw sab list, k = sab id, p = sab prop
	var p = p || null;
	var i = getPerkIndex(a, k, null);
	var r = {};
	if (p == null && i == -1) a.push(k);
	else if (i >= 0) a[i][k] = p;
	else {
		r[k] = p;
		a.push(r);
	}
}

// TEMP : function updateCharacterClassFeatures() {}
// TEMP : function updateMonsterClassFeatures() {}
// TODO : Add silent/invisible/masked weapon and armor proficiency ???
// TODO : Add missing perk martial_weapon_proficiency_all ???
function updateClassFeatures(h) { // h = cre hash
	var c = h.cls, q = h.sab, f = h.ft, k, n;
	for (k in c) {
		n = c[k];
		if (k == "fighter") {
			if (n >= 1) {
				updatePerk(q, "fighter_features");
				// updatePerk(q, "fighter_bonus_feat");
			}
			// if (n >= 2) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 4) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 6) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 8) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 10) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 12) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 14) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 16) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 18) updatePerk(q, "fighter_bonus_feat");
			// if (n >= 20) updatePerk(q, "fighter_bonus_feat");
		} else if (k == "barbarian") {
			if (n >= 1) {
				updatePerk(q, "barbarian_features");
				updatePerk(q, "barbarian_fast_movement");
				updatePerk(q, "barbarian_rage", 1);
			}
			if (n >= 2) updatePerk(q, "uncanny_dodge");
			if (n >= 3) updatePerk(q, "trap_sense", 1);
			if (n >= 4) updatePerk(q, "barbarian_rage", 2);
			if (n >= 5) updatePerk(q, "improved_uncanny_dodge");
			if (n >= 6) updatePerk(q, "trap_sense", 2);
			if (n >= 7) updatePerk(q, "barbarian_damage_reduction", 1);
			if (n >= 8) updatePerk(q, "barbarian_rage", 3);
			if (n >= 9) updatePerk(q, "trap_sense", 3);
			if (n >= 10) updatePerk(q, "barbarian_damage_reduction", 2);
			if (n >= 11) updatePerk(q, "greater_rage");
			if (n >= 12) {
				updatePerk(q, "barbarian_rage", 4);
				updatePerk(q, "trap_sense", 4);
			}
			if (n >= 13) updatePerk(q, "barbarian_damage_reduction", 3);
			if (n >= 14) updatePerk(q, "indomitable_will");
			if (n >= 15) updatePerk(q, "trap_sense", 5);
			if (n >= 16) {
				updatePerk(q, "barbarian_rage", 5);
				updatePerk(q, "barbarian_damage_reduction", 4);
			}
			if (n >= 17) updatePerk(q, "tireless_rage");
			if (n >= 18) updatePerk(q, "trap_sense", 6);
			if (n >= 19) updatePerk(q, "barbarian_damage_reduction", 5);
			if (n >= 20) {
				updatePerk(q, "barbarian_rage", 6);
				updatePerk(q, "mighty_rage");
			}
		} else if (k == "paladin") {
			if (n >= 1) {
				updatePerk(q, "paladin_features");
				updatePerk(q, "aura_of_good");
				updatePerk(q, "detect_evil");
				updatePerk(q, "smite_evil", 1);
			}
			if (n >= 2) {
				updatePerk(q, "divine_grace");
				updatePerk(q, "lay_on_hands");
			}
			if (n >= 3) {
				updatePerk(q, "aura_of_courage");
				updatePerk(q, "divine_health");
			}
			if (n >= 4) {
				updatePerk(q, "spells");
				updatePerk(q, "turn_undead");
			}
			if (n >= 5) {
				updatePerk(q, "smite_evil", 2);
				updatePerk(q, "special_mount");
			}
			if (n >= 6) updatePerk(q, "remove_disease", 1);
			if (n >= 9) updatePerk(q, "remove_disease", 2);
			if (n >= 10) updatePerk(q, "smite_evil", 3);
			if (n >= 11) updatePerk(q, "greater_rage");
			if (n >= 12) updatePerk(q, "remove_disease", 3);
			if (n >= 15) {
				updatePerk(q, "smite_evil", 4);
				updatePerk(q, "remove_disease", 4);
			}
			if (n >= 18) updatePerk(q, "remove_disease", 5);
			if (n >= 20) updatePerk(q, "smite_evil", 5);
		} else if (k == "ranger") {
			if (n >= 1) {
				updatePerk(q, "ranger_features");
				updatePerk(q, "favored_enemy", 1);
			}
			if (n >= 2) updatePerk(q, "ranger_combat_style");
			if (n >= 3) updatePerk(f, "endurance");
			if (n >= 4) {
				updatePerk(q, "spells");
				updatePerk(q, "animal_companion");
			}
			if (n >= 5) updatePerk(q, "favored_enemy", 2);
			if (n >= 6) updatePerk(q, "ranger_improved_combat_style");
			if (n >= 7) updatePerk(q, "woodland_stride");
			if (n >= 8) updatePerk(q, "swift_tracker");
			if (n >= 9) updatePerk(q, "evasion");
			if (n >= 10) updatePerk(q, "favored_enemy", 3);
			if (n >= 11) updatePerk(q, "ranger_combat_style_mastery");
			if (n >= 13) updatePerk(q, "camouflage");
			if (n >= 15) updatePerk(q, "favored_enemy", 4);
			if (n >= 17) updatePerk(q, "hide_in_plain_sight");
			if (n >= 20) updatePerk(q, "favored_enemy", 5);
		} else if (k == "monk") {
			if (n >= 1) {
				updatePerk(q, "monk_features");
				// updatePerk(q, "monk_bonus_feat");
				updatePerk(q, "monk_ac_bonus");
				updatePerk(q, "monk_unarmed_strike");
				updatePerk(f, "improved_unarmed_strike");
				updatePerk(q, "flurry_of_blows");
			}
			if (n >= 2) {
				// updatePerk(q, "monk_bonus_feat");
				updatePerk(q, "evasion");
			}
			if (n >= 3) {
				updatePerk(q, "monk_fast_movement");
				updatePerk(q, "still_mind");
			}
			if (n >= 4) {
				updatePerk(q, "ki_strike_magic");
				updatePerk(q, "slow_fall", "20f");
			}
			if (n >= 5) updatePerk(q, "purity_of_body");
			if (n >= 6) {
				// updatePerk(q, "monk_bonus_feat");
				updatePerk(q, "slow_fall", "30f");
			}
			if (n >= 7) updatePerk(q, "wholeness_of_body");
			if (n >= 8) updatePerk(q, "slow_fall", "40f");
			if (n >= 9) updatePerk(q, "improved_evasion");
			if (n >= 10) {
				updatePerk(q, "ki_strike_lawful");
				updatePerk(q, "slow_fall", "50f");
			}
			if (n >= 11) {
				updatePerk(q, "diamond_body");
				updatePerk(q, "greater_flurry");
			}
			if (n >= 12) {
				updatePerk(q, "abundant_step");
				updatePerk(q, "slow_fall", "60f");
			}
			if (n >= 13) updatePerk(q, "diamond_soul");
			if (n >= 14) updatePerk(q, "slow_fall", "70f");
			if (n >= 15) updatePerk(q, "quivering_palm");
			if (n >= 16) {
				updatePerk(q, "ki_strike_adamantine");
				updatePerk(q, "slow_fall", "80f");
			}
			if (n >= 17) {
				updatePerk(q, "timeless_body");
				updatePerk(q, "tongue_of_the_sun_and_moon");
			}
			if (n >= 18) updatePerk(q, "slow_fall", "90f");
			if (n >= 19) updatePerk(q, "empty_body");
			if (n >= 20) {
				updatePerk(q, "perfect_self");
				updatePerk(q, "slow_fall", null);
			}
		} else if (k == "cleric") {
			if (n >= 1) {
				updatePerk(q, "cleric_features");
				updatePerk(q, "turn_or_rebuke_undead");
				updatePerk(q, "spells");
				updatePerk(q, "aura");
			}
		} else if (k == "druid") {
			if (n >= 1) {
				updatePerk(q, "druid_features");
				updatePerk(q, "animal_companion");
				updatePerk(q, "wild_empathy");
				updatePerk(q, "nature_sense");
				updatePerk(q, "spells");
			}
			if (n >= 2) updatePerk(q, "woodland_stride");
			if (n >= 3) updatePerk(q, "trackless_step");
			if (n >= 4) updatePerk(q, "resist_nature_s_lure");
			if (n >= 5) updatePerk(q, "wild_shape", 1);
			if (n >= 6) updatePerk(q, "wild_shape", 2);
			if (n >= 7) updatePerk(q, "wild_shape", 3);
			if (n >= 8) updatePerk(q, "wild_shape_large");
			if (n >= 9) updatePerk(q, "venom_immunity");
			if (n >= 10) updatePerk(q, "wild_shape", 4);
			if (n >= 11) updatePerk(q, "wild_shape_tiny");
			if (n >= 12) updatePerk(q, "wild_shape_plant");
			if (n >= 13) updatePerk(q, "a_thousand_faces");
			if (n >= 14) updatePerk(q, "wild_shape", 5);
			if (n >= 15) {
				updatePerk(q, "wild_shape_huge");
				updatePerk(q, "timeless_body");
			}
			if (n >= 16) updatePerk(q, "wild_shape_elemental", 1);
			if (n >= 18) {
				updatePerk(q, "wild_shape", 6);
				updatePerk(q, "wild_shape_elemental", 2);
			}
			if (n >= 20) {
				updatePerk(q, "wild_shape_huge_elemental");
				updatePerk(q, "wild_shape_elemental", 3);
			}
		} else if (k == "rogue") {
			if (n >= 1) {
				updatePerk(q, "rogue_features");
				updatePerk(q, "sneak_attack", 1);
			}
			if (n >= 2) updatePerk(q, "evasion");
			if (n >= 3) {
				updatePerk(q, "sneak_attack", 2);
				updatePerk(q, "trap_sense", 1);
			}
			if (n >= 4) updatePerk(q, "uncanny_dodge");
			if (n >= 5) updatePerk(q, "sneak_attack", 3);
			if (n >= 6) updatePerk(q, "trap_sense", 2);
			if (n >= 7) updatePerk(q, "sneak_attack", 4);
			if (n >= 8) updatePerk(q, "improved_uncanny_dodge");
			if (n >= 9) {
				updatePerk(q, "sneak_attack", 5);
				updatePerk(q, "trap_sense", 3);
			}
			if (n >= 10) {
				// updatePerk(q, "rogue_special_ability");
			}
			if (n >= 11) updatePerk(q, "sneak_attack", 6);
			if (n >= 12) updatePerk(q, "trap_sense", 4);
			if (n >= 13) {
				updatePerk(q, "sneak_attack", 7);
				// updatePerk(q, "rogue_special_ability");
			}
			if (n >= 15) {
				updatePerk(q, "sneak_attack", 8);
				updatePerk(q, "trap_sense", 5);
			}
			if (n >= 16) {
				// updatePerk(q, "rogue_special_ability");
			}
			if (n >= 17) updatePerk(q, "sneak_attack", 9);
			if (n >= 18) updatePerk(q, "trap_sense", 6);
			if (n >= 19) {
				updatePerk(q, "sneak_attack", 10);
				// updatePerk(q, "rogue_special_ability");
			}
		} else if (k == "bard") {
			if (n >= 1) {
				updatePerk(q, "bard_features");
				updatePerk(q, "bardic_music");
				updatePerk(q, "bardic_knowledge");
				updatePerk(q, "countersong");
				updatePerk(q, "fascinate");
				updatePerk(q, "inspire_courage", 1);
				updatePerk(q, "spells");
			}
			if (n >= 3) updatePerk(q, "inspire_competence");
			if (n >= 6) updatePerk(q, "suggestion");
			if (n >= 8) updatePerk(q, "inspire_courage", 2);
			if (n >= 9) updatePerk(q, "inspire_greatness");
			if (n >= 12) updatePerk(q, "song_of_freedom");
			if (n >= 14) updatePerk(q, "inspire_courage", 3);
			if (n >= 15) updatePerk(q, "inspire_heroics");
			if (n >= 18) updatePerk(q, "mass_suggestion");
			if (n >= 20) updatePerk(q, "inspire_courage", 4);
		} else if (k == "wizard") {
			if (n >= 1) {
				updatePerk(q, "wizard_features");
				updatePerk(q, "summon_familiar");
				updatePerk(f, "scribe_scroll");
				updatePerk(q, "spells");
			}
			// if (n >= 5) updatePerk(q, "wizard_bonus_feat");
			// if (n >= 10) updatePerk(q, "wizard_bonus_feat");
			// if (n >= 15) updatePerk(q, "wizard_bonus_feat");
			// if (n >= 20) updatePerk(q, "wizard_bonus_feat");
		} else if (k == "sorcerer") {
			if (n >= 1) {
				updatePerk(q, "sorcerer_features");
				updatePerk(q, "summon_familiar");
				updatePerk(q, "spells");
			}
		} else if (k == "adept") {
			if (n >= 2) updatePerk(q, "summon_familiar");
		}
	}
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Fill Data
// -----------------------------------------------------------------------------
// * Fill Data List   : source array values = string
// * Fill Data Array  : source array values = string and/or object
// * Fill Data Object : source object values = string, array and/or object
// -----------------------------------------------------------------------------
// =============================================================================

function fillDataList(o, a) { // o = source array, a = data array
	var l = a.length, i = 0, h = o.length, j;
	for (i; i < l; i++) {
		for (j = 0; j < h; j++) {
			if (a[i].id == o[j]) o[j] = a[i];
		}
	}
}

function fillDataArray(o, a) { // o = source array, a = data array
	var l = a.length, i = 0, g = o.length, j;
	var k, v;
	for (i; i < l; i++) {
		for (j = 0; j < g; j++) {
			if (typeof(o[j].id) !== "undefined") continue;
			if (isSetStr(o[j])) {
				if (a[i].id == o[j]) o[j] = a[i];
			} else if (isSetObj(o[j])) {
				k = Object.keys(o[j])[0];
				if (a[i].id == k) {
					v = o[j][k];
					Object.assign(o[j], a[i]);
					if (typeof(v) !== "undefined") o[j]["prop"] = v;
				}
			}
		}
	}
}

function fillDataObject(obj, itm, src) { // obj = source object, itm = source key, src = data array
	var a = src, b = obj[itm];
	if (typeof(b) !== "undefined") {
		var i = 0, l = a.length;
		var j, h = b.length, t, q;
		for (i; i < l; i++) {
			if (isSetStr(b)) {
				if (a[i].id == b) obj[itm] = a[i];
			} else if (isSetObj(b)) {
				t = Object.keys(b)[0];
				if (a[i].id == t) {
					q = b[t];
					Object.assign(obj[itm], a[i]);
					obj[itm]["qtt"] = q;
				}
			} else if (isSetArr(b)) {
				for (j = 0; j < h; j++) {
					if (isSetStr(b[j]) && a[i].id == b[j]) {
						obj[itm][j] = a[i];
					} else if (isSetObj(b[j])) {
						t = Object.keys(b[j])[0];
						if (a[i].id == t) {
							q = b[j][t];
							Object.assign(obj[itm][j], a[i]);
							obj[itm][j]["qtt"] = q;
						}
					}
				}
			}
		}
	}
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Update Data
// -----------------------------------------------------------------------------
// =============================================================================

function updateSpecialAbilities(obj) {fillDataArray(obj, $special_abilities)};
function updateFeats(obj) {fillDataArray(obj, $feats)}
function updateHelm(obj) {fillDataObject(obj, "hlm", $helmets)}
function updateArmor(obj) {fillDataObject(obj, "arm", $armors)}
function updateShield(obj) {fillDataObject(obj, "shd", $shields)}
function updateWeapons(obj) {fillDataObject(obj, "wpn", $weapons)}
function updateNaturalWeapons(obj) {fillDataObject(obj, "nat_wpn", $natural_weapons)}
function updateAmmunitions(obj) {fillDataObject(obj, "amo", $amunitions)}
function updatePotions(obj) {fillDataObject(obj, "ptn", $potions)}
function updateScrolls(obj) {fillDataObject(obj, "scr", $scrolls)}
function updateWands(obj) {fillDataObject(obj, "wnd", $wands)}
function updateSounds(obj) {fillDataList(obj, $sounds)}
function updateEquipment(obj) { // obj = equip hash
	// Equipped Items
	if (hasKey(obj, "hlm")) updateHelm(obj);
	if (hasKey(obj, "arm")) updateArmor(obj);
	if (hasKey(obj, "shd")) updateShield(obj);
	if (hasKey(obj, "wpn")) updateWeapons(obj);
	if (hasKey(obj, "nat_wpn")) updateNaturalWeapons(obj);
	// Inventory Items
	if (hasKey(obj, "amo")) updateAmmunitions(obj);
	if (hasKey(obj, "ptn")) updatePotions(obj);
	if (hasKey(obj, "scr")) updateScrolls(obj);
	if (hasKey(obj, "wnd")) updateWands(obj);
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Get Data
// -----------------------------------------------------------------------------
// =============================================================================

function getCreatureData(a, n) { // a = cre db, n = cre id -- returns cre hash
	for (var k in a) if (a[k].id == n) return a[k];
}

// =============================================================================
// -----------------------------------------------------------------------------
// # Initialize
// -----------------------------------------------------------------------------
// =============================================================================

function initializeCreature(db, id) {

	var h = getCreatureData(db, id) || null;

	// * Check integrity
	if (h == null) {
		wrn("Creature " + id + " does not exist ! Initialization aborted."); // DEBUG
	} else {

		// * Check contrains
		if (!isSetStr(h.name)) {wrn("Creature " + id + " has no name ; default value used."); h.name = $lng.creature;} // DEBUG
		if (!isSetStr(h.type)) {wrn("Creature " + id + " has no type ; default value used."); h.type = $cfg.cre.def_type;} // DEBUG
		if (!isSetStr(h.size)) {wrn("Creature " + id + " has no size ; default value used."); h.size = $cfg.cre.def_size;} // DEBUG
		if (!isSetObj(h.cls)) {wrn("Creature " + id + " has no class ; default value used."); h.cls = $cfg.cre.def_cls;} // DEBUG
		if (!isSetArr(h.ab)) {wrn("Creature " + id + " has no abilities ; default values used."); h.ab = $cfg.cre.def_ab;} // DEBUG

		// * Check settings
		if (!isSetArr(h.sab)) h.sab = []; // NOTE : Special abilities can be empty, but it cannot be unset
		if (!isSetArr(h.ft)) h.ft = []; // NOTE : Feats can be empty, but it cannot be unset

		// *************************************************************************
		// * TEMP * Move below elsewhere ...
		// *************************************************************************
		/*
			TEST
			Give feats out of max => Advancement
			- make feat lists by class
			- add a function to fill feats if it matches the requirement
			- if any feat is missing, then add them by class
		*/
		// * Check feats
		log("max feats : " + getMaxFeatsNumber(h));
		log("unspent feats : " + getAvailableFeatsNumber(h));
		log("out of max feats : " + (getOutOfMaxFeatsNumber(h)));
		// *************************************************************************

		// * Update class features
		if (hasCharacterClass(h)) updateClassFeatures(h); // TEMP

		// * Update data
		if (typeof(h.sab) !== "undefined") updateSpecialAbilities(h.sab);
		if (typeof(h.ft) !== "undefined") updateFeats(h.ft);
		if (typeof(h.eqp) !== "undefined") updateEquipment(h.eqp);
		if (typeof(h.snd) !== "undefined") updateSounds(h.snd);

		// * Check incompatibilities
		if (hasSpecialAbility(h.sab, "fire_immunity") && hasSpecialAbility(h.sab, "immunities", "fire"))
			wrn("Incompatibility detected ; creature has both 'Immunity to fire' and 'Immunities (fire)'");
		if (hasSpecialAbility(h.sab, "cold_immunity") && hasSpecialAbility(h.sab, "immunities", "cold"))
			wrn("Incompatibility detected ; creature has both 'Immunity to cold' and 'Immunities (cold)'");

		// DEBUG
		// log(h); // DEBUG
		// log(h.eqp); // DEBUG
		// log(h.spe_atk); // DEBUG
		// log(h.snd); // DEBUG

		// TEST : append new values to creature
		// h.hd = 10;
		// h.size = "g";

		// TODO : on hd/lvl change
		// every 3 lvl up, check ft (+1)
		// every 4 lvl up, check ab (+1)

		// * Update html
		var a = getDataLines(), i = 0, l = a.length, e, t;
		for (i; i < l; i++) {
			e = a[i], t = e.dataset.stat;
			if (e.textContent != "") continue; // TEMP : Overwrite when text content is not empty or when data-stat not defined ?
			switch(t) {
				case "type_size"   : setTypeAndSize(e, h); break;
				case "cls_lvl"     : setClassAndLevel(e, h); break;
				case "hd"          : setHitDice(e, h); break;
				case "init"        : setInitiative(e, h); break;
				case "speed"       : setSpeed(e, h); break;
				case "ac"          : setArmorClass(e, h); break;
				case "bab_grap"    : setBaseAttackGrapple(e, h); break;
				case "atk"         : setAttack(e, h); break;
				case "full_atk"    : setAttack(e, h, true); break;
				case "space_reach" : setSpaceAndReach(e, h); break;
				case "spe_atk"     : setSpecialAttacks(e, h); break;
				case "spe_qlt"     : setSpecialQualities(e, h); break;
				case "sv"          : setSaves(e, h); break;
				case "ab"          : setAbilities(e, h); break;
				case "sk"          : setSkills(e, h); break;
				case "ft"          : setFeats(e, h); break;
				case "env"         : setEnvironment(e, h); break;
				case "org"         : setOrganization(e, h); break;
				case "cr"          : setChallengeRating(e, h); break;
				case "trs"         : setTreasure(e, h); break;
				case "aln"         : setAlignment(e, h); break;
				case "adv"         : setAdvancement(e, h); break;
				case "adj"         : setLevelAdjustment(e, h); break;
			}
		}

		// * Set Topic
		setTopicTitle(h); // TEMP
		setTopicSource(h); // TEMP

		// * Set Media
		setMediaImage(h);
		setMediaAudio(h);
	}

	// * Bind Events
	infobox.init();
}
