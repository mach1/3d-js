import Model from './model.js';
import Vertex4 from '../math/vertex4.js';

export default class Cube extends Model {
  constructor(position = new Vertex4(0, 0, 0, 1), size = 1) {
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
