"use strict";

const checkName = require('./functions/checkName');
const checkNum = require('./functions/checkNum');
const checkSerie = require('./functions/checkSerie');
const checkBirthday = require('./functions/checkBirthday');
const checkInn = require('./functions/checkInn');
const checkPhone = require('/functions/checkPhone')

module.exports = {
    checkName: checkName,
    checkNum: checkNum,
    checkSerie: checkSerie,
    checkBirthday: checkBirthday,
    checkInn: checkInn,
    checkPhone: checkPhone
}


