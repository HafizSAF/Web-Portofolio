<?php
$host = "localhost";
$username = "root"; // sesuaikan dengan username DB Anda
$password = "";     // sesuaikan dengan password DB Anda
$database = "portofolio";

// Koneksi ke database
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari POST
$first_name = $conn->real_escape_string($_POST['first_name']);
$last_name = $conn->real_escape_string($_POST['last_name']);
$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phone']);
$message = $conn->real_escape_string($_POST['message']);

// Masukkan ke database
$sql = "INSERT INTO contact_form (first_name, last_name, email, phone, message)
        VALUES ('$first_name', '$last_name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success', 'message' => 'Data berhasil disimpan']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Gagal menyimpan data: ' . $conn->error]);
}

$conn->close();
?>