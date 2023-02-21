/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  if(k >= s.length) return s.length;
  
  let hash = {};
  let start = 0;
  let maxLen = 0;
  let maxRepChar = 0;
  for(let end = 0; end<s.length; end++) {
      let char = s[end];
      (hash[char])? hash[char]++ : hash[char] = 1;
      
      maxRepChar = Math.max(maxRepChar, hash[char]);
      const numCharsToReplace = end - start + 1 - maxRepChar;
      if(numCharsToReplace > k) {
          hash[s[start]]--;
          start++;
      }
      maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
  
};