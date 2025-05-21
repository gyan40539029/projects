let studentList = []

const {studentModel} = require('./../model/students.model')

const createStudent = async(student)=>{  //need to name chang createCollege

    try{
if(student.studentId && !studentList.some(stdnt=>stdnt.studentId== student.studentId)){

    await studentModel.insertOne({

        fullName: "Aman",
    studentId: 425,
    emailAddress: "rockwell9029@gmai.com",
    phoneNumber: 9873251643,
    password: "40539029@gyan",
    confirmPassword:"405339029@gyan",
    smsAuthentication: 12456,
    profilePicture: "img_url",
    DOB: 1998,
    gender: "male",
    addresss: {
        type: Object,
        street: "ygg",
        city: "delhi",
        zip: 221711,
        country: "India"
    }


    })
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


const getStudentById = async(studentId)=>{  /// need to getCollegebyId  
    try{
   if(studentId){
    const idStudent = parseInt(studentId)

    await studentModel.findOne({_id:"55666666"})
   
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


