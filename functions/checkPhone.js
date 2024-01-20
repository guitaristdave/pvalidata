module.exports = function (value) {
    const regex = new RegExp('^((\\+7|7|8|)+([0-9]){10})$');
    return regex.test(value);
}

