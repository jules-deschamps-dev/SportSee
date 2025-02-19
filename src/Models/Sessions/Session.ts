export class Session {
  jour: string; // Un seul jour sous forme de lettre
  duree: number;

  constructor(day: number, sessionLength: number) {
    this.jour = getDayLetter(day); // On obtient une seule lettre pour un jour donné
    this.duree = sessionLength;
  }
}

// Correspondance entre les jours de la semaine et leurs lettres
const joursSemaine = ["L", "M", "M", "J", "V", "S", "D"]; // Lundi à Dimanche

// Fonction pour obtenir une lettre correspondant à un jour donné
function getDayLetter(day: number): string {
  return joursSemaine[(day - 1) % 7]; // -1 car le tableau est indexé à partir de 0
}