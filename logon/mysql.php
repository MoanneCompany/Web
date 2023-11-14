<?php

$servername = "localhost";
$username = "root";
$password = "Moanne1315114145031513161141425!!";
$dbname = "moanne_users";

$conn = new mysqli($servername, $username, $password, $dbname);
$res = "none";

if ($conn->connect_error) {
    echo "Conexão falhou: " . $conn->connect_error;
}

if (isset($_GET['usuario'])) {
    $user = $_GET['usuario'];

    $sql = "SELECT * FROM users WHERE name = '$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $res = "true";
    } else {
        $res = "false";
    }

    $conn->close();
} else {
    $res = "no var";
}

echo json_encode(['mensagem' => $res]);

?>