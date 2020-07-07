import '@/styles/main.scss';
import { Select } from '@/select/Select.js';

const select = new Select({
  selector: '#select',
  label: 'Fruits',
  options: [
    'Orange',
    'Apple',
    'Cherry',
    'Pear',
    'Strawberry'
  ]
});

document.getElementById('btn').addEventListener('click', () => select.destroy());

