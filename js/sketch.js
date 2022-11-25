var x, y, r, speed;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = height/2;
    r = 200;
    speed = 5;
}

function draw() {
    background(220);

    speed = map(mouseY, 0, height, 1, 20);

    y = y + speed;

    if(y >= height + r/2){
        y = - r/2
    }

    fill(255, 255, 255);
    ellipse(x, y, r);
}