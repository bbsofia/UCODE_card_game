<?php
    class DatabaseConnection {
        public $connection;
        function __construct($host, $port, $username, $password, $database) {
            try {
                $this->connection = new PDO("mysql:host=$host;dbname=$database", $username, $password);
                $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                $view->addScrean("error","views/error.html");
                $view->renderBy("error");
                die();
            }
        }
        function __destruct() {
            $this->connection = NULL;
        }
        function getConnectionStatus() {
            if (is_null($this->connection))
                return false;
            return true;
        }
    }
?>