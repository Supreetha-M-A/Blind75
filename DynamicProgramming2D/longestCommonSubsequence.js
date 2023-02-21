/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 
Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  let dp = [];
  for (let i = 0; i <= text1.length; i++) {
      dp[i] = new Array(text2.length + 1).fill(0);
  }
  for(let i = text1.length - 1; i>=0; i--) {
      for(let j = text2.length-1; j>=0; j--) {
          if(text1[i] === text2[j]) {
              dp[i][j] = 1 + dp[i+1][j+1];
          } else {
              dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j]);
          }
      }
  }
  return dp[0][0];
};
