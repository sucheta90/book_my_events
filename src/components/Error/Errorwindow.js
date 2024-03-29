import React from "react";
import { useContext } from "react";
import { AppReloadContext } from "../../context/appRelaod-context";

export default function Errorwindow(props) {
  const appReload = useContext(AppReloadContext);
  return (
    <div data-testid="error-component">
      {props.errorMessage}
      <button onClick={appReload}> Try Again</button>
    </div>
  );
}
