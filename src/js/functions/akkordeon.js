class Akkordeon {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
      speed: 300
    };

    this.options = Object.assign(defaultOptions, options);
    this.akkordeon = document.querySelector(selector);
    this.control = this.akkordeon.querySelector('.akkordeon__control');
    this.content = this.akkordeon.querySelector('.akkordeon__content');
    this.event();
  }

  event() {
    console.log('event!');

    if(this.akkordeon) {
      this.akkordeon.addEventListener('click', (e) => {
        this.akkordeon.classList.toggle('open');

        if (this.akkordeon.classList.contains('open')) {
          this.open();
        } else {
          this.close();
        }
      })
    }
  }

  open() {
    this.akkordeon.style.setProperty('--akkordeon-time', `${this.options.speed / 1000}s`);
    this.akkordeon.classList.add('is-open');
    this.control.setAttribute('aria-expanded', true);
    this.content.setAttribute('aria-hidden', false);
    this.content.style.maxHeight = this.content.scrollHeight + 'px';
    this.options.isOpen(this);
  }
  
  close() {
    this.akkordeon.classList.remove('is-open');
    this.control.setAttribute('aria-expanded', false);
    this.content.setAttribute('aria-hidden', true);
    this.content.style.maxHeight = null;
    this.options.isClose(this);
  }
}

export const akkordeon1 = new Akkordeon('.akkordeon-1', {speed: 700});
export const akkordeon2 = new Akkordeon('.akkordeon-2', {speed: 700});