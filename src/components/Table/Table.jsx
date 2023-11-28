import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import NoMatch from "../NoMatch/NoMatch";
import Row from "./Row/Row";
import s from "./Table.module.scss";
import AddButton from "../Buttons/AddButton/AddButton";

const Table = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
      wordsStore.load();
    }, []);

    if (wordsStore.error) {
      if (wordsStore.error.message === "404") return <NoMatch />;
      else return <p>{wordsStore.error.message}</p>;
    }

    // if (wordsStore.isLoading) {
    //   return <p>Loading ...</p>;
    // }

    const onEditClick = (id) => {
      setSelectedId(id);
      localStorage.setItem("editedWord", JSON.stringify({}));
    };

    const onSaveClick = () => {
      const editedWord = localStorage.getItem("editedWord")
        ? JSON.parse(localStorage.getItem("editedWord"))
        : {};
      if (
        editedWord.english === "" ||
        editedWord.transcription === "" ||
        editedWord.russian === ""
      ) {
        alert("Поле не может быть пустым!");
        setSelectedId(null);
        localStorage.setItem("editedWord", JSON.stringify({}));
        return;
      }
      const newWords = wordsStore.words.map((el) => {
        el = el.id === editedWord.id ? editedWord : el;
        return el;
      });
      wordsStore.update(newWords, editedWord);
      setTimeout(() => setSelectedId(null), 2000);
    };

    const onCancelClick = () => {
      setSelectedId(null);
      localStorage.setItem("editedWord", JSON.stringify({}));
    };

    const onDeleteClick = (id) => {
      wordsStore.deleteWord(id);
    };

    let rowsWithWords = wordsStore.words.map((word) => (
      <Row
        data={word}
        key={word.id}
        onEditClick={onEditClick}
        selectedId={selectedId}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        onDeleteClick={onDeleteClick}
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
              <th>
                <AddButton />
              </th>
            </tr>
          </thead>
          <tbody>{rowsWithWords}</tbody>
        </table>
      </div>
    );
  })
);
export default Table;
