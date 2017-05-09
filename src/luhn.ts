"use strict";

function checkLuhn(proposed:string, multiple:number = 10): number
{
    let sum:number = 0;
    let length:number = proposed.length;
    let bEven = false;

    for (let i = (length - 1); i >= 0; i--)
    {
        let digit = parseInt(proposed[i]);

        if (bEven === true)
        {
            digit = digit * 2; 
        }
        if (digit > 9)
        {
            digit = digit - 9;
        }
        bEven = !bEven;
        sum += digit;
    }

    return (sum % multiple);
}


function isLuhnValid(proposed:string, multiple:number = 10): boolean
{
    let ret = (checkLuhn(proposed, multiple) === 0);

    return ret;
}

export { isLuhnValid };
export { checkLuhn };