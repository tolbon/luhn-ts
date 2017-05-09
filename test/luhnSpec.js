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
    });

    describe('checkLuhn', function(){
        it('Test 543215', function(){
            assert.equal(luhn.checkLuhn("543215"), 0, 'Not Luhn Validate');
        });
        it('Test 543210', function(){
            assert.equal(luhn.checkLuhn("543210"), 5, 'Not Luhn Validate');
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

});