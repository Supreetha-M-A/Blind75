/**
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 
Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  let s = head;
   let f = head;
   while(f && f.next) {
       s = s.next;
       f = f.next.next;
   }
   let fh = head;
   let sh = s.next;
   s.next = null;
   sh = reverse(sh);
   let t1 = fh;
   let t2 = sh;
   while(fh && sh) {
       let t1 = fh.next;
       let t2 = sh.next;
       fh.next = sh;
       sh.next = t1;
       fh = t1;
       sh = t2;
   }
   return head;
};

var reverse = function(head) {
   let prev = null;
   let curr = head;
   while(curr){
       let nex = curr.next;
       curr.next = prev;
       prev = curr;
       curr = nex;
   }
   return prev;
}