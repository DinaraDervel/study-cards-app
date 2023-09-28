import Card from "./Card/Card";
import s from "./Carousel.module.scss";

export default function Carousel(props) {
  return (
    <div className={s.wrapper}>
      <div className={s.carousel}>
        <button className={s.nav}>
          <span>&#8592;</span>
        </button>
        <Card item={props.data} />
        <button className={s.nav}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}
