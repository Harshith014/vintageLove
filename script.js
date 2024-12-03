function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 10 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    document.getElementById('space').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

function createOrbitingBubble(angle, text) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const radius = 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    bubble.style.left = `calc(50% + ${x}px)`;
    bubble.style.top = `calc(50% + ${y}px)`;
    bubble.textContent = text;
    
    document.getElementById('orbit-container').appendChild(bubble);
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 3 + 's';
    
    document.getElementById('stars').appendChild(star);
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    shootingStar.style.left = Math.random() * 100 + 'vw';
    shootingStar.style.top = Math.random() * 100 + 'vh';
    shootingStar.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.getElementById('shooting-stars').appendChild(shootingStar);
    
    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}

const passionateWords = ['Desire', 'Passion', 'Love', 'Lust', 'Embrace', 'Kiss', 'Touch', 'Caress'];

// Create orbiting bubbles
const numBubbles = 8;
for (let i = 0; i < numBubbles; i++) {
    const angle = (i / numBubbles) * Math.PI * 2;
    createOrbitingBubble(angle, passionateWords[i]);
}

// Create stars
for (let i = 0; i < 50; i++) {
    createStar();
}

// Create hearts at regular intervals
setInterval(createHeart, 1000);

// Create shooting stars at random intervals
setInterval(createShootingStar, Math.random() * 5000 + 3000);

// Initial creation of hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, 1000 * i);
}

// Passionate quotes
const quotes = [
    "Your touch ignites my soul",
    "Our love burns with eternal passion",
    "In your arms, I find my paradise",
    "Every moment with you is pure ecstasy",
    "Our hearts beat as one, forever entwined"
];

function showQuote() {
    const quoteElement = document.getElementById('passion-quotes');
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.style.opacity = 1;
    setTimeout(() => {
        quoteElement.style.opacity = 0;
    }, 5000);
}

setInterval(showQuote, 8000);

// Interactive elements
document.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
        const dx = e.clientX - bubble.getBoundingClientRect().left;
        const dy = e.clientY - bubble.getBoundingClientRect().top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
            bubble.style.transform = `scale(1.3) rotate(${Math.atan2(dy, dx)}rad)`;
            bubble.style.backgroundColor = 'rgba(139, 0, 0, 0.5)';
        } else {
            bubble.style.transform = 'scale(1) rotate(0rad)';
            bubble.style.backgroundColor = 'rgba(139, 69, 19, 0.3)';
        }
    });
});


