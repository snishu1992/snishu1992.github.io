// small interactions: year, smooth scroll, reveal animations, contact form mailto
document.getElementById('year').innerText = new Date().getFullYear();

// smooth scrolling for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    // update hash without jump
    history.replaceState(null, '', href);
  });
});

// reveal elements when in viewport (simple)
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(ent=>{
    if (ent.isIntersecting) {
      ent.target.classList.add('in');
      observer.unobserve(ent.target);
    }
  });
},{threshold: 0.12});

document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));

// contact form: open mail client
function submitContact(evt){
  evt.preventDefault();
  const f = evt.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const message = f.message.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:snishu1992@gmail.com?subject=${subject}&body=${body}`;
}
