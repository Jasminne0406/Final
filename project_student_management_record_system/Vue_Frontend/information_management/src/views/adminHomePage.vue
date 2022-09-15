<template>
   <div id="main">
      <div class="header">
        <p id="navBar_title">Dashboard</p>
      </div>
      <div class="boxData_wrapper">
         <div class="boxData" id="boxData_1">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/folder_document_multimedia_icon.png">
               <p id="Inside_boxData_text">Documents</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">5</p>
            </div>
         </div>
         <div class="boxData" id="boxData_2">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/students.png">
               <p id="Inside_boxData_text">Students</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">10</p>
            </div>
         </div>
         <div class="boxData" id="boxData_3">
            <div class="Inside_boxData">
               <img class="Inside_boxData_icons" id="Inside_boxData_icon" src="../assets/teacher.png">
               <p id="Inside_boxData_text_report">Teachers</p>
               <p id="Inside_boxData_number" class="Inside_boxData_number">0</p>
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
<sidebar_navbar_admin></sidebar_navbar_admin>
</template>
<script>
import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';
export default {
    name: "adminPage",
    components: {
        sidebar_navbar_admin,
    },
    // methods: {
    //         login() { 
    //                 const url="http://localhost:3000/login";
    //                 axios.get(url,{withCredentials: true})
    //                 .then(response => {
    //                     if(response.data.user.role == "student"){
    //                         this.$router.push('/studentHomePage');
    //                     }
    //                     else if(response.data.user.role == "teacher"){
    //                         this.$router.push('/teacherHomePage');
    //                     }else{
    //                         this.$router.push('/adminHomePage');
    //                     }
    //                     console.log(response);
    //                 }).catch((error) => {
    //                     this.error = error.response.data.error;
    //                     alert("The username and / or password is incorrect");   
    //                 });
    //             }
    //     },
};
</script>

   