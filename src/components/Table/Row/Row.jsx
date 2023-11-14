import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import CancelButton from "../../Buttons/CancelButton/CancelButton";
import s from "../Table.module.scss";
import { useState } from "react";

export default function Row(props) {
  const {
    data: { id, english, transcription, russian },
    onEditClick,
    selectedId,
    onSaveClick,
    onCancelClick,
  } = props;

  const [editedWord, setEditedWord] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  const [isError, setError] = useState(false);

  const onRowChange = (e) => {
    if (e.target.value.trim() === "") {
      setError(true);
      e.target.className = s.error;
    } else {
      setError(false);
      e.target.className = "";
    }
    editedWord[e.target.name] = e.target.value.trim();
    setEditedWord(editedWord);
    localStorage.setItem("editedWord", JSON.stringify(editedWord));
  };

  return (
    <>
      {selectedId === id ? (
        <tr className={s.editedRow}>
          <th>
            <input
              defaultValue={english}
              onChange={onRowChange}
              name="english"
            ></input>
          </th>
          <th>
            <input
              defaultValue={transcription}
              onChange={onRowChange}
              name="transcription"
            ></input>
          </th>
          <th>
            <input
              defaultValue={russian}
              onChange={onRowChange}
              name="russian"
            ></input>
          </th>
          <th>
            <SaveButton error={isError} onClick={onSaveClick} />
            <CancelButton onClick={onCancelClick} />
          </th>
        </tr>
      ) : (
        <tr>
          <th>{english}</th>
          <th>{transcription}</th>
          <th>{russian}</th>
          <th>
            <EditButton id={id} onClick={onEditClick} />
            <DeleteButton />
          </th>
        </tr>
      )}
    </>
  );
}
