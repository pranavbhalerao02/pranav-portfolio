/* ============================================
   ANIMATIONS & CURSOR EFFECTS
   Pranav Portfolio
   ============================================ */

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const fadeElements = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach(section => {
  section.classList.add('fade-up');
  observer.observe(section);
});

const navbarLinks = document.querySelectorAll('nav a');

navbarLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
  });

  link.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});


/* ============================================
   CONTACT FORM SUBMISSION (Formspree JSON Fix)
   ============================================ */

const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the page from reloading/redirecting

    // 1. Give visual feedback on the submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // 2. Format the form data into a valid JSON object
    const formData = new FormData(contactForm);
    const formPayload = Object.fromEntries(formData);

    try {
      // 3. Post to Formspree using fetch with explicit JSON headers
      const response = await fetch(contactForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload) // Converts object to JSON string
      });

      if (response.ok) {
        alert('✨ Message sent successfully! I will get back to you soon.');
        contactForm.reset(); // Clears out the form inputs
      } else {
        alert('❌ Error: Form submission failed. Check your Formspree setup.');
      }
    } catch (error) {
      alert('❌ Connection failed. Please check your internet connection.');
    } finally {
      // 4. Reset the button text and enable it again
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}