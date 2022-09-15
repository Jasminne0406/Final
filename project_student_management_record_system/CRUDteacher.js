const {
    teacherTable,
} = require("./data");

async function getTeachers(req,res){
    teacherTable.find({}).toArray(function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
}

async function getTeacherById(req,res){
    teacherTable.findOne({teacherId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
}

async function updateTeacher(req,res){
    const updateTeacher = {
        teacherId: req.body.teacherId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        image: req.body.image,
        startWork: req.body.startWork
    };
    teacherTable.findOne({teacherId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            teacherTable.deleteOne({teacherId: req.params.id});
            teacherTable.insertOne(updateTeacher);
            res.send("update Successfully!");
        }
    });
}

async function deleteTeacher(req,res){
    teacherTable.findOne({teacherId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            teacherTable.deleteOne({teacherId: req.params.id});
            res.send("Delete Successfully!");
        }
    });
}

module.exports = {
    getTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}