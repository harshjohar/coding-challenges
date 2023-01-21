class Canvas {
    constructor(canvas, background = "#111111", fps = 40) {
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
        this._ratio = 3;
        this._fps = fps;
        this._background = background;
        this._originX = 0;
        this._originY = 0;

        if (fps <= 0) {
            this._fps = 60;
        }

        this.setup();
        window.addEventListener("resize", this.setup.bind(this));
    }

    get width() {
        return this._canvas.width / this.ratio;
    }

    get height() {
        return this._canvas.height / this.ratio;
    }

    get canvas() {
        this._canvas;
    }

    get context() {
        return this._context;
    }

    get ratio() {
        return this._ratio;
    }

    clear() {
        this._context.clearRect(
            -this._originX,
            -this._originY,
            this._canvas.width,
            this._canvas.height
        );
    }

    translate(x, y) {
        this.context.translate(x, y);
        this._originX = x;
        this._originY = y;
    }

    draw(func) {
        setInterval(
            function () {
                this.clear();
                func();
            }.bind(this),
            1000 / this._fps
        );
    }

    setup() {
        let devicePixelRatio = window.devicePixelRatio || 1;
        let backingStoreRatio =
            this._context.webkitBackingStorePixelRatio ||
            this._context.mozBackingStorePixelRatio ||
            this._context.msBackingStorePixelRatio ||
            this._context.oBackingStorePixelRatio ||
            this._context.backingStorePixelRatio ||
            1;
        this._ratio = devicePixelRatio / backingStoreRatio;

        let oldWidth = document.body.clientWidth;
        let oldHeight = document.body.clientHeight;
        this._canvas.style.background = this._background;
        this._canvas.width = oldWidth;
        this._canvas.height = oldHeight;
        this._context.scale(1, 1);

        if (devicePixelRatio !== backingStoreRatio) {
            this._canvas.width = oldWidth * this._ratio;
            this._canvas.height = oldHeight * this._ratio;

            this._canvas.style.width = oldWidth + "px";
            this._canvas.style.height = oldHeight + "px";

            this._context.scale(this._ratio, this._ratio);
        }
    }
}
