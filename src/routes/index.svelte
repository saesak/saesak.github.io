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
				<div id="text-intro-1">
					<p>Hi,</p>
				</div>
				<div id="text-intro-2">
					<p>I'm Hyun Ki!</p>
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
	#text-intro-1 {
		font-size: 10vh;
	}
	#text-intro-2 {
		margin-top: -16vh;
		font-size: 15vh;
	}
	#text-main {
		margin-top: -10vh;
		font-size: 4vh;
	}
</style>