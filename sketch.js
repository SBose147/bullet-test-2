var bullet,speed,weight;
var wall,thickness;
var damage = 0;

function setup() 
{
  createCanvas(1600,400);

  bullet = createSprite(400, 200, 50, 5);
  bullet.shapeColor = "white";
  
  speed = random(223,321);
  bullet.velocityX = speed;

  weight = random(30,52);
  thickness = random(22,83)
  
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = (80,80,80);
}

function draw() 
{
  background(0); 
  console.log("damage =  " + damage);

  if(wall.x-bullet.x<(wall.width+bullet.width)/2)
  {
    bullet.x = wall.x-(wall.width+bullet.width)/2;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX = wall.x;
    if(damage<10)
    {
     wall.shapeColor = "green";
    }

    if(damage>10)
    {
     wall.shapeColor = "red";
    }
  }

  drawSprites();
}