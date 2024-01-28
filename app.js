// ELEMENT SELECTIONNER DU DOM 
let erreur = document.querySelector(".erreur");
let age = document.getElementById("age");
let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let btn = document.querySelector(".btn");
let reponse = document.querySelector(".reponse");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // RECUPERE LA VALEUR SAISIE PAR L'UTILISATEUR 
   let valAge = age.value.trim();
   let valTailleCm = taille.value.trim();
   let valPoids = poids.value.trim();

    // Appelle de la fonction pour les verifications
   verification(valAge,valTailleCm,valPoids);
})
// FONCTION POUR EFFECTUER LES VERIFICATION
function verification(valAge,valTailleCm,valPoids){
    // REGEX POUR EMPLECHER LES POINTS 
    let regex =   /^[^,.]*$/; 
    // TOUS LES CHAMPS SONT REMPLI
    if(valAge!='' && valTailleCm!='' && valPoids!=''){
        
        // AUCUN POINT 
        if(regex.test(valAge) && regex.test(valTailleCm) && regex.test(valPoids) ){
            erreur.innerText="";
        }
        // IL A UN POINT 
        else{ 
            erreur.innerText="Il ne doit pas avoir de point";
        }

    }
    // TOUS LES CHAMPS  NE SONT PAS REMPLI 
    else{
        // console.log("Tous les champs doivent etre rempli ");
        erreur.innerText="Tous les champs ne sont pas rempli";
    }

}