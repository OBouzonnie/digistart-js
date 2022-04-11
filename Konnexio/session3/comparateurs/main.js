/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 19;

// 2. Créer une variable myAge qui contient votre âge

var myAge = 20;

// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

console.log(neighbourAge < myAge);

// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

// 2. L'exécuter avec les paramètres de votre choix.

// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isGreaterthan1000(a) {
  console.log(a > 1000);
}

function isBetween1000And3000(num) {
  // Num plus petit que 3000 ET num est plus grand que 1000
  return num < 3000 && num > 1000;
}

// 2. L'exécuter avec le paramètre de votre choix.
console.log(isBetween1000And3000(3));
console.log(isBetween1000And3000(1050));
console.log(isBetween1000And3000(4000));
