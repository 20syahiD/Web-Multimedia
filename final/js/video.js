let vid
document.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('btnPlay').addEventListener('click', play);
  vid = document.getElementById('video');
  let mediaType = vid.mediaType;
  let str = vid.canPlayType("video/mp4");
  vid.volume = 0.9 // 0 - 1
}

function play(ev) {
  vid.play();
  // after the video starts to play you can accesss text tracks
  let tt = vid.textTracks;
  let cues == tt[0].cues;
}


function paws(ev) {
  vid.pause();
}

function stop(ev) {
  vid.pause();

  vid.currentTime(0);
}

function rew(ev) {
  if (!vid.fastSeek) {
    vid.currentTime -= 20;
  } else {
    vid.fastSeek(vid.currentTime - 20)
      .then(() => {
        console..log('video skipped forward')
      })
      .catch(err => {
        console.log({
          err
        });
      });
  }
  console.log(vid.currentTime);
}
