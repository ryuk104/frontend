<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Modal</title>
		<style>
			body,
			.main {
				background-color: rgb(54, 57, 63);
				font-family: Arial, Helvetica, sans-serif;
				color: #bbbbbb;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 100%;
				height: 100%;
				margin: 0;
			}

			.main > * {
				margin: 0.5rem;
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
		<div class="main modal-background">
			<h1>Modal</h1>
			<a class="text link" href="./index.html">Home</a>
			<button class="button primary" onclick="openModal()">Open Modal</button>

			<div class="modal" id="modal">
				<span class="close-wrapper">
					<span class="close" onclick="closeModal()">
						<i class="icon times"></i>
					</span>
					<span class="text title">ESC</span>
				</span>
			</div>
		</div>
		<script>
			function openModal() {
				const modal = document.querySelector("#modal");
				document.querySelector(".main").classList.add("modal-open");

				modal.classList.add("open");
			}

			function closeModal() {
				modal.classList.remove("open");
				document.querySelector(".main").classList.remove("modal-open");
			}

			window.addEventListener("keydown", (event) => {
				if (event.keyCode !== 27) return;
				closeModal();

				console.log(event);
			});
		</script>
	</body>
</html>
