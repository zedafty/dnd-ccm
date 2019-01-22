// -----------------------------------------------------------------------------
// * Get
// -----------------------------------------------------------------------------

function getStoresContainer() {
	return document.getElementById("stores");
}

// -----------------------------------------------------------------------------
// * Create
// -----------------------------------------------------------------------------

function createStoreItems(obj, arr) {
	var o = obj, a = arr;
	var i, t, s, n, p;
	var d, h, u, l;
	for (i = 0; i < a.length; i++) {
		// * Append Head
		if (t != a[i].type) {
			d = document.createElement("div");
			h = document.createElement("h3");
			u = document.createElement("ul")
			t = a[i].type;
			h.innerHTML = $lng[t];
			d.appendChild(h);
		}
		// * Append Line
		l = document.createElement("li");
		// * Add Name
		s = document.createElement("span");
		// * Bind Infobox Show Event
		if (typeof(a[i].desc) !== "undefined" && a[i].desc != "") {
			n = document.createElement("span");
			n.innerHTML = a[i].name;
			n.classList.add("link");
			n.dataset.desc = a[i].desc;
			n.addEventListener("click", function(e) {
				if (e.target.dataset.infobox == "true") {
					infobox.hide();
				} else {
					infobox.show(e.target, e.target.dataset.desc, "horz");
				}
			});
			s.appendChild(n);
		} else {
			s.innerHTML = a[i].name;
		}
		l.appendChild(s);
		// * Add Price
		if (typeof(a[i].price) !== "undefined") {
			p = document.createElement("span");
			p.innerHTML = a[i].price.money();
			l.appendChild(p);
		}
		u.appendChild(l);
		// * Append block
		if ((i + 1 < a.length && a[i + 1].type != a[i].type) || i + 1 == a.length) {
			d.appendChild(u);
			o.appendChild(d);
		}
	}
}

function createStores(loc) {
	var o = getStoresContainer();
	var a = $stores;
	var n, b;
	var h, t, p, d;
	// * Insert section header
	h = document.createElement("h1");
	h.innerHTML = $lng[loc];
	o.appendChild(h);
	// * Search for specified store location
	for (n in a) {
		if (a[n].loc != loc) continue;
		// * Append store header
		t = document.createElement("h2");
		t.innerHTML = a[n].name + " <small>" + a[n].id + "</small>";
		p = document.createElement("p");
		p.innerHTML =  a[n].desc;
		o.appendChild(t);
		o.appendChild(p);
		// * Proceed with store content
		b = a[n].store;
		// * Pursue if empty
		if (typeof(b) === "undefined" || b.length == 0) continue;
		// * Sort array
		b.sort(function(a, b) {
			if (a.type > b.type) return 1;
			if (b.type < a.type) return -1;
			if (a.type == b.type) return a.price - b.price;
			return 0;
		});
		// * Prepare block container
		d = document.createElement("div");
		d.classList.add("block-grid");
		// * List items
		createStoreItems(d, b);
		o.appendChild(d);
	}
}

// -----------------------------------------------------------------------------
// * Initialize
// -----------------------------------------------------------------------------

function initializeStores(loc) {
	infobox.init();
	createStores(loc);
}
