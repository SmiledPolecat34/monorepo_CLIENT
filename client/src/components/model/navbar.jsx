import "../../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    alert("Déconnexion réussie !");
    navigate("/login");
  }

  return (
    <div className="Navbar">
      <h1>Mon App contacts</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <br />
        {!isLoggedIn && (
          <>
            <Link to="/register">Inscription</Link>
            <br />
            <Link to="/login">Connexion</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/contacts">Contacts</Link>
            <br />
            <button onClick={handleLogout}>Déconnexion</button>
          </>
        )}
      </nav>
    </div>
  );
}
