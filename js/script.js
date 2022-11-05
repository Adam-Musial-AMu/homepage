console.log("Witaj w świecie wizualizacji");

let button = document.querySelector(".pricing__button");
let table = document.querySelector(".pricing__table")
let buttonInnerText = document.querySelector(".pricing__buttonInnerText")


button.addEventListener("click", () => {
    table.classList.toggle("pricing__tableHigh")
    buttonInnerText.innerText = table.classList.contains("pricing__tableHigh") ? "Pomniejsz " : "Powiększ ";
});