import { createDot } from "./helpers/Dot";
import Grid from "./helpers/Grid";

let Dots = [];
let grid = null;

const updateCount = (context, dots) => {
    if (Dots.length > dots.count) {
        for (let i = Dots.length - 1; i > dots.count - 1; i--) {
            grid.removeDot(Dots[i]);
        }
        Dots.length = dots.count;
    } else {
        for (let i = Dots.length; i < dots.count; i++) {
            const dot = createDot(context.canvas);
            Dots.push(dot);
            if (grid !== null) grid.addDot(dot);
        }
    }
};

const connectDots = (context, dot1, dot2, maxDistance, curve) => {
    let distance = Math.sqrt((dot2.pos.x - dot1.pos.x) ** 2 + (dot2.pos.y - dot1.pos.y) ** 2);

    if (distance > maxDistance) {
        /*
            I have been debugging for hours.
            I have no clue why or how.
            But sometimes. Very very rarely.
            When point jumps across the screen.
            It's position is clearly on the other side of the screen.
            But it is contained within previous cell.
            I have no idea how it is possible. Because points update their location
            and then cells check if all dots are still within their boundaries.
            But it happens. Fixes itself next render.
            I want to cry now.
        */
        return;
    }

    let alpha = Math.floor(255 - (255 * distance) / maxDistance)
        .toString(16)
        .padStart(2, "0");
    let color = context.createLinearGradient(dot1.pos.x, dot1.pos.y, dot2.pos.x, dot2.pos.y);
    color.addColorStop(0, dot1.color + alpha);
    color.addColorStop(1, dot2.color + alpha);
    context.strokeStyle = color;
    context.lineWidth = (1 - distance / maxDistance + 0.2) * 4;
    context.lineCap = "round";
    if (curve) {
        connectDotsCurved(context, dot1, dot2, distance, maxDistance, curve);
    } else {
        connectDotsLine(context, dot1, dot2);
    }
};

const connectDotsLine = (context, dot1, dot2) => {
    context.beginPath();
    context.moveTo(dot1.pos.x, dot1.pos.y);
    context.lineTo(dot2.pos.x, dot2.pos.y);
    context.stroke();
};

const connectDotsCurved = (context, dot1, dot2, distance, maxDistance, curve) => {
    context.beginPath();
    context.moveTo(dot1.pos.x, dot1.pos.y);
    context.bezierCurveTo(
        ...dot1.getBezier((distance / maxDistance) * curve),
        ...dot2.getBezier((distance / maxDistance) * curve),
        dot2.pos.x,
        dot2.pos.y
    );
    context.stroke();
};

const connectNew = (context, maxDistance, curve) => {
    for (let i = 0; i < grid.cells.length; i++) {
        const cell = grid.cells[i];
        const neighbours = grid.getCellNeighbours(i);

        for (let j = 0; j < cell.dots.length; j++) {
            let dot1 = cell.dots[j];
            // within itself
            for (let k = j; k < cell.dots.length; k++) {
                let dot2 = cell.dots[k];
                connectDots(context, dot1, dot2, maxDistance, curve);
            }

            // outside itself
            for (let k = 0; k < neighbours.length; k++) {
                let neighbour = neighbours[k];
                for (let z = 0; z < neighbour.dots.length; z++) {
                    let dot2 = neighbour.dots[z];
                    connectDots(context, dot1, dot2, maxDistance, curve);
                }
            }
        }
    }
};

let lastSpeed = 0;
let lastDistance = 0;
const updateProperties = (context, dots, needsUpdate) => {
    if (Dots.length !== dots.count) {
        updateCount(context, dots);
    }

    if (lastSpeed !== dots.speed) {
        Dots.map((dot) => dot.setVelocity(dots.speed));
        lastSpeed = dots.speed;
    }

    if (needsUpdate || lastDistance !== dots.maxDistance) {
        grid = new Grid(context.canvas, dots.maxDistance);
        grid.populate(Dots);
        lastDistance = dots.maxDistance;
    }
};

const updateDots = (context, dots, needsUpdate) => {
    updateProperties(context, dots, needsUpdate);

    context.fillStyle = "#000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    //dots
    for (const dot of Dots) {
        dot.update(context.canvas);
        if (dots.showDots) dot.render(context);
    }

    grid.update();

    //grid
    if (dots.showGrid) {
        for (let i = 0; i < grid.cells.length; i++) {
            let { x, y, width, height } = grid.cells[i];
            context.lineWidth = 2;
            context.strokeStyle = "red";
            context.strokeRect(x, y, width, height);
        }
    }

    //lines
    context.fillStyle = "#000000";
    context.lineWidth = 2;
    connectNew(context, dots.maxDistance, dots.curve);
};

export { updateDots };
