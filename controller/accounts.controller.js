
const accountHelper = require('../helpers/accounts.helpers')
const createAccount = (req, res) => {
    try {
        const account = req.body
        
        if (account?.accountId) {

            const account_rcd = accountHelper.createAccount(account)

            if (account_rcd === "account not created") {
                return res.status(401).json({
                    status: "already exhisting account on this id",
                    result: account_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new account added successfully",
                    result: account_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the account id"
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

const getAccountById = (req, res) => {
    try {
        const accountId = req.params.accountId 
        const accountRecord = accountHelper.getAccountById(accountId)
       
        if (accountId > 0) {
          
            
            if (accountRecord === "account data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: accountRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "account data fetch successfully",
                    result: accountRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the accountId"
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

const getAccounts = (req, res) => {                     /// daat come in query

}

const updateAccountById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const accountData = req.body
    const accountId = req.params.accountId
   

    if ((accountData && Object.keys(accountData).length > 0) && accountId > 0) {
        const data = accountHelper.updateAccountById(accountData,accountId)

        if (data == "account data successfully updated") {
           return  res.status(201).json({
                status: "account data update successfully",
                result: accountData
            })

        }
        else {
           return res.status(401).json({
                status: "account data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "account data empty or accountId empty",
            remdy : "check the account data or accountId"
           
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


const updateAccounts = (req, res) => {

}


const deleteAccountById = (req,res)=>{

}


const deleteAccounts = (req,res)=>{

}





module.exports = {
    createAccount,
    getAccountById,
    getAccounts,
    updateAccountById,
    updateAccounts,
    deleteAccountById,
    deleteAccounts

}