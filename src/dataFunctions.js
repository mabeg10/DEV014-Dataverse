
export function filterData(data, filterBy, value) {

  if(!data || !filterBy || !value) return 'Faltan definir parametros' // Ejemplo coach Carlos

  let resultadoFiltro = []

  resultadoFiltro = data.filter((element) => {

    return element.facts[filterBy].includes(value);

  })

  return resultadoFiltro;

}

export function sortData(data, sortBy, sortOrder) {
  
  const copiarData = data.map(item => ({...item})); //item => (...)
  console.log(copiarData)

  if (!data || !sortBy || !sortOrder) {
    return undefined; // O puedes retornar un mensaje de error como 'Parámetros no definidos'
  }

  if (sortBy === 'name') {
    if (sortOrder === 'asc') {
      return copiarData.sort ((a,b) => a.name.localeCompare (b.name));
    }else {
      return copiarData.sort ((a,b) => b.name.localeCompare (a.name));
    }
  } else {
    if (sortOrder === 'desc') {
      return copiarData.sort ((a,b) => a[sortBy] - b [sortBy]);
    } else {
      return copiarData.sort((a,b) => b[sortBy] - a [sortBy])
    } 
  }
}


//export const anotherExample = () => {
//return [];
//};                            