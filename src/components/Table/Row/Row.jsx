import SaveButton from "../../Buttons/SaveButton/SaveButton";
import Button from "../../Buttons/Button";
import s from "../Table.module.scss";
import { useState } from "react";

export default function Row(props) {
  const {
    data: { id, english, transcription, russian, tags, tags_json },
    onEditClick,
    selectedId,
    onSaveClick,
    onCancelClick,
    onDeleteClick,
  } = props;

  const [editedWord, setEditedWord] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
    tags: tags,
    tags_json: tags_json,
  });

  const [isError, setError] = useState(false);

  const onRowChange = (e) => {
    const regexLatin = /^[a-zA-z\s]+$/gm;
    const regexCyrillic = /^[а-яёА-ЯЁ\s]+$/gm;
    //checking for empty inputs and latin/cyrillic letters
    if (e.target.value.trim() === "") {
      setError(true);
      e.target.className = s.error;
    } else if (
      e.target.name === "english" &&
      !regexLatin.test(e.target.value)
    ) {
      setError(true);
      e.target.className = s.error;
    } else if (
      e.target.name === "russian" &&
      !regexCyrillic.test(e.target.value)
    ) {
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
            <Button
              id={null}
              isError={false}
              image="cancel"
              tooltip="Cancel"
              onClick={onCancelClick}
            />
          </th>
        </tr>
      ) : (
        <tr>
          <th>{english}</th>
          <th>{transcription}</th>
          <th>{russian}</th>
          <th>
            <Button
              id={id}
              isError={false}
              image="edit"
              tooltip="Edit"
              onClick={onEditClick}
            />
            <Button
              id={id}
              isError={false}
              image="delete"
              tooltip="Delete"
              onClick={onDeleteClick}
            />
          </th>
        </tr>
      )}
    </>
  );
}
