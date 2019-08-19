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
    if (heart.src == window.location.origin + "/home/like.png"){        
        heart.src = "home/liked.png";
    }else{        
        heart.src = "home/like.png";
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
    message({titleTxt: "Escribe un comentario", input: true}).then((response)=>{
        console.log(response);
    }).catch((response)=>{
        console.log(response);
    });
}