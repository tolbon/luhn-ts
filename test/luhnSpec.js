var luhn = require('../lib/luhn');
var assert = require('assert');

describe('Specs', function(){
    it('should give true = 972487086', function(){
        assert.equal(luhn.isLuhnValid("972487086"), true, 'Not Luhn Validate');
    });

    it('should give true = 927487086', function(){
        assert.equal(luhn.isLuhnValid("927487086"), false, 'Not Luhn Validate');
    });

    it('should give false = 543215', function(){
        assert.equal(luhn.isLuhnValid("543215"), true, 'Not Luhn Validate');
    });

    it('should give false = 543210', function(){
        assert.equal(luhn.isLuhnValid("543210"), false, 'Not Luhn Validate');
    });

    it('should give false = 98', function(){
        assert.equal(luhn.isLuhnValid("98"), false, 'Not Luhn Validate');        
    });

    it('should give 0 = 543215', function(){
        assert.equal(luhn.checkLuhn("543215"), 0, 'Not Luhn Validate');
    });

    it('should give 5 = 543210', function(){
        assert.equal(luhn.checkLuhn("543210"), 5, 'Not Luhn Validate');
    });
});