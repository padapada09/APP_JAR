<div class="header">
    <div class="navBar">
            <div class="navBar-title">Levi</div>
            <div class="navBar-sandwich" onclick="alterMenu()">            
                <div class="sandwich-line1"></div>
                <div class="sandwich-line2"></div>
                <div class="sandwich-line3"></div>            
            </div>
    </div>
    <div class="navBar-menu">
        <div class="navBar-menu-block" onclick="navigateTo({name: 'Levi', url: 'home/home.php'})">
            <img src="navBar/church.svg" class="navBar-menu-block-bubble">
        </div>
        <div class="navBar-menu-block" onclick="navigateTo({name: 'Acordes', url: 'songbook/songbook.php'})">
            <img src="navBar/chords.svg" class="navBar-menu-block-bubble">
        </div>
        <div class="navBar-menu-block" onclick="navigateTo({name: 'Calendario', url: 'calendar/calendar.php'})">
            <img src="navBar/calendar.svg" class="navBar-menu-block-bubble">
        </div>
        <div class="navBar-menu-block" onclick="navigateTo({name: 'Comunidad', url: 'comunity/comunity.php'})">
            <img src="navBar/comunity.svg" class="navBar-menu-block-bubble">
        </div>
        <div class="navBar-menu-block" onclick="navigateTo({name: 'Repositorio', url: 'repository/repository.php'})">
            <img src="navBar/repository.svg" class="navBar-menu-block-bubble">
        </div>
        <div id="loginButton" class="navBar-menu-block">
            <img src="navBar/padlock.png" class="navBar-menu-block-bubble">
        </div>
    </div>
</div>