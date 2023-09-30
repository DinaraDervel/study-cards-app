import s from "./SaveButton.module.scss";

export default function SaveButton(props) {
  return (
    <button className={s.button} onClick={() => props.onClick()}>
      Сохранить
    </button>
  );
}
