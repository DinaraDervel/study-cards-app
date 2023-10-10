import Card from "./Card/Card";
import s from "./Carousel.module.scss";
import { useState } from "react";

export default function Carousel(props) {
  const [idOfShownWord, setShownWord] = useState(props.isShown);

  const onLeftClick = () => {
    if (idOfShownWord < props.data.length - 1) setShownWord(idOfShownWord + 1);
  };
  const onRightClick = () => {
    if (idOfShownWord > 0) setShownWord(idOfShownWord - 1);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.carousel}>
        <button className={s.nav} onClick={() => onRightClick()}>
          <span>&#8592;</span>
        </button>
        <Card item={props.data[idOfShownWord]} />
        <button className={s.nav} onClick={() => onLeftClick()}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}
