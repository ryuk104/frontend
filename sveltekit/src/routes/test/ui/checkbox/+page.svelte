<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Checkbox</title>
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
		<h1>Checkbox</h1>
		<a class="text link" href="./index.html">Home</a>

		<h3>Checkbox</h3>
		<label class="checkbox">
			<input type="checkbox" />
			<span class="checkmark">
				<i class="icon check"></i>
			</span>
		</label>

		<h3>Checkbox with label</h3>
		<label class="checkbox">
			<p class="label">Label</p>
			<input type="checkbox" />
			<span class="checkmark">
				<i class="icon check"></i>
			</span>
		</label>

		<h3>Checkbox on</h3>
		<label class="checkbox">
			<input type="checkbox" checked="true" />
			<span class="checkmark">
				<i class="icon check"></i>
			</span>
		</label>

		<h3>Checkbox disabled</h3>
		<label class="checkbox disabled">
			<input type="checkbox" disabled />
			<span class="checkmark">
				<i class="icon check"></i>
			</span>
		</label>
	</body>
</html>
