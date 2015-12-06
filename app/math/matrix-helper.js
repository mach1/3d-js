var Matrix4 = require('./matrix4.js');

class MatrixHelper {
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
}

module.exports = MatrixHelper;
