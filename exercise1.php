<?php

// $staff = [
//     [
//         "nama" => "A. Shintya Lestari",
//         "umur" => 25,
//         "jabatan" => "programmer freelance"
//     ],
//     [
//         "nama" => "Alex Siregar",
//         "umur" => 35,
//         "jabatan" => "manager"
//     ],
// ];

// Connect DB
$db_host = new PDO('mysql:host=localhost;dbname=rest-api', 'root', '');
$db = $db_host->prepare('SELECT * FROM staff');
$db->execute();
$staff = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($staff);
echo($data);