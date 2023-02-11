img = "";
status = "";

function preload() {
    img = loadImage ('bedroom.jpg')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("#FFFF00");
    text("AC", 70, 70);
    noFill();
    stroke("#FFFF00");
    rect(60, 50, 320, 160);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}


function gotResults(error, results) { 
    if (error) {
        console.log(error);
    }
    console.log(results);
}