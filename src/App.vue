<script setup>
import Navbar from "./views/User/Assets/Navbar.vue";
import Footer from "./views/User/Assets/Footer.vue";
import Content from "./views/User/index.vue";

import AdminSidebar from './views/Admin/Assets/Sidebar.vue'
import AdminFooter from './views/Admin/Assets/Footer.vue'
import AdminNavbar from './views/Admin/Assets/Navbar.vue'

</script>
<template>
  <div>

    <div v-if="token">


  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Purple Admin</title>
  </head>

    <div class="container-scroller">
      <!-- partial:partials/_navbar.html -->
      <AdminNavbar></AdminNavbar>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
        <AdminSidebar></AdminSidebar>
        <!-- partial -->
        <div class="main-panel my-5">
          <router-view></router-view>
        </div>
        <!-- main-panel ends -->
      </div>
    </div>



    </div><!--admin dashboard-->


    <div v-else>
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
          </div>
          <router-view></router-view><!--user content end-->
          <Footer></Footer><!--footer-->
      </body>
    </div> <!--user templete end-->
    
  </div>
</template>




<script>
const token = localStorage.getItem('token')
if(token){

// css link
import('@/assets/admin/assets/vendors/mdi/css/materialdesignicons.min.css')
import('@/assets/admin/assets/vendors/css/vendor.bundle.base.css')
import('@/assets/admin/assets/css/style.css')
import('./assets/admin/assets/images/favicon.ico')
// js link
import('@/assets/admin/assets/vendors/js/vendor.bundle.base.js')
import('@/assets/admin/assets/vendors/chart.js/Chart.min.js')
import('@/assets/admin/assets/js/off-canvas.js')
import('@/assets/admin/assets/js/hoverable-collapse.js')
import('@/assets/admin/assets/js/misc.js')
import('@/assets/admin/assets/js/dashboard.js')
import('@/assets/admin/assets/js/todolist.js')


}else{
// css link
import("./assets/user/css/bootstrap.css");
import("./assets/user/css/style.css");
import("./assets/user/css/responsive.css");
// js link
import("./assets/user/js/bootstrap.js");
import("./assets/user/js/jquery-3.4.1.min.js");
}




</script>