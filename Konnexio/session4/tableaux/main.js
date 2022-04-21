/* LES TABLEAUX (ARRAYS) */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les tableaux (arrays)');

console.log('TODO 1')
// ------ TODO 1 ------ 
var prices = [12, 3, 25, 4, 987, 22, 15];

// 1. En accédant aux éléments du tableau, faire en sorte que le chiffre 4 s'affiche dans la console.

var index = 3;

console.log(prices[prices.length  - 2])


// 2. Afficher dans la console la longueur du tableau "prices".

console.log(prices.length)

// 3. Ajouter un prix au tableau et afficher le tableau dans la console.

prices.unshift(971);

console.log(prices)

var pop = prices.pop();

console.log(prices)
console.log(pop)

console.log('TODO 2')
// ------ TODO 2 ------ 
var random = ["A", null, 123, "hello", true];

// 1. En accédant aux éléments du tableau, remplacer un élément du tableau.

random[1] = "pas null"

console.log(random)

// 2. Afficher le tableau dans la console.



console.log('TODO 3')
// ------ TODO 3 ------ 
var array = [1, 2, 3, 5, 6, 7, 9, 10];

// 1. Ajouter dans le tableau les éléments 4 et 8 manquants grâce à la méthode splice afin d'obtenir le tableau suivant :
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Documentation de la méthode splice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
console.log(array)
array.splice(3, 0, 4);
console.log(array)
array.splice(7, 0, 8);
console.log(array)

// 2. Afficher le tableau dans la console.



// 3. Ajouter la valeur 11 à la fin du tableau.

array.push(11);
console.log(array)


// 4. Ajouter la valeur 0 au début du tableau.

array.unshift(0);
console.log(array)

// 5. Afficher le tableau dans la console.



console.log('TODO 4')
// ------ TODO 4 ------ 
var array = ["B", "A", "C", "E", "D"];

// 1. Trier le tableau dans l'ordre alphabétique croissant grâce à la méthode sort.

array.sort();
console.log(array)

// 2. Utiliser la méthode join pour regrouper les éléments du tableau en une string.

var str = array.join();
console.log(str)

// 3. Afficher le tableau dans la console et vérifier qu'on obtient la string "ABCDE".



console.log('TODO 5')
// ------ TODO 5 ------ 
var array = ["Michael", "Jordan", "Laeticia", "Julie"];

// 1. Ecrire une fonction qui renvoie le dernier élément du tableau passé en paramètre.

function returnLast(array){
    return array.pop();
}

// 2. Appeller la fonction avec le tableau array et vérifier que l'élément "Julie" est bien renvoyé en l'affichant dans la console.

var last = returnLast(array);


console.log('REFERENCE')

var name = 'lol'

var a = {
    name: 'lol'
}

var b = a;

console.log(a)
console.log(b)

a.name = 'no lol'

console.log(a)
console.log(b)

