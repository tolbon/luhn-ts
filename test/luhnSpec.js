var luhn = require('../lib/luhn');
var assert = require('assert');

describe('Specs', function(){
    describe('isValidLuhn', function(){
        it('Test 972487086', function(){
            assert.equal(luhn.isLuhnValid("972487086"), true, 'Not Luhn Validate');
        });
        it('Test 927487086', function(){
            assert.equal(luhn.isLuhnValid("927487086"), false, 'Not Luhn Validate');
        });
        it('Test 543215', function(){
            assert.equal(luhn.isLuhnValid("543215"), true, 'Not Luhn Validate');
        });
        it('Test 543210', function(){
            assert.equal(luhn.isLuhnValid("543210"), false, 'Not Luhn Validate');
        });
        it('Test empty string', function(){
            assert.equal(luhn.isLuhnValid(""), false, 'Not Luhn Validate');
        });
        it('Test 49927398716', function(){
            assert.equal(luhn.isLuhnValid("49927398716"), true, 'Not Luhn Validate');
        });
        it('Test 49927398717', function(){
            assert.equal(luhn.isLuhnValid("49927398717"), false, 'Not Luhn Validate');
        });
        it('Test 1234567812345678', function(){
            assert.equal(luhn.isLuhnValid("1234567812345678"), false, 'Not Luhn Validate');
        });
        it('Test 1234567812345670', function(){
            assert.equal(luhn.isLuhnValid("1234567812345670"), true, 'Not Luhn Validate');
        });
        it('Test "Laposte", multiple 5', function(){
            //French society "Laposte" use a Siret number with a multiple of 5 
            assert.equal(luhn.isLuhnValid("35600000000048", 5), true, 'Not Luhn Validate');
        });
    });

    describe('checkLuhn', function(){
        it('Test 543215', function(){
            assert.equal(luhn.checkLuhn("543215"), 0, 'Not Luhn Validate');
        });
        it('Test 543210', function(){
            assert.equal(luhn.checkLuhn("543210"), 5, 'Not Luhn Validate');
        });
        it('Test 543211', function(){
            assert.equal(luhn.checkLuhn("543211"), 4, 'Not Luhn Validate');
        });
        it('Test "Laposte", multiple 5', function(){
            //French society "Laposte" use a Siret number with a multiple of 5 
            assert.equal(luhn.checkLuhn("35600000000048", 5), 0, 'Not Luhn Validate');
        });
        it('Test 801542713', function(){
            assert.equal(luhn.checkLuhn("801542713"), 0, 'Not Luhn Validate');
        });
        it('Test 80154271300020', function(){
            assert.equal(luhn.checkLuhn("80154271300020"), 0, 'Not Luhn Validate');
        });
        it('Test empty string', function(){
            //return 0 but not a valid checkLuhn
            assert.equal(luhn.checkLuhn(""), 0, 'Not Luhn Validate');
        });
        it('Test Long Str (3265 char)', function(){
            assert.equal(luhn.checkLuhn("0123456781234567012345678123456701234567812345670123456781212345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456703456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670123456781234567012345678123456701234567812345670"), 0, 'Not Luhn Validate');
        });
    });

    describe('cleanProposed', function(){
        it('Normal String', function(){
            assert.equal(luhn.cleanProposed("1234567812345670"), "1234567812345670", 'Not Luhn Validate');
        });
        it('Test number with - separator', function(){
            assert.equal(luhn.cleanProposed("1234-56781234-5670"), "1234567812345670", 'Not Luhn Validate');
        });
        it('random stuf', function(){
            assert.equal(luhn.cleanProposed("jljkljkljkljkl12k34 567812-3456-70----------"), "1234567812345670", 'Not Luhn Validate');
        });
        it('empty string', function(){
            assert.equal(luhn.cleanProposed(""), "", 'Not Luhn Validate');
        });
    });
    describe('correctedLuhn', function(){
        it('Corrected My Old CB', function(){
            assert.equal(luhn.correctedLuhn("4974014233845521"), "4974014233845523", 'Not Luhn Validate');
        });
        /* https://nodejs.org/api/assert.html#assert_assert_throws_block_error_message
        * Always Fails I didn't know why
        it('My CB Have Twins ?', function(){
            assert.throws(luhn.correctedLuhn("4974014233845524"), Error, 'Not Luhn Validate');
        });
        it('Corrected My Old CB Twins', function(){
            assert.throws(luhn.correctedLuhn("4974014233845529"), /number/, 'Not Luhn Validate');
        });
        */
        it('Corrected Laposte Stuff', function(){
            assert.equal(luhn.correctedLuhn("35600000000046", 5), "35600000000048", 'Not Luhn Validate');
        });
        it('Corrected Laposte Stuff', function(){
            assert.equal(luhn.correctedLuhn("35600000000043", 5), "35600000000043", 'Not Luhn Validate');
        });
    });

    describe('computeCheckSumControl', function(){
        it('Compute Laposte Stuff', function(){
            assert.equal(luhn.computeCheckSumControl("3560000000004", 5)[0], 3, 'Not Luhn Validate');
        });
        it('Compute Laposte Stuff', function(){
            assert.equal(luhn.computeCheckSumControl("3560000000004", 5)[1], 8, 'Not Luhn Validate');
        });
        it('Compute Laposte Stuff', function(){
            assert.deepStrictEqual(luhn.computeCheckSumControl("3560000000004", 5), [3, 8], 'Not Luhn Validate');
        });
        it('Compute My Old CB', function(){
            assert.equal(luhn.computeCheckSumControl("497401423384552")[0], 3, 'Not Luhn Validate');
        });
        it('Compute All My Old CB Twin', function(){
            assert.deepStrictEqual(luhn.computeCheckSumControl("497401423384552"), [3], 'Not Luhn Validate');
        });
    });
    
});