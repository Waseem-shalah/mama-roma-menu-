import React, { createContext, useState, useContext, useEffect } from 'react';

// We create the Context but remove the base44 and appParams imports
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // We hardcode these so the app thinks everything is "Loaded" and "Logged in"
  const [user, setUser] = useState({ name: 'Admin', role: 'owner' });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState({ id: 'mamaroma' });

  // Simplified functions so your buttons don't crash the app
  const logout = () => {
    console.log("Local mode: Logout clicked");
  };

  const navigateToLogin = () => {
    console.log("Local mode: Login clicked");
  };

  const checkAppState = () => {
    console.log("Local mode: App state is always healthy");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};