const WHATSAPP_CONFIG = {
  phone: '5491123456789',
  message: 'Hola, vi la landing de WEBLIFT Agency y quiero coordinar una propuesta.'
};

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-whatsapp-button], #whatsappBtn');
  if (!button) return;

  event.preventDefault();
  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.message);
  const url = isMobile
    ? `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_CONFIG.phone}&text=${encodedMessage}`;

  window.open(url, '_blank', 'noopener,noreferrer');
});

const revealItems = document.querySelectorAll('[data-reveal]');

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 90, 300)}ms`;
});

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
