function setup() {
    video = createCaputre(VIDEO);
    video.size(550,550);

  canvas = createCanvas(550, 550);
  canvas.postion(560,150);
  posNet = ml5.posNet(video, modelLoded);
}
function modelLoaded() {
    console.log('posnet Is Initialized');
}
function gotposes(results){

}
function draw() {
    background('black');
}
