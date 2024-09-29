import React from "react";

const useEscapeKey = (escapeKeyHandler) => {
  React.useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.code === "Escape") {
        escapeKeyHandler();
      }
    };
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });
};

export default useEscapeKey;
