"use strict";

/**
 * Check if strToTest with Luhn algorithm
 * 
 * @param {string} strToTest 
 * @param {number} multiple
 * @return {number} the correct number of checksum 
 */
function checkLuhn(strToTest: string, multiple: number = 10): number
{
    let sum: number = 0;
    let length: number = strToTest.length;
    let odd: boolean = false;

    for (let i: number = (length - 1); i >= 0; i--)
    {
        let digit: number = parseInt(strToTest[i], 10);

        if (odd === true)
        {
            digit = digit * 2; 
        }
        if (digit > 9)
        {
            digit = digit - 9;
        }
        odd = !odd;
        sum += digit;
    }
    let res: number = sum % multiple;
    if (res === 0)
    {
        return 0;
    }
    return multiple - (res);
}

/**
 * Corrected strToTest
 * @param {string} strToTest 
 * @param {number} multiple
 * @return {string} valid Luhn 
 */
function correctedLuhn(strToTest: string, multiple: number = 10): string
{
    let ret: number = checkLuhn(strToTest, multiple);

    if (ret !== 0)
    {
        let digit = parseInt(strToTest[(strToTest.length - 1)]);
        let copy = strToTest.substr(0, strToTest.length - 1);
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
function isLuhnValid(strToTest: string, multiple: number = 10): boolean
{
    if (strToTest.length === 0)
    {
        return false;
    }

    let ret:boolean = (checkLuhn(strToTest, multiple) === 0);
    return ret;
}

/**
 * return a clean copy of strTotest 
 * @param {string} strToTest
 * @return {string} 
 */
function cleanProposed(strToTest: string): string
{
    let cleanStr: string = String(strToTest).replace(/[^\d]/g, "");

    return cleanStr;
}

export { isLuhnValid };
export { checkLuhn };
export { cleanProposed };