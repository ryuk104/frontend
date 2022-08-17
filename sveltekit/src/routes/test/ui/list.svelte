<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - List</title>
		<style>
			body {
				background-color: #2f3136;
				font-family: Arial, Helvetica, sans-serif;
				color: #ffffff;
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
		<h1>List</h1>
		<a class="text link" href="./index.html">Home</a>
		<h3>Simple List .list</h3>
		<ul class="list">
			<li class="text title">.title</li>
			<li class="item active">.item active</li>
			<li class="item">.item</li>
			<li class="separator"></li>
			<li class="item primary">.item .primary</li>
			<li class="item success">.item .success</li>
			<li class="item danger">.item .danger</li>
			<li class="separator"></li>
			<li class="item">
				<i class="icon voice-chat left"> </i>
				<div class="content">Icons</div>
				<i class="icon settings right visibleOnHover"> </i>
			</li>
		</ul>
		<br />
		<h3>.collapsed.list</h3>
		<ul class="list collapsed">
			<li class="collapse title">
				<i class="icon chevron-down"> </i>
				Collapsed
			</li>
		</ul>
		<br />

		<h3>.accent.list</h3>
		<ul class="list accent">
			<li class="item hover">.item hover</li>
			<li class="item active">.item active</li>
			<li class="item">.item</li>
			<li class="item">.item</li>
			<li class="item">.item</li>
			<li class="item">.item</li>
			<li class="separator"></li>
			<li class="item">.item</li>
			<li class="item">.item</li>
			<li class="item">.item</li>
		</ul>

		<script type="text/javascript">
			//
		</script>
	</body>
</html>
