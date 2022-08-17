<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<link rel="stylesheet" href="../css/toast.css" />
		<title>Discord CSS Framework - Toast</title>
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
		<h1>Toast</h1>
		<a class="text link" href="./index.html">Home</a>

		<div id="toast-wrapper"></div>

		<h3>Toast</h3>
		<button class="button primary" onclick="showToast()">Show toast</button>

		<script>
			function showToast() {
				console.log("show toast");
				const wrapper = document.querySelector("#toast-wrapper");

				const toast = document.createElement("div");
				toast.classList = "toast";
				toast.innerHTML = `<div class="toast-title">Title</div>
				<div class="toast-content">Content</div>
				<div class="toast-timeline"></div>`;
				wrapper.appendChild(toast);
				setTimeout(() => wrapper.removeChild(toast), 3000);
			}
		</script>
	</body>
</html>
