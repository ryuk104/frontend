<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Template</title>
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
		<h1>Note</h1>
		<a class="text link" href="./index.html">Home</a>
		<h3>.note</h3>
		<div style="width: 50%; display: flex; flex-direction: column">
			<span class="note">Default note</span>
		</div>
		<h3>.note .info</h3>
		<div style="width: 50%; display: flex; flex-direction: column">
			<span class="note info">Info note</span>
		</div>
		<h3>.note .warning</h3>
		<div style="width: 50%; display: flex; flex-direction: column">
			<span class="note warning">Warning note</span>
		</div>
		<h3>.note .danger</h3>
		<div style="width: 50%; display: flex; flex-direction: column">
			<span class="note danger">Danger note</span>
		</div>
	</body>
</html>
