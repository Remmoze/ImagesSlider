import Vector2 from "./Vector2";

class Dot {
    constructor(x, y, color) {
        this.pos = new Vector2(x, y);
        this.vel = new Vector2(Math.random() * 4 - 2, Math.random() * 4 - 2);

        this.color = color || "#000000";
    }

    setVelocity(speed) {
        let newSpeed = (100 - speed) / 90;
        this.vel = new Vector2(Math.random() * 4 - 2, Math.random() * 4 - 2);
    }

    update(canvas) {
        this.pos.add(this.vel);
        this.pos.limit(canvas);
    }

    render(context) {
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.pos.x, this.pos.y, 4, 0, 2 * Math.PI);
        context.fill();
    }
}

function hsvToRgb(h, s, v) {
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: {
            r = v;
            g = t;
            b = p;
            break;
        }
        case 1: {
            r = q;
            g = v;
            b = p;
            break;
        }
        case 2: {
            r = p;
            g = v;
            b = t;
            break;
        }
        case 3: {
            r = p;
            g = q;
            b = v;
            break;
        }
        case 4: {
            r = t;
            g = p;
            b = v;
            break;
        }
        case 5: {
            r = v;
            g = p;
            b = q;
            break;
        }
    }

    let get = (num) => {
        let res = Math.floor(num).toString(16);
        if (res.length < 2) res = "0" + res;
        return res;
    };

    return "#" + get(r * 255) + get(g * 255) + get(b * 255);
}

const createDot = (canv) => {
    return new Dot(canv.width * Math.random(), canv.height * Math.random(), hsvToRgb(Math.random(), 1, 1));
};

export { createDot };
