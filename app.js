const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//list with the position of all rectangles
let rectanglesList = []

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 4; j++) {
        let rectangle = {
            height: 20,
            width: 100,
            x: 10 + i * 120, // Calculate x based on i
            y: 70 + j * 30   // Calculate y based on j
        }
        rectanglesList.push(rectangle)
    }
}

console.log(rectanglesList)

//funciton to redraw all rectangles
function drawRectangles() {
    
    for (const rectangle of rectanglesList) {
        ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
    }
    //old programming loop
    // for (let i = 0; i < rectanglesList; i++){
    //      ctx.fillRect(rectanglesList[i].x, rectanglesList[i].y, rectanglesList[i].height, rectanglesList[i].width)
    // }
}

/* Creates a moveable lower rectangle (subtract the xRectangle (100) from starting point) */
document.addEventListener("keydown", handleKeyDown)
    
function handleKeyDown(event){
    if(event.key === "ArrowRight" && xRectangle < 840 - rectangleWidth){
        xRectangle = xRectangle + distanceXRectangle
    }
    if(event.key === "ArrowLeft" && xRectangle > 0){
        xRectangle = xRectangle - distanceXRectangle
    }       
}

let xRectangle = 100
let distanceXRectangle = 10
const rectangleWidth = 100

function createRectangle(){
    ctx.fillStyle = "black"
    ctx.fillRect(xRectangle, 420, rectangleWidth, 20);
}

/* Creates a ball */
let xBall = 100
let yBall = 250
const ballRadius = 15

function createBall(){
    ctx.beginPath();
    ctx.arc(xBall, yBall, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    changeBallDirection()
}

let distanceXBall = 1
let distanceYBall = -1

/* limit ball movement on upper rectangles */
function collision(){

}

/* limit ball movement on lower rectangle */
function changeBallDirection(){
    xBall += distanceXBall
    yBall += distanceYBall
    if(yBall < 0 + ballRadius){
        distanceYBall = - distanceYBall
    }
    if(xBall > 840 - ballRadius || xBall < 0 + ballRadius){
        distanceXBall = - distanceXBall
    }
    if(yBall > 420 - ballRadius && (xBall >= xRectangle && xBall <= xRectangle + 100)){
        distanceYBall = - distanceYBall
    }
    if(yBall > 450 - ballRadius){
        //alert("Sorry, you lost")
    }
    for (let i=0; i<rectanglesList.length; i++){    
        if(yBall < rectanglesList[i].y + ballRadius + rectanglesList[i].height){
            distanceYBall = - distanceYBall
            rectanglesList.splice(i,1)
        }
    }   
}

/* clears the whole canvas */
function clearLayout(){
    ctx.clearRect(0, 0, 840, 450)
}

/* Displays the whole break out game Layout and interacts with the other functions to get the game running */
function drawLayout(){
    clearLayout()
    createRectangle()
    drawRectangles()
    createBall()
}

function startNewGame(){
    setInterval(drawLayout, 10)
}
