/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let hash = {};
  for(let el of nums) {
      if(hash[el]) hash[el]++;
      else hash[el] = 1;
  }
 return Object.values(hash).some((count) => count !== 1);
};
