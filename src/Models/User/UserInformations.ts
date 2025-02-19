
export class UserInformations 
{
  prenom: string;
  nom: string;
  age: number;

  constructor(data: any)
  {
    this.prenom = data.firstName,
    this.nom = data.lastName,
    this.age = data.age
  }
}
