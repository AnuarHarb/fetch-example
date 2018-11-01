'use strict';

const API_URL = "https://rickandmortyapi.com/api/location";
const list = document.querySelector('.list');

fetch(API_URL)
  .then(function(respuesta){
    console.log('La Api nos respondio :)')
    return respuesta.json()
  })
  .then(function(resp){
    console.log(resp)
    printLocation(resp.results);
  })
  .catch(function(){
    console.log('La Api no nos respondio t_t')
  })


function printLocation(locations) {
  for(let location of locations) {
    // console.log(location.name + " (" + location.type + ")");
    if(location.type == 'Space station') {

    } else{
      list.innerHTML += `
      <li class="location ${location.type}"> ${location.name} (${location.type}) </li>
      `
    }
  }
}
