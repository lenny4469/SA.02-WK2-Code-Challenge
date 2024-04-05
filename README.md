# SA.02-WK2-Code-Challenge

date published: 30/03/2024
by lenny Mawira

Question 1
Write a function that accepts a string as input and swaps the case of each character. For example, if you input ‘The Quick Brown Fox’, the output should be ‘tHE qUICK bROWN fOX’.

function swapCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
    }
    return result;
  }
  
  console.log(swapCase('The Quick Brown Fox'));

  Question 2
Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7], and for -4 and 7, it should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function generateArray(start, end) {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }
  
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7));

  Question 3
To efficiently identify prime numbers and return them in the same order they appear in the input array, you can use the following function:

function filterPrimes(arr) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
  
    return arr.filter(isPrime);
  }
  
  console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  git clone git@github.com:lenny4469/SA.02-WK2-Code-Challenge.git

  Support and contact details...

Lenny Mawira

email: lenny.mawira@student.moringaschool.com

licensed by,

The content of this site is licensed under the MIT license Copyright (c) 2018.
