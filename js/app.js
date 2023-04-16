'use strict'
import data from './data.js';
import dom from './dom.js';

const stays = await data.getData();

const $location_search_bar = document.getElementById("location");
const $guest_search_bar = document.getElementById("guests");
const $modal_search =document.getElementById("modal_search");

//Modal container
const $locationInput = document.getElementById("locationInput");
const $guestInput = document.getElementById("guestInput");
const $search_button  = document.getElementById("search-button");
let location_text = "";
let number_guest = 0;
//Activar el menu de busqueda al enfocar en cualquiera de estos elementos. Esto según la documentacion
//de Boostrap
$modal_search.addEventListener('shown.bs.modal',e=>{
    $location_search_bar.focus()
    $guest_search_bar.focus()
    
})
$locationInput.addEventListener('focusin', e=>{
    $locationInput.value = ""
    dom.showLocations(data.getDataLocations(stays));
})
$guestInput.addEventListener('focusin', e=>{
    $guestInput.value = ""
    dom.showGuestOptions();
})
$guestInput.addEventListener('keyup', e=>{
    try {
        let guest = $guestInput.value;
        guest = guest.split(" ");
        number_guest = parseInt(guest[0]);
        $guest_search_bar.value = $guestInput.value;
        console.log(number_guest)
    } catch (error) {
        alert("Introduzca un valor valido")
    }
     
})
$locationInput.addEventListener('keyup',e=>{
    location_text = $locationInput.value;
    $location_search_bar.value = $locationInput.value;
})
function buscarValores(location="",guest,stays) {
    let valores_filtrados= stays.filter(stay =>{
        return (stay.city.toLowerCase().includes(location.toLowerCase()) && location != "") || stay.maxGuests <= guest;
    })
    return valores_filtrados;
}
$search_button.addEventListener('click',e=>{
    dom.showCards(buscarValores(location_text,number_guest,stays))
})

dom.showCards(stays)
