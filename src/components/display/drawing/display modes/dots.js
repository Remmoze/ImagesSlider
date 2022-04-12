import { createDot } from "./Dots/Dot";

let Dots = [];
let lastSpeed = 0;

const updateCount = (context, dots) => {
    if (Dots.length > dots.count) {
        Dots.length = dots.count;
    } else {
        for (let i = Dots.length; i < dots.count; i++) {
            Dots.push(createDot(context.canvas));
        }
    }
};

const Connect = (context, maxDistance, curve) => {
    for (let i = 0; i < Dots.length - 1; i++) {
        let point1 = Dots[i];
        for (let j = i + 1; j < Dots.length; j++) {
            let point2 = Dots[j];
            let distanceSrt = (point2.pos.x - point1.pos.x) ** 2 + (point2.pos.y - point1.pos.y) ** 2;
            if (distanceSrt < maxDistance ** 2) {
                let distance = Math.sqrt(distanceSrt);
                let alpha = Math.floor(255 - (255 * distance) / maxDistance).toString(16);
                if (alpha.length < 2) alpha = "0" + alpha;

                let color = context.createLinearGradient(point1.pos.x, point1.pos.y, point2.pos.x, point2.pos.y);
                color.addColorStop(0, point1.color + alpha);
                color.addColorStop(1, point2.color + alpha);

                context.strokeStyle = color;
                context.lineWidth = (1 - distance / maxDistance + 0.2) * 4;
                context.lineCap = "round";
                context.beginPath();
                context.moveTo(point1.pos.x, point1.pos.y);
                if (curve > 0)
                    context.bezierCurveTo(
                        ...point1.getBezier(curve),
                        ...point2.getBezier(curve),
                        point2.pos.x,
                        point2.pos.y
                    );
                else context.lineTo(point2.pos.x, point2.pos.y);
                context.stroke();
            }
        }
    }
};

const updateDots = (context, dots) => {
    if (Dots.length !== dots.count) updateCount(context, dots);
    if (lastSpeed !== dots.speed) {
        Dots.map((dot) => dot.setVelocity(dots.speed));
        lastSpeed = dots.speed;
    }
    Dots.map((dot) => dot.update(context.canvas));

    context.fillStyle = "#000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    context.fillStyle = "#000000";
    context.lineWidth = 2;
    Connect(context, dots.maxDistance, dots.curve);
    if (dots.showDots) Dots.map((dot) => dot.render(context));
};

export { updateDots };
