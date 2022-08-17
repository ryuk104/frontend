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
		<h1>Radio Button</h1>
		<a class="text link" href="./index.html">Home</a>
		<h3>.radio</h3>
		<div style="width: 50%; display: flex; align-items: center; flex-direction: column">
			<span id="radiobtndark" onclick="toggle('radiobtndark')" class="radio">
				<svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
						fill="currentColor"
					></path>
					<circle cx="12" cy="12" r="5" class="innerFill"></circle>
				</svg>
				Light</span
			>
		</div>
		<h3>.radio .active</h3>
		<div style="width: 50%; display: flex; align-items: center; flex-direction: column">
			<span id="radiobtnlight" onclick="toggle('radiobtnlight')" class="radio active">
				<svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
						fill="currentColor"
					></path>
					<circle cx="12" cy="12" r="5" class="innerFill"></circle>
				</svg>
				Dark</span
			>
		</div>
		<script>
			function toggle(id) {
				const radiobtn = document.querySelector(`#${id}`).classList;
				radiobtn.contains("active") ? radiobtn.remove("active") : radiobtn.add("active");
			}
		</script>
	</body>
</html>
