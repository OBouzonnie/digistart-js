/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 2 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.
const bouton = document.getElementById("myBtn");

// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra afficher dans la console "Le bouton a été cliqué",
// ainsi qu'une alerte "Click !".
function btnClick(){
    console.log("Le bouton a été cliqué");
    alert("Click !");
}

// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.
bouton.addEventListener('click', btnClick);



