import Graphics from './graphics/graphics.js';
import Vertex4 from './math/vertex4.js';
import Camera from './graphics/camera.js';
import Cube from './models/cube.js';

var camera = new Camera(new Vertex4(0, 5, 10, 1), new Vertex4(0, 0, -1, 1), new Vertex4(0, 1, 0, 1));
var graphics = new Graphics(window.innerWidth, window.innerHeight);
graphics.init();

var cube = new Cube(new Vertex4(0, 0, 0, 1), 0.5);
graphics.addModel(cube);
