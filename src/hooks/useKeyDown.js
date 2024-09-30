import React from "react";

const useKeyDown = (key, keyHandler) => {
  React.useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.code === key) {
        keyHandler();
      }
    };
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  },[keyHandler]);
};

export default useKeyDown;
