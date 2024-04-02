export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //const AccesoAlNodo = document.querySelector('#root')

  const elementUl = document.createElement('ul');
  
  data.forEach((personajes) => {
    console.log (personajes);
    const elementli = document.createElement('li');
    elementli.classList.add("styleli")
    //elementli.textContent=personajes.name.shortDescription;
    const dlpersonajes = document.createElement('dl');
    dlpersonajes.setAttribute("itemtype","Gilmore Girls Universe");
    dlpersonajes.setAttribute("itemscope","");
    
    const img = document.createElement('img');
    img.src = personajes.imageUrl;

    const dtName = document.createElement('dt');
    const ddName = document.createElement('dd');
    ddName.textContent = personajes.name;

    const dtShortDescripcion = document.createElement('dt');
    dtShortDescripcion.textContent = 'Descripción:';
    const ddShortDescripcion = document.createElement('dd');
    ddShortDescripcion.textContent = personajes.shortDescription;

    dlpersonajes.appendChild(img);
    dlpersonajes.appendChild(dtName);
    dlpersonajes.appendChild(ddName);
    dlpersonajes.appendChild(dtShortDescripcion);
    dlpersonajes.appendChild(ddShortDescripcion);
  

    elementli.appendChild(dlpersonajes);

    elementUl.appendChild(elementli);
  });
 
  //AccesoAlNodo.appendChild(elementUl);
  return elementUl;
};


