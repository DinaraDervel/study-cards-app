import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import CancelButton from "../../Buttons/CancelButton/CancelButton";
import s from "../Table.module.scss";

export default function Row(props) {
  const {
    data: { id, english, transcription, russian },
    onEditClick,
    onRowChange,
    selectedId,
    changesSaved,
    onSaveClick,
    onCancelClick,
  } = props;

  return (
    <>
      {selectedId === id ? (
        <tr className={s.editedRow}>
          <th>
            <input
              defaultValue={english}
              onChange={(event) => {
                onRowChange(id, "english", event.target.value, changesSaved);
              }}
            ></input>
          </th>
          <th>
            <input
              defaultValue={transcription}
              onChange={(event) => {
                onRowChange(
                  id,
                  "transcription",
                  event.target.value,
                  changesSaved
                );
              }}
            ></input>
          </th>
          <th>
            <input
              defaultValue={russian}
              onChange={(event) => {
                onRowChange(id, "russian", event.target.value, changesSaved);
              }}
            ></input>
          </th>
          <th>
            <SaveButton onClick={onSaveClick} changesSaved={changesSaved} />
            <CancelButton onClick={onCancelClick} id={id} />
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
