song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
   song1 = loadSound("peter.mp3");
   song2=  loadSound("harry.mp3")
}

function setup(){
        canvas = createCanvas(600, 500);
        canvas.center(); 
    
        video = createCapture(VIDEO);
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses); 
}

function draw(){
    image(video, 0, 0, 600, 500);

   fill("#000000");
   stroke("#000000");

        if(scoreRightWrist > 0.2) { 

          circle(rightWristX,rightWristY,20);
          song2.stop();

          if(song1_status == false) {
			song1.play();
			document.getElementById("song_name").innerHTML = "Playing - Peter Pan Theme Song";
		}
	}

}

function modelLoaded() {
    console.log("poseNet Is initialized");
}

function gotPoses () 
{ 
   if(results.length > 0)
   {
    console.log(results);
	scoreLeftWrist =  results[0].pose.keypoints[10].score;
    leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}


