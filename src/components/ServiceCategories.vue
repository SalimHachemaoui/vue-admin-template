<template>
    <section class="service-details">
        <div class="container">

            <div class="row">
                <div class="col-md-3 d-flex align-items-stretch" v-for="service in services" :key="service.id">
                    <div class="card" deck>
                        <div class="card-img">
                            <img :src="require('../assets/img/'+service.img)" :alt="service.alt" style="height: 200px;max-width: 200px;">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><a :href="service.link">{{service.name}}</a></h5>
                            <p class="card-text">{{service.desc}}</p>
                            <div class="read-more"><a :href="service.link"><i class="icofont-arrow-right"></i> Découvrir les services</a></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </section>
</template>
<script>
export default {
    Name: "ServiceCategories",
    data() {
        return {
            services: [
                {
                    id: 0,
                    img: "medical/4D_MRI_2.png",
                    name: "Medical & Pharma",
                    desc: "",
                    alt: "",
                    link: "services/medical",

                },
                {
                    id: 1,
                    img: "retail/intrusion-detection-computer-vision_1.webp",
                    name: "Detection & Tracking",
                    desc: "",
                    alt: "",
                    link: "services/retail",

                },
                {
                    id: 2,
                    img: "industry/defect.jpeg",
                    name: "Industry",
                    desc: "",
                    alt: "",
                    link: "services/industry",

                },
                {
                    id: 3,
                    img: "Recognition/image2.jpeg",
                    name: "Recognition",
                    desc: "",
                    alt: "",
                    link: "services/recognition",

                }
            ]
        }
    }
}
</script>
<style>
.service-details {
    padding-bottom: 10px;
}

.service-details .card {
    border: 0;
    padding: 0 30px;
    margin-bottom: 60px;
    position: relative;
    background-color: white;
    border: none
}

.service-details .card-img {
    width: calc(100% + 60px);
    margin-left: -30px;
    overflow: hidden;
    z-index: 9;
    border-radius: 0;
}

.service-details .card-img img {
    max-width: 100%;
    transition: all 0.3s ease-in-out;
}

.service-details .card-body {
    z-index: 10;
    background: #fff;
    border-top: 4px solid #fff;
    padding: 30px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    margin-top: -60px;
    transition: 0.3s;
}

.service-details .card-title {
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
}

.service-details .card-title a {
    color: #1e4356;
    transition: 0.3s;
}

.service-details .card-text {
    color: #5e5e5e;
}

.service-details .read-more a {
    color: #777777;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    transition: 0.3s;
}

.service-details .read-more a:hover {
    color: #68A4C4;
}
.service-details .card{
    background-color: transparent;
}

.service-details .card:hover img {
    transform: scale(1.1);
}

.service-details .card:hover .card-body {
    border-color: #68A4C4;
}

.service-details .card:hover .card-body .card-title a {
    color: #68A4C4;
}


</style>