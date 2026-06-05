import React from 'react';

export default function LandingPage({ onGetStarted, onLoginClick }) {
  // Palette ultra-premium fixe en mode sombre constant
  const theme = {
    bg: '#0a0b10',
    text: '#f8fafc',
    subText: '#94a3b8', 
    navBg: 'rgba(10, 11, 16, 0.8)',
    cardBg: '#121420',
    border: 'rgba(255,255,255,0.08)',
    accent: '#059669', 
    accentLight: 'rgba(5, 150, 105, 0.15)',
    glow: 'rgba(5, 150, 105, 0.15)',
  };

  const animationStyles = `
    @keyframes subtleFloat {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(0.5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes subtleFloatDelayed {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(6px) rotate(-0.5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes pulseRadar {
      0% { transform: scale(0.95); opacity: 0.6; }
      50% { transform: scale(1.15); opacity: 0.2; }
      100% { transform: scale(1.3); opacity: 0; }
    }
    @keyframes scanLine {
      0% { top: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    .badge-float-1 { animation: subtleFloat 5s ease-in-out infinite; }
    .badge-float-2 { animation: subtleFloatDelayed 6s ease-in-out infinite; }
    .badge-float-3 { animation: subtleFloat 7s ease-in-out infinite; }
    .radar-pulse { animation: pulseRadar 4s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
    .scanner-line { animation: scanLine 3s linear infinite; }
    
    .interactive-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(13, 148, 136, 0.3) !important;
    }
  `;

  return (
    <div style={{ 
      backgroundColor: theme.bg, 
      color: theme.text, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      <style>{animationStyles}</style>

      {/* Ambiance Lumineuse d'Arrière-plan */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '5%', 
        width: '500px', 
        height: '500px', 
        background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, 
        pointerEvents: 'none',
        zIndex: 1 
      }} />

      {/* Barre de Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '18px 8%', 
        borderBottom: `1px solid ${theme.border}`,
        backdropFilter: 'blur(20px)',
        zIndex: 10,
        backgroundColor: theme.navBg,
        position: 'sticky',
        top: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: `linear-gradient(135deg, ${theme.accent} 0%, #0284c7 100%)`, width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa-solid fa-shield-halved" style={{ color: '#fff', fontSize: '0.8rem' }}></i>
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.5px' }}>ShopWise</span>
        </div>

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <button onClick={onLoginClick} style={{ background: 'none', border: 'none', color: theme.subText, fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem', transition: 'color 0.2s' }}>Connexion</button>
          <button onClick={onGetStarted} style={{ background: '#f8fafc', color: '#0f172a', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>Créer un compte</button>
        </div>
      </nav>

      {/* Zone Héros */}
      <div style={{ 
        flex: 1, 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        alignItems: 'center', 
        gap: '120px', 
        padding: '40px 8%',
        zIndex: 5,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        
        {/* Colonne Gauche : Contenu textuel */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: theme.accentLight, 
            border: `1px solid ${theme.accent}33`, 
            padding: '6px 14px', 
            borderRadius: '20px', 
            marginBottom: '28px' 
          }}>
            <span style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>
              <i className="fa-solid fa-circle-check" style={{ marginRight: '6px' }}></i> Indexation Certifiée Cameroun
            </span>
          </div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: '1.2', letterSpacing: '-1.5px', marginBottom: '20px' }}>
            Achetez de manière sécurisée.<br />
            <span style={{ 
              background: `linear-gradient(135deg, ${theme.accent} 0%, #0284c7 100%)`, 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Traquez les vrais prix.
            </span>
          </h1>

          <p style={{ fontSize: '1rem', color: theme.subText, lineHeight: '1.6', marginBottom: '36px', maxWidth: '480px', fontWeight: 400 }}>
            ShopWise élimine le chaos du e-commerce. Notre protocole filtre instantanément les arnaques, compare les stocks réels et calcule les frais de livraison exacts vers votre ville.
          </p>

          <button 
            onClick={onGetStarted} 
            className="interactive-btn"
            style={{ 
              background: `linear-gradient(135deg, ${theme.accent} 0%, #0284c7 100%)`, 
              color: '#fff', 
              border: 'none', 
              padding: '14px 32px', 
              borderRadius: '8px', 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              cursor: 'pointer', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              boxShadow: `0 4px 18px ${theme.glow}`,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Lancer le comparateur <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
          </button>
        </div>

        {/* Colonne Droite : Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '480px' }}>
          
          <div className="radar-pulse" style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', border: `1px solid ${theme.accent}`, opacity: 0.3, pointerEvents: 'none' }} />

          {/* Sphère principale */}
          <div style={{ 
            width: '320px', 
            height: '320px', 
            border: '1px dashed rgba(255,255,255,0.15)', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'rgba(18, 20, 32, 0.4)',
            backdropFilter: 'blur(8px)'
          }}>
            
            {/* Centre de données */}
            <div style={{ 
              width: '210px', 
              height: '210px', 
              borderRadius: '50%', 
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.border}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
            }}>
              <div className="scanner-line" style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: `linear-gradient(to right, transparent, ${theme.accent}, transparent)` }} />
              
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: theme.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <i className="fa-solid fa-fingerprint" style={{ color: '#34d399', fontSize: '1.4rem' }}></i>
              </div>
              <span style={{ fontSize: '0.65rem', color: theme.subText, letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 700 }}>Shield Protocol</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399' }}>100% Sécurisé</span>
            </div>
          </div>

          {/* BADGE 1 */}
          <div className="badge-float-1" style={{ 
            position: 'absolute', 
            top: '30px', 
            right: '-20px', 
            backgroundColor: theme.cardBg, 
            border: `1px solid ${theme.border}`, 
            padding: '12px 16px', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <i className="fa-solid fa-circle-nodes" style={{ color: '#0284c7', fontSize: '0.9rem' }}></i>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.text }}>Analyse Flux Jumia / Glotelho</span>
          </div>

          {/* BADGE 2 */}
          <div className="badge-float-2" style={{ 
            position: 'absolute', 
            bottom: '50px', 
            left: '-30px', 
            backgroundColor: theme.cardBg, 
            border: `1px solid ${theme.border}`, 
            padding: '12px 16px', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.accent }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.text }}>Douala & Yaoundé Inclus</span>
          </div>

          {/* BADGE 3 */}
          <div className="badge-float-3" style={{ 
            position: 'absolute', 
            bottom: '170px', 
            right: '-40px', 
            backgroundColor: theme.cardBg, 
            border: `1px solid ${theme.border}`, 
            padding: '10px 14px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <i className="fa-solid fa-shield-check" style={{ color: theme.accent, fontSize: '0.85rem' }}></i>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: theme.subText }}>Frais cachés : 0</span>
          </div>

        </div>

      </div>
    </div>
  );
}