class Cell {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.dots = [];
    }

    intersects(point) {
        return (
            point.x >= this.x && point.y >= this.y && point.x < this.x + this.width && point.y < this.y + this.height
        );
    }
}

class Grid {
    constructor(canvas, maxDistance) {
        this.cells = [];
        this.maxDistance = (maxDistance / 3) * Math.sqrt(2);

        this.rows = 0;
        this.columns = 0;

        this.init(canvas);
    }

    init(canvas) {
        this.cells = [];
        this.columns = Math.ceil(canvas.width / this.maxDistance); // X
        this.rows = Math.ceil(canvas.height / this.maxDistance); // Y
        for (let i = 0; i < this.rows * this.columns; i++) {
            let x = (i % this.columns) * this.maxDistance;
            let y = Math.floor(i / this.columns) * this.maxDistance;
            let width = Math.min(x + this.maxDistance, canvas.width) - x;
            let height = Math.min(y + this.maxDistance, canvas.height) - y;
            this.cells.push(new Cell(x, y, width, height));
        }
    }

    populate(dots) {
        for (const dot of dots) {
            this.addDot(dot);
        }
    }

    addDot(dot) {
        let x = Math.floor(dot.pos.x / this.maxDistance);
        let y = Math.floor(dot.pos.y / this.maxDistance);
        let cell = this.cells[y * this.columns + x];
        if (!cell) {
            console.error("Dot did not get populated. Could not find a cell.", dot, y, x);
        } else {
            cell.dots.push(dot);
        }
    }

    getCell(x, y) {
        return this.cells[y * this.columns + x];
    }

    getCoordsByIndex(index) {
        return { x: index % this.columns, y: Math.floor(index / this.columns) };
    }

    update() {
        for (let i = 0; i < this.cells.length; i++) {
            let cell = this.cells[i];

            for (let j = 0; j < cell.dots.length; j++) {
                let dot = cell.dots[j];
                if (!cell.intersects(dot.pos)) {
                    cell.dots.splice(cell.dots.indexOf(dot), 1);
                    this.addDot(dot);
                }
            }
        }
    }
}

export default Grid;
