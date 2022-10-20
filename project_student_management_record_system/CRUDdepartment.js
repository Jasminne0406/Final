const {
    studentTable,
    teacherTable,
    departmentTable,
} = require("./data");

async function createDepartment(req,res){
    const newDepartment = {
        departmentId: req.body.departmentId,
        name: req.body.name,
        year: req.body.year,
        group: req.body.group
    }
        departmentTable.insertOne(newDepartment);
        console.log("success");
        res.redirect('/admin/getDepartments');
}

async function getDepartments(req,res){
    departmentTable.find({}).toArray(function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });  
}

async function updateDepartment(req,res){           
    const updateDepartment = {
        departmentId: req.body.departmentId,
        name: req.body.name,
        year: req.body.year,
        group: req.body.group
    };
    departmentTable.findOne({departmentId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            departmentTable.deleteOne({departmentId: req.params.id});
            departmentTable.insertOne(updateDepartment);
            res.send("update Successfully!"); 
        }
    });
}

async function deleteDepartment(req,res){
    departmentTable.findOne({departmentId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            departmentTable.deleteOne({departmentId: req.params.id});
            res.send("Delete Successfully!");
        }
    });
}
module.exports={
    createDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment
}