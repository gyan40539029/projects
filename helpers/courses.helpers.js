
const { CourseModel } = require('./../model/course.model')

const createCourse = async (course) => {  

    try {
       const courseCreate = await CourseModel.insertOne(course)

       return courseCreate
    } catch (error) {
        throw new Error(error.message)
    }
}


const getCourseById = async(_id) => {  
    try {

        const course  = await CourseModel.findOne({_id})
        return course
       


    } catch (error) {
        throw new Error(error.message)
    }

}


const getCourses = async () => {
    try{

        const coursesGet = await CourseModel.find()
        return coursesGet

    }catch(err){
        throw new Error(err.message)
    }



}





const updateCourseById = async (course, _id) => {
    try {
        const updateCourse = await CourseModel.updateOne(
            {_id},

            {$set:course},
            {upsert:false}


        )
        return updateCourse
        

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateCourses = async (course) => {
    try {
        const coursesUpdate = await CourseModel.updateMany(
            // {_id},

            {$set:course},
            {upsert:false}


        )

        return coursesUpdate
        

    } catch (error) {
        throw new Error(error.message)
    }

}


const deleteCourseById = async(_id) => {  
    try {

        const deleteCourse  = await CourseModel.deleteOne({_id})
        return deleteCourse
       


    } catch (error) {
        throw new Error(error.message)
    }

}


const deleteCourses = async () => {
    try{

        const coursesDelete = await CourseModel.deleteMany()
        return coursesDelete

    }catch(err){
        throw new Error(err.message)
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


