// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.

//!Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer year

// A positive integer, designating the year.

// Guaranteed constraints:
// 1 ≤ year ≤ 2005.

// [output] integer

// The number of the century the year is in.

function centuryFromYear(year){
    let centuryCount = 0;
     while (year > 0){
       year = year - 100;
       centuryCount = centuryCount + 1;
     }
       return centuryCount;
    }

// Given the string, check if it is a palindrome.

//! Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.

function checkPalindrome(inputString) {
    let rvStr = inputString.split('').reverse().join('');
  
    let isPalindrome = false;
  
    if (rvStr === inputString) {
      isPalindrome = true;
    }
  
    return isPalindrome;
  }

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//! Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.

function adjacentElementsProduct(inputArray) {
    let maxAdjacent = inputArray[0] * inputArray[1];
  
    for (let i = 1; i < inputArray.length - 1; i++) {
      if (getAdjacent(inputArray, i) > maxAdjacent) {
        maxAdjacent = getAdjacent(inputArray, i);
      }
    }
  
    return maxAdjacent;
  }
  
  function getAdjacent(inputArray, index) {
    return inputArray[index] * inputArray[index + 1];
  }

//   Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.



// Example

// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n < 104.

// [output] integer

// The area of the n-interesting polygon.

function shapeArea(n) {
    init = 1;
    return init + (n * ((n - 1) * 2));
  }
  console.log(shapeArea(4));

//  Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer statues

// An array of distinct non-negative integers.

// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
// 0 ≤ statues[i] ≤ 20.

// [output] integer

// The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes
function makeArrayConsecutive2(statues) {
    statues=statues.sort((a,b)=>a-b);
    return(statues[statues.length-1]-statues[0]+1-statues.length);
 }

//  Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

function almostIncreasingSequence(sequence) {
    var found = false;
    for (var i=0;i<sequence.length;i++) {
      if(sequence[i] <= sequence[i-1]) {
        if(found) {
          return false;
        }
        found = true;
        
        if(i === 1 || i + 1 === sequence.length) {
          continue;
        }
        else if (sequence[i] > sequence[i-2]) {
          sequence[i-1] = sequence[i-2];
        }
        else if(sequence[i-1] >= sequence[i+1]) {
          return false;
        }
      }
    }
    return true;
  }

//  After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

// Example

// For

// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]
// the output should be matrixElementsSum(matrix) = 9.

function matrixElementsSum(matrix) {
    for(let i = 0; i < matrix.length; i++) {
      for(let x = 0; x < matrix[0].length; x++){
        if (matrix[i][x] === 0 && i < matrix.length - 1) {
          matrix[i + 1][x] = 0;
        }
      }
    }
  
    return matrix.reduce((prev, current) => {
      current.forEach(el => {
        prev += el
      })
  
      return prev
    }, 0)
  }

// We need to loop over each array first.
// If element === 0 and the second array exist we put this element as 0
// We sum all the value to a single one

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    let longest = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest) {
            longest = inputArray[i].length
        }
    }

    return inputArray.filter(el => el.length === longest);
}

// We need first the length number of the biggest number. I do this by looping each element and get the bigger one
// We filter each element to get those who have same length as the biggest one

// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    let amount = 0;

    const arr1 = s1.split('');
    const arr2 = s2.split('');

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
            amount += 1
        }
    }

    return amount
}

// First split both string in array.
// Loop over the first one and get the index of it if this match
// if match add 1 to the amount variable and remove the index this way we dont count in double

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be isLucky(n) = true; For n = 239017, the output should be isLucky(n) = false.

function isLucky(n) {
    const arr = String(n).split('');

    const firstHalf = sum(arr.slice(0, arr.length / 2));
    const secondHalf = sum(arr.slice(arr.length / 2));

    return firstHalf === secondHalf;
}

function sum(arr) {
  return arr.reduce((prev, current) => {
    const _current = parseInt(current, 0);

    return prev += _current
  }, 0)
}

// Split the n to an array and make sure this is a String first.
// Create a function sum who take and array and use reduce to get a sum, make all element a number first before addition them.
// return true or false if both value equal

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
    const nums = a.filter(el => el !== -1).sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] === -1) {
        result.push(-1);
      } else {
        result.push(nums[0]);
        nums.splice(0, 1);
      }
    }
  
    return result;
  }

//   We create an array who have each number who is not -1 plus also this one get sort already
//   We create an array who gonna receive the order we need
//   we loop over the argument a and we check if this is === -1.
//   if this is equal we push -1 right away
//   if not we push the first element in the nums array who is the filter one and after we remove this element from this one. So we dont have in double.

// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.

// [output] string

// Return inputString, with all the characters that were in parentheses reversed.

function reverseInParentheses(s) {
    while (true) {
        let c = s.indexOf(")");
        
        if (c === -1) {
            break;
        }
        
        let o = s.substring(0, c).lastIndexOf("(");
        
        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);
            
        s = start + middle + end;
    }
    
    return s;
}

// ================================= //

function reverseInParentheses(s) {
    if (s.includes('(')){
        return reverseInParentheses(reverseOnce(s));
    } else {     
        return s;
    }
}

function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    console.log(subStr);
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}

// ================================= //

function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.

// [output] string

// Return inputString, with all the characters that were in parentheses reversed.