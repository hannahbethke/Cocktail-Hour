// SEARCH BY COCKTAIL NAME:

    // DOM ELEMENTS
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const input = document.querySelector("#inputName");
    const searchForm = document.querySelector("#search-by-name");
    const button = document.querySelector("#searchByName");
    const modal = document.querySelector("modal");
    const closeButton = document.querySelector(".close");

    // FUNCTIONS 

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        input.value = "";

    }

    function getData(event) {
        openModal();
        event.preventDefault();
        const search = input.value;
        fetch(url + search)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                const section = document.querySelector("section");
                        section.innerHTML +=
                        `<div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
                            <div class="card-body">
                                <h1 class="card-text">${drink.strDrink}</h1>
                                <button class="btn btn-primary recipe-btn">Recipe</button>
                                <a href="${drink.strVideo}" target="_blank">Watch video</a>
                            </div>
                        </div>`
            })
        })
        .catch(err => console.log(err));
    }

    function getRecipe() {
        data.drinks.forEach(drink => {


        })
    }

    // Event Listeners
    searchForm.addEventListener("submit", getData);
    button.addEventListener("click", getData);
    closeButton.addEventListener("click", closeModal);


