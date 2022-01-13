img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload()
{
    img = loadImage('guitar.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FFA500");
    text("Guitar",100, 60);
    noFill();
    stroke("#FF00FF");
    rect(100, 60,500, 250);
}
function back()
{
    window.location = "index.html";
}