<template>
  <section id="departments" class="departments" style="padding:0px">
    <div class="container">
      <div class="row nav-link">
        <b-card no-body class=" tab-content nav-tabs">
          <b-tabs pills card vertical class=" ">
            <b-tab v-for="categorie in categories[this.$route.params.id]" :key="categorie.id" :title="categorie.name" class=""
              active-class="active" exact>
              <div class="row">
                <h4>{{categorie.name}}</h4>
                <div class="col-12 text-left">
                  <p style="font-size: 20px; margin-bottom: 20px;text-transform:capitalize;">
                  {{categorie.text}}
                </p>
                </div>
                <div class="col-12 justify-content-center d-flex" >
                  <template v-if="categorie.mediatype=='image'"> 
                  <img :src="require('../assets/img/'+$route.params.id+'/'+img)" v-for="img in categorie.img" :key="img" alt="" v-bind:style="categorie.style" />
                </template>
                <template v-else-if="categorie.mediatype=='video'">
                  <video :src="require('../assets/img/'+$route.params.id+'/'+img)" v-for="img in categorie.img" :key="img" alt="" v-bind:style="categorie.style" autoplay loop />
                </template>
                </div>
                
                <component :is="categorie.Cname"></component>

              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  Name: "services",
  data() {
    return {
      categories: {
        medical: [{
          id: 0,
          name: "Skin segmentation, Hydratation estimation",
          text: "T2 mapping (seconds) calculation : (A) before and (B) 1 h, after moisturizer application.",
          img: ["SkinFigures1.png"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 1,
          name: "4D MRI Segmentation, 3D/2D/2D+T ",
          text: "3D-2D MRI brain tumor segmentation",
          img: ["4D_MRI_2.png","4D_MRI_1.png"],
          Cname: "",
          style: {maxWidth:'300px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 2,
          name: "Echocardiography segmentation & tracking",
          text: "Echocardiography has been the preferred imaging modality to study the heart chambers for routine screening purposes.",
          img: ["Echocardiographi1.png","Echocardiographi2.png"],
          Cname: "",
          style: {maxWidth:'300px',height:'auto',maxHeight:'400px'},
          mediatype:"image",

        }, {
          id: 3,
          name: "CT Scan Covid Lesion segmentation and severity classification",
          text: "Visualization of the lesion segmentation performance of some of the state-of-the-art networks in MosMedData",
          img: ["ctsegmentation_1.png","ctsegmentation_2.png"],
          Cname: "",
          style: {maxWidth:'300px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 4,
          name: "Sinus Sphenoidal based identification",
          text: "3D visualization of two sphenoidal hemisinuses segmentation results",
          img: ["Sinus.jpg"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }],


        industry: [{
          id: 0,
          name: "Visual surface inspection",
          text: "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
          img: ["inspection.jpg"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 1,
          name: "Defect detection",
          text: "Deep learning defect detection.",
          img: ["defect.jpeg"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 2,
          name: "Object Counting",
          text: "Detection based object counting",
          img: ["object counting.jpg"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        },],


        retail: [{
          id: 0,
          name: "Detection & Tracking",
          text: "Detected people in RGB-D data from dense depth data (right) and color image data (left). The method neither relies on background learning nor on a ground plane assumption.",
          img: ["detectd.png"],
          Cname: "LiveDetector",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 1,
          name: "Customer Behavior Analysis",
          text: "Customer Behavior Analysis",
          img: ["customer.jpg"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 2,
          name: "Density estimation",
          text: "Person density estimation. (a) Input image, (b) estimated density, and (c) colorbar that defines the color mapping to the fractional human count. For this example the true human count equals 303, while the given density predicts 294.",
          img: ["density.png"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 3,
          name: "People Counting",
          text: "People counting Use Case with Object Detection. Showing the box with the Region of Interest (ROI) and the crossing line.",
          img: ["video-p.mp4"],
          Cname: "UploadFile",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"video",
        }, {
          id: 4,
          name: "Face recognition",
          text: "Face recognition is always an interesting area and one of the challenging tasks in computer vision and image retrieval. It is applicable in variety of domain such as in ATM, ",
          img: ["face.gif"],
          Cname: "LiveDetector",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 5,
          name: "Intrusion Detection",
          text: "Intrusion detection systems are an integral part of most physical security systems, critical infrastructure protection, and safety applications in transportation and manufacturing.",
          img: ["intrusion-detection-computer-vision_1.webp"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        }, {
          id: 6,
          name: "Facial Emotion Analysis",
          text: "Emotion Detection Using Convolutional",
          img: ["emotion-recog.png"],
          Cname: "LiveDetector",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        },],

        Recognition: [{
          id: 0,
          name: "Recognition",
          text: "Detected people in RGB-D data from dense depth data (right) and color image data (left). The method neither relies on background learning nor on a ground plane assumption.",
          img: ["detectd.png"],
          Cname: "",
          style: {maxWidth:'600px',height:'auto',maxHeight:'400px'},
          mediatype:"image",
        },]
      },



    }
  },

}


</script>
<style>
#app .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  background-color: white;
  border-left: 5px solid #1e4356;
  color: #1e4356;
  border-radius: 10px;
}

#app .nav-pills a {
  color: rgb(69, 108, 214);
  border-radius: 10px;
}

#app .nav-pills a:hover {
  color: #2fa2e0;
  border-radius: 10px;
}

#app .card {

  --bs-card-cap-bg: #fff;

}

/*--------------------------------------------------------------
# Departments
--------------------------------------------------------------*/
.departments .nav-tabs {
  border: 0;
}
.departments .nav-link {
  border: 0;
  padding: 20px;
  color: #555555;
  border-radius: 0;
  border-left: 5px solid #fff;
  cursor: pointer;
}
.departments .nav-link h4 {
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;
}
.departments .nav-link p {
  font-size: 14px;
  margin-bottom: 0;
}
.departments .nav-link:hover  {
  color: #3fbbc0;
}
.departments h4{
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;
  color: #3fbbc0;
}
.departments .nav-link.active {
  background: #f7fcfc;
  border-color: #3fbbc0;
}
.departments .nav-link.active h4 {
  color: #3fbbc0;
}
.departments .tab-panel.active {
  -webkit-animation: slide-down 0.5s ease-out;
  animation: slide-down 0.5s ease-out;
}
.departments .tab-panel img {
  float: left;
  max-width: 300px;
  padding: 0 15px 15px 0;
}
@media (max-width: 768px) {
  .departments .tab-panel img {
    float: none;
    padding: 0 0 15px 0;
    max-width: 100%;
  }
}
.departments .tab-panel h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #3fbbc0;
}
.departments .tab-panel p {
  color: #777777;
}
.departments .tab-panel p:last-child {
  margin-bottom: 0;
}
@-webkit-keyframes slide-down {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



.departments .tb img {
  float: left;
  max-width: 600px;
  padding: 0 15px 15px 0;
}
@media (max-width: 768px) {
  .departments .tb img {
    float: none;
    padding: 0 0 15px 0;
    max-width: 100%;
  }
}
.departments .tab-panel-1 h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #3fbbc0;
}
.departments .tab-panel-1 p {
  color: #777777;
}
.departments .tab-panel-1 p:last-child {
  margin-bottom: 0;
}

</style>
