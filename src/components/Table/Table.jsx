import Row from "./Row/Row";
import s from "./Table.module.scss";
import { useState } from "react";

export default function Table(props) {
  const [words, setWords] = useState(props.data);

  //set selected row
  const [selectedId, setSelectedId] = useState(null);

  const onEditClick = (id) => {
    setChangesSaved(false);
    setSelectedId(id);
  };

  const [changesSaved, setChangesSaved] = useState(false);

  const onSaveClick = () => {
    setChangesSaved(true);
  };
  const onCancelClick = () => {
    setChangesSaved(false);
    setSelectedId(null);
  };

  const onRowChange = (wordId, field, newValue, changesSaved) => {
    const savedWords = JSON.parse(localStorage.getItem("words"));
    const newWords = savedWords.map((el) => {
      el[field] = el.id === wordId ? newValue : el[field];
      return el;
    });
    if (changesSaved) {
      setWords(newWords);
      localStorage.setItem("words", JSON.stringify(newWords));
    }
  };

  let rowsWithWords = words.map((word) => (
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
