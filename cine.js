// Datos deben ser globales
const  peliculas  =  [ {
    id : 'ligaDC' ,
    nombre : 'Liga de la Justicia' ,
    año : 2020 ,
    personas : 10 ,
    capacidad : 10
  } , 
  {
    id : 'ligaDC2' ,
    nombre : 'Liga de la Justicia2' ,
    año : 2020 ,
    personas : 10 ,
    capacidad : 10
  } ] ;
  
  // funcion que crea la cartelera 
  const  cartelera  =  ( )  =>  {
    documento . querySelector ( '#cine' ) . innerHTML  =  peliculas . mapa ( pelicula  =>  {
      const  { nombre , año , personas , capacidad }  =  pelicula ;
      // Falta sumar el porcentaje que representa el numero de personas sobre la capacidad
      // Poner dentro de una etiqueta strong cuando llegue al 100%
      return  `<div>
                <h3> $ { nombre } </h3>
                <p> $ { año } </p>
                <p> $ { personas } </p>
                <p> $ { capacidad } </p>
              </div> ` ;
    } ) ;
  } ;
  cartelera ( ) ;
  
  // funcion que actualiza el listado de peliculas
  const  listado  =  ( )  =>  {
    documento . querySelector ( '#pelicula' ) . innerHTML  =  peliculas . mapa ( pelicula  =>  {
      // las opciones tienen un atributo que se llama disable, deben sumarlo si se llego al limite de la pelicula
      return  `<option value =" $ { pelicula . id } "> $ { pelicula . nombre } </option> ` ;
    } ) ;
  } ;
  listado ( ) ;
  
  // boton que se encarga de sumar una nueva pelicula
  documento . querySelector ( '#nueva' ) . addEventListener ( 'hacer clic' ,  ( )  =>  {
    // aca convirte un texto en un array, quiere decir que deben escribir todo separado en comas 
    // ej .: ligaDC, Liga de la Justicia, 2020, 10, 10
    const  pelicula  =  documento . querySelector ( '#datos' ) . valor . dividir ( ',' ) ; 
    // aca deben tomar ese array y convertirlo en un objeto tipo Pelicula
    // recuerden llamar las funciones de cartelera y listado
  } ) ;
  
  // boton que se encarga de actualizar pelicula
  documento . querySelector ( '#guardar' ) . addEventListener ( 'hacer clic' ,  ( )  =>  {
    const  numero  =  parseInt ( document . querySelector ( '#numero' ) . value ) ;
    const  peliculaSeleccionada  =  [ ... documento . querySelector ( '#pelicula' ) . selectedOptions ] . shift ( ) . valor ;
  
    // aca deben actualizar la pelicula que selecciono
    // recuerden llamar las funciones de cartelera y listado
  } ) ;