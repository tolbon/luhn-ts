var Benchmark = require('benchmark');
var luhn = require('../lib/luhn');

var suite = new Benchmark.Suite;

suite.add('test', function (){
    luhn.isLuhnValid("4984421209470251", 10);
});
suite.add('luhnCheckV1', function (){
    luhnCheckV1("4984421209470251");
});
suite.add('luhnCheckV2', function (){
    luhnCheckV2("4984421209470251");
});
suite.add('luhnCheckFast', function (){
    luhnCheckFast("4984421209470251");
});
suite.add('luhnCHeckFast2', function (){
    luhnCheckFast2("4984421209470251");
});
suite.on('cycle', function(event) {
  console.log(String(event.target));
});
suite.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
});

suite.run();



function luhnCheckV1(str)
  {
  	var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  	var ca, sum = 0;
  	var len = str.length;
  	var mul = (len&1);
  	while (len--)
  	{
  		ca = parseInt(str.charAt(len),10);
  		sum += (mul^=1) ? luhnArr[ca] : ca;
  	};
  	return (sum%10 === 0) && (sum > 0);
  };
  
  function luhnCheckV2(str)
  {
  	var ca, sum = 0;
  	var len = str.length;
  	var mul = len&1;
  	while (len--)
  	{
  		ca = parseInt(str.charAt(len),10) | 0;
  		sum += mul ? ca : ca < 9 ? ca*2%9 : 9;
  		mul ^= 1; // 1 or 0 swich.
  	};
  	return (sum%10 === 0) && (sum > 0);
  };

 function luhnCheckFast(luhn)
  {                                  
      var ca, sum = 0, mul = 0;
      var len = luhn.length;
      while (len--)
      {
          ca = (parseInt(luhn.charAt(len),10) << mul) | 0;
          sum += ca - (-(ca>9))|9
          // 1 <--> 0 toggle.
          mul = 1 - mul;
      };
      return (sum%10 === 0) && (sum > 0);
  };
  
  function luhnCheckFast2(luhn)
  {
      var ca, sum = 0, mul = 1;
      var len = luhn.length;
      while (len--)
      {
          ca = parseInt(luhn.charAt(len),10) * mul;
          sum += ca - (-(ca>9))|9
          // 1 <--> 2 toggle.
          mul = 3 - mul;
      };
      return (sum%10 === 0) && (sum > 0);
  };