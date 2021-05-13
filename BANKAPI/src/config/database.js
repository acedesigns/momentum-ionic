/**
 * ====================================================
 *
 * Created by anele on 2021/05/11.
 *
 * ====================================================
 */

const firebase = require("firebase");
const config = require("./config");

const FireDataBase = firebase.initializeApp(config.firebaseConfig);

module.exports = FireDataBase;