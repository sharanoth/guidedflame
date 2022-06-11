var bgm_on = 0;

function sexyfunction() {
	var landingdiv = document.getElementById("landingdiv");
	var maindiv = document.getElementById("maindiv");
	var maindivbg = document.getElementById("maindivbg");
	var body = document.getElementById("body");

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
			maindiv.style.width = "fit-content";

			maindivbg.style.width = "100vw";
			maindivbg.style.visibility = "visible";
			maindivbg.style.opacity = 1;
			maindivbg.style.filter = "blur(0px)";
		}, 500);
	}
}
