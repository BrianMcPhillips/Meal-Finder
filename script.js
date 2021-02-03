// Import DOM Elements
const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsElement = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  singleMealElement = document.getElementById('single-meal');

// Functions

// Search meal fetch from API

function searchMeal(e) {
  e.preventDefault();

  singleMealElement.innerHTML = '';
  const term = search.value;
  
  if(term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for "${term}" :</h2>`;

        if(data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results for ${term}.
            Please Try Again.</p>`;
        } else {
          mealsElement.innerHTML = data.meals.map(meal => `
            <div class="meals">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>`
            )
            .join('');
        }
      });
    search.value = '';
  } else {
    alert('Please enter a search term')
  }
}

// Event Listeners
submit.addEventListener('submit', searchMeal);