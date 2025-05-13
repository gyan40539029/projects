let studentList = []

const createStudent = (student)=>{  //need to name chang createCollege

    try{
if(student.studentId && !studentList.some(stdnt=>stdnt.studentId== student.studentId)){
    console.log('hellow')
    studentList.push(student)

    
    return student

}


else{
    return "student not created"
}
}catch(error){
    throw new Error(error.message)
}
}


const getStudentById = (studentId)=>{  /// need to getCollegebyId  
    try{
   if(studentId){
    const idStudent = parseInt(studentId)
   
    let student = studentList.find((stdnt)=>stdnt.studentId === idStudent )
    

    
    if(student){
        
        return student

    }

    else{
        return "student data not fetch"
    }

   }

}catch(error){
    throw new Error(error.message)
}

}


const getStudents = (students)=>{



   }





const updateStudentById = (student,studentId)=>{
    try{
    if(student?.studentId && studentId){
        console.log('hellooooooo')

        studentList = studentList.map((stdnt)=>{
            if(stdnt.studentId == studentId){
                return {
                    ...student,
                     studentId : stdnt.studentId
                }
                
            }
            return stdnt
    
           
        })

        return "student data successfully updated"
    


    }
    else{
        return "student data not updated"
    }

}catch(error){
    throw new Error(error.message)
}
    
}


module.exports={
createStudent,
getStudentById,
getStudents,
updateStudentById
}


