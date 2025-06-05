
const collegeHelper = require('../helpers/colleges.helpers')
const createCollege = async(req, res) => {
    try {
        const college = req.body

        const collegeCreate = await collegeHelper.createCollege(college)
        console.log(collegeCreate)
        return res.status(201).json({
            status:"college added successfully",
            result : collegeCreate
        })
        
       
    }catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getCollegebyId = async(req, res) => {
    try {
        const collegeId = req.params._id 
        const collegeRecord = await collegeHelper.getCollegebyId(collegeId)

        console.log(collegeRecord)


        return res.status(201).json({
            status : "college data fetch successfully",
            result : collegeRecord
        })
       
        
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getColleges = async(req, res) => { 
    try{                    /// daat come in query

    const collegesGet = await collegeHelper.getColleges()
    console.log(collegesGet)

    return res.status(201).json({
        status : "all college data fetch successfully",
        result : collegesGet
    })
}catch(err){
    console.log(err, err.message)

    return res.status(403).json({
        status:"internal error",
        result: err.message
    })
}
}

const updateCollegeById = async(req, res) => {   
    try{
    const collegeData = req.body
    const collegeId = req.params._id

    const upadteCollege = await collegeHelper.updateCollegeById(collegeData,collegeId)
    console.log(updateColleges)

    return res.status(201).json({
        status:"college data update successfully",
        result : upadteCollege
    })
   

    

}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateColleges = async(req, res) => {
    try{

        const colleges = req.body

        const collegesUpdate = await collegeHelper.updateColleges(colleges)
        console.log(collegesUpdate)
        return res.status(201).json({

            status:"all college data update successfully",
            result : collegesUpdate

        })


    }catch(err){
        console.log(err, err.message)
        return res.status(403).json({
            status:"internal error",
            result : err.message
        })
    }

}


const deleteCollegeById = async(req,res)=>{
    
    try{

    const collegeId = req.params._id

    const deleteCollege = await collegeHelper.deleteCollegebyId(collegeId)
    console.log(deleteCollege)
    return res.status(201).json({
        status:"college data delete successfully",
        result: deleteCollege
    })
    }catch(err){
        console.log(err, err.message)

        return res.status(403).json({
            status : "internal error",
            result : err.message
        })
    }

}


const deleteColleges = async(req,res)=>{

    try{

        const collegesDelete = await collegeHelper.deleteColleges()
        console.log(collegesDelete)
        return res.status(201).json({
            status : "all college data successfuly deleted",
            result :collegesDelete
        })


    }catch(err){
        console.log(err, err.message)

        return res.status(403).json({
            status : "internal error",
            result : err.message
        })
    }

}





module.exports = {
    createCollege,
    getCollegebyId,
    getColleges,
    updateCollegeById,
    updateColleges,
    deleteCollegeById,
    deleteColleges

}