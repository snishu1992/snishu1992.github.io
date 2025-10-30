// Small helper JS for interactions
document.getElementById('year').innerText = new Date().getFullYear();

// Mobile menu toggle (simple)
const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
  menuBtn.classList.toggle('open');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Contact form: open mail client with prefilled content
function submitContact(evt){
  evt.preventDefault();
  const form = evt.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:snishu1992@gmail.com?subject=${subject}&body=${body}`;
}
