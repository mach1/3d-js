export default class Vertex4 {
  constructor(x = 0, y = 1, z = 1, w = 1) {
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
    var arr1 = this.asArray();
    var arr2 = vertex4.asArray();
    var result = arr1.map((i, index) => {
      return i - arr2[index];
    });
    return new Vertex4(
      result[0], result[1], result[2], 1 
    );
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
