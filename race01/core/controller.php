<?php
class Controller {
	public $model;
	public $view;
	public $user;
	
	
	function __construct($view)
	{
		$this->view = $view;
		$this->user = new Db_user();
	}

	// function find_battle(){
	// 	$this->view->selectScrean("main");
	// 			$this->view->bind("#USER_NAME#",$user->login);
	// 			$this->view->render();
	// }
	function signIn($login,$password)
	{
		//$user->get_teammate($login);
		if ($this->user->find($login)) {
			if ($this->user->password == $password) {
				print_r($this->user->full_name);
				$this->view->selectScrean("main");
				$this->view->bind("#USER_NAME#",$this->user->login);
				$this->view->bind("#FIND#",'');
				$this->view->render();
			} else {
				$this->view->selectScrean("login");
				$this->view->bind("#ERROR#","Invalid password!");
				$this->view->render();
			}			
		}else
		{
			$this->view->selectScrean("login");
			$this->view->bind("#ERROR#","This user does not exist!");
			$this->view->render();
		}
	}

	function register($login, $password, $confirm_password,$full_name, $email)
	{
		if ($this->user->find($login)||($password != $confirm_password)) {
			$this->view->selectScrean("register");
			if ($this->user->find($login)) {
				$this->view->bind("#ERROR#","This username is already in use!");			
			} else {
				$this->view->bind("#ERROR#","Passwords are not match!");
			}
			$this->view->render();
		}else
		{
			$this->user->setUser($login, $password, $full_name, $email);
			$this->user->inseart();
			// echo'<script>socket.send("C|?"' . $login . '?' . $password . '?' . $full_name . '?' . $email . ');</script>';
			$this->view->selectScrean("login");
			$this->view->bind("#ERROR#","");
			$this->view->render();
		}
	}

	
	function find_battle($login){//find enemy
		$this->view->selectScrean("battle");
		$this->view->bind("#ENEMY#",'BOT');
		$this->view->bind("#ME#",$login);
		$this->view->render();	
	}
}