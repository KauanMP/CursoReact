// 1 - Criar context
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - Criar provider
// eslint-disable-next-line react/prop-types
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

