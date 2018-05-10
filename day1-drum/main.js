
function playsound(e){
    var audio = document.querySelector("audio[data-key='"+ e.keyCode +"']");
    var key = document.querySelector(".key[data-key='"+ e.keyCode +"']");
    if(!audio) return false; // Stop the function from running all together
    audio.currentTime = 0;
	audio.play();
    key.classList.add("active");
};

function removetranstion(e){
    if(e.propertyName !== 'transform') return false;
    this.classList.remove("active");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removetranstion);
});

window.addEventListener("keydown", playsound);

