class Vertex4 {
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

  
}

module.exports = Vertex4;
