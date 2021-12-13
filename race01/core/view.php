<?php
		ob_start();
class View
{
	public $mapScrean = array();
	public $selectContent;

	public function render(){

		ob_clean();
		flush();
		if(isset($this->selectContent))
			echo $this->selectContent;
	}

	public function selectScrean($key)
	{
		$this->selectContent = file_get_contents($this->mapScrean[$key]);
	}

	public function renderBy($key){
		$this->selectScrean($key);
		$this->render();
	}

	public function addScrean($key,$path){
		$this->mapScrean[$key] = $path;
	}

	public function bind($id,$value){
		$this->selectContent = str_replace($id,$value,$this->selectContent);
	}
}
