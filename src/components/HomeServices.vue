<template class="homeservice">
    <div id="homeservices" class="container">
        
        
  <b-row class="justify-content-center"> 

  <b-card v-for="card in cards" :key="card.id"
    :title="card.title"    
    class="col-md-4 "
    :img-src="require('../assets/img/'+card.imgsrc)"
    img-alt="Image"
    img-top
    deck
   >
   
    <b-card-text>
      {{card.text}}
    </b-card-text>

    <b-button :href="card.link" variant="primary" >Discover the service</b-button>
  </b-card>
       
</b-row>
        
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        Name: 'HomeServices',
        data() {
            return {
                cards:[
                    {   
                        id:0,
                        title: 'Intrusion Detection',
                        imgsrc:'retail/intrusion-detection-computer-vision_1.webp',
                        imgalt:'image',
                        tag:"service",
                        text:"Intrusion detection systems are an integral part of most physical security systems, critical infrastructure protection, and safety applications in transportation and manufacturing.",
                        link:"services/retail",
                    },
                    {   
                        id:1,
                        title: 'Facial emotion Analysis',
                        imgsrc:'retail/emotion-recog.png',
                        imgalt:'image',
                        tag:"service",
                        text:"Emotion Detection Using Convolutional.",
                        link:"services/retail",
                    },
                    {   
                        id:2,
                        title: 'Defect detection',
                        imgsrc:'industry/defect.jpeg',
                        imgalt:'image',
                        tag:"service",
                        text:"Deep learning defect detection.",
                        link:"services/industry",
                    },{   
                        id:3,
                        title: '4D MRI Segmentation',
                        imgsrc:'medical/4D_MRI_2.png',
                        imgalt:'image',
                        tag:"service",
                        text:"3D-2D MRI brain tumor segmentation.",
                        link:"services/medical",
                    },{   
                        id:4,
                        title: 'Echocaradiography segmentation',
                        imgsrc:'medical/Echocardiographi1.png',
                        imgalt:'image',
                        tag:"service",
                        text:"Echocardiography has been the preferred imaging modality to study the heart chambers for routine screening purposes.",
                        link:"services/medical",
                    },{   
                        id:5,
                        title: 'Object counting',
                        imgsrc:'industry/object counting.jpg',
                        imgalt:'image',
                        tag:"service",
                        text:"Detection based object counting",
                        link:"services/industry",
                    },
                    
                    ]
            }
        },
        mounted() {

axios.get('http://10.104.248.4:8088/service')
      .then(response => (console.log(response)))
        }
    }
</script>
<style>


#app .card-img-top{
    height :300px;
    width:auto;
}
#app .card-body{
    display:flex;
    flex-direction:column;


}

#app .card-body a{
    width:200px;
    margin-top:auto;
    margin-right: auto;
    margin-left:auto
}
</style>