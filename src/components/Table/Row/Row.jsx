import EditButton from "../../Buttons/EditButton/EditButton";
import SaveButton from "../../Buttons/SaveButton/SaveButton";

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
        <SaveButton />
      </th>
    </tr>
  );
}
