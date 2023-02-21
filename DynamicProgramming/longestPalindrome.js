/**
 * Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(s.length <= 1) return s;
  
  let lps = '';
  
  let dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
  
  for(let i = 0; i< s.length; i++) {
      dp[i][i] = true;
      lps = s[i];
  }
  
  for(let i = 0; i< s.length-1; i++) {
      dp[i][i+1] = s[i] === s[i+1];
      if(dp[i][i+1]) lps = s.substring(i, i+2);
  }
  
  for(let i = s.length - 1; i >=0; i--) {
      for(let j = i+2; j < s.length; j++) {
          dp[i][j] = s[i] === s[j] && dp[i+1][j-1];
          if(dp[i][j]) lps = (lps.length < j - i + 1) ? s.substring(i, j+1) : lps;
      }
  }
  return lps;
};