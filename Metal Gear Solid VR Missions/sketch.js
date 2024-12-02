// Metal Gear Solid VR Mission (GBC)
// Ethan Spearey
// 2024-11-21

let sprites;
let playerX, playerY;

function preload()
{
  for (let i = 1; i < 8; i++)
  {
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run North" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run North-East" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run East" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run South-East" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run South" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run South-West" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run West" + i + ".png"));
    sprites.push(loadImage("assets/New Sprite Frames/Solid Snake Run North-West" + i + ".png"));
  }
}

function setup()
{
  createCanvas(160, 144);
}

function draw()
{
  background(255);
}

function keyPressed()
{
  if(keyCode === 87) //W Key
  {
    playerY++;
  }
  if(keyCode === 65) //A Key
  {
    playerX--;
  }
  if(keyCode === 83) //S Key
  {
    playerY--;
  }
  if(keyCode === 68) //D Key
  {
    playerX++;
  }
}