var Model = require('./model.js');
var Vertex4 = require('../math/vertex4.js');

class Cube extends Model {
  constructor(position = new Vertex4(0, 0, 0, 0), size = 1) {
    super(position, size);
    var halfSize = size / 2;

    this.vertices = [
      new Vertex4(position.x - halfSize, position.y - halfSize, position.z - halfSize, 1),
      new Vertex4(position.x + halfSize, position.y - halfSize, position.z - halfSize, 1),

      new Vertex4(position.x + halfSize, position.y - halfSize, position.z - halfSize, 1),
      new Vertex4(position.x + halfSize, position.y + halfSize, position.z - halfSize, 1),

      new Vertex4(position.x + halfSize, position.y + halfSize, position.z - halfSize, 1),
      new Vertex4(position.x - halfSize, position.y + halfSize, position.z - halfSize, 1),

      new Vertex4(position.x - halfSize, position.y + halfSize, position.z - halfSize, 1),
      new Vertex4(position.x - halfSize, position.y - halfSize, position.z - halfSize, 1),


      new Vertex4(position.x - halfSize, position.y - halfSize, position.z + halfSize, 1),
      new Vertex4(position.x + halfSize, position.y - halfSize, position.z + halfSize, 1),

      new Vertex4(position.x + halfSize, position.y - halfSize, position.z + halfSize, 1),
      new Vertex4(position.x + halfSize, position.y + halfSize, position.z + halfSize, 1),

      new Vertex4(position.x + halfSize, position.y + halfSize, position.z + halfSize, 1),
      new Vertex4(position.x - halfSize, position.y + halfSize, position.z + halfSize, 1),

      new Vertex4(position.x - halfSize, position.y + halfSize, position.z + halfSize, 1),
      new Vertex4(position.x - halfSize, position.y - halfSize, position.z + halfSize, 1),


      new Vertex4(position.x - halfSize, position.y - halfSize, position.z - halfSize, 1),
      new Vertex4(position.x - halfSize, position.y - halfSize, position.z + halfSize, 1),

      new Vertex4(position.x + halfSize, position.y - halfSize, position.z - halfSize, 1),
      new Vertex4(position.x + halfSize, position.y - halfSize, position.z + halfSize, 1),

      new Vertex4(position.x + halfSize, position.y + halfSize, position.z - halfSize, 1),
      new Vertex4(position.x + halfSize, position.y + halfSize, position.z + halfSize, 1),

      new Vertex4(position.x - halfSize, position.y + halfSize, position.z - halfSize, 1),
      new Vertex4(position.x - halfSize, position.y + halfSize, position.z + halfSize, 1)
    ];
  }
}

module.exports = Cube;
