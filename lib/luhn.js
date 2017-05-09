"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkLuhn(strToTest, multiple) {
    if (multiple === void 0) { multiple = 10; }
    var sum = 0;
    var length = strToTest.length;
    var odd = false;
    for (var i = (length - 1); i >= 0; i--) {
        var digit = parseInt(strToTest[i], 10);
        if (odd === true) {
            digit = digit * 2;
        }
        if (digit > 9) {
            digit = digit - 9;
        }
        odd = !odd;
        sum += digit;
    }
    return (sum % multiple);
}
exports.checkLuhn = checkLuhn;
function isLuhnValid(strToTest, multiple) {
    if (multiple === void 0) { multiple = 10; }
    if (strToTest.length === 0) {
        return false;
    }
    var ret = (checkLuhn(strToTest, multiple) === 0);
    return ret;
}
exports.isLuhnValid = isLuhnValid;
function cleanProposed(strToTest) {
    var cleanStr = String(strToTest).replace(/[^\d]/g, "");
    return cleanStr;
}
exports.cleanProposed = cleanProposed;
