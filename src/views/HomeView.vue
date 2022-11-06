<template>
  <div class="home">
    
    <SliderComponent></SliderComponent>

    <ServiceCategories></ServiceCategories>
    <!--LiveDetector msg="Welcome to Your Vue.js App"/-->
    <hr style="border-top:solid 6px #1e4356; width:40%;margin:auto;margin-top:20px;margin-bottom:20px"/>
    <h4 style="color:">Most featured services</h4>
    <HomeServices></HomeServices>
 
    
  </div>
  
</template>

<script>
// @ is an alias to /src
//import LiveDetector from '@/components/LiveDetector.vue'

import SliderComponent from '@/components/sliderComponent.vue';
import HomeServices from '@/components/HomeServices.vue';
import ServiceCategories from '@/components/ServiceCategories.vue';



export default {
  name: 'HomeView',
  components: {
    ServiceCategories,
   
    SliderComponent,
    HomeServices
}
}
</script>
