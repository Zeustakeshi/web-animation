import Config from "./config.js";

export default class Bird {
    constructor() {
        this.spriteWidth = 100;
        this.spriteHeight = 100;
        this.scale = Config.particle.scale;
        this.width = this.spriteWidth * this.scale;
        this.height = this.spriteHeight * this.scale;

        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 1;
        this.fps = 15;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.balanceSpeed = Math.random() * 2;
        this.isFlip = false;
        this.mouse;
        this.distanceMouse;
    }

    draw() {
        this.animation.ctx.drawImage(
            this.img,
            this.frameX * this.spriteWidth,
            this.frameY * this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    flip(direction = "left") {
        if (direction === "right") {
            this.frameY = 0;
        } else {
            this.frameY = 1;
        }
    }

    handleFlip() {
        if (!this.isFlip) return;

        // check collsion ditection - mouse
        if (this.distanceMouse < this.mouse.radius) {
            if (this.x + this.width / 2 > this.mouse.x) {
                this.flip("right");
            } else {
                this.flip("left");
            }
        }

        //  flip when particle go out canvas
        if (this.x < 0) {
            this.flip("right");
        } else if (this.x + this.width > this.animation.canvasWidth) {
            this.flip("left");
        }
    }

    update() {
        if (this.frameTimer > this.frameInterval) {
            this.frameX >= this.maxFrame ? (this.frameX = 0) : this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += this.animation.deltaTime;
        }

        // check collsion ditection - mouse
        this.mouse = this.animation.mouse;
        const dx = this.mouse.x - (this.x + this.width / 2);
        const dy = this.mouse.y - (this.y + this.height / 2);
        // pitago
        this.distanceMouse = Math.sqrt(dx * dx + dy * dy);

        if (this.distanceMouse < this.mouse.radius) {
            if (this.x > this.mouse.x) {
                this.x += 5;
            } else this.x -= 5;

            if (this.y > this.mouse.y) this.y += 5;
            else this.y -= 5;
            this.speedX *= -1;
            this.speedY *= -1;
        }
        if (this.isFlip) this.handleFlip();
        //move
        if (this.x < 0) {
            this.x = 0;
            this.speedX *= -1;
        } else if (this.x + this.width > this.animation.canvasWidth) {
            this.x = this.animation.canvasWidth - this.width;
            this.speedX *= -1;
        }

        if (this.y < 0) {
            this.y = 0;
            this.speedY *= -1;
        } else if (this.y + this.height > this.animation.canvasHeight) {
            this.y = this.animation.canvasHeight - this.height;
            this.speedY *= -1;
        }

        this.x += this.speedX;
        this.y += this.speedY;
    }
}
