//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const AccesoAlNodo = document.querySelector('#root')

AccesoAlNodo.appendChild(renderItems(data));