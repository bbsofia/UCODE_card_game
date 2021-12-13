<?php
class Db_user extends Model{
    public $id, $login, $password, $full_name, $email, $admin, $status;

    public function setUser($login, $password, $full_name, $email)
    {
        $this->login = $login;
        $this->password = $password;
        $this->full_name = $full_name;
        $this->email = $email;
    }

    public function get_teammate() {
        if ($this->connection->getConnectionStatus()) {
            $result = NULL;
            try {
                $sql = "SELECT * FROM users WHERE status = 'search' AND login != '$this->login' LIMIT 1;";
                $result = $this->connection->connection->query($sql);
                $pdo = $result->fetch(PDO::FETCH_ASSOC);
                return $pdo["login"];
            }
            catch(PDOException $e) {
                return NULL;
            }
        } else {
            return NULL;
        }
    }

    function find($login)
    {
        $point = "SELECT * FROM users WHERE login = '$login';";
        $point1 = $this->connection->connection->query($point);
        $info = $point1->fetch(PDO::FETCH_ASSOC);
        if ($info == NULL) {
            return false;
        } else{
            $this->id = $info["id"];
            $this->login = $info["login"];
            $this->password = $info["password"];
            $this->full_name = $info["full_name"];
            $this->email = $info["email"];
            $this->admin = $info["admin"];
            return true;
        }
    }

    function inseart()
    {
        $sql = 'INSERT INTO users(login, password, full_name, email) VALUES ("'.$this->login.'","'.$this->password.'","'.$this->full_name.'","'.$this->email.'");';
        $this->connection->connection->query($sql);
    }

    function update()
    {
        $sql = "UPDATE users
        SET password = '$this->password', full_name = '$this->full_name', email = '$this->email', admin = '$this->admin', status = '$this->status', enemy = '$this->enemy'
        WHERE login = '$this->login';";
        $this->connection->connection->query($sql);
    }
}

