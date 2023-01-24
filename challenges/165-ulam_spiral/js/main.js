let x = 0,
    y = 0;
let dots = [];

let step = 1;
let totalSteps;

let stepSize = 5;

let state = 0;
let numSteps = 1;
let turnCounter = 1;

let i = 0;

function seive(num) {
    const numArr = new Array(num + 1);
    numArr.fill(true);
    numArr[0] = numArr[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let j = 2; i * j <= num; j++) {
            numArr[i * j] = false;
        }
    }
    return numArr.reduce((acc, val, ind) => {
        if (val) {
            return acc.concat(ind);
        } else {
            return acc;
        }
    }, []);
}


document.addEventListener("DOMContentLoaded", function (_) {
    let canvas = new Canvas(document.getElementById("canvas"), "#111111");

    const width = Math.ceil(canvas.width);
    const height = Math.ceil(canvas.height);
    
    x = width / 2;
    y = height / 2;
    
    const cols = width/stepSize;
    const rows = height/stepSize;
    
    totalSteps = Math.floor(cols*rows*2);
    
    let primes = seive(totalSteps); // this is root
    while (step < totalSteps) {
        switch (state) {
            case 0:
                x += stepSize;
                break;
            case 1:
                y -= stepSize;
                break;
            case 2:
                x -= stepSize;
                break;
            case 3:
                y += stepSize;
                break;
            default:
                break;
        }

        if (step % numSteps == 0) {
            state = (state + 1) % 4;
            turnCounter++;
            if (turnCounter % 2 == 0) {
                numSteps++;
            }
        }
        if(step == primes[i]) {
            let dot = new Dot(x, y);
            canvas.draw(
                function () {
                    dot.draw(this);
                }.bind(canvas)
            );
            i++;    
        }
        step++;
    }
});
