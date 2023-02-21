/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  var res = null;
  var start = null;
  var insertIntoRes = function(list) {
      if(res) {
          res.next = list;
          res = res.next;
      }
      else {
          res = list;
          start = res;
      }

  }
  while(list1 && list2) {
      if(list1.val < list2.val ) {
          insertIntoRes(list1);
          list1 = list1.next;
      } else {
          insertIntoRes( list2);
          list2 = list2.next;
      }
  }
  if(list1){
      insertIntoRes(list1);
  } 
  if(list2) {
      insertIntoRes(list2);
  }
  return start;
};
