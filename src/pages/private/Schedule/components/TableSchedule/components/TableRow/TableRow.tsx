import { IDay } from "../../../../models/IDay"
import { TableItem } from "../TableItem"

interface Props{
  id: string,
  hours: {
    start: string,
    end: string
  },
  days: IDay[]
}

function TableRow({id, hours, days}: Props) {
  return (
    <tr>
      <td className="hours" >
        <p>{hours.start}</p>
        <p>{hours.end}</p>
      </td>
      { days.map( (day, i) => <TableItem key={`colum${id}-day-${i}`} data={day} rowId={id} indexDay={i}/>) }
    </tr>
  )
}
export default TableRow