"use strict";

const checkName = require('./functions/checkName');
const checkNum = require('./functions/checkNum');
const checkSerie = require('./functions/checkSerie');
const checkBirthday = require('./functions/checkBirthday');


module.exports = {
    checkName: checkName,
    checkNum: checkNum,
    checkSerie: checkSerie,
    checkBirthday: checkBirthday
}
