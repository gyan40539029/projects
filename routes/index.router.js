///////////////////////////// ControllerImports for routes ////////////////////////////////////////////////////////////

const express = require('express')
const collegeController = require('../controller/college.controller')
const courseController = require('./../controller/courses.controller')
const classController = require('./../controller/classes.controller')
const bookController = require('./../controller/books.controller')
const studentController = require('./../controller/students.controller')
const trainerController = require('./../controller/trainers.controller')
const accountController = require('./../controller/accounts.controller')
const userController = require('./../controller/users.controller')


//////////////////////////////////////middlewere import for secquirty ///////////////////////////////////////////////////////////




const secquirty = require('./../middlewere/checkGuard.middlewere')






//////////////////////////////////////------Routes------////////////////////////////////////////////////////////////////////





module.exports = (() => {
    const routes = express.Router()


    // college Routes  
    routes.post('/createCollege', secquirty.collegeCheckSecquirtForBody, collegeController.createCollege)
    routes.get('/getCollege/:collegeId', secquirty.collegeCheckSecquirty, collegeController.getCollegebyId)
    routes.patch('/updateCollege/:collegeId', secquirty.collegeCheckSecquirty, collegeController.updateCollegeById)




    // courses Routes

    routes.post('/createCourse',secquirty.courseCheckSecquirtForBody, courseController.createCourse)
    routes.get('/getCourse/:courseId',secquirty.courseCheckSecquirty, courseController.getCourseById)
    routes.patch('/updateCourse/:courseId',secquirty.courseCheckSecquirty, courseController.updateCourseById)









    // books Routes


    routes.post('/createBook',secquirty.bookCheckSecquirtForBody, bookController.createBook)
    routes.get('/getBook/:bookId',secquirty.bookCheckSecquirty, bookController.getBookById)
    routes.patch('/updateBook/:bookId',secquirty.bookCheckSecquirty, bookController.updateBookById)






    // classes Routes

    routes.post('/createClass',secquirty.classCheckSecquirtForBody, classController.createClass)
    routes.get('/getClass/:classId',secquirty.classCheckSecquirty, classController.getClassById)
    routes.patch('/updateClass/:classId',secquirty.classCheckSecquirty, classController.updateClassById)






    // students Routes


    routes.post('/createStudent',secquirty.studentCheckSecquirtForBody, studentController.createStudent)
    routes.get('/getStudent/:studentId',secquirty.studentCheckSecquirty, studentController.getStudentById)
    routes.patch('/updateStudent/:studentId',secquirty.studentCheckSecquirty, studentController.updateStudentById)






    // trainers Routes
    routes.post('/createTrainer',secquirty.trainerCheckSecquirtForBody, trainerController.createTrainer)
    routes.get('/getTrainer/:trainerId',secquirty.trainerCheckSecquirty, trainerController.getTrainerById)
    routes.patch('/updateTrainer/:trainerId',secquirty.trainerCheckSecquirty, trainerController.updateTrainerById)





    // users Routes

    routes.post('/createUser',secquirty.userCheckSecquirtForBody, userController.createUser)
    routes.get('/getUser/:userId',secquirty.userCheckSecquirty, userController.getUserById)
    routes.patch('/updateUser/:userId',secquirty.accountCheckSecquirty, userController.updateUserById)






    // account Routes

    routes.post('/createAccount',secquirty.accountCheckSecquirtForBody, accountController.createAccount)
    routes.get('/getAccount/:accountId',secquirty.accountCheckSecquirty, accountController.getAccountById)
    routes.patch('/updateAccount/:accountId',secquirty.accountCheckSecquirty, accountController.updateAccountById)







    return routes

})()




// University Management System

// 1. Manage Collages  [Create | Read | Update | Delete | Import | Export]
// 2. Manage Students [Create | Read | Update | Delete | Import | Export]
// 3. Accounts Transactions [Create | Read | Update | Delete | Import | Export]
// 4. Books / Library [Create | Read | Update | Delete | Import | Export]
// 5. Classes / Schedules [Create | Read | Update | Delete | Import | Export]
// 6. Manage Trainers / Professors [Create | Read | Update | Delete | Import | Export]
// 7. Manage Courses [Create | Read | Update | Delete | Import | Export]
// 8. Application Settings
// 9. Role Based Access Controls (RBAC)
// 10. Users Management [Create | Read | Update | Delete | Import | Export]




//  Create POST
//  Read   GET
//  Update  PATCH
//  Delete   DELETE
//  Import  PUT
//  Export  GET | POST

