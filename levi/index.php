<?php
    include "data_base_conn.php";
?>

<!-- 303557994897-gv7is313ue78kdv59lpfmpcbd31aj5f6.apps.googleusercontent.com client ID-->

<!-- _Jk4Fy6DixwtsuQO4uWPudOz client Secret -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="303557994897-gv7is313ue78kdv59lpfmpcbd31aj5f6.apps.googleusercontent.com">
    <link rel="stylesheet" type="text/css" href="navBar/navBar.css">
    <link rel="stylesheet" type="text/css" href="home/home.css">
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" type="text/css" href="message/message.css">
    <link rel="stylesheet" type="text/css" href="config.css">
    <link rel="stylesheet" type="text/css" href="calendar/calendar.css">
    <link rel="manifest" href="manifest.json">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="https://apis.google.com/js/api:client.js"></script>
    <title>Levi</title>
</head>
<body>
<script src="message/message.js"></script>
    <?php
        include "navBar/navBar.php";
    ?>
    <div class="screen">
        <?php
            include "home/home.php";            
        ?>

    </div>
    <script src="navBar/navBar.js"></script>
    <script src="home/home.js"></script>
    <script src="calendar/calendar.js"></script>
    <script src="main.js"></script>
    <script>
    let client = function () {
            gapi.load('auth2', function(){
            auth2 = gapi.auth2.init({
            client_id: '303557994897-gv7is313ue78kdv59lpfmpcbd31aj5f6.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            });
            auth2.attachClickHandler(document.getElementById('loginButton'), {},
            function(googleUser) {
                document.querySelector(".navBar-sandwich").click();
                alert("Welcome " + googleUser.getBasicProfile().getName())
            }, function(error) {
                document.querySelector(".navBar-sandwich").click();
                alert(JSON.stringify(error, undefined, 2));
            });
        });
    }
    </script>
</body>
</html>