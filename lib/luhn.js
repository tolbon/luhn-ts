"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkLuhn(proposed, multiple) {
    if (multiple === void 0) { multiple = 10; }
    var sum = 0;
    var length = proposed.length;
    var bEven = false;
    for (var i = (length - 1); i >= 0; i--) {
        var digit = parseInt(proposed[i]);
        if (bEven === true) {
            digit = digit * 2;
        }
        if (digit > 9) {
            digit = digit - 9;
        }
        bEven = !bEven;
        sum += digit;
    }
    return (sum % multiple);
}
exports.checkLuhn = checkLuhn;
function isLuhnValid(proposed, multiple) {
    if (multiple === void 0) { multiple = 10; }
    var ret = (checkLuhn(proposed, multiple) === 0);
    return ret;
}
exports.isLuhnValid = isLuhnValid;
