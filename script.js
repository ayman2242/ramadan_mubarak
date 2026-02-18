// Eid al-Fitr 2026 date (estimated - March 31, 2026)
// Note: Adjust this date based on actual moon sighting
const eidDate = new Date('2026-03-21T00:00:00').getTime();

// Countdown timer function
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eidDate - now;

    if (distance < 0) {
        document.querySelector('.countdown-section').innerHTML = '<h3 class="countdown-title">Eid Mubarak! 🎉</h3>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Create animated stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random()};
            animation: twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s;
            box-shadow: 0 0 ${2 + Math.random() * 3}px rgba(255, 255, 255, 0.8);
        `;
        starsContainer.appendChild(star);
    }
}

createStars();

// Shooting star effect
function createShootingStar() {
    const starsContainer = document.querySelector('.stars');
    const shootingStar = document.createElement('div');

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight / 2);

    shootingStar.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        top: ${startY}px;
        left: ${startX}px;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8),
                    0 0 20px 4px rgba(255, 255, 255, 0.4);
        animation: shootingStar 1.5s linear forwards;
    `;

    shootingStar.innerHTML = `
        <style>
            @keyframes shootingStar {
                0% {
                    transform: translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: translate(200px, 200px);
                    opacity: 0;
                }
            }
        </style>
    `;

    starsContainer.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 1500);
}

setInterval(createShootingStar, 8000);

// Music toggle functionality (optional)


// Note: For actual background music, you would need an audio file
// This is a placeholder for the toggle functionality


// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(card);
});

// Add sparkle effect on mouse movement
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #ffd700;
        border-radius: 50%;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        z-index: 1000;
        box-shadow: 0 0 10px #ffd700;
        animation: sparkleAnimation 1s ease-out forwards;
    `;

    sparkle.innerHTML = `
        <style>
            @keyframes sparkleAnimation {
                0% {
                    transform: scale(1) translateY(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) translateY(-20px);
                    opacity: 0;
                }
            }
        </style>
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add entrance animation trigger
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Console message for family
console.log('%c🌙 Ramadan Mubarak! 🌙', 'font-size: 24px; color: #ffd700; font-weight: bold;');
console.log('%cMay Allah bless you and your family ❤️', 'font-size: 16px; color: #0a1628;');
