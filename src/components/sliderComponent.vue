<template>
    <!-- ***** Main Banner Area Start ***** -->
    <div class="main-banner " id="top">


        <video autoplay muted loop id="bg-video">
            <source src="../assets/computer1.mp4" type="video/mp4" />
        </video>




        <div class="video-overlay header-text">

            <div class="caption" id="hero">
                <div id="fw_al_003"
                    class="container carousel slide carousel-fade ps_control_bsquare swipe_x ps_easeOutQuint"
                    data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000" role="listbox">

                    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls
                        style="text-shadow: 0px 1px 2px #333;">
                        <div id="heroCarousel" class="row m-0 container carousel carousel-fade " data-ride="carousel">


                            <!-- Slide 1 -->
                            <div class="carousel-item active ">
                                <div class="carousel-container" id="slide1">

                                    <div class="banner-content ">
                                        <h2 class="animate__animated animate__fadeInDown">Industry</h2>

                                        <p class="animate__animated animate__fadeInUp"></p>
                                        <a href="Industry"
                                            class="btn-get-started animate__animated animate__fadeInUp">read
                                            me</a>
                                    </div>

                                </div>
                            </div>
                            <!-- Slide 2 -->
                            <div class="carousel-item">
                                <div class="carousel-container">
                                    <h2 class="animate__animated animate__fadeInDown">Medical & Pharma</h2>
                                    <p class="animate__animated animate__fadeInUp"></p>
                                    <a href="Medical" class="btn-get-started animate__animated animate__fadeInUp">Read
                                        More</a>
                                </div>
                            </div>
                            <!-- Slide 3 -->
                            <div class="carousel-item">
                                <div class="carousel-container">
                                    <h2 class="animate__animated animate__fadeInDown">Detection & Tracking</h2>
                                    <p class="animate__animated animate__fadeInUp"></p>
                                    <a href="Retail" class="btn-get-started animate__animated animate__fadeInUp">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>

                        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </b-carousel>

                </div>



            </div>

        </div>

    </div>

</template>

<script>





export default {
    name: "SliderComponent"

}

</script>