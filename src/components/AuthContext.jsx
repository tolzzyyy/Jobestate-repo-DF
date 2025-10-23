import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        
        // Don't redirect automatically on page load - only after login
        console.log('User authenticated:', decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        Cookies.remove('token');
        setUser(null);
      }
    }
    setLoading(false);
  };

  const login = (token, userData) => {
    Cookies.set('token', token, { expires: 7 });
    const decoded = jwtDecode(token);
    setUser(decoded);
    
    // Redirect based on role after login
    redirectBasedOnRole(decoded.role);
  };

  const redirectBasedOnRole = (role) => {
    switch(role) {
      case 'user':
        navigate('/userdashboard');
        break;
      case 'employer':
        navigate('/employerdashboard');
        break;
      case 'admin':
        navigate('/admindashboard');
        break;
      default:
        navigate('/');
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    navigate('/signin');
  };

  // If still loading, show a loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout,
      checkAuth 
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