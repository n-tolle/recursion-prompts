/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0){
    return null;
  }
  if (n === 0){
    return 1;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0){
    return 0;
  } else {
    let result = array[0];
    let newArray = array.slice(1);
    return result + sum(newArray);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0){
    return 0;
  } else {
    let flatArray = array.flat(Infinity);
    let result = flatArray[0];
    let newArray = flatArray.slice(1);
    return result + arraySum(newArray);
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0){
    return true;
  }
  if (n === 1){
    return false;
  }
  if (n < 0){
    n *= -1;
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n <= 1 && n >= -1){
    return 0;
  } else {
    if (n < 0){
      result = n + 1;
      return result + sumBelow(n + 1);
    } else {
      result = n - 1;
      return result + sumBelow(n - 1);
    }
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === (y - 1) || x === y || (x - 1) === y){
    return [];
  } else if (x < y) {
    let nums = [];
    nums.push(x + 1);
    return nums.concat(range(x + 1, y));
  } else {
    let nums = [];
    nums.push(x - 1);
    return nums.concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){
    return 1;
  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    base = (1 / base);
    exp *= -1;
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1){
    return true;
  } else if (n < 1){
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0){
    return '';
  } else {
    return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1){
    return true;
  } else {
    string = string.split(' ').join('').toLowerCase();
    if (string[0] === string[string.length - 1]){
      return palindrome(string.substring(1, string.length -1));
    } else {
      return false;
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  let xNeg = false;
  if (x < 0){
    xNeg = true;
    x = -x;
  }
  if (y < 0){
    y = -y;
  }
  if (x < y){
    if (xNeg){
      return -x;
    } else {
      return x;
    }
  }
  if (y === 0){
    return NaN;
  }
  let remainder = x - y;
  if (remainder < y){
    if (xNeg){
      return -remainder;
    } else {
      return remainder;
    }
  } else {
    if (xNeg){
      return modulo(-remainder, y);
    } else {
      return modulo(remainder, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0){
    return 0;
  } else if ((x < 0 && y < 0) || (x > 0 && y < 0)){
    x = -x;
    y = -y;
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if ((x < 0 && y < 0) || (x > 0 && y < 0)){
    x = -x;
    y = -y;
  }
  if (y === 0){
    return NaN;
  }
  if (x === 0){
    return 0;
  }
  let count = 0;
  if (x < 0){
    if (x + y > 0){
      return 0;
    } else if (x + y === 0){
      count--;
      return count;
    } else {
      count--;
      return count + divide(x + y, y);
    }
  } else {
    if (x - y < 0){
      return 0;
    } else if (x - y === 0){
      count++;
      return count;
    } else {
      count++;
      return count + divide(x - y, y);
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0){
    return null;
  }
  if (x === 0){
    return y;
  }
  if (y === 0){
    return x;
  }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0){
    return true;
  } else {
    if (str1[0] === str2[0]){
      return compareStr(str1.substring(1), str2.substring(1));
    } else {
      return false;
    }
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  let arr = [];
  if (str.length === 0){
    return arr;
  } else {
  arr.push(str[0]);
  return arr.concat(createArray(str.substring(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  let reversedArr = [];
  if (array.length === 0){
    return array;
  } else {
    reversedArr.push(array[array.length - 1]);
    return reversedArr.concat(reverseArr(array.slice(0, array.length - 1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let arr = [];
  if (length === 0){
    return arr;
  } else {
    arr.push(value);
    return arr.concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  let arr = [];
  if (n === 0){
    return arr;
  } else {
    if (n % 3 === 0 && n % 5 === 0){
      arr.unshift('FizzBuzz');
    } else if (n % 3 === 0){
      arr.unshift('Fizz');
    } else if (n % 5 === 0){
      arr.unshift('Buzz');
    } else {
      arr.unshift(String(n));
    }
    return fizzBuzz(n - 1).concat(arr);
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  let count = 0;
  if (array.length === 0){
    return count;
  } else {
    if (array[0] === value){
      count++;
    }
  }
  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let mapped = [];
  if (array.length === 0){
    return mapped;
  } else {
    mapped.push(callback(array[0]));
    return mapped.concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let currentKey in obj){
    if (currentKey === key){
      count++;
    }
    if (typeof obj[currentKey] === 'object'){
      count += countKeysInObj(obj[currentKey], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (let currentKey in obj){
    if (typeof obj[currentKey] === 'object'){
      count += countValuesInObj(obj[currentKey], value);
    } else if (obj[currentKey] === value){
      count++;
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey){
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  let startArr = [0, 1];
  if (n < 1){
    return null;
  } else if (n === 1){
    return startArr;
  } else {
    for (let i = 2; i < n; i++){
      startArr.push(startArr[i - 1] + startArr[i - 2]);
    }
    return fibonacci(n - 1).concat([startArr[n - 1] + startArr[n - 2]]);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  let count = 0;
  if (n < 0){
    return null;
  } else if (n <= 1){
    return n;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  let capWords = [];
  if (array.length > 0){
    capWords.push(array[0].toUpperCase());
    return capWords.concat(capitalizeWords(array.slice(1)));
  }
  return capWords;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  let firstCaps = [];
  if (array.length > 0){
    let chars = array[0].split('');
    chars[0] = chars[0].toUpperCase();
    firstCaps.push(chars.join(''));
    return firstCaps.concat(capitalizeFirst(array.slice(1)));
  }
  return firstCaps;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0){
      sum += obj[key];
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  let flatArr = [];
  for (let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      flatArr = flatArr.concat(flatten(array[i]));
    } else {
      flatArr.push(array[i]);
    }
  }
  return flatArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0){
    return obj;
  } else if (obj[str[0]] === undefined){
    obj[str[0]] = 1;
    return letterTally(str.substring(1), obj);
  } else {
    obj[str[0]]++;
    return letterTally(str.substring(1), obj);
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  let arr = [];
  if (list.length === 0){
    return arr;
  }
  arr.push(list[0]);
  let index = 1;
  for (let i = 1; i < list.length; i++){
    if (list[0] === list[i]){
      index++;
    } else {
      return arr.concat(compress(list.slice(index)));
    }
  }
  return arr;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  let augArr = [];
  if (array.length === 0){
    return [];
  } else {
    augArr.push(array[0]);
    augArr[0].push(aug);
    return augArr.concat(augmentElements(array.slice(1), aug));
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let arr = [];
  if (array.length === 0){
    return [];
  } else {
    let index = 1;
    arr.push(array[0]);
    if (array[0] === 0){
      for (let i = 1; i < array.length; i++){
        if (array[i] === 0){
          index++;
        } else {
          break;
        }
      }
    }
    return arr.concat(minimizeZeroes(array.slice(index)));
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  let altArr = [];
  if (array.length === 0){
    return [];
  } else if (array.length === 1){
    if (array[0] >= 0){
      altArr.push(array[0]);
    } else {
      altArr.push(-array[0]);
    }
    return altArr;
  } else {
    if (array[0] >= 0){
      altArr.push(array[0]);
    } else {
      altArr.push(-array[0]);
    }
    if (array[1] <= 0){
      altArr.push(array[1]);
    } else {
      altArr.push(-array[1]);
    }
    return altArr.concat(alternateSign(array.slice(2)));
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0){
    return '';
  }
  let numStr = '';
  let numArr = str.split(' ');
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (isNaN(Number(numArr[0]))){
    numStr += numArr[0];
  } else {
    numStr += nums[Number(numArr[0])];
  }
  if (numArr.length > 1){
    numStr += ' ';
  }
  return numStr + numToText(numArr.slice(1).join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined){
    min = 0;
  }
  if (max === undefined){
    max = array.length - 1;
  }
  if (min === max){
    if (array[min] === target){
      return min;
    } else {
      return null;
    }
  }
  let index = Math.floor((max + min) / 2);
  if (array[index] === target){
    return index;
  } else if (array[index] > target){
    max = index - 1;
    if (max < 0){
      max = 0;
    }
  } else {
    min = index + 1;
    if (min > array.length - 1){
      min = array.length - 1;
    }
  }
  return binarySearch(array, target, min, max);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
