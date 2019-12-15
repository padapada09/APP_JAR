function message(options) {
    // option.titleTxt
    // option.messageTxt
    // option.input
    // option.okButton
    // option.cancelButton
    // option.do -> Prommise to wait for
    // option.wait -> Time untill auto close
    return new Promise((resolve, reject) => {

        //Creo los elementos
        let messageBox = document.createElement("div");
        let messageInterfaze = [];
        let title, message, input, okButton, cancelButton, buttons_container;
        if (typeof options.titleTxt !== "undefined") {
            title = document.createElement("header");
            title.innerHTML = options.titleTxt;
            messageInterfaze.push(title);
        }
        if (typeof options.messageTxt !== "undefined") {
            message = document.createElement("p");
            message.innerHTML = options.messageTxt; 
            messageInterfaze.push(message);
        }
        if (typeof options.input !== "undefined" && options.input == true) {
            input = document.createElement("input");
            messageInterfaze.push(input);
        }
        if (typeof options.okButton !== "undefined" && options.okButton == true || typeof options.cancelButton !== "undefined" && options.cancelButton == true)
        {
            buttons_container = document.createElement("div");
            buttons_container.className = "messageBox-buttons";
            messageInterfaze.push(buttons_container);
            if (typeof options.okButton !== "undefined" && options.okButton == true){
                okButton = document.createElement("button");
                okButton.className = "touchable";
                okButton.innerHTML = "Aceptar";
                buttons_container.appendChild(okButton);
            }
            if (typeof options.cancelButton !== "undefined" && options.cancelButton == true){
                cancelButton = document.createElement("button");
                cancelButton.className = "touchable";
                cancelButton.innerHTML = "Cancelar";
                buttons_container.appendChild(cancelButton);
            } 
        }
        
        //Los conecto entre sí, y con el documento
        messageInterfaze.forEach(element => {
            messageBox.appendChild(element);
        });
        document.body.appendChild(messageBox);

        //Le asigno la clase
        messageBox.className = "messageBox";

        //Le ajusto la animación de entrada de acuerdo a la altura del mensaje
        messageBox.style.top = "-" + (messageBox.clientHeight/window.innerHeight)*100 + "vh";
        messageBox.style.transition = "top 0.5s ease-in-out";
        setTimeout(()=>{messageBox.style.top = "0vh";},10);

        if (typeof options.okButton !== "undefined" && options.okButton == true){
            
            okButton.addEventListener("click",() => {
                let userTxtResponse = true;
                if (typeof options.input !== "undefined" && options.input == true) {
                    userTxtResponse = input.value;
                }
                messageBox.style.top = "-" + (messageBox.clientHeight/window.innerHeight)*100 + "vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(userTxtResponse);
            });
        }
        if (typeof options.cancelButton !== "undefined" && options.cancelButton == true){
            cancelButton.addEventListener("click", ()=> {
                messageBox.style.top = "-" + (messageBox.clientHeight/window.innerHeight)*100 + "vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                reject(false);
            });
        }

        if (typeof options.do !== "undefined"){
            options.do().then((response)=>{
                messageBox.style.top = "-" + (messageBox.clientHeight/window.innerHeight)*100 + "vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(response);
            }).catch((response)=>{
                console.log("Hubo un problema: " + response);
            });
        }

        if (typeof options.wait !== "undefined"){
            setTimeout(()=>{
                messageBox.style.top = "-" + (messageBox.clientHeight/window.innerHeight)*100 + "vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(true);
            }, options.wait);
        }
    });
}

// function touch(button, x, y, start)
// {
//     return new Promise((resolve, rejetct) => {
//         if (button.style.background !== "rgb(150,150,150)")
//         {
            
//         }
//         window.requestAnimationFrame
//     });
// }