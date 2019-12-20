<?php
    $_POST = json_decode(file_get_contents('php://input'), true);
    if ($_POST["set_chords"])
    {
        echo "<div class='songbook-page'>";
        $contenido = explode("\n",$_POST["lirycs"]);
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
                else echo "<span class='acorde' acorde='none' onclick='addChord(this)'>".$word."</span> ";
            }
            echo "</div>";
        }
        echo "</div>";
        echo "
            <div class='songbook-page-buttons'>
                <div class='songbook-page-button' onclick='askForData()'>Guardar</div>
                <div class='songbook-page-button' onclick='cancel()'>Cancelar</div>
            </div>   
        ";
        echo "<p style='display: none' id='lirycs'>".$_POST["lirycs"]."</p>";
    }else if ($_POST["set_data"]){
        echo 
        "<div class='card'>
        <div class='card-header'>Cual es el nombre de la canción?</div>
        <input class='card-input name'>
        </div>
        <div class='card'>
            <div class='card-header'>Cual es el autor de la canción?</div>
            <input class='card-input author'>
        </div>
        <div class='card'>
            <div class='card-header'>De que temas trata la canción?</div>
            <div class='card-input-selector'>
                <div class='selector-input' onclick='alternarSelector(this)'>Incovación</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Alabanza</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Entrada</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Comunión</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Ofrenda</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Penitencia</div>
                <div class='selector-input' onclick='alternarSelector(this)'>María</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Agradecimiento</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Infantiles</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Meditación</div>
                <div class='selector-input' onclick='alternarSelector(this)'>Animación</div>
            </div>
        </div>
        <div class='songbook-page-buttons'>
        <div class='songbook-page-button' onclick='saveSong()'>Guardar</div>
        <div class='songbook-page-button' onclick=''>Cancelar</div>
        </div>";
        $_POST = json_decode(file_get_contents('php://input'), true);
        echo "<p style='display: none' id='lirycs'>".$_POST["lirycs"]."</p>";
    }else{
        echo "
        <div class='songbook-page'>
        <textarea type='text' class='songbook-editor-input'></textarea>
        </div>
        <div class='songbook-page-buttons'>
        <div class='songbook-page-button' onclick='askForChords()'>Guardar</div>
        <div class='songbook-page-button' onclick='history.back()'>Cancelar</div>
        </div>";
    }
?>