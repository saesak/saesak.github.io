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
				<div id="text-main">
					<p>Currently, I’m a junior at the University of Pennsylvania studying 
						Computer Science (CSCI). I’m passionate about software engineering 
						and the environment. 
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
	}
	#image-div {
		flex: 1;
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
	}
	#text-div {
		font-family: Muli;
	}
	#text-intro {
		margin-top: 15vh;
		font-size: 10vh;
	}
	#text-main {
		margin-top: 5vh;
		font-size: 4vh;
	}
</style>