<script>
import ProjectComp from "./projectComp.svelte";


</script>

<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>

<!-- Project Types:
1. Full Stack Development: artz, 
3. ML/DL Projects: what i have on resume 
-->
<main>
    <div id = "container">
        <div id ="title-resume">
            <div id="title">
                <p>Projects</p>
            </div>
            <div id="resume">
                <p>Resume</p>
            </div>
        </div>
        <div class="category">
            <div class="subtitle">
                <p>Full Stack Development</p>
            </div>
            <div class="row">
                <ProjectComp 
                title="Artz Philly Mobile" image="/img/artzMobile.png"
                blurb="was goood" link="https://google.com" 
                --bubColor="#fbbe08" --liqColor="#fb8b1b"
                ></ProjectComp>
            </div>
        </div>
        <div class="category">
            <div class="subtitle">
                <p>ML/DL Projects</p>
                <div class="row">
                    <ProjectComp 
                    title="Artz Philly Mobile" image="/img/artzMobile.png"
                    blurb="was goood" link="https://google.com" 
                    --bubColor="#86e3ca" --liqColor="#04cf99"
                    ></ProjectComp>
                    <ProjectComp 
                    title="Artz Philly Mobile" image="/img/artzMobile.png"
                    blurb="was goood" link="https://google.com" 
                    --bubColor="#86e3ca" --liqColor="#04cf99"
                    ></ProjectComp>
                </div>
                <div class="row">
                    <ProjectComp 
                    title="Artz Philly Mobile" image="/img/artzMobile.png"
                    blurb="was goood" link="https://google.com" 
                    --bubColor="#86e3ca" --liqColor="#04cf99"
                    ></ProjectComp>
                </div>
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
    .subtitle{
        margin-left: auto;
        font-family: Muli;
        font-size: 4vh;
    }
    .row {
        display: flex;
        flex-direction: row;
        gap: 5vw;
        margin-top: 3vh;
    }
</style>