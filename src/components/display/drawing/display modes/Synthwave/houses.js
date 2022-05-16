const houses = [
    {
        height: 1,
        components: [0, 0, 0, 0],
    },
    {
        height: 4, //relative to the width
        components: [
            [0, 0.75, 1, 0.25], //relative width and height
            [0.1, 0.25, 0.7, 0.5],
            [0.3, 0, 0.15, 0.25],
        ],
    },
    {
        height: 1,
        components: [[0.25, 0.25, 0.5, 0.75]],
    },
];

const getHouse = (x, floorHeight, scale, index = 0) => {
    let house = houses[index];
    let height = scale * house.height;
    let width = scale;
    let y = floorHeight - height;
    let components = [];

    for (const comp of house.components) {
        components.push({
            x: x + width * comp[0],
            y: y + height * comp[1],
            width: comp[2] * width,
            height: comp[3] * height,
        });
    }
    return components;
};

const drawHouse = (context, house, offset) => {
    context.fillStyle = "black";
    for (const comp of house) {
        context.fillRect(comp.x + offset, comp.y, comp.width, comp.height);
    }

    context.strokeStyle = "white";
    context.beginPath();
    for (const comp of house) {
        context.rect(comp.x + offset, comp.y, comp.width, comp.height);
    }
    context.stroke();
};

let housesCache = [];
let oldScale = 0;

const drawHouses = (context, canvas, store, frameCount) => {
    const scale = canvas.width / store.numberOfLines;
    if (oldScale !== scale) {
        oldScale = scale;
        housesCache = [];
        for (let i = 0; i < store.numberOfLines; i++) {
            let house = getHouse(
                i * scale,
                store.floorHeight * canvas.height,
                scale,
                Math.floor(Math.random() * houses.length)
            );
            housesCache.push(house);
        }
    }

    const offset = (frameCount % 100) / 100;
    if (offset === 0) {
        housesCache.unshift(housesCache.pop());
        console.log(housesCache[0]);
    }
    for (let i = 0; i < housesCache.length; i++) {
        drawHouse(context, housesCache[i], scale);
    }
};

export { drawHouses };
