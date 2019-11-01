//Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
function spiralMatrix(n) {
    const matrix = [];
    let counter = 1,
      rowMin = 0,
      rowMax = n - 1,
      colMin = 0,
      colMax = n - 1;
  
    for (let i = 0; i < n; i++) {
      matrix.push(new Array(n).fill(0));
    }
  
    while (rowMin <= rowMax && colMin <= colMax) {
      for (let col = colMin; col <= colMax; col++) {
        matrix[rowMin][col] = counter++;
      }
      rowMin++;
      for (let row = rowMin; row <= rowMax; row++) {
        matrix[row][colMax] = counter++;
      }
      colMax--;
      for (let col = colMax; col >= colMin; col--) {
        matrix[rowMax][col] = counter++;
      }
      rowMax--;
      for (let row = rowMax; row >= rowMin; row--) {
        matrix[row][colMin] = counter++;
      }
      colMin++;
    }
  
    return matrix;
  }
  
  console.log(spiralMatrix(10));