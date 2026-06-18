// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Animate Links
    const links = document.querySelectorAll('.nav-links li');
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `fadeUp 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    menuToggle.classList.toggle('toggle');
  });
}

// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  if (question && answer) {
    question.addEventListener('click', () => {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current item
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  }
});

// Flip Card Logic for Services Page
const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach(box => {
  box.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });

  box.addEventListener('mouseleave', function() {
    this.classList.remove('flipped');
  });
});

