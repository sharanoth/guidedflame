var bgm_on = 0;

function sexyfunction(){
    if(bgm_on == 0){
        var audio = new Audio('media/guidedflame.mp3');
        audio.loop = true;
        audio.play();
        bgm_on = 1;
    }
}