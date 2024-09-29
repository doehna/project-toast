import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ listOfToasts, handleXButtonClick }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {listOfToasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.key}>
            <Toast
              id={toast.key}
              variant={toast.variant}
              handleXButtonClick={handleXButtonClick}
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
