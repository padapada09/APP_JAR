<div class="songbook-page"> 
<?php
  $_POST = json_decode(file_get_contents('php://input'), true);
  if (!isset($_POST["path"]) || $_POST["path"] == '') http_response_code(401);
  if (!file_exists($_POST["path"])) http_response_code(404);
  else 
  {
    $contenido = file($_POST["path"]);
    foreach ($contenido as $key => $line) {
      echo "<div class='letra'>";
      $words = explode(" ",$line);
      foreach ($words as $keyword => $word)
      {
        //Me fijo si la palbra tiene un acorde, y si tiene se lo pongo
        if (($acorde = strpos($word, '[')) !== false)
        {
          echo "<span class='acorde ".substr($word,$acorde+1,(strpos($word,']')-1)-$acorde)."' acorde='".substr($word,$acorde+1,(strpos($word,']')-1)-$acorde)."' onclick='showChord(\"".substr($word,$acorde+1,(strpos($word,']')-1)-$acorde)."\")'>".substr($word,0,$acorde)."</span> ";
        }
        else echo "<span class='acorde' acorde='none'>".$word."</span> ";
      }
      echo "</div>";
    }
  }
?>
</div>
<div class="songbook-page-buttons">
  <div class="songbook-page-button" onclick="chordsUp()">UP</div>
  <div class="songbook-page-button" onclick="chordsDown()">DOWN</div>
</div>