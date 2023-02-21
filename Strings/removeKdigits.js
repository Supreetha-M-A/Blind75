/**
 * Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
  // if(k === num.length) return "0";
  // let arr = num.split('');
  // let min = parseInt(num);
  // let minIndex = 0;
  // while((k--) && arr.length) {
  //     if(arr.length === 1) return "0";
  //     for(let i = 0; i< arr.length; i++) {
  //         let temp = arr.filter((el, ind) => ind !== i);
  //         temp = parseInt(temp.join(''));
  //         if(temp < min) {
  //             min = temp;
  //             minIndex = i;
  //         }
  //     }
  //     arr.splice(minIndex, 1);
  //     arr = '' + parseInt(arr.join(''));
  //     arr = arr.split('');
  // }
  // return arr.join('');
  let stack = [];
  if(k>=num.length) return "0";
  if( k === 0) return num;
  
  for( let char of num) {
      while((k>0) && stack.length && (+char < +stack[stack.length - 1])) {
          stack.pop();
          k--;
      }
      stack.push(char);
  }
  while((k > 0) &&  stack.length) {
        stack.pop();
      k--;
  }
  return `${BigInt(stack.join(''))}`;
};