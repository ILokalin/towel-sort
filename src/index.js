module.exports = function towelSort (matrix = []) {
  const matrixLength = matrix.length;
  let result = [];

  if (matrixLength === 0) {
    return [];
  }

  if (!Array.isArray(matrix[0])) {
      return matrix;
  }

  return  result.concat(matrix.shift())
                .concat(matrixLength > 1 ? matrix.shift().reverse() : [])
                .concat(towelSort(matrix));
}
