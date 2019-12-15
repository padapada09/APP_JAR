<div class="poster">
    <div class="poster-post" onclick="alterPost(this)">
        <div class="poster-post-back">
            <div class="poster-post-title">Mes Agustiniano</div>
            <div class="poster-post-body">Mes especial para rezar por las vocaciones, profundizar nuestro Carisma, Fortalecer nuestras comunidades y acercarse más a Jesús a través de su palabra, la eucaristía o la adoración🙏.</div>
            <div class="poster-post-comment"><b>Mariano Perez:</b> Muy buen posteo!! Seguro voy.</div>
            <div class="poster-post-comment"><b>Francisco Giancarelli:</b> Seguro va a ser malisimo. No voy ni a gancho.</div>
        </div>
        <img class="poster-post-front" src="../test_assets/test_post_1.jpg">
    </div>
    <div class="poster-post-footer">
        <img src="home/like.png" onclick="alterLike(this)" class="poster-post-footer-button">
        <img src="home/share.png" class="poster-post-footer-button">
        <img src="home/comment.png" onclick="comment()" class="poster-post-footer-button">
    </div>
</div>
<div class="poster">
    <div class="poster-post" onclick="alterPost(this)">
        <div class="poster-post-back">
            <div class="poster-post-title">Charla noviazgo y sexualidad</div>
            <div class="poster-post-body">Queridos hermanos 👋🏼
Nuestra formación como joven JAR abarca todos los aspectos de nuestra vida. Por eso invitamos a quienes son parte de comunidades y pre-comunidades a la charla que nos brindará el matrimonio Molina el Jueves 08/08 a las 20hs para seguir creciendo en la Fe 🙏🏼 Los esperamos!
.
"Dios lo hizo todo hermoso para el momento apropiado" ❤ (Eclesiastés 3:11)</div>
            <div class="poster-post-comment"><b>Mariano Perez:</b> Eu re copado, me re gusta. Me anoto!.</div>
            <div class="poster-post-comment"><b>Francisco Giancarelli:</b> Definitivamente va a ser malisimo. No voy ni a gancho.</div>
        </div>
        <img class="poster-post-front" src="../test_assets/test_post_2.jpg">
    </div>
    <div class="poster-post-footer">
        <img src="home/like.png" onclick="alterLike(this)" class="poster-post-footer-button">
        <img src="home/share.png" class="poster-post-footer-button">
        <img src="home/comment.png" onclick="comment()" class="poster-post-footer-button">
    </div>
</div>
<div class="poster">
    <div class="poster-post" onclick="alterPost(this)">
        <div class="poster-post-back">
            <div class="poster-post-title">Nueva caravana!</div>
            <div class="poster-post-body">"Hasta La Locura te amamos Señor que Llegamos a las 40..🙃." la Caravana Ntra. Señora de la Candelaria hizo su estreno en la JAR 🤝y de forma especial, con la presencia del Obispo Carlos María Domínguez OAR✝️ por los 20 años de Canta y Camina en la JAR🎉. Rezamos por estos 49 nuevos caminantes, que se animaron a querer tener a Jesús como Amigo🙏.#la40 #CyC2019 #jarsantafe #AgustinosRecoletos</div>
            <div class="poster-post-comment"><b>Mariano Perez:</b> Felicidades!! Nos vemos en la parroquia!.</div>
            <div class="poster-post-comment"><b>Francisco Giancarelli:</b> Altos boludos. Ojala no me los cruce.</div>
        </div>
        <img class="poster-post-front" src="../test_assets/test_post_3.jpg">
    </div>
    <div class="poster-post-footer">
        <img src="home/like.png" onclick="alterLike(this)" class="poster-post-footer-button">
        <img src="home/share.png" onclick="sharePost()" class="poster-post-footer-button">
        <img src="home/comment.png" onclick="comment()" class="poster-post-footer-button">
    </div>
</div>

<script>
    options = {
        'titleTxt': 'Hello ' + <?php echo "'".$user['Name']."'" ?>,
        'messageTxt': 'Your email is: ' + <?php echo "'".$user['Mail']."'" ?>,
        'okButton' : true
    };
    message(options);
</script>