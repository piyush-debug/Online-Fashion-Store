// Highlight the active navigation link
document.querySelectorAll('.header-list-nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.header-list-nav a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Animate add-to-cart icon when clicked
document.querySelectorAll('.buy-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.add('animate-icon');
        setTimeout(() => {
            this.classList.remove('animate-icon');
        }, 500); // Adjust timing as needed
    });
});

// Validate email input
document.querySelector('.newsletter-signup button').addEventListener('click', function(event) {
    const emailInput = document.querySelector('.newsletter-signup input');
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆️';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// CSS for Scroll-to-Top Button
const style = document.createElement('style');
style.textContent = `
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #088178;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px 15px;
    cursor: pointer;
    z-index: 1000;
}

.scroll-to-top.show {
    display: block;
}

.animate-icon {
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
}`;
document.head.appendChild(style);