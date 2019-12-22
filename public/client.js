function hoi(text) {
	$.get(`/hoi?text=${encodeURIComponent(text)}`, (data) => {
		data = JSON.parse(data)
		document.getElementById("hoiText").innerHTML = `Hoi ${data["name"]} om ${data["time"]}`
	});
}