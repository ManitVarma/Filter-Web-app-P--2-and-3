noseX = 0;
noseY = 0;

function preload(){
    mustashe = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(470, 220);

    //Part 1//
    video = createCapture(VIDEO)
    video.size(400, 400)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

//Part 2//

function modelLoaded(){
    console.log("poseNet is Initialized");

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y - 10;
    }
}

function draw(){
    image(video, 0, 0, 400, 400)
    image(mustashe, noseX, noseY, 100, 50)
}

function take_snapshot(){
    save("myMustachedImg.png");
}