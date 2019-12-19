<div class="songbook-header">
<input class="songbook-buscador" autocomplete="nope" onkeyup="search(this)">
<div class="cinta-filtros" ontouchstart="scrollVertical = true" ontouchend="scrollVertical = false">
  <div class="cinta-filtros-botones" onclick="agregarCancion()">
    Nueva Canción
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Invocacion
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Alabanza
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Entrada
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Comunión
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Ofrenda
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Penitencia
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    María
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Agradecimiento
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Infantiles
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Animación
  </div>
  <div class="cinta-filtros-botones" onclick="alternarFiltro(this)">
    Meditación
  </div>
</div>
</div>
  <?php
  $path = "chords";
  $canciones = [];
  if ($handle = opendir($path)) {
    while (false !== ($file = readdir($handle))) {
      if ('.' === $file) continue;
      if ('..' === $file) continue;
      $file_data = explode("-",$file);
      echo "<div class='songbook-entry' hashtags='".substr($file_data[2],0,-4)."' name='".$file_data[0]."' path='chords/".$file."' onclick='openSong(this)'>".$file_data[0]."</div>";
    }
    closedir($handle);
  }
  echo "</div>";
  echo "</div>";
  ?>