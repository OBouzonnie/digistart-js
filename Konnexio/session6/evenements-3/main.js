/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.
const btn = document.getElementById('btn');




// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().
function clickbtn(){
    const p = document.createElement('p');
    p.textContent = 'yolo';
    btn.innerHTML = p; 
}

const p = document.createElement('p');
    console.log(p)




// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.
btn.addEventListener('click', clickbtn);



