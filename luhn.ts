"use strict";

function checkLuhn(proposed:string, multiple:number = 10): number
{
    let sum:number = 0;
    let length:number = proposed.length;

    for (let i = (length - 1); i >= 0; i--)
    {
        let digit = parseInt(proposed[i]);

        if (digit)
        {
            digit = digit * 2; 
        }
        if (digit > 9)
        {
            digit = digit - 9;
        }
        sum += digit;
    }

    return (sum % multiple);
}


function is_luhn_valid(proposed:string, multiple:number = 10): boolean
{
    return (checkLuhn(proposed, multiple)) === 0;
}