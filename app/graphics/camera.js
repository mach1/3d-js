import Matrix4 from '../math/matrix4.js';

export default class Camera {
  constructor(eyeV, targetV, upV) {
    this.eyeV = eyeV;
    this.targetV = targetV;
    this.upV = upV;
    this.matrix = this.getMatrix();
  }

  getTranslation(eyeV) {
    return new Matrix4([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      -eyeV.coordinates[0], -eyeV.coordinates[1], -eyeV.coordinates[2], 1
    ]);
  }

  getOrientation(xAxis, yAxis, zAxis) {
    return new Matrix4([
      xAxis.get(0), yAxis.get(0), zAxis.get(0), 0,
      xAxis.get(1), yAxis.get(1), zAxis.get(1), 0,
      xAxis.get(2), yAxis.get(2), zAxis.get(2), 0,
      0, 0, 0, 1
    ]);

  }

  getMatrix() {
    this.zAxis = this.eyeV.subtractV(this.targetV);
    this.zAxis = this.zAxis.normalize();
    this.xAxis = this.upV.multiplyV(this.zAxis);
    this.xAxis = this.xAxis.normalize();
    this.yAxis = this.zAxis.multiplyV(this.xAxis);

    var orientation = this.getOrientation(this.xAxis, this.yAxis, this.zAxis);
    var translation = this.getTranslation(this.eyeV);
    return orientation.multiplyMM(translation);
  }
}
