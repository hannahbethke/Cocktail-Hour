// SEARCH BY COCKTAIL NAME:

// DOM ELEMENTS

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const input = document.querySelector("#inputIngredient");
const searchForm = document.querySelector("#search-by-ingredient");
const searchButton = document.querySelector("#searchByIngredient");
const drinkModal = document.querySelector("#drinkModal");
const drinkSection = document.querySelector("#drinkSection");
const closeButtonDrinkModal = document.querySelector("#closeDrinkModal");
const recipeModal = document.querySelector("#recipeModal");
const recipeSection = document.querySelector("#recipeSection");
const closeButtonRecipeModal = document.querySelector("#closeRecipeModal");

// FUNCTIONS 

function openDrinkModal() {
    drinkModal.style.display = "block";
}

function closeDrinkModal() {
    drinkModal.style.display = "none";
    drinkSection.innerHTML = "";
    input.value = "";
}

function openRecipeModal() {
    recipeModal.style.display = "block";
}

function closeRecipeModal() {
    recipeModal.style.display = "none";
    recipeSection.innerHTML = "";
    input.value = "";
}

function getRecipe(drink) {
    openRecipeModal();
    let ingredients = [
        drink.strIngredient1, 
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9, 
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
        drink.strIngredient13,
        drink.strIngredient14,
        drink.strIngredient15,
    ];

    let filteredIngredients = ingredients.filter(ingredient => {
        return ingredient !== null;
        });

    let measurements = [
        drink.strMeasure1, 
        drink.strMeasure2,
        drink.strMeasure3,
        drink.strMeasure4,
        drink.strMeasure5,
        drink.strMeasure6,
        drink.strMeasure7,
        drink.strMeasure8,
        drink.strMeasure9, 
        drink.strMeasure10,
        drink.strMeasure11,
        drink.strMeasure12,
        drink.strMeasure13,
        drink.strMeasure14,
        drink.strMeasure15,
    ];

    let filteredMeasurements = measurements.filter(measurement => {
        return measurement !== null;
        });

    let listItems = "";
    for (let i = 0; i < filteredIngredients.length; i++) {
        listItems += `<li>${filteredMeasurements[i]} ${filteredIngredients[i]}</li>`
    }

    recipeSection.innerHTML +=
        `<div class="card" style="width: 30rem; height: 30rem"">
            <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
            <div class="card-body">
                <h1 class="card-text">${drink.strDrink}</h1>
                <p>Ingredients:<br>
                    <ul>
                        ${listItems}
                    </ul>
                <p>Glassware: ${drink.strGlass}<p>
                <p>Directions: ${drink.strInstructions}</p>
            </div>
        </div>`;
}

function getDrinks(event) {
    event.preventDefault();
    let search = input.value;
    let encodeSearch = encodeURI(search);
    fetch(url + encodeSearch)
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(drink => {
            openDrinkModal();

            const drinkCard = document.createElement("div");
            drinkCard.classList.add("card");
            drinkCard.style.width = "18rem";
            drinkCard.innerHTML +=
                `<img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">`
            drinkSection.appendChild(drinkCard);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.innerHTML = 
                `<h1 class="card-text">${drink.strDrink}</h1>`
            drinkCard.appendChild(cardBody);

            const drinkButton = document.createElement("button");
            drinkButton.classList.add("recipe-button");
            drinkButton.innerText = "Recipe";
            drinkButton.addEventListener("click", () => getRecipe(drink));
            cardBody.appendChild(drinkButton);

            })
        })
        .catch(err => console.log(err));
    }

// Event Listeners

searchForm.addEventListener("submit", getDrinks);
searchButton.addEventListener("click", getDrinks);
closeButtonDrinkModal.addEventListener("click", closeDrinkModal);
closeButtonRecipeModal.addEventListener("click", closeRecipeModal);


