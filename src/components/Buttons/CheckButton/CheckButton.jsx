import s from "./CheckButton.module.scss";
import { useEffect, useRef } from "react";

export default function CheckButton(props) {
  const buttonRef = useRef();
  useEffect(() => {
    buttonRef.current.focus();
  }, [props]);
  return (
    <button className={s.button} onClick={props.onClick} ref={buttonRef}>
      Проверить
    </button>
  );
}
