<?php
$servername = "localhost";
$username = "root";
$password = "atleticcrai97";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT * FROM levi_db.users WHERE id = 1;";

$result = mysqli_query($conn,$query);

$user = mysqli_fetch_assoc($result);

echo "<script>console.log('";
echo $user['ID'] . " - ";
echo $user['Name']. " - ";
echo $user['Surname']. " - ";
echo $user['Mail'];
echo "')</script>";
?>