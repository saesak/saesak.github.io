<script>
    export let title;
    export let image;
    export let blurb;
    export let link;

    function handleClick(event) {
        window.open(link, '_blank').focus();
    }
</script>

<svelte:head>
  	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</svelte:head>


<main>
    <div class = "cup" on:click={handleClick}>
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
        <div class="bubble bubble-4"></div>
        <div class="bubble bubble-5"></div>
        <div class="bubble bubble-6"></div>
        <div class="bubble bubble-7"></div>

        <div id = "title">
            <p>{title}</p>
        </div>
        <div class="liquid">
        <div id = "window">
            <img src={image} alt={title}/>
        </div>
        <div id = "text">
            <p>{blurb}</p>
        </div>
        </div>
    </div>
</main>

<style>
    
    #window {
        justify-content: center;
        margin-right: auto;
        z-index: 2;
    }
    #window img {
        width: 30vw;
        height: 30vh;
    }
    #title {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        font-size: 4vh;
        font-weight: 900;
        margin-bottom: 0;
    }
    #text {
        margin-left: 0.7vw;
        margin-right: 0.7vw;
        font-size: 2.2vh;
        z-index: 2;
    }
    .liquid {
        z-index: 0;
        height: 100%;
        width: 100%;
        border-radius: 5% 5% 15% 15%;
        background-color: var(--liqColor);
    }
    
    .cup {
        border: 2px solid transparent;
    width: fit-content;
    height: 74vh;
    position: relative;
    border-radius: 5% 5% 15% 15%;
    /*background: url("/img/coffee-img-1.svg"), url("/img/coffee-img-2.svg");
    background-repeat: repeat-x;
    animation: coffee 3s infinite linear;*/
    
    overflow: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 6.0px 12.0px 12.0px hsl(0deg 0% 0% / 0.31);
    background-color: #FFFF;
    }
    .cup:hover {
        border: 2px solid #030303;
    }
    @keyframes coffee {
    100% {
        background-position: -100% 0, -100% 0;
    }
    }
    .bubble {
    height: 15px;
    width: 15px;
    background-color: var(--bubColor);
    border-radius: 50%;
    position: absolute;
    animation: bubbles forwards infinite;
    opacity: 0.6;
    z-index: 1;
    }
    @keyframes bubbles {
    100% {
        transform: translateY(-40vh);
        opacity: 0;
    }
    }
    .bubble-1 {
    left: 30%;
    bottom: 10px;
    animation-delay: 0.5s;
    animation-duration: 3s;
    }
    .bubble-2 {
    left: 50%;
    bottom: 35px;
    animation-delay: 1.2s;
    animation-duration: 4s;
    }
    .bubble-3 {
    left: 70%;
    bottom: 30px;
    animation-duration: 4s;
    }
    .bubble-4 {
    left: 20%;
    bottom: 10px;
    animation-delay: 0.2s;
    animation-duration: 3s;
    }
    .bubble-5 {
    left: 39%;
    bottom: 35px;
    animation-delay: 0.8s;
    animation-duration: 4s;
    }
    .bubble-6 {
    left: 58%;
    bottom: 30px;
    animation-delay: 0.5s;
    animation-duration: 2s;
    }
    .bubble-7 {
    left: 88%;
    bottom: 30px;
    animation-delay: 1s;
    animation-duration: 4s;
    }
    @media (max-width: 500px) {
        #window img {
            width: 100%;
            height: 100%;
        }
        .liquid {

        }

    }
</style>