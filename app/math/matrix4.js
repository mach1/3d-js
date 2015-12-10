var Vertex4 = require('./vertex4.js');

var identityM = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];

class Matrix4 {
  constructor(matrix = identityM) {
    this.matrix = matrix;
  }

  multiplyVertex4(vertex4) {
    return this.matrix.map((i, index) => {
      return i * vertex4.asArray()[(index % 4)]
    }).reduce((vector, i, index) => {
      let vectorIndex = Math.floor(index / 4);
      vector.asArray()[vectorIndex] = vector.asArray()[vectorIndex] + i;
      return vector;
    }, new Vertex4());
  }

  multiplyMM(matrix4) {
    function getRowByIndex(matrix, index) {
      var rowNumber = Math.floor(index / 4);
      return matrix.slice(rowNumber * 4, (rowNumber * 4) + 4);
    }

    function getColumnByIndex(matrix, index) {
      var columnNumber = index % 4;
      return [
        matrix[columnNumber],
        matrix[columnNumber + 4],
        matrix[columnNumber + 8],
        matrix[columnNumber + 12]
      ];
    }

    function getDotProduct(vector1, vector2) {
      return vector1.reduce((sum, value, index) => {
        return sum + (value * vector2[index])
      }, 0);
    }

    return new Matrix4(this.matrix.map((value, index, matrixArr) => {
      var row = getRowByIndex(matrixArr, index);
      var column = getColumnByIndex(matrix4.matrix, index);
      return getDotProduct(row, column);
    }));
  }
}

module.exports = Matrix4;
