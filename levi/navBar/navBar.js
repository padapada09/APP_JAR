let sandwich = document.querySelector(".navBar-sandwich");
let bubbles = document.querySelectorAll(".navBar-menu-block-bubble");

function alterMenu(){
    if (sandwich.style.transform == "rotate(90deg)"){
        sandwich.style.transform = "rotate(0deg)";
        for (let i = 0; i < bubbles.length; i++){
            setTimeout(() => {
                bubbles[i].style.top = "0vh";
            }, 30*i);
        }
    }else{
        sandwich.style.transform = "rotate(90deg)";
        for (let i = 0; i < bubbles.length; i++){
            setTimeout(() => {
                bubbles[i].style.top = "11vh";
            }, 30*i);
        }
    }
}