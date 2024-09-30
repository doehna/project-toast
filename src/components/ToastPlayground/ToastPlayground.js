import React from "react";
import RadioButton from "../RadioButton";
import TextArea from "../TextArea";
import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";
import {VARIANT_OPTIONS} from '../../consts'
import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const {
    toastMessages,
    deleteToast,
    addTimedToast
  } = React.useContext(ToastContext);

  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [radioButtonValue, setRadioButtonValue] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const handlePopToastButtonClick = (event) => {
    event.preventDefault();
    addTimedToast(textAreaValue, setTextAreaValue, radioButtonValue, setRadioButtonValue);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={`toast.png`} />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        listOfToasts={toastMessages}
        handleXButtonClick={deleteToast}
      ></ToastShelf>
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
