export default class Snake {
    constructor(tileCount) {
        this.x = 11;
        this.y = 75;
        this.width = tileCount / 2;
        this.height = tileCount / 4;
        this.bodyParts = [];
    }

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.width, this.height);

        // this.bodyParts.forEach(bodyPart => {
        //     context.fillStyle = "green";
        //     context.fillRect(bodyPart.x, bodyPart.y, 18, 9);
        // });

        // this.bodyParts.push({x: this.x, y: this.y});

        // while(this.bodyParts.length > 5) {
        //     this.bodyParts.shift();
        // }
    }

    logic() {
        this.x += xvel;
        this.y += yvel;

        console.log("appleX", apple.x);
        if (apple.x === this.x && apple.y == this.y) {
            // tail+=5;
            console.log("apple collision")
            apple.x = Math.floor(Math.random() * 20);
            apple.y = Math.floor(Math.random() * 20);
        }



        // OUT OF BOUNDS
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > cw - tileCount) {
            this.x = cw - tileCount;
        } else if (this.y < 0) {
            this.y = 0;
        } else if (this.y > ch - tileCount / 2) {
            this.y = ch - tileCount / 2;
        }
        // OUT OF BOUNDS
    }
}
