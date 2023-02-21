/**
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Example 1:

Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
Example 2:

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1

Constraints:

1 <= n <= 2000
1 <= edges.length <= 5000
edges[i].length == 2
0 <= ai <= bi < n
ai != bi
There are no repeated edges.

 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
  let par = [];
  for(let i = 0; i < n; i++) par[i] = i;
  let rank = new Array(n).fill(1);
  
  const find = (n) => {
      let res = n;
      
      while(res !== par[res]) {
          par[res] = par[par[res]];
          res = par[res];
      }
      return res;
  }
  
  const union = (n1, n2) => {
      let p1 = find(n1);
      let p2 = find(n2);
      if(p1 === p2) return 0;
      if(rank[p1] > rank[p2]){
          par[p2] = p1;
          rank[p1] += rank[p2]
      } else {
          par[p1] = p2;
          rank[p2] += rank[p1]
      }
      return 1;
  }
  
  let res = n;
  for(let [n1,n2] of edges) {
      res -= union(n1,n2);
  }
  return res;
};