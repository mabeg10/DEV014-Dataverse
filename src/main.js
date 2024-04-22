import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData, computeStats } from './dataFunctions.js';

//Selectores del DOM
const root = document.querySelector('#root');
const estadistica = document.querySelector('#estadistica')
const selectFilter = document.querySelector('#filter')
const selectOrder = document.querySelector('#order')
const resetButton = document.getElementById('resetButton');
const buttonCalcular = document.getElementById('calcular')
const cerrar = document.getElementById("cerrar")
const nav= document.querySelector(".nav");

//MENU HAMBURGUESA
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('#menu-content').classList.toggle('show');
});
cerrar.addEventListener("click", ( ) => {
  nav.classList.toggle("visible");
})

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

  
resetButton.addEventListener('click', function () {

  // Limpiar los selectores 
  selectFilter.value = ''; 
  selectOrder.value = ''; 
  root.innerHTML = '';
  const cardsOriginales = renderItems(data);
  root.appendChild(cardsOriginales);
    
});
    
//ESTADÍSTICA
let resultadoElement = null; // Variable global para mantener una referencia al elemento del resultado

buttonCalcular.addEventListener('click', function (){
  const resultado = computeStats(data);
  console.log(resultado);
  
  // Si ya hay un resultado impreso, elimínalo
  if (resultadoElement) {
    resultadoElement.remove();
    resultadoElement = null; // Restablecer la referencia a null
  } else {
    // Muestra el resultado en un elemento del DOM
    resultadoElement = document.createElement('p');
    resultadoElement.textContent = `El promedio de número de apariciones es: ${resultado.mean}`;
    estadistica.appendChild(resultadoElement);
  }
  
});

