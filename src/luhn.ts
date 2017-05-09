"use strict";

function checkLuhn(strToTest: string, multiple: number = 10): number
{
    let sum:number = 0;
    let length:number = strToTest.length;
    let odd = false;

    for (let i = (length - 1); i >= 0; i--)
    {
        let digit = parseInt(strToTest[i], 10);

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

    return (sum % multiple);
}


function isLuhnValid(strToTest: string, multiple: number = 10): boolean
{
    if (strToTest.length === 0)
    {
        return false;
    }

    let ret = (checkLuhn(strToTest, multiple) === 0);
    return ret;
}

function cleanProposed(strToTest: string): string
{
    let cleanStr = String(strToTest).replace(/[^\d]/g, "");

    return cleanStr;
}

export { isLuhnValid };
export { checkLuhn };
export { cleanProposed };