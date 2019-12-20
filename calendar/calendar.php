<?php

// Create a stream
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header'=>"Accept-language: en\r\n" .
              "Cookie: foo=bar\r\n"
  )
);

$context = stream_context_create($opts);

//Hacemos un request al servidor de google calendar para obtener el archivo .ical
$calendar = file_get_contents('https://calendar.google.com/calendar/ical/proyectolevioar%40gmail.com/public/basic.ics', false, $context);

//Decodificamos el archivo
$decodedCalendar = decodeIcal($calendar);

//Los ordenamos del mas viejo al mas nuevo..
$eventAux;
for ($i = 0; $i < count($decodedCalendar); $i++){
  for ($j = 0; $j < count($decodedCalendar) ; $j++ ){
    if ($decodedCalendar[$i]['timeToStart'] <= $decodedCalendar[$j]['timeToStart']){ //Para mostrar el orden mas furturo primero, invertir la comparacion.
      $eventAux=$decodedCalendar[$i];
      $decodedCalendar[$i]=$decodedCalendar[$j];
      $decodedCalendar[$j]=$eventAux;
    }
  }
}

foreach ($decodedCalendar as $key => $event) {
  if ($event["timeToStart"] > -3600){
    echo "<div class='tarjeta' onclick='goToEvento()'>";
    echo "<div class='tarjeta-encabezado'>";
    echo "<div class='tarjeta-titulo'>".$event["name"]."</div>";
    $month = date('M',$event["timeToStart"]+time());
    $day = date('d',$event["timeToStart"]+time());
    echo "<div class='tarjeta-fecha'><div class='tarjeta-mes'>".$month."</div><div class='tarjeta-dia'>".$day."</div></div>";
    echo "</div>";
    echo "<div class='tarjeta-cuerpo'>";
    echo "<div class='tarjeta-lista-item'>Horario: ".date('H:i', $event["timeToStart"]+time())."hs - ".date('H:i', $event["timeToEnd"]+time())."hs </div>";
    echo "<div class='tarjeta-lista-item'>Lugar: ".$event["location"]."</div>";
    echo "<div class='tarjeta-lista-item'>Descripción: ".$event["description"]."</div>";
    echo "</div>";
    echo "</div>";
  }
}

function decodeIcal($ical){
    $events = explode("BEGIN:VEVENT", $ical); 
    $dataOfEvents = array();
    for ($i = 1; $i < count($events); $i++){
      $dataevent = explode("\n", $events[$i]);
      foreach ($dataevent as $key => $descriptionData) {
        $data = explode(":",$descriptionData);
        switch ($data[0]){
          case "DTSTART":
          $timeToStart = (strtotime($data[1]) - time() - (60*60*3));
          break;
          case "DTEND":
          $timeToEnd   = (strtotime($data[1]) - time() - (60*60*3));
          break;
          case "DESCRIPTION":
          $description = $data[1];
          break;
          case "LOCATION":
          $location = $data[1];
          break;
          case "SUMMARY":
          $name = $data[1];
          break;
          default:
          break;
        }
      }

      $event = array(
        "name"        => $name, 
        "timeToStart" => $timeToStart,
        "timeToEnd"   => $timeToEnd,
        "description" => $description,
        "location"    => $location,
      );

      array_push($dataOfEvents,$event);
    }
    return $dataOfEvents;
}

?>
