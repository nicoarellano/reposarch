// Select the canvas and set up the context
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initPoints(); // Reinitialize points
});

// Create points array
let points = [];
const numPoints = 50; // Number of points
const pointRadius = 5; // Radius of each dot

// Initialize points
function initPoints() {
    points = [];
    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2, // Random velocity x
            vy: (Math.random() - 0.5) * 2, // Random velocity y
            url: `https://example.com/link-${i + 1}`, // Assign unique links
        });
    }
}

// Check if a point is hovered over
function isPointHovered(x, y, point) {
    const dx = x - point.x;
    const dy = y - point.y;
    return Math.sqrt(dx * dx + dy * dy) < pointRadius;
}

// Add hover interaction
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if mouse is over any point
    let hovered = false;
    for (const point of points) {
        if (isPointHovered(mouseX, mouseY, point)) {
            canvas.style.cursor = 'pointer';
            hovered = true;
            break;
        }
    }

    if (!hovered) canvas.style.cursor = 'default';
});

// Add click interaction
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if any point is clicked
    for (const point of points) {
        if (isPointHovered(mouseX, mouseY, point)) {
            window.open(point.url, '_blank'); // Open link in a new tab
            break;
        }
    }
});

// Draw and animate points
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update points
    for (const point of points) {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    }

    // Draw connections
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

// Start animation
initPoints();
animate();
