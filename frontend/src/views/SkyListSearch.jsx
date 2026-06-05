import React, { useState, useEffect } from 'react';

export default function SkyListSearch({ user, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCity, setCurrentCity] = useState(user?.city || 'Douala');
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Thème graphique unifié de l'écosystème ShopWise Pro
  const theme = {
    pageBg: '#06070b', 
    cardBg: '#0f121d', 
    headerBg: '#090a10',
    textDark: '#ffffff', 
    textMuted: '#94a3b8', 
    inputBg: '#161a26', 
    inputBorder: 'rgba(255, 255, 255, 0.06)',
    accent: '#059669', 
    accentCyan: '#0284c7', 
    accentGradient: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
  };

  // Injection des media queries dédiées UNIQUEMENT à cette page
  useEffect(() => {
    const styleId = 'skylist-search-responsive';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.innerHTML = `
        /* Rétablir la flexibilité de la navbar sur Mobile */
        .responsive-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 5%;
          transition: all 0.3s ease;
        }

        /* Conteneur de recherche */
        .responsive-form {
          display: flex;
          gap: 14px;
          align-items: center;
          transition: all 0.3s ease;
        }

        /* Cartes de résultats */
        .responsive-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .responsive-price-block {
          text-align: right;
          min-width: 220px;
        }

        /* ── MEDIA QUERIES MOBILE (Écrans de taille S8+ à Tablette) ── */
        @media (max-width: 768px) {
          /* Titres trop grands qui forçaient le défilement horizontal */
          .main-title {
            fontSize: 1.8rem !important;
          }
          
          /* Navbar : on empile les éléments proprement */
          .responsive-nav {
            flex-direction: column !important;
            gap: 14px !important;
            padding: 12px 16px !important;
            text-align: center;
          }
          .nav-brand, .nav-actions {
            width: 100% !important;
            justify-content: center !important;
          }

          /* Formulaire : Passage en colonne, fini le débordement ! */
          .responsive-form {
            flex-direction: column !important;
            border-radius: 16px !important;
            padding: 16px !important;
            gap: 16px !important;
          }
          .input-group, .select-group, .media-actions {
            width: 100% !important;
            border-left: none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .select-group select {
            width: 100% !important;
            padding: 10px !important;
            background-color: ${theme.inputBg} !important;
            border-radius: 8px;
          }
          .submit-btn {
            width: 100% !important;
            padding: 14px !important;
          }

          /* Ajustement des cartes de résultats */
          .responsive-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            padding: 20px !important;
          }
          .responsive-price-block {
            text-align: left !important;
            width: 100% !important;
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding-left: 0 !important;
            padding-top: 16px !important;
          }
        }
      `;
      document.head.appendChild(styleElement);
    }
    return () => {
      // Nettoyage optionnel si le composant est démonté
      if (styleElement) styleElement.remove();
    };
  }, []);

  const triggerSearchAnalysis = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      setHasSearched(true);
      setIsSearching(false);
      if (query.includes('iphone') || query.includes('telephone') || query.includes('apple')) {
        setResults([
          { id: 1, product: "Apple iPhone 15 Pro (256 Go) - Titane Noir", platform: "Glotelho.cm", sellerType: "Boutique Officielle Vérifiée 🛡️", basePrice: "710,000 XAF", deliveryCost: "1,500 XAF", finalPrice: "711,500 XAF", availability: "Disponible immédiatement", deliveryTime: "Livraison aujourd'hui" },
          { id: 2, product: "Apple iPhone 15 Pro (256 Go) - Titane Naturel", platform: "Jumia Mall (Cameroun)", sellerType: "Vendeur Certifié Or 🛡️", basePrice: "699,000 XAF", deliveryCost: "4,500 XAF (Inter-villes)", finalPrice: "703,500 XAF", availability: "En Stock à Douala", deliveryTime: "Livré en 48h max" }
        ]);
      } else {
        setResults([
          { id: 1, product: `${searchQuery} - Modèle Premium`, platform: "Marketplace Nationale", sellerType: "Vendeur Vérifié ShopWise 🛡️", basePrice: "45,000 XAF", deliveryCost: "2,000 XAF", finalPrice: "47,000 XAF", availability: "Disponible en stock", deliveryTime: "Livré en 24h" }
        ]);
      }
    }, 800);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: theme.pageBg, 
      color: theme.textDark,
      display: 'flex', 
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      width: '100%',
      overflowX: 'hidden'
    }}>
      
      {/* ── TOPBAR NAV ── */}
      <nav className="responsive-nav" style={{ 
        backgroundColor: theme.headerBg, 
        borderBottom: `1px solid ${theme.inputBorder}`,
        position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)'
      }}>
        <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: theme.accent, boxShadow: `0 0 12px ${theme.accent}` }} />
          <span style={{ fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.8px', background: theme.accentGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ShopWise Intelligence
          </span>
        </div>
        
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '0.85rem', color: theme.textMuted, backgroundColor: theme.inputBg, padding: '8px 16px', borderRadius: '10px', border: `1px solid ${theme.inputBorder}`, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-user-shield" style={{ color: theme.accentCyan }}></i> 
            <span>Acheteur : <strong style={{ color: '#fff' }}>{user?.name || 'Client Pro'}</strong></span>
          </div>
          <button onClick={onLogout} style={{ background: 'transparent', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#f87171', padding: '8px 16px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
            <i className="fa-solid fa-power-off" style={{ marginRight: '6px' }}></i>Déconnexion
          </button>
        </div>
      </nav>

      {/* ── CONTENEUR CENTRAL ── */}
      <main style={{ flex: 1, width: '100%', maxWidth: '1060px', margin: '0 auto', padding: '40px 20px', boxSizing: 'border-box' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="main-title" style={{ fontSize: '2.6rem', fontWeight: 900, marginBottom: '14px', letterSpacing: '-1.5px', lineHeight: 1.15 }}>
            Scannez le marché, <span style={{ background: theme.accentGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Maîtrisez les prix</span>
          </h2>
          <p style={{ color: theme.textMuted, fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            L'algorithme de recoupement ShopWise extrait les prix cachés et calcule les frais logistiques locaux au Cameroun.
          </p>
        </div>

        {/* ── BARRE DE RECHERCHE RESPONSIVE ── */}
        <form onSubmit={triggerSearchAnalysis} className="responsive-form" style={{ 
          backgroundColor: theme.cardBg, padding: '12px', borderRadius: '22px', 
          border: `1px solid rgba(5, 150, 105, 0.25)`, 
          boxShadow: '0 35px 70px -15px rgba(0,0,0,0.95)'
        }}>
          
          <div className="input-group" style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: theme.accent, fontSize: '1.2rem' }}></i>
            <input 
              type="text" 
              placeholder="Nom du modèle, marque..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              style={{ width: '100%', border: 'none', backgroundColor: 'transparent', color: '#fff', fontSize: '1.1rem', outline: 'none' }}
            />
          </div>

          <div className="media-actions" style={{ display: 'flex', gap: '8px' }}>
            <button type="button" style={{ background: '#1a2035', border: '1px solid rgba(255,255,255,0.06)', width: '42px', height: '42px', borderRadius: '12px', color: '#a3e635', cursor: 'pointer' }}>
              <i className="fa-solid fa-microphone" style={{ display: 'block', textAlign: 'center' }}></i>
            </button>
            <button type="button" style={{ background: '#1a2035', border: '1px solid rgba(255,255,255,0.06)', width: '42px', height: '42px', borderRadius: '12px', color: '#38bdf8', cursor: 'pointer' }}>
              <i className="fa-solid fa-camera" style={{ display: 'block', textAlign: 'center' }}></i>
            </button>
          </div>

          <div className="select-group" style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: '18px', gap: '8px' }}>
            <i className="fa-solid fa-location-dot" style={{ color: theme.accentCyan }}></i>
            <select value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} style={{ border: 'none', backgroundColor: 'transparent', color: '#fff', fontSize: '0.95rem', fontWeight: 700, outline: 'none', cursor: 'pointer' }}>
              <option value="Douala" style={{ backgroundColor: theme.cardBg }}>Douala</option>
              <option value="Yaoundé" style={{ backgroundColor: theme.cardBg }}>Yaoundé</option>
            </select>
          </div>

          <button type="submit" disabled={isSearching} className="submit-btn" style={{ background: theme.accentGradient, color: '#ffffff', border: 'none', padding: '14px 34px', borderRadius: '16px', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
            {isSearching ? 'Décryptage...' : 'Lancer le Scan'}
          </button>
        </form>

        {/* ── ZONE DE FLUX DE RÉSULTATS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {hasSearched ? (
            results.map((item) => (
              <div key={item.id} className="responsive-card" style={{ 
                backgroundColor: theme.cardBg, border: `1px solid ${theme.inputBorder}`, borderRadius: '20px', padding: '28px', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: theme.accentGradient }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: 'rgba(2, 132, 199, 0.12)', color: '#38bdf8', padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700 }}>{item.platform}</span>
                    <span style={{ color: theme.accent, fontSize: '0.82rem', fontWeight: 600 }}><i className="fa-solid fa-certificate"></i> {item.sellerType}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}>{item.product}</h3>
                  <div style={{ fontSize: '0.88rem', color: theme.textMuted, display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <span><i className="fa-solid fa-box-open" style={{ color: theme.accent }}></i> {item.availability}</span>
                    <span><i className="fa-solid fa-clock" style={{ color: theme.accentCyan }}></i> {item.deliveryTime}</span>
                  </div>
                </div>

                <div className="responsive-price-block" style={{ borderLeft: `1px solid ${theme.inputBorder}`, paddingLeft: '24px' }}>
                  <div style={{ fontSize: '0.78rem', color: theme.textMuted, marginBottom: '4px' }}>Coût Réel Consolidé</div>
                  <div style={{ fontSize: '1.9rem', fontWeight: 900, color: theme.accent, fontFamily: 'monospace' }}>{item.finalPrice}</div>
                  <div style={{ fontSize: '0.8rem', color: theme.textMuted, marginTop: '6px' }}>Base : {item.basePrice} <br />Livr. : {item.deliveryCost}</div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '65px 30px', border: `1px dashed rgba(5, 150, 105, 0.2)`, borderRadius: '24px', backgroundColor: 'rgba(15, 18, 29, 0.4)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(5, 150, 105, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <i className="fa-solid fa-bolt" style={{ fontSize: '1.6rem', color: theme.accent }}></i>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Système d'indexation prêt</h4>
              <p style={{ fontSize: '0.92rem', maxWidth: '470px', margin: '0 auto', lineHeight: 1.6 }}>Saisissez un mot-clé ou utilisez les options multimédias.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}