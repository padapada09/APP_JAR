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
        let title, message, input, okButton, cancelButton;
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
        if (typeof options.okButton !== "undefined" && options.okButton == true){
            okButton = document.createElement("button");
            okButton.innerHTML = "Aceptar";
            messageInterfaze.push(okButton);
        }
        if (typeof options.cancelButton !== "undefined" && options.cancelButton == true){
            cancelButton = document.createElement("button");
            cancelButton.innerHTML = "Cancelar";
            messageInterfaze.push(cancelButton);
        }
        
        //Los conecto entre sí, y con el documento
        messageInterfaze.forEach(element => {
            messageBox.appendChild(element);
        });
        document.body.appendChild(messageBox);

        //Le asigno la clase
        messageBox.className = "messageBox";

        if (typeof options.okButton !== "undefined" && options.okButton == true){
            okButton.addEventListener("click",() => {
                let userTxtResponse = true;
                if (typeof options.input !== "undefined" && options.input == true) {
                    userTxtResponse = input.value;
                }
                messageBox.style.animation = "disappear 0.4s";
                messageBox.style.top = "-50vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(userTxtResponse);
            });
        }

        if (typeof options.okButton !== "undefined" && options.okButton == true){
            cancelButton.addEventListener("click", ()=> {
                messageBox.style.animation = "disappear 0.4s";
                messageBox.style.top = "-50vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                reject(false);
            });
        }

        if (typeof options.do !== "undefined"){
            options.do().then((response)=>{
                messageBox.style.animation = "disappear 0.4s";
                messageBox.style.top = "-50vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(response);
            }).catch((response)=>{
                console.log("Hubo un problema: " + response);
            });
        }

        if (typeof options.wait !== "undefined"){
            setTimeout(()=>{
                messageBox.style.animation = "disappear 0.4s";
                messageBox.style.top = "-50vh";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(true);
            }, options.wait);
        }
    });
}
