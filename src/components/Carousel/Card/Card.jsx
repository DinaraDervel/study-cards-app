import { useEffect, useState } from "react";
import CheckButton from "../../Buttons/CheckButton/CheckButton";
import s from "./Card.module.scss";

export default function Card(props) {
  const {
    item: { english, transcription, russian },
  } = props;

  const [isClicked, setClicked] = useState(false);

  const onCheckButtonClick = () => {
    setClicked(true);
  };

  return (
    <div className={s.card}>
      <p className={s.card__english}>{english}</p>
      <p className={s.card__transcription}>{transcription}</p>
      {isClicked ? (
        <p className={s.card__russian}>{russian}</p>
      ) : (
        <CheckButton onClick={onCheckButtonClick} />
      )}
    </div>
  );
}
