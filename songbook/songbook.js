function showChord(chord)
{
    let options={
        titleTxt: chord,
        img: "songbook/chords_diagrams/"+chord+".svg",
        okButton: true
    };
    message(options)
}

function openSong(element)
{
    message({
        titleTxt:"Cargando "+element.getAttribute("name"),
        do: ()=>
        {
            return new Promise((resolve, reject)=>{
                fetch("songbook/songbook-page.php",{method : 'POST', headers: new Headers(), body: JSON.stringify({path: element.getAttribute("path")})}).then((response)=>{
                    return response.text();
                }).then((html)=>{
                    let parser = new DOMParser();
                    newHtml = parser.parseFromString(html, "text/html");
                    document.querySelector(".screen").innerHTML = "";
                    document.querySelector(".screen").appendChild(newHtml.querySelector("body"));
                    history.pushState({name: 'song', url: element.getAttribute("path")}, element.getAttribute("name"));
                    resolve();
                }).catch((response)=>{
                    message({
                        titleTxt: "Hubo un problema",
                        messageTxt: response,
                        okButton: true
                    });
                    reject();
                });
            })
        }
    });
}

function alternarFiltro(filtro)
{
    if (filtro.style.background !== "lightblue") filtro.style.background = "lightblue";
    else filtro.style.background = "";
    let entrys = document.getElementsByClassName("songbook-entry");
    let filters = document.getElementsByClassName("cinta-filtros-botones");
    let active_filters_count = 0;
    Array.from(entrys).forEach(entry => {
        entry.style.display = "none";
        Array.from(filters).forEach(filter => {
            if (filter.style.background == "lightblue") active_filters_count++;
            if (entry.getAttribute("hashtags").includes(filter.innerText) && filter.style.background == "lightblue") entry.style.display = "block";
        });
    });
    if (active_filters_count == 0) Array.from(entrys).forEach(entry => {entry.style.display = "block"});
}

function search(search)
{
    let entrys = document.getElementsByClassName("songbook-entry");
    Array.from(entrys).forEach(entry =>{
        if (entry.getAttribute("name").toLowerCase().includes(search.value.toLowerCase())) entry.style.display = "block";
        else entry.style.display = "none";
    });
}

const chords = [
    ['C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B'],
    ['Cm','Csm','Dm','Dsm','Em','Fm','Fsm','Gm','Gsm','Am','Asm','Bm'],
    ['C7','Cs7','D7','Ds7','E7','F7','Fs7','G7','Gs7','A7','As7','B7'],
    ['Cm7','Csm7','Dm7','Dsm7','Em7','Fm7','Fsm7','Gm7','Gsm7','Am7','Asm7','Bm7']
];

function chordsUp()
{
    let words = document.getElementsByClassName("acorde");
    Array.from(words).forEach(word => {
        if (word.getAttribute("acorde") == "none");
        else
        {
            chords.forEach(chord_set =>{
                let chord_index = chord_set.indexOf(word.getAttribute("acorde"));
                if (chord_index == -1);
                else
                {
                    if (chord_index == chord_set.length - 1)
                    {
                        word.setAttribute("acorde",chord_set[0]);
                        word.className = "acorde "+chord_set[0];    
                    }else{
                        word.setAttribute("acorde",chord_set[chord_index+1]);
                        word.className = "acorde "+chord_set[chord_index+1];
                    }
                }
            });
        }
    }); 
}

function chordsDown()
{
    let words = document.getElementsByClassName("acorde");
    Array.from(words).forEach(word => {
        if (word.getAttribute("acorde") == "none");
        else
        {
            chords.forEach(chord_set =>{
                let chord_index = chord_set.indexOf(word.getAttribute("acorde"));
                if (chord_index == -1);
                else
                {
                    if (chord_index == 0)
                    {
                        word.setAttribute("acorde",chord_set[chord_set.length-1]);
                        word.className = "acorde "+chord_set[chord_set.length-1];
                    }else{
                        word.setAttribute("acorde",chord_set[chord_index-1]);
                        word.className = "acorde "+chord_set[chord_index-1];
                    }
                }
            });
        }
    }); 
}

function agregarCancion()
{
    message({
        titleTxt:"Abriendo el editor...",
        do: ()=>
        {
            return new Promise((resolve, reject)=>{
                fetch("songbook/songbook-editor.php",{headers: new Headers()}).then((response)=>{
                    return response.text();
                }).then((html)=>{
                    let parser = new DOMParser();
                    newHtml = parser.parseFromString(html, "text/html");
                    document.querySelector(".screen").innerHTML = "";
                    document.querySelector(".screen").appendChild(newHtml.querySelector("body"));                        
                    history.pushState({name: 'editor', url: "songbook/songbook-editor.php"}, "editor");
                    resolve();
                }).catch((response)=>{
                    message({
                        titleTxt: "Hubo un problema al cargar el editor",
                        messageTxt: response,
                        okButton: true
                    });
                    reject();
                });
            })
        }
    });
}

function askForChords()
{
    let lirycs = document.querySelector("textarea").value;
    message({
        titleTxt:"Cargando la letra...",
        do: ()=>
        {
            return new Promise((resolve, reject)=>{
                fetch("songbook/songbook-editor.php",{method : 'POST', headers: new Headers(), body: JSON.stringify({set_chords: true, lirycs: lirycs})}).then((response)=>{
                    return response.text();
                }).then((html)=>{
                    let parser = new DOMParser();
                    newHtml = parser.parseFromString(html, "text/html");
                    document.querySelector(".screen").innerHTML = "";
                    document.querySelector(".screen").appendChild(newHtml.querySelector("body"));
                    history.replaceState({name: 'editor', url: "editor"}, "editor");
                    resolve();
                }).catch((response)=>{
                    message({
                        titleTxt: "Hubo un problema",
                        messageTxt: response,
                        okButton: true
                    });
                    reject();
                });
            })
        }
    });
}

function addChord(word)
{
    message({
        titleTxt: "Ingresa el acorde",
        input: true,
        okButton: true,
        cancelButton: true
    }).then((response) =>{
        word.setAttribute("acorde",response);
        word.className = "acorde "+response;
    }).catch((error)=>{
        message({
            titleTxt: "Ocurrió un problema" + error,
            wait: 2000
        });
    });
}

function askForData()
{
    message({
        titleTxt: "Solo unos datos más...",
        do: () => {
            return new Promise((resolve,reject) => {
                let lines = document.getElementsByClassName("letra");
                let string = "";                
                Array.from(lines).forEach(line => {
                    let words = line.querySelectorAll(".acorde");                    
                    Array.from(words).forEach(word => {
                        if (word.className == "acorde")
                        {
                            string += word.innerText;
                        }else{
                            string += word.innerText + "[" + word.getAttribute("acorde") + "]";
                        }
                        string += " ";
                    });
                    string += "\n";
                });
                resolve();
            });
        }
    }).then((response) =>{
        let lirycs = document.querySelector("#lirycs").innerText;
        fetch("songbook/songbook-editor.php",{method : 'POST', headers: new Headers(), body: JSON.stringify({set_data: true, lirycs: lirycs})}).then((response)=>{
            return response.text();
        }).then((html)=>{
            let parser = new DOMParser();
            newHtml = parser.parseFromString(html, "text/html");
            document.querySelector(".screen").innerHTML = "";
            document.querySelector(".screen").appendChild(newHtml.querySelector("body"));
            history.replaceState({name: 'editor', url: "editor"}, "editor");
        }).catch((response)=>{
            message({
                titleTxt: "Hubo un problema",
                messageTxt: response,
                okButton: true
            });
        });
    }).catch((error)=>{
        message({
            titleTxt: "Ocurrió un problema" + error,
            wait: 2000
        });
    });
}

function alternarSelector(selector)
{
    if (selector.style.background == "white") selector.style.background = "";
    else selector.style.background = "white";
}

function saveSong()
{
    let song_lirycs = document.querySelector("#lirycs").innerText;
    let song_name = document.querySelector(".card-input.name").value
    let song_author = document.querySelector(".card-input.author").value
    let song_hashtags = [];
    Array.from(document.querySelectorAll(".selector-input")).forEach(selector => {        
        if (selector.style.background == "white") song_hashtags.push(selector.innerText);
    });
    message({
        titleTxt: "Guardando la canción...",
        do: () => {            
            return new Promise((resolve,reject) => {
                fetch("songbook/songbook-save-song.php",{method : 'POST', headers: new Headers(), body: JSON.stringify({name: song_name, author: song_author, hashtags: song_hashtags, lirycs: song_lirycs})}).then((response)=>{
                    return response.text();
                }).then((html)=>{
                    history.back();
                    message({
                        titleTxt: "La canción fue cargada con exito, gracias!",
                        wait: 2000
                    });
                    resolve();
                }).catch((response)=>{
                    message({
                        titleTxt: "Hubo un problema",
                        messageTxt: response,
                        okButton: true
                    });
                    reject();
                });
            });
        }
    })
}