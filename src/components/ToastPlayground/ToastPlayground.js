import React from "react";
import RadioButton from "../RadioButton";
import TextArea from "../TextArea";
import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [radioButtonValue, setRadioButtonValue] = React.useState("notice");
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [toastMessages, setToastMessages] = React.useState([]);

  const handlePopToastButtonClick = (event) => {
    event.preventDefault();
    const newToastMessages = [
      ...toastMessages,
      { message: textAreaValue, key: Math.random() },
    ];
    setTextAreaValue("");
    setToastMessages(newToastMessages);
  };

  const handleXButtonClick = (id) => {
    const newToastMessages = toastMessages.filter((item) => item.key !== id);
    console.log(id);
    setToastMessages(newToastMessages);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastMessages.map((toastMessage) => {
        return (
          <Toast
            key={toastMessage.key}
            id={toastMessage.key}
            variant={radioButtonValue}
            handleXButtonClick={handleXButtonClick}
          >
            {toastMessage.message}
          </Toast>
        );
      })}
      <form onSubmit={handlePopToastButtonClick}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <TextArea
              id="message"
              styles={styles}
              textAreaValue={textAreaValue}
              setTextAreaValue={setTextAreaValue}
            >
              Message
            </TextArea>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variantOption, index) => {
                return (
                  <RadioButton
                    key={index}
                    id={`variant-${variantOption}`}
                    name="variant"
                    value={variantOption}
                    checked={radioButtonValue === variantOption}
                    onChange={(event) => {
                      setRadioButtonValue(event.target.value);
                    }}
                  >
                    {variantOption}
                  </RadioButton>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
