// Manual Linked List Creation

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// printLinkedList(a);

// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function
// should return an array containing all values of the nodes in the linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const linkedListValues = (head) => {
//   let result = [];
//   let current = head;
//   while (current !== null){
//    result.push(current.val)
//     current = current.next
//   }
//   return result
// };

// Write a function, sumList, that takes in the head of a linked list containing
// numbers as an argument. The function
// should return the total sum of all values in the linked list.

// const sumList = (head) => {
//   let result = 0;
//   let current = head;
//   while (current !== null) {
//     result += current.val;
//     current = current.next;
//   }
//   return result;
// };

// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should
// return a boolean indicating whether or not the linked list contains the target.

// const linkedListFind = (head, target) => {
//   let result = false;
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) {
//       result = true;
//     }
//     current = current.next;
//   }
//   return result;
// };
