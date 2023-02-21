/**
 * Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let str = '';
  for(let i = 0; i<s.length; i++) {
      if(str.includes(s[i])) {
          const index = str.indexOf(s[i]) + 1;
          str = str.slice(index);
      }
      str += s[i];
      max = Math.max(max, str.length);
  }
  return max;

};