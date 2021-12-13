<?php
class Route
{
	
	static function start($view){
		
		$controller = new Controller($view);
		
		if(isset($_POST["signIn"])){
			if(isset($_POST['signIn']["registration"])){
				$view->selectScrean("register");
				$view->bind("#ERROR#","");
				$view->render();
			}else
				$controller->signIn($_POST['signIn']['login'],$_POST['signIn']['password']);
		}

		if(isset($_POST["registration"])){
			if(isset($_POST['registration']["button"])){
				$view->selectScrean("login");
				$view->bind("#ERROR#","");
				$view->render();
			}
			if(isset($_POST['registration']["password"]))
				$controller->register($_POST['registration']['login'],$_POST['registration']['password'],
				$_POST['registration']['confirm_password'],$_POST['registration']['full_name'],
				$_POST['registration']['email']);
		}
		if(isset($_POST["logout"])){
			$view->selectScrean("login");
			$view->bind("#ERROR#","");
			$view->render();
		}
		$point;
		if(isset($_POST["battle"])){
			$controller->find_battle($_POST["login_batttle"]);
			$point = $_POST["login_batttle"];
		}

		// if (isset($_SESSION)) {
		// 	if ($_SESSION[$point]['me']  == 'enemy') {
		// 		$this->view->bind("#ENEMY#",$_SESSION[$point]['enemy']);
		// 		$this->view->bind("#ME#",$point);
		// 		$this->user->find($enemy_login);
		// 	}
		// }
		
		
	}

	// static function start()
	// {
		
	// 	// контроллер и действие по умолчанию
	// 	$controller_name = 'Main';
	// 	$action_name = 'index';
		
	// 	$routes = explode('/', $_SERVER['REQUEST_URI']);
	// 	$action = explode('?', $routes[3]);
	// 	$log = $_GET['login'];

	// 	// получаем имя контроллера
	// 	if ( !empty($action[0]) )
	// 	{	
	// 		$controller_name = $action[0];
	// 	}
		
	// 	// получаем имя экшена
	// 	if ( !empty($action[1]) )
	// 	{
	// 		$action_name = $action[1];
	// 	}

	// 	echo $controller_name;
	// 	echo '              ';
	// 	echo $action_name;
	// 	sleep(1);
		
	// 	// добавляем префиксы
	// 	$model_name = 'Model_'.$controller_name;
	// 	$controller_name = 'Controller_'.$controller_name;
	// 	$action_name = 'action_'.$action_name;

	// 	// подцепляем файл с классом модели (файла модели может и не быть)

	// 	$model_file = strtolower($model_name).'.php';
	// 	$model_path = "./models/".$model_file;
	// 	if(file_exists($model_path))
	// 	{
	// 		include "./models/".$model_file;
	// 	}

	// 	// подцепляем файл с классом контроллера
	// 	$controller_file = strtolower($controller_name).'.php';
	// 	$controller_path = "./controllers/".$controller_file;
	// 	if(file_exists($controller_path))
	// 	{
	// 		include "./controllers/".$controller_file;
	// 	}
	// 	else
	// 	{
	// 		/*
	// 		правильно было бы кинуть здесь исключение,
	// 		но для упрощения сразу сделаем редирект на страницу 404
	// 		*/
	// 		Route::ErrorPage404();
	// 	}
		
	// 	// создаем контроллер
	// 	$controller = new $controller_name;
	// 	$action = $action_name;
		
	// 	if(method_exists($controller, $action))
	// 	{
	// 		// вызываем действие контроллера
	// 		$controller->$action();
	// 	}
	// 	else
	// 	{
	// 		// здесь также разумнее было бы кинуть исключение
	// 		Route::ErrorPage404();
	// 	}
	
	// }
	
	function ErrorPage404()
	{
		$view->addScrean("error","views/error.html");
		$view->renderBy("error");
    }
}