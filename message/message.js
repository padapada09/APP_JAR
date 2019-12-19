function message(options) {
    // option.titleTxt
    // option.messageTxt
    // option.img
    // option.input
    // option.okButton
    // option.cancelButton
    // option.do -> Prommise to wait for
    // option.wait -> Time untill auto close
    return new Promise((resolve, reject) => {

        //Creo los elementos
        let messageBox = document.createElement("div");
        let messageInterfaze = [];
        let title, message, input, img ,okButton, cancelButton, buttons_container;
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
        if (typeof options.img !== "undefined") {
            img = document.createElement("img");
            img.onload = ()=>{
                messageBox.style.top = "calc(-" + ((messageBox.clientHeight/window.innerHeight)*100+1) + "*var(--vh))";
                messageBox.style.transition = "top 0.5s ease-in-out";
                setTimeout(()=>{messageBox.style.top = "calc(0*var(--vh))";},100);
            }
            img.src = options.img;
            messageInterfaze.push(img);
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

        if (typeof options.img !== "undefined"); //Si tiene imagen, muestro la tarjeta recien cuando se carga la imagen
        else{
            //De otro modo, cargo la tarjeta ni bien puedo
            //Le ajusto la animación de entrada de acuerdo a la altura del mensaje
            //Le sumo uno, pq si no me muestra el borde inferior
            messageBox.style.top = "calc(-" + ((messageBox.clientHeight/window.innerHeight)*100+1) + "*var(--vh))";
            messageBox.style.transition = "top 0.5s ease-in-out";
            setTimeout(()=>{messageBox.style.top = "calc(0*var(--vh))";},50);
        }

        if (typeof options.okButton !== "undefined" && options.okButton == true){
            
            okButton.addEventListener("click",() => {
                let userTxtResponse = true;
                if (typeof options.input !== "undefined" && options.input == true) {
                    userTxtResponse = input.value;
                }
                messageBox.style.top = "calc(-" + ((messageBox.clientHeight/window.innerHeight)*100+1) + "*var(--vh))";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(userTxtResponse);
            });
        }
        if (typeof options.cancelButton !== "undefined" && options.cancelButton == true){
            cancelButton.addEventListener("click", ()=> {
                messageBox.style.top = "calc(-" + ((messageBox.clientHeight/window.innerHeight)*100+1) + "*var(--vh))";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                reject(false);
            });
        }

        if (typeof options.do !== "undefined"){
            options.do().then((response)=>{
                messageBox.style.top = "calc(-" + ((messageBox.clientHeight/window.innerHeight)*100+1) + "*var(--vh))";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(response);
            }).catch((response)=>{
                console.log("Hubo un problema: " + response);
            });
        }

        if (typeof options.wait !== "undefined"){
            setTimeout(()=>{
                messageBox.style.top = "calc(-" + ((messageBox.clientHeight/window.innerHeight)*100+1) + "*var(--vh))";
                setTimeout(()=>{messageBox.outerHTML = "";}, 1000);
                resolve(true);
            }, options.wait);
        }

        if (options.input)
        {
            input.focus();
            input.addEventListener("keydown",(key)=>{if (key.keyCode == 13) okButton.click();});
        }
    });
}