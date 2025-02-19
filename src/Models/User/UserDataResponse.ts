import { UserData } from "./UserData";
import { UserInformations } from "./UserInformations";

export interface IUserResponse
{
  id : number,
  userInfos : UserInformations,
  todayScore: number,
  score: number,
  keyData : UserData
}
