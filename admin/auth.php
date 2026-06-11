<?php
require_once __DIR__ . '/config.php';
session_start();
if (empty($_SESSION[SESSION_KEY])) {
    header('Location: ' . dirname($_SERVER['SCRIPT_NAME']) . '/index.php');
    exit;
}
