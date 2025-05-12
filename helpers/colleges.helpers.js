let collegeList = []

const createCollege = (college)=>{  //need to name chang createCollege

    try{
if(college.collegeId && !collegeList.some(clg=>clg.collegeId== college.collegeId)){
    console.log('hellow')
    collegeList.push(college)

    
    return college

}


else{
    return "college not created"
}
}catch(error){
    throw new Error(error.message)
}
}


const getCollegebyId = (collegeId)=>{  /// need to getCollegebyId  
    try{
   if(collegeId){
    const idCollege = parseInt(collegeId)
   
    let college = collegeList.find((clg)=>clg.collegeId === idCollege )
    

    
    if(college){
        
        return college

    }

    else{
        return "college data not fetch"
    }

   }

}catch(error){
    throw new Error(error.message)
}

}


const getColleges = (colleges)=>{



   }





const updateCollegeById = (college,collegeId)=>{
    try{
    if(college?.collegeId && collegeId){
        console.log('hellooooooo')

        collegeList = collegeList.map((clg)=>{
            if(clg.collegeId == collegeId){
                return {
                    ...college,
                     collegeId : clg.collegeId
                }
                
            }
            return clg
    
           
        })

        return "college data successfully updated"
    


    }
    else{
        return "college data not updated"
    }

}catch(error){
    throw new Error(error.message)
}
    
}


module.exports={
createCollege,
getCollegebyId,
getColleges,
updateCollegeById
}


