<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!-- Custom JS and CSS -->
	<link rel="stylesheet" href="./css/style.css">
	<title>Custom Overlay</title>

</head>
<body>
	<div class="container">
		<div class="row mt-3">
			<div class="col-4">
				<span>Latitude : </span>
				<input type="number" name="Latitude" id="Latitude" value=25.093133>
			</div>
			<div class="col-4">
				<span>Longitude : </span>
				<input type="number" name="Longitude" id="Longitude" value="121.537912">
			</div>
			<div class="col-4 my-auto">
				<div class="text-center">
					<button type="button" class="btn btn-success" id="submitBtn">submit</button>
				</div>
			</div>
			<div class="col-12">
				<div id="map" class="w-100 mt-2" style="height: 600px"></div>
			</div>
		</div>
	</div>

</body>
	<!--  Global Mercator  -->
	<script src="http://localhost/googleOverLayMap/js/mercator/global-mercator.js"></script>
	
	<!-- Mapbox -->
	<link rel="stylesheet" href="http://localhost/googleOverLayMap/css/mapboxGL.css" >
	<script type="text/javascript" src='http://localhost/googleOverLayMap/js/mapboxGL.js'></script>
	<script type="text/javascript" src="./js/mapboxLocal.js"></script>

	<!-- Bootstrap  -->
	<link rel="stylesheet" href="http://localhost/googleOverLayMap/css/bootstrap/bootstrap.min.css">	
	<script type="text/javascript" src='http://localhost/googleOverLayMap/js/bootstrap/bootstrap.min.js'></script>
	<script type="text/javascript" src='http://localhost/googleOverLayMap/js/bootstrap/jquery-3.3.1.slim.min.js'></script>
	<script type="text/javascript" src='http://localhost/googleOverLayMap/js/bootstrap/popper.min.js'></script>

</html>