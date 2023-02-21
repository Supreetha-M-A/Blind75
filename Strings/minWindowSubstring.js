/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  if(s === t) return t;
  if(t.length >= s.length) return "";
  s = s.split('');
  t = t.split('');
  let start = 0;
  let maxLen = 0;
  let strs = [];
  let c = t.slice();
  for( let end = 0; end < s.length; end++ ) {
      let char = s[end];
      if(c.includes(char) && c.length === t.length) {
          start = end;
      }
      if(c.includes(char)) {
          if(c.length === t.length) {
              start = end;
          }
          c.splice(c.indexOf(char),1);
      }
      if(!c.length) {
          strs.push(s.slice(start, end + 1).join(''));
          start = end + 1;
          if(end !== (s.length - 1)) c = t.slice();
      }
  }
  if(c.length === t.length) return "";
  let minSub = s;
  let min = s.length;
  strs.forEach((str) => {
      if(str.length < min) {
          min = str.length;
          minSub = str;
      }
  })
  return minSub;
};