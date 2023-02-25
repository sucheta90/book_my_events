import React from "react";

// definign the context. Eg: creating an empty room for my appwide data
export const AppReloadContext = React.createContext({});

// Wrapping my context with a provder to centrally manage it. Not required but cleaner approach
export default function HandleAppReload(props) {
  return (
    <AppReloadContext.Provider value={props.reloader}>
      {props.children}
    </AppReloadContext.Provider>
  );
}
