var Vertex4 = require('../math/vertex4.js');
var Matrix4 = require('../math/matrix4.js');

class Model {
  constructor(position = new Vertex4(), size = 1) {
    this.rotationM = new Matrix4();
    this.translationM = new Matrix4([
      1, 0, 0, position.x,
      0, 1, 0, position.y,
      0, 0, 1, position.z,
      0, 0, 0, 1
    ]);
  }  

  render(graphics) {
    var tempVertices = this.vertices.map(vertex => {
      return graphics.getPerspectiveM().multiplyVertex4(vertex);
    }); 
    tempVertices.map(graphics.toScreenCoordinates.bind(graphics))
    .forEach((vertex4, index, array) => {
      if (index % 2 === 0) {
        var vertexArr = vertex4.asArray();
        graphics.drawLine(vertexArr[0], vertexArr[1], array[index + 1].asArray()[0], array[index + 1].asArray()[1]);
      } 
    });
  }
}

module.exports = Model;
