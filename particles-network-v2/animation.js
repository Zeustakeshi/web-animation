import Bat from "./ Bat.js";
import Config from "./config.js";
import DragonBall from "./DragonBall.js";
import Ghost from "./Ghost.js";

class Animation {
    constructor() {
        this.canvas = document.getElementById("canvas-animation");
        this.canvasWidth = this.canvas.width = window.innerWidth;
        this.canvasHeight = this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.mouse = {
            x: null,
            y: null,
            radius: Config.mouse.radius,
        };

        // config
        this.particles = [];
        this.numberOfParticles = Config.particle.number;
        this.deltaTime = 0;
        this.isConnectParticles = Config.particle.connect.enable;
        this.connectDistance = Config.particle.connect.distance;
        //init
        this.initParticle();

        // handle event;
        this.listenEvent();
        // loop
        this.animetionLoop(0);
    }

    initParticle() {
        this.particles = [];
        const types = Config.particle.type.type;
        for (let i = 0; i < this.numberOfParticles; ++i) {
            const type = types[Math.floor(Math.random() * types.length)];
            switch (type) {
                case "bat":
                    this.particles.push(new Bat(this));
                    break;
                case "dragonBall":
                    this.particles.push(new DragonBall(this));
                    break;
                case "ghost":
                    this.particles.push(new Ghost(this));
                    break;
                default:
                    break;
            }
        }
    }

    listenEvent() {
        // mouse envent
        window.addEventListener("mousemove", (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener("mouseout", () => {
            this.mouse.x = undefined;
            this.mouse.y = undefined;
        });

        //window event
        window.addEventListener("resize", () => {
            this.canvasWidth = this.canvas.width = window.innerWidth;
            this.canvasHeight = this.canvas.height = window.innerHeight;
            this.mouse.radius = 3000;
            this.initParticle();
        });
    }

    // draw one line between particle if they close enough
    connect() {
        let opacity = 1;
        this.particles.forEach((particleA) => {
            this.particles.forEach((particleB) => {
                const dx = particleA.x - particleB.x;
                const dy = particleA.y - particleB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.connectDistance) {
                    opacity = 1 - distance / 20000;
                    this.ctx.strokeStyle = `rgba(115, 95, 175, ${opacity})`;
                    this.ctx.linewidth = Config.particle.connect.stroke.width;
                    this.ctx.beginPath();
                    this.ctx.moveTo(
                        particleA.x + particleA.width / 2,
                        particleA.y + particleA.height / 2
                    );
                    this.ctx.lineTo(
                        particleB.x + particleB.width / 2,
                        particleB.y + particleB.height / 2
                    );
                    this.ctx.stroke();
                }
            });
        });
    }

    draw() {
        //draw particles
        this.particles.forEach((particle) => particle.draw());
    }

    #lastTime = 0;
    animetionLoop(timeStamp) {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.deltaTime = timeStamp - this.#lastTime;
        this.#lastTime = timeStamp;

        this.particles.forEach((particle) => particle.update());
        if (this.isConnectParticles) this.connect();
        this.draw();
        window.requestAnimationFrame(this.animetionLoop.bind(this));
    }
}

window.addEventListener("load", () => {
    const body = document.body;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas-animation");
    body.appendChild(canvas);
    canvas.style = canvas.style.cssText =
        "position: absolute; top: 0; left: 0; z-index: 100;width: 100%;height: 100%;pointer-events: none;";
    const animation = new Animation();
});
