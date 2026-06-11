<?php
require_once 'config.php';
session_start();

if (!empty($_SESSION[SESSION_KEY])) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    try {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
            DB_USER, DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
        $stmt = $pdo->prepare("SELECT id, password_hash FROM admins WHERE username = ? LIMIT 1");
        $stmt->execute([$username]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row && password_verify($password, $row['password_hash'])) {
            session_regenerate_id(true);
            $_SESSION[SESSION_KEY]          = true;
            $_SESSION['admin_id']           = $row['id'];
            $_SESSION['admin_username']     = $username;
            header('Location: dashboard.php');
            exit;
        }
        $error = 'Invalid username or password.';
    } catch (PDOException $e) {
        $error = 'Database not ready. Run <a href="setup.php">setup.php</a> first.';
    }
}
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Login — Art Deco</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@300;400&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;background:#1a1814;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.card{background:#fff;padding:48px 44px;width:100%;max-width:420px;border-radius:2px}
.logo-wrap{text-align:center;margin-bottom:32px}
.logo-wrap img{height:52px}
h1{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:1.7rem;text-align:center;color:#1a1814;margin-bottom:32px;letter-spacing:.02em}
label{display:block;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6b6560;margin-bottom:6px;margin-top:20px}
input{width:100%;border:1px solid #ddd;padding:11px 14px;font-size:.9rem;font-family:inherit;outline:none;border-radius:1px;color:#1a1814;transition:border-color .2s}
input:focus{border-color:#8C6D4F}
.btn{width:100%;margin-top:28px;background:#8C6D4F;color:#fff;border:none;padding:13px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;font-family:inherit;transition:background .2s;border-radius:1px}
.btn:hover{background:#7a5e42}
.error{background:#fdf0ee;color:#c0392b;border:1px solid #f5c6c0;padding:11px 14px;font-size:.84rem;border-radius:1px;margin-top:16px;line-height:1.5}
.error a{color:#8C6D4F}
</style>
</head>
<body>
<div class="card">
  <div class="logo-wrap">
    <img src="../images/logo/logo-color.png" alt="Art Deco">
  </div>
  <h1>Admin Panel</h1>

  <?php if ($error): ?>
    <div class="error"><?= $error ?></div>
  <?php endif; ?>

  <form method="POST" action="">
    <label for="u">Username</label>
    <input type="text" id="u" name="username" required autocomplete="username" autofocus>

    <label for="p">Password</label>
    <input type="password" id="p" name="password" required autocomplete="current-password">

    <button type="submit" class="btn">Sign in →</button>
  </form>
</div>
</body>
</html>
