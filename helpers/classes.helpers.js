let classList = []

const createClass = (claas)=>{  

    try{
if(claas.classId && !classList.some(cls=>cls.classId== claas.classId)){
    console.log('hellow')
    classList.push(claas)

    
    return claas

}


else{
    return "class not created"
}
}catch(error){
    throw new Error(error.message)
}
}


const getClassbyId = (classId)=>{  
    try{
   if(classId){
    const idClass = parseInt(classId)
   
    let classRecord = classList.find((cls)=>cls.classId === idClass )
    

    
    if(classRecord){
        
        return classRecord

    }

    else{
        return "class data not fetch"
    }

   }

}catch(error){
    throw new Error(error.message)
}

}


const getClasses = (claas)=>{



   }





const updateClassById = (claas,classId)=>{
    try{
    if(claas?.classId && classId){
        console.log('hellooooooo')

        classList = classList.map((cls)=>{
            if(cls.classId == classId){
                return {
                    ...claas,
                     classId : cls.classId
                }
                
            }
            return cls
    
           
        })

        return "class data successfully updated"
    


    }
    else{
        return "class data not updated"
    }

}catch(error){
    throw new Error(error.message)
}
    
}


module.exports={
createClass,
getClassbyId,
getClasses,
updateClassById
}


