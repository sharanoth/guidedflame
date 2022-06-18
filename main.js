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

		maindivbg.style.opacity = 1;
		maindivbg.style.filter = "blur(0px)";
	}, 800);
}

function navigation() {
	var closebutton = document.getElementById("closebutton");
	var maindiv = document.getElementById("maindiv");
	var bio = document.getElementById("bio");
	var contact = document.getElementById("contactdiv");
	var mainmenu = document.getElementsByClassName("menuelement");
	var coldness = document.getElementById("coldnessa");

	if (location.hash == "#main") {
		bio.style.opacity = "0";
		contact.style.opacity = "0";
		closebutton.style.opacity = "0";
		maindiv.style.display = "flex";

		for (let index = 0; index < mainmenu.length; index++) {
			setTimeout(function () {
				mainmenu[index].style.display = "block";
				mainmenu[index].style.opacity = "1";
				mainmenu[index].style.visibility = "visible";
			}, 500);
		}
		setTimeout(function () {
			bio.style.visibility = "collapse";
			contact.style.visibility = "collapse";
			closebutton.style.visibility = "collapse";
		}, 500);
	}
	if (location.hash == "#contact") {
		for (let index = 0; index < mainmenu.length; index++) {
			mainmenu[index].style.opacity = "0";
		}

		contact.style.visibility = "visible";
		closebutton.style.visibility = "visible";
		setTimeout(function () {
			for (let index = 0; index < mainmenu.length; index++) {
				mainmenu[index].style.visibility = "collapse";
			}
			closebutton.style.opacity = "1";
			contact.style.opacity = "1";
			maindiv.style.display = "none";
		}, 500);
	}

	if (location.hash == "#aboutme") {
		for (let index = 0; index < mainmenu.length; index++) {
			mainmenu[index].style.opacity = "0";
		}

		bio.style.visibility = "visible";
		closebutton.style.visibility = "visible";
		setTimeout(function () {
			for (let index = 0; index < mainmenu.length; index++) {
				mainmenu[index].style.visibility = "collapse";
			}
			closebutton.style.opacity = "1";
			bio.style.opacity = "1";
			maindiv.style.display = "none";
		}, 500);
	}
}

window.onhashchange = navigation;
