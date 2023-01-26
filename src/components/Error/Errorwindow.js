import React from "react";

export default function Errorwindow(props) {
  return (
    <div>
      {props.errorMessage}
      <button onClick={props.onClick}> Try Again</button>
    </div>
  );
}
