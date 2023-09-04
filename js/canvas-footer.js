window.onload = function () {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxDepth = 40;
    const particleAmount = 700;
    let input = document.getElementById('rangeInput');
    let speed = 0.05; //default value
    let maxDistributionX;
    let maxDistributionY;

    //input range
    speed = 1.5 / 10;

    const particles = new Array(particleAmount);

    const setWindowRelatedProperties = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        maxDistributionX = window.innerWidth / 8;
        maxDistributionY = window.innerHeight / 4;
    };

    setWindowRelatedProperties();

    window.addEventListener('resize', setWindowRelatedProperties);

    context.fillStyle = 'rgb(4,16,49)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const placeParticles = () => {
        for (let i = 0; i < particles.length; i += 1) {
            particles[i] = {
                x: random(-maxDistributionX, maxDistributionX),
                y: random(-maxDistributionY, maxDistributionY),
                z: random(1, maxDepth),
            };
        }
    };

    const moveParticles = () => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // .3 or .5 looks good, 1 for no shade
        context.fillStyle = 'rgb(4,16,49)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i += 1) {
            particles[i].z -= speed;

            if (particles[i].z <= 0) {
                particles[i].x = random(-maxDistributionX, maxDistributionX);
                particles[i].y = random(-maxDistributionY, maxDistributionY);
                particles[i].z = maxDepth;
            }

            const k = 100 / particles[i].z;
            const newX = particles[i].x * k + centerX;
            const newY = particles[i].y * k + centerY;

            if (newX >= 0 && newX <= window.innerWidth && newY >= 0 && newY <= window.innerHeight) {
                const size = (1 - particles[i].z / maxDepth) * 5;
                context.beginPath();
                context.fillStyle = '#ffffff';
                context.arc(newX, newY, size / 2, 0, Math.PI * 2, false);
                context.closePath();
                context.fill();
            }
        }

        window.requestAnimationFrame(moveParticles);
    };

    placeParticles();
    window.requestAnimationFrame(moveParticles);
};