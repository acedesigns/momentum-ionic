/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

var express = require("express");
var fireDB = require('../config/database');
var firestore = fireDB.firestore();
var router = express.Router();


/*
 * ==================================================
 * Get All Accounts
 * ==================================================
 */
router.get('/:id', async  (req, res, next) => {
	
    const snapshot = await firestore.collection("accounts").get();

    let accounts = [];
    snapshot.forEach((doc) => {
        let id = doc.id;
        let data = doc.data();
        accounts.push({ id, ...data });
    });

    res.status(200).send(
		JSON.stringify(
			{accounts: accounts, time: new Date().toDateString()}
		)
	);
	
});

router.post('/', async(req, res, next) => {
	const data = req.body;
	await firestore.collection('accounts').doc().set(data);
	res.status(200).send({data:"Added your Account Successfully", code: 200});
});

module.exports = router;