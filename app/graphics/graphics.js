var Vertex4 = require('../math/vertex4.js');
var MatrixHelper = require('../math/matrix-helper.js');

class Graphics {
 
  constructor(width, height, canvasId = 'canvas') {
    this.width = width;
    this.height = height;
    this.canvasId = canvasId;
  } 

  init() {
    this.canvas = document.getElementById(this.canvasId);
    this.context = canvas.getContext('2d');
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    this.perspectiveM = new MatrixHelper().getPerspectiveM(90, this.width / this.height, 1, 10);
  }

  drawLine(x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }

  toScreenCoordinates(vertex4) {
    var halfWidth = this.width / 2;
    var halfHeight = this.height / 2;
    var coordinates = vertex4.asArray();
    return new Vertex4(
      coordinates[0] * halfWidth + halfWidth,
      // Why is that?
      coordinates[1] * halfHeight,
      coordinates[2],
      coordinates[3]
    );
  }

  getPerspectiveM() {
    return this.perspectiveM;
  }
}

module.exports = Graphics;
