import React from "react";

export const Context = React.createContext({});

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.sessionStorage.getItem("token");
    }
    
  });
  const value = {
    isAuth,
    activeAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem("token", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
