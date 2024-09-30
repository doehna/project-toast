import React from "react";

function TextArea({
  id,
  styles,
  children,
  textAreaValue,
  setTextAreaValue,
  ...delegated
}) {
  
  return (
    <>
      <label
        htmlFor={id}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {children}
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          required
          id={id}
          className={styles.messageInput}
          value={textAreaValue}
          onChange={(event) => setTextAreaValue(event.target.value)}
          {...delegated}
        />
      </div>
    </>
  );
}

export default TextArea;
