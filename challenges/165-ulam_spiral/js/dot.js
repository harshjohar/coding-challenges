class Dot {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    draw(canvas) {
        let x = this._x;
        let y = this._y;

        canvas.context.fillStyle = "#FFFFFF";

        canvas.context.beginPath();
        canvas.context.arc(x, y, 3, 0, 2 * Math.PI, true);
        canvas.context.fill();
    }

    joiningLine(canvas, x, y, px, py) {
        canvas.context.lineWidth = 1;
        canvas.context.strokeStyle = "#FFFFFF";
        canvas.context.beginPath();
        canvas.context.moveTo(px, py);
        canvas.context.lineTo(x, y);
        canvas.context.stroke();
    }
}
