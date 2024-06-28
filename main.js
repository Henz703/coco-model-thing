img = "";

function preload() {
img = loadImage("dog_cat.jpg");
}


function setup(){
    canvas = createCanvas(380, 381);
    canvas.position(280,100);
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: dectcting this thing::::";
}

	
function draw() {
    image(video, 0, 0, 380, 380);
     if(status != "")
     {r = random(255);
        b = random(255);
        g = random(255);
       objectDetector.detect(video, gotResult);
       for (i = 0; i < objects.length; i++) {
       document.getElementById("status").innerHTML = "Status : Object Detected";
       document.getElementById("objct").innerHTML = "Number of objects detected are : "+ objects.length;
    
       fill(r,g,b)
       percent = floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
       noFill();
       stroke(r,g,b);
       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
     }
   }

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
  }


function gotResult(error, result){
if(error){
    console.log(error);
}
console.log(result);
}

