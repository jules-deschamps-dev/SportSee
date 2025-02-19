import { UserData } from "./UserData";
import { IUserResponse } from "./UserDataResponse";
import { UserInformations } from "./UserInformations";


export class User {
  id: number;
  Info: UserInformations;
  score: number;
  Data: Array<UserDatas>;

  constructor(data: IUserResponse) {
    this.id = data.id;
    this.Info = new UserInformations(data.userInfos);
    this.score = data.todayScore ?? data.score;
    this.Data = [];

    Object.entries(data.keyData).forEach(([key, value]) => {
      if (typeof value === "number") {
        this.Data.push(new UserDatas(key, value));
      }
    });
  }
}

export class UserDatas {
  propertie: string;
  libelle: string;
  unit: string;
  value: number;
  color: string;

  constructor(key: string, value: number) {
    this.propertie = key;
    this.unit = key === "calorieCount" ? "kcal" : "g";
    this.value = value;
    switch (key) {
      case "calorieCount":
        this.libelle = "Calories";
        this.color = "#FBEAEA"
        break;

      case "proteinCount":
        this.libelle = "Proteines";
        this.color = "#4AB8FF1A"
        break;

      case "carbohydrateCount":
        this.libelle = "Glucides";
        this.color = "#F1F6E6"
        break;

      case "lipidCount":
        this.libelle = "Lipides";
        this.color = "#4A51811A"
        break;

      default:
        this.libelle = "";
        this.color = "#fff"
        break;
    }
  }
}
