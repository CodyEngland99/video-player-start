const video = document.getElementById("video")
const playBtn = document.getElementById("play")
const pauseBtn = document.getElementById("stop")
const valueBar = document.getElementById("progress")
const timeStamp = document.getElementById("timestamp")

function playAction() {
  video.play()
}

function pauseAction () {
  video.pause()
}

function progressBar () {
  const dur = video.duration;
  const cur = video.currentTime;

  const progress = cur / dur * 100

  valueBar.value = progress;

  timeStamp.innerText = Math.round(cur)
}

function updateProgress (e) {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function init() {
  playBtn.addEventListener("click", playAction)
  pauseBtn.addEventListener("click", pauseAction)
  video.addEventListener("timeupdate", progressBar)
  valueBar.addEventListener("click", updateProgress)
}

init()