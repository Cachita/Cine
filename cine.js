// Datos deben ser globales
const peliculas = [{
    id: 'ligaDC',
    name: 'Liga de la Justicia',
    year: 2020,
    people: 10,
    capacity: 10
  }, 
  {
    id: 'ligaDC2',
    name: 'Liga de la Justicia2',
    year: 2020,
    people: 10,
    capacity: 10
}];
  
  // funcion que crea la cartelera 
const cartelera = () => {
    document.querySelector('#cine').innerHTML = peliculas.map(pelicula => {
      const { name, year, people, capacity } = pelicula;
      // Falta sumar el porcentaje que representa el numero de personas sobre la capacidad
      // Poner dentro de una etiqueta strong cuando llegue al 100%
      return `<div>
            <h3>${name}</h3>
            <p>${year}</p>
            <p>${people}</p>
            <p>${capacity}</p>
            </div>`;
    });
};
  cartelera();
  
  // funcion que actualiza el listado de peliculas
  const listado = () => {
    document.querySelector('#pelicula').innerHTML = peliculas.map(pelicula => {
      // los options tienen un atributo que se llama disable, deben sumarlo si se llego al limite de la pelicula
      return `<option value="${pelicula.id}">${pelicula.name}</option>`;
    });
  };
  listado();
  
  // boton que se encarga de sumar una nueva pelicula
  document.querySelector('#nueva').addEventListener('click', () => {
    // aca convirte un texto en un array, quiere decir que deben escribir todo separado en comas 
    // eg: ligaDC, Liga de la Justicia, 2020, 10, 10
    const pelicula = document.querySelector('#datos').value.split(','); 
    // aca deben tomar ese array y convertirlo en un objeto tipo Pelicula
    // recuerden llamar las funciones de cartelera y listado
  });
  
  // boton que se encarga de actualizar pelicula
  document.querySelector('#guardar').addEventListener('click', () => {
    const numero = parseInt(document.querySelector('#numero').value);
    const peliculaSeleccionada = [...document.querySelector('#pelicula').selectedOptions].shift().value;
  
    // aca deben actualizar la pelicula que selecciono
    // recuerden llamar las funciones de cartelera y listado
  });