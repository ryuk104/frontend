<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />

		<title>Discord CSS Framwork - Input fields</title>
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
		</style>
	</head>

	<body>
		<h1>Input Fields</h1>
		<a class="text link" href="./index.html"> Home</a>
		<h3>.input</h3>
		<label class="input-wrapper">
			<p class="label title text">Label</p>
			<input class="input" placeholder="Input Placeholder" name="" type="text" value="" />
		</label>
		<br />
		<h3>.input</h3>
		<div>
			<textarea type="text" class="input textarea" placeholder="Textarea placeholder" rows="3"></textarea>
		</div>
		<br />
	</body>
</html>
