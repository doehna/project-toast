import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [radioButtonValue, setRadioButtonValue] = React.useState("notice");
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [toastMessages, setToastMessages] = React.useState([]);

  const deleteAllToasts = React.useCallback(() => {
    setToastMessages([]);
  });

  useEscapeKey(deleteAllToasts);

  const deleteToast = React.useCallback((id) => {
    setToastMessages((toastMessages) =>
      toastMessages.filter((item) => item.key !== id)
    );
  });

  const addNewToast = React.useCallback((key = Math.random()) => {
    setTextAreaValue("");
    setRadioButtonValue("notice");
    setToastMessages((toastMessages) => [
      ...toastMessages,
      { message: textAreaValue, key: key, variant: radioButtonValue },
    ]);
  });

  const addTimedToast = React.useCallback(() => {
    const key = Math.random();

    addNewToast(key);

    setTimeout(() => {
      deleteToast(key);
    }, 10000);
  });

  const contextValues = {
    radioButtonValue,
    setRadioButtonValue,
    textAreaValue,
    setTextAreaValue,
    toastMessages,
    setToastMessages,
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
