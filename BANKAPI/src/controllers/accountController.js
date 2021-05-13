/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

var firebaseDB =  require("../config/database"),
	Account	 = require("../models/account"),
	firestore	= firebaseDB.firestore();

const createAccount = async function (req, res, next) {
	try {
		let data =  req.boby;
		await firestore.collection("accounts").doc().set(data);
		res.send({code: 201, message: "Account CCreated Successfully"}).status(201)
	} catch (error) {
		res.send(error.message).status(400);
	}
};

const getAllAccounts = async function (req, res, next) {
    try {
        const accounts  = await firestore.collection('accounts');
        const data      = await accounts.get();
        const accountsArray = [];

        if(data.empty) {
            res.status(404).send('No student record found');
        } else {
            data.forEach(doc => {
                const account = new Account(
                    doc.id,
                    doc.data().account_number,
                    doc.data().account_balance,
                    doc.data().account_overdraft,
                    doc.data().account_type
                );
                accountsArray.push(account);
            });
            res.send(accountsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


module.exports = {
	createAccount,
    getAllAccounts
};