import s from "./Button.module.scss";
import link from "../../images//sprite/sprite.svg";

export default function Button({ id, isError, image, tooltip, onClick }) {
  const link1 = link + `#${image}`;
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
          <use xlinkHref={link1}></use>
        </svg>
      </button>
      <span className={s.tooltiptext}>{tooltip}</span>
    </div>
  );
}
