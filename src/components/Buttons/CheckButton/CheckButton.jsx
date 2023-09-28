import s from "./CheckButton.module.scss";

export default function CheckButton(props) {
  return (
    <button className={s.button} onClick={() => props.onClick()}>
      Проверить
    </button>
  );
}
