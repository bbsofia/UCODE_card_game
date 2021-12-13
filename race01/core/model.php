<?php
    abstract class Model {
        protected $connection; 
        function __construct() {
            $this->connection = new DatabaseConnection('127.0.0.1', '3000', 'sborodenko', 'password', 'sword');
        }
    }
?>