import Bird from "./Bird.js";

export default class DragonBall extends Bird {
    constructor(animation) {
        super();
        this.animation = animation;
        this.img = document.getElementById("dragonBall");
        this.x = Math.random() * this.animation.canvasWidth;
        this.y = Math.random() * this.animation.canvasHeight;
        this.spriteWidth = 473;
        this.spriteHeight = 468;

        this.fps = 40;
        this.frameInterval = 1000 / this.fps;

        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * -1.5;
        this.maxFrame = 10;
        this.frameX = 0;
        this.frameY = this.speedX > 0 ? 0 : 1;
        this.isFlip = true;
    }
}
