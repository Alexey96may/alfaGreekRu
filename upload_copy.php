<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
require_once(__DIR__.'/author.php');

$topic_content = trim($_POST["topic-content"]);
$author_id = $_POST["topic-author"];
$topic_photo = $_FILES["topic-photo"]["name"];
date_default_timezone_set("Europe/Moscow");
$topic_time = date("Y-m-d H:i:s");

$error = $success = '';

echo "We are there";

//проверка на содержание в ссылке запроса get
if (str_contains($_SERVER['HTTP_REFERER'], '?')) {
    $getClear = strstr($_SERVER['HTTP_REFERER'], '?', true);
}else{
    $getClear = $_SERVER['HTTP_REFERER'];
}

