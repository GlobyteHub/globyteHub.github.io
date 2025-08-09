// Small JS for interactivity: scroll reveal, simple contact handler, year
document.addEventListener('DOMContentLoaded', function(){
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // simple scroll reveal for .fade-in elements
  const reveal = () => {
    document.querySelectorAll('.fade-in').forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  };
  reveal();
  window.addEventListener('scroll', reveal);

  // contact handler (simple client-side fake send)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){ alert('Please complete all fields.'); return; }
    // show success (you can later connect to Formspree or email service)
    alert('Thanks, ' + name + '! Message received. I will respond to ' + email + ' within 24 hours.');
    form.reset();
  });
});
