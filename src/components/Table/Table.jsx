import Row from "./Row/Row";
import s from "./Table.module.scss";
import { useState } from "react";

export default function Table(props) {
  const [selectedId, setSelectedId] = useState(null);

  const onRowClick = (id) => {
    setSelectedId(id);
  };

  let rowsWithWords = props.data.map((word) => (
    <Row
      data={word}
      key={word.id}
      onClick={onRowClick}
      selectedId={selectedId}
    />
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
