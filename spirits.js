// SPIRITS DATA

const urlSpirits = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="
const spiritsModal = document.querySelector("#spiritsModal");
const spiritsSection = document.querySelector("#spiritsSection");
const spiritsCloseButton = document.querySelector("#closeSpiritsModal");

function closeSpiritsModal() {
    spiritsModal.style.display = "none";
    spiritsSection.innerHTML = "";
}

spiritsCloseButton.addEventListener("click", closeSpiritsModal);

// TEQUILA
function getTequilaInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "tequila")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const tequilaButton = document.querySelector("#tequila");
tequilaButton.addEventListener("click", getTequilaInfo);

// GIN
function getGinInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "gin")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const ginButton = document.querySelector("#gin");
ginButton.addEventListener("click", getGinInfo);

// VODKA
function getVodkaInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "vodka")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const vodkaButton = document.querySelector("#vodka");
vodkaButton.addEventListener("click", getVodkaInfo);

// BOURBON
function getBourbonInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "bourbon")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const bourbonButton = document.querySelector("#bourbon");
bourbonButton.addEventListener("click", getBourbonInfo);

// WHISKEY
function getWhiskeyInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "whiskey")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const whiskeyButton = document.querySelector("#whiskey");
whiskeyButton.addEventListener("click", getWhiskeyInfo);

// RUM
function getRumInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "rum")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const rumButton = document.querySelector("#rum");
rumButton.addEventListener("click", getRumInfo);

// BRANDY
function getBrandyInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "brandy")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        spiritsSection.innerHTML += `${data.ingredients[0].strDescription}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  
const brandyButton = document.querySelector("#brandy");
brandyButton.addEventListener("click", getBrandyInfo);
