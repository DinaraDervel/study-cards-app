import image from "./404_PageNotFound.png";
import s from "./NoMatch.module.scss";

export default function NoMatch() {
  return (
    <div className={s.wrapper}>
      <img src={image} alt="404" />
      <p>Страница не найдена</p>
    </div>
  );
}
