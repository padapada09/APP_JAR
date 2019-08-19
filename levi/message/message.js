function message(options) {
    return new Promise((resolve, reject) => {

        //Creo los elementos
        let messageBox = document.createElement("div");
        let messageInterfaze = [];
        let title, message, input;
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
        let okButton = document.createElement("button");
        let cancelButton = document.createElement("button");
        messageInterfaze.push(okButton, cancelButton);
        
        //Los conecto entre sí, y con el documento
        messageInterfaze.forEach(element => {
            messageBox.appendChild(element);
        });
        document.body.appendChild(messageBox);

        //Le asigno la clase
        messageBox.className = "messageBox";

        okButton.addEventListener("click",() => {
            let userTxtResponse = true;
            if (typeof options.input !== "undefined" && options.input == true) {
                userTxtResponse = input.value;
            }
            messageBox.style.animation = "disappear 0.7s";
            messageBox.style.top = "-50vh";
            setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
            resolve(userTxtResponse);
        });

        cancelButton.addEventListener("click", ()=> {
            messageBox.style.animation = "disappear 0.7s";
            messageBox.style.top = "-50vh";
            setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
            reject(false);
        })

    });
}
