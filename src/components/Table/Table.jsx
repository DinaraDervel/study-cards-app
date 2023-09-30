import Row from "./Row/Row";
import s from "./Table.module.scss";
import { useState } from "react";

export default function Table(props) {
  const [selectedId, setSelectedId] = useState(null);

  const onEditClick = (id) => {
    setSelectedId(id);
  };

  const onRowChange = (wordId, field, newValue, changesSaved) => {
    const newWords = props.data.map((el) => {
      el[field] = el.id === wordId ? newValue : el[field];
      return el;
    });
    if (changesSaved) props.setWords(newWords);
    else props.setWords(props.data);
  };

  const [changesSaved, setChangesSaved] = useState(false);
  const onSaveClick = () => {
    setChangesSaved(true);
  };
  const onCancelClick = () => {
    setChangesSaved(false);
    setSelectedId(null);
  };

  let rowsWithWords = props.data.map((word) => (
    <Row
      data={word}
      key={word.id}
      onEditClick={onEditClick}
      onRowChange={onRowChange}
      selectedId={selectedId}
      changesSaved={changesSaved}
      onSaveClick={onSaveClick}
      onCancelClick={onCancelClick}
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
