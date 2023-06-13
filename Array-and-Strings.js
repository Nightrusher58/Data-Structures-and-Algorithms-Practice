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
