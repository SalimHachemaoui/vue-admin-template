<template>
  <header id="header" class="sticky-top">

  <b-container>
    

    





<div>
 
  <b-navbar  toggleable="sm">
    <div class="logo float-left">
        <h1 class="text-light"><a href="index.html"><span>Moderna</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>
    <b-navbar-toggle target="nav-text-collapse" class="ml-auto" ></b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav >
      <b-navbar-nav  class="ml-auto " >
        <b-nav-item active-class="active"  class="nav-link" v-for="routes in links" :key="routes.id" :to="routes.path"
            exact >
            {{ routes.name }}
          </b-nav-item>
      </b-navbar-nav>
    
</b-collapse></b-navbar>
</div>

</b-container>
  </header>


</template>
<script>


export default {
  name: 'NavComponent',
  data() {
    return {
          show: true,
      links: [
        {
          id: 0,
          name: 'Accueil',
          path: '/',
        },
        {
          id: 1,
          name: 'A propos',
          path: '/about',
        },
        {
          id: 2,
          name: 'Services',
          path: '/services',
        },
        {
          id: 3,
          name: 'Contact',
          path: '/contact',
        },
      ],
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
  
}

</script>
<style>

#app .navbar-light .nav-link {
    color: rgb(255, 255, 255);
}

#app .nav-item a:hover, .nav-item .active > a, .nav-menu li:hover > a {
  color: #a2cce3;
  text-decoration: none;
}
#app .nav-link.active {
  color: #a2cce3;
  text-decoration: none;
};

#app .show{
  margin-top:20px;
  width:100%;
  background-color: #1e4356
}
#app header{
  height:auto;
  padding: 0
}
@import '@/assets/vendor/icofont/icofont.min.css';
@import '@/assets/css/style.css';

</style>