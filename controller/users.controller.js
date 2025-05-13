
const userHelper = require('../helpers/users.helpers')
const createUser = (req, res) => {
    try {
        const user = req.body
        
        if (user?.userId) {

            const user_rcd = userHelper.createUser(user)

            if (user_rcd === "user not created") {
                return res.status(401).json({
                    status: "already exhisting user on this id",
                    result: user_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new user added successfully",
                    result: user_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the user id"
            })
        }
    }
    catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getUserById = (req, res) => {
    try {
        const userId = req.params.userId //// need to  change query to param
        const userRecord = userHelper.getUserById(userId)
       
        if (userId > 0) {
          
            
            if (userRecord === "user data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: userRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "user data fetch successfully",
                    result: userRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the userId"
            })
        }
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getUsers = (req, res) => {                     /// daat come in query

}

const updateUserById = (req, res) => {  
    try{
    const userData = req.body
    const userId = req.params.userId
   

    if ((userData && Object.keys(userData).length > 0) && userId > 0) {
        const data = userHelper.updateUserById(userData,userId)

        if (data == "user data successfully updated") {
           return  res.status(201).json({
                status: "user data update successfully",
                result: userData
            })

        }
        else {
           return res.status(401).json({
                status: "user data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "user data empty or userId empty",
            remdy : "check the user data or userId"
           
        })
    }

}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateUsers = (req, res) => {

}


const deleteUserById = (req,res)=>{

}


const deleteUsers = (req,res)=>{

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