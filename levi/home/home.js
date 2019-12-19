function alterPost(post){
    let back = post.childNodes[1];
    let front = post.childNodes[3];
    if (front.style.opacity != "0.1"){
        post.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        front.style.opacity = "0.1";
        back.style.top = "0%";
    }else{
        front.style.opacity = "1";
        back.style.top = "100%";
    }
}

function closePosts(){
    let posts = document.querySelectorAll(".poster-post");
    posts.forEach(post => {
        let back = post.childNodes[1];
        let front = post.childNodes[3];
        if (front.style.opacity == "0.1"){
            front.style.opacity = "1";
            back.style.top = "100%";
        }
    });
}

function alterLike(heart){
    if (heart.src == window.location.origin + "/home/like.svg"){        
        heart.src = "home/liked.svg";
        let options = {
            titleTxt: "Que bueno que te guste!",
            wait: 1000 
        }
        message(options);
    }else{        
        heart.src = "home/like.svg";
        let options = {
            titleTxt: "Buuu!",
            wait: 1000 
        }
        message(options);
    }
}

function sharePost(){
    if (navigator.share) {
        navigator.share({
          title: 'My awesome post!',
          text: 'This post may or may not contain the answer to the universe',
          url: window.location.href
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
    }else{
        console.log("browser doesnt support share functionality");
    } 
}

function comment(){
    let options = {
        titleTxt: "Escribe un comentario",
        input: true,
        okButton: true,
        cancelButton: true
    }
    message(options).then((response)=>{
        console.log(response);
    }).catch((response)=>{
        console.log(response);
    });
}
