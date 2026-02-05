document.addEventListener('DOMContentLoaded', () => {

    // Modal Interaction
    const modal = document.getElementById('modal');
    const ctaButtons = document.querySelectorAll('.cta-trigger');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('signup-form');
    const successMessage = document.getElementById('success-message');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate network request
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = 'Joining...';
        btn.disabled = true;

        setTimeout(() => {
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            // Assuming Netlify will handle the actual POST if we removed preventDefault, 
            // but for AJAX-like experience or testing:

            // If actually on Netlify, we might want to submit proper FormData
            /*
            const formData = new FormData(form);
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            }).then(() => ...).catch(error => alert(error));
            */

        }, 1500);
    });

    // Scroll Animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .mission-content').forEach(el => {
        el.style.opacity = '0'; // Initial state
        observer.observe(el);
    });

});
