<?php
require_once 'admin/config.php';

header('Content-Type: application/json; charset=utf-8');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

$name     = trim($_POST['name']     ?? '');
$email    = trim($_POST['email']    ?? '');
$phone    = trim($_POST['phone']    ?? '');
$material = trim($_POST['material'] ?? '');
$message  = trim($_POST['message']  ?? '');

// Validation
if (!$name || !$email || !$message) {
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}
if (strlen($message) < 5) {
    echo json_encode(['success' => false, 'error' => 'Message is too short.']);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $stmt = $pdo->prepare(
        "INSERT INTO contact_messages (name, email, phone, material, message)
         VALUES (?, ?, ?, ?, ?)"
    );
    $stmt->execute([
        $name,
        $email,
        $phone    ?: null,
        $material ?: null,
        $message,
    ]);

    echo json_encode(['success' => true]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Could not save your message. Please try again later.']);
}
