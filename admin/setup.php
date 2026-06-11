<?php
require_once 'config.php';

$messages = [];
$ok = true;

try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";charset=utf8mb4", DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    $pdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `" . DB_NAME . "`");

    $pdo->exec("CREATE TABLE IF NOT EXISTS `admins` (
        `id`            INT AUTO_INCREMENT PRIMARY KEY,
        `username`      VARCHAR(64)  NOT NULL UNIQUE,
        `password_hash` VARCHAR(255) NOT NULL,
        `created_at`    DATETIME     DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

    $pdo->exec("CREATE TABLE IF NOT EXISTS `contact_messages` (
        `id`         INT AUTO_INCREMENT PRIMARY KEY,
        `name`       VARCHAR(128) NOT NULL,
        `email`      VARCHAR(255) NOT NULL,
        `phone`      VARCHAR(64)  DEFAULT NULL,
        `material`   VARCHAR(128) DEFAULT NULL,
        `message`    TEXT         NOT NULL,
        `is_read`    TINYINT(1)   DEFAULT 0,
        `created_at` DATETIME     DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

    $stmt = $pdo->query("SELECT COUNT(*) FROM `admins`");
    if ((int)$stmt->fetchColumn() === 0) {
        $hash = password_hash('ArtDeco2025!', PASSWORD_BCRYPT);
        $pdo->prepare("INSERT INTO `admins` (username, password_hash) VALUES (?, ?)")
            ->execute(['admin', $hash]);
        $messages[] = ['ok', 'Admin user created — username: <strong>admin</strong> / password: <strong>ArtDeco2025!</strong>'];
    } else {
        $messages[] = ['info', 'Admin user already exists — not modified.'];
    }

    $messages[] = ['ok', 'Database <strong>' . DB_NAME . '</strong> and all tables are ready.'];
} catch (PDOException $e) {
    $ok = false;
    $messages[] = ['err', 'Error: ' . htmlspecialchars($e->getMessage())];
}
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Setup — Art Deco Admin</title>
<style>
  body{font-family:sans-serif;background:#f4f1ed;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
  .box{background:#fff;padding:40px;max-width:520px;width:100%;border-radius:2px;box-shadow:0 2px 16px rgba(0,0,0,.08)}
  h1{font-size:1.3rem;margin:0 0 24px;color:#1a1814}
  .msg{padding:12px 16px;border-radius:2px;margin-bottom:12px;font-size:.9rem}
  .msg.ok{background:#edf7ed;color:#2e7d32;border-left:3px solid #4caf50}
  .msg.info{background:#e8f4fd;color:#1565c0;border-left:3px solid #2196f3}
  .msg.err{background:#fdecea;color:#c62828;border-left:3px solid #f44336}
  a{display:inline-block;margin-top:16px;background:#8C6D4F;color:#fff;padding:10px 20px;text-decoration:none;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;border-radius:1px}
  .warn{margin-top:20px;font-size:.8rem;color:#999;border-top:1px solid #eee;padding-top:16px}
</style>
</head>
<body>
<div class="box">
  <h1>Art Deco — Admin Setup</h1>
  <?php foreach ($messages as [$type, $text]): ?>
    <div class="msg <?= $type ?>"><?= $text ?></div>
  <?php endforeach; ?>
  <?php if ($ok): ?>
    <a href="index.php">Go to login →</a>
    <p class="warn">⚠ Delete or restrict access to this file after setup.</p>
  <?php endif; ?>
</div>
</body>
</html>
