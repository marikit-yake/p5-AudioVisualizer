// Visualizing music with p5 in javascript!

var mic, soundFile;
var amplitude;
var mapMax = 1.0;


function preload(){
    // Load sound file without playing
    soundFile = loadSound("./music/Brother-Ali_Uncle-Sam_Goddamn.mp3")
}

function setup(){
    c = createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255);
    noStroke();

    mic = new p5.AudioIn();
    mic.start();


    amplitude = new p5.Amplitude();
    amplitude.setInput(mic);
    
}

function draw(){
    background(0);

    var level = amplitude.getLevel();
    text("Amplitude: " + level, 20, 20);
    text("mapMax: " + mapMax, 20, 40);


    // map ellipse height
    var ellipseHeight = map(level, 0, mapMax, height, 0);
    ellipse(width/2, ellipseHeight, 100, 100);
}