(function () {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    class Circle {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 77, 77, 0.05)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 77, 77, 0.1)';
            ctx.stroke();
        }
    }

    const circles = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const radius = Math.random() * 30 + 1;
        circles.push(new Circle(x, y, radius));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const circle of circles) {
            circle.draw();
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
