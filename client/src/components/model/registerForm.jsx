import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || process.env.API_URL;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password,
      });
      console.log(response.data);
      alert("Inscription réussie !");
      navigate("/login");
    } catch (error) {
      console.error("Il y a eu une erreur !", error);
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="login-form">
      <h2>Inscription</h2>
      <form onSubmit={onSubmit} className="main-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
