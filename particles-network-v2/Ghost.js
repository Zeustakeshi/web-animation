import Bird from "./Bird.js";
import Config from "./config.js";

const ghostConfig = Config.particle.type.ghost;
export default class Ghost extends Bird {
    constructor(animation) {
        super();
        this.animation = animation;
        this.img = new Image();
        this.img.src = ghostConfig.src;
        this.x = Math.random() * this.animation.canvasWidth;
        this.y = Math.random() * this.animation.canvasHeight;
        this.spriteWidth = ghostConfig.spriteWidth;
        this.spriteHeight = ghostConfig.spriteHeight;

        this.scale = ghostConfig.scale || Config.particle.scale;
        this.width = this.spriteWidth * this.scale;
        this.height = this.spriteHeight * this.scale;

        this.fps = ghostConfig.fps;
        this.frameInterval = 1000 / this.fps;

        this.maxFrame = ghostConfig.maxFrame;
        this.speedX = ghostConfig.speedX || Math.random() * 3 - 1.5;
        this.speedY = ghostConfig.speedY || Math.random() * -1.5;
        this.isFlip = ghostConfig.isFlip;
    }

    update() {
        super.update();
    }
}
