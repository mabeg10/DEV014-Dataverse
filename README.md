# Dataverse

## Índice

* [1. Resumen del proyecto](#2-resumen-del-proyecto)
* [2. Prompting generado](#3-Prompting-generado)
* [3. Prototipo de alta fidelidad](#4-Prototipo-de-alta-fidelidad)
* [4. Funcionalidades](#5-funcionalidades)
* [5. Contacto](#6-contacto)

***

## 1. Resumen del proyecto

En este proyecto se ha desarrollado una interfaz de una Pagina Web para visualizar un conjunto de datos a través de tarjetas que se ha generado con un prompting y el apoyo de inteligencia artificial. La lógica del proyecto está implementada completamente en JavaScript
(ES6), HTML y CSS. 

Así mismo, como entregable final del proyecto, creamos una página web dedicada a la serie "GILMORE GIRL", 
donde los usuarios pueden visualizar tarjetas de los personajes, asi como filtrar, ordenar y calcular estadísticas. 

La evalución del proyecto se ejecutó a lo largo de 5 sprints.


### IDENTIFICAR:
Tenemos Cuatro Hitos de Material de apoyo. Los cuales hemos seguido al pie de la letra, y nos han servido al máximo como guía para el desarrollo total.  

### INVESTIGAR:
Se investigaron algunas funcionalidades que fueron utilizadas en el desarrollo de los Controles del Proyecto.

### IDEAR:
Para la parte de Idear, se pensaron en diferentes temáticas para el desarrollo del proyecto. Sin embargo, el consejo más ideal para el desarrollo del próximo proyecto, sería escoger una temática de personajes.

### PROTOTIPAR:
Se desarrolló el prototipo del proyecto a través de FIGMA. 

### PROBAR:
Desarrollamos finalmente el diseño total de la página. Además, hemos desarrollado test unitarios para probar las funcionalidades aplicadas.

## 2. Prompting utilizado 

Las siguientes capturas representan la construcción del arreglo de 24 objetos que se encuentra en el archivo dataset.js
los criterios para la construcción de esta data fueron los siguientes :

* `id`: Identificador único (no pueden haber dos elementos con el mismo `id`).
  Debe ser un string de no más de 32 caracteres, en minúscula, compuesto solo
  por letras, números, underscore (`_`) o guión (`-`). Por ejemplo: `"ada-lovelace"`.
* `name`: El nombre del personaje, país, película, etc.
* `shortDescription`: Descripción corta del elemento. Esta descripción deberá
  tener como máximo 20 palabras.
* `description`: Descripción extendida del elemento. Esta descripción deberá
  tener entre 80 y 100 palabras. Al momento de mostrar este dato en pantalla
  puedes truncarlo para que no ocupe tanto espacio.
* `imageUrl`: URL de la imagen. Esta imagen será generada a través de alguna
  herramienta basada en inteligencia artificial. Una vez generada la imagen,
  y guardada en tu repo, deberás agregar la URL en este campo.
* `facts`: Un objeto con al menos **3** "hechos" o "info" sobre este elemento, en
  formato `"nombre": "valor"`.

![Prompting Inicial](imágenes/prompting1.png)
![Segundo Prompting](imágenes/prompting2.png)


## 3. Prototipo de la fidelidad

Para realizar el prototipo de alta fidelidad utilizamos la creación de historias de usuaria para entender las necesidades de nuestro público objetivo:

¿Quiénes son las principales usuarias del producto?
Usuarias de más de 20 años que son fans de la serie gilmore girls o están viendo la serie.

Planificar las Historias de usuaria

¿Cuáles son los objetivos de estas usuarias en relación con el producto?
Conocer más acerca de los personajes de la serie

¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Los nombres de los personajes, sus intereses, la la frecuencia con la que aparecen a lo largo de todas las temporadas de la serie.

¿Cuándo utilizan o utilizarían el producto?
Cuando están interesadas en la serie.

c+c+c
1. Yo usuaria fan de GG quiero visualizar la data en la página web para conocer más sobre los personajes de la serie porque hay muchos personajes y temporadas, para evitar confusiones.
2. Yo usuaria fan de GG quiero filtrar los datos para poder encontrar facilmente los intereses de los personajes.
3. Yo usuaria fan de GG quisiera ordenar estos datos para poder localizar de forma más sencilla a los personajes.
4. Yo usuaria fan de GG quisiera calcular alguna estadística acerca de los personajes.

![Prototipos](imágenes/prototipos.png)



## 4. Funcionalidades


### `src/dataFunctions.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Este archivo contiene toda la funcionalidad que corresponde a obtener, procesar y manipular datos (tus funciones). Aquí se encuentran las funciones

* `filterData(data, filterBy, value)`: esta función recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `value`, indica el valor de campo que queremos filtrar.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada, esta función debe usar el método reduce.

Estas funciones son [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que la usuaria interactúe
(click, filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos con los que se trabaja am lo largo del proyecto.

### `test/dataFunctions.spec.js`

En este archivo están las  pruebas unitarias de las funciones
implementadas en el archivo `dataFunctions.js`. (`filterBy`, `sortBy`, etc.)

### `test/data.js`

En esta archivo se construye y se exporta la data "mock" para usar en los tests.


### `src/view.js`

Para alcanzar una mejor separación de responsabilidades en el código, éste
archivo contiene todas las funciones que se utilizarán para renderizar
los elementos dinámicamente.


## 5. Contacto

Este proyecto fue desarrollado por Mirella Rivas y María Belén Guzmán. Para cualquier información enviar un correo a mirella_rivas10@hotmail.com o mbguzman.099@gmail.com










  