<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin:{$_SERVER['HTTPS_ORIGIN']}");
    //header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); // cache for 1 day
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

$sql = "SELECT * FROM country;";
$result = mysqli_query($con, $sql);
if (!$result) {
    echo "Error: ", mysqli_error($con);
}

$response = array();

while ($row = mysqli_fetch_array($result)) {
    array_push($response, array("id" => $row[0], "negara" => $row[1], "ibukota" => $row[2]));
}

echo json_encode(array("server_response" => $response));
mysqli_close($con);
