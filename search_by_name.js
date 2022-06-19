// SEARCH BY COCKTAIL NAME:

// DOM ELEMENTS

const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const input2 = document.querySelector("#inputName");
const searchForm2 = document.querySelector("#search-by-name");
const searchButton2 = document.querySelector("#searchByName");
const drinkModal2 = document.querySelector("#drinkModal");
const drinkSection2 = document.querySelector("#drinkSection");
const closeButtonDrinkModal2 = document.querySelector("#closeDrinkModal");
const recipeModal2 = document.querySelector("#recipeModal");
const recipeSection2 = document.querySelector("#recipeSection");
const closeButtonRecipeModal2 = document.querySelector("#closeRecipeModal");


// FUNCTIONS 

function openDrinkModal() {
    drinkModal2.style.display = "block";
}

function closeDrinkModal() {
    drinkModal2.style.display = "none";
    drinkSection2.innerHTML = "";
    input2.value = "";
}

function openRecipeModal() {
    recipeModal2.style.display = "block";
}

function closeRecipeModal() {
    recipeModal2.style.display = "none";
    recipeSection2.innerHTML = "";
    input2.value = "";
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
        return ingredient !== null && ingredient !== "";
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
        return measurement !== null && measurement !== "";
    });

    let listItems = "";
    for (let i = 0; i < filteredIngredients.length; i++) {
        listItems += `<li>${filteredMeasurements[i]} ${filteredIngredients[i]}</li>`
    };

    recipeSection2.innerHTML +=
        `<div class="card" style="width: 30rem">
            <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
            <div class="card-body">
                <h1 class="card-text"><span>${drink.strDrink}<span></h1>
                <p>Ingredients:<br>
                    <ul>
                        ${listItems}
                    </ul>
                <p>Glassware: ${drink.strGlass}<p>
                <p>Directions: ${drink.strInstructions}</p>
            </div>
        </div>`;
}

function getDrinkData(event) {
    event.preventDefault();
    let search2 = input2.value;
    let encodeSearch2 = encodeURI(search2);
    fetch(url2 + encodeSearch2)
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(drink => {
            openDrinkModal();

            const drinkCard = document.createElement("div");
            drinkCard.classList.add("card");
            drinkCard.style.width = "18rem";
            drinkCard.innerHTML +=
                `<img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">`
            drinkSection2.appendChild(drinkCard);

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.innerHTML = 
                `<h1 class="card-text"><span>${drink.strDrink}</span></h1>`
            drinkCard.appendChild(cardBody);

            const drinkButton2 = document.createElement("button");
            drinkButton2.classList.add("recipe-button");
            drinkButton2.innerText = "Recipe";
            drinkButton2.addEventListener("click", () => getRecipe(drink));
            cardBody.appendChild(drinkButton2);

        })
    })
    .catch(err => {
        console.log(err);
        alert("sorry, no drink found");
        input2.value = "";
    })
}

// Event Listeners

searchForm2.addEventListener("submit", getDrinkData);
searchButton2.addEventListener("click", getDrinkData);
closeButtonDrinkModal2.addEventListener("click", closeDrinkModal);
closeButtonRecipeModal2.addEventListener("click", closeRecipeModal);
