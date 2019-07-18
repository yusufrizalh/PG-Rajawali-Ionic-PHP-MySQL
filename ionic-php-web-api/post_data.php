<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}

require "dbconnect.php";
$data = file_get_contents("php://input");

if (isset($data)) {
    $request = json_decode($data);
    $negara = $request->negara;
    $ibukota = $request->ibukota;
}

$negara = stripslashes($negara);
$ibukota = stripslashes($ibukota);

/////// Check to see that the database does not contain repeated information

$sql = "SELECT id FROM country WHERE negara = '$negara'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
//$active = $row['active'];
$count = mysqli_num_rows($result);

// If result matched country and $country, table row must be 1 row                   
if ($count > 0) {
    $response =  " Negara sudah ada.";
} else {
    $sql = "SELECT id FROM country WHERE ibukota = '$ibukota'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    //$active = $row['active'];
    $count = mysqli_num_rows($result);

    // If result matched capital and $capital, table row must be 1 row           
    if ($count > 0) {
        $response = "Ibukota sudah ada, tidak ada negara yang memiliki dua ibukota";
    } else {
        $sql = "INSERT INTO country VALUES('', '$negara', '$ibukota')";
        if ($con->query($sql) === TRUE) {
            $response = "post successfull";
        } else {
            $response = "Error: " . $sql . "<br>" . $con->error;
        }
    }
}

echo (json_encode($response));

$con->close();
