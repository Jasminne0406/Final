const config = require('./routes/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const {
    studentTable,
    teacherTable,
    departmentTable,
} = require("./data");


async function login (req,res) {
    const   email = req.body.email;
    const  password = req.body.password;
    const Admin = {
        email: 'admin',
        password: 'admin',
        role: 'admin'
    }
    const user1 = await studentTable.findOne({email: req.body.email})
    const user2 = await teacherTable.findOne({email: req.body.email})
    if(email === Admin.email && password === Admin.password){
    const token = jwt.sign(Admin,config.authentication.jwtSecret);
    res
            .cookie("access_token",token,{
                httpOnly:true,
                secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({
                message: "login successfully 😊 👌",
                user: Admin,
            })
    }
    else if(user1!==null){
        // const token  = jwtSignUser(user1);
        const isValidPassword = await bcrypt.compare(req.body.password,user1.password);
        if (isValidPassword){
        const token = jwt.sign(user1,config.authentication.jwtSecret);
        res
            .cookie("access_token",token,{
                maxAge:900000,
                httpOnly:true,
                secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({
                message: "login successfully 😊 👌",
                user: user1,
            })
        }else{
            return res.status(404).send({error: 'Wrong password.'});
        }
    }else if(user2!==null){
        const isValidPassword = await bcrypt.compare(req.body.password,user2.password);
        if (isValidPassword){
        const token = jwt.sign(user1,config.authentication.jwtSecret);
        res 
            .cookie("access_token",token,{
                maxAge:900000,
                httpOnly:true,
                secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({
                message: "login successfully 😊 👌",
                user: user2,
            })
        }else{
             return res.status(404).send({error: 'Wrong password.'});
             }
        } else {
            return res.status(404).send({error: 'Your account does not exist.'});
    }
}
//Register for student

async function registerStudent (req,res){
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password,salt);
    const departmentId1 = await departmentTable.findOne({name:req.body.departmentName,year:req.body.year,group:req.body.group});
    const newStudentInfo = {
        stuId: req.body.stuId,
        name: req.body.name,
        email: req.body.email,
        password: password,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        fatherJob: req.body.fatherJob,
        motherJob: req.body.motherJob,
        image: req.body.image,
        parentPhone: req.body.parentPhone,
        departmentId: departmentId1.departmentId,
        role: "student"
    }   
        
        studentTable.insertOne(newStudentInfo);
        console.log("success");
        res
        .status(200)
        .json({
            message: "student added successfully 😊 👌",
        })
    }


async function registerTeacher (req, res){
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password,salt);
    const newTeacher = {
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
        startWork: req.body.startWork,
        role: "teacher"
    }   
        teacherTable.insertOne(newTeacher, {
            hooks:{
                beforeCreate: hashPassword,
                beforeUpdate: hashPassword,
                beforeSave: hashPassword
            }
        });
        console.log("success");
        res.redirect('/admin/getTeachers');
}
module.exports={
    login,
    registerStudent,
    registerTeacher
}