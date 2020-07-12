export class Select {

  constructor({selector, label, options, callback}) {
    this.$el = document.querySelector(selector);
    this.label = label || 'New select';
    this.options = options || [];
    this.callback = callback;

    this.init();
  }

  init() {
    this.$el.classList.add('select');
    this.$el.appendChild(this.selectLabel());
    this.$el.appendChild(this.optionList());
    this.addListener();
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
    const li = document.createElement('li');

    li.innerText = this.label;
    li.classList.add('disabled');
    ul.classList.add('select__options');
    ul.appendChild(li);

    this.options.forEach(option => {
      const li = document.createElement('li');
      li.innerText = option;
      ul.appendChild(li);
    });

    return ul;
  }

  addListener() {
    this.$el.addEventListener('click', this.on.bind(this));
  }

  open(event, optionsList) {
    event.currentTarget.classList.add('active');
    optionsList.classList.add('block');
    setTimeout(() => optionsList.classList.add('active'), 0);
  }

  close(event, optionsList) {
    event.currentTarget.classList.remove('active');
    optionsList.classList.remove('active');
    setTimeout(() => optionsList.classList.remove('block'), 0);
  }

  select(event, options, label) {
    options.forEach(option => option.classList.remove('selected'));
    event.target.classList.add('selected');
    label.innerText = event.target.innerText;
  }

  on(event) {
    const optionsList = event.currentTarget.querySelector('.select__options');
    const label = event.currentTarget.querySelector('.select__label');
    const options = optionsList.childNodes;

    if (event.target.classList.contains('select')) this.open(event, optionsList);
    if (event.target.classList.contains('disabled')) this.close(event, optionsList);

    if(optionsList.classList.contains('active')) {
      this.select(event, options, label);
      this.callback(event.target.innerText);
      this.close(event, optionsList);
    }
  }
}

// { capture: false, once: true, passive: false }
