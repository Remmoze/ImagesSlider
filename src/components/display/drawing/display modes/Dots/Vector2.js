class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector2) {
        this.x += vector2.x;
        this.y += vector2.y;
    }

    limit(canvas) {
        this.x = (this.x + canvas.width) % canvas.width;
        this.y = (this.y + canvas.height) % canvas.height;
    }
}

export default Vector2;
