const b = document.querySelector(".b");
document.getElementByclass('b');
const text1 = document.querySelector(".show-1");
b.addEventListener("click", button);
function button() {
    text1.classList.toggle("hide-1");
    b.textContent == "Read more"
        ? (b.textContent = "Read less")
        : (b.textContent = "Read more");
}
