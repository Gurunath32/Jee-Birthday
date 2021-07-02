noseX=0;
noseY=0;

function preload() {
    birthday_hat=loadImage("https://i.postimg.cc/9Q1DVPJc/birthdayhat.png");
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function draw() {
    image(video,0,0,300,300);
    image(birthday_hat,noseX,noseY,150,100);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x -60;
        noseY=results[0].pose.nose.y -200;
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}

function take_snapshot() {
    save("My_Filter_Image.png");
}