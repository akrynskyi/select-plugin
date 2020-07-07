export class Select {

  constructor({selector, label, options}) {
    this.$el = document.querySelector(selector);
    this.label = label || 'New select';
    this.options = options || [];

    this.init();
  }

  init() {
    this.$el.classList.add('select');
    this.$el.appendChild(this.selectLabel());
    this.$el.appendChild(this.optionList());
    this.addListener();

    console.log(this.label);
    console.log(this.options);
  }

  destroy() {
    this.$el.remove();
    this.$el.removeEventListener('click', this.on);
  }

  selectLabel() {
    const span = document.createElement('span');
    span.classList.add('select__label');
    span.innerText = this.label;

    return span;
  }

  optionList() {
    const ul = document.createElement('ul');
    ul.classList.add('select__options');

    this.options.forEach(option => {
      const li = document.createElement('li');
      li.innerText = option;
      ul.appendChild(li);
    });

    return ul;
  }

  addListener() {
    this.$el.addEventListener('click', this.on);
  }

  on(event) {
    event.currentTarget.classList.toggle('active');
  }
}
