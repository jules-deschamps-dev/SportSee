

export class Performance {
  subject: string;
  value: number;

  constructor(kind: string, value: number) {
    this.subject = kind;
    this.value = value;
  }
}