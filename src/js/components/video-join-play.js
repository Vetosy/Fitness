const videoBlog = document.querySelector('.js-video-block');

if (videoBlog) {
  const video = document.querySelector('.js-video');
  const playBtn = document.querySelector('.js-video-btn');
  playBtn.addEventListener('click', () => {
    video.play();
    video.controls = true;
    playBtn.classList.add('has-played');
  });

  video.onpause = function () {
    video.controls = false;
    playBtn.classList.remove('has-played');
  };
}
