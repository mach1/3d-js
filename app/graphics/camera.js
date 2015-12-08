var Matrix4 = require('../math/matrix4.js');

class Camera {
  constructor(eyeV, targetV, upV) {
    this.zAxis = eyeV.subtractV(targetV);
    this.zAxis = this.zAxis.normalize();
    this.xAxis = upV.multiplyV(this.zAxis);
    this.xAxis = this.xAxis.normalize();
    this.yAxis = this.zAxis.multiplyV(this.xAxis);
    var orientation = new Matrix4([
      this.xAxis.coordinates[0], this.yAxis.coordinates[0], this.zAxis.coordinates[0], 0,
      this.xAxis.coordinates[1], this.yAxis.coordinates[1], this.zAxis.coordinates[1], 0,
      this.xAxis.coordinates[2], this.yAxis.coordinates[2], this.zAxis.coordinates[2], 0,
      0, 0, 0, 1
    ]);

    var translation = new Matrix4([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      -eyeV.coordinates[0], -eyeV.coordinates[1], -eyeV.coordinates[2], 1
    ]);
    
    this.matrix = orientation.multiplyMM(translation);
  }
}

module.exports = Camera;
