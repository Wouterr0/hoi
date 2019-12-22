function hoi(text) {
	$.get(`/hoi?text=${encodeURIComponent(text)}`, (data) => {
		document.getElementById("hoiText").innerHTML = `Hoi ${data}`
	});
}