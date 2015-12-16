import Graphics from './graphics/graphics.js';
import Vertex4 from './math/vertex4.js';
import Camera from './graphics/camera.js';
import Cube from './models/cube.js';
import Axis from './models/axis.js';

var graphics = new Graphics(window.innerWidth, window.innerHeight);
graphics.init();

graphics.addModel(new Axis());

var cube = new Cube(new Vertex4(1, 0, 1, 1), 0.2);
graphics.addModel(cube);
