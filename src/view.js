export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const elementUl = document.createElement('ul');

  data.forEach((personajes) => {

    const elementli = document.createElement('li');
    elementli.classList.add("stiloLi");
    elementli.setAttribute("itemtype", personajes.id);
    elementli.setAttribute("itemscope", ""); 
    

    // CREAR MI DL [DT-DD]
    const dlpersonajes = document.createElement('dl');  //list definition
    

    //IMG
    const img =document.createElement('img')
    img.src = personajes.imageUrl         

    const ddName = document.createElement('dd')
    ddName.textContent = personajes.name;        
    ddName.setAttribute('itemprop','name')
    

    //DT SHORT DESCRIPTION DD SHORT DESCRIPTION
    const dtShortDescription = document.createElement('dt')
    dtShortDescription.textContent = 'Descripción:';          
   
    const ddShortDescription = document.createElement('dd')
    ddShortDescription.textContent = personajes.shortDescription; 
    

    const dtIntereses = document.createElement('dt')  
    dtIntereses.textContent = 'Intereses: ';

    const ddIntereses = document.createElement('dd')
    ddIntereses.textContent = personajes.facts.intereses

    elementli.appendChild(dlpersonajes);

    dlpersonajes.appendChild(img);
    dlpersonajes.appendChild(ddName);
    dlpersonajes.appendChild(dtShortDescription);
    dlpersonajes.appendChild(ddShortDescription);
    dlpersonajes.appendChild(dtIntereses);
    dlpersonajes.appendChild(ddIntereses);

    elementli.appendChild(dlpersonajes);

    elementUl.appendChild(elementli);

  });
 
  return elementUl;
};

