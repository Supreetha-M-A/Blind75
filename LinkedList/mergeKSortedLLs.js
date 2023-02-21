/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 
Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  if(!lists || !lists.length) return null;
  
  while(lists.length > 1) {
      let f = lists.shift();
      let s = lists.shift();
      lists.unshift(merge(f,s));
  }
  return lists[0];
};

var merge = function(node1,node2) {
  if(node1 == null) return node2
  if(node2 == null) return node1
  if(node1.val <= node2.val){
      node1.next = merge(node1.next, node2)
      return node1
  }else{
      node2.next = merge(node1, node2.next)
      return node2
  }
}


