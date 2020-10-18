module.exports = function check(str, bracketsConfig) {
    let tempArr = [];
    const objBrackets = Object.fromEntries(bracketsConfig);

    for (let char of str) {
        if (tempArr[tempArr.length - 1] === char) {
            tempArr.pop();
        } else if (objBrackets[char]) {
            tempArr.push(objBrackets[char]);
        } else {
            return false;
        }
    }
    return tempArr.length === 0;
}