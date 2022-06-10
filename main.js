var bgm_on = 0;

function sexyfunction() {
	var landingdiv = document.getElementById("landingdiv");
	var maindiv = document.getElementById("maindiv");

	var audio = new Audio("media/guidedflame.mp3");
	audio.loop = true;

	if (bgm_on == 0) {
		bgm_on = 1;
		landingdiv.style.opacity = 0;
		setTimeout(function () {
			audio.play();

			landingdiv.setAttribute("hidden", "true");
			maindiv.style.visibility = "visible";
			maindiv.style.opacity = 1;
		}, 500);
	}
}
