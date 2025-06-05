
const courseHelper = require('../helpers/courses.helpers')
const createCourse = async (req, res) => {
    try {
        const course = req.body
        const courseCreate = await courseHelper.createCourse(course)
        console.log(courseCreate)
        return res.status(201).json({
            status : "added new course  successfully",
            result : courseCreate

        })
        
       
    }catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getCourseById = async (req, res) => {
    try {
        const courseId = req.params._id
        const courseRecord = await courseHelper.getCourseById(courseId)
        console.log(courseRecord)
        return res.status(201).json({
            status : "added new course successfully",
            result : courseRecord
        })
       
       
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getCourses = async(req, res) => {                     /// daat come in query

    try{

        const coursesGet  = await courseHelper.getCourses()
        console.log(coursesGet)

        return res.status(201).json({
            status : "all courses data fetch successfuly",
            result : coursesGet
        })



    }catch(err){
        console.log(err, err.message)
        return res.status(403).json({
            status : "internal error",
            result :err.message
        })
    }

}

const updateCourseById = async(req, res) => {   
    try{
    const courseData = req.body
    const courseId = req.params._id

    const updateCourse =  await courseHelper.updateCourseById(courseData, courseId)

    console.log(updateCourse)

    return res.status(201).json({
        status : "course updated successfully",
        result :updateCourse
    })


   

   
}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateCourses = async(req, res) => {
    try{
      
        const course = req.body
        const coursesUpdate = await courseHelper.updateCourses(course)
        console.log(coursesUpdate)

        return res.status(201).json({
            status : "course data updated successfully",
            result : coursesUpdate
        })
    


    }catch(err){
        console.log(err, err.message)
        return res.status(501).json({
            status : "internal error",
            result :err.message

        })
    }

}


const deleteCourseById = async(req,res)=>{

    try{

        const courseId  =  req.params._id

        const deleteCourse = await courseHelper.deleteCourseById(courseId)

        console.log(deleteCourse)
        return res.status(201).json({
            status:"delete course successfully",
            result: deleteCourse
        })



    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status : "internal error",
            result : err.message
        })
    }

}


const deleteCourses = async(req,res)=>{
    try{

        const coursesDelete = await courseHelper.deleteCourses()
        console.log(coursesDelete)
        return res.status(201).json({
            status : " all courses delete successfully",
            result : coursesDelete

        })


    }catch(err){
        console.log(err, err.message)
        return res.status({
            status : "internal error",
            result : err.message
        })
    }

}





module.exports = {
    createCourse,
    getCourseById,
    getCourses,
    updateCourseById,
    updateCourses,
    deleteCourseById,
    deleteCourses

}