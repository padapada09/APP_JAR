<?php
    include "data_base_conn.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="navBar/navBar.css">
    <link rel="stylesheet" type="text/css" href="home/home.css">
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" type="text/css" href="message/message.css">
    <link rel="stylesheet" type="text/css" href="config.css">
    <link rel="stylesheet" type="text/css" href="calendar/calendar.css">
    <link rel="manifest" href="manifest.json">
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
    <script src="main.js"></script>
</body>
</html>