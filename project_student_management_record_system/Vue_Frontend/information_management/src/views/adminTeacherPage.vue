<template>
    
     <div id="main">
        <div class="header">
            <p id="navBar_title">Teachers</p>
        </div>
        <div class="button_add">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                Add a teacher
                </button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content" style>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Teacher</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-profile">
                            <img src="../assets/profile.png" id="photo">
                            <input type="file" id="file">
                            <label for="file" id="uploadBtn">Choose Photo</label>
                        </div>
                        <div class="form-group row" id="form-id">
                            <label for="inputPassword" class="col-sm-2 col-form-label">ID</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="ID">
                            </div>
                        </div>
                        <div class="form-group row" id="form-name">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Full Name">
                            </div>
                        </div>
                        <div class="form-group row" id="form-dob">
                            <label for="inputPassword" class="col-sm-2 col-form-label">DOB</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Date of Birth">
                            </div>
                        </div>
                        <div class="form-group row" id="form-father">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Father</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Father's Name">
                            </div>
                        </div>
                        <div class="form-group row" id="form-mother">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Mother</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Mother's Name">
                            </div>
                        </div>
                        <div class="form-group row" id="form-phone">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Phone">
                            </div>
                        </div>
                        <div class="form-row align-items-center" id="form-department">
                            <div class="col-auto my-1">
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Departments</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">GIC</option>
                                <option value="2">GEE</option>
                                <option value="3">GCI</option>
                            </select>
                           </div>
                        </div>
                        <div class="form-group row" id="form-NumCourses">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Courses</label>
                            <div class="col-sm-10">
                            <input type="number" v-model="course" class="form-control" id="inputCourse" placeholder="0">
                            <!-- <button type="button" onclick="setCourse()" class="btn btn-warning" id="add_course">Add</button> -->
                            </div>
                        </div>
                        <div class="form-group row" id="form-address">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Address">
                            </div>
                        </div>
                        <div class="form-group row" id="form-email">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group row" id="form-password">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group row" id="course1">
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCourse1" placeholder="course's Name">
                            </div>
                        </div>
                        <!-- <span v-html="course"></span> -->
                        <div class="form-group row" id="course2">
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCourse2" placeholder="course's Name">
                            </div>
                        </div>
                        <div class="form-group row" id="course3">
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputCourse3" placeholder="course's Name">
                            </div>
                        </div>
                        <div class="form-group row" id="year1">
                            <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputYear1" placeholder="year">
                            </div>
                        </div>
                        <div class="form-group row" id="year2">
                            <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputYear2" placeholder="year">
                            </div>
                        </div>
                        <div class="form-group row" id="year3">
                            <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputYear3" placeholder="year">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <div class="container" id="search_container">
            <div class="row">    
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="input-group">
                        <div class="input-group-btn search-panel">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span id="search_concept">Folder</span> <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Assignments</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Othe</a></li>
                            <li><a href="#">Less than </a></li> 
                            <li class="divider"></li>
                            <li><a href="#">Anything</a></li>
                            </ul>
                        </div>
                        <input type="hidden" name="search_param" value="all" id="search_param">         
                        <input type="text" class="form-control" name="x" id="formInputSearch" placeholder="Search teacher...">
                        <img id="search_icon" src="../assets/search.png">
                        <span class="input-group-btn"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="file_wrappers" id="wrappers">
                <table class="table table-hover" id="file_wrapper">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Course</th>
                            <th scope="col">Year</th>
                            <th scope="col">Group</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th></th>
                        </tr>


                    </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Jacob</td>
                        <td>Mlis</td>
                        <td>Mlis</td>
                        <td>Mlis</td>
                        <td>Mlis</td>
                        <td>
                            <button type="button" class="btn btn-warning" id="file_edit">Edit</button>
                            <button type="button" class="btn btn-danger" id="file_delete">Delete</button>
                            <img id="eye_icon" src="../assets/view_icon.png">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <sidebar_navbar_admin></sidebar_navbar_admin>
</template>

<script>
    // setCourse.onclick = function(){
    //     setCourse.getElementById('course1').innerHTML = ` <div class="col-sm-10">
    //                         <input type="text" class="form-control" id="inputCourse1" placeholder="course's Name">
    //                         </div>`;
    // }
import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';
export default {
    name: "adminPage",
    components: {
        sidebar_navbar_admin,
    },            
};
</script>
<style>
input::placeholder {
    font-size: 13px ;
}
#file_preview{
    width:55%;
    border: 2px solid rgb(158, 123, 123);
    margin-bottom: 5px;
}
#form-id,#form-name,#form-phone,#form-phone2,#form-father,#form-father2
,#form-address,#form-email,#form-profile,#form-department,#form-fatherJob,#form-motherJob,#form-dob,
#form-parentPhone,#form-password,#form-mother,#form-MotherJob{
    width: 55%;
}
.modal-content{
    width: 1000px;
}
.button_add{
    position: absolute;
    top: 65px;
    right: 10px;
}
#form-id,#form-phone, #form-fatherJob, #form-phone2, #form-father2{
    position: absolute;
    right: 10px;
}
#form-father2{
     top: 204px;
}
#form-id{
    top: 141px;
}
#form-phone{
    top: 204px;
}
#form-department, #course1, #course2, #course3{
    position: absolute;
    right: 100px;
}
#form-NumCourses{
    top: 248px;
    position: absolute;
    right: -15px;
    width: 190px;
}
#form-department{
    top: 250px;
    width: 33%;
}
#course1{
    top: 340px;
    right: 65px;
    width:39.7%;
}
#course2{
    top: 380px;
    right: 65px;
    width:39.7%;
}
#course3{
    top: 420px;
    right: 65px;
    width:39.7%;
}
#year1, #year2, #year3 {
    position: absolute;
    width: 190px;
    right: -15px;
}
#year1{
    top:340px;
    
}
#year2{
    top:380px;
    
}
#year3{
    top:420px;
    
}

</style>


