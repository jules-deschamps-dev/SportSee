import { Performance } from "./Performance";

export class UserPerformance {
  id: string;
  performances: Array<Performance>

  constructor(data: any) {
    this.id = data.userId;
    this.performances = data.data.map((element: any) => {
      const subject = data.kind[element.kind.toString()];
      return new Performance(subject, element.value);
    });
  }
}