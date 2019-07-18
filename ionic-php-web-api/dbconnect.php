<?php

define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('DB', 'ionicdb');

$con = mysqli_connect(HOST, USER, PASS, DB);

if (!$con) {
    die("Error saat koneksi: ").mysqli_connect_error();
}
