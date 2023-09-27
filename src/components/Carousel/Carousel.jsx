import Card from "./Card/Card";
import data from "../../data/data.json";
import s from "./Carousel.module.scss";

export default function Carousel() {
  return (
    <div className={s.carousel}>
      <button className={s.nav}>
        <span>&#8592;</span>
      </button>
      <Card item={data[0]} />
      <button className={s.nav}>
        <span>&#8594;</span>
      </button>
    </div>
  );
}
