import Vertex4 from './vertex4.js';

var identityM = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];

export default class Matrix4 {
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
      return new Vertex4(matrix.slice(rowNumber * 4, (rowNumber * 4) + 4));
    }

    function getColumnByIndex(matrix, index) {
      var columnNumber = index % 4;

      return new Vertex4([
        matrix[columnNumber],
        matrix[columnNumber + 4],
        matrix[columnNumber + 8],
        matrix[columnNumber + 12]
      ]);
    }

    return new Matrix4(this.matrix.map((value, index, matrixArr) => {
      var row = getRowByIndex(matrixArr, index);
      var column = getColumnByIndex(matrix4.matrix, index);
      return row.dotProduct(column);
    }));
  }
}
