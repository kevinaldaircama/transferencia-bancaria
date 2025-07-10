<?php
header('Content-Type: application/json');

if (!isset($_GET['dni'])) {
  echo json_encode(['error' => 'DNI no proporcionado']);
  exit;
}

$dni = $_GET['dni'];
$apiUrl = "https://consultasperu.com/api/dni/$dni";
$token = "4c7fd1768c6b981d0689467a52d599cfd4c31c24697bea0687506747003842cb"; // Reemplaza con tu token real

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Authorization: Bearer ' . $token,
  'Content-Type: application/json'
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
  echo json_encode(['error' => 'Error en la solicitud']);
  curl_close($ch);
  exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
  echo json_encode(['error' => 'DNI no encontrado']);
  exit;
}

echo $response;
