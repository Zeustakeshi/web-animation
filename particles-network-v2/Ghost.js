import Bird from "./Bird.js";

export default class Ghost extends Bird {
    constructor(animation) {
        super();
        this.animation = animation;
        this.img = document.getElementById("ghost");
        this.x = Math.random() * this.animation.canvasWidth;
        this.y = Math.random() * this.animation.canvasHeight;
        this.spriteWidth = 218;
        this.spriteHeight = 177;

        this.maxFrame = 5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * -1.5;
    }

    update() {
        super.update();
    }
}
