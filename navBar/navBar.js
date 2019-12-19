let sandwich = document.querySelector(".navBar-sandwich");
let bubbles = document.querySelectorAll(".navBar-menu-block");

function alterMenu(){
    if (sandwich.style.transform == "rotate(90deg)") closeMenu();    
    else openMenu();
}

function closeMenu()
{
    sandwich.style.transform = "rotate(0deg)";
        for (let i = 0; i < bubbles.length; i++){
            setTimeout(() => {
                bubbles[i].style.top = "0vh";
            }, 30*i);
        }
        document.querySelector(".screen").ontouchstart = "";
}

function openMenu()
{
    sandwich.style.transform = "rotate(90deg)";
        for (let i = 0; i < bubbles.length; i++){
            setTimeout(() => {
                bubbles[i].style.top = "11vh";
            }, 30*i);
        }
        document.querySelector(".screen").ontouchstart = function () { alterMenu(); };
}