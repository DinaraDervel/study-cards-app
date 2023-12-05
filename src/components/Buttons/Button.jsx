import s from "./Button.module.scss";

export default function Button({ id, isError, image, tooltip, onClick }) {
  const link = "/sprite/sprite.svg#" + image;
  return (
    <div className={s.tooltip}>
      <button
        className={s.button}
        disabled={isError ? true : false}
        onClick={() => {
          onClick(id);
        }}
      >
        <svg className={s.icon}>
          <use xlinkHref={link}></use>
        </svg>
      </button>
      <span className={s.tooltiptext}>{tooltip}</span>
    </div>
  );
}
