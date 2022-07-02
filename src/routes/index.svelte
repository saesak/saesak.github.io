<script>
</script>


<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<main>
	<div id="container">
		<div id="image-div">
			<div id="pfp">
				<img src="/img/softnwet.jpg" alt="profile headshot" />
			</div>
		</div>
		<div id="text-buttons-div">
			<div id="text-div">
				<div id="text-intro">
					<p>Hi, I'm Hyun Ki!</p>
				</div>
				<div id="text-intro-highlight">
					<img src="/img/highlight-index-title.svg" alt="intro-highlight" />
				</div>
				<div id="text-main">
					<p>Currently, I’m a junior at the University of Pennsylvania studying 
						Computer Science (CSCI). I’m passionate about <mark id="text-main-lime-highlight">software engineering</mark>
						and the <mark id=text-main-mellow-highlight>environment</mark>. 
					</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	#container{
		display: flex;
		flex-direction: row;
		margin-left: 17vw;
        margin-right: 17vw;
	}
	#image-div {
		flex: 1;
		margin-right: 5vh;
	}
	#pfp {
		display:flex;
		justify-content: center;
	}
	#pfp img {
		width: 32vw;
		height: 83vh;
		border-bottom-right-radius: 20vw;
		border-bottom-left-radius: 20vw;
	}
	#text-buttons-div {
		flex: 1.25;
		display: flex;
		flex-direction: column;
		margin-left: 5vh;
		margin-top: -12.7vh;
	}
	#text-div {
		font-family: Muli;
	}
	#text-intro {
		position: relative;
		margin-top: 30vh;
		font-size: 8vh;
		z-index: 5;
	}
	#text-intro-highlight img{
		position: absolute;
		margin-top: -12vh;
		opacity: 0.6;
		width: 26vw;
		z-index: 4;
	}
	#text-main {
		margin-top: -3vh;
		font-size: 4vh;
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
</style>