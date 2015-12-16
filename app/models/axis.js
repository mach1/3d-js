import Model from './model.js';
import Vertex4 from '../math/vertex4.js';

export default class Axis extends Model {

  constructor() {
    super();
    this.vertices = [
      new Vertex4(-2, 0, 0, 1),
      new Vertex4(2, 0, 0, 1),

      new Vertex4(0, -2, 0, 1),
      new Vertex4(0, 2, 0, 1),

      new Vertex4(0, 0, -2, 1),
      new Vertex4(0, 0, 2, 1)
    ];   
  }
}
