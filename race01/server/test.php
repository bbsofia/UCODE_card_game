<?php 
error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush();

// require 'WebSocketServer.class.php';
include "server.php";

include "../core/DatabaseConnection.php";
include "../core/model.php";
include "../core/db_user.php";

$server = new WebSocketServer('10.11.10.4', 3005);
// максимальное время работы 100 секунд, выводить сообщения в консоль
$server->settings(10000, true);


echo "here";

// эта функция вызывается, когда получено сообщение от клиента
$server->handler = function($connect, $data) {
    // анализируем поступившую команду и даем ответ
    // if ( !in_array($data, array('date', 'time', 'country', 'city', 'find'))) {
    //     WebSocketServer::response($connect, 'Неизвестная команда');
    //     return;
    // }

    $response = "Unknown command";
    $split = explode("|", $data);
    switch ($split[0]) {
        case 'find'   :

            $db_connection = new Db_user();
            $response = "Game found";

            echo $split[1] . "\n";

            $team_name = $db_connection->get_teammate($split[1]);

            if ($team_name) {
                WebSocketServer::response($connect, "Your teammate is: " . $team_name);
            } else {
                WebSocketServer::response($connect, "No teammate yet");
            }
            break;

        case 'reg'   :
            $db_connection = new Db_user();
            $arr = explode("?", $split[1]);

            $db_connection->login = $arr[0];
            $db_connection->password = $arr[1];
            $db_connection->cur_sock = $connect;

            $db_connection->inseart();

            $response = "User registered";
            break;

        case 'C'   : 
            $response = "You have logined"; 
            break;
        case 'country': $response = 'Россия';      break;
        case 'city'   : $response = 'Москва';      break;
    }
    WebSocketServer::response($connect, $response);
};

$server->startServer();
?>
