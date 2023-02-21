/**
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).

 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  let dp = {[s.length]: 1};
   
   function solve(i){
       if(dp[i] != undefined) return dp[i];
       //since 0 is not a valid mapping
       if(s[i] == "0") return 0;
       
       //each time, call to i+1 is must
       let res = solve(i+1);
       
       //call to i+2 means our current index can be broken into two..
       //i.e curr index can lie between 10 to 26. 
       //Hense, we check if i+1 exist? if yes then check if i+1 is 1? or 2?
       //if its 1 simply call skip the i+1 and call for i+2
       //but if i is 2, then i+1 must lie between 0 to 6 only.
       //also add the i+2 res to i+1 because we need to find total ways index i can be broken
       if(i+1<s.length && ( s[i] == "1" || ( s[i] == "2" && Number(s[i+1]) < 7) ) ){
           res += solve(i+2);
       }
       return dp[i] = res;
   }
   
   return solve(0);
};