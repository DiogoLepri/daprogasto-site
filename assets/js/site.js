// Só o que HTML não faz sozinho: ano do rodapé, menu no celular e o
// aparecer suave das seções (desligado para quem pede menos movimento).
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

const btn = document.querySelector('.menu-btn');
const mobile = document.querySelector('.nav-mobile');
if (btn && mobile) {
  btn.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobile.classList.remove('open')));
}

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}
