import Row from "./Row/Row";
import s from "./Table.module.scss";

export default function Table(props) {
  let rowsWithWords = props.data.map((word) => (
    <Row data={word} key={word.id} />
  ));
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>СЛОВО</th>
            <th>ТРАНСКРИПЦИЯ</th>
            <th>ПЕРЕВОД</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rowsWithWords}</tbody>
      </table>
    </div>
  );
}
