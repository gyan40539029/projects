
const courseHelper = require('../helpers/courses.helpers')
const createCourse = (req, res) => {
    try {
        const course = req.body
        
        if (course?.courseId) {

            const course_rcd = courseHelper.createCourse(course)

            if (course_rcd === "course not created") {
                return res.status(401).json({
                    status: "already exhisting course on this id",
                    result: course_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new course added successfully",
                    result: course_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the course id"
            })
        }
    }
    catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getCourseById = (req, res) => {
    try {
        const courseId = req.params.courseId //// need to  change query to param
        const courseRecord = courseHelper.getCourseById(courseId)
       
        if (courseId > 0) {
          
            
            if (courseRecord === "course data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: courseRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "data fetch successfully",
                    result: courseRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the courseId"
            })
        }
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getCourses = (req, res) => {                     /// daat come in query

}

const updateCourseById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const courseData = req.body
    const courseId = req.params.courseId
   

    if ((courseData && Object.keys(courseData).length > 0) && courseId > 0) {
        const data = courseHelper.updateCourseById(courseData,courseId)

        if (data == "course data successfully updated") {
           return  res.status(201).json({
                status: "course update successfully",
                result: courseData
            })

        }
        else {
           return res.status(401).json({
                status: "course data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "course data empty or courseId empty",
            remdy : "check the course data or courseId"
           
        })
    }

}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateCourses = (req, res) => {

}


const deleteCourseById = (req,res)=>{

}


const deleteCourses = (req,res)=>{

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