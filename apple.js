export default class Apple {
    constructor(tileCount, cw, ch) {
        this.x = 20;
        this.y = 20;
        this.width = tileCount / 2;
        this.height = tileCount / 4;
    }

    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
        // this.x = Math.floor(Math.random() * (cw + 1)) 
        // this.y = Math.floor(Math.random() * (ch + 1)) 
    }
}