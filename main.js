import Snake from "./snake.js";
import Apple from "./apple.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


const cw = canvas.width;
const ch = canvas.height;


let tileCount = 20;


let xvel = 0;
let yvel = 0;


function game() {
    const apple = new Apple(tileCount, cw, ch);
    const snake = new Snake(tileCount);

    drawBackground();
    apple.draw(context);
    snake.draw(context);
    snake.logic();

    
    requestAnimationFrame(game);
}


function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0,0, cw, ch);
}


game();


document.addEventListener("keydown", key => {
    switch(key.code) {
        case "KeyW":
            xvel = 0;
            yvel = -1;
            break;
        case "KeyA":
            xvel = -1;
            yvel = 0;
            break;
        case "KeyS":
            xvel = 0;
            yvel = 1;
            break;
        case "KeyD":
            xvel = 1;
            yvel = 0;
            break;
    }
})