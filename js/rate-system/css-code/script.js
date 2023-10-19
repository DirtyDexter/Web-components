document.addEventListener('DOMContentLoaded', function() {
  const starRating = document.getElementById('star-rating');
  const starsInner = starRating.querySelector('.stars-inner');
  const numberRating = starRating.querySelector('.number-rating');

  const rating = parseFloat(starRating.getAttribute('data-rating'));
  const starPercentage = (rating / 5) * 100;
  starsInner.style.width = `${starPercentage.toFixed(0)}%`;

  // const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  // starsInner.style.width = starPercentageRounded;

  numberRating.textContent = `${rating.toFixed(1)} out of 5.0`;
});
