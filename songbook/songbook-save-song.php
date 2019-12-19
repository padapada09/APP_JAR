<?php
    $_POST = json_decode(file_get_contents('php://input'), true);
    $song_name = $_POST["name"]."-".$_POST["author"]."-"; 
    foreach ($_POST["hashtags"] as $index => $hashtag)
    {
        if ($index == 0) $song_name .= $hashtag;
        else $song_name .= "|".$hashtag;
    }
    $new_song = fopen("chords/".$song_name.".txt","w");
    fwrite($new_song,$_POST["lirycs"]);
?>