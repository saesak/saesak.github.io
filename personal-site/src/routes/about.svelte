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
            <div id="resume">
                <p>Resume</p>
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
            <a class="linkedin" href="https://www.linkedin.com/in/hyun-ki-cho/">Linkedin</a>
            <a class="github" href="https://github.com/saesak">Github</a>
            <a class="resume" href="">Resume</a>
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
    .linkedin{
        background-image: url("/img/linkedin.png");
    }

    

</style>