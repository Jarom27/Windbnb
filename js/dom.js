/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $cards_container = document.getElementById("cards-container");
const createNewCard = (stay)=>{
    let $card = document.createElement("div");
    $card.className = "card d-flex flex-column col-12 col-md-4 border-0 pb-5"
    $card.innerHTML = `
        <div class="img-object-fit card-img-top">
            <img class="object-fit-cover rounded-4  w-100 h-100" src="${stay.photo}">
        </div>
        <div class="ps-0 container mt-4 d-flex justify-content-between">
            ${stay.superHost ? '<p class="text-uppercase border py-2 px-3 rounded-pill fs-5">super host</p>':''}
            <div class="py-2">
                <p class="text-secondary-emphasis fs-5 text-opacity-75 fw-semibold">${stay.type} ${stay.beds !=null ? `, ${stay.beds} beds` : ""}</p>
            </div>
            <div class="d-flex flex-row">
                <span class=" material-symbols-outlined text-danger">star</span> 
                <p class="py-2 fs-5">${stay.rating}</p>
            </div>
        </div>
        <h2 class="fw-semibold text-start fs-4">${stay.title}</h2>
    `
    return $card
}
const showCards= (stays)=>{
    $cards_container.innerHTML = "";
    stays.forEach(stay=>{
        $cards_container.appendChild(createNewCard(stay))
    })
}
export default{
    showCards
}