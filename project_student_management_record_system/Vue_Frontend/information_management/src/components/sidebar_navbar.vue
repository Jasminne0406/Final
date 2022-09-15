<template>
    <div id="student_sidebar" class="sidebar">
        <img @click="openNav()" id="toggle" class="student_sidebar_toggle" src="../assets/student_dashboard_toggle.png">
        <img @click="closeNav()" id="toggleClose" class="student_sidebar_toggleClose" src="../assets/student_dashboard_toggle.png">
        <div class="sidebar_wrap">
           <div class="sidebar_profile_wrap">
              <img id="sidebar_profile" src="../assets/Institute_of_Technology_of_Cambodia_logo.png">
              <p id="sidebar_profile_name">Soeng prakmlis</p>
              <p id="sidebar_profile_status">Student</p>
              <div class="sidebar_line"></div>
          </div>
          <div class="sidebar_menu">
             <router-link to="/studentHomePage"  id="sidebar_menu" class="sidebar_link"> 
                  <img class="sidebar_menu_icons" id="sidebar_menu_icon_dashboard" src="../assets/dashboard_monitor_icon.png">
                  <p class="sidebar_menu_text"> Dashboard </p>
             </router-link>
             <router-link to="/studentAccountPage"  id="sidebar_menu" class="sidebar_link"> 
                  <img class="sidebar_menu_icons" id="sidebar_menu_icon_account" src="../assets/ui_essential_app_avatar_profile_icon.png">
                  <p class="sidebar_menu_text" id="sidebar_menu_text_account"> Account </p>
             </router-link>
              <router-link to="/studentDocumentPage"  id="sidebar_menu" class="sidebar_link"> 
                  <img class="sidebar_menu_icons" id="sidebar_menu_icon_document1" src="../assets/read_book_icon.png">
                  <p class="sidebar_menu_text" id="sidebar_menu_text_document1"> Documents </p>
             </router-link>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
          openNav() {
            document.getElementById("student_sidebar").style.width = "300px";
            document.getElementById("main").style.marginLeft = "280px";
            document.getElementById("toggle").style.marginLeft = "220px";
            document.getElementById("toggle").style.display = "none";
            document.getElementById("toggleClose").style.display = "block";
            },

            /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
          closeNav() {
            document.getElementById("student_sidebar").style.width = "95px";
            document.getElementById("toggle").style.display = "block";
            document.getElementById("toggle").style.marginLeft = "0px";
            document.getElementById("main").style.marginLeft = "90px";
            document.getElementById("toggleClose").style.display = "none";
            document.getElementById("form2").style.marginLeft = "0px";
            },
        },
    }
</script>
<style>
.sidebar_line{
  position: absolute;
  margin-top: 150px;
  border-bottom: 2px solid black;
  width:100%;
}
.sidebar_profile_wrap{
  height: 5rem;
  font-size: 23px;
  color: white;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
  margin-top: -40px;
}
#sidebar_profile{
  height: 80px;
  width: 80px;
  position: absolute;
  left: 10px;
  top: 50px;
}
#sidebar_profile_name{
  bottom: 3px;
  top: 60px;
  left: 100px;
  position: absolute;
}
#sidebar_profile_status{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  top:90px;
  left: 100px;
  position: absolute;
}
.sidebar_menu{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
  margin-top:70px;
}

#sidebar_menu {
   border-bottom: 2px solid black;
   width: 100%;
   height: 45px;
}
.student_sidebar_toggle{
    position: absolute;
    width: 40px;
    top: 10px;
    left: 30px;
    cursor: pointer;
    transition: 0.5s;
 }
 .sidebar{
    height: 100%;
    width: 95px;
    position: fixed;
    z-index: 1; /* Stay on top */
    top: 0px;
    left:0px;
    background-color: #13506A; 
    border-right: 3px solid black;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
 }
.sidebar_menu_text{
  color: white; 
  font-size: 19px; 
  left: 100px;
  top: 180px;
  position: absolute;
}
#sidebar_menu_text_account{
  top: 223px;
}
#sidebar_menu_text_document1{
  top: 267px;
}
.sidebar_menu_text:hover{
  transition: 0.3s;
  color:cyan;
}
.sidebar_menu_icons{
  height: 28px;
  width: 28px;
  position: absolute;
}
#sidebar_menu_icon_dashboard{
  top: 180px;
}
#sidebar_menu_icon_account{
  top: 223px;
}
#sidebar_menu_icon_document1{
  top: 267px;
}
/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.student_sidebar_toggleClose{
  position: absolute;
  width: 40px;
  top: 10px;
  left: 240px;
  cursor: pointer;
  display: none;
  transition: 0.5s;
}
/* When you mouse over the navigation links, change their color */
.sidebar_link:hover{
  background-color:rgba(0, 0, 0, 0.148);
}

/* The button used to open the sidebar */

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s; /* If you want a transition effect */
  margin-left:90px;
  margin-top:-8px;
  background-color:#81818158;
  color: white;
  font-size: 25px; 
  margin-right: -7px;
  height: 100%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#navBar_title{
  margin-left: 10px;
  margin-top: 10px;
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size)
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
} */
</style>