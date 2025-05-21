let trainerList = []

const { trainerModel } = require('./../model/trainers.model')

const createTrainer = async (trainer) => {  //need to name chang createCollege

    try {
        if (trainer.trainerId && !trainerList.some(trn => trn.trainerId == trainer.trainerId)) {

            await trainerModel.insertOne({

                trainerId: 411,
                fullName: "mohan",
                emailAddress:"rockwell9029@gmail.com",
                phoneNumber: 983251643,
                gender: "male",
                Dob: 1998,
                profilePhoto: "img_url",
                qualification: "ece",
                expertise: "programming & desigening",
                experiance: 10,
                address: {
                    type: Object,
                    street: "uag8",
                    city: "vku",
                    State: "delhi",
                    zipCode: 221711,
                    trainerType: "efufea",
                    Status: "active"
                }


            })

            console.log('hellow')
            trainerList.push(trainer)


            return trainer

        }


        else {
            return "trainer not created"
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


const getTrainerById = async(trainerId) => {
    try {
        if (trainerId) {
            const idTrainer = parseInt(trainerId)

            await trainerModel.findOne({_id:"55555555555555"})

            let trainer = trainerList.find((trn) => trn.trainerId === idTrainer)



            if (trainer) {

                return trainer

            }

            else {
                return "trainer data not fetch"
            }

        }

    } catch (error) {
        throw new Error(error.message)
    }

}


const getTrainers = (trainers) => {



}





const updateTrainerById = (trainer, trainerId) => {
    try {
        if (trainer?.trainerId && trainerId) {
            console.log('hellooooooo')

            trainerList = trainerList.map((trn) => {
                if (trn.trainerId == trainerId) {
                    return {
                        ...trainer,
                        trainerId: trn.trainerId
                    }

                }
                return trn


            })

            return "trainer data successfully updated"



        }
        else {
            return "trainer data not updated"
        }

    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createTrainer,
    getTrainerById,
    getTrainers,
    updateTrainerById
}


