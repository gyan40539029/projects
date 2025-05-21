
const trainerHelper = require('../helpers/trainers.helpers')
const createTrainer = async (req, res) => {
    try {
        const trainer = req.body
        
        if (trainer?.trainerId) {

            const trainer_rcd = await trainerHelper.createTrainer(trainer)

            if (trainer_rcd === "trainer not created") {
                return res.status(401).json({
                    status: "already exhisting trainer on this id",
                    result: trainer_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new trainer added successfully",
                    result: trainer_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the trainer id"
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

const getTrainerById = async (req, res) => {
    try {
        const trainerId = req.params.trainerId //// need to  change query to param
        const trainerRecord = await trainerHelper.getTrainerById(trainerId)
       
        if (trainerId > 0) {
          
            
            if (trainerRecord === "trainer data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: trainerRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "trainer data fetch successfully",
                    result: trainerRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the trainerId"
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

const getTrainers = (req, res) => {                     /// daat come in query

}

const updateTrainerById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const trainerData = req.body
    const trainerId = req.params.trainerId
    console.log(Object.keys(trainerData).length)
    console.log(trainerId)
   

    if ((trainerData && Object.keys(trainerData).length > 0) && trainerId > 0) {
        const data = trainerHelper.updateTrainerById(trainerData,trainerId)

        if (data == "trainer data successfully updated") {
           return  res.status(201).json({
                status: "trainer data update successfully",
                result: trainerData
            })

        }
        else {
           return res.status(401).json({
                status: "trainer data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "trainer data empty or trainerId empty",
            remdy : "check the trainer data or trainerId"
           
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


const updateTrainers = (req, res) => {

}


const deleteTrainerById = (req,res)=>{

}


const deleteTrainers = (req,res)=>{

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