
const userHelper = require('../helpers/users.helpers')
const createUser = async (req, res) => {
    try {
        const user = req.body

        const userCreate = await userHelper.createUser(user)
        console.log(userCreate)
        return res.status(201).json({
            status : "user create successfully",
            result : userCreate
        })
        
       
    }
    catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getUserById = async (req, res) => {
    try {
        const userId = req.params._id //// need to  change query to param
        const userRecord = await userHelper.getUserById(userId)

        console.log(userRecord)
        return res.status(201).json({
            status : "user data fetch successfully",
            result  : userRecord
        })
       
       
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getUsers = async(req, res) => {                     /// daat come in query
    try{

        const usersGet  = await userHelper.getUsers()
        console.log(usersGet)
        return res.status(201).json({
            status : "all users data fetch successfully",
            result : usersGet
        })


    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status : "internal error",
            result  : err.message
        })
    }

}

const updateUserById = async(req, res) => {  
    try{
    const userData = req.body
    const userId = req.params._id

    const updateUser = await userHelper.updateUserById(userData,userId)
    console.log(updateUser)
    return res.status(201).json({
        status : "user update successfully",
        result : updateUser
    })
   

   
}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateUsers = async(req, res) => {
    try{

        const users = req.body

        const usersUpdate = await userHelper.updateUsers(users)
        console.log(usersUpdate)
        return res.status(201).json({
            status : "all user data update successfully",
            result :usersUpdate
        })


    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status : "internal error",
            result : err.message
        })
    }

}


const deleteUserById = async(req,res)=>{

     try {
        const userId = req.params._id //// need to  change query to param
        const deleteUser = await userHelper.deleteUserById(userId)

        console.log(deleteUser)
        return res.status(201).json({
            status : "user data fetch successfully",
            result  : deleteUser
        })
       
       
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }


}


const deleteUsers = async(req,res)=>{

    try{

        const usersDelete  = await userHelper.deleteUsers()
        console.log(usersDelete)
        return res.status(201).json({
            status : "all users data fetch successfully",
            result : usersDelete
        })


    }catch(err){
        console.log(err, err.message)
        return res.status(505).json({
            status : "internal error",
            result  : err.message
        })
    }


}





module.exports = {
    createUser,
    getUserById,
    getUsers,
    updateUserById,
    updateUsers,
    deleteUserById,
    deleteUsers

}