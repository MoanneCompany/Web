<?php

$servername = "localhost";
$username = "root";
$password = "Moanne1315114145031513161141425!!";
$dbname = "moanne_users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if (isset($_GET['usuario'])) {
    $user = $_GET['usuario'];

    $sql = "SELECT * FROM users WHERE name = '$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "true";
    } else {
        echo "false";
    }

    $conn->close();
} else {
    echo "No var";
}

?>