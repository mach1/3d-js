import Matrix4 from './matrix4.js';

export default class MatrixHelper {
  getPerspectiveM(yFovInDegrees, aspect, n, f) {
    var angleInRadians = yFovInDegrees * Math.PI / 180;
    var a = 1 / Math.tan(angleInRadians / 2);
    return new Matrix4([
      a / aspect, 0, 0, 0,
      0, a, 0, 0,
      0, 0, -((f + n) / (f - n)), -((2 * f * n) / (f - n)),
      0, 0, -1, 0
    ]);
  }

  static getRotationMatrix(degrees) {
    var radians = degrees * Math.PI / 180.0;
    return new Matrix4([
      Math.cos(radians), 0, Math.sin(radians), 0,
      0, 1, 0, 0,
      -Math.sin(radians), 0, Math.cos(radians), 0,
      0, 0, 0, 1
    ]);
  }
}
