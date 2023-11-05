import Card from "./Card/Card";
import s from "./Carousel.module.scss";
import { useRef, useState, useEffect } from "react";

export default function Carousel(props) {
  const [idOfShownWord, setShownWord] = useState(props.isShown);

  const onLeftClick = () => {
    if (idOfShownWord < props.data.length - 1) setShownWord(idOfShownWord + 1);
  };
  const onRightClick = () => {
    if (idOfShownWord > 0) setShownWord(idOfShownWord - 1);
  };

  const countLearnedWords = useRef(0);
  const learnWord = () => {
    countLearnedWords.current = countLearnedWords.current + 1;
  };

  return (
    <div className={s.wrapper}>
      <div>Количество выученных слов: {countLearnedWords.current}</div>
      <div className={s.carousel}>
        {idOfShownWord === 0 && <button className={s.nav}></button>}
        {idOfShownWord > 0 && (
          <button className={s.nav} onClick={onRightClick}>
            <span>&#8592;</span>
          </button>
        )}
        <Card item={props.data[idOfShownWord]} learnWord={learnWord} />
        {idOfShownWord < props.data.length - 1 && (
          <button className={s.nav} onClick={onLeftClick}>
            <span>&#8594;</span>
          </button>
        )}
      </div>
    </div>
  );
}
