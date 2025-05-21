let collegeList = []
const {collegeModel} = require('./../model/college.model')

const createCollege = async(college)=>{  //need to name chang createCollege

    try{
if(college.collegeId && !collegeList.some(clg=>clg.collegeId == college.collegeId)){

    await collegeModel.insertOne({
        collegeName : "Sant pushpa inter college",
        collegeCode : 101,
        collegeLogo : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fcollege-logo&psig=AOvVaw174X8v9MIMJuYckE8hSOhf&ust=1747905611650000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjM0_udtI0DFQAAAAAdAAAAABAV",
         Email:"rockwell9029@gmailcom",
         Phone : 9873251643,
         Website: "www.google.com",
         establishmentYear : 2005,
         Address : {
           Street : "hmt",
           City : "Delhi",
           State : "delhi",
           Country : "india",
           Zip : 221415
         }
    })
    
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


const getCollegebyId = async(collegeId)=>{  /// need to getCollegebyId  
    try{
   if(collegeId){
    const idCollege = parseInt(collegeId)

    await collegeModel.findOne({collegeId : "123456789"})
   
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


