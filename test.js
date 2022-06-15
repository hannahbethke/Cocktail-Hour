const urlSpirits = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="
const spiritsModal = document.querySelector("#spiritsModal");

function closeSpiritsModal() {
    spiritsModal.style.display = "none";
}

function getTequilaInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "tequila")
    .then(res => res.json())
    .then(data => {
        console.log(data.ingredients[0].strDescription)
    })
  }  
  const tequilaButton = document.querySelector("#tequila");
    tequilaButton.addEventListener("click", getTequilaInfo);


// TEST CODE TO BE USED FOR ALL BUTTONS
function getGinInfo(event) {
    event.preventDefault();
    fetch(urlSpirits + "gin")
    .then(res => res.json())
    .then(data => {
        spiritsModal.style.display = "block";
        let ginInfo = data.ingredients[0].strDescription;
        ginInfo += `<p>${ginInfo}</p>`
        console.log(ginInfo)
        console.log(typeof(ginInfo))
        const spiritsSection = document.querySelector("#spiritsSection");
        spiritsSection.innerHTML += `${ginInfo}`;
        spiritsModal.appendChild(spiritsSection);
    })
}  

const ginButton = document.querySelector("#gin");
ginButton.addEventListener("click", getGinInfo);
const spiritsCloseButton = document.querySelector("#closeSpiritsModal");
spiritsCloseButton.addEventListener("click", closeSpiritsModal);
// DONE




    function getVodkaInfo(event) {
        event.preventDefault();
        fetch(urlSpirits + "vodka")
        .then(res => res.json())
        .then(data => {
            console.log(data.ingredients[0].strDescription)
        })
        }  
    const vodkaButton = document.querySelector("#vodka");
    vodkaButton.addEventListener("click", getVodkaInfo);

    function getBourbonInfo(event) {
        event.preventDefault();
        fetch(urlSpirits + "bourbon")
        .then(res => res.json())
        .then(data => {
            console.log(data.ingredients[0].strDescription)
        })
        }  
    const bourbonButton = document.querySelector("#bourbon");
    bourbonButton.addEventListener("click", getBourbonInfo);

    function getWhiskeyInfo(event) {
        event.preventDefault();
        fetch(urlSpirits + "whiskey")
        .then(res => res.json())
        .then(data => {
            console.log(data.ingredients[0].strDescription)
        })
        }  
    const whiskeyButton = document.querySelector("#whiskey");
    whiskeyButton.addEventListener("click", getWhiskeyInfo);

    function getRumInfo(event) {
        event.preventDefault();
        fetch(urlSpirits + "rum")
        .then(res => res.json())
        .then(data => {
            console.log(data.ingredients[0].strDescription)
        })
        }  
    const rumButton = document.querySelector("#rum");
    rumButton.addEventListener("click", getRumInfo);

    function getBrandyInfo(event) {
        event.preventDefault();
        fetch(urlSpirits + "brandy")
        .then(res => res.json())
        .then(data => {
            console.log(data.ingredients[0].strDescription)
        })
        }  
    const brandyButton = document.querySelector("#brandy");
    brandyButton.addEventListener("click", getBrandyInfo);