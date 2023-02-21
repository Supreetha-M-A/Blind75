/**
 * https://leetcode.com/problems/container-with-most-water/
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(arr) {
  let caps = [];
  let n = arr.length;
  let left = 0;
  let right = n-1;
  while(left < right) {
      let min = Math.min(arr[right], arr[left]);
      caps.push(min * (right - left));
      (min === arr[left])? left++: right--;
  }
  return Math.max(...caps);
};