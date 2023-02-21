/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  //   let res =[];
  //   let i = 0;
  // var isAnagram = function(s, t) {
  //           return s.split('').sort().reverse().join('') === t.split('').sort().reverse().join('');
  //       }; 
  //   while(strs.length>0) {
  //       let temp = strs.filter((s) => isAnagram(s,strs[i]));
  //       strs = strs.filter((s) => !isAnagram(s,strs[i]));
  //       res.push(temp);
  //   }
  //   strs.forEach((str, i)=> {
  //       let temp = strs.filter((s) => isAnagram(s,str));
  //       res.push(temp);
  //   })
  //   return res;
    let hash = {};
    while(strs.length) {
        let curr = strs.pop();
        let key = curr.split('').sort().join('');
        if(!hash[key]) {
            hash[key] = [curr];
        } else {
            hash[key].push(curr);
        }
        
    }
    return Object.values(hash)
};