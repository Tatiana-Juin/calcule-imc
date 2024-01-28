// ELEMENT SELECTIONNER DU DOM 
let erreur = document.querySelector(".erreur");
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
   let valTailleCm = taille.value.trim();
   let valPoids = poids.value.trim();
    //TEST    
//    console.log(`Tu as ${valAge} ans , tu mesure ${valTailleCm}cm pour ${valPoids}kg`);

    //REGEX INTERDISANT LES POINT 
    let regex =   /^[^,.]*$/;   
    
    // VERIFICATION QUE TOUS LES CHAMPS SONT REMPLI 

    if(valAge!='' && valTailleCm!='' && valPoids!=''){
        
        // VERIFICATION QU'IL N'Y A PAS DE POINT 
        if(regex.test(valAge) && regex.test(valTailleCm) && regex.test(valPoids) ){

            // console.log("super");
            let valTaille = valTailleCm / 100;
            console.log(valTaille);
       
        }else{ // il a un point 
            console.log("Tu ne doit pas mettre de point ");
        }
       
    }else{  // tous les champs doivent etre rempli 
        console.log("Il faut remplir tous les champs ");
    }   
})