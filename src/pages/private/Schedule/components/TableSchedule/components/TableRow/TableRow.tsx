import { IDay } from "../../../../models/IDay"

interface Props{
  hours: string,
  days: IDay[]
}

function TableRow({hours, days}: Props) {
  return (
    <tr>
        <th>00:00</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
  )
}
export default TableRow