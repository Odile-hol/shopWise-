import React, { useState } from 'react';

export default function LoginPage({ mode, setMode, onSuccess, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('Douala');

  // Ajustement des contrastes pour casser le côté trop sombre
  const theme = {
    pageBg: '#06070b', 
    cardBg: '#0f121d', // Légèrement rehaussé pour un meilleur contraste
    leftPanelBg: '#0a0d16', 
    textDark: '#ffffff', 
    textMuted: '#94a3b8', 
    inputBg: '#161a26', 
    inputBorder: 'rgba(255, 255, 255, 0.08)',
    cardBorder: 'rgba(5, 150, 105, 0.2)', // Bordure émeraude très fine et subtile pour détacher la carte
    accent: '#059669', 
    accentGradient: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)', 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSuccess({ name: name || email.split('@')[0], city: city });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: theme.pageBg, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* ── CONTENEUR AVEC SHADOW ET BORDURE DE CONTRASTE REHAUSSÉS ── */}
      <div style={{ 
        width: '100%', 
        maxWidth: '940px', 
        backgroundColor: theme.cardBg, 
        borderRadius: '24px', 
        overflow: 'hidden', 
        // Ombre multicouche très puissante pour décoller la carte du fond sombre
        boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.9), 0 0 50px 0 rgba(5, 150, 105, 0.05)',
        display: 'grid', 
        gridTemplateColumns: '48% 52%', 
        minHeight: '580px',
        border: `1px solid ${theme.cardBorder}`,
        backdropFilter: 'blur(8px)'
      }}>
        
        {/* ── PANNEAU GAUCHE : SOUHAITS DE BIENVENUE ── */}
        <div style={{ 
          background: theme.leftPanelBg, 
          padding: '45px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRight: `1px solid ${theme.inputBorder}`
        }}>
          {/* Bulles colorées diffuses à opacité réajustée pour donner de la profondeur */}
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.2) 0%, transparent 70%)', filter: 'blur(15px)' }} />
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, transparent 70%)', filter: 'blur(15px)' }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.accent, boxShadow: '0 0 10px #059669' }} />
              <span style={{ color: theme.accent, textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px' }}>
                ShopWise Pro
              </span>
            </div>
            
            <h2 style={{ color: theme.textDark, fontSize: '2.2rem', fontWeight: 800, marginTop: '0', marginBottom: '16px', lineHeight: '1.2', letterSpacing: '-1px' }}>
              Welcome Portal
            </h2>
            <p style={{ color: theme.textMuted, fontSize: '0.95rem', lineHeight: '1.6', margin: 0, fontWeight: 400 }}>
              Connectez-vous pour accéder au traqueur de prix en temps réel et déjouer les fausses promotions sur les marchés du Cameroun.
            </p>
          </div>
        </div>

        {/* ── PANNEAU DROIT : LE FORMULAIRE AVEC EFFET DE RELIEF SOMBRE ── */}
        <div style={{ 
          padding: '50px 55px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          backgroundColor: theme.cardBg
        }}>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ color: theme.textDark, fontSize: '1.7rem', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
              {mode === 'signup' ? 'Créer un compte' : 'Espace Connexion'}
            </h3>
            <p style={{ color: theme.textMuted, fontSize: '0.85rem', margin: 0 }}>
              {mode === 'signup' ? 'Rejoignez les acheteurs avertis en quelques clics.' : 'Accédez instantanément à votre tableau de bord.'}
            </p>
          </div>

          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            {mode === 'signup' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textMuted }}>Prénom</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <i className="fa-regular fa-user" style={{ position: 'absolute', left: '14px', color: theme.textMuted, fontSize: '0.9rem' }}></i>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Ex: Christian" 
                    style={{ width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px', backgroundColor: theme.inputBg, border: `1px solid ${theme.inputBorder}`, color: theme.textDark, fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }} 
                  />
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textMuted }}>Adresse email</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <i className="fa-regular fa-envelope" style={{ position: 'absolute', left: '14px', color: theme.textMuted, fontSize: '0.9rem' }}></i>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  placeholder="nom@exemple.com" 
                  style={{ width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px', backgroundColor: theme.inputBg, border: `1px solid ${theme.inputBorder}`, color: theme.textDark, fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textMuted }}>Mot de passe</label>
                {mode === 'login' && <span style={{ fontSize: '0.75rem', color: '#0284c7', cursor: 'pointer', fontWeight: 500 }}>Oublié ?</span>}
              </div>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '14px', color: theme.textMuted, fontSize: '0.9rem' }}></i>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  placeholder="••••••••" 
                  style={{ width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px', backgroundColor: theme.inputBg, border: `1px solid ${theme.inputBorder}`, color: theme.textDark, fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.textMuted }}>Ville de livraison</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <i className="fa-solid fa-map-pin" style={{ position: 'absolute', left: '14px', color: theme.accent, fontSize: '0.9rem' }}></i>
                  <select 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    style={{ width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px', backgroundColor: theme.inputBg, border: `1px solid ${theme.inputBorder}`, color: theme.textDark, fontSize: '0.9rem', outline: 'none', cursor: 'pointer', appearance: 'none' }}
                  >
                    <option value="Douala">Douala (Littoral)</option>
                    <option value="Yaoundé">Yaoundé (Centre)</option>
                    <option value="Bafoussam">Bafoussam (Ouest)</option>
                    <option value="Garoua">Garoua (Nord)</option>
                  </select>
                  <i className="fa-solid fa-chevron-down" style={{ position: 'absolute', right: '14px', color: theme.textMuted, fontSize: '0.8rem', pointerEvents: 'none' }}></i>
                </div>
              </div>
            )}

            <button 
              type="submit" 
              style={{ 
                background: theme.accentGradient, 
                color: '#ffffff', 
                border: 'none', 
                padding: '13px', 
                borderRadius: '10px', 
                fontSize: '0.95rem', 
                fontWeight: 600, 
                cursor: 'pointer', 
                marginTop: '10px',
                boxShadow: '0 4px 20px rgba(5, 150, 105, 0.4)'
              }}
            >
              {mode === 'signup' ? "S'inscrire" : 'Se connecter'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.85rem', color: theme.textMuted }}>
            {mode === 'signup' ? (
              <span>Déjà inscrit ? <button onClick={() => setMode('login')} style={{ background: 'none', border: 'none', color: '#34d399', fontWeight: 600, cursor: 'pointer', padding: 0, marginLeft: '4px' }}>Se connecter</button></span>
            ) : (
              <span>Nouveau sur ShopWise ? <button onClick={() => setMode('signup')} style={{ background: 'none', border: 'none', color: '#34d399', fontWeight: 600, cursor: 'pointer', padding: 0, marginLeft: '4px' }}>Créer un compte</button></span>
            )}
          </div>

          <button onClick={onBack} style={{ background: 'none', border: 'none', color: theme.textMuted, fontSize: '0.8rem', cursor: 'pointer', marginTop: '24px', alignSelf: 'center', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
            <i className="fa-solid fa-arrow-left"></i> Retour au site
          </button>

        </div>
      </div>

    </div>
  );
}