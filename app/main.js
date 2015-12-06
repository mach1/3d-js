var Graphics = require('./graphics/graphics.js');
var Cube = require('./models/cube.js');
var Vertex4 = require('./math/vertex4.js');

var graphics = new Graphics(window.innerWidth, window.innerHeight);
graphics.init();

var cube = new Cube(new Vertex4(0, 0, 0, 0), 0.2);
cube.render(graphics);
