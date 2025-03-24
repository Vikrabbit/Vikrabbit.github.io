/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const rdvButton = document.getElementById("rendez-vous");
    if (rdvButton) {
        rdvButton.addEventListener("click", function() {
            window.location.href = "ton-lien-calendly-ou-contact";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.querySelector('.answer');
            const isOpen = answer.style.display === 'block';

            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.answer');
                if (otherAnswer !== answer) {
                    otherAnswer.style.display = 'none';
                    const toggleIcon = otherItem.querySelector('.toggle-answer');
                    toggleIcon.src = 'up-arrow.png'; 
                }
            });

            if (isOpen) {
                answer.style.display = 'none';
                const toggleIcon = this.querySelector('.toggle-answer');
                toggleIcon.src = 'up-arrow.png'; 
            } else {
                answer.style.display = 'block';
                const toggleIcon = this.querySelector('.toggle-answer');
                toggleIcon.src = 'down-arrow.png'; 
            }
        });
    });
});