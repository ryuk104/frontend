<script>
    function toggle() {
        document.getElementById("note").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("note").style.display = "none";
        }, 300);
    }
</script>

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../css/index.css" />
		<title>Discord CSS Framework</title>
	</head>

	<body>
		<div style="width: fit-content; margin-top: 1rem; display: flex; align-items: center">	
		</div>
		<h1>Components</h1>
		<div class="grid">
			<a class="Link" href="button.html" >Buttons</a>
			<a class="Link" href="/text">Text</a>
			<a class="Link" href="/list">List</a>
			<a class="Link" href="/icons">Icons</a>
			<a class="Link" href="slider">Slider</a>
			<a class="Link" href="/popup">Popup</a>
			<a class="Link" href="/guild">Guild</a>
			<a class="Link" href="/input">Inputs</a>
			<a class="Link" href="/indicators">Indicators</a>
			<a class="Link" href="/switch">Switch</a>
			<a class="Link" href="/checkbox">Checkbox</a>
			<a class="Link" href="/dropdown">Dropdown</a>
			<a class="Link" href="/modal">Modal</a>
			<a class="Link" href="/card">Card</a>
			<a class="Link" href="/toast">Toast</a>
			<a class="Link" href="/keys">Keys</a>
			<a class="Link" href="/radio">Radio</a>
			<a class="Link" href="/note">Note</a>
			<a class="Link" href="/embed">Embed</a>
			<a class="Link" href="/tooltip">Tooltip</a>
		</div>
		
	</body>

    
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

        #list,
        #slider,
        #icons {
            text-decoration: none;
        }

        #icons {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        #icons:visited {
            color: inherit;
        }

        #slider {
            color: aquamarine;
        }
        .Link {
            background-color: #2f3136;
            padding: 0.5rem;
            margin: 0.25rem;
            width: 7rem;
            text-align: center;
            border-radius: 0.3rem;
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        #github {
            margin-top: 1rem;
            padding-bottom: 0.1rem;
            border-bottom: 1px solid inherit;
        }
    </style>