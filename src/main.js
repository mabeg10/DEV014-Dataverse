import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData } from './dataFunctions.js';

//Selectores del DOM
const root = document.querySelector('#root');
const selectFilter = document.getElementById('filter')
const selectOrder = document.getElementById('order')

let dataFiltrada = data;

const resultRenderItems = renderItems(dataFiltrada)
root.appendChild(resultRenderItems);

selectFilter.addEventListener('change', function (event) {
  console.log('event target value es valor de select: ', event.target.value)

  //Ejecutar función filterData
  dataFiltrada = filterData(data, 'intereses', event.target.value);
  console.log('ver lo que retorna filterData: ', dataFiltrada)

  
  root.innerHTML = '';
  
  // los nuevos cards con la data filtrada
  const cardsFiltrados = renderItems(dataFiltrada);
  root.appendChild(cardsFiltrados);


});

// filtro ordenar
selectOrder.addEventListener('change', function (event) {
  const resultadoSortData = sortData(dataFiltrada, 'name', event.target.value);
  console.log(resultadoSortData)

  root.innerHTML = '';
  
  const cardsOrdenados = renderItems(resultadoSortData);
  root.appendChild(cardsOrdenados);

});
