import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // Ajout de useNavigate
import "./NavBar.css";

const NavBar: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate(); // Déclare navigate ici

  const changeProfil = () => {
    const newUserId = userId == "18" ? "12" : "18"; 
    console.log(newUserId)
    navigate(`/user/${newUserId}`);
  };


  return (
    <nav id="navbar">
      <div className="flex flex-row">
        <img src="/icons/logo.svg" alt="Logo SportSee" />
        <h1>SportSee</h1>
      </div>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li onClick={changeProfil}>Profil</li>
        <li>Réglage</li>
        <li><a href="/user/1">Communauté</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
