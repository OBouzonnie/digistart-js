/* LES OPERATEURS LOGIQUES */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les opérateurs logiques');

// ------ TODO 1 ------ 
// Écrire le code pour obtenir la valeur booléenne des cas suivants:
// 1. faux ou faux
false&&false


// 2. vrai et vrai
true&&true


// 3. pas faux

!false

// 4. pas pas vrai

!!true

// 5. pas pas faux

!!false


// ------ TODO 2 ------ 
// 1. Créer une variable var1 qui contient un booléen (true ou false).

var1 booléen=("true||false");


// 2. Créer une variable var2 qui contient la valeur inverse de var1 (opérateur PAS).

var2=("!//var1");


// 3. Afficher dans la console l'opération logique var1 ET var2 et vérifier que le résultat
// affiché est bien égal à false.

console.log(var1&&var2)



// ------ TODO 3 ------ 
// Écrire le code pour afficher les valeurs booléennes avec la fonction Boolean() pour:
// 1. "a"

console.log("test string a",Boolean("a"))

// 2. ""

console.log('test string vid',Boolean(""))

// 3. 1

console.log('nombre 1',Boolean(1))

// 4. 0

console.log('number 0',Boolean(0))

// 5. null

console.log('valeur null',Boolean("null"))


var heure = 10;

if(heure > 8 && heure < 18){
    console.log('Bonjour Simon')
} else if (heure >= 18 && heure < 20) {
    console.log("Bonsoir Simon")
} else {
    console.log('Salut Simon')
}
