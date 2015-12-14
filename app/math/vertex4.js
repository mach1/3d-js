export default class Vertex4 {
  constructor(x = 0, y = 1, z = 1, w = 1) {
    if (Array.isArray(x)) {
      this.coordinates = x;
      return;
    }
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.coordinates = [x, y, z, w];
  }

  asArray() {
    return this.coordinates;
  }

  subtractV(vertex4) {
    return new Vertex4(this.asArray().map((i, index) => {
      return i - vertex4.get(index);
    }));
  }

  get(index) {
    return this.coordinates[index];
  }

  multiplyV(vertex4) {
    return new Vertex4(
      this.coordinates[1] * vertex4.coordinates[2] - this.coordinates[2] * vertex4.coordinates[1],
      this.coordinates[2] * vertex4.coordinates[0] - this.coordinates[0] * vertex4.coordinates[2],
      this.coordinates[0] * vertex4.coordinates[1] - this.coordinates[1] * vertex4.coordinates[0]
    );
  }

  len() {
    return Math.sqrt(Math.pow(this.coordinates[0], 2) + Math.pow(this.coordinates[1], 2) + Math.pow(this.coordinates[2], 2));
  }

  normalize() {
    var len = this.len();
    return new Vertex4(
      this.coordinates[0] / len,
      this.coordinates[1] / len,
      this.coordinates[2] / len,
      1
    );
  }
}
