<template>
    <div id="main">
      <div class="header">
        <p id="navBar_title">Account</p>
      </div>
      <div class="account_container">
            <div id="info_container" class="account_containers">
                <div class="info">
                    <div class="info_header">
                        <p>Personal Information</p>
                    </div>
                    <div class="info_form" id="form1">
                        <form>
                            <div class="form-group">
                                <label for="InputName">Name</label>
                                <input type="text" class="form-control" v-model="name" id="InputName">
                            </div>
                            <div class="form-group">
                                <label for="InputEmail">Email</label>
                                <input type="text" class="form-control" v-model="email" id="Email">
                            </div>
                            <div class="form-group">
                                <label for="InputDOB">Date Of Birth</label>
                                <input type="text" class="form-control" v-model="dob" id="InputDOB">
                            </div>
                            <div class="form-group">
                                <label for="InputPhone">Phone</label>
                                <input type="text" class="form-control" v-model="phone" id="InputPhone">
                            </div>
                            <div class="form-group">
                                <label for="InputAddress">Address</label>
                                <input type="text" class="form-control" v-model="address" id="InputAddress">
                            </div>
                        </form>
                    </div>
                    <div class="info_form" id="form2">
                        <form>
                            <div class="form-group">
                                <label for="InputNameFather">Father Name</label>
                                <input type="text" class="form-control" v-model="father" id="InputNameFather">
                            </div>
                            <div class="form-group">
                                <label for="InputFatherOccupation">Father Occupation</label>
                                <input type="text"  class="form-control" v-model="fatherJob" id="InputFatherOccupation">
                            </div>
                            <div class="form-group">
                                <label for="InputNameMother">Mother Name</label>
                                <input type="text" class="form-control" v-model="mother" id="InputNameMother">
                            </div>
                            <div class="form-group">
                                <label for="InputMotherOccupation">Mother Occupation</label>
                                <input type="text" v-model="motherJob" class="form-control" id="InputMotherOccupation">
                            </div>
                            <div class="form-group">
                                <label for="InputParentPhone">Parent Phone</label>
                                <input type="text" class="form-control" id="InputParentPhone" v-model="parentPhone">
                            </div>
                            <button type="submit" class="btn btn-info" id="button_summit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="university_container" class="account_containers">
                <div class="info">
                    <div class="info_header">
                        <p>University</p>
                    </div>
                    <div class="info_form" id="form3">
                        <form>
                            <div class="form-group">
                                <label for="InputId">ID</label>
                                <input type="text" class="form-control" id="InputId" v-model="id">
                            </div>
                            <div class="form-group">
                                <label for="InputDepartment">Department</label>
                                <input type="text" v-model="department"  class="form-control" id="InputDepartment">
                            </div>
                            <div class="form-group">
                                <label for="InputYear">Year</label>
                                <input type="number" v-model="year" class="form-control" id="InputYear">
                            </div>
                            <div class="form-group">
                                <label for="InputGroup">Group</label>
                                <input type="number" v-model="group" class="form-control" id="InputGroup">
                            </div>
                            <div class="form-group">
                                <label for="InputPassword">Password</label>
                                <input type="password" v-model="password" class="form-control" id="InputPassword">
                            </div>
                            <button type="submit" class="btn btn-info" id="button_summit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="profile_container" class="account_containers">
                <div class="profile_wrapper">
                    <div class="info_header">
                        <p>Profile</p>
                    </div>
                    <div id="previewProfile"></div>
                <div class="profile_wrapper1">
                    <img :src="'../../../../Images/' + imageSrc"   id="photo"/>
                    <input type="file" id="file">
                    <label for="file" id="uploadBtn">Choose Photo</label>
                </div>
                    <input type="text" v-model="profileName" class="profile_name" id="profile_name">
                    <div class="profile_status" id="profile_status">student</div>
                </div>
                <div class="profile_button" id="profile_button_delete">
                    <button type="button" class="btn btn-warning">Edit</button>
                    <button type="button" class="btn btn-danger" id="profile_button_delete">Delete</button>
                </div>
            </div>

            <div id="button_add_file">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                Add a file
                </button>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">File</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                            <div class="form-group">
                                <label for="InputFileName">File Name</label>
                                <input type="text" class="form-control" id="InputFileName">
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Portfolios
                                </label>
                                </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                    Assignments
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                    Reports
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                    Others
                                </label>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1"></label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
        <div>
            <div class="file_wrappers">
                <table class="table table-hover" id="file_wrapper">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Folder</th>
                            <th scope="col">Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mlis</td>
                        <td>Otto</td>
                        <td>Jacob</td>
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
      </div>
    </div>
    <sidebar_navbar></sidebar_navbar>
</template>
<script>
import sidebar_navbar from '../components/sidebar_navbar.vue';
import axios from 'axios';
// import PostService from '../../../../PostService';
export default {
    name: "adminPage",
    components: {
        sidebar_navbar,
    },
    data(){
        const editStudent = JSON.parse(window.localStorage.getItem('editStudent'));
        return {
            posts: [],
            error: '',
            text: '',
            name: editStudent.name,
            email: editStudent.email,
            dob: editStudent.dob,
            phone:editStudent.phone,
            address:editStudent.address,
            father:editStudent.fatherName,	
            fatherJob:editStudent.fatherJob,
            mother:editStudent.motherName,
            motherJob:editStudent.motherJob,
            parentPhone: editStudent.parentPhone,
            id: editStudent.stuId,
            department: editStudent.departmentDetails[0].name,
            year: editStudent.departmentDetails[0].year,
            group:editStudent.departmentDetails[0].group,
            profileName: editStudent.name,
            image: editStudent.image,
            imageSrc: "211705_camera_icon.png",
            password:'123456789',
        }
    },
mounted() {
    axios.post('http://localhost:3000/getProfile',{Id:this.image},{withCredentials:true}).then((response)=>{
            console.log(response.data.image.data.originalname);
            this.imageSrc= response.data.image.data.originalname;
       }) 
    }
}
</script>

<style>
label{
    font-weight: bold;
    color:rgb(35, 139, 168);
}
#eye_icon{
   width: 25px;
   height:25px;
   margin-left:10px;
   cursor: pointer;
}
.form-control{
    text-align: center;
    color:rgb(75, 74, 74);
}
.form-check-label{
    font-size:15px;
}
.form-check-input{
    top:  10px;
    position: absolute;
}
.modal-body{
    text-align: left;
    color: black;
}
#exampleModalLongTitle{
    font-size:25px;
    color:black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#InputName, #InputId{
    width:200px;
}
#fileName{
color:black;
font-size:15px;
}
.file_wrappers{
    padding:10px;
}
#uploadFile{
    display: none;
}
#file_edit, #file_delete{
    margin-left:10px;
    height: 30px;
    font-size: 13px;
}
#file_wrapper{
    font-size:16px;
}
.profile_button{
    position: absolute;
    top:230px;
    left:75px;
}
#button_summit{
    width:100px;
}

#button_add_file{
    margin-left:90%;
    margin-top:50px;
}
#profile_button_delete{
    margin-left:10px;
}
.profile_wrapper{
    position: absolute;
}
.profile_name{
    font-size: 20px;
    color: black;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 45px;
    margin-top:150px;
    text-align: center;
    border: none;
    font-weight: bold;
    background-color: whitesmoke;
    
}
.profile_status{
    font-size: 20px;
    margin-top:-5px;
    padding-left: 40px;
    color:rgb(54, 103, 147);
}
.profile_wrapper1{
    position: absolute;
    left: 155px;
    top:74px;
    height: 130px;
    width: 130px;
    transform: translate(-50%,-50%);
    overflow: hidden ;
    border: 1px solid grey;
    border-radius: 50%;
}
.info{
    color:rgb(11, 17, 15);
}
.info_form{
    position: absolute;
}
.info_header{
    font-size: 30px;
    top:-60px;
    color:black;
    position: absolute;
}
.account_container{
    height: 100%;
}
.form-group, .form-row{
    font-size:15px;
    padding: 20px;
    padding-bottom: 0px;
    margin-top:-10px;
}
#form3{
    position: absolute;
    left:35px;
}
#form2{
    position: absolute;
    right: 0px;
    transition: margin-left .5s;
}
.account_containers{
    display: inline-block;
    border-radius: 10px;
    margin-left:10px;
    background-color: whitesmoke;
    border: 1px solid rgba(28, 24, 24, 0.794);
    height:550px;
}
#profile_container{
    width:300px;
    border-radius: 0px;
    background-color: none;
    border-radius:10px;
    position: relative;
}
#university_container{
    width:300px;
    position:relative; 
}
#info_container{
    width:440px;
    margin-top: 80px;
    margin-left: 0px;
    background-color: whitesmoke;
    position:relative;
}
#portfolio_container{
    width:1140px;
    margin-left:75px;
    margin-top:20px;
    color: black;
    text-align: left;
    background-color:aquamarine ;
    border: none;
}
</style>