document.addEventListener('DOMContentLoaded', function() {
    // Array of flirtatious messages for typing animation
    const flirtLines = [
      "Let’s blossom in the moonlight.",
      "Even the most beautiful flowers fade next to your glow.",
      "I am a flower, and I want to grow in your arms",
    ];
  
    // Typing animation function
    function typeMessage(message, callback) {
      const span = document.getElementById('typing-text');
      span.textContent = '';
      let i = 0;
      const speed = 50; // Typing speed in milliseconds
      const interval = setInterval(() => {
        if (i < message.length) {
          span.textContent += message[i];
          i++;
        } else {
          clearInterval(interval);
          setTimeout(callback, 500); // Brief pause before navigating
        }
      }, speed);
    }
  
    // Handle navigation with typing animation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const overlay = document.getElementById('loading-overlay');
        overlay.style.display = 'flex';
        const randomFlirt = flirtLines[Math.floor(Math.random() * flirtLines.length)];
        typeMessage(randomFlirt, () => {
          window.location.href = href;
        });
      });
    });
  
    // Handle "Add to Cart" popup
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const popup = document.getElementById('cart-popup');
        popup.classList.add('show');
        setTimeout(() => {
          popup.classList.remove('show');
        }, 2000); // Popup visible for 2 seconds
      });
    });
  });