<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Slider</title>
		<style>
			body {
				background-color: rgb(54, 57, 63);
				font-family: Arial, Helvetica, sans-serif;
				color: #bbbbbb;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			}

			h3 {
				background-color: rgb(33, 33, 33);
				border-radius: 15px;
				padding: 10px 10px;
				font-size: 10px;
				color: rgb(148, 148, 148);
				margin-top: 1.5rem;
			}
		</style>
	</head>

	<body>
		<h1>Slider</h1>
		<a class="text link" href="./index.html">Home</a>
		<input type="range" min="1" max="100" value="50" class="slider" />
	</body>
</html>
