
<template>
     <div id="main">
        <div class="header">
            <p id="navBar_title">Students</p>
        </div>  
        <div id="total_count"><b>Total:   {{total}}</b></div>
        <input v-model="searchTxt" type="text" class="form-control" name="x" id="formInputSearch" placeholder="Search student..." @keyup="search">
        <img @click="onSearch" id="search_icon" src="../assets/search.png">      
        <!-- <span class="input-group-btn"></span> -->
        <div class="button_add">
                <!-- Button trigger modal -->
                <button id="button_add" type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                Add a student
                </button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content" style>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Student</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <img id="previewImage">
                        <div id="profile">
                            <label for="fileInput">
                                <img id="profile-camera" src="../assets/211634_camera_icon.png">
                            </label>
                            <input type="file" @click="onSelect" id="fileInput" name="file">
                        </div>
                        <div class="form-group row" id="form-name">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                            <input type="text"  v-model="name" class="form-control" id="inputPassword" placeholder="Full Name" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-id">
                            <label for="inputPassword" class="col-sm-2 col-form-label">ID</label>
                            <div class="col-sm-10">
                            <input type="text"  v-model="id" class="form-control" id="inputPassword" placeholder="ID" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-dob">
                            <label for="inputPassword" class="col-sm-2 col-form-label">DOB</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="dob" id="inputPassword" placeholder="Date of Birth" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-father2">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Father</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="fatherName" id="inputPassword" placeholder="Father's Name" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-mother">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Mother</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="motherName" id="inputPassword" placeholder="Mother's Name" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-MotherJob">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Job</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="motherJob" id="inputPassword" placeholder="Mother's Job" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-fatherJob">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Job</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="fatherJob" id="inputPassword" placeholder="Father's Job" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-parentPhone">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="parentPhone" id="inputPassword" placeholder="Parent Phone" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-address">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="address" id="inputPassword" placeholder="Address" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-email">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control"  v-model="email" id="inputPassword" placeholder="Email" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-password">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                            <input type="password" class="form-control"  v-model="password" id="inputPassword" placeholder="Password" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-group row" id="form-phone2">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control"  v-model="phone" id="inputPassword" placeholder="Phone" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                        <div class="form-row align-items-center" id="form-department2">
                            <div class="col-auto my-1">
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Departments</label>
                            <input type="text" class="form-control"  v-model="departmentName" id="inputPassword" placeholder="Department" required/>
                            <div class="error_message" v-html="error"></div>
                           </div>
                        </div>
                        <div class="form-group row" id="form-year">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Year</label>
                            <div class="col-sm-10">
                            <input type="number" v-model="year" class="form-control" id="inputCourse" placeholder="0" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>៌ 
                        </div>
                        <div class="form-group row" id="form-group">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Group</label>
                            <div class="col-sm-10">
                            <input type="number" v-model="group" class="form-control" id="inputCourse" placeholder="0" required/>
                            <div class="error_message" v-html="error"></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" @click="register"  id="save" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <div class="file_wrappers" id="getStudents">
                <table class="table table-hover" id="file_wrapper">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Year</th>
                            <th scope="col">Group</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                <tbody v-for="(user,i) in getUser" v-bind:key="i" id="getForm">
                        <td >{{user.stuId}}</td>
                        <td >{{user.name}}</td>
                        <td v-for="department in user.departmentDetails" :key="department.departmentId">{{department.name}}</td>
                        <td v-for="department in user.departmentDetails" :key="department.departmentId">{{department.year}}</td>
                        <td v-for="department in user.departmentDetails" :key="department.departmentId">{{department.group}}</td>
                        <td >{{user.phone}}</td>
                        <td >{{user.email}}</td>
                        <td>
                            <router-link to="/adminUpdateStudent">
                                <button type="button" class="btn btn-warning" @click="onEdit(user)" id="file_edit">Edit</button>
                            </router-link>
                            <button type="button" class="btn btn-danger" @click="onDelete(user)" id="file_delete">Delete</button>
                            <img id="eye_icon" src="../assets/view_icon.png">
                        </td>
                </tbody> 
            </table>
        </div> 
</div>
<sidebar_navbar_admin></sidebar_navbar_admin>
 </template>


<script>
import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';
import axios from 'axios';
export default {
    name: "adminPage",
    components: {
    sidebar_navbar_admin,
},
    data(){
        return  {
            id:'',
            name:'',
            email:'',
            dob:'',
            address:'',
            motherName:'',
            fatherName:'',
            fatherJob: '',
            motherJob:'',
            parentPhone:'',
            password:'',
            phone:'',
            departmentName:'',
            year:null,
            group:null,
            error:null,
            file:null,
            searchTxt: null,
            getUser: null,
            total: '',
        }
    },
    mounted(){
        this.studentList();
    },
    methods: {
        studentList(){
            axios.get('http://localhost:3000/getStudents',{withCredentials:true}).then((response)=>{
            this.getUser = response.data;
            console.log(this.getUser);
            this.total = response.data.length
            })
        },
        onSelect(){
            const fileSelector = document.getElementById('fileInput');
            const previewImage = document.getElementById('previewImage');
            const profile = document.getElementById("profile");
            fileSelector.addEventListener('change',(event) =>{
                const fileList = event.target.files;
                const file = event.target.files[0];
                    previewImage.style.display="block";
                    profile.style.display="none";
                    previewImage.src = URL.createObjectURL(file)
                    const formData = new FormData();
                    formData.append('profile',fileList[0]);
                    formData.append('name',fileList[0].name);
                    formData.append('fileId',"F-"+this.id);
                        axios.post('http://localhost:3000/upload',formData,{headers: {
                     'Content-Type': 'multipart/form-data',
                 }})
                 .then(res => {console.log(res);}) 
                });
        },
       register(){
            if(!this.name || !this.id || !this.email || !this.dob || !this.phone || !this.address|| 
            !this.motherName || !this.motherJob || !this.fatherName || !this.fatherJob || !this.parentPhone
            || !this.phone || !this.departmentName || !this.year || !this.group){
                this.error = 'Require Information!'
            }
            const url="http://localhost:3000/register/student";
            axios.post(url,{
                name: this.name,password: this.password, stuId: this.id, email: this.email, dob: this.dob, address: this.address, 
                motherName: this.motherName, motherJob: this.motherJob ,fatherName: this.fatherName, fatherJob: this.fatherJob, 
                parentPhone: this.parentPhone,phone: this.phone, departmentName: this.departmentName, year: this.year, group: this.group,
                image: "F-"+this.id,
                },{withCredentials:true}).then(response => {
                        alert("New Student Added successfully!");
                        this.$router.push('/adminStudentPage')
                        console.log(response);
                    }).catch((error)=>{
                        console.log(error)
                })
        },
        onEdit(user){
           window.localStorage.setItem('editStudent',JSON.stringify(user));
        },
        onDelete(user){
            const url="http://localhost:3000/admin/deleteStudent/"+user.stuId;
            axios.delete(url,{withCredentials:true}).then(response => {
                alert("Delete Successfully!");
                console.log(response);
            }).catch((error)=>{
                console.log(error)
            })
        },
        onSearch(){
            const url = "http://localhost:3000/getStudentById/"+this.searchTxt;
            if(this.searchTxt!=null){
            axios.get(url,{withCredentials:true}).then(response =>{
                const array = [];
                array.push(response.data);
                this.getUser = array;
                // console.log(array)
                this.total = array.length;
            }).catch((error)=>{
                console.log(error)
            })
            }else{
                this.studentList();
            }
        }
    }
}
</script>
<style>
#total_count{
    position: absolute;
    color: black;
    top: 70px;
    left:120px;
}
#search_icon:hover{
    width:17px;
    height:17px;
}
#getStudents{
    margin-top:50px;
}
#formInputSearch{
    position: absolute;
    text-align: left;
    width: 250px;
    right:140px;
    top:63px;
    border-radius: 10px;
}
#getForm:hover{
    background-color:rgba(0, 0, 0, 0.148);
    cursor: pointer;
    transition: margin-top 0.5s;
}
.studentLists{
    background-color: white;
}
#fileInput{
    position: absolute;
    display: none;
}
#profile-camera{
    cursor: pointer;
    width: 50px;
    height:50px;
    position: absolute;
    left:80px;
    top:90px;
}
#previewImage{
    position: absolute;
    width: 130px;
    height:130px;
    right:110px;
    top:10px;
    border-radius: 50%;
    border: 1px solid grey;
    opacity: 0.8;
    display:none;
    background-size:cover;
}
#profile{
    position: absolute;
    width: 130px;
    height:130px;
    right:110px;
    top:10px;
    border-radius: 50%;
    border: 1px solid grey;
    background-image:url("../assets/profile.png");
    opacity: 0.8;
    background-size:cover;
}
#form-profile{
    position: absolute;
    height: 130px;
    width: -109px;
    border: 1px solid grey;
}
#form-fatherJob{
    top: 267px;
}
#form-phone2{
    top: 330px;
}
#form-department2{
    top: 400px;
    position: absolute;
    right: 180px;
    width: 23%;
}
#form-year{
    top: 400px;
    position: absolute;
    right:68px;
    width: 170px;
}
#form-group{
    top: 400px;
    position: absolute;
    right: -10px;
    width: 160px;
}
#photo{
    height: 100%;
    width: 100%;
}
#file{
    display: none;
}
#uploadBtn{
    height:40px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(0,0,0,0.7);
    color: wheat;
    line-height: 30px;
    font-size:15px;
}
</style>
