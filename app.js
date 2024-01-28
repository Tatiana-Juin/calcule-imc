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
    let regexPoint =   /^[^,.]*$/; 
    // TOUS LES CHAMPS SONT REMPLI
    if(valAge!='' && valTailleCm!='' && valPoids!=''){
       
        // IL N'Y A PAS DE CHIFFRE NEGATIF
        if (valAge >0 && valTailleCm > 0 && valPoids>0) {
            
            // ON VERIFIE QUE LA TAILLE CONTIENT TROIS CHIFFRE  
            if(valTailleCm.length ===3 && valPoids.length > 1 && valPoids.length <4){
                // console.log("super");
    
                // AUCUN POINT 
                if(regexPoint.test(valAge) && regexPoint.test(valTailleCm) && regexPoint.test(valPoids) ){
                    erreur.innerText="";
    
                    // APPELLE DE LA FONCTION calculeImc
                    calculeImc(valAge,valTailleCm,valPoids);
                }
                // IL A UN POINT 
                else{ 
                    erreur.innerText="Il ne doit pas avoir de point";
                }
            }
            // ERREUR POUR LA TAILLE ET LE POIDS 
            else{
                // console.log("erreur 3 nb pour la taille et 2 chiffre minimum pour le poids");
                erreur.innerHTML="erreur 3 nb pour la taille <br> 2 chiffre minimum pour le poids"
            }
        }
        // LES CHAMPS NE DOIVENT PAS ETRE NEGATIF 
        else{
            erreur.innerText="Les chiffre ne doivent pas etre negatif";
        }   

    }
    // TOUS LES CHAMPS  NE SONT PAS REMPLI 
    else{
        
        erreur.innerText="Tous les champs ne sont pas rempli";
    }

}

function calculeImc(valAge,valTailleCm,valPoids){
    // console.log("dans la fonction");
    let valTaille = valTailleCm / 100;
    // console.log(valTaille);
    let tailleCarre = valTaille * valTaille;
    // console.log(tailleCarre);
    let imc = valPoids / tailleCarre;
   reponse.innerHTML = `Ton IMC est de ${imc}`
}