var fizzBuzz = function() {

	//loop 100 times, starting from the number 1 (which is 1)
	for(var i=1; i<=100; i++) {

		// if divisble by 3 and 5 print fizzbuzz
		if(i%3 ===0 && i%5 === 0) {
			console.log('FizzBuzz');

		} else if (i%3 === 0) { // if only divisble by 3 print fizz
			console.log('Fizz');
		} else if (i%5 === 0) { // if only divisible by 5 print buzz
			console.log('Buzz');
		} else {
			console.log(i); // if not divisible by either, console log i, the regular number
		}
	}
};

fizzBuzz(); //call the function