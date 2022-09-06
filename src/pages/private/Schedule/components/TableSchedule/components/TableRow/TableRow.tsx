import { IDay } from "../../../../models/IDay"

interface Props{
  hours: string,
  days: IDay[]
}

function TableRow({hours, days}: Props) {
  return (
    <tr>
      <td>00:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}
export default TableRow