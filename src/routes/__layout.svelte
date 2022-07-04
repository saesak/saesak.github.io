<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<nav>
    <div id="navigation-div">
        <div id="buttons-div">
            <a class="btn" href="./">Home</a>
            <a class="btn" href="/projects">Projects</a>
            <a class="btn" href="/about">About</a>
            <a class="btn" href="#" onclick='window.open("/img/my-resume.pdf");return false;'>Resume</a>
        </div>
    </div>
</nav>

<div>
    <slot></slot>
</div>

<style>
    #navigation-div {
        right: 2vw;
		flex: 1.25;
		display: flex;
		flex-direction: column;
        margin-bottom: 4vh;
	}
	#buttons-div {
		font-family: Muli;
		margin-left: auto;
    }
    .btn {
        font-size: 1.7em;
        margin-right: 2vw;
    }
    .btn mark {
        background-color: white;
    }
    a {
        text-decoration: #fadbcf wavy underline;
        color: inherit;
    }
    a:hover {
        background-color: #fadbcf;
    }
    @media (max-width: 500px) {
        .btn {
            font-size: 4vw;
            margin-right: 2vw;
        }
    }
</style>