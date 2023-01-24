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
        let x = (this._x);
        let y = (this._y);

        canvas.context.lineWidth = 1;
        canvas.context.fillStyle = "#FFFFFF";
        canvas.context.strokeStyle = "#FFFFFF";
        canvas.context.beginPath();
        canvas.context.arc(x, y, 1, 0, 2 * Math.PI, true);
        canvas.context.fill();
    }
}
