<?php
require_once 'core/model.php';
require_once 'core/view.php';
require_once 'core/controller.php';
require_once 'core/DatabaseConnection.php';
require_once 'core/db_user.php';
require_once 'core/route.php';
require_once 'js/client.js';

session_start();
$view = new View();
$view->addScrean("login","views/login.html");
$view->addScrean("register","views/registration.html");
$view->addScrean("main","views/main.html");
$view->addScrean("error","views/error.html");
$view->addScrean("battle","views/battle.html");
$view->selectScrean("login");
$view->bind("#ERROR#","");
$view->render();


//$view->renderBy("register");
// $view->addScrean("user_card","views/user_card.html");
// $view->selectScrean("user_card");
// $view->bind("#USER_NAME#","User");
// $view->render();
Route::start($view); // запускаем маршрутизатор