
const { UserModel } = require('./../model/users.model')

const createUser = async (user) => {

    try {
        const userCreate = await UserModel.insertOne(user)
        return userCreate


    } catch (error) {
        throw new Error(error.message)
    }
}


const getUserById = async(_id) => {
    try {

        const getUser = await UserModel.findOne({_id})
        return getUser
      
    } catch (error) {
        throw new Error(error.message)
    }

}


const getUsers = async() => {
    try{

        const usersGet = await UserModel.find()

        return usersGet

    }catch(err){
        throw new Error(err.message)
    }



}





const updateUserById = async(user, _id) => {
    try {

        const updateUser = await UserModel.updateOne(
            {_id},
            {$set:user},
            {upsert:false}
        )

        return updateUser
       
    } catch (error) {
        throw new Error(error.message)
    }

}

const updateUsers = async(user) => {
    try {

        const usersUpdate = await UserModel.updateMany(
            // {_id},
            {$set:user},
            {upsert:false}
        )

        return usersUpdate
       
    } catch (error) {
        throw new Error(error.message)
    }

}

const deleteUserById = async(_id) => {
    try {

        const deleteUser = await UserModel.deleteOne({_id})
        return deleteUser
      
    } catch (error) {
        throw new Error(error.message)
    }

}

const deleteUsers = async() => {
    try{

        const usersDelete = await UserModel.deleteMany()

        return usersDelete

    }catch(err){
        throw new Error(err.message)
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


