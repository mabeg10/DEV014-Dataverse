export function filterData(data, filterBy, value) {

  let resultadoFiltro = []

  resultadoFiltro = data.filter((element) => {

    return element.facts[filterBy].includes(value);

  })

  return resultadoFiltro;

}


/*export const anotherExample = () => {
  return [];
};                              */
