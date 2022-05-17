import HousesImage from "../../../../../content/house_sample.png";

let housesImages = null;

let houseBox = {
    width: 96,
    height: 384,
};

let housesImage = null;

const createHousesGradient = (content) => {
    const grad = content.createLinearGradient(houseBox.width / 2, 0, houseBox.width / 2, houseBox.height);
    grad.addColorStop(0, "red");
    grad.addColorStop(1, "blue");
    return grad;
};

const removeWhite = (context) => {
    let imageData = context.getImageData(0, 0, houseBox.width, houseBox.height);
    let data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
        if (r === 255 && g === 255 && b === 255) {
            data[i + 0] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 0;
        }
    }
    context.putImageData(imageData, 0, 0);
};

const loadImage = (url) => {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
    });
};

const loadHouseImages = (urls) => {
    let pendingImages = urls.map(loadImage);
    Promise.all(pendingImages).then((images) => {
        housesImages = [...images];
    });
};

const parseHouses = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = houseBox.width;
    canvas.height = houseBox.height;
    const gradient = createHousesGradient(context);
    context.fillStyle = gradient;

    let imageURLs = [];
    for (let i = 0; i < housesImage.width / houseBox.width; i++) {
        context.fillRect(0, 0, houseBox.width, houseBox.height);
        context.drawImage(
            housesImage,
            i * houseBox.width,
            0,
            houseBox.width,
            houseBox.height,
            0,
            0,
            houseBox.width,
            houseBox.height
        );
        removeWhite(context);
        imageURLs.push(canvas.toDataURL());
    }
    loadHouseImages(imageURLs);
};

const loadHouses = () => {
    housesImage = new Image();
    housesImage.src = HousesImage;
    housesImage.onload = parseHouses;
};

export { housesImages, housesImage, houseBox, loadHouses };
