<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<nav>
    <div id="navigation-div">
        <div id="buttons-div">
            <a class="btn" href="./"><mark>Home</mark></a>
            <a class="btn" href="/projects"><mark>Projects</mark></a>
            <a class="btn" href="/about"><mark>About</mark></a>
            <a class="btn" href="#" onclick='window.open("/img/my-resume.pdf");return false;'><mark>Resume</mark></a>
        </div>
    </div>
</nav>

<div>
    <slot></slot>
</div>

<style>
    #navigation-div {
        position: absolute;
        right: 2vw;
		flex: 1.25;
		display: flex;
		flex-direction: column;
	}
	#buttons-div {
		font-family: Muli;
		margin-left: auto;
    }
    .btn {
        font-size: 4vh;
        margin-right: 2vw;
    }
    .btn mark {
        background-color: white;
        background-image: url("/img/highlight-light-pink.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50%;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>