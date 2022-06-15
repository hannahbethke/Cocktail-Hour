// SEARCH BY COCKTAIL NAME:

    // DOM ELEMENTS

    const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const input2 = document.querySelector("#inputName");
    const searchForm2 = document.querySelector("#search-by-name");
    const searchButton2 = document.querySelector("#searchByName");
    const drinkModal2 = document.querySelector("#drinkModal");
    const drinkSection2 = document.querySelector("#drinkSection");
    const closeButton2 = document.querySelector("#closeDrinkModal");
    const recipeModal2 = document.querySelector("#recipeModal");
    const recipeSection2 = document.querySelector("#recipeSection");


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

    function getRecipe(event) {
        event.preventDefault();
        let searchRecipe2 = input2.value;
        let encodeSearchRecipe = encodeURI(searchRecipe2);
        fetch(url2 + encodeSearchRecipe2)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                openRecipeModal();
                recipeSection2.innerHTML +=
                    `<img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
                    <div class="card-body">
                        <h1 class="card-text">TEST${drink.strDrink}</h1>
                        <button class="recipe-btn">Recipe</button>
                        <a href="${drink.strVideo}" target="_blank">Watch video</a>
                    </div>
                </div>`;
            })
        })
        // console.log("test");
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
                        <a href="${drink.strVideo}" target="_blank">Watch video</a>
                    </div>
                </div>`;
                const drinkButton2 = document.createElement("button");
                drinkButton2.classList.add("recipe-button");
                drinkButton2.innerText = "Recipe";
                drinkButton2.addEventListener("click", getRecipe);
                drinkSection2.appendChild(drinkButton2);
                })
                console.log(data);
            })
            .catch(err => console.log(err));
        }

    // Event Listeners
    searchForm2.addEventListener("submit", getDrinkData);
    searchButton2.addEventListener("click", getDrinkData);
    closeButton2.addEventListener("click", closeDrinkModal);