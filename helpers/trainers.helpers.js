
const { TrainerModel } = require('./../model/trainers.model')

const createTrainer = async (trainer) => {  

    try {
        const trainerCreatee = await TrainerModel.insertOne(trainer)

        return trainerCreatee
    } catch (error) {
        throw new Error(error.message)
    }
}


const getTrainerById = async(_id) => {
    try {
        const getTrainer = await TrainerModel.findOne({_id})
        return getTrainer

    } catch (error) {
        throw new Error(error.message)
    }

}


const getTrainers = async() => {
    try{
        const trainersGet = await TrainerModel.find()

        return trainersGet

    }catch(err){
        throw new Error(err.message)
    }



}





const updateTrainerById = async(trainer, _id) => {
    try {
        const updateTrainer = await TrainerModel.updateOne(
            {_id},
            {$set : trainer},
            {upsert:false}
        )

        return updateTrainer

    } catch (error) {
        throw new Error(error.message)
    }

}


const updateTrainers = async(trainer) => {
    try {
        const trainersUpdate = await TrainerModel.updateMany(
            // {_id},
            {$set : trainer},
            {upsert:false}
        )

        return trainersUpdate

    } catch (error) {
        throw new Error(error.message)
    }

}


const deleteTrainerById = async(_id) => {
    try {
        const deleteTrainer = await TrainerModel.deleteOne({_id})
        return deleteTrainer

    } catch (error) {
        throw new Error(error.message)
    }

}

const deleteTrainers = async() => {
    try{
        const trainersDelete = await TrainerModel.deleteMany()

        return trainersDelete

    }catch(err){
        throw new Error(err.message)
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


