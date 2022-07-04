<script>
import CustomFooter from "./customFooter.svelte";

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
        </div>
        <div class="category">
            <div id="subtitle-FSD">
                <p><mark>Full Stack Development</mark></p>
            </div>
            <div class="row">
                <ProjectComp 
                title="Artz Philly Mobile" image="/img/artzMobile.png"
                blurb="We used React Native, Django, PostgreSQL, Heroku, Websockets, and some threading to create
                an app for people living with Dementia. The Artz Philly organization will use this app to more easily
                connect with their target audience." 
                link="https://play.google.com/store/apps/details?id=spark.artz.philly&hl=en_US&gl=US" 
                --bubColor="#fbbe08" --liqColor="#c1e8ac"
                ></ProjectComp>
                <ProjectComp 
                title="Shared Diary Prototype" image="/img/shared-diary.PNG"
                blurb="I used React, Node.js, and MySQL to create a prototype of an app that people could use
                to write their diaries together. I thought it would be popular amongst couples." 
                link="https://github.com/saesak/shared_diary_prototype" 
                --bubColor="#fbbe08" --liqColor="#c1e8ac"
                ></ProjectComp>
            </div>
            <div class="row">
                <ProjectComp 
                title="Spotify Artist Visualizer" image="/img/nets150-visualizer.PNG"
                blurb="Me and a friend made a spotify artist visualizer for my NETS 150 final project.
                It gets a number of spotify artists as input and uses BFS to see if those artists
                are closely related or not. To run the program, simply press the play button
                and type in inputs as requested." 
                link="https://colab.research.google.com/drive/14eA9NiZOSFhxRJ_HT_q74PDzr1rRZ5V0?authuser=1" 
                --bubColor="#fbbe08" --liqColor="#c1e8ac"
                ></ProjectComp>
                <ProjectComp 
                    title="Twitter Depression App" image="/img/twitter-depression.PNG"
                    blurb="I scraped, explored, preprocessed Twitter data from depressed and non-depressed users using NLP techniques 
                    and libraries, then trained on an LSTM using Tensorflow, achieving 88% validation accuracy. I deployed the result
                    to Streamlit." 
                    link="https://github.com/saesak/streamlit_twitter_depression" 
                    --bubColor="#fbbe08" --liqColor="#c1e8ac"
                ></ProjectComp>
            </div>
        </div>
        <div class="category">
            <div id="subtitle-MLDL">
                <p><mark>ML/DL Projects</mark></p>
                <div class="row">
                    <ProjectComp 
                    title="2020 Kaggle Machine Learning & Data Science Survey" image="/img/kaggle-survey-comp.PNG"
                    blurb="I wrote an analysis on South Korea's ML/DL landscape based on surveys done on Kagglers." 
                    link="https://www.kaggle.com/code/hyunkic/south-korea-home-to-samsung-but-few-ai-experts" 
                    --bubColor="#ebdad3" --liqColor="#E6AE97"
                    ></ProjectComp>
                    <ProjectComp 
                    title="Kaggle Competition (2020 SIIM-ISIC Melanoma Classification)" image="/img/kaggle-melanoma-comp.PNG"
                    blurb="I participated in a Kaggle competition classifying benign and malignant Melanoma cells.
                    I learned a lot about analyzing picture data and CNNs." 
                    link="https://www.kaggle.com/hyunkic/melanoma-cnn-approach-imgen" 
                    --bubColor="#ebdad3" --liqColor="#E6AE97"
                    ></ProjectComp>
                </div>
            </div>
        </div>
        <CustomFooter></CustomFooter>
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
    /*category-FSD {
        width: 27vw;
    }*/
    #subtitle-FSD p{
        font-family: Muli;
        font-size: 4vh;
    }
    #subtitle-FSD p mark{
        background-color: #d9edce;
    }
    #subtitle-MLDL p{
        font-family: Muli;
        font-size: 4vh;
    }
    #subtitle-MLDL p mark{
        background-color: #f2d0c2;
    }
    .row {
        display: flex;
        flex-direction: row;
        gap: 5vw;
        margin-top: 3vh;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    @media (max-width: 500px) {
        .row {
            display: flex;
            flex-direction: column;
            gap: 5vw;
            margin-top: 3vh;
        }
    }
</style>