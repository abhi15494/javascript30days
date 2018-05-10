//Get our element
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons= player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player_slider");

//Build our fuenctions
function togglePlay(){
    // if(video.paused) video.play();
    // else video.pause();
    // OR
    const method = video.paused ? "play" : "pause";
    video[method]();
}

function updateToggle(){
    const icon = this.paused ? "<i class='fa fa-play'></i>" : "<i class='fa fa-pause'></i>";
    toggle.innerHTML = icon;
}

function skip(){
    console.log(this.dataset.skip + " - " + video.currentTime);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent+"%"; 
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//Hook up listener
video.addEventListener("click", togglePlay);
video.addEventListener("pause", updateToggle);
video.addEventListener("play", updateToggle);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
progress.addEventListener("click", scrub);
skipButtons.forEach(button => {
    button.addEventListener("click", skip)
});
ranges.forEach(element => {
    element.addEventListener("mousemove", handleRangeUpdate)
});
ranges.forEach(element => {
    element.addEventListener("change", handleRangeUpdate)
});