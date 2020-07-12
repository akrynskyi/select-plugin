import '@/styles/main.scss';
import { Select } from '@/select/Select.js';

const destroyBtn = document.getElementById('btn');
const displayValue = document.getElementById('value');

const select = new Select({
  selector: '#select',
  label: 'Fruits',
  options: [
    'Orange',
    'Apple',
    'Cherry',
    'Pear',
    'Strawberry'
  ],
  callback: display
});

destroyBtn.addEventListener('click', () => select.destroy());

function display(value) {
  displayValue.innerText = value;
}
