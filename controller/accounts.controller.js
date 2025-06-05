
const accountHelper = require('../helpers/accounts.helpers')
const createAccount = async (req, res) => {
    try {
        const account = req.body
        const account_rcd = await accountHelper.createAccount(account)

        console.log(account_rcd)
        return res.status(201).json({
            status: "user successfully created",
            result: account_rcd
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

const getAccountById = async (req, res) => {
    try {
        const accountId = req.params._id
        const accountRecord = await accountHelper.getAccountById(accountId)
        console.log(accountRecord)
        return res.status(201).json({
            status: "user data successfully fetched",
            result: accountRecord

        })




    } catch (err) {
        console.log(err, err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }
}



const getAccounts = async (req, res) => {                     /// daat come in query
    try {
        const allAccountRecords = await accountHelper.getAccounts()
        console.log(allAccountRecords)

        return res.status(201).json({
            status: "account data successfully fetched",
            result: allAccountRecords
        })



    } catch (err) {
        console.log(err, err.message)

        return res.status(505).json({
            status: "error",
            result: err.message
        })
    }

}

const updateAccountById = async(req, res) => {   /// update college by id  need to change  and neet to param for id
    try {
        const accountData = req.body
        const accountId = req.params._id

        const updateAccount = await accountHelper.updateAccountById(accountData, accountId)
        console.log(updateAccount)

        return res.status(201).json({
            status: "account data successfully updated",
            result: updateAccount
        })

    } catch (err) {
        console.log(err, err.message)
        return res.status(505).json({
            error: "internal error",
            desc: err.message

        })
    }
}


const updateAccounts = async(req, res) => {
    try{
        const accountRecord = req.body
        console.log(accountRecord)

        const accountsUpdate = await accountHelper.updateAccounts(accountRecord)
        console.log(accountsUpdate)
        return res.status(201).json({
            status : "all acounts data successfully updated",
            result :accountsUpdate
        })


    }catch(err){
        console.log(err,err.message)
        return res.status(505).json({
            status : "internal error",
            result : err.message
        })
    }


}


const deleteAccountById = async (req, res) => {
    try{
        const accountId = req.params._id
        const deleteAccount = await accountHelper.deleteAccountById(accountId)
        console.log(deleteAccount)
        return res.status(201).json({
            status : "account delete successfully",
            result : deleteAccount
        })

    }catch(err){
        console.log(err.message)
        return res.status(401).json({
            status : "internal error",
            result : err.message
        })
    }
    
    

}


const deleteAccounts = async(req, res) => {
    try{

        const deleteAccounts = await accountHelper.deleteAccounts()
        console.log(deleteAccounts)
        return res.status(201).json({
            status : "all account deleted successfully",
            result :deleteAccounts
        })

    }catch(err){
        console.log(err,err.message)
        return res.status(403).json({
            status : "internal error",
            result :err.message
        })
    }

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