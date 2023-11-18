import { DataContext } from "../../data-context";
import Row from "./Row/Row";
import s from "./Table.module.scss";
import { useContext, useState } from "react";

export default function Table() {
  const { data, updateData } = useContext(DataContext);
  const [selectedId, setSelectedId] = useState(null);

  const onEditClick = (id) => {
    setSelectedId(id);
    localStorage.setItem("editedWord", JSON.stringify({}));
  };
  const onSaveClick = () => {
    const editedWord = localStorage.getItem("editedWord")
      ? JSON.parse(localStorage.getItem("editedWord"))
      : {};
    if (Object.values(editedWord).indexOf("") > -1) {
      alert("Поле не может быть пустым!");
      setSelectedId(null);
      localStorage.setItem("editedWord", JSON.stringify({}));
      return;
    }
    const newWords = data.map((el) => {
      el = el.id === editedWord.id ? editedWord : el;
      return el;
    });
    updateData(newWords);
    localStorage.setItem("words", JSON.stringify(newWords));
    setTimeout(() => setSelectedId(null), 2000);
  };

  const onCancelClick = () => {
    setSelectedId(null);
    localStorage.setItem("editedWord", JSON.stringify({}));
  };

  let rowsWithWords = data.map((word) => (
    <Row
      data={word}
      key={word.id}
      onEditClick={onEditClick}
      selectedId={selectedId}
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
