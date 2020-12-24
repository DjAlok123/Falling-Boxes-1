const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  // Engine.run(engine);
  ground = new Boundary(200, height, width, 100, { isStatic: true });
  World.add(world, ground);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  ground.show();
}

