var bgm_on = 0;

function sexyfunction() {
	var landingdiv = document.getElementById("landingdiv");
	var landing = document.getElementById("landing");
	var maindiv = document.getElementById("maindiv");
	var maindivbg = document.getElementById("maindivbg");
	var landingjp = document.getElementById("landingjp");
	var body = document.getElementById("body");

	location.hash = "#main";

	var audio = new Audio("media/guidedflame.mp3");
	audio.loop = true;

	if (bgm_on == 0) {
		bgm_on = 1;
		audio.play();
	}

	landing.style.color = "white";
	landingjp.style.color = "white";

	landingdiv.style.opacity = 0;

	setTimeout(function () {
		landingdiv.setAttribute("hidden", "true");

		maindiv.style.visibility = "visible";
		maindiv.style.opacity = 1;
		maindiv.style.width = "fit-content";

		maindivbg.style.width = "100vw";
		maindivbg.style.visibility = "visible";
		maindivbg.style.opacity = 1;
		maindivbg.style.filter = "blur(0px)";
	}, 800);
}

function navigation() {
	var maindiv = document.getElementById("maindiv");
	var bio = document.getElementById("bio");
	var bioflex = document.getElementById("bioflex");
	var mainmenu = document.getElementsByClassName("menuelement");

	if (location.hash == "#main") {
		for (let index = 0; index < mainmenu.length; index++) {
			bio.style.opacity = "0";
			mainmenu[index].style.opacity = "1";
			mainmenu[index].style.visibility = "visible";

			setTimeout(() => {
				mainmenu[index].style.display = "block";

				bio.style.display = "none";
			}, 500);
		}
	}

	if (location.hash == "#aboutme") {
		for (let index = 0; index < mainmenu.length; index++) {
			mainmenu[index].style.opacity = "0";
			bio.style.opacity = "0";
			setTimeout(() => {
				mainmenu[index].style.display = "none";
				bioflex.style.display = "flex";
				bio.style.display = "block";
				bio.style.opacity = "1";
			}, 500);
		}
	}

	if (location.hash == "#contact") {
		var mainmenu = document.getElementsByClassName("menuelement");
		for (let index = 0; index < mainmenu.length; index++) {
			mainmenu[index].style.opacity = "1";
		}
	}
}

window.onhashchange = navigation;
