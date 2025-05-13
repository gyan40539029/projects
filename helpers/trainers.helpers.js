let trainerList = []

const createTrainer = (trainer)=>{  //need to name chang createCollege

    try{
if(trainer.trainerId && !trainerList.some(trn=>trn.trainerId== trainer.trainerId)){
    console.log('hellow')
    trainerList.push(trainer)

    
    return trainer

}


else{
    return "trainer not created"
}
}catch(error){
    throw new Error(error.message)
}
}


const getTrainerById = (trainerId)=>{  
    try{
   if(trainerId){
    const idTrainer = parseInt(trainerId)
   
    let trainer = trainerList.find((trn)=>trn.trainerId === idTrainer )
    

    
    if(trainer){
        
        return trainer

    }

    else{
        return "trainer data not fetch"
    }

   }

}catch(error){
    throw new Error(error.message)
}

}


const getTrainers = (trainers)=>{



   }





const updateTrainerById = (trainer,trainerId)=>{
    try{
    if(trainer?.trainerId && trainerId){
        console.log('hellooooooo')

        trainerList = trainerList.map((trn)=>{
            if(trn.trainerId == trainerId){
                return {
                    ...trainer,
                     trainerId : trn.trainerId
                }
                
            }
            return trn
    
           
        })

        return "trainer data successfully updated"
    


    }
    else{
        return "trainer data not updated"
    }

}catch(error){
    throw new Error(error.message)
}
    
}


module.exports={
createTrainer,
getTrainerById,
getTrainers,
updateTrainerById
}


