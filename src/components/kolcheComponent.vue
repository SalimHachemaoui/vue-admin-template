<header id="header" class="fixed-top header-transparent">

  



    <b-container>
  
      <div class="logo float-left">
          <h1 class="text-light"><a href="index.html"><span>Moderna</span></a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>
  
  
  <!--b-navbar toggleable="sm" class="mobile-nav d-lg-none">
    
        <nav class="nav-menu float-right d-none d-lg-block">
          <ul>
            <b-nav-item active-class="active" class="nav-link" v-for="routes in links" :key="routes.id" :to="routes.path"
            exact>
            {{ routes.name }}
          </b-nav-item>
          </ul>
        </nav>
      </b-collapse>
  </b-navbar-->
  <b-navbar-toggle target="nav-text-collapse"  class="mobile-nav-toggle d-lg-none" ></b-navbar-toggle>
    
      <b-collapse id="nav-text-collapse" is-nav tag="nav" class="nav-menu float-right d-none d-lg-block" >
  
          <ul>
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li class="drop-down"><a href="">Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="drop-down"><a href="#">Drop Down 2</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                <li><a href="#">Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
  
  
  </b-collapse>
  </b-container>
    </header>