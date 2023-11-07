const infoBtn = document.querySelector(".info-btn");
const description = document.querySelector(".description-section");
document.addEventListener("DOMContentLoaded", () => {
    infoBtn.addEventListener("click", () => {
        description.scrollIntoView({ behavior: "smooth" });
    });
});
