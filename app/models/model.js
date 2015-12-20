import Vertex4 from '../math/vertex4.js';
import Matrix4 from '../math/matrix4.js';
import MatrixHelper from '../math/matrix-helper.js';

export default class Model {
  constructor(position = new Vertex4(), size = 1) {
    this.rotationM = new Matrix4();
    this.translationM = new Matrix4([
      1, 0, 0, position.x,
      0, 1, 0, position.y,
      0, 0, 1, position.z,
      0, 0, 0, 1
    ]);
  }

  getMatrix() {
    return this.rotationM.multiplyMM(this.translationM);
  }

  getVertices() {
    return this.vertices;
  }

  rotate(degrees) {
    this.rotationM = MatrixHelper.getRotationMatrix(degrees);
  }

}
