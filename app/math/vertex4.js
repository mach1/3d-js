export default class Vertex4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.coordinates = Array.isArray(x) ? x : [x, y, z, w];
    this.x = this.coordinates[0];
    this.y = this.coordinates[1];
    this.z = this.coordinates[2];
    this.w = this.coordinates[3];
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
      this.get(1) * vertex4.get(2) - this.get(2) * vertex4.get(1),
      this.get(2) * vertex4.get(0) - this.get(0) * vertex4.get(2),
      this.get(0) * vertex4.get(1) - this.get(1) * vertex4.get(0)
    );
  }

  len() {
    return Math.sqrt(Math.pow(this.get(0), 2) + Math.pow(this.get(1), 2) + Math.pow(this.get(2), 2));
  }

  dotProduct(vertex4) {
    return this.asArray().reduce((sum, value, index) => {
      return sum + (value * vertex4.get(index))
    }, 0);
  }

  normalize() {
    var len = this.len();
    return new Vertex4(this.asArray().map(i => {
      return i / len;
    }));
  }
}
