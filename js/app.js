import data from './data.js';
import dom from './dom.js';

const stays = await data.getData();
const $location_search_bar = document.getElementById("location");
const $guest_search_bar = document.getElementById("guests");
const $modal_search =document.getElementById("modal_search");
const $locationInput = document.getElementById("locationInput");
const $guestInput = document.getElementById("guestInput");
const $search_button  =document.getElementById("search-button");
let  filtered_stays_by_location = [];
console.log($search_button)
//Activar el menu de busqueda al enfocar en cualquiera de estos elementos. Esto según la documentacion
//de Boostrap
$modal_search.addEventListener('shown.bs.modal',e=>{
    $location_search_bar.focus()
    $guest_search_bar.focus()
    $locationInput.value = ""
})
$locationInput.addEventListener('keyup',e=>{
    filtered_stays_by_location = stays.filter(stay => {
        return stay.city.toLowerCase().includes($locationInput.value.toLowerCase()) || stay.country.toLowerCase().includes($locationInput.value.toLowerCase())
    });
})

$search_button.addEventListener('click',e=>{
    console.log(filtered_stays_by_location)
    dom.showCards(filtered_stays_by_location)
})

dom.showCards(stays)
