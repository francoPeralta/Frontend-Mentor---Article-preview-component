//Grab DOM Elements
const shareIcon = document.querySelector(".share__icon")
const tooltip = document.querySelector(".tooltip")

//Listen for click events
shareIcon.addEventListener("click", () => {
    tooltip.classList.toggle("active");
})