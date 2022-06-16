<script setup>
import Navbar from "./views/User/Assets/Navbar.vue";
import Footer from "./views/User/Assets/Footer.vue";
import Content from "./views/User/index.vue";
</script>
<template>
  <div>

    <!--user templete start -->
    <head>
      <!-- Basic -->
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!-- Mobile Metas -->
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <!-- Site Metas -->
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="author" content="" />

      <title>Tropiko</title>
    </head>
    <body>
      <div class="hero_area">
        <!-- header section strats -->
        <Navbar></Navbar> <!--navbar-->
        <router-view> <!--user content -->
          <Content></Content>
        </router-view><!--user content end-->
        <Footer></Footer><!--footer-->
      </div>
    </body>
    <!--user templete end -->
  </div>
</template>




<script>
import("./assets/user/css/bootstrap.css");
import("./assets/user/css/style.css");
import("./assets/user/css/responsive.css");

import("./assets/user/js/bootstrap.js");
import("./assets/user/js/jquery-3.4.1.min.js");
</script>