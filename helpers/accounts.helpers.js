let accountList = []
const { accountModel } = require('./../model/accounts.model')

const createAccount = async (account) => {

    try {
        if (account.accountId && !accountList.some(acnt => acnt.accountId == account.accountId)) {

            await accountModel.insertOne({
                transactionType: "UPI",
                transactionDate: 14,
                accountName:"Gyan",
                amount: 15000,
                currency: "INR",
                paymentMethod:"UPI",
                transactionMode: "NA",
                InvoiceId:421
            })

            console.log('hellow')
            accountList.push(account)


            return account

        }


        else {
            return "account not created"
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


const getAccountById = async(accountId) => {
    try {
        if (accountId) {
            const idAccount = parseInt(accountId)

            await accountModel.findOne({accountName:"Gyan"})

            let account = accountList.find((acnt) => acnt.accountId === idAccount)



            if (account) {

                return account

            }

            else {
                return "account data not fetch"
            }

        }

    } catch (error) {
        throw new Error(error.message)
    }

}


const getAccounts = (colleges) => {



}





const updateAccountById = (account, accountId) => {
    try {
        if (account?.accountId && accountId) {
            console.log('hellooooooo')

            accountList = accountList.map((acnt) => {
                if (acnt.accountId == accountId) {
                    return {
                        ...account,
                        accountId: acnt.accountId
                    }

                }
                return acnt


            })

            return "account data successfully updated"



        }
        else {
            return "account data not updated"
        }

    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createAccount,
    getAccountById,
    getAccounts,
    updateAccountById
}


