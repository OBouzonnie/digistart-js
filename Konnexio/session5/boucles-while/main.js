// /* LES BOUCLES WHILE */
// console.log('Bienvenue dans la console JavaScript');
// console.log('Vous êtes dans les exercices sur les boucles while');
// console.log(Date.now())
// // TODO: ÉTAPE 1
// // À l'aide d'une boucle while, afficher dans la console les nombres
// // de 1 à 10 compris.
// console.log('TODO 1');
// let i = 0;

// while(i <= 10){
//     console.log(i);
//     i++;
// }


// // TODO: ÉTAPE 2
// // Avec une autre boucle while, afficher les mêmes nombres dans la
// // console, mais dans l'ordre inverse.
// console.log('TODO 2');

// i = 10;

// while(i >= 0){
//     console.log(i);
//     i--;
// }

// var nombres = [45, 2, 89, 12, 44, 29, 11, 3];

// // TODO: ÉTAPE 3
// // À l'aide d'une boucle while, afficher les valeurs du tableau `nombres`
// // dans la console jusqu'à la valeur égale à 29.
// console.log('TODO 3');
// i = 0;
// while(nombres[i] != 29){
//     console.log(nombres[i]);
//     i++;
// }
// // TODO: ÉTAPE 4
// // Avec une autre boucle while, afficher les valeurs du tableau `nombres`
// // tant qu'elles sont inférieures à 50.
// console.log('TODO 4');
// i = 0;
// while(nombres[i] < 50){
//     console.log(nombres[i]);
//     i++;
// }

// var prenoms = ['Ali', 'NorA', 'Jean', 'Carole', 'Ibrahim', 'Joseph'];

// // TODO: ÉTAPE 5
// // À l'aide d'une boucle while, afficher les valeurs du tableau `prenoms`
// // tant que leur longueur ne dépasse pas 5 caractères.
// console.log('TODO 5');
// i = 0;
// while(prenoms[i].length <= 5){
//     console.log(prenoms[i]);
//     i++;
// }

// // TODO: ÉTAPE 6
// // Avec une autre boucle while, afficher les valeurs du tableau `prenoms`
// // tant qu'elles contiennent la lettre "a" ou "A".
// console.log('TODO 6');
// i = 0;
// while(prenoms[i].includes('a') || prenoms[i].includes('A')){
//     console.log(prenoms[i]);
//     i++;
// }


// // TODO: ÉTAPE 7
// // Avec une autre boucle while, utiliser la méthode pop() sur le tableau
// // `prenoms` pour retirer une valeur du tableau et l'afficher dans la
// // console tant que le tableau n'est pas vide.
// // Documentation de la méthode Array.prototype.pop() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop
// console.log('TODO 7');

// while(prenoms.length > 0){
//     const prenom = prenoms.pop();
//     console.log(prenom);
// }


// // TODO: ÉTAPE 8
// // À l'aide d'une boucle while, afficher le résultat de la fonction
// // Date.now() dans la console tant qu'une variable aléatoire est inférieure
// // à 50. Utiliser la fonction Math.random() pour définir cette variable
// // aléatoire à chaque itération de la boucle.
// // Documentation de la fonction Date.now() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now
// // Documentation de la fonction Math.random() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
// console.log('TODO 8');

// while((Math.random() * 100) < 50){
//     console.log(Date.now());
// }


console.log('DOM')

const body = document.getElementsByTagName("body");

const otherH1 = body[0].querySelector('h1');

const kbd = document.querySelectorAll('kbd');
const pByID = document.getElementById('demo');
const pkbd = pByID.querySelectorAll('kbd');

console.log(kbd);
console.log(pByID);
console.log(pkbd);