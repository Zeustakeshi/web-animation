import Bird from "./Bird.js";
import Config from "./config.js";

const batConfig = Config.particle.type.bat;

export default class Bat extends Bird {
    constructor(animation) {
        super();
        this.animation = animation;
        this.img = new Image();
        this.img.src = batConfig.src;
        this.x = Math.random() * this.animation.canvasWidth;
        this.y = Math.random() * this.animation.canvasHeight;
        this.spriteWidth = batConfig.spriteWidth;
        this.spriteHeight = batConfig.spriteHeight;

        this.scale = batConfig.scale || Config.particle.scale;
        this.width = this.spriteWidth * this.scale;
        this.height = this.spriteHeight * this.scale;

        this.fps = batConfig.fps;
        this.frameInterval = 1000 / this.fps;

        this.maxFrame = batConfig.maxFrame;
        this.speedX = batConfig.speedX || Math.random() * 3 - 1.5;
        this.speedY = batConfig.speedY || Math.random() * -1.5;
        this.isFlip = batConfig.isFlip;
    }
}
