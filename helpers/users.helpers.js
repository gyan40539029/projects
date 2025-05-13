let userList = []

const createUser = (user)=>{  

    try{
if(user.userId && !userList.some(usr=>usr.userId== user.userId)){
    console.log('hellow')
    userList.push(user)

    
    return user

}


else{
    return "user not created"
}
}catch(error){
    throw new Error(error.message)
}
}


const getUserById = (userId)=>{   
    try{
   if(userId){
    const idUser = parseInt(userId)
   
    let user = userList.find((usr)=>usr.userId === idUser )
    

    
    if(user){
        
        return user

    }

    else{
        return "user data not fetch"
    }

   }

}catch(error){
    throw new Error(error.message)
}

}


const getUsers = (users)=>{



   }





const updateUserById = (user,userId)=>{
    try{
    if(user?.userId && userId){
        console.log('hellooooooo')

        userList = userList.map((usr)=>{
            if(usr.userId == userId){
                return {
                    ...user,
                     userId : usr.userId
                }
                
            }
            return usr
    
           
        })

        return "user data successfully updated"
    


    }
    else{
        return "user data not updated"
    }

}catch(error){
    throw new Error(error.message)
}
    
}


module.exports={
createUser,
getUserById,
getUsers,
updateUserById
}


