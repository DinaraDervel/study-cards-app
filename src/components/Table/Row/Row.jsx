import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import SaveButton from "../../Buttons/SaveButton/SaveButton";
import CancelButton from "../../Buttons/CancelButton/CancelButton";
import s from "../Table.module.scss";

export default function Row(props) {
  const {
    data: { id, english, transcription, russian },
  } = props;
  return (
    <>
      {props.selectedId === id ? (
        <tr className={s.editedRow}>
          <th>
            <input value={english}></input>
          </th>
          <th>
            <input value={transcription}></input>
          </th>
          <th>
            <input value={russian}></input>
          </th>
          <th>
            <SaveButton />
            <CancelButton />
          </th>
        </tr>
      ) : (
        <tr>
          <th>{english}</th>
          <th>{transcription}</th>
          <th>{russian}</th>
          <th>
            <EditButton id={id} onClick={props.onClick} />
            <DeleteButton />
          </th>
        </tr>
      )}
    </>
  );
}
