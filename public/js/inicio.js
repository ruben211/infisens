
    	function clonar() {
	var c = document.getElementById("clon2");
	var clon = c.cloneNode("clon2");
	clon.style.width = "50px";
	document.body.appendChild(clon);
}

// document.getElementById("lista").addEventListener("click", clonar)