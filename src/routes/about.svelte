<script>

</script>

<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<main>
    <div id = "container">
        <div id ="title-resume">
            <div id="title">
                <p>About Me</p>
            </div>
        </div>
        <div id="main-text">
            <p>I’m a junior studying Computer Science (CSCI) at the University of Pennsylvania.</p>
            <p>At Penn, I do web development for external clients with Penn Spark, and co-lead Penn Ink Secret Society, 
                a club that carries out creative writing projects.</p>
            <p>When I’m free, you’ll see me hanging with friends, learning guitar, or writing a new story I came up with.</p>
            <p>You can find me at hyunkic@seas.upenn.edu.</p>
        </div>
        <div id="icons">
            <a class="link" href="https://www.linkedin.com/in/hyun-ki-cho/"><mark>Linkedin</mark></a>
            <a class="link" href="https://github.com/saesak"><mark>Github</mark></a>
            <a class="link" href="#" onclick='window.open("/img/my-resume.pdf");return false;'><mark>Resume</mark></a>
        </div>

        <div class="cup">
            
        </div>
    </div>
</main>


<style>
    #container{
        display: flex;
        flex-direction: column;
        margin-left: 17vw;
        margin-right: 17vw;
    }
    #title-resume{
        display:flex;
        flex-direction: row;
    }
    #title{
        margin-right: auto;
        font-family: Muli;
        font-size: 6vh;
    }
    #resume{
        margin-left: auto;
        font-family: Muli;
        font-size: 6vh;
    }
    #main-text{
        margin-top: 5vh;
        font-size: 3vh;
        font-family: Muli;
    }
    #icons {
        margin-top: 5vh;
        text-align: center;
    }
    .link {
        text-decoration: none;
        text-decoration-color: inherit;
        font-size: 4vh;
        margin-right: 2vw;
        font-family: Muli;
    }
    .link mark {
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