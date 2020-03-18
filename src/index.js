
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  let sortedMatrixArray = [];
  // for(let i =0; i < matrix.length; i++) sortedMatrixArray = sortedMatrixArray.concat( matrix[i])
  // console.log(sortedMatrixArray)
  
  for (let i = 0; i < matrix.length; i++) {
    sortedMatrixArray = sortedMatrixArray.concat(i % 2 === 0 ? matrix[i].sort((a, b) => a - b) : matrix[i].sort((a, b) => b - a));
  }
  return sortedMatrixArray;
}
