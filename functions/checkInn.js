module.exports = function(value) {
    if (value.length !== 10 && value.length !== 12) {
        return false;
    }

    // Проверяем, что все символы являются цифрами
    if (!/^\d+$/.test(value)) {
        return false;
    }

    // Выполняем проверку контрольных цифр
    if (value.length === 10) {
        const coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8];
        const controlDigit = parseInt(value[9]);

        const sum = coefficients.reduce((acc, coeff, index) => {
            return acc + parseInt(value[index]) * coeff;
        }, 0);

        const remainder = sum % 11;
        const expectedControlDigit = remainder % 10;

        return controlDigit === expectedControlDigit;
    } else if (value.length === 12) {
        const coefficients1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
        const coefficients2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

        const controlDigit1 = parseInt(value[10]);
        const controlDigit2 = parseInt(value[11]);

        const sum1 = coefficients1.reduce((acc, coeff, index) => {
            return acc + parseInt(value[index]) * coeff;
        }, 0);

        const sum2 = coefficients2.reduce((acc, coeff, index) => {
            return acc + parseInt(value[index]) * coeff;
        }, 0);

        const remainder1 = sum1 % 11;
        const remainder2 = sum2 % 11;

        const expectedControlDigit1 = remainder1 % 10;
        const expectedControlDigit2 = remainder2 % 10;

        return controlDigit1 === expectedControlDigit1 && controlDigit2 === expectedControlDigit2;
    }

    return false;
}


