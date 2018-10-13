// FizzBuzz
// Write a program that prints the numbers from 1 to 100
// But for multiples of 3 print "Fizz" instead of the number
// For multiples of 5 print "Buzz"
// For numbers which are multiples of both 3 and 5 print FizzBuzz

// PsuedoCode

// if (theNumber is divisible by 3) and(theNumber is divisible by 5) then
// print“ FizzBuzz”

// else if (theNumber is divisible by 3) then
// print“ Fizz”

// else if (theNumber is divisible by 5) then
// print“ Buzz”

// else (theNumber is not divisible by 3 or 5)
// print theNumber

for (var i=1; i< 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz")
    else if (i % 3 == 0) console.log("Fizz")
    else if (i % 5 == 0) console.log("Buzz")
    else console.log(i)
}

// Below is another shorter variation

for(let i=0; i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz') || i)


        
    