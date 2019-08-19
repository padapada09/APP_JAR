function navigateTo(page){
    document.querySelector(".navBar-title").innerHTML = page.name;
    document.querySelector(".navBar-sandwich").click();
    fetch(page.url).then((response)=>{
        return response.text();
    }).then((html)=>{
        let parser = new DOMParser();
        newHtml = parser.parseFromString(html, "text/html");
        document.querySelector(".screen").innerHTML = "";
        document.querySelector(".screen").appendChild(newHtml.querySelector("body"));
    }).catch((response)=>{
        message({
            titleTxt: "Hubo un problema",
            messageTxt: response,
            okButton: true
        });
    })
}