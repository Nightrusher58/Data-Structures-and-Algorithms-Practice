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

// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should
// return the value of the linked list at the specified index.

// const getNodeValue = (head, index) => {
//   let count = 0;
//   let result = null;
//   let current = head;
//   while (current !== null) {
//     if (index === count) {
//       result = current.val;
//     }
//     count++;
//     current = current.next;
//   }
//   return result;
// };

// Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in
// the linked list in-place and return the new head of the
// reversed linked list.

// const reverseList = (head) => {
//   let current = head;
//   let prev = null;
//   while (current !== null) {
//     const next = current.next; //stores initial next arrow so its not lost
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };

// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked
// list by alternating nodes. If one of the linked lists is longer than
// the other, the resulting list should terminate with the remaining nodes.
//  The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// const zipperLists = (head1, head2) => {
//   let tail = head1
//   let current1= head1.next
//   let current2 = head2
//   let count = 0
//   while (current1 !== null && current2 !== null){
//     if (count % 2 === 0){
//       tail.next = current2
//       current2 = current2.next
//     }else {
//       tail.next = current1
//       current1 = current1.next
//     }
//     tail = tail.next
//     count += 1

//   }
//   if (current1 !== null) tail.next = current1
//   if (current2 !== null) tail.next = current2
//   return head1
// };
