# luhn-ts
Luhn's Algorithm write in Typescript

## Installation ##

```bash
npm install luhn-ts
# OR
yarn add luhn-ts
```

#### Node.js ####

```javascript
var luhn = require("luhn");
var cleanCreditCardNumber = luhn.cleanProposed("41111-111-1111111 1"); // should respond "4111111111111111".

var is_valid = luhn.isLuhnValid(cleanCreditCardNumber); // should respond true.
var is_valid = luhn.isLuhnValid(cleanCreditCardNumber, 10); // exactly the same as before

//French society "Laposte" use luhn validation with a multiple of 5
var is_laposteSiret_valid = luhn.isLuhnValid("35600000000048", 5); // should respond true.
```

```javascript
var luhn = require("luhn");
var checksum = luhn.computeCheckSumControl("497401423384552"); // should respond an array of checksum [3].
// because 497401423384552-3 is valid CreditCard Number

var checksum = luhn.computeCheckSumControl("3560000000004", 5); // should respond an array of checksum [3, 8].
// 3560000000004-3 is valid LuhnNumber Modulo 5;
// 3560000000004-8 is valid LuhnNumber Modulo 5;
```


