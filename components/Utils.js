export function extraire500MotsAvecPhrases(texte, nbChars) {
  const mots = texte.split(/\s+/);
  let partieTexte = "";
  let motsCompteur = 0;

  for (const mot of mots) {
    partieTexte += mot + " ";
    motsCompteur++;

    // Vérifier si le nombre de mots dépasse 500
    if (motsCompteur >= nbChars) {
      break;
    }
  }

  return partieTexte.trim(); // Retirer l'espace en trop à la fin
}
