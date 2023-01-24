import os

number = input("Enter challenge number: ")
title = input("Name of challenge: ")

directory = f"{number}-{'_'.join(title.split())}"

mode = 0o777

os.chdir("./challenges")

os.makedirs(f"./{directory}", mode=0o777)
os.makedirs(f"./{directory}/css", mode=0o777)
os.makedirs(f"./{directory}/js", mode=0o777)

os.chdir(directory)

html_template = f'''
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="This can look cool." />
        <link rel="stylesheet" href="./css/style.css" />
    </head>
    <body>
        <canvas id="canvas"></canvas>
        
        <script src="./js/canvas.js"></script>
        <script src="./js/main.js"></script>
    </body>
</html>
'''

canvas_template = '''
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
        // only this is static, set interval was to run this n number of times
        func();
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
'''

main_template = '''
document.addEventListener("DOMContentLoaded", function (_) {
    let canvas = new Canvas(document.getElementById("canvas"), "#111111");

    const width = Math.ceil(canvas.width);
    const height = Math.ceil(canvas.height);

});

'''

css_template = '''
body {
    margin: 0;
    padding: 0;

    min-width: 100vw;
    min-height: 100vh;
}
'''

html = open("index.html", 'a')
html.write(html_template)
html.close()

canvas = open("js/canvas.js", 'a')
canvas.write(canvas_template)
canvas.close()

main = open("js/main.js", 'a')
main.write(main_template)
main.close()

css = open('css/style.css', 'a')
css.write(css_template)
css.close()
