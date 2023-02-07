//Déclaration et Initialisation de la variable sur lequel va porter le test
let nombre = 1;
// une boucle while pour tester à quel moment arreter l'exécution
while (nombre <= 20)
  {
   // une boucle if pour tester si le nombre est impaire ou paire et l'afficher
        if (nombre % 2 != 0)
        {
            console.log("Impaire");
        }
        else
        {
            console.log("Paire");
        }
        nombre++;
  }