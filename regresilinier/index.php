<!DOCTYPE html>
<html>
<head>
	<title>REGRESI LINIER</title>
	<link rel="stylesheet" type="text/css" href="css/app.css">
	<link rel="stylesheet" type="text/css" href="css/css/bootstrap.css">
</head>
<body>
	<div class="col-md-6 table-responsive">
		<table class="table">
			<thead>
				<?php
					include ('api/koneksi.php');
					$sql = "SELECT x,y FROM tb_nilai";
					$hasil = $mysqli->query($sql);
					if($hasil){
						for($i=0;$i<2;$i++){
							$info=$hasil->fetch_field_direct($i);
							echo "<th>$info->name</th>";
						}
					}
				?>
			</thead>
			<tbody>
				<?php
				while($row=$hasil->fetch_assoc()){
					echo "<tr>";
					echo "<td>$row[x]</td>";
					echo "<td>$row[y]</td>";
				}
				?>
			</tbody>
		</table>
	</div>
	<div class="col-md-6">
		<div class="container-fluid">
			<canvas id="regresiLinierSederhana"></canvas>
			<div class="container-fluid">
				<p id="rumusRegresi"></p>
			</div>
		</div>
		<div class="container-fluid">
			<canvas id="interpolasiNewton"></canvas>
			<div class="container-fluid">
				<p id="rumusNewton"></p>
			</div>
		</div>
	</div>

</body>
<script type="text/javascript" src="js/dist/jquery.min.js"></script>
<script type="text/javascript" src="js/dist/Chart.bundle.js"></script>
<script type="text/javascript" src="js/dist/app.js"></script>
</html>