<?php 
// ganti sesuai dengan database kalian
	$server = "localhost";
	$user = "admin";
	$password = "proesd";
	$database = "db_numerik";
	$mysqli = new mysqli($server,$user,$password,$database);
	if($mysqli->connect_error){
		echo "error : ".$conn->connect_error;
		exit();
	}