import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing token on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedToken && savedEmail) {
      setToken(savedToken);
      setUser({
        id: Math.random().toString(36).substr(2, 9),
        email: savedEmail
      });
    }
    setLoading(false);
  }, []);

  // Register user with email and password only
  const register = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
      }

      // Validate password length
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email: email
      };
      const newToken = 'token_' + Math.random().toString(36).substr(2, 20);

      setUser(newUser);
      setToken(newToken);
      localStorage.setItem('authToken', newToken);
      localStorage.setItem('userEmail', email);

      return { success: true, user: newUser };
    } catch (err) {
      const errorMsg = err.message || 'Registration failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Login user with email and password only
  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
      }

      // Validate password
      if (!password) {
        throw new Error('Password is required');
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email: email
      };
      const newToken = 'token_' + Math.random().toString(36).substr(2, 20);

      setUser(newUser);
      setToken(newToken);
      localStorage.setItem('authToken', newToken);
      localStorage.setItem('userEmail', email);

      return { success: true, user: newUser };
    } catch (err) {
      const errorMsg = err.message || 'Login failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
    setToken(null);
    setError(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        register,
        login,
        logout,
        isAuthenticated: !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
