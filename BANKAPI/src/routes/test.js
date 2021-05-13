/**
 * ====================================================
 *
 * Created by anele on 2021/05/11.
 *
 * ====================================================
 */

var express = require('express');
var router = express.Router();

// https://next.json-generator.com/
var data = require('../data/testdata.json');

router.get('/', function (req, res, next) {
    res.json(data).status(200);
});


module.exports = router;