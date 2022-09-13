<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framwork - Embed</title>
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
		<h1>Embed</h1>
		<a class="text link" href="./index.html">Home</a>
		<div class="embed">
			<div class="embed-primary-container">
				<div class="embed-secondary-container"/>
					<div class="embed-author">
						<img src="./assets/avatar_xnacly.jpg" class="embed-author-iconUrl"></img>
						<span class="embed-author-name">xnacly</span>
					</div>
					<span class="embed-title">
						<a class="text link">Title</a>
					</span>
					<span class="embed-description">Description</span>

					<div class="embed-fields-container">
						<div class="embed-field">
							<span class="embed-field-title">Embed Title</span>
							<span class="embed-field-content">Embed Content</span>
						</div>
						<div class="embed-fields-container inline">
							<div class="embed-field">
								<span class="embed-field-title">Embed Title Inline</span>
								<span class="embed-field-content">Embed Content Inline</span>
							</div>
							<div class="embed-field">
								<span class="embed-field-title">Embed Title Inline</span>
								<span class="embed-field-content">Embed Content Inline</span>
							</div>
						</div>
					</div>
				</div>
			<img src="./assets/avatar_xnacly.jpg" class="embed-thumpnail"></img>
			</div>
			<img src="./assets/avatar_xnacly.jpg" class="embed-image"></img>
			<div class="embed-footer">
				<img class="embed-footer-image" src="./assets/avatar_xnacly.jpg"></img>
				<span class="embed-footer-text">Footer text</span>
				<span class="embed-timestamp">Date Sun Apr 25 2021 13:03:13 GMT+0200</span>
			</div>
		</div>
	</body>
</html>
