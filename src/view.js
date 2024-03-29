export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const AccesoAlNodo = document.querySelector('#root')
  const elementUl = document.createElement('ul');
  
  data.forEach((personajes) => {
    console.log (personajes);
    const elementli = document.createElement('li');
    elementli.textContent=personajes.name.shortDescription;


    elementUl.appendChild(elementli)



    
  
    return 'elementoUl';
  
  
  
  });

  (() =>{ AccesoAlNodo.appendChild(elementUl)
  }
  )();
}
