<template>
    <div id="view_container">
        <section class="about">
            <h1>Data Science & Applications Research Unit</h1>

            <p class="text-muted">DSARU</p>
            <hr class="mb-4" />

            <p>The constant and spectacular technological evolution has upset our daily routines. Permanently surrounded by gadgets : mobile phone, computer, watch, camera, etc., we are faced to cohabit with machines. Accordingly, artificial intelligence, machine learning or data science, has become essential in our everyday lives.<br>
                These fields have become one of the most influential and powerful technologies on a worldwide scale, despite the fact that we are still a long way from realizing their full potential…
            </p>

        </section>
       
    </div>

</template>






<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');
@import "node_modules/bootstrap/scss/bootstrap";
//vars
$nav-height: 72px;
$cross-height: 30px;

//colors
$text-dark: #242424;
$text-light: #ffffff;
$text-light-trans: #ffffff55;
$text-accent-1: #8cc63f;
$text-accent-2: #7CAE39;
$text-accent-3: #92c9ff;

$blue-1: #303b82;
$blue-2: #0A2139;
$blue-3: #f1ebfa;
$blue-4: #f9f6fd;
$blue-5: #22114f;
$green-1: #27b02b;

$desktop-breakpoint: 1025px;
$tablet-breakpoint: 750px;
$mobile-breakpoint: 400px;

$special-breakpoint: 500px;
$special-breakpoint-2: 600px;
$special-breakpoint-3: 300px;
$special-breakpoint-4: 920px;

@mixin below-desktop {
    @media only screen and (max-width: #{$desktop-breakpoint}) {
        @content;
    }
}

@mixin below-tablet {
    @media only screen and (max-width: #{$tablet-breakpoint}) {
        @content;
    }
}

@mixin below-special-point {
    @media only screen and (max-width: #{$special-breakpoint}) {
        @content;
    }
}

@mixin below-special-point-2 {
    @media only screen and (max-width: #{$special-breakpoint-2}) {
        @content;
    }
}

@mixin below-special-point-3 {
    @media only screen and (max-width: #{$special-breakpoint-3}) {
        @content;
    }
}

@mixin below-special-point-4 {
    @media only screen and (max-width: #{$special-breakpoint-4}) {
        @content;
    }
}

.about {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 100px 10% calc(100px + 4vw) 10%;
    background-color: $blue-3;

    @include below-desktop {
        padding: calc(10vmax + 30px) 10% calc(14vmax + 30px) 10%;
        margin-top: 0;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 4vw;
        clip-path: polygon(0 0, 0 4vw, 100% 100%);
        background-color: $text-light;
    }

    h1 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        text-align: left;
        width: 100%;
    }

    p {
        letter-spacing: 0.5px;
        text-align: justify;
        line-height: 1.8;

        /*@include below-desktop{
        text-align: left;
    }*/
    }


}

div#view_container {
    display: block;
    position: relative;
    // top: $nav-height;
    height: auto;
}

body{
    margin: 0;
    width: 100%;
    color: $text-dark;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.92em;
    overflow-x: hidden;
}

a{
    text-decoration: none;
    color: inherit;
}

*{
    outline: none;
    box-sizing: border-box;
}

p{
    letter-spacing: 0.5px;
    text-align: justify;
    line-height: 1.8;

    /*@include below-desktop{
        text-align: left;
    }*/
}

div#page_container{
    display: block;
    min-height: 100vh;
}
div#view_container{
    display: block;
    position: relative;
    // top: $nav-height;
    height: auto;
}

#particles-js{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

section.first{
    display: block;
    position: relative;
    width: 100%;
    min-height: calc(100vh - 0.0*#{$nav-height});
    padding-top: $nav-height;
}

span.green{
    color: $text-accent-1;
}
</style>