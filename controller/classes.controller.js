
const classHelper = require('../helpers/classes.helpers')
const createClass = async (req, res) => {
    try {
        const claas = req.body
       const classCreate = await classHelper.createClass(claas)

       console.log(classCreate)
       return res.status(201).json({
        status : "new class added successfully",
        result : classCreate
       })
        
    }catch (err) {
        console.log("internal error", err, err.message);0



        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getClassById = async(req, res) => {
    try {
        const classId = req.params._id 
        const classRecord = await classHelper.getClassbyId(classId)
        console.log(classRecord)
        return res.status(201).json({
            status:"class data fetch successfully",
            result :classRecord
        })

       
       
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getClasses = async(req, res) => {                     /// daat come in query
    try{

    const classesGet = await classHelper.getClasses()
    console.log(classesGet)
    return res.status(201).json({
        status:"all class data fetch successfully",
        result : classesGet
    })

}catch(err){
    console.log(err, err.message)
    return res.status(501).json({
        status : "internal error",
        result :err.message
    })

}
}

const updateClassById = async(req, res) => {   
    try{
    const classData = req.body
    const classId = req.params._id

    const updateClass= await classHelper.updateClassById(classData,classId)
    console.log(updateClass)

    return res.status(201).json({
        status : "class data update successfully",
        result : updateClass
    })
   

   
}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateClasses =async (req, res) => {
    try{
    const claas = req.body
    const classesUpdate = await classHelper.updateClasses(claas)
    console.log(classesUpdate)
    return res.status(201).json({
        status :"All class data update successfully",
        result : classesUpdate
    })

}catch(err){
    console.log(err,err.message)
    return res.status(403).json({
        status:"internal error",
        result: err.message
    })
}

}


const deleteClassById = async(req,res)=>{

    try {
        const classId = req.params._id 
        const deleteClass = await classHelper.deleteClassbyId(classId)
        console.log(deleteClass)
        return res.status(201).json({
            status:"class data fetch successfully",
            result :deleteClass
        })

       
       
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}


const deleteClasses = async(req,res)=>{
    try{

    const classesDelete = await classHelper.deleteClasses()

    console.log(classesDelete)
    return res.status(201).json({
        status :"all class data deleted successfully",
        result : classesDelete
    })

}catch(err){
    console.log(err,err.message)
    return res.status(403).json({
        status : "internal error",
        result : err.message
    })
}

}





module.exports = {
    createClass,
    getClassById,
    getClasses,
    updateClassById,
    updateClasses,
    deleteClassById,
    deleteClasses

}