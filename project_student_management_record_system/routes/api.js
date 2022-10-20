const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const url = "mongodb://localhost:27017/Project";
const multer = require("multer");
const {
    fileStudentTable,
} = require("../data");

mongoose.connect(url,()=>{
    console.log("connected");
})

router.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());


const { createDepartment,
        getDepartments,
        updateDepartment,
        deleteDepartment
    }
= require("../CRUDdepartment");
const { getTeachers,
        getTeacherById,
        updateTeacher,
        deleteTeacher 
    }
= require("../CRUDteacher");

const { login , 
        registerStudent, 
        registerTeacher,
             } 
= require("../authenticationController");

const { getStudents,
        getStudentById,
        updateStudent,
        deleteStudent 
    }
= require("../CRUDstudent");

const {
        authValidation,
        authToken,
        authRole
    }
= require("../authentication");

router.post('/login', authValidation, login);
router.post('/register/student',authToken,authRole('admin'), registerStudent);
router.post('/register/teacher',authToken,authRole('admin'), registerTeacher);
router.post('/createDepartment',authToken,authRole('admin'), createDepartment)
router.get('/getStudents',authToken,authRole('admin'), getStudents)
router.get('/getStudentById/:id',authToken,getStudentById);
router.get('/getTeachers',authToken, authRole('admin'),getTeachers);
router.get('/getTeacher/:id',getTeacherById);
router.get('/getDepartments',authToken,authRole('admin'), getDepartments)
router.put('/updateStudent/:id',authToken, updateStudent);
router.put('/updateTeacher/:id',authToken, updateTeacher);
router.put('/updateDepartment/:id',authToken,authRole('admin'),updateDepartment);
router.delete('/admin/deleteStudent/:id',authToken,authRole('admin'), deleteStudent);
router.delete('/admin/deleteTeacher/:id',authToken,authRole('admin'), deleteTeacher);
router.delete('/admin/deleteDeparment/:id',authToken,authRole('admin'), deleteDepartment);
const path = require('path')
//////////////////////////////////////////////////////////
const Storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "Images/")
    },
    filename: (req,file,cb)=>{
        console.log(file)
        cb(null,file.originalname+"_"+ Date.now()+'_.jpg')
    }
})
const upload = multer({storage: Storage})

router.post('/upload',upload.single('profile'),(req, res) => {
        console.log(req.file.fieldname)
        const newImage = {
            fileId: req.body.fileId,
            name: req.body.name,
            image:{
                fieldname:req.file.fieldname,
                data:req.file,
                contentType: 'image/png'
            }
        }
        fileStudentTable.insertOne(newImage)
        .then(()=>res.send('successfully')).catch(err=>console.log(err));
        console.log("success")
});
/////////////////////////////////////////////////////////
router.post('/getProfile',async (req,res)=>{
    fileStudentTable.findOne({fileId: req.body.Id},function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        };
})})
/////////////////////////////////////////////////////////
router.post('/admin/createCourse', async (req,res)=>{
    const teacherId1 = await teacherTable.find({teacherId:req.body.teacherId});
    const departmentId1 = await departmentTable.findOne({name:req.body.departmentName,year:req.body.year,group:req.body.group});
    const newCourse = {
        courseId: req.body.courseId,
        name: req.body.name,
        teacherId: teacherId1.teacherId,
        departmentId: departmentId1.departmentId,
    }
    courseTable.insertOne(newCourse);
    console.log("success");
})
router.get('/admin/getCourses', (req,res)=>{
    courseTable.find({}).toArray(function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });  
});
router.put('/updateCourse/:id', async (req,res) =>{
    const updateCourse = {
        courseId: req.body.courseId,
        name: req.body.name,
        teacherId: teacherId1.teacherId,
        departmentId: departmentId1.departmentId,
    };
    courseTable.findOne({courseId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            courseTable.deleteOne({courseId: req.params.id});
            courseTable.insertOne(updateCourse);
            res.send("update Successfully!");
        }
    });
});
router.delete('/admin/deleteCourse/:id', (req,res) => {
    courseTable.findOne({courseId: req.params.id},function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            courseTable.deleteOne({courseId: req.params.id});
            res.send("Delete Successfully!");
        }
    });
});

router.post('/admin/createFile/:id', async (req,res)=>{
    const now = new Date();
    const date1 = await date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
    // const id =  string(req.params.id).substr(1,req.params.id.length);
    const newFile = {
        fileId: req.params.id,
        name: req.body.name,
        category: req.body.category,
        storeDate: date1
    }
    fileAdminTable.insertOne(newFile);
    res.send("Add successfully!");
})
router.post('/student/createFile/:id', async (req,res)=>{
    const now = new Date();
    const date1 = await date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
    // const id = await string(req.params.id).substr(1,req.params.id.length);
    const newFile = {
        fileId: req.params.id,
        name: req.body.name,
        category: req.body.category,
        storeDate: date1
    }
    fileStudentTable.insertOne(newFile);
    res.send("Add successfully!");
});
router.post('/teacher/createFile/:id', async (req,res)=>{
    const now = new Date();
    const date1 = await date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
    // const id = req.params.id;
    const newFile = {
        fileId: req.params.id,
        name: req.body.name,
        category: req.body.category,
        storeDate: date1
    }
    fileTeacherTable.insertOne(newFile);
    res.send("Add successfully!");
});
router.get('/student/getFile/:id', (req,res) => {
    fileStudentTable.find({fileId:req.params.id}).toArray(function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });  
});
router.get('/teacher/getFile/:id', (req,res) => {
    fileTeacherTable.find({fileId:req.params.id}).toArray(function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });  
});
router.get('/admin/getFile/:id', (req,res) => {
    fileAdminTable.find({fileId:req.params.id}).toArray(function(err,data) {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });  
}) ;
router.put('/admin/updateFile/:id', async (req,res)=>{
    const now = new Date();
    const date1 = await date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
    const id = req.params.id.replace(':',"")
    const newFile = {
        fileId: id,
        name: req.body.newName,
        category: req.body.category,
        storeDate: date1
    }
    fileAdminTable.findOne({fileId:id, name: req.body.oldName},function(err,data){
        if(err){
            console.log(err);
        }
        else{
            fileAdminTable.deleteOne({fileId:id, name: req.body.oldName});
            fileAdminTable.insertOne(newFile);
            res.send("update Successfully!");
        }
    });
});
router.put('/student/updateFile/:id', async (req,res)=>{
    const now = new Date();
    const date1 = await date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
    const id = req.params.id.replace(':',"")
    const newFile = {
        fileId: id,
        name: req.body.newName,
        category: req.body.category,
        storeDate: date1
    }
    fileStudentTable.findOne({fileId:id, name: req.body.oldName},function(err,data){
        if(err){
            console.log(err);
        }
        else{
            fileStudentTable.deleteOne({fileId:id, name: req.body.oldName});
            fileStudentTable.insertOne(newFile);
            res.send("update Successfully!");
        }
    });
});
router.put('/teacher/updateFile/:id', async (req,res)=>{
    const now = new Date();
    const date1 = await date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
    const id = req.params.id.replace(':',"")
    const newFile = {
        fileId: id,
        name: req.body.newName,
        category: req.body.category,
        storeDate: date1
    }
    fileTeacherTable.findOne({fileId:id, name: req.body.oldName},function(err,data){
        if(err){
            console.log(err);
        }
        else{
            fileTeacherTable.deleteOne({fileId:id, name: req.body.oldName});
            fileTeacherTable.insertOne(newFile);
            res.send("update Successfully!");
        }
    });
});
// router.get('/teacher/getFiles/:id', async(req,res)=>{
//     const id = req.params.id.replace(':',"");
//     fileTeacherTable.find({fileId:id, category: req.body.category}).toArray(function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.json(data);
//         }
//     });
// });
// router.get('/student/getFiles/:id', async(req,res)=>{
//     const id = req.params.id.replace(':',"");
//     fileStudentTable.find({fileId:id, category: req.body.category}).toArray(function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.json(data);
//         }
//     });
// });
// router.get('/admin/getFiles/:id', async(req,res)=>{
//     const id = req.params.id.replace(':',"");
//     fileAdminTable.find({category: req.body.category}).toArray(function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.json(data);
//         }
//     });
// });
module.exports = router;