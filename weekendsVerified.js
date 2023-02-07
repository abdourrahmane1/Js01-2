/*Pour permettre à l'utilisateur de saisir lui même le jour de la semaine dans la console 
  il faut d'abord installer le pacquage prompt-sync en tapant dans la console la commande :
  npm install prompt-sync*/

  /* Dans la ligne suivante on fait appel a la fonction prompt-sync pour que la console sache
     qu'on va en avoir besoin dans l'exécution de notre programme*/
const prompt=require("prompt-sync")({sigint:true});
/* on affecte la valeur saisie à une variable pour pouvoir le tester en prenant soin de le 
   convertir en minuscule*/ 
let jour = prompt("entrez un jour de la semaine :").toLowerCase();
if(jour == 'samedi' || jour == 'dimanche')
  {
        console.log("Weekend");
  }
else
   {
        console.log("Weekday");
   }