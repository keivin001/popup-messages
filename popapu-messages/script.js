const poppu = document.querySelector("#popup");

// poppu.addEventListener("click", (e) => {
//     poppu.classList.add("active");
// });
// poppu.addEventListener("click", (e) => {
//     poppu.classList.remove("active");
// });
function openPopup() {
    poppu.classList.add("popup");
}
function closePopup() {
    poppu.classList.remove("popup");
}