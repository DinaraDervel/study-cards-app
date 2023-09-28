import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
// import SaveButton from "../../Buttons/SaveButton/SaveButton";

export default function Row(props) {
  const {
    data: { english, transcription, russian },
  } = props;
  return (
    <tr>
      <th>{english}</th>
      <th>{transcription}</th>
      <th>{russian}</th>
      <th>
        <EditButton />
        <DeleteButton />
        {/* <SaveButton /> */}
      </th>
    </tr>
  );
}
