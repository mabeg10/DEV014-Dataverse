//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log( renderItems(data));
const AccesoAlNodo = document.querySelector('#root');

AccesoAlNodo.appendChild(renderItems(data));