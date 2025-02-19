import { useLocation, useNavigate } from "react-router-dom";
import { ErrorInterface } from "../Models/ErrorInterface";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const error = location.state as ErrorInterface;

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="type">{error?.code ?? 500} </h1>
        <p className="description">{error?.description}</p>
        <br />
        <a
          onClick={() => navigate("/")}
          className="retour-accueil"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
