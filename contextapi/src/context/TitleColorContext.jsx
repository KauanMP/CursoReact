import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  
};

// eslint-disable-next-line react/prop-types
export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("titulo: ", state);

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};
