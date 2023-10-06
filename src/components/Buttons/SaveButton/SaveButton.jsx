import s from "./SaveButton.module.scss";

export default function SaveButton(props) {
  return (
    <>
      {props.changesSaved ? (
        <button className={s.button + " " + s.button_saved}>Сохранено</button>
      ) : (
        <button className={s.button} onClick={() => props.onClick()}>
          Сохранить
        </button>
      )}
    </>
  );
}
