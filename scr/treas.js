/* -------------------------------------------------------------------------- */
/* # Treasures */
/* -------------------------------------------------------------------------- */

var treasures = (function() {
	var cfg = {
		"data" : [{"id" : "XXXX00", "name" : "Name", "value" : 0, "desc" : "Description."}],
		"ranges" : [0, 20, 100, 200, 1000, 2000, 10000],
		"filter" : "filter",
		"table" : "table",
		"rand" : "rand",
		"desc" : "desc"
	};
	function getData() {return cfg.data}
	function getDataValueRanges() {return cfg.ranges}
	function getFilter() {return document.getElementById(cfg.filter)}
	function getTable() {return document.getElementById(cfg.table)}
	function getDesc() {return document.getElementById(cfg.desc)}
	function getRand() {return document.getElementById(cfg.rand)}
	return {
		"getDataValueRange" : function(value) {
			var a = getDataValueRanges(), v = -1;
			for (var i = 0; i < a.length; i++) {
				if (value >= a[i] && value < a[i + 1]) v = i + 1;
			} return v;
		},
		"getRandomDataIndex" : function(range) {
			var r = range || -1, g = getDataValueRanges();
			if (r <= 0) return -1;
			var min = g[r - 1], max = g[r];
			var a = getData(), b = [], i;
			for (i = 0; i < a.length; i++) {
				if (a[i].value >= min && a[i].value < max) b.push(i);
			} return b[Math.floor(Math.random() * b.length)];
		},
		"buildTable" : function(sort) {
			var sort = sort || "id-asc";
			var gems = getData();
			var desc = getDesc();
			var tbody = getTable().getElementsByTagName("tbody")[0];
			switch (sort) {
				case "name-asc"   : sortByCharAsc(gems, "name");  break;
				case "name-desc"  : sortByCharDesc(gems, "name"); break;
				case "value-asc"  : sortByNumAsc(gems, "value");  break;
				case "value-desc" : sortByNumDesc(gems, "value"); break;
				default           : sortByStrAsc(gems, "id");     break;
			}
			desc.hide();
			tbody.innerHTML = "";
			for (var i = 0; i < gems.length; i++) {
				var d = gems[i].desc;
				var v = gems[i].value;
				var r = this.getDataValueRange(v);
				var f = document.querySelector("[data-filter='range-" + r +"']");
				if (f.getAttribute("class") != "active") continue;
				var tr = document.createElement("tr");
				var t1 = document.createElement("td");
				var t2 = document.createElement("td");
				var t3 = document.createElement("td");
				var t4 = document.createElement("td");
				var el = document.createElement("span");
				tr.dataset.range = r;
				t2.innerHTML = v.format() + "&nbsp;" + $lng.gp;
				t3.innerHTML = d;
				t3.className = "hide-screen text-justify text-tiny";
				t4.innerHTML = "<small>" + gems[i].id + "</small>";
				el.innerHTML = gems[i].name;
				t1.appendChild(el);
				tr.appendChild(t1);
				tr.appendChild(t2);
				tr.appendChild(t3);
				tr.appendChild(t4);
				if (d != "") {
					el.className = "link";
					el.addEventListener("click", function(event) {
						var o = event.target, j = desc;
						if (o.classList.contains("active")) {
							o.classList.remove("active");
							j.hide();
						} else {
							var a = getTable().getElementsByTagName("tbody")[0].querySelectorAll(".active");
							for (var i = 0; i < a.length; i++) a[i].classList.remove("active");
							o.classList.add("active");
							j.innerHTML = "<h4>" + o.innerHTML + "</h4><p>" + o.parentElement.parentElement.children[2].innerHTML + "</p>";
							j.show();
						}
					});
				}
				tbody.appendChild(tr);
			}
		},
		"createTableFilter" : function() {
			var f = getFilter();
			var r = getDataValueRanges();
			for (var i = 0; i < r.length - 1; i++) {
				var e = document.createElement("dd");
				e.dataset.filter = "range-" + (i + 1);
				e.className = "active";
				e.innerHTML = (r[i + 1] / 2).format() + "&nbsp;" + $lng.gp;
				f.insertBefore(e, f.lastElementChild);
			}
		},
		"createTable" : function() {
			var f = document.querySelector("[data-sort].active");
			this.buildTable(f != null ? f.dataset.sort : "");
		},
		"setTableSort" : function(obj, active) {
			var a = getTable().getElementsByTagName("thead")[0].getElementsByClassName("active");
			for (var i = 0; i < a.length; i++) a[i].removeAttribute("class");
			if (!active) obj.className = ("active");
		},
		"setTableFilter" : function(obj, active) {
			if (!active) obj.className = "active";
			else obj.removeAttribute("class");
		},
		"bindTableSortEvents" : function() {
			var self = this, a = getTable().querySelectorAll("[data-sort]");
			for (var i = 0; i < a.length; i++) {
				a[i].addEventListener("click", function(event) {
					var o = event.target, b = o.getAttribute("class") == "active";
					self.setTableSort(o, b);
					self.createTable();
				});
			}
		},
		"bindTableFilterEvents" : function() {
			var self = this;
			var n = document.querySelector(".subnav");
			var a = n.querySelectorAll("[data-filter]");
			for (var i = 0; i < a.length; i++) {
				a[i].addEventListener("click", function(event) {
					var o = event.target, b = o.getAttribute("class") == "active";
					self.setTableFilter(o, b);
					self.createTable();
				});
			}
			n.getElementsByTagName("dt")[0].addEventListener("click", function() {
				for (var i = 0; i < a.length; i++) self.setTableFilter(a[i], false);
				self.createTable();
			});
			n.querySelector("[data-filter-erase]").addEventListener("click", function() {
				var a = document.querySelector(".subnav").querySelectorAll("[data-filter]");
				for (var i = 0; i < a.length; i++) a[i].removeAttribute("class");
				self.createTable();
			});
		},
		"bindRandomEvents" : function() {
			var self = this;
			var gems = getData();
			var rand = getRand();
			var roll = rand.querySelector("[data-roll]");
			var prob = rand.querySelector("[data-prob]");
			var box = rand.querySelector("[data-box]");
			var out = box.querySelector("[data-out]");
			var sum = box.querySelector("[data-sum]");
			var null_box = box.querySelector("[data-null]");
			var null_roll = null_box.querySelector("[data-null-roll]");
			var i_roll = 0, i_sum = 0;
			var m_move = false;
			function updateInputValue(e) {
				prob.nextElementSibling.children[0].innerHTML = e.target.value;
			}
			function checkMouseMove(e) {
				if (m_move) updateInputValue(e);
			}
			prob.addEventListener("mouseup", function() {m_move = false});
			prob.addEventListener("mousedown", function() {m_move = true});
			prob.addEventListener("mousemove", function(event) {checkMouseMove(event)});
			prob.addEventListener("change", function(event) {updateInputValue(event)});
			prob.addEventListener("keyup", function(event) {updateInputValue(event)});
			prob.addEventListener("keydown", function(event) {updateInputValue(event)});
			rand.querySelector("[data-generate]").addEventListener("click", function() {
				var k = -1, x = 1, q;
				if (prob.value >= d(100)) {
					var a = document.querySelectorAll("[data-filter]"), b = [];
					for (var i = 0; i < a.length; i++) {
						if (a[i].className == "active") {
							b.push(a[i].dataset.filter.replace("range-", ""));
						}
					}
					k = self.getRandomDataIndex(b[Math.floor(Math.random() * b.length)]);
				}
				q = out.querySelector("[data-index='" + k + "']");
				if (k >= 0) {
					i_roll++;
					i_sum += gems[k].value;
					if (q != null) {
						var t = q.querySelector("[data-times]");
						x = parseInt(t.innerHTML) + 1;
						t.innerHTML = x;
					} else {
						var test = ""
						+ "<div class='clear' data-index='" +k + "'>"
						+ "<div class='left small'>"
						+ "&times;<span data-times>" + x + "</span>"
						+ "</div>"
						+ "<div class='left'>" + gems[k].name + "</div>"
						+ "<div class='right'>"
						+ "<span data-value>" + gems[k].value.format() + "</span>&nbsp;" + $lng.gp
						+ "</div>"
						+ "</div>"
						out.innerHTML += test;
					}
				} else {
					null_box.show();
					null_roll.innerHTML = parseInt(null_roll.innerHTML) + 1;
				}
				if (i_roll > 1) sum.show();
				sum.querySelector("[data-sum-roll]").innerHTML = i_roll;
				sum.querySelector("[data-sum-value]").innerHTML = i_sum.format();
				sum.querySelector("[data-sum-currency]").innerHTML = $lng.gp;
				box.show();
				roll.innerHTML = parseInt(roll.innerHTML) + 1;
			});
			rand.querySelector("[data-reset]").addEventListener("click", function() {
				i_sum = 0;
				i_roll = 0;
				roll.innerHTML = 0;
				null_roll.innerHTML = 0;
				out.innerHTML = "";
				sum.hide();
				box.hide();
				null_box.hide();
			});
		},
		"init" : function(def) {
			for (n in def) if (cfg[n] !== null) cfg[n] = def[n];
			this.createTableFilter();
			this.bindRandomEvents();
			this.bindTableSortEvents();
			this.bindTableFilterEvents();
			this.createTable();
		}
	};
}());
