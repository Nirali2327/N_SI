const btn1 = document.querySelector("#btn-1");
document.getElementById('btn-1');
const text1 = document.querySelector(".show-1");
btn1.addEventListener("click", button);
function button(){
    text1.classList.toggle("hide-1");
    btn1.textContent == "Read more"
    ? (btn1.textContent = "Read less")
    : (btn1.textContent = "Read more");
}
 


