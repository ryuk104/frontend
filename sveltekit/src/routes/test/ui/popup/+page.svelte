<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framework - Popup</title>
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
		<h1 id="keyP">Popup</h1>
		<a class="text link" href="./index.html">Home</a>
		<h3>Popup</h3>
		<br />

		<span>Click me!</span>

		<div id="popup" class="popup" role="menu">
			<div class="scroller">
				<div role="group">
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 1</div>
					</div>
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 2</div>
					</div>
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 3</div>
					</div>
				</div>
				<div class="separator" role="separator"></div>
				<div role="group">
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 1</div>
					</div>
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 2</div>
					</div>
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 3</div>
					</div>
				</div>
				<div class="separator" role="separator"></div>
				<div role="group">
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 1</div>
					</div>
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 2</div>
					</div>
					<div class="item" data-type="normal" role="menuitem">
						<div class="label">Item 3</div>
					</div>
				</div>
			</div>
		</div>
		<br />
		<script type="text/javascript">
			var pressTimer;

			window.addEventListener("contextmenu", (ev) => Popup(ev));
			window.addEventListener(
				"touchstart",
				(ev) => (pressTimer = window.setTimeout(() => Popup(ev), 3000))
			);
			window.addEventListener("touchend", clearTimeout(pressTimer));

			function Popup(ev) {
				ev.preventDefault();
				var menu = document.getElementById("popup");
				menu.style.opacity = "1";
				menu.style.visibility = "visible";
				menu.style.top = ev.clientY + "px";
				menu.style.left = ev.clientX + "px";
				document.addEventListener("click", function () {
					menu.style.opacity = "0";
					menu.style.visibility = "hidden";
				});
			}
		</script>
	</body>
</html>
