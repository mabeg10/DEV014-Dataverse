import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData, computeStats } from './dataFunctions.js';

//Selectores del DOM
const root = document.querySelector('#root');
const estadística = document.getElementById('estadística')
const selectFilter = document.getElementById('filter')  // Select con id filter
const selectOrder = document.getElementById("order")
const resetButton = document.getElementById('reset-button');
const buttonCalcular = document.getElementById('calcular') //Estadistica

let dataFiltrada = data;
const resultRenderItems = renderItems(dataFiltrada)
root.appendChild(resultRenderItems);

//FILTER
selectFilter.addEventListener('change', function (event) {
  console.log('event target value es valor de select: ', event.target.value)

  //ejecutar función filterData             FILTER DATA - AQUÍ SE UTILIZA
  const dataFiltrada = filterData(data, 'intereses', event.target.value);
  console.log('ver lo que retorna filterData: ', dataFiltrada)

  // chat gpt Eliminar las tarjetas actuales del DOM
  root.innerHTML = '';

  // chat gpt Renderizar y mostrar solo las tarjetas filtradas en el DOM
  //generar los nuevos cards con la data filtrada
  const cardsFiltrados = renderItems(dataFiltrada);   //¿xq no q se quede en root.appenchild(resultadoFilterData)?
  root.appendChild(cardsFiltrados);

});

//ORDER
selectOrder.addEventListener("change", function(event){
  //ejecutar funcion order
  const resultadoSortData = sortData(dataFiltrada, "name", event.target.value)
  console.log(resultadoSortData)

  root.innerHTML = '';

  const cardsOrdenados = renderItems(resultadoSortData);
  root.appendChild(cardsOrdenados)

  
});

resetButton.addEventListener('click', function () {

  selectFilter.value = ''; 
  selectOrder.value = ''; 
  root.innerHTML = '';
  const cardsOriginales = renderItems(dataFiltrada);
  root.appendChild(cardsOriginales);
});

//ESTADÍSTICA
buttonCalcular.addEventListener('click', function (){
  const resultado = computeStats(data);
  console.log(resultado)
  // Muestra el resultado en un elemento del DOM
  const resultadoElement = document.createElement('p');
  resultadoElement.textContent = `El promedio de número de apariciones es: ${resultado.mean}`;
  /*resultadoElement.setAttribute('id', 'resultado');  Asignar un id al elemento */
  estadística.appendChild(resultadoElement);

});