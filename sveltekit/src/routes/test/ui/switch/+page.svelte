<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Switches</title>
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
				margin-top: 2.5rem;
				margin-bottom: 1rem;
			}
		</style>
	</head>

	<body>
		<h1>Switches</h1>
		<a class="text link" href="./index.html">Home</a>

		<h3>Simple on/off switch</h3>

		<label class="switch">
			<input type="checkbox" />
			<span class="slider">
				<i class="icon times off"></i>
				<i class="icon check on"></i>
			</span>
		</label>

		<h3>Simple on/off switch with label</h3>
		<label class="switch">
			<p class="label">Label</p>
			<input type="checkbox" />
			<span class="slider">
				<i class="icon times off"></i>
				<i class="icon check on"></i>
			</span>
		</label>

		<h3>Disabled on/off switch</h3>
		<label class="switch disabled">
			<p class="label">Label</p>
			<input type="checkbox" disabled />
			<span class="slider">
				<i class="icon times off"></i>
				<i class="icon check on"></i>
			</span>
		</label>

		<h3>Long Table on/off switch</h3>
		<label class="switch" style="width: 300px">
			<p class="label">A really really long Label</p>
			<input type="checkbox" />
			<span class="slider">
				<i class="icon times off"></i>
				<i class="icon check on"></i>
			</span>
		</label>

		<h3>3 state switch</h3>
		<div class="radio-switch">
			<label class="deny">
				<i class="icon times"></i>
				<input type="checkbox" />
			</label>
			<label class="passthrough">
				<i class="icon slash"></i>
				<input type="checkbox" />
			</label>
			<label class="allow">
				<i class="icon check"></i>
				<input type="checkbox" />
			</label>
		</div>

		<h3>3 state switch deny</h3>
		<div class="radio-switch">
			<label class="deny selected">
				<i class="icon times"></i>
				<input type="checkbox" />
			</label>
			<label class="passthrough">
				<i class="icon slash"></i>
				<input type="checkbox" checked="false" />
			</label>
			<label class="allow">
				<i class="icon check"></i>
				<input type="checkbox" />
			</label>
		</div>

		<h3>3 state passthrough</h3>
		<div class="radio-switch">
			<label class="deny">
				<i class="icon times"></i>
				<input type="checkbox" />
			</label>
			<label class="passthrough selected">
				<i class="icon slash"></i>
				<input type="checkbox" />
			</label>
			<label class="allow">
				<i class="icon check"></i>
				<input type="checkbox" />
			</label>
		</div>

		<h3>3 state allow</h3>
		<div class="radio-switch">
			<label class="deny">
				<i class="icon times"></i>
				<input type="checkbox" />
			</label>
			<label class="passthrough">
				<i class="icon slash"></i>
				<input type="checkbox" />
			</label>
			<label class="allow selected">
				<i class="icon check"></i>
				<input type="checkbox" />
			</label>
		</div>
	</body>
</html>
