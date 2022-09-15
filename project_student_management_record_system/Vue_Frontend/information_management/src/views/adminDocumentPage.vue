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
         <div class="button_add">
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
    <sidebar_navbar_admin></sidebar_navbar_admin>
</template>

<script>
import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';
export default {
    name: "adminPage",
    components: {
        sidebar_navbar_admin,
    },
};
</script>
