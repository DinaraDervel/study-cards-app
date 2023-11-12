import s from "./SaveButton.module.scss";
import { useState } from "react";

export default function SaveButton(props) {
  const [isClicked, setClicked] = useState(false);

  const onButtonClick = () => {
    setClicked(true);
  };
  return (
    <>
      {isClicked ? (
        <button className={s.button + " " + s.button_saved}>Сохранено</button>
      ) : (
        <button
          className={s.button}
          disabled={props.error ? true : false}
          onClick={() => {
            props.onClick();
            onButtonClick();
          }}
        >
          Сохранить
        </button>
      )}
    </>
  );
}
