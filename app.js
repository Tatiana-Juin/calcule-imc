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
            return erreur.innerHTML = "<ul><li>" + messageErreurs.join("</li><li>") + "</li></ul>";
        }
        else{
            // pas de message erreur
            erreur.innerHTML="";
            // APPELLE DE LA FONCTION calculeImc avec 3 arguments 
           return calculeImc(valAge,valTailleCm,valPoids);
        }

   }else{
       return  erreur.innerText = "Tous les champs doivent etre rempli";
   }
}

function calculeImc(valAge,valTailleCm,valPoids){
    // POUR CALCULER IMC 
    let valTaille = valTailleCm / 100;
    let tailleCarre = valTaille * valTaille;
    let imc = valPoids / tailleCarre;
    // POUR ARRONDIR A 2 CHIFFRE APRES LA VIRGULE 
    let arrondirImc = Math.round(imc*100) /100;
    

    // IMC INFERIEUR A 18.5
    if(arrondirImc < 18.5){
        return reponse.innerHTML = ` <span class="imc">IMC: ${arrondirImc} </span> <br>  insuffisance pondérale. Ton poids est trop bas par rapport a votre taille. Aller voir votre medecin pour vérifier si bous n'avez pas de problème de santé .`;
    } else{ 
        // ENTRE 18.5 ET 25
        if( arrondirImc >=18.5 && arrondirImc<25){
            return  reponse.innerHTML = `IMC : ${arrondirImc} : Normal`;
        } else{
            // ENTRE 25 ET 30
            if(arrondirImc >=25 && arrondirImc <30){
                return reponse.innerHTML = `IMC :  ${arrondirImc} : surpoids`;
            }else{
                // ENTRE 30 et 35
                if(arrondirImc >=30 && arrondirImc <35){
                    return reponse.innerHTML = `IMC : ${arrondirImc} : obésité modérée`
                }
                else{
                    // ENTRE 35 ET 40
                    if(arrondirImc >=35 && arrondirImc <40){
                        return reponse.innerHTML = `  IMC : ${arrondirImc} : obésité sevére`
                    }else{
                        // SUPERIEUR OU EGALE A 40
                        return reponse.innerHTML = `IMC : ${arrondirImc} : obésité massive ou morbide`
                    }
                }
            }
        }
    }
}

