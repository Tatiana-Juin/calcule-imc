// ELEMENT SELECTIONNER DU DOM 
let age = document.getElementById("age");
let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let btn = document.querySelector(".btn");
let reponse = document.querySelector(".reponse");

// Evenement au click 
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    // RECUPERE LA VALEUR SAISIE PAR L'UTILISATEUR 
   let valAge = age.value.trim();
   let valTaille = taille.value.trim();
   let valPoids = poids.value.trim();
   
})