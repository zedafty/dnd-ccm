/* -------------------------------------------------------------------------- */
/* # Get */
/* -------------------------------------------------------------------------- */

function getAudioPlayer() {
	return document.querySelector("audio");
}

/* -------------------------------------------------------------------------- */
/* # Switch */
/* -------------------------------------------------------------------------- */

function switchAudioTitle(o) {
	var p = o.querySelector("span");
	var s = o.dataset.title;
	o.dataset.title = p.innerHTML;
	p.innerHTML = s;
}

/* -------------------------------------------------------------------------- */
/* # Create */
/* -------------------------------------------------------------------------- */

function createImage(src, alt, txt) { // src = str, alt = str, txt = str -- returns HTML element
	var img = document.createElement("img");
	var fig = document.createElement("figure");
	img.setAttribute("src", $loc.img + src);
	img.setAttribute("alt", alt);
	fig.setAttribute("class", "image");
	fig.appendChild(img);
	if (typeof(txt) === "string" && txt != "") {
		var cap = document.createElement("figcaption");
		cap.innerHTML = txt;
		fig.appendChild(cap);
	} return fig;
}

function createAudioList(arr) { // arr = audio list -- returns HTML element
	var a = arr, l = a.length, i = 0, s;
	var lst = document.createElement("ul");
	var itm, lnk, ico, spn;
	for (i; i < l; i++) {
		itm = document.createElement("li");
		lnk = document.createElement("a");
		ico = document.createElement("i");
		spn = document.createElement("span");
		lnk.setAttribute("href", "javascript:void(0)");
		lnk.setAttribute("onClick", "playAudio(this)");
		lnk.dataset.file = a[i].file;
		ico.setAttribute("class", "volume-up");
		s = a[i].name;
		if ($cfg.str.snd_len > 0 && s.length > $cfg.str.snd_len) {
			lnk.addEventListener("mouseenter", function(e) {switchAudioTitle(e.target)});
			lnk.addEventListener("mouseleave", function(e) {switchAudioTitle(e.target)});
			lnk.dataset.title = s;
			s = s.substr(0, $cfg.str.snd_len - 1) + "&hellip;";
		}
		spn.innerHTML = s;
		lnk.appendChild(ico);
		lnk.appendChild(spn)
		itm.appendChild(lnk);
		lst.appendChild(itm);
	} return lst;
}

function createAudioPlayer(arr) { // arr = audio list -- returns HTML element
	var div = document.createElement("div");
	var aud = document.createElement("audio");
	var lst = createAudioList(arr);
	div.setAttribute("class", "audio");
	div.appendChild(aud);
	div.appendChild(lst);
	return div;
}

/* -------------------------------------------------------------------------- */
/* # Play */
/* -------------------------------------------------------------------------- */

function playAudio(ele) { // ele = source element
	var src = $loc.snd + ele.dataset.file;
	var aud = getAudioPlayer();
	if (aud.dataset.playSrc == src) {
		if (aud.paused) aud.play();
		else aud.load();
	} else {
		aud.dataset.playSrc = src;
		aud.src = src;
		aud.load();
		aud.play();
	}
}
