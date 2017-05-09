"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if strToTest with Luhn algorithm
 *
 * @param {string} strToTest
 * @param {number} multiple
 * @return {number} the correct number of checksum
 */
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
    var res = sum % multiple;
    if (res === 0) {
        return 0;
    }
    return multiple - (res);
}
exports.checkLuhn = checkLuhn;
function correctedLuhn(strToTest, multiple) {
    if (multiple === void 0) { multiple = 10; }
    var ret = checkLuhn(strToTest, multiple);
    if (ret !== 0) {
        var digit = parseInt(strToTest[(strToTest.length - 1)]);
        var copy = strToTest.substr(0, strToTest.length - 1);
        return copy.concat((digit + ret).toString());
    }
    return strToTest;
}
/**
 * Return false if strToTest is empty or checkLuhn not equals 0
 * @param {string} strToTest
 * @param {number} multiple
 * @return {boolean}
 */
function isLuhnValid(strToTest, multiple) {
    if (multiple === void 0) { multiple = 10; }
    if (strToTest.length === 0) {
        return false;
    }
    var ret = (checkLuhn(strToTest, multiple) === 0);
    return ret;
}
exports.isLuhnValid = isLuhnValid;
/**
 * return a clean copy of strTotest
 * @param {string} strToTest
 * @return {string}
 */
function cleanProposed(strToTest) {
    var cleanStr = String(strToTest).replace(/[^\d]/g, "");
    return cleanStr;
}
exports.cleanProposed = cleanProposed;
