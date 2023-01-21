class Star {
    constructor(x, y, z = 100) {
        this._x = x;
        this._y = y;
        this._z = z;

        this._lastZ = z + 1;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get z() {
        return this._z;
    }

    update(speed=10) {
        this._lastZ = this._z;
        this._z -= speed; // global var depends on mouse speed
    }

    needsReset() {
        if (this._z <= 0) {
            return true;
        }
        return false;
    }

    reset(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._lastZ = z + 1;
    }

    draw(canvas) {
        let lastX = (this._x / this._lastZ) * canvas.width;
        let lastY = (this._y / this._lastZ) * canvas.height;

        let x = (this._x / this._z) * canvas.width;
        let y = (this._y / this._z) * canvas.height;

        canvas.context.lineWidth = 1;
        canvas.context.fillStyle = "#FFFFFF";
        canvas.context.strokeStyle = "#FFFFFF";
        canvas.context.beginPath();
        canvas.context.moveTo(lastX, lastY);
        canvas.context.lineTo(x, y);
        canvas.context.stroke();

        canvas.context.fillRect(x, y, 1, 1);
    }
}
