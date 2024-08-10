function SoundPlay() {
  const soundBtn = document.getElementById("volume-btn");
  const aud = document.getElementById("inter");
  let isPlaying = false;
  soundBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      aud.play();
    } else aud.pause();
  });
}
export default SoundPlay;
