/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 var createHash = function(nums) {
  let hash = {}
  nums.forEach((key) => {
      if(!hash[key]) {
          hash[key] = 1;
      } else {
          hash[key]++;
      }
  });
  return hash;
}

var topKFrequent = function(nums, k) {
  let hash = createHash(nums);
  let res = [];
  Object.keys(hash).forEach((key) => {
      if(hash[key] >= k) res.push(key);
  });
  return res;
};