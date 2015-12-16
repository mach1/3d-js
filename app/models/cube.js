import Model from './model.js';
import Vertex4 from '../math/vertex4.js';

export default class Cube extends Model {
  constructor(position = new Vertex4(0, 0, 0, 1), width = 1, height = 1, depth = 1) {
    super(position, 1);
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var halfDepth = depth / 2;

    this.vertices = [
      new Vertex4(-halfWidth, -halfHeight, -halfDepth, 1),
      new Vertex4(halfWidth, -halfHeight, -halfDepth, 1),

      new Vertex4(halfWidth, -halfHeight, -halfDepth, 1),
      new Vertex4(halfWidth, halfHeight, -halfDepth, 1),

      new Vertex4(halfWidth, halfHeight, -halfDepth, 1),
      new Vertex4(-halfWidth, halfHeight, -halfDepth, 1),

      new Vertex4(-halfWidth, halfHeight, -halfDepth, 1),
      new Vertex4(-halfWidth, -halfHeight, -halfDepth, 1),


      new Vertex4(-halfWidth, -halfHeight, halfDepth, 1),
      new Vertex4(halfWidth, -halfHeight, halfDepth, 1),

      new Vertex4(halfWidth, -halfHeight, halfDepth, 1),
      new Vertex4(halfWidth, halfHeight, halfDepth, 1),

      new Vertex4(halfWidth, halfHeight, halfDepth, 1),
      new Vertex4(-halfWidth, halfHeight, halfDepth, 1),

      new Vertex4(-halfWidth, halfHeight, halfDepth, 1),
      new Vertex4(-halfWidth, -halfHeight, halfDepth, 1),


      new Vertex4(-halfWidth, -halfHeight, -halfDepth, 1),
      new Vertex4(-halfWidth, -halfHeight, halfDepth, 1),

      new Vertex4(halfWidth, -halfHeight, -halfDepth, 1),
      new Vertex4(halfWidth, -halfHeight, halfDepth, 1),

      new Vertex4(halfWidth, halfHeight, -halfDepth, 1),
      new Vertex4(halfWidth, halfHeight, halfDepth, 1),

      new Vertex4(-halfWidth, halfHeight  , -halfDepth, 1),
      new Vertex4(-halfWidth, halfHeight, halfDepth, 1)
    ];
  }
}
