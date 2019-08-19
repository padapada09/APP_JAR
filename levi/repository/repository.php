<?php
$archivos=[];
$path = "repository\Instructivos";
  if ($handle = opendir($path)) {
    while (false !== ($file = readdir($handle))) {
        if ('.' === $file) continue;
        if ('..' === $file) continue;
        $infoArchivo = substr($file, 0, -4);
        // $infoArchivo = explode("-",$infoArchivo);
        $nombreArchivo = $infoArchivo;
        array_push($archivos, $nombreArchivo);
        
    }
    closedir($handle);
  }
foreach($archivos as $key => $archivo){
    echo "<div class='tarjeta'> <img src='repository/pdf_icon.ico'>";
    echo "<div class='tarjeta-titulo'>".$archivo."</div>";
    echo "</div>";
}
?>
