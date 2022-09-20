import { useState } from "react"
import { IDay } from "../../../../models/IDay"
import { TableItem } from "../TableItem"
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import "./style.css";

interface Props{
  id: string,
  hours: {
    start: string,
    end: string
  },
  days: IDay[]
}

function TableRow({id, hours, days}: Props) {

  const [hoursPicker, setHoursPicker]=useState([hours.start, hours.end]);

  return (
    <tr>
      <td className="hours" >
        <TimeRangePicker onChange={setHoursPicker} value={hoursPicker} />
      </td>
      { days.map( (day, i) => <TableItem key={`colum${id}-day-${i}`} data={day} rowId={id} indexDay={i}/>) }
    </tr>
  )
}
export default TableRow