import s from "./Card.module.scss";

export default function Card(props) {
  const {
    item: { english, transcription, russian },
  } = props;

  return (
    <div className={s.card}>
      <p className={s.card__english}>{english}</p>
      <p className={s.card__transcription}>{transcription}</p>
      <p className={s.card__russian}>{russian}</p>
      {/* <CheckButton /> */}
    </div>
  );
}
