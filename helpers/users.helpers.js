let userList = []

const { userModel } = require('./../model/users.model')

const createUser = async (user) => {

    try {
        if (user.userId && !userList.some(usr => usr.userId == user.userId)) {

            await userModel.insertOne({

                fullName: "gyan",
                userId: "24455",
                userName: "ggava",
                emailAddress: "gyan40539029@gmail.com",
                phoneNumber: 9873251643,
                password: "vugusdggugasuyh",
                confirmPassword: "bygacgg8gaayvsca",
                smsAuthentication: 456,
                profilePicture: "img_url",
                DOB: 1998,
                gender: "male",
                RoleAccessLevel: "admin",
                Status: "active",
                department: "adm"



            })


            console.log('hellow')
            userList.push(user)


            return user

        }


        else {
            return "user not created"
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


const getUserById = (userId) => {
    try {
        if (userId) {
            const idUser = parseInt(userId)

            let user = userList.find((usr) => usr.userId === idUser)



            if (user) {

                return user

            }

            else {
                return "user data not fetch"
            }

        }

    } catch (error) {
        throw new Error(error.message)
    }

}


const getUsers = (users) => {



}





const updateUserById = (user, userId) => {
    try {
        if (user?.userId && userId) {
            console.log('hellooooooo')

            userList = userList.map((usr) => {
                if (usr.userId == userId) {
                    return {
                        ...user,
                        userId: usr.userId
                    }

                }
                return usr


            })

            return "user data successfully updated"



        }
        else {
            return "user data not updated"
        }

    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createUser,
    getUserById,
    getUsers,
    updateUserById
}


