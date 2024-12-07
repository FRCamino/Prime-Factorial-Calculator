const prime_btn = document.getElementById('c-prime');
const factorial_btn = document.getElementById('c-factorial');


prime_btn.addEventListener('click', function(){
    let prime = document.querySelector('#u-input').value;

    if (prime === '' || prime <= 1) { // prime must be greater than 1
        alert('Enter a number greater than 1');
        return;
    }

    prime = parseInt(prime);

    // Assume the number is prime until proven otherwise
    let isPrime = true;

    // Special case for 2, as it's the only even prime number
    if (prime === 2) {
        isPrime = true;
    } else if (prime % 2 === 0) {
        isPrime = false; // All other even numbers are not prime
    } else {
        // Check odd divisors up to the square root of the number
        for (let i = 3; i <= Math.sqrt(prime); i += 2) {
            if (prime % i === 0) {
                isPrime = false; // Found a divisor, it's not prime
                break;
            }
        }
    }
    // Show if the given number is prime or not
    document.querySelector('.comment').innerHTML = `<span>${isPrime ? 'Prime Number' : 'Not a Prime Number'}</span>`;
});


factorial_btn.addEventListener('click', function(){
    let factorial = document.querySelector('#u-input').value;

    if (factorial === '' || factorial < 0) {
        alert('Factorial is not defined for negative numbers');
        return;
    }

    factorial = parseInt(factorial);

    let answer = 1;
    
    // Loop starts from 1 and multiplies up to the given number
    for (let i = 1; i <= factorial; i++) {
        answer *= i;
    }

    // Show the factorial result
    document.querySelector('.comment').innerHTML = `<span>${answer}</span>`;
});
