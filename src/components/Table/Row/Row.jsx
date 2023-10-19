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

  const onRowChange = (fieldName, newValue) => {
    editedWord[fieldName] = newValue;
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
              onChange={(event) => {
                onRowChange("english", event.target.value);
              }}
            ></input>
          </th>
          <th>
            <input
              defaultValue={transcription}
              onChange={(event) => {
                onRowChange("transcription", event.target.value);
              }}
            ></input>
          </th>
          <th>
            <input
              defaultValue={russian}
              onChange={(event) => {
                onRowChange("russian", event.target.value);
              }}
            ></input>
          </th>
          <th>
            <SaveButton onClick={onSaveClick} />
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
