/* -------------------------------------------------------------------------- */
/* # Debug */
/* -------------------------------------------------------------------------- */

function pln(p, b, n) {
	var p = p || "-", n = n || 64, i = 0; s = "";
	if (typeof(b) === "undefined" || b) {
		while (i < n) { s += p; i++; }
		console.log(s);
	}
}

function log(s, b) {if (typeof(b) === "undefined" || b) console.log(s);}
function nfo(s, b) {if (typeof(b) === "undefined" || b) console.info(s);}
function wrn(s, b) {if (typeof(b) === "undefined" || b) console.warn(s);}
function err(s, b) {if (typeof(b) === "undefined" || b) console.error(s);}

/* -------------------------------------------------------------------------- */
/* # HTLM Element */
/* -------------------------------------------------------------------------- */

HTMLElement.prototype.show = function() {
	if (this.style.display == "none")
		this.style.display = "";
};

HTMLElement.prototype.hide = function() {
	if (this.style.display != "none")
		this.style.display = "none";
};

HTMLElement.prototype.toggle = function() {
	if (this.style.display == "none")
		this.style.display = "";
	else this.style.display = "none";
};

/* -------------------------------------------------------------------------- */
/* # Types */
/* -------------------------------------------------------------------------- */

function isInt(n) {return typeof(n) === "number" && Number.isInteger(n)}
function isFlt(n) {return typeof(n) === "number" && !Number.isInteger(n)}
function isStr(s) {return typeof(s) === "string"}
function isAry(a) {return typeof(a) === "object" && Array.isArray(a)}
function isObj(o) {return typeof(o) === "object" && !Array.isArray(o)}

function isNum(n) {return isInt(n) || isFlt(n)} // Alias

function isSetInt(n) {return isInt(n)}
function isSetFlt(n) {return isFlt(n) && Number.isFinite(n) && !Number.isNaN(n)}
function isSetStr(s) {return isStr(s) && s.length > 0}
function isSetArr(a) {return isAry(a) && a.length > 0}
function isSetObj(o) {return isObj(o) && Object.keys(o).length > 0}

function isSetNum(n) {return isSetInt(n) || isSetFlt(n)} // Alias

/* -------------------------------------------------------------------------- */
/* # Object */
/* -------------------------------------------------------------------------- */

function getLen(o) { // o = object -- returns integer
	var k, n = 0;
	if (typeof(o) === "object") {
		if (Object.keys) n = Object.keys(o).length;
		else for (k in o) if (o.hasOwnProperty(k)) n++;
	} else n = o.length;
	return n;
}

function hasKey(o, k) { // o = object -- returns bool
	return o.hasOwnProperty(k);
}

function hasVal(o, v) { // o = object -- returns bool
	for (var k in o) if (o[k] == v) return true;
}

function sortObj(o) { // o = object -- returns object
	var a = Object.keys(o).sort(), l = a.length, i = 0, b = {};
	for (i; i < l; i++) b[a[i]] = o[a[i]];
	return b;
}

/* -------------------------------------------------------------------------- */
/* # Array */
/* -------------------------------------------------------------------------- */

function sortByNumAsc(arr, key) {
	return arr.sort(function(a, b) {
		if (typeof key !== "undefined") {
			a = a[key];
			b = b[key];
		} return a - b;
	});
}

function sortByNumDesc(arr, key) {
	return arr.sort(function(a, b) {
		if (typeof key !== "undefined") {
			a = a[key];
			b = b[key];
		} return b - a;
	});
}

function sortByCharAsc(arr, key) {
	return arr.sort(function(a, b) {
		if (typeof key !== "undefined") {
			a = a[key];
			b = b[key];
		}
		var x = a.slice(0, 1).toLowerCase();
		var y = b.slice(0, 1).toLowerCase();
		if (x == "&") x = a.slice(1, 2).toLowerCase();
		if (y == "&") y = b.slice(1, 2).toLowerCase();
		if (x > y) return 1;
		if (x < y) return -1;
		return 0;
	});
}

function sortByCharDesc(arr, key) {
	return arr.sort(function(a, b) {
		if (typeof key !== "undefined") {
			a = a[key];
			b = b[key];
		}
		var x = a.slice(0, 1).toLowerCase();
		var y = b.slice(0, 1).toLowerCase();
		if (x == "&") x = a.slice(1, 2).toLowerCase();
		if (y == "&") y = b.slice(1, 2).toLowerCase();
		if (x > y) return -1;
		if (x < y) return 1;
		return 0;
	});
}

function sortByStrAsc(arr, key) {
	return arr.sort(function(a, b) {
		if (typeof key !== "undefined") {
			a = a[key];
			b = b[key];
		}
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});
}

function sortByStrDesc(arr, key) {
	return arr.sort(function(a, b) {
		if (typeof key !== "undefined") {
			a = a[key];
			b = b[key];
		}
		if (a > b) return -1;
		if (a < b) return 1;
		return 0;
	});
}

/* -------------------------------------------------------------------------- */
/* # String */
/* -------------------------------------------------------------------------- */

/**
	Returns a string with the first letter of each word or not to upper case.
	Default is first letter only.
	> "ZIZI MOU".capitalize()     => Zizi mou
	> "zizi mou".capitalize(true) => Zizi Mou
*/
String.prototype.capitalize = function(b) { // b = all-words ?
	var b = b || false;
	var s, f, r = "";
	var a = this.split(" "), i = 0;
	for (n in a) {
		s = a[n].toLowerCase();
		f = s.slice(0, 1);
		if (i > 0) r += " ";
		if (i == 0 || b) f = f.toUpperCase();
		r += f + s.slice(1, s.length);
		i++;
	} return r;
}

/* -------------------------------------------------------------------------- */
/* # Number */
/* -------------------------------------------------------------------------- */

/**
	Returns an integer rounded upward, downward or to the nearest value.
	> (47.61).toInt() => 47
	> (47.61).toInt("sup") => 48
	> (47.61).toInt("mid") => 48
	> (47.16).toInt("mid") => 47
*/
Number.prototype.toInt = function(match) {
	var m = match || "inf";
	if (m == "mid" || m == "near") return Math.round(this);
	if (m == "sup" || m == "up") return Math.ceil(this);
	return Math.floor(this);
}

/**
	Returns a number formated according to language convention.
	> 10500.5 => 10,500.50 (en)
	> 10500.5 => 10 500,50 (fr)
	----
	p : point (i.e. decimal mark => 10.5)
	c : comma (i.e. digit grouping mark => 10,500)
	i : integer value of number (10.5 => 10)
	n : number of digits at start (10,500 => 2)
	d : digits groups (10,500 => 500)
	s : string result (10500.5 => 10,500.50)
*/
Number.prototype.format = function(decimal_mark, digit_group_mark) {
	var p = decimal_mark || $lng.decimal_mark;
	var c = digit_group_mark || $lng.digit_group_mark;
	var i = parseInt(this).toString();
	var n = i.length % 3;
	var d = i.slice(n).replace(/(\d{3})/g, c + "$1");
	var s = n > 0 ? i.substr(0, n) + d : d.substr(c.length, d.length);
	if (this.toString().includes(".")) s += p + this.toFixed(2).toString().split(".")[1];
	return s;
}

/**
	Converts a number to money integer with currency mark.
	> 7.3 => 7 cp
	> 3.73 => 4 sp
	> 1.375 => 1 gp
	> 71.375 => 71 gp
	> 271.375 => 271 gp
	> 3271.375 => 3,271 gp
*/
Number.prototype.money = function(currency_mark) {
	var b = typeof(currency_mark) === "undefined" ? true : currency_mark;
	var n = this;
	var c = $lng.gp;
	var s = $lng.currency_separator;
	if (n < 1 && n > 0) {
		if (n < 0.1 && n > 0) {
			n *= 100;
			c = $lng.cp;
		} else {
			n *= 10;
			c = $lng.sp;
		}
		n = Math.round(n)
	} else {
		n = Math.round(n).format();
	}
	return n + (b ? s + c : "");
}

/* -------------------------------------------------------------------------- */
/* # Validation */
/* -------------------------------------------------------------------------- */

/**
	Checks wether a string contains a sum operator between integers or not.
	Regular operators are '+' and '-'.
*/
function isRegularSum(s) { // s = string -- returns bool
	var m = s.match(/([\+-]?\d+)+/);
	return m != null && s == m[0];
}

/**
	Checks if a string is a regular fraction
*/
function isRegularFraction(s) { // s = string -- returns bool
	var m = s.match(/\d+(\/\d+)?/);
	return m != null && s == m[0];
}

/**
	Checks if a dice roll, optionally modified by a number, is valid or not.
	Left-hand number as well as right-hand number must be 1 or more.
	Modifier value can be either postive or negative.
*/
function isRegularRoll(s) { // s = string -- returns bool
	var m = s.match(/[1-9]\d*d[1-9]\d*([\+-]\d+)?/i);
	return m != null && s == m[0];
}

/* -------------------------------------------------------------------------- */
/* # Convert */
/* -------------------------------------------------------------------------- */

// TODO : html to text from string (used for desc when)
// TODO : text to html (i.e. convert diacritical and special symbols to html entities)

/**
	Converts a number or a string to a rounded down signed numeric.
	> 1 => "+1"
	> 0.6666 => "+0"
	> "-0.3333" => "-1"
*/
function convertToSignInt(s) {
	s = Math.floor(parseFloat(s));
	return (s >= 0 ? "+" : "") + s;
}

/**
	Converts a number or a string into a stringified integer of nth form.
	> 1.1 => "1st"
	> "11" => "11th"
	> 23.753 => "23rd"
*/
function convertToNth(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	n = n.toInt().toString();
	var m = n.substr(n.length - 1, 1);
	var s;
	if (n == "0" || n.substr(0, 1) == "-") s = n;
	else if (m == "1" && n != "11" ) s = n + $lng.n_st;
	else if (m == "2" && n != "12") s = n + $lng.n_nd;
	else if (m == "3" && n != "13") s = n + $lng.n_rd;
	else s = n + $lng.n_th;
	return s;
}

/**
	Converts a fraction (string) to float.
*/
function convertFractionToFloat(s) { // s = string -- returns float
	if (typeof(s) === "string" && isRegularFraction(s)) {
		var n = s.split("/");
		s = typeof(n[1]) !== "undefined" ? n[0] / n[1] : n[0];
	} return parseFloat(s);
}

/**
	Converts a float to fraction (string).
*/
function convertFloatToFraction(f) { // f = float -- returns string
	if (typeof(f) === "number") {
		if (f < 1.0 && f >= 0.75) return "3/4";
		if (f < 0.75 && f >= 0.5) return "1/2";
		if (f < 0.5 && f >= 0.333) return "1/3";
		if (f < 0.333 && f >= 0.25) return "1/4";
		if (f < 0.25 && f >= 0.166) return "1/6";
		if (f < 0.166 && f >= 0.125) return "1/8";
		if (f < 0.125) return "1/10";
		return Math.floor(f);
	} return f;
}

/**
	Converts a length number or string to another unit rounded squares.
*/
function convertFeetToMeters(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	return Math.floor(n / 5) * 1.5;
}
function convertMetersToFeet(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	return Math.floor(n / 1.5) * 5;
}
function convertFeetToSquares(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	return Math.floor(n / 5);
}
function convertMetersToSquares(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	return Math.floor(n / 1.5);
}
function convertSquaresToFeet(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	return Math.floor(n) * 5;
}
function convertSquaresToMeters(n) {
	if (typeof(n) === "string") n = parseFloat(n);
	return Math.floor(n) * 1.5;
}

/* -------------------------------------------------------------------------- */
/* # Linguistic */
/* -------------------------------------------------------------------------- */

/**
	Checks if an attributive adjective should be placed before the noun it
	qualifies in normal syntax form according to locale language.
	- Postpositive : French, Italian, Spanish, Portuguese, Romanian and Khmer
	- Prepositive  : English, German, Russian and Chinese
*/
function isAdjectivePrepositive() {
	switch($cfg.lng) {
		case "fr" : return false;
		case "en" :
		default   : return true;
	}
}

/**
	Checks if the locale language admit preposition omission in an enumeration.
	This will also determine if any article (definite or not) should be omitted.
	> FALSE : To something, to someone, to somebody, etc.
	> TRUE  : To something, someone, somebody, etc.
*/
function isPrepositionOmittable() {
	switch($cfg.lng) {
		case "fr" : return false;
		case "en" :
		default   : return true;
	}
}

/**
	Checks if a language is likely to allow a 'wide' use for capitalization.
	By convention, English admits capital letters for all words in headlines,
	work titles, organization names, proper names, hyphenations, and so on.
	French, and some other languages, don't, and have a strict usage for caps.
*/
function isCapitalLetterPermissive() {
	switch($cfg.lng) {
		case "fr" : return false;
		case "en" :
		default   : return true;
	}
}

/* -------------------------------------------------------------------------- */
/* # Units */
/* -------------------------------------------------------------------------- */

/**
	Returns the locale length unit.
*/
function getLocaleLengthUnit() {
	switch($cfg.lng) {
		case "fr" : return "unit_m";
		case "en" :
		default   : return "unit_ft";
	}
}

/**
	Returns the squares value of a suffixed string or a number.
	> "30f" => 6
	> "9m"  => 6
	> "6s"  => 6
	> 6.753 => 6
*/
function getSquaresValue(x) {
	if (isSetStr(x) || isSetNum(x)) {
		if (isSetStr(x)) {
			var q = x.substr(x.length - 1, 1);
			if (q == "f") n = convertFeetToSquares(x);
			else if (q == "m") n = convertMetersToSquares(x);
			else n = parseInt(x);
		} return n.toInt();
	} else return null;
}

/**
	Convert a squares value to locale length unit string.
*/
function convertSquaresToLocale(n, b) { // n = squares value, b = long format ? -- returns string
	var b = b || false;
	var c = n > 1;
	var u = getLocaleLengthUnit();
	if (u == "unit_ft") return convertSquaresToFeet(n).format() + " " + (b ? $lng[(c ? "feet" : "foot")] : $lng.unit_ft);
	else if (u == "unit_m") return convertSquaresToMeters(n).format() + " " + (b ? $lng[(c ? "meters" : "meter")] : $lng.unit_m);
	else return n.format() + " " + (b ? $lng[(c ? "squares" : "square")] : $lng.unit_sq);
}

/* -------------------------------------------------------------------------- */
/* # Dice */
/* -------------------------------------------------------------------------- */

/**
	Returns a single die throw depending on its faces (default is 20).
	> d() => 1-20
	> d(6) => 1-6
	> d(20) => 1-20
	> d(100) => 1-100
*/
function d(faces) { // faces = int -- returns int
	var f = Math.ceil(faces || 20);
	return Math.floor(Math.random() * f) + 1;
}

/**
	Returns a standard dice roll optionally modified by a single value.
	Only first modifier find out is either added or substracted.
	At least one roll is done. Default die's faces is 20.
	> roll("d") => 1-20
	> roll("2d6") => 2-12
	> roll("2d6+4") => 6-16
	> roll("2d6-4") => -2 to 8
	> roll("2d6-4+6") => -2 to 8
	> roll("14+2d6-4+6") => -2 to 8
*/
function roll(expr) { // expr = str -- returns int
	var q = expr.match(/(\d*d\d*)([\+-]\d+)?/i); // format to <n> d <f> [+/-] <m>
	if (q != null) {
		var d = q[1].split("d");
		var n = Math.ceil(d[0]) || 1;
		var f = Math.ceil(d[1]) || 20;
		var m = parseInt(q[2]) || 0;
		var r = 0;
		var i = 1;
		for (i; i <= n; i++) {
			r += Math.floor(Math.random() * f) + 1;
		} return r + m;
	} else wrn(expr + " is not a valid roll expression.");
};

/* -------------------------------------------------------------------------- */
/* # Location */
/* -------------------------------------------------------------------------- */

function getLocationSearch() {
	return location.search.slice(1);
}

function getLocationHash() {
	return window.location.hash.slice(1);
}

function getLocationFile() {
	var a = location.pathname.split("/");
	return a[a.length - 1];
}

function getLocationFileName() {
	return getLocationFile().split(".")[0];
}

function getLocationFoldPrefix() {
	return getLocationFileName() + "-";
}

/* -------------------------------------------------------------------------- */
/* # Sources */
/* -------------------------------------------------------------------------- */

function source(sel) {
	var sel = sel || "[data-src]";
	var o = document.querySelectorAll(sel);
	var i = 0, l = o.length;
	for (i; i < l; i++) {
		var k = o[i].dataset.src;
		if ($src[k] !== undefined) {
			o[i].innerHTML = $src[k];
			o[i].removeAttribute("data-src");
		}
	}
}

/* -------------------------------------------------------------------------- */
/* # Localization */
/* -------------------------------------------------------------------------- */

// TODO : add source() to localize()
// TEMP : add a cfg var to control wether the text should be overwritten or not if already defined ???

function localize(sel) {
	var s = sel || "[data-lng]";
	var o = document.querySelectorAll(s);
	var l = o.length, i = 0, k;
	for (i; i < l; i++) {
		k = o[i].dataset.lng;
		if (isSetStr($lng[k])) {
			o[i].innerHTML = $lng[k];
			o[i].removeAttribute("data-lng"); // TEMP
		}
	}
}

function bindLanguageEvents() {
	var o = document.getElementById("lng");
	o.addEventListener("click", function(e) {
		var o = e.target;
		var a = $app.lng;
		var p = a.indexOf(o.textContent.toLowerCase()) + 1;
		var n = a[(p < a.length ? p : 0)];
		o.innerHTML = n.toUpperCase();
		sessionStorage.setItem($usr.lng, n);
		window.location.reload();
	});
	o.addEventListener("keyup", function(e) {
		if (e.which == 13) e.target.click();
	});
}

/* -------------------------------------------------------------------------- */
/* # Document */
/* -------------------------------------------------------------------------- */

function setDocumentTitle(title) {
	if (document.getElementsByTagName("title")[0] == null) {
		var e = document.createElement("title");
		e.innerHTML = title;
		document.getElementsByTagName("head")[0].appendChild(e);
	}
}

/* -------------------------------------------------------------------------- */
/* # Links */
/* -------------------------------------------------------------------------- */

function createLink(arr, obj, path) {
	var path = path || "";
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].href == obj.dataset.href) {
			if (getLocationFileName() == path + arr[i].href) {
				var job = document.createElement("strong");
				obj.parentNode.replaceChild(job, obj);
				obj = job;
			} else obj.href = path + arr[i].href + ".html";
			if (obj.innerHTML == "") obj.innerHTML = arr[i]["text"];
			else obj.setAttribute("title", arr[i]["text"]);
			obj.removeAttribute("data-href");
			break;
		} else if (typeof (arr[i].fold) !== "undefined" && arr[i].fold.length > 0) {
			createLink(arr[i].fold, obj, path + arr[i].href + "-");
		}
	}
}

function createLinks(arr) {
	var a = document.getElementsByTagName("a");
	for (var i = 0; i < a.length; i++) {
		if (a[i].dataset.href !== undefined) {
			createLink(arr, a[i]);
		}
	}
}

/* -------------------------------------------------------------------------- */
/* # Navigation */
/* -------------------------------------------------------------------------- */

function toggleMenuItem(obj) {
	var p = obj.parentNode;
	var b = p.nextSibling;
	if (b.classList.contains("hide")) {
		b.classList.remove("hide");
		// obj.innerHTML = "-";
		obj.classList.add("active");
	} else {
		b.classList.add("hide");
		// obj.innerHTML = "+";
		obj.classList.remove("active");
	}
}

function toggleMenu(obj) {
	var aside = document.getElementsByTagName("aside")[0];
	if (aside.style.display == "none") {
		aside.style.display = "";
		obj.classList.remove("active");
		sessionStorage.setItem($usr.aside, aside.offsetWidth);
	} else {
		aside.style.display = "none";
		obj.classList.add("active");
		sessionStorage.setItem($usr.aside, 0);
	}
}

function createMenuItem(arr, list, path, child, off) {
	var href = path + arr.href;
	var item = document.createElement("li");
	var text = arr.text;
	var node;
	if (getLocationFileName() == href) {
		setDocumentTitle(text);
		node = document.createElement("strong");
		node.innerHTML = text;
	} else {
		node = document.createElement("a");
		node.setAttribute("href", href + ".html")
		node.innerHTML = text;
	}
	if (child) {
		var icon = document.createElement("span");
		icon.className = "show" + (off ? "" : " active");
		icon.addEventListener("click", function(event) {
			toggleMenuItem(event.target);
		});
		item.appendChild(icon);
	}
	item.appendChild(node);
	list.appendChild(item);
}

function createMenu(arr, list, path, fold, hide) {
	var path = path || "";
	var fold = typeof(fold) === "undefined" ? false : fold;
	var hide = hide || false;
	var i = 0, l = arr.length;
	for (i; i < l; i++) {
		if (!fold || typeof arr[i].fold === "undefined" || arr[i].fold.length == 0)
			createMenuItem(arr[i], list, path);
		else {
			var off = hide && (getLocationFileName == "index"
				|| getLocationFoldPrefix().indexOf(path + arr[i].href) < 0);
			createMenuItem(arr[i], list, path, true, off);
			var new_list = document.createElement("ul");
			if (off) new_list.setAttribute("class", "hide");
			list.appendChild(new_list);
			createMenu(arr[i].fold, new_list, path + arr[i].href + "-", fold, hide);
		}
	}
}

function createBreadcrumbs() {
	var path = getLocationFile().split(".")[0].split("-");
	var elem = document.createElement("nav");
	var html = _home;
	var i = 0, l = path.length;
	for (i; i < l; i++) {
		if (path != "index" && i < path.length) html += " / ";
		html += "<a data-href='" + path[i] + "'></a>";
	}
	elem.setAttribute("class", "breadcrumbs");
	elem.innerHTML = html;
	return elem;
}

// -----------------------------------------------------------------------------
// # Components
// -----------------------------------------------------------------------------

var infobox = (function() {
	// Vars
	var dialog_timeout;
	// Funcs
	function getBody() {
		return document.getElementsByTagName("body")[0];
	}
	function clickBody() {
		dialog_timeout = setTimeout(function() {
			if (infobox.get().style.display != "none") infobox.hide();
		}, 100);
	}
	// Process
	return {
		"get" : function() {
			return document.getElementById("infobox");
		},
		"create" : function() {
			var o = document.createElement("div");
			o.setAttribute("id", "infobox");
			o.classList.add("infobox");
			o.style.display = "none";
			getBody().appendChild(o);
		},
		"delete" : function() {
			var o = infobox.get();
			o.parentElement.removeChild(o);
			getBody().removeEventListener("click", clickBody);
		},
		"attach" : function(obj) {
			obj.dataset.infobox = "true";
			obj.classList.add("active");
			setTimeout(function() {
				clearTimeout(dialog_timeout);
			}, 50);
		},
		"detach" : function() {
			var q = document.querySelectorAll("[data-infobox]");
			for (var i = 0; i < q.length; i++) {
				q[i].removeAttribute("data-infobox");
				q[i].classList.remove("active");
			}
		},
		"show" : function(obj, str, pos) {
			var pos = pos || "vert"; // horz || vert
			var o = infobox.get(), e = obj, p = e.parentElement;
			var b = false, c = false;
			var s = 12, x; // space adj, x pos
			infobox.detach();
			infobox.attach(obj);
			o.show();
			o.innerHTML = str;
			// * Reset classes
			o.classList.remove("top");
			o.classList.remove("left");
			o.classList.remove("right");
			o.classList.remove("bottom");
			// * Reset styles
			o.style.width = "";
			// * Setup vars
			var o_w = o.offsetWidth; // box width
			var o_h = o.offsetHeight; // box height
			var e_w = e.offsetWidth; // element width
			var e_h = e.offsetHeight; // element height
			var e_l = e.offsetLeft; // element left
			var e_t = e.offsetTop; // element top
			var p_l = p.offsetLeft; // parent left
			var p_w = p.offsetWidth; // parent width
			var w_w = window.innerWidth; // screen width
			var d_h = document.body.offsetHeight; // doc height
			// * Check box height
			if (o_h > o_w) { // box higher than wide
				o.style.width = (Math.max(w_w * 0.875, o_w)) + "px"; // expand box width up to 87.5% of screen width
				o_w = o.offsetWidth
				b = true;
			}
			// * Check line break
			if (e_l + e_w > p_l + p_w) c = true; // element goes to line
			// * Check pos
			if (b || pos == "vert" || (e_w + e_l + o_w + s > w_w && e_l - (o_w + s) < 0)) { // top/bottom
				s /= 2;
				x =  e_l - ((o_w / 2) - (e_w / 2));
				// * X  Axis
				if (b) {
					o.style.left = ((w_w - o_w) / 2) + "px"; // center horizontally toward window
				} else if (x < 0) {
					o.style.left = "0px"; // stick to left
				} else if (x + o_w > w_w) {
					o.style.left = w_w - o_w + "px"; // stick to right
				} else {
					if (c) o.style.left = p_l + p_w - o_w + "px"; // align to parent right
					else o.style.left = x + "px"; // center horizontally toward element
				}
				// * Y Axis
				if (e_t - o_h - s < 0) { // overflow from top, show at bottom
					o.classList.add("bottom");
					o.style.top = (e_h + e_t + s) + "px";
				} else { // else, show at top
					o.classList.add("top");
					o.style.top = (e_t - o_h - s) + "px";
				}
			} else { // left/right
				s = 12;
				// * X Axis
				if (e_l + e_w + o_w + s > w_w) {
					o.classList.add("left");
					o.style.left = e_l - (o_w + s) + "px"; // show at left
				} else {
					o.classList.add("right");
					o.style.left = e_l + e_w + s + "px"; // show at right
				}
				// * Y Axis
				if (e_t + (e_h / 2) - (o_h / 2) < 0) { // overflow from top
					o.style.top = 0 + "px";
				} else if (e_t + (e_h / 2) + (o_h / 2) > d_h) { // overflow from bottom
					o.style.top = e_t + e_h - o_h + "px";
				} else {
					o.style.top = e_t + (e_h / 2) - (o_h / 2) + "px";
				}
			}
		},
		"hide" : function() {
			var o = infobox.get();
			infobox.detach();
			o.innerHTML = "";
			o.style.top = "";
			o.style.left = "";
			o.hide();
		},
		"bind" : function() {
			var o = infobox.get();
			o.addEventListener("click", infobox.hide);
			getBody().addEventListener("click", clickBody);
		},
		"init" : function() {
			infobox.create();
			infobox.bind();
		}
	};
}());

/* -------------------------------------------------------------------------- */
/* # Build */
/* -------------------------------------------------------------------------- */

function build() {

	// * Prompt process if needed
	if ($cfg.bld && getLocationSearch() != "no-build") {

		// * Get body
		var body = document.getElementsByTagName("body")[0];

		// * Define content
		var _content = body.innerHTML;

		// * Create containers
		var header = document.createElement("header");
		var footer = document.createElement("footer");
		var main = document.createElement("main");
		var aside = document.createElement("aside");
		var nav = document.createElement("nav");
		var menu = document.createElement("ul");
		var slider = document.createElement("div");
		var along = document.createElement("div");
		var section = document.createElement("section");
		var breadcrumbs;

		// * Get storage vars
		var length = sessionStorage.getItem($usr.aside);

		// * Erase body
		body.innerHTML = "";

		// * Set layout
		body.className = "dm";

		// * Set slider class
		slider.setAttribute("class", "slider");
		along.setAttribute("class", "along");

		// * Check slider state
		if (length == 0) {
			slider.classList.add("active");
			aside.style.display = "none";
		} else if (length > 0 && window.innerWidth >= 800) {
			aside.style.width = length + "px";
		}

		// * Fill containers
		header.innerHTML = _header;
		footer.innerHTML = _footer;
		section.innerHTML = _content;

		// * Create breadcrumbs
		breadcrumbs = createBreadcrumbs();

		// * Create menu
		createMenu($nav.root, menu, "", true, true);
		nav.setAttribute("class", "nav");

		// * Append to aside
		nav.appendChild(menu);
		aside.appendChild(nav);

		// * Append to along
		along.appendChild(breadcrumbs);
		along.appendChild(section);

		// * Append to main
		main.appendChild(aside);
		main.appendChild(slider);
		main.appendChild(along);

		// * Append to body
		body.appendChild(header);
		body.appendChild(main);
		body.appendChild(footer);
	}

	// * Create links
	createLinks($nav.root);
}

function bindSliderEvents() {
	var body = document.querySelector("body");
	var aside = document.querySelector("aside");
	var slider = document.querySelector(".slider");
	var b = false; // is mouse over slider
	var c = false; // is slider off and has not moved
	var d = false; // is slider off (after movement)
	var w = 0;
	var x = 0;
	var z = 0;
	var min = 0;
	var max = 0;
	slider.addEventListener("click", function(e) {
		if (window.innerWidth >= 800) return;
		toggleMenu(slider);
	});
	slider.addEventListener("dblclick", function(e) {
		toggleMenu(slider);
	});
	slider.addEventListener("mousedown", function(e) {
		if (window.innerWidth < 800) return;
		w = parseInt(window.innerWidth);
		min = Math.floor(w / 10);
		max = Math.floor(w / 2);
		b = true;
		c = true;
	});
	body.onmousedown = function() {if (b) return false}; // prevent selection (FF)
	body.onselectstart = function() {if (b) return false}; // prevent selection (IE)
	body.addEventListener("mouseup", function(e) {
		if (b && window.innerWidth >= 800) {
			if (c) toggleMenu(slider);
			c = false;
			b = false;
			z = 0;
			body.style.cursor = "";
			slider.classList.remove("focus");
			sessionStorage.setItem($usr.aside, aside.offsetWidth);
		}
	});
	body.addEventListener("mousemove", function(e) {
		if (b && window.innerWidth >= 800) {
			c = false;
			d = slider.classList.contains("active");
			w = aside.offsetWidth;
			x = e.clientX;
			slider.classList.add("focus");
			body.style.cursor = "col-resize";
			if ((x > z && d) || // right
					(x < z && w == min && !d)) { // left
				toggleMenu(slider);
			} else if (w >= min && w <= max) {
				z = x;
				x = Math.min(Math.max(x, min), max);
				aside.style.width = x + "px";
			} else aside.style.width = min + "px";
		}
	});
	window.addEventListener("resize", function() {
		if (window.innerWidth < 800) aside.style.width = "";
	});
}

/* -------------------------------------------------------------------------- */
/* # Initialize */
/* -------------------------------------------------------------------------- */

function initialize() {

	/** NOTE : Language
		The application uses a mixed-up language system.
		So generated content language is independant from static content language.
		Thus, a HTML document may hold text of a different language than JS code.
		For instance, a page can have been written in french, while scripts generate
		english text.
	*/

	// WARNING :
	// HTML static content is ALWAYS localized BEFORE build process.
	// Thus, any element bearing a 'data-lng' property will be translated.
	// Text content generated after build process is not translated this way.

	localize(); // TEMP
	source(); // TEMP
	build();
	bindLanguageEvents();
	bindSliderEvents();
}
