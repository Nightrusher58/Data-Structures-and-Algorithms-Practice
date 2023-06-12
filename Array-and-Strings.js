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

// Compress String
const compress = (s) => {
  let result = "";
  //   for O(n) result = []
  let j = 0;
  let i = 0;

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      let count = j - i;
      if (count === 1) {
        result += s[i];
        // for O(n) result.push(s[i])
      } else {
        result += count + s[i];
        // for O(n) result.push(count, s[i])
      }
      i = j;
    }
  }

  return result;
  // for O(n*n) result.join("")
};

console.log(compress("aafsssttt"));
