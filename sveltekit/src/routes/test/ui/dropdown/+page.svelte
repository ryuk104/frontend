<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Dropdown</title>
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

			.dropdown {
				min-width: 15rem;
			}
		</style>
	</head>

	<body>
		<h1>Dropdown</h1>
		<a class="text link" href="./index.html">Home</a>

		<h3>.dropdown</h3>
		<div class="dropdown">
			<div class="control item">
				<span class="left">
					<i class="prefix icon hashtag"> </i>
					<span class="name">general</span>
					<span class="category text title">test</span>
				</span>
				<span class="right">
					<i class="icon chevron-down"></i>
				</span>
			</div>
			<div class="menu"></div>
		</div>

		<h3>.dropdown .open</h3>
		<div class="dropdown open">
			<div class="control item">
				<span class="left">
					<i class="prefix icon hashtag"> </i>
					<span class="name">general</span>
					<span class="category text title">test</span>
				</span>
				<span class="right">
					<i class="icon chevron-down"></i>
				</span>
			</div>
			<div class="menu">
				<div class="item">
					<span class="name">Nothing selected</span>
				</div>
				<div class="item">
					<i class="prefix icon hashtag"> </i>
					<span class="name">welcome</span>
					<span class="category text title">info</span>
				</div>
				<div class="item selected">
					<i class="prefix icon hashtag"> </i>
					<span class="name">general</span>
					<span class="category text title">test</span>
				</div>
			</div>
		</div>
	</body>
</html>
