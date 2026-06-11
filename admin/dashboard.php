<?php
require_once 'auth.php';

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    die('Database error: ' . htmlspecialchars($e->getMessage()));
}

/* ── Actions ─────────────────────────────────────────────── */
$action = $_POST['action'] ?? '';
$id     = (int)($_POST['id'] ?? 0);

if ($action === 'mark_read' && $id) {
    $pdo->prepare("UPDATE contact_messages SET is_read = 1 WHERE id = ?")->execute([$id]);
} elseif ($action === 'mark_unread' && $id) {
    $pdo->prepare("UPDATE contact_messages SET is_read = 0 WHERE id = ?")->execute([$id]);
} elseif ($action === 'delete' && $id) {
    $pdo->prepare("DELETE FROM contact_messages WHERE id = ?")->execute([$id]);
} elseif ($action === 'mark_all_read') {
    $pdo->exec("UPDATE contact_messages SET is_read = 1");
} elseif ($action === 'change_password') {
    $cur  = $_POST['current_password'] ?? '';
    $new  = $_POST['new_password']     ?? '';
    $conf = $_POST['confirm_password'] ?? '';
    $pwMsg = '';
    $pwOk  = false;

    if (strlen($new) < 8) {
        $pwMsg = 'New password must be at least 8 characters.';
    } elseif ($new !== $conf) {
        $pwMsg = 'Passwords do not match.';
    } else {
        $stmt = $pdo->prepare("SELECT password_hash FROM admins WHERE id = ?");
        $stmt->execute([$_SESSION['admin_id']]);
        $row  = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row && password_verify($cur, $row['password_hash'])) {
            $hash = password_hash($new, PASSWORD_BCRYPT);
            $pdo->prepare("UPDATE admins SET password_hash = ? WHERE id = ?")->execute([$hash, $_SESSION['admin_id']]);
            $pwMsg = 'Password updated successfully.';
            $pwOk  = true;
        } else {
            $pwMsg = 'Current password is incorrect.';
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action !== 'change_password') {
    header('Location: dashboard.php');
    exit;
}

/* ── Fetch stats ──────────────────────────────────────────── */
$filter = $_GET['filter'] ?? 'all';
$allowedFilters = ['all', 'unread', 'read'];
if (!in_array($filter, $allowedFilters)) $filter = 'all';

$total  = (int)$pdo->query("SELECT COUNT(*) FROM contact_messages")->fetchColumn();
$unread = (int)$pdo->query("SELECT COUNT(*) FROM contact_messages WHERE is_read = 0")->fetchColumn();
$today  = (int)$pdo->query("SELECT COUNT(*) FROM contact_messages WHERE DATE(created_at) = CURDATE()")->fetchColumn();

$where = match($filter) {
    'unread' => 'WHERE is_read = 0',
    'read'   => 'WHERE is_read = 1',
    default  => '',
};

$messages = $pdo->query("SELECT * FROM contact_messages $where ORDER BY created_at DESC")->fetchAll(PDO::FETCH_ASSOC);

function timeAgo(string $datetime): string {
    $diff = time() - strtotime($datetime);
    if ($diff < 60)     return 'just now';
    if ($diff < 3600)   return floor($diff/60) . 'm ago';
    if ($diff < 86400)  return floor($diff/3600) . 'h ago';
    if ($diff < 604800) return floor($diff/86400) . 'd ago';
    return date('d M Y', strtotime($datetime));
}
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard — Art Deco Admin</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400&display=swap" rel="stylesheet">
<style>
/* ── Reset & base ── */
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;font-size:.9rem;background:#f4f1ed;color:#1a1814;min-height:100vh}

/* ── Header ── */
.top-bar{background:#1a1814;padding:0 32px;display:flex;align-items:center;gap:24px;height:60px;position:sticky;top:0;z-index:100}
.top-bar img{height:36px}
.top-bar-title{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:1.1rem;color:#f4f1ed;letter-spacing:.04em;flex:1}
.top-bar-user{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#9a9590}
.top-bar a{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8C6D4F;text-decoration:none;padding:6px 14px;border:1px solid #8C6D4F;border-radius:1px;transition:background .2s}
.top-bar a:hover{background:#8C6D4F;color:#fff}

/* ── Layout ── */
.page{max-width:1100px;margin:0 auto;padding:32px 24px}

/* ── Stats ── */
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px}
.stat{background:#fff;padding:24px;border-radius:2px;border-left:3px solid transparent}
.stat--accent{border-left-color:#8C6D4F}
.stat--warn{border-left-color:#e67e22}
.stat--ok{border-left-color:#27ae60}
.stat__num{font-family:'Cormorant Garamond',serif;font-size:2.8rem;font-weight:300;line-height:1;color:#1a1814}
.stat__label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#9a9590;margin-top:6px}

/* ── Toolbar ── */
.toolbar{display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap}
.filter-tabs{display:flex;gap:4px}
.tab{padding:7px 16px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;border:1px solid #ddd;border-radius:1px;background:#fff;cursor:pointer;text-decoration:none;color:#6b6560;transition:all .2s}
.tab.is-active,.tab:hover{background:#1a1814;color:#fff;border-color:#1a1814}
.btn-sm{padding:7px 16px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;border:1px solid #ddd;border-radius:1px;background:#fff;cursor:pointer;color:#6b6560;transition:all .2s;font-family:inherit}
.btn-sm:hover{background:#f4f1ed}
.toolbar-right{margin-left:auto;display:flex;gap:8px}

/* ── Message cards ── */
.msg-list{display:flex;flex-direction:column;gap:12px}
.msg-card{background:#fff;border-radius:2px;padding:20px 24px;border-left:3px solid transparent;transition:box-shadow .2s}
.msg-card--unread{border-left-color:#8C6D4F}
.msg-card:hover{box-shadow:0 2px 12px rgba(0,0,0,.07)}
.msg-meta{display:flex;align-items:center;gap:16px;margin-bottom:10px;flex-wrap:wrap}
.msg-name{font-weight:400;font-size:.95rem;color:#1a1814}
.msg-email{font-size:.82rem;color:#6b6560}
.msg-phone{font-size:.82rem;color:#9a9590}
.msg-material{font-size:10px;letter-spacing:.1em;text-transform:uppercase;background:#f4f1ed;color:#6b6560;padding:3px 8px;border-radius:10px}
.msg-time{font-size:.78rem;color:#b5afa8;margin-left:auto}
.msg-badge{font-size:9px;letter-spacing:.1em;text-transform:uppercase;background:#8C6D4F;color:#fff;padding:2px 7px;border-radius:10px}
.msg-body{font-size:.88rem;color:#3d3a36;line-height:1.6;margin-bottom:12px;white-space:pre-wrap;word-break:break-word}
.msg-actions{display:flex;gap:8px;flex-wrap:wrap}
.action-btn{border:none;background:none;font-size:11px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;padding:5px 12px;border-radius:1px;font-family:inherit;transition:all .2s}
.action-btn--read{color:#6b6560;border:1px solid #ddd}
.action-btn--read:hover{background:#f4f1ed}
.action-btn--delete{color:#c0392b;border:1px solid #f5c6c0}
.action-btn--delete:hover{background:#fdecea}

/* ── Empty state ── */
.empty{text-align:center;padding:64px 24px;color:#9a9590}
.empty h3{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:1.6rem;margin-bottom:8px;color:#b5afa8}

/* ── Change password section ── */
.section-title{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:1.5rem;margin-bottom:20px;color:#1a1814;padding-top:40px;border-top:1px solid #e5e1dc;margin-top:48px}
.pw-form{background:#fff;padding:28px;border-radius:2px;max-width:400px}
.pw-form label{display:block;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6b6560;margin-bottom:6px;margin-top:16px}
.pw-form input{width:100%;border:1px solid #ddd;padding:10px 14px;font-size:.88rem;font-family:inherit;outline:none;border-radius:1px;transition:border-color .2s}
.pw-form input:focus{border-color:#8C6D4F}
.btn-primary{margin-top:20px;background:#8C6D4F;color:#fff;border:none;padding:11px 24px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;font-family:inherit;border-radius:1px;transition:background .2s}
.btn-primary:hover{background:#7a5e42}
.pw-msg{margin-top:14px;padding:10px 14px;border-radius:1px;font-size:.84rem}
.pw-msg.ok{background:#edf7ed;color:#2e7d32;border:1px solid #c8e6c9}
.pw-msg.err{background:#fdecea;color:#c62828;border:1px solid #ffcdd2}

@media(max-width:680px){
  .stats{grid-template-columns:1fr 1fr}
  .stat:last-child{grid-column:1/-1}
  .top-bar{padding:0 16px}
  .page{padding:20px 16px}
  .msg-time{margin-left:0;width:100%}
}
</style>
</head>
<body>

<div class="top-bar">
  <img src="../images/logo/logo-color.png" alt="Art Deco">
  <span class="top-bar-title">Admin</span>
  <span class="top-bar-user"><?= htmlspecialchars($_SESSION['admin_username']) ?></span>
  <a href="logout.php">Logout</a>
</div>

<div class="page">

  <!-- Stats -->
  <div class="stats">
    <div class="stat stat--accent">
      <div class="stat__num"><?= $total ?></div>
      <div class="stat__label">Total messages</div>
    </div>
    <div class="stat stat--warn">
      <div class="stat__num"><?= $unread ?></div>
      <div class="stat__label">Unread</div>
    </div>
    <div class="stat stat--ok">
      <div class="stat__num"><?= $today ?></div>
      <div class="stat__label">Today</div>
    </div>
  </div>

  <!-- Toolbar -->
  <div class="toolbar">
    <div class="filter-tabs">
      <a href="?filter=all"    class="tab <?= $filter==='all'    ? 'is-active':'' ?>">All (<?= $total ?>)</a>
      <a href="?filter=unread" class="tab <?= $filter==='unread' ? 'is-active':'' ?>">Unread (<?= $unread ?>)</a>
      <a href="?filter=read"   class="tab <?= $filter==='read'   ? 'is-active':'' ?>">Read (<?= $total-$unread ?>)</a>
    </div>
    <?php if ($unread > 0): ?>
    <div class="toolbar-right">
      <form method="POST" action="" style="display:inline">
        <input type="hidden" name="action" value="mark_all_read">
        <button type="submit" class="btn-sm">Mark all read</button>
      </form>
    </div>
    <?php endif; ?>
  </div>

  <!-- Messages -->
  <div class="msg-list">
    <?php if (empty($messages)): ?>
      <div class="empty">
        <h3>No messages yet</h3>
        <p>Contact form submissions will appear here.</p>
      </div>
    <?php else: ?>
      <?php foreach ($messages as $m): ?>
        <div class="msg-card <?= !$m['is_read'] ? 'msg-card--unread' : '' ?>">
          <div class="msg-meta">
            <?php if (!$m['is_read']): ?><span class="msg-badge">New</span><?php endif; ?>
            <span class="msg-name"><?= htmlspecialchars($m['name']) ?></span>
            <a href="mailto:<?= htmlspecialchars($m['email']) ?>" class="msg-email"><?= htmlspecialchars($m['email']) ?></a>
            <?php if ($m['phone']): ?><span class="msg-phone"><?= htmlspecialchars($m['phone']) ?></span><?php endif; ?>
            <?php if ($m['material']): ?><span class="msg-material"><?= htmlspecialchars($m['material']) ?></span><?php endif; ?>
            <span class="msg-time" title="<?= htmlspecialchars($m['created_at']) ?>"><?= timeAgo($m['created_at']) ?></span>
          </div>
          <div class="msg-body"><?= htmlspecialchars($m['message']) ?></div>
          <div class="msg-actions">
            <form method="POST" action="" style="display:inline">
              <input type="hidden" name="action" value="<?= $m['is_read'] ? 'mark_unread' : 'mark_read' ?>">
              <input type="hidden" name="id" value="<?= $m['id'] ?>">
              <button type="submit" class="action-btn action-btn--read">
                <?= $m['is_read'] ? 'Mark unread' : 'Mark read' ?>
              </button>
            </form>
            <form method="POST" action="" style="display:inline" onsubmit="return confirm('Delete this message?')">
              <input type="hidden" name="action" value="delete">
              <input type="hidden" name="id" value="<?= $m['id'] ?>">
              <button type="submit" class="action-btn action-btn--delete">Delete</button>
            </form>
          </div>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>
  </div>

  <!-- Change password -->
  <h2 class="section-title">Change Password</h2>
  <div class="pw-form">
    <form method="POST" action="">
      <input type="hidden" name="action" value="change_password">
      <label>Current password</label>
      <input type="password" name="current_password" required autocomplete="current-password">
      <label>New password</label>
      <input type="password" name="new_password" required autocomplete="new-password" minlength="8">
      <label>Confirm new password</label>
      <input type="password" name="confirm_password" required autocomplete="new-password">
      <button type="submit" class="btn-primary">Update password</button>
    </form>
    <?php if (!empty($pwMsg)): ?>
      <div class="pw-msg <?= $pwOk ? 'ok' : 'err' ?>"><?= htmlspecialchars($pwMsg) ?></div>
    <?php endif; ?>
  </div>

</div>
</body>
</html>
