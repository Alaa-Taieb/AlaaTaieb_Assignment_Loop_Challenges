// This function takes a single argument "val" which represents the upper limit of the range of odd numbers to be printed to the console.
// The function uses a for loop to iterate through the range of numbers starting at 1 and ending at the value of "val"
// Instead of incrementing "i" by 1 each iteration, the loop increments "i" by 2, allowing it to only loop through odd numbers.
function printOdds(val) {
    for (var i = 1; i <= val; i += 2) {
        console.log(i);
    }
}


// This function takes a single argument "val" which represents the upper limit of the range of numbers to be printed to the console.
// The function uses a for loop to iterate through the range of numbers starting at the value of "val" and ending at 0
// The for loop decrements the variable i by 1 each iteration
// The function uses a variable "decrement" to keep track of the decrement value
// The function uses an if statement to check whether the current number is a multiple of 3
// If it is, the decrement value is changed to 3
// the current number is printed and the continue statement is used to jump to the next iteration
/* 
    Since the modulo operation is quite expensive we only want to use it when we don't know if i is divisible by 3 
    A simple check on the decrement variable would be enough to ensure that every number from now on will be divisible by 3
    because any multiplier of 3 - 3 would result in a number divisible by 3
*/
// If the current number is not a multiple of 3, it is printed to the console
/* 
    This function is optimized because it only print out numbers that are multiple of 3, by using a variable "decrement" to keep track 
    of the decrement value, when the current number is a multiple of 3 the function changes the decrement value to 3 , this means that 
    the function will decrement the variable i by 3 in the next iterations and it will skip all numbers that are not multiples of 3 
    which decrease the number of iterations and makes the function more efficient.
*/
function decreasingMultiplesOf3(val) {
    var decrement = 1;
    for (var i = val; i > 0; i -= decrement) {
        if (decrement == 1) {
            if (i % 3 == 0) {
                decrement = 3;
                console.log(i);
            }
            continue;
        }
        console.log(i);
    }
}

// It's clear from the sequence that the difference between each value is 1.5, so we use 1.5 to decrement i which starts from 4 
function printTheSequence(start , end){
    for(var i = start ; i >= end ; i-= 1.5)
        console.log(i);
}

/* printTheSequence(4 , -3.5); */

// Since (Start + End) => (Start + i) + (End - i)
// We can use i to iterate through this range but only End/2 times because we are traversing this range simultaneously from both ends
// But there is no need to traverse this range because no matter what i is  (start + i) + (end - i) = start + end
// So we can simply add (Start + End) End/2 times or just multiply (Start + End) by End/2 
function Sigma(start , end){
    var sum = (start + end) * end/2;
    console.log(sum);
}


// This function takes a single argument "val" 
// It calculates the factorial of the given number
// The function uses recursion to calculate the factorial
// The base case is when val equals 1, in this case the function returns val
// In all other cases the function calls itself with the value val-1 
// the function then return the result of multiplying the returned value by val
function factorial(val){
    if(val == 1)
        return val;
    return factorial(val - 1) * val;
}

/* ------------------------------- TESTING SPACE -------------------------------------- */

/*                          Please uncomment then execute the function                  */

/* Print Odds between 1-20 */
/* printOdds(20); */


/* Decreasing Multiples of 3 */
/* decreasingMultiplesOf3(100); */


/* Print the sequence */
/* printTheSequence(4 , -3.5); */


/* Sigma */
/* Sigma(1 , 100); */


/* Factorial */
/* console.log(factorial(12)); */