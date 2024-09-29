import React from 'react';
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [radioButtonValue, setRadioButtonValue] = React.useState("notice");
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [toastMessages, setToastMessages] = React.useState([]);

  const deleteAllToasts = () => {
    setToastMessages([]);
  }

  useEscapeKey(deleteAllToasts);

  const deleteToast = (id) => {
    const newToastMessages = toastMessages.filter((item) => item.key !== id);
    setToastMessages(newToastMessages);
  }

  const addNewToast = () => {
    const newToastMessages = [
      ...toastMessages,
      { message: textAreaValue, key: Math.random(), variant: radioButtonValue },
    ];
    setTextAreaValue("");
    setRadioButtonValue("notice");
    setToastMessages(newToastMessages);
  }

  const contextValues = {
    radioButtonValue,
    setRadioButtonValue,
    textAreaValue,
    setTextAreaValue,
    toastMessages,
    setToastMessages,
    deleteToast,
    addNewToast
  }
  
  return (<ToastContext.Provider value={contextValues}>{children}</ToastContext.Provider>);
}

export default ToastProvider;
