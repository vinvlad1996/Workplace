<?php

$pdo = createPDO();

$tableExists = tableExists($pdo, 'partner_locator');

if (!$tableExists) {
    echo 'table not exists';
    $pdo->exec(file_get_contents('../partner_locator.sql'));
}

$status = $_REQUEST['type'];

$sth = $pdo->prepare("SELECT * FROM partner_locator WHERE status = :status");
$sth->execute(['status' => $status . ' Partner']);

echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));

function tableExists($pdo, $table) {

    // Try a select statement against the table
    // Run it in try-catch in case PDO is in ERRMODE_EXCEPTION.
    try {
        $result = $pdo->query("SELECT 1 FROM {$table} LIMIT 1");
    } catch (Exception $e) {
        // We got an exception (table not found)
        return FALSE;
    }

    // Result is either boolean FALSE (no table found) or PDOStatement Object (table found)
    return $result !== FALSE;
}

function createPDO() {
    try {
        $dsn = 'mysql:host=mysql;dbname=test;charset=utf8;port=3306';
        $pdo = new PDO($dsn, 'dev', 'dev');
    } catch (PDOException $e) {
        die($e->getMessage());
    }

    return $pdo;
}
