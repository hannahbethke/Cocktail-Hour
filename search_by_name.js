// SEARCH BY COCKTAIL NAME:

    // DOM ELEMENTS

    const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const input2 = document.querySelector("#inputName");
    const searchForm2 = document.querySelector("#search-by-name");
    const button2 = document.querySelector("#searchByName");
    const modal2 = document.querySelector("modal");
    const closeButton2 = document.querySelector(".close");

    // FUNCTIONS 

    function openModal() {
        modal2.style.display = "block";
    }

    function closeModal() {
        modal2.style.display = "none";
        const section2 = document.querySelector("section");
        section2.innerHTML = "";
        input2.value = "";

    }

    function getData(event) {
        openModal();
        event.preventDefault();
        const search2 = input2.value;
        fetch(url + search2)
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
                </div>`;

            })
        })
        .catch(err => console.log(err));
    }

    // Event Listeners
    searchForm2.addEventListener("submit", getData);
    button2.addEventListener("click", getData);
    closeButton2.addEventListener("click", closeModal);


