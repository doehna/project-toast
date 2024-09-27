import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ listOfToasts, handleXButtonClick }) {
  return (
    <ol className={styles.wrapper}>
      {listOfToasts.map((toast) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast
              id={toast.key}
              key={toast.key}
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
