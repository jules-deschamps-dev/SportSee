import React, { useEffect, useState } from "react";
import { User } from "../Models/User/User";
import { fetchData } from "../Service/UserService";
import AppBar from "../Components/Home/AppBar/AppBar";
import { Session } from "../Models/Sessions/Session";
import { UserSessions } from "../Models/Sessions/SessionUser";
import ActivityChart from "../Components/Home/Charts/activiteQuotidienne";
import DureeMoyenneCard from "../Components/Home/Charts/DureeMoyenneSession";
import { Activity } from "../Models/Sessions/Activity";
import { UserActivity } from "../Models/Sessions/UserActivity";
import UserDataCard from "../Components/Home/UserDataCards";
import ChartRadar from "../Components/Home/Charts/Radar";
import ChartRadial from "../Components/Home/Charts/Radial";
import { UserPerformance } from "../Models/Sessions/UserPerformance";
import { useNavigate, useParams } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [sessions, setSessions] = useState<Array<Session>>([]);
  const [activitySessions, setActivitySessions] = useState<Array<Activity>>([]);
  const [performances, setPerformances] = useState<Array<Performance>>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const { userId } = useParams();

  const handleError = (code: number, description: string) => navigate("/error", { state: {code, description} });

  useEffect(() => {
    let userData: React.SetStateAction<User | null> = null;
    const fetchUser = async () => {
      try {
        // récupération de données
        const id = userId ?? import.meta.env.VITE_DEFAULT_USER;

        userData = new User(await fetchData(id, ""));
        const userSessionsData = await fetchData(id, "average-sessions");
        const activityData = await fetchData(id, "activity");
        const performanceData = await fetchData(id, "performance");

        // instanciation
        const userSessions = new UserSessions(userSessionsData);
        const userActivity = new UserActivity(activityData);
        const userPerformance = new UserPerformance(performanceData);

        // attributions des données aux variables
        setUser(userData);
        setSessions(userSessions.sessions);
        setActivitySessions(userActivity.sessions);
        setPerformances(userPerformance.performances);

        setLoading(false);
      } catch (err: any) {
        if (err.message.includes("user_unknow")) handleError(404, "Utilisateur inconu"); 
        else handleError(503, "Une erreur est survenue");

        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div id="home-page">
      <AppBar />
      <div id="main-container">
        <h2>
          Bonjour <span className="name">{user?.Info.prenom}</span>
        </h2>
        <span className="sous-titre">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </span>

        <div className="flex flex-row">
          <div className="wrapper">
            <div className="activity">
              <ActivityChart data={activitySessions} />
            </div>
            <div className="session">
              <DureeMoyenneCard data={sessions} />
            </div>
            <div className="performance">
              <ChartRadar data={performances} />
            </div>
            <div className="">
              <ChartRadial data={user?.score} />
            </div>
          </div>
          <div className="cards-container">
            {user?.Data &&
              Object.entries(user.Data).map(([key, value]) => (
                <div key={key}>
                  <UserDataCard icon="key.svg" data={value} name={key} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
