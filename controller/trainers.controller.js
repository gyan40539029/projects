
const trainerHelper = require('../helpers/trainers.helpers')
const createTrainer = async (req, res) => {
    try {
        const trainer = req.body

        const trainerCreate = await trainerHelper.createTrainer(trainer)
        console.log(trainerCreate)
        return res.status(201).json({
            status : "new trainer add successfully",
            result : trainerCreate

        })
        
       
    }
    catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getTrainerById = async (req, res) => {
    try {
        const trainerId = req.params._id
        const trainerRecord = await trainerHelper.getTrainerById(trainerId)
        console.log(trainerRecord)

        return res.status(201).json({
            status : "trainer data fetch successfully",
            result : trainerRecord
        })
       
        
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getTrainers = async(req, res) => {                     /// daat come in query
    try{

        const trainersGet = await trainerHelper.getTrainers()
        console.log(trainersGet)

        return res.status(201).json({
            status : "all trainer data fetch successfully",
            result : trainersGet
        })



    }catch(err){
        console.log(err, err.message)

        return res.status(403).json({
            status : "internal error",
            result : err.message
        })
    }

}

const updateTrainerById = async(req, res) => {   
    try{
    const trainerData = req.body
    const trainerId = req.params._id

    const updateTrainer = await trainerHelper.updateTrainerById(trainerData, trainerId)
    console.log(updateTrainer)

    return res.status(201).json({
        status : "trainer updated successfully",
        result  : updateTrainer
    })   

}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateTrainers = async(req, res) => {
    try{

        const trainers = req.body

        const trainersUpdate = await trainerHelper.updateTrainers(trainers)
        console.log(trainersUpdate)

        return res.status(201).json({
            status : "all trainers update successfully",
            result : trainersUpdate
        })


    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status:"interna error",
            result : err.message
        })
    }

}


const deleteTrainerById = async(req,res)=>{
    try{
        const trainerId = req.params._id

        const deleteTrainer = await trainerHelper.deleteTrainerById(trainerId)
        console.log(deleteTrainer)
        return res.status(201).json({
            status : "trainer delete successfully",
            result : deleteTrainer
        })

    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status : "internal error",
            result  : err.message
        })
    }

}


const deleteTrainers = async(req,res)=>{
    try{

        const trainersDelete = await trainerHelper.deleteTrainers()
        console.log(trainersDelete)
        return res.status(201).json({
            status : "All trainers delete successfully",
            result  : trainersDelete
        })


    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status : "internal error",
            result : err.message
        })
    }

}





module.exports = {
    createTrainer,
    getTrainerById,
    getTrainers,
    updateTrainerById,
    updateTrainers,
    deleteTrainerById,
    deleteTrainers

}