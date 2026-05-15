import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Veuillez remplir tous les champs");
      return false;
    }

    if (formData.name.length < 2) {
      setError("Le nom doit contenir au moins 2 caractères");
      return false;
    }

    if (!/^[^\s@]+@gmail\.com$/.test(formData.email)) {
      setError("L'email doit être au format: votre@gmail.com");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    // Simulation d'enregistrement (frontend only)
    setTimeout(() => {
      // Sauvegarde l'utilisateur en localStorage
      localStorage.setItem("user", JSON.stringify({
        name: formData.name,
        email: formData.email,
      }));
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="aurora" />
      <div className="mesh-grid" />
      <div className="scanline" />

      <div className="auth-wrapper fade-in">
        <div className="auth-card auth-card-signup">
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
            <h1 className="auth-title">CRÉER UN COMPTE</h1>
            <div className="auth-eyebrow">Rejoignez notre plateforme d'audit sécurisée</div>
          </div>

          {/* Formulaire */}
          <form className="auth-form" onSubmit={handleSignUp}>
            {/* Nom */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nom complet</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Jean Dupont"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="votre@gmail.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Minimum 6 caractères"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirmez votre mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
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
                  CRÉATION EN COURS...
                </>
              ) : (
                "S'INSCRIRE"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <span>OU</span>
          </div>

          {/* Login Link */}
          <div className="auth-footer">
            <p>Vous avez déjà un compte ?</p>
            <Link to="/login" className="auth-link">
              Se connecter
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
