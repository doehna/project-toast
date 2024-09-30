import React from "react";
import { X } from "react-feather";
import { ICONS_BY_VARIANT } from "../../consts";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";

function Toast({ variant, handleXButtonClick, id, children }) {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => handleXButtonClick(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
