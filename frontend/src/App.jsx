import React, { useState } from 'react';
// Les chemins corrigés pointant vers src/views/
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import SkyListSearch from './views/SkyListSearch';

export default function App() {
  const [step, setStep] = useState('landing'); // 'landing', 'auth', 'skylist'
  const [authMode, setAuthMode] = useState('signup'); // 'signup' ou 'login'
  const [user, setUser] = useState(null);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setStep('skylist');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#060709' }}>
      {step === 'landing' && (
        <LandingPage 
          onGetStarted={() => { setAuthMode('signup'); setStep('auth'); }} 
          onLoginClick={() => { setAuthMode('login'); setStep('auth'); }} 
        />
      )}

      {step === 'auth' && (
        <LoginPage 
          mode={authMode} 
          setMode={setAuthMode} 
          onSuccess={handleAuthSuccess}
          onBack={() => setStep('landing')}
        />
      )}

      {step === 'skylist' && (
        <SkyListSearch 
          user={user} 
          onLogout={() => { setUser(null); setStep('landing'); }} 
        />
      )}
    </div>
  );
}