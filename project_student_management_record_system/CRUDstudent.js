

const {
    studentTable,
} = require("./data");

async function getStudents (req,res){
    studentTable.aggregate([
        { $lookup:
           {
             from: 'departments',
             localField: 'departmentId',
             foreignField: 'departmentId',
             as: 'departmentDetails'
           }
         }
        ]).toArray(function(err, data) {
        if (err) throw err;
        res.json(data);
      });
}
async function getStudentById (req,res){
    studentTable.aggregate([
        { $lookup:
           {
             from: 'departments',
             localField: 'departmentId',
             foreignField: 'departmentId',
             as: 'departmentDetails'
           }
         }
        ]).toArray(function(err, data) {
        if (err) throw err;
        else {
            for(var i=0; i<data.length ; i++){
                if(data[i].stuId===req.params.id){
                    res.json(data[i]);
                    console.log(data[i])
                }
            }
        }
      });
}

async function updateStudent (req,res){
    const updateStudent = {
        stuId: req.body.stuId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
        department: req.body.department,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        fatherJob: req.body.fatherJob,
        motherJob: req.body.motherJob,
        image: req.body.image,
        parentPhone: req.body.parentPhone
    };
    studentTable.findOne({stuId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            studentTable.deleteOne({stuId: req.params.id});
            studentTable.insertOne(updateStudent);
            res.send("update Successfully!");
        }
    });
}
async function deleteStudent(req,res){
    studentTable.findOne({stuId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            studentTable.deleteOne({stuId: req.params.id});
            res.send("Delete Successfully!");
        }
    });
}
module.exports={
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}