
const studentHelper = require('../helpers/students.helpers')
const createStudent =async (req, res) => {
    try {
        const student = req.body

        const studentCreate = await studentHelper.createStudent(student)
        console.log(studentCreate)
        return res.status(201).json({
            status : "new student added successfully",
            result : studentCreate
        })
        
      
    }catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getStudentById = async (req, res) => {
    try {
        const studentId = req.params._id 
        const studentRecord = await studentHelper.getStudentById(studentId)
        console.log(studentRecord)
        return res.status(201).json({
            status : "student data successfully fetched",
            result  : studentRecord
        })
       
       
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getStudents = async(req, res) => {                     /// daat come in query
    try{

        const studentsGet  =  await studentHelper.getStudents()
        console.log(studentsGet)
        return res.status(201).json({
            status:"all students data fetched successfully",
            result  :studentsGet
        })

    }catch(err){
        console.log(err, err.message)
        return res.status(403).json({
            status : "internal error",
            result : err.message
        })
    }

}

const updateStudentById = async(req, res) => {   
    try{
    const studentData = req.body
    const studentId = req.params._id

    const updateStudent = await studentHelper.updateStudentById(studentData,studentId)
    console.log(updateStudent)

    return res.status(201).json({
        status : "student update successfully",
        result : updateStudent
    })
   

    
}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateStudents = async(req, res) => {
    try{

        const students = req.body

        const studentsUpdate = await studentHelper.updateStudents(students)

        console.log(studentsUpdate)
        return  res.status(201).json({
            status : "all student updated",

            result : studentsUpdate
        })





    }catch(err){
        console.log(err, err.message)

        return res.status(403).json({
            status : "internal error",
            result  : err.message
        })
    }

}


const deleteStudentById = async(req,res)=>{

   try{
     const studentId = req.params._id

     const deleteStudent = await studentHelper.deleteStudentById(studentId)
     console.log(deleteStudent)
     return res.status(201).json({
        status : "student delete successfully",
        result : deleteStudent
     })


   }catch(err){
    console.log(err, err.message)
    return res.status(403).json({
        status : "internal Error",
        result : err.message
    })


   }


}


const deleteStudents = async(req,res)=>{
    try{

        const studentsDelete = await studentHelper.deleteStudents()
        console.log(studentsDelete)

        return res.status(201).json({
            status : "all students delete successfully",
            result : studentsDelete
        })


    } catch(err){
        console.log(err, err.message)
        return res.status(403).json({
            status : "internal error",
            result : err.message
        })
    }

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