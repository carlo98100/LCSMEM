const videoPlayer = document.createElement('video');

videoPlayer.style.width = '100%' // fills the width of the parent

videoPlayer.controls = true; // if we want to use our own controls, set this to false

document.querySelector('#video-container').appendChild(videoPlayer)

function playVideo(id){
  if (videoPlayer.canPlayType('video/mp4')) { // there are other formats that can be switched to
    videoPlayer.setAttribute('src','/data/video-stream/' + id);
  }
}

console.log(videoPlayer)
