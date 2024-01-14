"use strict";


module.exports = function (day, month, year) {
    const value = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return false;
    }

    const inputDate = new Date(value);

    if (isNaN(inputDate.getTime())) {
        return false;
    }

    const currentDate = new Date();

    return inputDate < currentDate;
}