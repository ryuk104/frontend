<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Guild</title>
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
			button {
				width: 11rem;
				text-align: center;
			}
		</style>
	</head>

	<body>
		<h1>Guild</h1>
		<a class="text link" href="./index.html">Home</a>
		<div class="guild-container">
			<div class="guild home">
				<span class="pill"></span>
				<a></a>
			</div>
			<div class="guild separator">
				<hr />
			</div>
			<div class="guild active" id="active">
				<span class="pill"></span>
				<img class="img" src="./assets/avatar_xnacly.jpg" />
			</div>
			<div class="guild unread" id="unread">
				<span class="pill"></span>
				<img class="img" src="./assets/avatar_flam3rboy.png" />
			</div>
			<div class="guild">
				<span class="pill"></span>
				<img class="img" src="./assets/avatar_xnacly.jpg" />
			</div>
			<div class="guild">
				<span class="pill"></span>
				<span class="img">E</span>
			</div>
			<div class="guild">
				<span class="pill"></span>
				<img class="img" src="./assets/avatar_xnacly.jpg" />
			</div>
			<div class="guild unread">
				<span class="pill"></span>
				<img class="img" src="./assets/avatar_flam3rboy.png" />
			</div>
		</div>
		<button class="button primary" style="margin-top: 1rem; margin-bottom: 0.25rem" onclick="unactive()">
			toggle active guild
		</button>
		<button class="button primary" onclick="unread()">toggle unread guild</button>
		<script>
			function unread() {
				const item = document.getElementById("unread");
				if (item.classList.contains("unread")) {
					return item.classList.remove("unread");
				}
				document.getElementById("unread").classList.add("unread");
			}
			function unactive() {
				const item = document.getElementById("active");
				if (item.classList.contains("active")) {
					return item.classList.remove("active");
				}
				document.getElementById("active").classList.add("active");
			}
		</script>
	</body>
</html>
