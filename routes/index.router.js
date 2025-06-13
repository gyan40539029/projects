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
    routes.get('/getCollege/:_id', secquirty.collegeCheckSecquirty, collegeController.getCollegebyId)
    routes.get('/getColleges', collegeController.getColleges)
    routes.patch('/updateCollege/:_id', secquirty.collegeCheckSecquirty, collegeController.updateCollegeById)
    routes.patch('/updateColleges', collegeController.updateColleges)
    routes.delete('/deleteCollege/:_id', secquirty.collegeCheckSecquirty, collegeController.deleteCollegeById)
    routes.delete('/deleteColleges', collegeController.deleteColleges)






    // courses Routes

    routes.post('/createCourse', secquirty.courseCheckSecquirtForBody, courseController.createCourse)
    routes.get('/getCourse/:_id', secquirty.courseCheckSecquirty, courseController.getCourseById)
    routes.get('/getCourses', courseController.getCourses)
    routes.patch('/updateCourse/:_id', secquirty.courseCheckSecquirty, courseController.updateCourseById)
    routes.patch('/updateCourses', secquirty.courseCheckSecquirty, courseController.updateCourses)
    routes.delete('/deleteCourse/:_id', secquirty.courseCheckSecquirty, courseController.deleteCourseById)
    routes.delete('/deleteCourses', courseController.deleteCourses)










    // books Routes


    routes.post('/createBook', secquirty.bookCheckSecquirtForBody, bookController.createBook)
    routes.get('/getBook/:_id', secquirty.bookCheckSecquirty, bookController.getBookById)
    routes.get('/getBooks', bookController.getBooks)
    routes.patch('/updateBook/:_id', secquirty.bookCheckSecquirty, bookController.updateBookById)
    routes.patch('/updateBooks', bookController.updateBooks)
    routes.delete('/deleteBook/:_id', secquirty.bookCheckSecquirty, bookController.deleteBookById)
    routes.delete('/deleteBooks', bookController.deleteBooks)






    // classes Routes

    routes.post('/createClass', secquirty.classCheckSecquirtForBody, classController.createClass)
    routes.get('/getClass/:_id', secquirty.classCheckSecquirty, classController.getClassById)
    routes.get('/getClasses', classController.getClasses)
    routes.patch('/updateClass/:_id', secquirty.classCheckSecquirty, classController.updateClassById)
    routes.patch('/updateClasses', classController.updateClasses)
    routes.delete('/deleteClass/:_id', secquirty.classCheckSecquirty, classController.deleteClassById)
    routes.delete('/deleteClasses', classController.deleteClasses)






    // students Routes


    routes.post('/createStudent', secquirty.studentCheckSecquirtForBody, studentController.createStudent)
    routes.get('/getStudent/:_id', secquirty.studentCheckSecquirty, studentController.getStudentById)
    routes.get('/getStudents', studentController.getStudents)
    routes.patch('/updateStudent/:_id', secquirty.studentCheckSecquirty, studentController.updateStudentById)
    routes.patch('/updateStudents', studentController.updateStudents)
    routes.delete('/deleteStudent/:_id', secquirty.studentCheckSecquirty, studentController.deleteStudentById)
    routes.delete('/deleteStudents', studentController.deleteStudents)







    // trainers Routes
    routes.post('/createTrainer', secquirty.trainerCheckSecquirtForBody, trainerController.createTrainer)
    routes.get('/getTrainer/:_id', secquirty.trainerCheckSecquirty, trainerController.getTrainerById)
    routes.get('/getTrainers', trainerController.getTrainers)
    routes.patch('/updateTrainer/:_id', secquirty.trainerCheckSecquirty, trainerController.updateTrainerById)
    routes.patch('/updateTrainers', trainerController.updateTrainers)
    routes.delete('/deleteTrainer/:_id', secquirty.trainerCheckSecquirty, trainerController.deleteTrainerById)
    routes.delete('/deleteTrainers', trainerController.deleteTrainers)






    // users Routes

    routes.post('/createUser', secquirty.userCheckSecquirtForBody, userController.createUser)
    routes.get('/getUser/:_id', secquirty.userCheckSecquirty, userController.getUserById)
    routes.get('/getUsers', userController.getUsers)
    routes.patch('/updateUser/:_id', secquirty.accountCheckSecquirty, userController.updateUserById)
    routes.patch('/updateUsers', userController.updateUsers)
    routes.delete('/deleteUser/:_id', secquirty.userCheckSecquirty, userController.deleteUserById)
    routes.delete('/deleteUsers', userController.deleteUsers)







    // account Routes

    routes.post('/createAccount', secquirty.accountCheckSecquirtForBody, accountController.createAccount)
    routes.get('/getAccount/:_id', secquirty.accountCheckSecquirty, accountController.getAccountById)
    routes.get('/getAccounts', accountController.getAccounts)
    routes.patch('/updateAccount/:_id', secquirty.accountCheckSecquirty, accountController.updateAccountById)
    routes.patch('/updateAccounts', accountController.updateAccounts)
    routes.delete('/deleteAccount/:_id', secquirty.accountCheckSecquirty, accountController.deleteAccountById)
    routes.delete('/deleteAccounts', accountController.deleteAccounts)







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

