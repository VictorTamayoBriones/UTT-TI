import { IDay } from "../../../../models/IDay"
import { TableItem } from "../TableItem"

interface Props{
  id: string,
  hours: string,
  days: IDay[]
}

function TableRow({id, hours, days}: Props) {
  return (
    <tr>
      <td>{hours}</td>
      { days.map( (day, i) => <TableItem key={`colum${id}-day-${i}`} data={day} rowId={id}/>) }
    </tr>
  )
}
export default TableRow