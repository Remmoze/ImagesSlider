import { housesImages, loadHouses, housesImage, houseBox } from "./houseLoading";

let housesCache = null;
let oldCount = 0;

const addHousesToCache = (amount) => {
    for (let i = 0; i < amount; i++) {
        housesCache.push(Math.floor(Math.random() * (housesImages.length + 1)) - 1);
    }
};

const processCache = (numberOfLines) => {
    if (oldCount === numberOfLines) return;

    if (housesCache === null) {
        housesCache = [];
        addHousesToCache(numberOfLines);
    } else {
        if (oldCount < numberOfLines) {
            addHousesToCache(numberOfLines - oldCount);
        } else {
            //housesCache.length = numberOfLines; // it works but feels cheap
            housesCache = housesCache.slice(0, numberOfLines);
        }
    }

    oldCount = numberOfLines;
};

const draw = (context, canvas, scale, floorHeight, offset) => {
    let width = scale;
    let height = (houseBox.height / houseBox.width) * width;
    for (let i = 0; i < housesCache.length; i++) {
        let houseIndex = housesCache[i];
        if (houseIndex === -1) {
            continue;
        }
        let house = housesImages[houseIndex];
        context.drawImage(
            house,
            0,
            0,
            houseBox.width,
            houseBox.height,
            (i - 1) * scale + scale * offset,
            floorHeight - height,
            width,
            height
        );
    }
};

let oldOffset = null;
const shouldUpdate = (offset) => {
    if (oldOffset !== null && Math.abs(oldOffset - offset) > 0.9) {
        oldOffset = offset;
        return true;
    }
    oldOffset = offset;
    return false;
};

const drawHouses = (context, canvas, store, frameCount) => {
    if (housesImage == null) {
        loadHouses();
        return;
    }
    if (housesImages === null) {
        // waiting for the houses to load.
        return;
    }

    processCache(store.numberOfLines + 1);
    const scale = canvas.width / store.numberOfLines;
    const offset = (frameCount % 100) / 100;
    const floorHeight = store.floorHeight * canvas.height;

    if (shouldUpdate(offset)) {
        housesCache.unshift(housesCache.pop());
    }

    draw(context, canvas, scale, floorHeight, offset);
};

export { drawHouses };
