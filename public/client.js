function hoi(text) {
	$.get(`/hoi?text=${text}`, (data) => {
		document.getElementById("hoiText").innerHTML = `Hoi ${data}`
	});
}