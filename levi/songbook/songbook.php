<?php
  $nombreCancion = "Conozco tu corazón-Pascua Joven";
  if (!isset($nombreCancion)){  
    die();
  }
  if ($nombreCancion.".txt" != '') {
    if (file_exists("chords/".$nombreCancion.".txt")){
      $contenido = file("chords/".$nombreCancion.".txt");
    }else{
      http_response_code(404);
      die();
    }
    foreach ($contenido as $key => $line) {
        echo $line. "<br>";
    }
    }
?>