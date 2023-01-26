import React, { useState } from "react";

export default function useInputValidation(isValidValue) {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  function handleInputValue(e) {
    setInputValue(e.target.value);
    setIsTouched(true);
  }
  function handleIftouched(e) {
    setIsTouched(true);
  }
  const isError = !isValidValue(inputValue) && isTouched;

  return {
    inputValue,
    handleInputValue,
    handleIftouched,
    isError,
  };
}
