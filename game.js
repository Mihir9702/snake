export function keys(pos) {
    document.addEventListener("keydown", direction => {
        switch(direction.code) {
            case "KeyW":
                pos.x = 0
                pos.y = -1
                break;
            case "KeyA":
                pos.x = -1 
                pos.y = 0 
                break;
            case "KeyS":
                pos.x = 0
                pos.y = 1 
                break;
            case "KeyD":
                pos.x = 1;
                pos.y = 0;
                break;
        }
    })
}

export function drawBackground(context, cw, ch) {
    context.fillStyle = "black";
    context.fillRect(0,0, cw, ch);
}

export function checkCollision() {
    let collide = false;

    if (
    snake.x < apple.x + apple.width
    && snake.x + snake.width > apple.x
    && snake.y < apple.y + apple.height
    && snake.y + snake.height > apple.y
    ) { collide = true } 

    if(collide) {
        // collision w/ apple => make apple.x & apple.y random
        console.log("apple eat");
    }
}