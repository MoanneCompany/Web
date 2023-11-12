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
    $variavel = $_GET['usuario'];
} else {
    echo "No var";
}

?>