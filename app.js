// ELEMENT SELECTIONNER DU DOM 
let erreur = document.querySelector(".erreur");
let age = document.getElementById("age");
let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let btn = document.querySelector(".btn");
// let reponse = document.querySelector(".reponse");
let imcAffiche = document.querySelector(".imc");
let information = document.querySelector(".information");

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
        imcAffiche.innerHTML = ` IMC: ${arrondirImc} insuffisance pondérale  `;
         information.innerHTML=` Ton poids est trop bas par rapport a votre taille. Aller voir votre medecin pour vérifier si bous n'avez pas de problème de santé .`
        

    } else{ 
        // ENTRE 18.5 ET 25
        if( arrondirImc >=18.5 && arrondirImc<25){
              imcAffiche.innerHTML = `IMC: ${arrondirImc} : Normal `;
              information.innerHTML=`Continue comme ça ton poids est idéale par rapport a ta taille`
        } else{
            // ENTRE 25 ET 30
            if(arrondirImc >=25 && arrondirImc <30){
                 imcAffiche.innerHTML = `IMC: ${arrondirImc} : surpoids `;
                 information.innerHTML=`Attention tu es en surpoids . Il faut que que tu fasse attention. Equillibre ton alimentation.Tu risque d'avoir des problème de santé`
            }else{
                // ENTRE 30 et 35
                if(arrondirImc >=30 && arrondirImc <35){
                    imcAffiche.innerHTML = `IMC: ${arrondirImc} :obésité modérée`
                    information.innerHTML=`Tu es en obésidité modéré . Il faut équilibré ton alimentation car tu risque des problème de santé important`
                }
                else{
                    // ENTRE 35 ET 40
                    if(arrondirImc >=35 && arrondirImc <40){
                        imcAffiche.innerHTML = `IMC: ${arrondirImc} : obésité sevére `
                        information.innerHTML=`Tu es en obésité sévére . A long terme tu peux avoir de grave problème de santé. Je te conseille d'aller consulter ton médecin.`
                    }else{
                        // SUPERIEUR OU EGALE A 40
                        imcAffiche.innerHTML = `IMC: ${arrondirImc} : obésité massive ou morbide `
                        information.innerHTML=`Tu en obésiter massive . Va consulter ton médécin pour qu'il te donne des conseille .Si tu reste dans cette situation tu risque de grave problème de santé `
                    }
                }
            }
        }
    }
}

