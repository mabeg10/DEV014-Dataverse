import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData, computeStats } from './dataFunctions.js';

document.addEventListener('DOMContentLoaded', function () {

  // Selectores del DOM
  const root = document.querySelector('#root');
  const estadistica = document.querySelector('#estadistica');
  const selectFilter = document.querySelector('#filter');
  const selectOrder = document.querySelector('#select-sort');
  const resetButton = document.getElementById('resetButton');
  const buttonCalcular = document.getElementById('calcular');
  const abrir = document.querySelector('.abrir-menu');
  const cerrar = document.querySelector("#cerrar");
  const nav = document.querySelector(".nav");

  // MENU HAMBURGUESA
  abrir.addEventListener('click', function () {
    nav.classList.add('visible');
  });

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });

  let dataFiltrada = data;

  const resultRenderItems = renderItems(dataFiltrada);
  root.appendChild(resultRenderItems);

  //Filter
  selectFilter.addEventListener('change', function (event) {
    dataFiltrada = filterData(data, 'intereses', event.target.value);

    root.innerHTML = '';

    const cardsFiltrados = renderItems(dataFiltrada);
    root.appendChild(cardsFiltrados);
  });

  // Filtro ordenar
  selectOrder.addEventListener('change', function (event) {
    const resultadoSortData = sortData(dataFiltrada, 'name', event.target.value);

    root.innerHTML = '';

    const cardsOrdenados = renderItems(resultadoSortData);
    root.appendChild(cardsOrdenados);
  });

  resetButton.addEventListener('click', function () {
    selectFilter.value = '';
    selectOrder.value = '';
    root.innerHTML = '';
    dataFiltrada = data;
    const cardsOriginales = renderItems(data);
    root.appendChild(cardsOriginales);
  });

  // ESTADÍSTICA
  let resultadoElement = null; 

  buttonCalcular.addEventListener('click', function () {
    const resultado = computeStats(data);
    console.log(resultado);

    if (resultadoElement) {
      resultadoElement.remove();
      resultadoElement = null;
    } else {
      resultadoElement = document.createElement('p');
      resultadoElement.textContent = `El promedio de número de apariciones es: ${resultado.mean}`;
      estadistica.appendChild(resultadoElement);
    }
  });

});
