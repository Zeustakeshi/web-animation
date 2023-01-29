import Bird from "./Bird.js";

export default class Bat extends Bird {
    constructor(animation) {
        super();
        this.animation = animation;
        this.img = document.getElementById("bat");
        this.x = Math.random() * this.animation.canvasWidth;
        this.y = Math.random() * this.animation.canvasHeight;
        this.spriteWidth = 293;
        this.spriteHeight = 155;

        this.fps = 40;
        this.frameInterval = 1000 / this.fps;

        this.maxFrame = 5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * -1.5;
    }

    update() {
        super.update();
    }
}
