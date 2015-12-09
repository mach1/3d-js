var Camera = require('./camera.js');
var Vertex4 = require('../math/vertex4.js');
var MatrixHelper = require('../math/matrix-helper.js');
var Cube = require('../models/cube.js');

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
    this.camera = new Camera(new Vertex4(5, 3, 3, 1), new Vertex4(0, 0, 0, 1), new Vertex4(0, 1, 0, 1));
    this.cube = new Cube(new Vertex4(0, 0, 0, 1), 0.5);

    requestAnimationFrame(this.render.bind(this));
  }

  render(timeStamp) {
    this.clear();
    this.camera.eyeV = new Vertex4(Math.cos(timeStamp / 1000), -1, Math.sin(timeStamp / 1000), 1);
    this.cube.render(this);
    setTimeout(function() {
      requestAnimationFrame(this.render.bind(this));
    }.bind(this), 1000 / 60);
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
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
    return this.perspectiveM.multiplyMM(this.camera.getMatrix());
  }
}

module.exports = Graphics;
