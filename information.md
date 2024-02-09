# INFORMATION SUR LE STYLE DE LA PAGE 
## Couleurs
### Couleur fond du bouton envoyer
#ECA4A6

### Couleur du fond des champs de saisie 
#F5F5F5

## Bouton information 
### Couleur du texte 
white 

### border-radiuis
<!-- 15px -->

# Test 
## Test de l'evenement click sur le bouton 
Cela fonctionne . On rentre dans la fonction.

# VERIFICATION

## Tous les champs sont rempli


## Verifier que age est compris entre 18 et 64 ans et inferieur a 110 ans 
Si ce n'es pas le cas il faudra mettre un message disant que IMC est falcutatif pour votre age . De ne pas en tenir compte .

## enpecher les point avec un regex

# TABLEAU POUR IMC 
-  -18,5 : insuffisance pondérale, comprenez "maigre" . Il faut en discuter avec votre medecin pour verifier que vous n'avez pas de pb de santé.
-  entre 18,5 et 25 : normal
-  entre 25 et 30 :  surpoids 
- entre 30 et 34,9: l'obésité est "modérée"
- entre 35 et 39,9: l'obésité est "sévère"
- au-dessus de 40, l'obésité est "massive"

# A faire 
- Enlever age car on ne l'utilise pas 
- Design de la réponse pour IMC . 

# Pour le design de IMC 
- Remplacer le p de la class réponse par une div  
- Avant les condition creer un element p avec une class 
    ````
    let pRep = document.createElement("p") ;
    pRep.setAttribute("class","rep");
    
    ````
- Enlever les return  
     ````
    pRep.innerText = ``;
    ````    
- Après toutes les conditions 
    ````
    reponse.appendChild("pRep")
    ````