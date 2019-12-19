function navigateTo(page){
    document.querySelector(".navBar-title").innerHTML = page.name;
    closeMenu();
    fetch(page.url).then((response)=>{
        return response.text();
    }).then((html)=>{
        let parser = new DOMParser();
        newHtml = parser.parseFromString(html, "text/html");
        document.querySelector(".screen").innerHTML = "";
        document.querySelector(".screen").appendChild(newHtml.querySelector("body"));
        history.replaceState(page,page.name);
    }).catch((response)=>{
        message({
            titleTxt: "Hubo un problema",
            messageTxt: response,
            okButton: true
        });
    })
}

window.onpopstate = function(event)
{
    navigateTo(event.state);
}