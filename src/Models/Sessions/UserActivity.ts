import { Activity } from "./Activity";

export class UserActivity {
  id: string;
  sessions: Array<Activity>;

  constructor(data: any) {
    this.id = data.userId;
    this.sessions = data.sessions.map(
      (session: any) =>
        new Activity( session.day, session.kilogram, session.calories)
    );
  }
}
