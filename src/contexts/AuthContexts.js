import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  
  const USER_TOKEN_KEY = "user_token";
  const REGISTERATION_URL = "http://localhost:5000/auto-config-vue/us-central1/auth/register";
  const LOGIN_URL = "http://localhost:5000/auto-config-vue/us-central1/auth/login";
  
  let AUTH_ID, AUTH_TOKEN;


  const navigate = useNavigate();
  const [auth, setAuth] = useState(null)

  const userLogin = (email, password) => {
    axios.post(LOGIN_URL, {
      email: email,
      password: password
    }).then(response => {
      if (response.status) {
        setAuth(response.data)
      }
      navigate('/');
    }).catch(error => {
      console.log(error);
      navigate('/login');
    })
  }

  function userRegistration(data) {
    console.log(data)
  }

  useEffect(() => {
    if (auth) {

      AUTH_ID = auth.result.userid;
      AUTH_TOKEN = auth.result.token;

      localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(AUTH_TOKEN));
    } else {
      localStorage.removeItem(USER_TOKEN_KEY);
    }

  }, [auth]);

  return <userAuthContext.Provider value={{
    userRegistration,
    userLogin,
    REGISTERATION_URL,
    LOGIN_URL,
    USER_TOKEN_KEY,
    AUTH_TOKEN
  }}>{ children }</userAuthContext.Provider>
};

export function useUserAuthContext() {
  return useContext(userAuthContext)
}