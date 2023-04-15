import data from './data.js';
import dom from './dom.js';

const stays = await data.getData();
const $location_search_bar = document.getElementById("location");
const $guest_search_bar = document.getElementById("guests");
const $modal_search =document.getElementById("modal_search");

$modal_search.addEventListener('shown.bs.modal',e=>{
    $location_search_bar.focus()
})
dom.showCards(stays)
