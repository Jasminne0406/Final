import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '../../src/views/loginPage.vue';
import studentHomePage from '../../src/views/studentHomePage.vue';
import studentAccountPage from '../../src/views/studentAccountPage.vue';
import studentDocumentPage from '../../src/views/studentDocumentPage.vue';
import adminHomePage from '../../src/views/adminHomePage.vue';
// import adminAccountPage from '../../src/views/adminAccountPage.vue';
import adminStudentPage from '../../src/views/adminStudentPage.vue';
import adminTeacherPage from '../../src/views/adminTeacherPage.vue';
import adminDocumentPage from '../../src/views/adminDocumentPage.vue';
import adminUpdateStudent from '../../src/views/adminUpdateStudent.vue';
import getStudentById from '../../src/views/getStudentById';
const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: loginPage
    },
    {
        path: '/studentHomePage',
        name: 'studentHomePage',
        component: studentHomePage
    },
    {
        path: '/studentAccountPage',
        name: 'studentAccountPage',
        component: studentAccountPage
    },
    {
        path: '/studentDocumentPage',
        name: 'studentDocumentPage',
        component: studentDocumentPage
    },
    {
        path: '/adminHomePage',
        name: 'adminHomePage',
        component: adminHomePage
    },
    {
        path: '/adminUpdateStudent',
        name: 'adminUpdateStudent',
        component: adminUpdateStudent
    },
    // {
    //     path: '/adminAccountPage',
    //     name: 'adminAccountPage',
    //     component: adminAccountPage
    // },
    {
        path: '/adminDocumentPage',
        name: 'adminDocumentPage',
        component: adminDocumentPage
    },
    {
        path: '/adminStudentPage',
        name: 'adminStudentPage',
        component: adminStudentPage
    },
    {
        path: '/adminTeacherPage',
        name: 'adminTeacherPage',
        component: adminTeacherPage
    },
    {
        path: '/getStudentById',
        name: 'getStudentById',
        component: getStudentById
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router