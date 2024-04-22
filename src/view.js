export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const elementUl = document.createElement('ul');

  data.forEach((personajes) => {

    const elementli = document.createElement('li');
    elementli.classList.add("stiloLi");

    // CREAR MI DL [DT-DD]
    const dlpersonajes = document.createElement('dl');  //list definition
    elementli.setAttribute("itemtype", "personajes");
    elementli.setAttribute("itemscope", ""); 
    

    //IMG
    const img =document.createElement('img')
    img.src = personajes.imageUrl         

    //DT NAME - DD NAME
    const dtName = document.createElement('dt')      
    dtName.textContent = 'Nombre:'; 

    const ddName = document.createElement('dd')
    ddName.textContent = personajes.name;          //xq aca no aplica 1ro un dtName.texcontent='Nombre:'

    //DT SHORT DESCRIPTION DD SHORT DESCRIPTION
    const dtShortDescription = document.createElement('dt')
    dtShortDescription.textContent = 'Description:';            //esto es para cambiar el termino x description
   
    const ddShortDescription = document.createElement('dd')
    ddShortDescription.textContent = personajes.shortDescription; //esto es para reempazar el shortD en el contenidodd

    const dtIntereses = document.createElement('dt')  
    dtIntereses.textContent = 'Intereses: ';

    const ddIntereses = document.createElement('dd')
    ddIntereses.textContent = personajes.facts.intereses

    elementli.appendChild(dlpersonajes);

    //GUARDO
    dlpersonajes.appendChild(img);
    dlpersonajes.appendChild(dtName);
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

