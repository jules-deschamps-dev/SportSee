
export class UserData 
{
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;

  constructor(data: any)
  {
    this.calorieCount = data.calorieCount,
    this.proteinCount = data.proteinCount,
    this.carbohydrateCount = data.carbohydrateCount
    this.lipidCount = data.lipidCount
  }
}