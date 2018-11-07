'use strict';

const API_URL = "https://rickandmortyapi.com/api/location";
const list = document.querySelector('.list');


// Función que se encarga de hacer la petición a un url que se le pasa com parametro
function rickRequest(url) {
  fetch(url)
    .then(function(respuesta){
      return respuesta.json();
    })
    .then(function(resp){
      console.log(resp)
      printLocation(resp.results);
      requestNextPage(resp.info);
    })
    .catch(function() {
      console.log('no recibi respuesta');
    })
}

// Función que se encarga de revisar si es la última página (En caso de no serlo, vuelve a llamara a rickRequest())
function requestNextPage(info) {
  if(info.next == '') {
    console.log('no hay next')
  } else {
    console.log(info.next);
    rickRequest(info.next);
  }
}

// Llamada de la función rickRequest pot primera vez, pasandole como parametro la primera url
rickRequest(API_URL);

// Función que se encarga de crear las tarjetas con los datos de la api e inyectarlas en el Html
function printLocation(locations) {
  for(let location of locations) {
    if(location.dimension != 'unknown') {
      list.innerHTML += `
        <li class="location ${location.type}">
          <h2>  ${location.name} </h2>
          <p>(${location.type}) - ${location.dimension} </p>
        </li>
        `
    } else {
      list.innerHTML += `
        <li class="location unknown ${location.type}"> ${location.name} (${location.type}) - ${location.dimension} </li>
        <img src="${location.image}" >
        `
    }
  }
}
