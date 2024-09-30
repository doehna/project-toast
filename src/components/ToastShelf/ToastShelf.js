import React from "react";
import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const {
    toastMessages,
    deleteToast
  } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastMessages.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.key}>
            <Toast
              id={toast.key}
              variant={toast.variant}
              handleXButtonClick={deleteToast}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
