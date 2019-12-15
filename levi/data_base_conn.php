<?php
$servername = "localhost";
$username = "root";
$password = "Atleticcrai97";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT * FROM levi_db.user WHERE id = 1;";

$result = mysqli_query($conn,$query);

$user = mysqli_fetch_assoc($result);

echo "<script>console.log('";
echo $user['ID'] . " - ";
echo $user['Name']. " - ";
echo $user['Surname']. " - ";
echo $user['Mail'];
echo "')</script>";
?>