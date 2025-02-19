export class Activity {
  jour: string;
  masse: number;
  calories: number;

  constructor(day: string, kilogram: number, calories: number) {
    this.jour = day;
    this.masse = kilogram;
    this.calories = calories;
  }
}