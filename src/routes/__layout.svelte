<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<nav>
    <div id="navigation-div">
        <div id="buttons-div">
            <a class="btn" href="./">Home</a>
            <a class="btn" href="/projects">Projects</a>
            <a class="btn" href="/about">About</a>
        </div>
    </div>
</nav>

<div>
    <slot></slot>
</div>

<style>
    #navigation-div {
		flex: 1.25;
		display: flex;
		flex-direction: column;
	}
	#buttons-div {
		font-family: Muli;
		margin-left: auto;
    }
</style>