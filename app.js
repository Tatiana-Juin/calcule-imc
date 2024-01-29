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
function verification(valAge, valTailleCm, valPoids) {
    // REGEX POUR AUTORISER QUE LES CHIFFRES
    let regexNumeric = /^[0-9]+$/;
    // TABLEAU POUR CONTENIR LES MESSAGES ERREURS
    let messageErreurs=[];
  
    //TOUS LES CHAMPS REMPLI 
   if (valAge !== "" && valTailleCm !== "" && valPoids !== ""){

        // NB NEGATIF , POINT
        if (!regexNumeric.test(valAge) || !regexNumeric.test(valTailleCm) || !regexNumeric.test(valPoids)){
            messageErreurs.push("Seule les chiffre sont autorisé");
        }

        // TAILLE
        if(valTailleCm.length !== 3 ){
            messageErreurs.push("Taille: 3 chiffre");
        }

        if( valTailleCm > 250){
            messageErreurs.push("Trop grand - taille maximum 250cm");
        }

        // POIDS 
        if(valPoids > 250){
            messageErreurs.push(" Poids max 250kg");
        }

        if(valPoids.length<2 || valPoids.length > 4){
            messageErreurs.push("Poids - 2 a 3 chiffre max");
        }

        // POUR AFFICHER LES MESSAGE D'ERREURS 
        if(messageErreurs.length > 0){
            erreur.innerHTML = "<ul><li>" + messageErreurs.join("</li><li>") + "</li></ul>";
        }

        else{
            erreur.innerHTML="";
            calculeImc(valAge,valTailleCm,valPoids);
        }

   }else{
        erreur.innerText = "Tous les champs doivent etre rempli";
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
