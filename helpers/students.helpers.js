
const {StudentModel} = require('./../model/students.model')

const createStudent = async(student)=>{  

    try{
    const studentCreate = await StudentModel.insertOne(student)
    return studentCreate



}catch(error){
    throw new Error(error.message)
}
}


const getStudentById = async(_id)=>{   
    try{

        const getStudent = await StudentModel.findOne({_id})

        return getStudent


}catch(error){
    throw new Error(error.message)
}

}


const getStudents = async()=>{

    try{
    const studentsGet = await StudentModel.find()

    return studentsGet


}catch(err){
    throw new Error(err.message)
}

}





const updateStudentById =async(student,_id)=>{
    try{
    const updateStudent = await StudentModel.updateOne(
        {_id},
        {$set:student},
        {upsert:false}
    )
    return updateStudent

}catch(error){
    throw new Error(error.message)
}
    
}

const updateStudents =async(student)=>{
    try{
    const studentsUpdate = await StudentModel.updateMany(
        // {_id},
        {$set:student},
        {upsert:false}
    )
    return studentsUpdate

}catch(error){
    throw new Error(error.message)
}
    
}

const deleteStudentById = async(_id)=>{   
    try{

        const deleteStudent = await StudentModel.deleteOne({_id})

        return deleteStudent


}catch(error){
    throw new Error(error.message)
}

}


const deleteStudents = async()=>{

    try{
    const studentsDelete = await StudentModel.deleteMany()

    return studentsDelete


}catch(err){
    throw new Error(err.message)
}

}



module.exports={
createStudent,
getStudentById,
getStudents,
updateStudentById,
updateStudents,
deleteStudentById,
deleteStudents
}


