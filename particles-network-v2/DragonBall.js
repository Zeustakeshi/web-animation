import Bird from "./Bird.js";
import Config from "./config.js";

const dargonBallConfig = Config.particle.type.dragonBall;

export default class DragonBall extends Bird {
    constructor(animation) {
        super();
        this.animation = animation;
        this.img = new Image();
        this.img.src = dargonBallConfig.src;

        this.x = Math.random() * this.animation.canvasWidth;
        this.y = Math.random() * this.animation.canvasHeight;
        this.spriteWidth = dargonBallConfig.spriteWidth;
        this.spriteHeight = dargonBallConfig.spriteHeight;

        this.scale = dargonBallConfig.scale || Config.particle.scale;
        this.width = this.spriteWidth * this.scale;
        this.height = this.spriteHeight * this.scale;

        this.fps = dargonBallConfig.fps;
        this.frameInterval = 1000 / this.fps;

        this.speedX = dargonBallConfig.speedX || Math.random() * 3 - 1.5;
        this.speedY = dargonBallConfig.speedY || Math.random() * -1.5;
        this.maxFrame = dargonBallConfig.maxFrame;
        this.frameX = 0;
        this.frameY = this.speedX > 0 ? 0 : 1;
        this.isFlip = dargonBallConfig.isFlip;
    }
}
