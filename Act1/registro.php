<?php
$servername = "db"; // Nombre del servicio MySQL definido en docker-compose.yml
$username = "root";
$password = "root";
$dbname = "Act1Apli";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);

    // Insertar en la base de datos
    $sql = "INSERT INTO usuarios (nombre, email) VALUES ('$nombre', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "<script language='JavaScript'>alert('¡Registro exitoso!'); window.location= 'index.html'</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>