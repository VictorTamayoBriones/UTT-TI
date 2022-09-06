import { IDay } from "../../../../models/IDay"
import { TableItem } from "../TableItem"

interface Props{
  id: number,
  hours: string,
  days: IDay[]
}

function TableRow({id, hours, days}: Props) {
  return (
    <tr>
      <td>{hours}</td>
      { days.map( (day, i) => <TableItem key={`colum${id}-day-${i}`} data={day} />) }
    </tr>
  )
}
export default TableRow