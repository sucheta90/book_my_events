import React from "react";

// stage 1: create the context
export const PriceContext = React.createContext({});

export default function PriceContextProvider(props) {
  return (
    <PriceContext.Provider value={props.price}>
      {props.children}
    </PriceContext.Provider>
  );
}
