import { DataContext } from "../../data-context";
import { useContext } from "react";
import Card from "./Card/Card";
import s from "./Carousel.module.scss";
import React, { useState } from "react";

const Carousel = () => {
  const { data } = useContext(DataContext);

  const [idOfShownWord, setShownWord] = useState(0);
  const onLeftClick = () => {
    if (idOfShownWord < data.length - 1) setShownWord(idOfShownWord + 1);
  };
  const onRightClick = () => {
    if (idOfShownWord > 0) setShownWord(idOfShownWord - 1);
  };

  const [countLearnedWords, setCount] = useState(0);
  const learnWord = () => {
    setCount(countLearnedWords + 1);
  };

  return (
    <div className={s.wrapper}>
      <div>Количество выученных слов: {countLearnedWords}</div>
      <div className={s.carousel}>
        {idOfShownWord === 0 && (
          <button className={s.nav + " " + s.navHidden}></button>
        )}
        {idOfShownWord > 0 && (
          <button className={s.nav} onClick={onRightClick}>
            <span>&#8592;</span>
          </button>
        )}
        <Card item={data[idOfShownWord]} learnWord={learnWord} />
        {idOfShownWord < data.length - 1 && (
          <button className={s.nav} onClick={onLeftClick}>
            <span>&#8594;</span>
          </button>
        )}
        {idOfShownWord === data.length - 1 && (
          <button className={s.nav + " " + s.navHidden}></button>
        )}
      </div>
    </div>
  );
};

export default React.memo(Carousel);
