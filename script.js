// Import DOM Elements
const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsElement = document.getElementById('meals'),
  resultHeading = document.getElementById('results-heading'),
  singleMealElement = document.getElementById('single-meal');

// Functions

// Search meal fetch from API

function searchMeal(e) {
  e.preventDefault();

  singleMealElement.innerHTML = '';
  const term = search.value;
  console.log(term);
}

// Event Listeners
submit.addEventListener('submit', searchMeal);