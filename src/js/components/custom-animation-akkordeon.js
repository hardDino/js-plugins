
document.addEventListener('DOMContentLoaded', () => {
  const akkordeon = document.querySelectorAll('.custom__item');

  akkordeon.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.custom__control');
      const content = self.querySelector('.custom__content');

      self.classList.toggle('open');
      
      //if akkordeon is open
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});