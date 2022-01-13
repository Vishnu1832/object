img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload()
{
    img = loadImage('mobile.jfif');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FFA500");
    text("Mobile",180, 70);
    noFill();
    stroke("#FF00FF");
    rect(180, 60, 455, 250);
}

function back()
{
    window.location = "index.html";
}