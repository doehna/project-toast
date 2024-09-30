import React from "react";
import useKeyDown from "../../hooks/useKeyDown";
import {VARIANT_OPTIONS} from "../../consts"

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastMessages, setToastMessages] = React.useState([]);

  const deleteAllToasts = React.useCallback(() => {
    setToastMessages([]);
  });

  useKeyDown("Escape", deleteAllToasts);

  const deleteToast = React.useCallback((id) => {
    setToastMessages((toastMessages) =>
      toastMessages.filter((item) => item.key !== id)
    );
  });

  const addNewToast = React.useCallback((message, setMessage, variant, setVariant, key = Math.random()) => {
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
    setToastMessages((toastMessages) => [
      ...toastMessages,
      { message: message, key: key, variant: variant },
    ]);
  });

  const addTimedToast = React.useCallback((message, setMessage, variant, setVariant, ) => {
    const key = Math.random();

    addNewToast(message, setMessage, variant, setVariant, key);

    setTimeout(() => {
      deleteToast(key);
    }, 10000);
  });

  const contextValues = {
    toastMessages,
    deleteToast,
    addTimedToast,
  };

  return (
    <ToastContext.Provider value={contextValues}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
