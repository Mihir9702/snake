import Snake from "./snake.js";
import Apple from "./apple.js";
import { keys, drawBackground, checkCollision } from "./game.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const cw = canvas.width;
const ch = canvas.height;

let tileCount = 20;
let pos = { x: 0, y: 0 }

const apple = new Apple(tileCount, cw, ch);
const snake = new Snake(tileCount);

function game() {

    snake.x += pos.x;
    snake.y += pos.y;

    drawBackground(context, cw, ch);
    keys(pos);
    apple.draw(context);
    snake.draw(context);   
    snake.logic(cw, ch);
    checkCollision();

    requestAnimationFrame(game);
}

game();




