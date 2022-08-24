import { createContext } from "react";
import React, { useState } from "react";
export const Context = createContext();

function ContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <Context.Provider value={[posts, setPosts]}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
