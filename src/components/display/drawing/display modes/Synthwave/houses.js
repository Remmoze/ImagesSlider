import { housesImages, loadHouses, housesImage } from "./houseLoading";

const drawHouses = (context, canvas, store, frameCount) => {
    if (housesImage == null) {
        loadHouses();
        return;
    }
    if (housesImages === null) {
        // waiting for the houses to load.
        return;
    }
    const scale = canvas.width / store.numberOfLines;
    const offset = (frameCount % 100) / 100;

    context.drawImage(housesImages[0], canvas.width / 2, store.floorHeight * canvas.height - housesImages[0].height);
};

export { drawHouses };
