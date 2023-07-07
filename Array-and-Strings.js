// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed
// version of the string where each 'char' of a group
// is repeated 'number' times consecutively. You may
// assume that the input string is well-formed
// according to the previously mentioned pattern.

// solution
// const uncompress = (s) => {
//   let result = ""
//   const numbers ="0123456789"
//   let i = 0
//   let j = 0

//   while (j < s.length) {
//     if (numbers.includes(s[j])){
//       j++
//     }else {
//       const num = Number(s.slice(i, j))
//       for (let count = 0; count < num; count++){
//         result += s[j]
//       }
//       j++
//       i = j
//     }
//   }

//   return result;

// Write a function, compress, that takes in a string as an argument. The function should return a
// compressed version of the string where
// consecutive occurrences of the same characters
//  are compressed into the number of occurrences
//   followed by the character. Single character
//   occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// compress('ccaaatsss'); // -> '2c3at3s'
// Compress String
// const compress = (s) => {
//   let result = "";
//   //   for O(n) result = []
//   let j = 0;
//   let i = 0;

//   while (j <= s.length) {
//     if (s[i] === s[j]) {
//       j += 1;
//     } else {
//       let count = j - i;
//       if (count === 1) {
//         result += s[i];
//         // for O(n) result.push(s[i])
//       } else {
//         result += count + s[i];
//         // for O(n) result.push(count, s[i])
//       }
//       i = j;
//     }
//   }

//   return result;
// //   for O(n*n) result.join("")
// };

// console.log(compress("aafsssttt"));

// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters, but in any order.

// const anagrams = (s1, s2) => {
//   let count = {};

//   for (let char of s1) {
//     if (!(char in count)) {
//       count[char] = 0;
//     //  setting keys to zero if they dont exist in count obj
//     }
//     count[char]++;
//     // incrementing keys because they are available in count obj
//   }

//   for (let char of s2) {
//     if (char in count) {
//       count[char]--;
//     //   decrementing the keys that we are looking in string 2 if it exist in the count obj
//     } else {
//       return false;
//     //   if character in the second string we are looking at does not exist then its not an anagram
//     }
//   }

//   for (let char in count) {
//     if (count[char] !== 0) {
//       return false;
//     //   after the process for s1 and s2 runs, in each key we are looking at if it doesn't equal zero then its not an anagram
//     }
//   }
//   return true;
// };

// most frequent char
// Write a function, mostFrequentChar, that takes in a
//  string as an argument. The function should return
//  the most frequent character of the string. If there
//   are ties, return the character that appears earlier
//    in the string.

// You can assume that the input string is non-empty.
// #Solution

// const mostFrequentChar = (s) => {
//   let count = {};

//   for (let char of s) {
//     if (!(char in count)) {
//       count[char] = 0;
//     }
//     count[char]++;
//   }
//   let best = null;
//   for (char in count) {
//     if (best === null || count[char] > count[best]) {
//       best = char;
//     }
//   }
//   return best;
// };

// console.log(mostFrequentChar("bookeeper"));

// Pair Sum
// Brute Force approach O(n^2)
// const pairSum = (numbers, targetSum) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(pairSum([9, 5, 6, 9], 18));

// Question
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// intersection([2,4,6], [4,2]) // -> [2,4]

// solution
// const intersection = (a, b) => {
//   let c = [];
//   const items = new Set();

//   for (let num of a) {
//     items.add(num);
//   }  adding to a new set is o(1)

//   for (let ele of b) {
//     if (items.has(ele)) {
//       c.push(ele);
//     }
//   }
//   return c;
// }; o(n+m)
