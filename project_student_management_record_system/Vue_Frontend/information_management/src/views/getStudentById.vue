<!-- <template>
    <div id="main">
        <div class="header">
            <p id="navBar_title">Students</p>
        </div>
    <div class="container" id="search_container">   
            <div class="row">   
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="input-group">
                        <input type="hidden" name="search_param" value="all" id="search_param">         
                        <input v-model="search" type="text" class="form-control" name="x" id="formInputSearch" placeholder="Search student...">
                        <img @click="getSearch" id="search_icon2" src="../assets/search.png">
                        <span class="input-group-btn"></span>
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
                <tbody v-for="(user1,index) in getUser1" v-bind:key="index">
                        <td >{{user1.stuId}}</td>
                        <td >{{user1.name}}</td>
                        <td v-for="department1 in user1.departmentDetails" :key="department1.departmentId">{{department1.name}}</td>
                        <td v-for="department1 in user1.departmentDetails" :key="department1.departmentId">{{department1.year}}</td>
                        <td v-for="department1 in user1.departmentDetails" :key="department1.departmentId">{{department1.group}}</td>
                        <td >{{user1.phone}}</td>
                        <td >{{user1.email}}</td>
                        <td>
                            <router-link to="/adminUpdateStudent">
                                <button type="button" class="btn btn-warning" @click="onEdit(user1)" id="file_edit">Edit</button>
                            </router-link>
                            <button type="button" class="btn btn-danger" @click="onDelete(user1)" id="file_delete">Delete</button>
                            <img id="eye_icon" src="../assets/view_icon.png">
                        </td>
                </tbody> 
            </table>
        </div>
    </div>
<sidebar_navbar_admin></sidebar_navbar_admin>
</template>
<script>
import axios from 'axios';
import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';
export default {
    name: "adminPage",
    components: {
        sidebar_navbar_admin,
    },
    data(){
        return{
            search : '',
            getUser1: null,
        }
    },
    methods: {
        getSearch(){
            axios.get('http://localhost:3000/getStudents',{withCredentials:true}).then((response)=>{
                const array = [];
                for (var i=0 ; i<response.data.length; i++){
                    if(response.data[i].stuId===this.search){
                        array.push(response.data[i])
                        this.getUser1 = array;
                        }
                    }
                })
            }
        }
}
</script>
<style scoped>
#search_icon2{
        position: absolute;
        top:13px;
        width: 20px;
        cursor: pointer;
        height: 20px;
        right: 20px;
}
#search_icon2:hover{
    width:17px;
    height:17px;
}
#search_container{
    margin-top:30px;
}
</style> -->
