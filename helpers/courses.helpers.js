let coursesList = []

const { courseModel } = require('./../model/course.model')

const createCourse = async (course) => {  //need to name chang createCollege

    try {
        if (course.courseId && !coursesList.some(corse => corse.courseId == course.courseId)) {

            await courseModel.insertOne({

                courseName: "BCA",
                courseType: "offline",
                program: "aca",
                duration: 5,
                status: "active",
                startDate: 1,
                endDate: 31,

            })
            console.log('hellow')
            coursesList.push(course)


            return course

        }


        else {
            return "course not created"
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


const getCourseById = async(courseId) => {  /// need to getCollegebyId  
    try {
        if (courseId) {
            const idCourse = parseInt(courseId)

            await courseModel.findOne({_id:"55555555555"})

            let course = coursesList.find((course) => course.courseId === idCourse)



            if (course) {

                return course

            }

            else {
                return "course data not fetch"
            }

        }

    } catch (error) {
        throw new Error(error.message)
    }

}


const getCourses = (colleges) => {



}





const updateCourseById = (course, courseId) => {
    try {
        if (course?.courseId && courseId) {
            console.log(typeof course.courseId, course.courseId)
            console.log(typeof courseId, courseId)

            coursesList = coursesList.map((corse) => {
                if (corse.courseId == courseId) {
                    return {
                        ...course,
                        courseId: course.courseId
                    }

                }
                return course


            })

            return "course data successfully updated"



        }
        else {
            return "course data not updated"
        }

    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createCourse,
    getCourseById,
    updateCourseById
}


