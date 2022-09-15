<template>
   <div id="main">
      <div class="header">
        <p id="navBar_title">Dashboard</p>
      </div>
      <div class="boxData_wrapper">
         <div class="boxData" id="boxData_1">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/folder_document_multimedia_icon.png">
               <p id="Inside_boxData_text">Porfolios</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">5</p>
            </div>
         </div>
         <div class="boxData" id="boxData_2">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/folder_document_multimedia_icon.png">
               <p id="Inside_boxData_text">Assigments</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">10</p>
            </div>
         </div>
         <div class="boxData" id="boxData_3">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/folder_document_multimedia_icon.png">
               <p id="Inside_boxData_text_report">Reports</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">0</p>
            </div>
         </div>
         <div class="boxData" id="boxData_4">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/folder_document_multimedia_icon.png">
               <p id="Inside_boxData_text_other">Others</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">8</p>
            </div>
         </div>
      </div>
      <div class="list">
            <div class="list_box" id="list_box_1">
                <div class="list_wrapper">
                    <div class="list_portfolio"></div>
                </div>
            </div>
            <div class="list_box" id="list_box_1">
                <div class="list_wrapper">
                    <div class="list_assignment"></div>
                </div>
            </div>
            <div class="list_box" id="list_box_3">
                <div class="list_wrapper">
                    <div class="list_report">
                    </div>
                </div>
            </div>
      </div>
  </div>
  <sidebar_navbar></sidebar_navbar>
</template>
<script>
import sidebar_navbar from '../components/sidebar_navbar.vue';
export default {
    name: "studentPage",
    components: {
        sidebar_navbar,
    },
};
</script>
<style>
.list{
    overflow: hidden;
    margin-right:25px;
    margin-top:0px;
}
.list_box{
    width: 460px;
    height: 250px;
    border: 2px solid black;
    display: inline-block;
    padding:10px;
    margin-left:50px;
    margin-top:30px;
}
#list_box_1{
    margin-left:30px;
}
#list_box_3{
    margin-left: 30px;
    width: 950px;
}
.header{
    border:2px solid black;
    background-color: #13506A; 
    border-right: none;
    border-left: none;
    width: 100%;
}
.boxData_wrapper{
    height: 148px;
    overflow: hidden;
}
.boxData{
    display: inline-block;
    padding: 5px;
    margin-left:90px;
    margin-top: 14px;
    border: 1px solid blue;    
    background-color: white;
    width:170px;
    height:80px;
    border: 1px solid black;
    border-radius:10px;
}
#boxData_1{
    margin-left: 0px;
    margin-top:38px;
    background-color:cornflowerblue
}
#boxData_2{
   background-color:rgba(210, 105, 30, 0.6);
}
#boxData_3{
   background-color:rgba(34, 139, 34, 0.529);
}
#boxData_4{
   background-color:lightcoral;
}
.Inside_boxData{
    font-size:15px;
    position: relative;
    color: black;
}
.Inside_boxData_icons{
    position: absolute;
    width: 35px;
    height: 35px;
}
#Inside_boxData_icon{
    right:20px;
    top: 10px;
}
#Inside_boxData_text{
    position: absolute;
    right:7px;
    top:42px;
}
.Inside_boxData_number{
    font-size:30px;
    position: absolute;
    left:35px;
    top:10px;
}
#Inside_boxData_text_other{
    position: absolute;
    right:17px;
    top:44px;
}
#Inside_boxData_text_report{
    position: absolute;
    right:10px;
    top:44px;
}
</style>
