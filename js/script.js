{
    const welcome = () => {
        console.log("Witaj w świecie wizualizacji");
    }

    const changeTableFontSize = () => {
        const table = document.querySelector(".pricing__table")
        const buttonInnerText = document.querySelector(".pricing__buttonInnerText")

        table.classList.toggle("pricing__tableHigh")
        buttonInnerText.innerText = table.classList.contains("pricing__tableHigh") ? "Pomniejsz " : "Powiększ ";
    }

    const init = () => {
        const button = document.querySelector(".pricing__button");
        button.addEventListener("click", changeTableFontSize)

        welcome();
    }

    init()

}
