<template>
     <div id="main">
        <div class="header">
            <p id="navBar_title">Documents</p>
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
                        <input type="text" class="form-control" name="x" id="formInputSearch" placeholder="Search file...">
                        <img id="search_icon" src="../assets/search.png">
                        <span class="input-group-btn"></span>
                    </div>
                </div>
            </div>
        </div>
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
                        <td>Mark</td>
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
    #search_icon{
        position: absolute;
        right:150px;
        top:77px;
        width: 20px;
        cursor: pointer;
        height: 20px;
    }
    #formInputSearch{
        width:500px;
        margin-left: 70px;
        margin-top:5px;
        border-radius: 20px;
        display: inline-block;
    }
    #search_container{
        margin-left: 250px;
    }
    #button_search{
        border:1px solid rgba(105, 91, 91, 0.577);
        width: 50px;
        height: 20px;
        margin-left: 30px;
        background-color:rgba(169, 169, 169, 0.572);
    }
    
</style>
