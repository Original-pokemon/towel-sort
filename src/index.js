module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];

  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {

      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j])
      }
    } else {

      for (let l = matrix[i].length - 1; l >= 0; l--) {
        result.push(matrix[i][l])
      }
    }
  }
  return result;
}
