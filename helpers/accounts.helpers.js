
const { AccountModel } = require('./../model/accounts.model')

const createAccount = async (account) => {

    try {
        return await AccountModel.insertOne(account)


    } catch (error) {
        throw new Error(error.message)
    }
}


const getAccountById = async (_id) => {
    try {
        if (_id) {
            const accountData = await AccountModel.findOne({ _id })



            return accountData

        }

    } catch (error) {
        throw new Error(error.message)
    }

}

/// express validator for extra 


const getAccounts = async() => {   //////   should be account  same like other

    try{
        const accounts = await AccountModel.find()

        return accounts



    }catch(err){
        throw new Error(err.message)
    }


}





const updateAccountById = async(accountRecord, _id) => {
    try {

    const updateAccount = await AccountModel.updateOne(
            {_id},
            {$set:accountRecord},
            {upsert:false}

           
        )
         return updateAccount

       
        


    } catch (error) {
        throw new Error(error.message)
    }

}


const deleteAccountById = async (_id) => {   //////   should be account  same like other

  const deleteAccount =   await AccountModel.deleteOne({ _id })

  
return deleteAccount

}

const deleteAccounts = async () => {   

  const deleteAccount =   await AccountModel.deleteMany()

  
return deleteAccount

}


const updateAccounts = async(accountRecord) => {
    try {

    const updateAccount = await AccountModel.updateMany
    (
            // {_id},
            {$set:accountRecord},
            {upsert:false}

           
        )
         return updateAccount

       
        


    } catch (error) {
        throw new Error(error.message)
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


