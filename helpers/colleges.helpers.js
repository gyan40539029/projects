
const {CollegeModel} = require('./../model/college.model')

const createCollege = async(college)=>{  

    try{

        const createCollege = await CollegeModel.insertOne(college)

        return createCollege




}catch(error){
    throw new Error(error.message)
}
}


const getCollegebyId = async(_id)=>{  /// need to getCollegebyId  
    try{

        const college = await CollegeModel.findOne({_id})
        return college


   
}catch(error){
    throw new Error(error.message)
}

}


const getColleges = async()=>{
    try{

    const colleges = await CollegeModel.find()
    return colleges


}catch(err){
    throw new Error(err.message)

}

}

   





const updateCollegeById = async(college,_id)=>{
    try{
        const upadteCollege = await CollegeModel.updateOne(
            {_id},
            {$set:college},
            {upsert:false}

        )

        return upadteCollege


    
}catch(error){
    throw new Error(error.message)
}
    
}


const updateColleges = async(college)=>{
    try{
        const collegesUpdate = await CollegeModel.updateMany(
            // {_id},
            {$set:college},
            {upsert:false}

        )

        return collegesUpdate


    
}catch(error){
    throw new Error(error.message)
}
    
}


const deleteCollegebyId = async(_id)=>{  /// need to getCollegebyId  
    try{

        const deleteCollege = await CollegeModel.deleteOne({_id})
        return deleteCollege


   
}catch(error){
    throw new Error(error.message)
}

}



const deleteColleges = async()=>{
    try{

    const collegesDelete = await CollegeModel.deleteMany()
    return collegesDelete


}catch(err){
    throw new Error(err.message)

}

}





module.exports={
createCollege,
getCollegebyId,
getColleges,
updateCollegeById,
updateColleges,
deleteCollegebyId,
deleteColleges
}


