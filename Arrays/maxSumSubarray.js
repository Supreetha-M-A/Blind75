/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let max = nums[0];
  for(let i = 1; i<nums.length; i++) {
      nums[i] = Math.max(nums[i] + nums[i-1], nums[i]);
      max = Math.max(max, nums[i]);
  }
  return max;
};