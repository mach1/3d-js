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
    return this.matrix.map(function(i, index) {
      return i * vertex4.asArray()[(index % 4)]
    }).reduce(function(vector, i, index) {
      var vectorIndex = Math.floor(index / 4);
      vector.asArray()[vectorIndex] = vector.asArray()[vectorIndex] + i; 
      return vector; 
    }, new Vertex4());

  }
}

module.exports = Matrix4;
