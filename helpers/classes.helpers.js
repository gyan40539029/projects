

const { ClassModel } = require('./../model/classes.model')

const createClass = async (claas) => {

    try {
       const createClass = await ClassModel.insertOne(claas)

       return createClass
    } catch (error) {
        throw new Error(error.message)
    }
}


const getClassbyId = async(_id) => {
    try {
        const getClass = await ClassModel.findOne({_id})
        return getClass

    } catch (error) {
        throw new Error(error.message)
    }

}


const getClasses = async() => {

    const classesGet = await ClassModel.find()

    return classesGet



}





const updateClassById = async(claas, _id) => {
    try {

        const updateClass = await ClassModel.updateOne(
            {_id},
            {$set:claas},
            {upsert:false}
        )

        return updateClass


        
    } catch (error) {
        throw new Error(error.message)
    }

}

const updateClasses = async(claas) => {
    try {
           const updateClass = await ClassModel.updateMany(
            // {_id},
            {$set:claas},
            {upsert:false}
        )

        return updateClass

      


        
    } catch (error) {
        throw new Error(error.message)
    }

}


const deleteClassbyId = async(_id) => {
    try {
        const deleteClass = await ClassModel.deleteOne({_id})
        return deleteClass

    } catch (error) {
        throw new Error(error.message)
    }

}

const deleteClasses = async()=>{
    try{

    classesDelete = await ClassModel.deleteMany()
    return classesDelete



    }catch(err){
        throw new Error(err.message)
    }
}


module.exports = {
    createClass,
    getClassbyId,
    getClasses,
    updateClassById,
    updateClasses,
    deleteClassbyId,
    deleteClasses
}


