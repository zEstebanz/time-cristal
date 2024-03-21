import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest,loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Authprovider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authErrors, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  }

  useEffect(() => {
    if (authErrors.length > 0) {
      const timer = setTimeout(()=>{
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer)
    }
  }, [authErrors]);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        isAuthenticated,
        authErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}