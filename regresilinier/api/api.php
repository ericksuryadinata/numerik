<?php
	include 'koneksi.php';
	header("Content-Type: application/json;charset=UTF-8;");

	$sql = sprintf("SELECT x,y FROM tb_nilai");

	$hasil = $mysqli->query($sql);
	$data=array();
	foreach ($hasil as $row) {
		$data[]=$row;
	}

	$hasil->close();

	$mysqli->close();
	print json_encode($data);

?>