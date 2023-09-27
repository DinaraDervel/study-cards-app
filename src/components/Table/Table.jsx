import Row from "./Row/Row";

export default function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>СЛОВО</th>
          <th>ТРАНСКРИПЦИЯ</th>
          <th>ПЕРЕВОД</th>
        </tr>
      </thead>
      <tbody>
        <Row data={props.data} />
      </tbody>
    </table>
  );
}
