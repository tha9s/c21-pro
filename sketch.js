var speed,weight;
var bullet,wall;
var damage;
var thickness;


function setup() {
  createCanvas(1000,1000);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52))
  bullet = createSprite(50,200,100,100);
  bullet.shapeColor = "white"
  wall = createSprite(340,200,thickness,height/2);
  thickness = Math.round(random(22,83))
  bullet.velocityX = speed


}

function draw() {
  background("white");
 

 if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
bullet.velocityX = 0;
damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
if (damage>10) {
 wall.shapeColor = ("red");
}
if(damage<10) {
  wall.shapeColor = ("green")
}



 }

  drawSprites();
}

