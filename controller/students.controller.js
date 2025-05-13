
const studentHelper = require('../helpers/students.helpers')
const createStudent = (req, res) => {
    try {
        const student = req.body
        
        if (student?.studentId) {

            const student_rcd = studentHelper.createStudent(student)

            if (student_rcd === "student not created") {
                return res.status(401).json({
                    status: "already exhisting student on this id",
                    result: student_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new student added successfully",
                    result: student_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the student id"
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

const getStudentById = (req, res) => {
    try {
        const studentId = req.params.studentId 
        const studentRecord = studentHelper.getStudentById(studentId)
       
        if (studentId > 0) {
          
            
            if (studentRecord === "student data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: studentRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "student data fetch successfully",
                    result: studentRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the studentId"
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

const getStudents = (req, res) => {                     /// daat come in query

}

const updateStudentById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const studentData = req.body
    const studentId = req.params.studentId
   

    if ((studentData && Object.keys(studentData).length > 0) && studentId > 0) {
        const data = studentHelper.updateStudentById(studentData,studentId)

        if (data == "student data successfully updated") {
           return  res.status(201).json({
                status: "student data update successfully",
                result: studentData
            })

        }
        else {
           return res.status(401).json({
                status: "student data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "student data empty or studentId empty",
            remdy : "check the student data or studentId"
           
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


const updateStudents = (req, res) => {

}


const deleteStudentById = (req,res)=>{

}


const deleteStudents = (req,res)=>{

}





module.exports = {
    createStudent,
    getStudentById,
    getStudents,
    updateStudentById,
    updateStudents,
    deleteStudentById,
    deleteStudents

}