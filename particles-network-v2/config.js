const Config = {
    particle: {
        number: 100,
        scale: 1,
        connect: {
            enable: false,
            distance: 300,
            stroke: {
                width: 1,
                color: "",
            },
        },
        type: {
            type: ["dragonBall"],
            bat: {
                src: "bat.png",
                scale: 0.4,
                spriteWidth: 293,
                spriteHeight: 155,
                maxFrame: 5,
                speedX: undefined,
                speedY: undefined,
                isFlip: false,
                fps: 40,
            },
            dragonBall: {
                src: "dragonBall.png",
                scale: 0.2,
                spriteWidth: 473,
                spriteHeight: 468,
                maxFrame: 10,
                speedX: undefined,
                speedY: undefined,
                isFlip: true,
                fps: 40,
            },
            ghost: {
                src: "ghost.png",
                scale: 0.4,
                spriteWidth: 218,
                spriteHeight: 177,
                maxFrame: 5,
                speedX: undefined,
                speedY: undefined,
                isFlip: false,
                fps: 15,
            },
        },
    },
    mouse: {
        radius: 200,
    },
};

export default Config;
