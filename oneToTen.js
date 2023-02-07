// on initialise une variable som qui va contenir le resutat de notre calcul à 0
let som =0;
for (let compteur = 1; compteur <= 10; compteur++)
     {
        // la variable "compteur" sera notre compteur
        // a chaque exécution le compteur sera incrémenter de +1
        // la boucle sera répété tant que la valeur de compteur sera inférieur ou éguale 10
        // la variable som reçoit son ancienne valeur + la valeur du compteur
        som = som + compteur;
     }
console.log("sum of numbers 1 to 10: ", som);