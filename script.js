document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxuryForm');
    const successMessage = document.getElementById('formSuccess');
    const fadeElements = document.querySelectorAll('.grid-item, .container-luxury');
    const checkScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight * 0.85) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        }, 300);
    });
});document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('luxuryForm');
    const successMessage = document.getElementById('formSuccess');
    const fadeElements = document.querySelectorAll('.grid-item, .container-luxury');
    const checkScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight * 0.85) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    });
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        }, 300);
    });
});
