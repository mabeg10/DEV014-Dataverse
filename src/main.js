import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData } from './dataFunctions.js';

//Selectores del DOM
const root = document.querySelector('#root');
const selectFilter = document.getElementById('filter')

const resultRenderItems = renderItems(data)
root.appendChild(resultRenderItems);

selectFilter.addEventListener('change', function (event) {
  console.log('event target value es valor de select: ', event.target.value)

  //Ejecutar función filterData
  const resultadoFilterData = filterData(data, 'intereses', event.target.value);
  console.log('ver lo que retorna filterData: ', resultadoFilterData)

  // chat gpt Eliminar las tarjetas actuales del DOM
  root.innerHTML = '';

  // chat gpt Renderizar y mostrar solo las tarjetas filtradas en el DOM
  //generar los nuevos cards con la data filtrada
  const cardsFiltrados = renderItems(resultadoFilterData);
  root.appendChild(cardsFiltrados);

});
