<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Icon</title>
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
		<h1>Icon</h1>
		<a class="text link" href="./index.html">Home</a>
		You can either use a bundler to import the svg icon into the .js file.
		<br />
		Otherwise just use an &lt;i&gt; tag and make a class in icons.scss that loads the svg from /icons
		<br />
		<br />

		<h3>.icon .settings</h3>
		<i class="icon settings"> </i>
		<br />
		<h3>.icon .settings .size-2</h3>
		<i class="icon settings size-2"> </i>
		<br />
		<h3>.icon .settings .size-3</h3>
		<i class="icon settings size-3"> </i>

		<h3>.icon .settings (color: blue)</h3>
		<i style="color: #008dff" class="icon settings"> </i>
		<br />
	</body>
</html>
