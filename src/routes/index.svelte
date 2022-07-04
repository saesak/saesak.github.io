<script>
</script>


<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<main>
	<div id="container">
		<div id="text-buttons-div">
			<div id="text-intro">
				<p><mark>Hi, I'm Hyun Ki!</mark></p>
			</div>
			<div id="text-div">
				<div id="text-main">
					<p>Currently, I’m a junior at the University of Pennsylvania studying 
						<a href="https://www.cis.upenn.edu/undergraduate/"><u>Computer Science (CSCI)</u></a>. I’m passionate about software engineering
						and the environment. 
					</p>
				</div>
			</div>
		</div>
		<div id="image-div">
			<div id="pfp">
			</div>
		</div>
	</div>
</main>

<style>
	* {
		font-family: Muli;
	}
	#container{
		display: flex;
		flex-direction: row;
		margin-left: 17vw;
        margin-right: 17vw;
		align-items: center;
	}
	#image-div {
		height: 35vw;
		width: 35vw;
	}
	#pfp {
		display:flex;
		justify-content: center;
		background-image: url("/img/softnwet.jpg");
		border-radius: 50%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
		width: 100%;
	}
	#text-buttons-div {
		flex: 1.25;
		display: flex;
		flex-direction: column;
		margin-top: -12.7vh;
	}
	#text-intro {
		position: relative;
		margin-top: 15vh;
		font-size: 3em;
		z-index: 5;
	}
	#text-intro mark {
		background-image: url("/img/highlight-index-title.svg");
		background-repeat: no-repeat;
		background-size: cover;
		background-color: white;
		background-position-y: 1%;
	}
	#text-main {
		margin-top: -3vh;
		font-size: 1.2em;
	}
	#text-main u {
		text-decoration: #fadbcf wavy underline;
	}
	#text-main a {
		text-decoration: none;
	}
	#text-main u:hover {
		background-color: #fadbcf;
	}
	#text-main-lime-highlight {
		background-image: url("/img/highlight-mellow-green.svg");
		background-color: white;
		background-repeat: round;
		opacity: 0.6;
		width: auto;
		z-index: 4;
	}
	#text-main-mellow-highlight {
		background-image: url("/img/highlight-lime-green.svg");
		background-color: white;
		background-repeat: round;
		opacity: 0.6;
		width: auto;
		z-index: 4;
	}

	@media (max-width: 500px) {
		#container {
			display: flex;
			flex-direction: column;
		}
		#text-main {
			font-size: 1em;
			text-align: center;
		}
		#text-intro {
			text-align: center;
			margin-top: 0;
			position: relative;
			font-size: 2em;
			z-index: 5;
		}
		#text-buttons-div {
			flex: 1.25;
			display: flex;
			flex-direction: column;
			margin-top: 0;
		}
		#image-div {
		height: 50vw;
		width: 50vw;
		}
	}
</style>