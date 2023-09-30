import s from "./CancelButton.module.scss";

export default function SaveButton(props) {
  return (
    <button className={s.button} onClick={() => props.onClick()}>
      Отменить
    </button>
  );
}
