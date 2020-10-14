Gotta_go_fast = "";
Shout_my_name = "";
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function preload() {
    Gotta_go_fast = loadSound("Song1.mp3");
    Shout_my_name = loadSound("Song2.mp3")
}
function play() {
    song.play()
}