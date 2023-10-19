let progressBarWidth = 50;
const progressBar = document.getElementById("progress-bar");

function increaseProgress() {
  if (progressBarWidth < 100) {
    progressBarWidth += 10;
    progressBar.setAttribute('value', progressBarWidth);
   // progressBar.textContent = progressBarWidth + "%";
  }
}
