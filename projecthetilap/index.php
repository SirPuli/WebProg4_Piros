<?php

session_start();

define('APP_VERSION', '1.0.0');

$page = isset($_GET['page']) ? $_GET['page'] : 'home';

include "config.php";


include "./views/_header.php";
if (file_exists("./views/$page.php")) {
    include "./views/$page.php";
} else {
    include "./views/404.php";
}
include "./views/_footer.php";