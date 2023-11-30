import React, { useEffect, useState } from "react";
import { observer, inject } from "mobx-react";
import Card from "./Card/Card";
import NoMatch from "../NoMatch/NoMatch";
import s from "./Carousel.module.scss";

const Carousel = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [idOfShownWord, setShownWord] = useState(0);
    const [countLearnedWords, setCount] = useState(0);

    useEffect(() => {
      if (!wordsStore.isLoading) wordsStore.load();
    }, []);

    if (wordsStore.error) {
      if (wordsStore.error.message === "404") return <NoMatch />;
      else return <p>{wordsStore.error.message}</p>;
    }

    if (wordsStore.isLoading) {
      return <p>Loading ...</p>;
    }

    const onLeftClick = () => {
      if (idOfShownWord < wordsStore.words.length - 1)
        setShownWord(idOfShownWord + 1);
    };
    const onRightClick = () => {
      if (idOfShownWord > 0) setShownWord(idOfShownWord - 1);
    };

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
          <Card item={wordsStore.words[idOfShownWord]} learnWord={learnWord} />
          {idOfShownWord < wordsStore.words.length - 1 && (
            <button className={s.nav} onClick={onLeftClick}>
              <span>&#8594;</span>
            </button>
          )}
          {idOfShownWord === wordsStore.words.length - 1 && (
            <button className={s.nav + " " + s.navHidden}></button>
          )}
        </div>
      </div>
    );
  })
);

export default React.memo(Carousel);
