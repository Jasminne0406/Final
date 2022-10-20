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
                                <input class="form-control" id="InputName">
                            </div>
                            <div class="form-group">
                                <label for="InputEmail">Email</label>
                                <input class="form-control" id="InputEmail">
                            </div>
                            <div class="form-group">
                                <label for="InputDOB">Date Of Birth</label>
                                <input class="form-control" id="InputDOB">
                            </div>
                            <div class="form-group">
                                <label for="InputPhone">Phone</label>
                                <input class="form-control" id="InputPhone">
                            </div>
                            <div class="form-group">
                                <label for="InputAddress">Address</label>
                                <input class="form-control" id="InputAddress">
                            </div>
                        </form>
                    </div>
                    <div class="info_form" id="form2">
                        <form>
                            <div class="form-group">
                                <label for="InputNameFather">Father Name</label>
                                <div class="form-control" id="InputNameFather"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputFatherOccupation">Father Occupation</label>
                                <div class="form-control" id="InputFatherOccupation"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputNameMother">Mother Name</label>
                                <div class="form-control" id="InputNameMother"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputMotherOccupation">Mother Occupation</label>
                                <input type="text" class="form-control" id="InputMotherOccupation">
                            </div>
                            <div class="form-group">
                                <label for="InputParentPhone">Parent Phone</label>
                                <div class="form-control" id="InputParentPhone"></div>
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
                                <div class="form-control" id="InputId"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputDepartment">Department</label>
                                <div class="form-control" id="InputDepartment"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputYear">Year</label>
                                <div class="form-control" id="InputYear"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputGroup">Group</label>
                                <div class="form-control" id="InputGroup"></div>
                            </div>
                            <div class="form-group">
                                <label for="InputPassword">Password</label>
                                <div class="form-control" id="InputPassword"></div>
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
                </div>
                <div class="profile_wrapper1">
                    <div class="profile_picture">
                        <img  id="profile_picture" src="../assets/Institute_of_Technology_of_Cambodia_logo.png">
                    </div>
                    <div class="profile_name" id="profile_name">Soeng Prakmlis</div>
                    <div class="profile_status" id="profile_status">student</div>
                </div>
                <div class="profile_button" id="profile_button_edit">
                    <button type="button" class="btn btn-danger" >Delete</button>
                    <button type="button" class="btn btn-warning" id="profile_button_edit">Edit</button>
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
      </div>
    </div>
    <sidebar_navbar_admin></sidebar_navbar_admin>
</template>
<script>
import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';
export default {
    name: "adminAccountPage",
    components: {
        sidebar_navbar_admin,
    },
}
</script>


