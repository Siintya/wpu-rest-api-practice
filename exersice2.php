<?php 

$data = file_get_contents('example.json');
$staff = json_decode($data, true);
var_dump($staff);

echo $staff[0]["pekerjaan"];

?>