let progressBarWidth = 0;
const progressBar = document.getElementById("progress-bar");

function increaseProgress() {
  if (progressBarWidth < 100) {
    progressBarWidth += 10;
    progressBar.style.width = progressBarWidth + "%";
    // progressBar.textContent = progressBarWidth + "%";
    let color = '#d00';
    if (progressBarWidth >= 40 && progressBarWidth < 75) {
        color = '#dd0';
    } else if ( progressBarWidth >= 75) {
      color = '#06a';
    }
    progressBar.style.backgroundColor = color;
  }
}
