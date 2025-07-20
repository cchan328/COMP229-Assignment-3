import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    // Guard against null, empty, or the literal string "undefined"
    if (!raw || raw === 'undefined') {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (err) {
      console.warn('Failed to parse stored user:', raw, err);
      return null;
    }
  });

  const login = (userData) => {
    setUser(userData);
    // Always stringify a valid object
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


