const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function createRectangles(){
    let rectangle = {
        heigth: 20,
        width: 100,
        x: 10,
        y: 70
    }
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 4; j++){
            ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.heigth)
            rectangle.y += 30;
        }
        rectangle.y = 70
        rectangle.x += 120;
    }
}

function saveRectangles(){
    let rectangle = {
        heigth: 20,
        width: 100,
        x: 10,
        y: 70
    }
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 4; j++){
            rectangles.push(rectangle);
            console.log(rectangle.y)
            rectangle.y += 30;
            
        }
        rectangle.y = 70
        rectangle.x += 120;
    }
}

//list with the position of all rectangles
let rectangles = []

saveRectangles()

console.log(rectangles)

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

/* limit ball movement */
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
        console.log(rectangles)
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
    createRectangles()
    createBall()
}

function startNewGame(){
    setInterval(drawLayout, 10)
}







/*
const cursor = {
    x: 0,
     y: 0,
   };
   addEventListener("cursormove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}
*/