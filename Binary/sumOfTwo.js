/**
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
  // while(b!=0) {
  //     let temp = a;
  //     a = a ^ b;
  //     b = (temp & b) << 1;
  // }
  // return a;
  if(a === 0) return b;
  else if(b=== 0) return a;
  else return getSum( a^b , (a&b)<<1);
};