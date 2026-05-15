import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);
    
    // Simulation de connexion (frontend only)
    setTimeout(() => {
      if (email && password.length >= 6) {
        // Sauvegarde l'utilisateur en localStorage
        localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }));
        setLoading(false);
        navigate("/dashboard");
      } else {
        setError("Identifiants invalides");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="aurora" />
      <div className="mesh-grid" />
      <div className="scanline" />

      <div className="auth-wrapper fade-in">
        <div className="auth-card">
          {/* Logo */}
          <div className="auth-logo">
            <div className="logo-icon-auth">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" fill="url(#sg)"/>
                <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <defs><linearGradient id="sg" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6"/><stop offset="1" stopColor="#0ea5e9"/>
                </linearGradient></defs>
              </svg>
            </div>
          </div>

          {/* Titre */}
          <div className="auth-header">
            <h1 className="auth-title">CONNEXION</h1>
            <div className="auth-eyebrow">Accédez à votre tableau de bord d'audit</div>
          </div>

          {/* Formulaire */}
          <form className="auth-form" onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Minimum 6 caractères"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* Erreur */}
            {error && <div className="auth-error">⚠️ {error}</div>}

            {/* Bouton Submit */}
            <button 
              type="submit" 
              className={`auth-button ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-small" />
                  CONNEXION EN COURS...
                </>
              ) : (
                "SE CONNECTER"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <span>OU</span>
          </div>

          {/* Sign Up Link */}
          <div className="auth-footer">
            <p>Vous n'avez pas de compte ?</p>
            <Link to="/signup" className="auth-link">
              S'inscrire maintenant
            </Link>
          </div>
        </div>

        {/* Décoration - Glow effects */}
        <div className="auth-glow glow-1" />
        <div className="auth-glow glow-2" />
      </div>
    </div>
  );
}
