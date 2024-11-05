'use strict';

// =====================================================
// Variables
// =====================================================
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');


const ratingBtnContainer = document.querySelector('.rating-buttons');
const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit-button');

const ratingResult = document.querySelector('.rating-result');

let rating = 0;
// =====================================================
// Functions
// =====================================================

// Handles the rating button click
const handleRatingButtonClick = function (e) {
  const target = e.target;
  if (!target.classList.contains('rating-button')) return;
  rating = target.dataset.rating;

  for (let i = 1; i <= ratingButtons.length; i++) {
    if (i <= rating) {
      document.querySelector(`[data-rating="${i}"]`).classList.add('active');
    } else {
      document.querySelector(`[data-rating="${i}"]`).classList.remove('active');
    }
  }
}


// Handles the submit button click
const handleSubmitButtonClick = function(e) {
  ratingResult.textContent = rating;
  ratingState.classList.remove('active');
  thankYouState.classList.add('active');
}

// =====================================================
// Event listeners
// =====================================================
ratingBtnContainer.addEventListener('click', handleRatingButtonClick);

submitButton.addEventListener('click', handleSubmitButtonClick);
