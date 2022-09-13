<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Indicators</title>
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
			img {
				border-radius: 50%;
				width: 48px;
				height: 48px;
			}
			.indicator {
				position: relative;
				bottom: 1.25rem;
				left: 1rem;
			}

			.avatar-wrapper {
				border: 0.23rem solid var(--background);
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.avatar-wrapper .indicator {
				border: none;
				top: 3px;
				left: 0.2px;
				height: 15px;
				width: 15px;
				margin-bottom: 1px;
			}

			.indicator-wrapper {
				background: var(--background);
				height: auto;
				border-radius: 5px;

				position: relative;
				top: -15px;
				left: 15px;
			}
		</style>
	</head>

	<body>
		<h1>Indicators</h1>
		<a class="text link" href="./index.html">Home</a>
		<h3>Online</h3>

		<img src="./assets/avatar_xnacly.jpg" alt="" />
		<span class="indicator online"></span>

		<h3>Offline</h3>

		<img src="./assets/avatar_xnacly.jpg" alt="" />
		<span class="indicator offline"></span>
		<h3>Do not disturb</h3>
		<img src="./assets/avatar_xnacly.jpg" alt="" />
		<span class="indicator dnd"></span>
		<h3>away from keyboard</h3>
		<img src="./assets/avatar_xnacly.jpg" alt="" />
		<span id="afk" class="icon moon indicator afk"></span>
		<h3>mobile</h3>
		<div class="avatar-wrapper">
			<img
				src="./assets/avatar_xnacly.jpg"
				alt=""
			/>
			<span class="indicator-wrapper">
				<i class="icon mobile-alt indicator mobile online"></i>
			</span>
		</div>
		<div class="avatar-wrapper">
			<img
				src="./assets/avatar_xnacly.jpg"
				alt=""
			/>
			<span class="indicator-wrapper">
				<i class="icon mobile-alt indicator mobile afk"></i>
			</span>
		</div>
		<div class="avatar-wrapper">
			<img
				src="./assets/avatar_xnacly.jpg"
				alt=""
			/>
			<span class="indicator-wrapper">
				<i class="icon mobile-alt indicator mobile dnd"></i>
			</span>
		</div>
	</body>
</html>
