// SEARCH BY COCKTAIL NAME:

    // DOM ELEMENTS

    const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const input2 = document.querySelector("#inputName");
    const searchForm2 = document.querySelector("#search-by-name");
    const searchButton2 = document.querySelector("#searchByName");
    const drinkModal2 = document.querySelector("#drinkModal");
    const drinkSection2 = document.querySelector("#drinkSection");
    const closeDrinkModal2 = document.querySelector("#closeDrinkModal");
    const recipeModal2 = document.querySelector("#recipeModal");
    const recipeSection2 = document.querySelector("#recipeSection");
    const closeRecipeModal2 = document.querySelector("#closeRecipeModal");

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

    function getRecipe() {
        console.log("test");
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
                drinkSection2.innerHTML +=
                `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
                    <div class="card-body">
                        <h1 class="card-text">${drink.strDrink}</h1>
                        <button class="recipe-btn">Recipe</button>
                        <a href="${drink.strVideo}" target="_blank">Watch video</a>
                    </div>
                </div>`;
                })
            })
            .catch(err => console.log(err));
        }

    // function getRecipe(event) {
    //     event.preventDefault();
    //     let searchRecipe = input2.value;
    //     let encodeSearchRecipe = encodeURI(searchRecipe);
    //     fetch(url2 + encodeSearchRecipe)
    //     .then(res => res.json())
    //     .then(data => {
    //         data.drinks.forEach(drink => {
    //             openRecipeModal();
    //             recipeSection2.innerHTML +=
    //                 `<div class="card" style="width: 30rem; height: 30rem"">
    //                     <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
    //                     <div class="card-body">
    //                         <h1 class="card-text">${drink.strDrink}</h1>
    //                         <p>Ingredients:<br>
    //                             <ul>
    //                                 <li>${drink.strIngredient1}, ${drink.strMeasure1}</li>
    //                                 <li>${drink.strIngredient2}, ${drink.strMeasure2}</li>
    //                                 <li>${drink.strIngredient3}, ${drink.strMeasure3}</li>
    //                                 <li>${drink.strIngredient4}, ${drink.strMeasure4}</li>
    //                                 <li>${drink.strIngredient5}, ${drink.strMeasure5}</li>
    //                                 <li>${drink.strIngredient6}, ${drink.strMeasure6}</li>
    //                                 <li>${drink.strIngredient7}, ${drink.strMeasure7}</li>
    //                                 <li>${drink.strIngredient8}, ${drink.strMeasure8}</li>
    //                             </ul>
    //                         <p>Glassware: ${drink.strGlass}<p>
    //                         <p>Directions: ${drink.strInstructions}</p>

    //                     </div>
    //                 </div>`;
    //              })
    //         })
    //     }

    // Event Listeners
    searchForm2.addEventListener("submit", getDrinkData);
    searchButton2.addEventListener("click", getDrinkData);
    // searchForm2.addEventListener("submit", getRecipe);
    // searchButton2.addEventListener("click", getRecipe);
    closeDrinkModal2.addEventListener("click", closeDrinkModal);
    closeRecipeModal2.addEventListener("click", closeRecipeModal);



