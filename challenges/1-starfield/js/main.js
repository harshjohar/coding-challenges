let stars = [];
let speed;

document.addEventListener("DOMContentLoaded", function (event) {
    let canvas = new Canvas(document.getElementById("canvas"));
    canvas.translate(canvas.width / 2, canvas.height / 2);


    for (let i = 0; i < 5000; i++) {
        stars.push(
            new Star(
                Math.random() * canvas.width - canvas.width / 2,
                Math.random() * canvas.height - canvas.height / 2,
                Math.random() * (canvas.width / 2)
            )
        );
    }

    setInterval(() => {
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            star.update(speed);

            if (star.needsReset()) {
                star.reset(
                    Math.random() * canvas.width - canvas.width / 2,
                    Math.random() * canvas.height - canvas.height / 2,
                    Math.random() * (canvas.width / 2)
                );
            }
        }
    }, 1000 / canvas._fps);

    canvas.draw(
        function () {
            for (let i = 0; i < stars.length; i++) {
                stars[i].draw(this);
            }
        }.bind(canvas)
    );
});

document.addEventListener("mousemove", function(ev){
    speed = 20;
});

onmousedown = () => {
    speed = 0;
}

onmouseup = () => {
    speed = 10;
}