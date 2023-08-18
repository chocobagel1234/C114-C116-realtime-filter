//eye variables for defining lenses?
leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;
//nose variables for positioning y
noseX = 0;
noseY = 0;

function preload() {
    sunglasses = loadImage("https://i.postimg.cc/9QtYfK6Z/Sunglasses-Filter-1.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("PoseNet is Initialized!")
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(sunglasses, noseX, noseY);
}

function take_snapshot() {
    save("myFilterImage.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        noseX = results[0].pose.nose.x - 70;
        noseY = results[0].pose.nose.y - 60;
        console.log(results);
        console.log("Left eye x = " + leftEyeX);
        console.log("Left eye y = " + leftEyeY);
        console.log("Right eye x = " + rightEyeX);
        console.log("Right eye y = " + rightEyeY);
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}