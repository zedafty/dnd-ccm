// -----------------------------------------------------------------------------
// # Data Manipulation
// -----------------------------------------------------------------------------

function addKeyValToDataObject(arr, key, val) { // add a key-val pair -- returns array
	var a = arr, k;
	for (k in a) {
		a[k][key] = val;
	} return a;
}

function deleteKeysFromDataObject(arr, lst) { // delete all keys in lst -- returns array
	var a = arr, b = lst, m, n;
	for (m in a) {
		for (n in b) {
			delete a[m][b[n]];
		}
	} return a;
}

function restrictDataObject(arr, lst) { // delete all keys but those in lst -- returns array
	var a = arr, b = lst, m, n, k, t;
	for (m in a) {
		loop:
		for (k in a[m]) {
			for (n in b) {
				if (b[n] == k) {
					continue loop;
				}
			}
			delete a[m][k];
		}
	} return a;
}

// -----------------------------------------------------------------------------
// # Pathing
// -----------------------------------------------------------------------------

function getPathFromCat(cat) { // TEMP
	switch (cat) {
		case "mon" : return "monsters-";
		case "coo" : return "npcs-cohorts-";
	}
}

// -----------------------------------------------------------------------------
// # Initialize
// -----------------------------------------------------------------------------

function initializeSearch() {

	var keys = ["id", "name"];

	var db_mon = addKeyValToDataObject(restrictDataObject($monsters, keys), "cat", "mon");
	var db_coo = addKeyValToDataObject(restrictDataObject($cohorts, keys), "cat", "coo");
	var db = db_mon.concat(db_coo);

	// deleteKeysFromDataObject(db, ["coins","goods", "items"]); // EXAMPLE
	// restrictDataObject(db, ["id", "name"]); // EXAMPLE

	var search = document.querySelector("[data-search]");
	var result = document.querySelector("[data-result]");

	search.addEventListener("keyup", function(e) {
		var o = e.target, s = o.value, r = "";
		if (s.length > 0) {
			var i = 0, l = db.length;
			for (i; i < l; i++) {
				if (db[i].name.substr(0, s.length).trim().toLowerCase() == s.trim().toLowerCase()) {
					r += "<a href='creatures-" + getPathFromCat(db[i].cat) + db[i].id.toLowerCase() + ".html'>" + db[i].name + "<br>"; // TEMP
				}
			}
		}
		result.innerHTML = r == "" ? "&nbsp;" : r;
	});
}
