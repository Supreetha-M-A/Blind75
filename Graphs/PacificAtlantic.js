/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
  let rows = heights.length;
  let cols = heights[0].length;
  let pac = new Set();
  let atl = new Set();
  
  const dfs = (r,c,visited, prevHeight) => {
      if(visited.has(r + ',' + c) || r<0 || c<0 || c === cols || r === rows || heights[r][c] < prevHeight) return;
      visited.add(r + ',' + c);
      dfs(r+1,c,visited,heights[r][c]);
      dfs(r-1,c,visited,heights[r][c]);
      dfs(r,c+1,visited,heights[r][c]);
      dfs(r,c-1,visited,heights[r][c]);
  }
  
  for(let c = 0; c < cols; c++ ) {
      dfs(0, c, pac, heights[0][c]);
      dfs(rows-1, c, atl, heights[rows-1][c]);
  }
  
  for(let r = 0; r < rows; r++) {
      dfs(r,0, pac, heights[r][0]);
      dfs(r, cols-1, atl, heights[r][cols-1]);
  }
  
  let res = [];
  for(let r = 0; r < rows; r++) {
      for(let c = 0; c < cols; c++ ) {
          if(pac.has(r + ',' + c) && atl.has(r + ',' + c))
              res.push([r,c]);
      }
  }
  return res;
};