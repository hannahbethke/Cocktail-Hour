// SEARCH BY COCKTAIL NAME:

    // DOM ELEMENTS

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const input = document.querySelector("#inputIngredient");
    const searchForm = document.querySelector("#search-by-ingredient");
    const button = document.querySelector("#searchByIngredient");
    const modal = document.querySelector("modal");
    const closeButton = document.querySelector(".close");

    // FUNCTIONS 

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        const section = document.querySelector("section");
        section.innerHTML = "";
        input.value = "";
    }

    function getData(event) {
        event.preventDefault();
        let search = input.value;
        let encodeSearch = encodeURI(search);
        fetch(url + encodeSearch)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                openModal();
                const section = document.querySelector("section");
                section.innerHTML +=
                `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card source">
                    <div class="card-body">
                        <h1 class="card-text">${drink.strDrink}</h1>
                        <button class="recipe-btn">Recipe</button>
                        <a href="${drink.strVideo}" target="_blank">Watch video</a>
                    </div>
                </div>`
            })
        })
        .catch(err => console.log(err));
    }

    // Event Listeners
    searchForm.addEventListener("submit", getData);
    button.addEventListener("click", getData);
    closeButton.addEventListener("click", closeModal);


