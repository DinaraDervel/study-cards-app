import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import NoMatch from "../NoMatch/NoMatch";
import Button from "../Buttons/Button";
import Row from "./Row/Row";
import s from "./Table.module.scss";
import "../../App.scss";

const Table = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [isAddButtonClicked, setAddButtonClicked] = useState(false);
    const [newWord, setNewWord] = useState({
      id: "",
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "",
    });

    useEffect(() => {
      if (!wordsStore.isLoading) wordsStore.load();
      // eslint-disable-next-line
    }, []);

    useEffect(() => {
      wordsStore.load();
      // eslint-disable-next-line
    }, [wordsStore.error]);

    if (wordsStore.error) {
      if (wordsStore.error.message === "404") return <NoMatch />;
      else return <p>{wordsStore.error.message}</p>;
    }

    if (wordsStore.isLoading) {
      return (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      );
    }

    const onEditClick = (id) => {
      setSelectedId(id);
      localStorage.setItem("editedWord", JSON.stringify({}));
    };

    const onSaveClick = () => {
      const editedWord = localStorage.getItem("editedWord")
        ? JSON.parse(localStorage.getItem("editedWord"))
        : {};
      if (
        !editedWord.english ||
        !editedWord.transcription ||
        !editedWord.russian
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
      if (isAddButtonClicked) {
        setNewWord(editedWord);
        wordsStore.add(editedWord);
        setAddButtonClicked(false);
        localStorage.setItem("editedWord", JSON.stringify({}));
      } else wordsStore.update(newWords, editedWord);
      setTimeout(() => setSelectedId(null), 2000);
    };

    const onCancelClick = (id = null) => {
      setSelectedId(id);
      setNewWord({});
      setAddButtonClicked(false);
      localStorage.setItem("editedWord", JSON.stringify({}));
    };

    const onDeleteClick = (id) => {
      setSelectedId(null);
      setNewWord({});
      setAddButtonClicked(false);
      wordsStore.delete(id);
    };

    const onAddClick = (id = null) => {
      setAddButtonClicked(true);
      setNewWord({ id: "", tags: "", tags_json: "" });
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
              <th>WORD</th>
              <th>TRANSCRIPTION</th>
              <th>TRANSLATION</th>
              <th>
                <Button
                  id={null}
                  isError={false}
                  image="add"
                  tooltip="Add"
                  onClick={onAddClick}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {isAddButtonClicked && (
              <Row
                data={newWord}
                key={newWord.id}
                onEditClick={onEditClick}
                selectedId={selectedId}
                onSaveClick={onSaveClick}
                onCancelClick={onCancelClick}
                onDeleteClick={onDeleteClick}
              />
            )}
            {rowsWithWords}
          </tbody>
        </table>
      </div>
    );
  })
);
export default Table;
