/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  // let max = nums[0];
  // for(let i =1; i<nums.length; i++) {
  //     nums[i] = Math.max(nums[i] * nums[i-1], nums[i]);
  //     max = Math.max(nums[i], max);
  // }
  // return max;
  
  let curr = 1;
  let max = -Infinity;
  for(let i = 0;i<nums.length; i++) {
      curr = curr * nums[i];
      max = Math.max(max, curr);
      if(curr === 0) curr = 1;
  }
  curr = 1;
  for(let i = nums.length-1; i>=0; i--) {
      curr = curr * nums[i];
      max = Math.max(max, curr);
      if(curr === 0) curr = 1;
  }
  return max
};