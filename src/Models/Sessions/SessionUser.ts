import { Session } from "./Session";

export class UserSessions {
  id: string;
  sessions: Array<Session>;

  constructor(data: any) {
    this.id = data.userId;
    this.sessions = data.sessions.map(
      (session: any) =>
        new Session( session.day, session.sessionLength)
    );
  }
}
