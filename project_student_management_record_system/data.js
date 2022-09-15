const mongoose = require("mongoose");
const db = mongoose.connection;
const studentTable  = db.collection("students")
const teacherTable = db.collection("teachers")
const courseTable = db.collection("courses");
const departmentTable = db.collection("departments");
const fileAdminTable = db.collection("adminfiles");
const fileTeacherTable = db.collection("teacherfiles");
const fileStudentTable = db.collection("studentfiles");
const ImageTable = db.collection("imagetables")
// const ROLE = {
//     ADMIN: 'admin',
//     STUDENT: 'student',
//     TEACHER: 'teacher'
// }
// const teacherSchema = new mongoose.Schema({
//     teacherId: {type: String, unique: true},
//     name: String,
//     password: String,
//     email: String,
//     phone: String,
//     dob: String,
//     image: String,
//     start_work: String,
//     address: String,
//     fatherName: String,
//     motherName: String
// });
// const teacherTable = mongoose.model("teachers",teacherSchema);

// const student = {
    // stuId: 'e20181313',
    // name: 'prakmlis',
    // email: 'prakmlis@gmail.com',
    // password: '123456789',
    // dob: '04-06-2000',
    // phone: '011419209',
    // address: 'phnom penh',
    // department: 'GIC',
    // fatherNmae: 'prak',
    // motherName: 'nacry',
    // fatherJob: 'teacher',
    // motherJOb: 'teacher',
    // image: 'url:/localhost',
    // parentPhone: '012957507'
// };
// const course = {
//     courseId: 'c001',
//     name: 'Internet programming',
//     teacherId: 't001',
//     departmentId: 'd001'
// };

// const file = {
//     fileId: 't001',
//     name: 'Birth certificant',
//     storeDate: '23-8-2022',
//     category: 'Application'
// };

// const department = {
//     departmentId: 'd001',
//     name: 'GIC',
//     year: 3,
//     group: 35
// }

// const teacher = new teacherTable({
    // teacherId: 't001',
    // name: 'Pisey',
    // email: 'Pisey',
    // password: '123456789',
    // phone: '123',
    // dob: '23-09-1800',
    // image: 'url:/localhost',
    // startWork: '23-01-2000',
    // address: 'Phnom Penh',
    // fatherName: 'Pisey',
    // motherName: 'Pisey'
// })
// const studentSchema = new mongoose.Schema({
//     stuId: {type: String, unique: true},
//     name: String,
//     email: String,
//     password: String,
//     dob: String,
//     phone: String,
//     address: String,
//     departmentId: String,
//     fatherName: String,
//     fatherJob: String,
//     motherName: String,
//     motherJob: String,
//     image: String,
//     parentPhone: String,
// });
// const teacherSchema = new mongoose.Schema({
    // teacherId: {type: String, unique: true},
    // name: String,
    // email: String,
    // phone: String,
    // dob: String,
    // image: String,
    // start_work: String,
    // address: String,
    // fatherName: String,
    // motherName: String
// });
// const departmentSchema = new mongoose.Schema({
//     departmentId: {type: String, unique: true},
//     name: String,
//     year: Number,
//     group: Number
// })
// const courseSchema = new mongoose.Schema({
//     courseId: {type: String, unique: true},
//     name: String,
//     teacherId: String,
//     departmentId: String
// })

// const fileAdminSchema = new mongoose.Schema({
//     fileId: String,
//     name: {type: String, unique: true},
//     category: String,
// }, {timestamps: ({ createdAt: 'created_at'})})

// const fileTeacherSchema = new mongoose.Schema({
//     fileId: String,
//     name: {type: String, unique: true},
//     storeDate: { type: Date, default: Date.now},
//     category: String
// })
// const fileStudentSchema = new mongoose.Schema({
//     fileId: String,
//     name: {type: String, unique: true},
//     storeDate: { type: Date, default: Date.now},
//     category: String
// })
// const fileAdminTable = mongoose.model("adminFiles",fileAdminSchema);
// const fileTeacherTable = mongoose.model("teacherFiles",fileTeacherSchema);
// const fileStudentTable = mongoose.model("studentFiles",fileStudentSchema);
// const studentSchema = new mongoose.Schema({
//     fileId:{
//         type: String,
//         require: true
//     },
//     name: {
//         type: String,
//         require: true
//     },
//     category: {
//         type: String,
//         require: true
//     },
//     file: {
//         data: Buffer,
//         contentType:String
//     },
//     storeAt: { type: Date, default: Date.now}
// })

// const teacherSchema = new mongoose.Schema({
//     fileId:{
//         type: String,
//         require: true
//     },
//     name: {
//         type: String,
//         require: true
//     },
//     category: {
//         type: String,
//         require: true
//     },
//     file: {
//         data: Buffer,
//         contentType:String
//     },
//     storeAt: { type: Date, default: Date.now}
// })

// const adminSchema = new mongoose.Schema({
//     fileId:{
//         type: String,
//         require: true
//     },
//     name: {
//         type: String,
//         require: true
//     },
//     category: {
//         type: String,
//         require: true
//     },
//     file: {
//         data: Buffer,
//         contentType:String
//     },
//     storeAt: { type: Date, default: Date.now}
// })

// const studentFiles = mongoose.model('studentFile',studentSchema)
// const teacherFiles = mongoose.model('teacherFile',teacherSchema)
// const adminFiles = mongoose.model('adminFile',adminSchema)

module.exports = {
    studentTable,
    teacherTable,
    courseTable,
    departmentTable,
    fileAdminTable,
    fileTeacherTable,
    fileStudentTable,
    ImageTable,
}
