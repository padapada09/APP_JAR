<?php
include "../data_base_conn.php";

$query = "SELECT * FROM levi_db.ministries;";

$ministries_query = mysqli_query($conn,$query);

while ($ministryData = mysqli_fetch_assoc($ministries_query)){    
    echo "<div class='tarjeta'>";
    echo "<div class='tarjeta-titulo'>".$ministryData["Name"]."</div>";
    echo "<div class='tarjeta-lista'>";
    $query = "SELECT * FROM levi_db.users WHERE ID = ".$ministryData["ID_referent"].";";
    $ministry_referent = mysqli_query($conn,$query);
    $referent = mysqli_fetch_assoc($ministry_referent);
    echo "<div class='tarjeta-lista-item'><b>Referente</b>: ".$referent["Name"]."</div>";
    echo "</div>";
    echo "</div>";
}

?>
