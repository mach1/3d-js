import Camera from './camera.js';
import Vertex4 from '../math/vertex4.js';
import MatrixHelper from '../math/matrix-helper.js';

export default class Graphics {

  constructor(width, height, canvasId = 'canvas') {
    this.width = width;
    this.height = height;
    this.canvasId = canvasId;
    this.models = [];
  }

  init() {
    this.canvas = document.getElementById(this.canvasId);
    this.context = canvas.getContext('2d');
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    this.perspectiveM = new MatrixHelper().getPerspectiveM(90, this.width / this.height, 1, 10);
    this.camera = new Camera(new Vertex4(10, 1, 10, 1), new Vertex4(0, 0, 0, 1), new Vertex4(0, 1, 0, 1));

    requestAnimationFrame(this.render.bind(this));
  }

  renderLine(fromVertex, toVertex) {
    this.drawLine(fromVertex.get(0), fromVertex.get(1), toVertex.get(0), toVertex.get(1));
  }

  render(timeStamp) {
    this.clear();

    this.models[1].rotate(timeStamp / 100);

    var projectionMatrix = this.perspectiveM;
    var viewMatrix = this.camera.getMatrix();
    this.models.forEach(model => {
      // ModelViewProjection matrix
      var MVP = projectionMatrix.multiplyMM(viewMatrix).multiplyMM(model.getMatrix());
      model.getVertices().map(vertex => {
        return MVP.multiplyVertex4(vertex);
      }).map(this.toScreenCoordinates.bind(this)).forEach((vertex4, index, array) => {
        if (index % 2 === 0) {
          this.renderLine(vertex4, array[index + 1]);
        }
      });
    });
    setTimeout(() => {
      requestAnimationFrame(this.render.bind(this));
    }, 1000 / 60);
  }

  addModel(model) {
    this.models.push(model);
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
    return new Vertex4(
      vertex4.get(0) * halfWidth + halfWidth,
      vertex4.get(1) * halfHeight + halfHeight,
      vertex4.get(2),
      vertex4.get(3)
    );
  }

  getPerspectiveM() {
    return this.perspectiveM.multiplyMM(this.camera.getMatrix());
  }
}
