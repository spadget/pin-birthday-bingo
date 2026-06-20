const filmItems = [
    "Film 1",
    "Film 2",
    "Film 3",
    "Film 4",
    "Film 5"
];

const geocacheItems = [
    "Cache 1",
    "Cache 2",
    "Cache 3",
    "Cache 4",
    "Cache 5"
];

document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {

        document.querySelectorAll(".tab-button")
            .forEach(btn => btn.classList.remove("active"));

        document.querySelectorAll(".tab-content")
            .forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");

        document
            .getElementById(button.dataset.tab)
            .classList.add("active");
    });
});

function createGrid(containerId, items) {

    const container = document.getElementById(containerId);

    items.forEach(item => {

        const square = document.createElement("div");

        square.className = "bingo-square";

        square.textContent = item;

        square.addEventListener("click", () => {
            square.classList.toggle("completed");
        });

        container.appendChild(square);
    });
}

createGrid("film-grid", filmItems);
createGrid("geocache-grid", geocacheItems);