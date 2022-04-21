/* LES CONDITIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les conditions');

// ------ TODO 1 ------ 
// 1. Créer une variable color1 qui contient la valeur "rouge"
var color1 = "rouge";



// 2. Créer une variable color2 qui contient la valeur "green"
var color2 = "green";

var color3 = "yellow"


// 3. Comparez les deux variables en utilisant une condition (if) et des comparateurs (===, !==) :
// - si la variable est égale à "rouge", affichez "fraise" dans la console
// - si la variable est égale à "green", affichez "pomme" dans la console
function fruit(color){
    if(color === "rouge"){
        console.log("fraise")
    } else if (color === "green") {
        console.log("pomme");
    } else {
        console.log("je ne reconnais pas ce fruit")
    }
}

var a = 1;

fruit(color1);
fruit(color2);
fruit(color3)
var result = a >= 1;

console.log('result', result)


// ------ TODO 2 ------ 
// Complétez l'exercice avancé 1 situé dans le dossier "exercice-avance-1"

var arr = [10, 15, 25];

var otherArr = arr.map(a => a + 1);

console.log(otherArr)

