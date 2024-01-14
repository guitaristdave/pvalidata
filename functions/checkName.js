"use strict";

module.exports = function (value) {
    const regex = /^(?:[а-яА-Я](?:[' -][а-яА-Я])?)+$/;
    return regex.test(value);
}


