import { useContext, useEffect, useState } from "react"
import { IDay } from "../../../../models/IDay"
import { TableItem } from "../TableItem"
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import "./style.css";
import { ScheduleContext } from "../../../../context/SheduleContext/ScheduleContext";

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
  const { updateTimeInRow } =useContext(ScheduleContext);

  const updateTimeInRowOfMain = () =>{
    updateTimeInRow(id, hoursPicker);
  }

  return (
    <tr>
      <td className="hours">
        <TimeRangePicker onBlur={updateTimeInRowOfMain} onChange={setHoursPicker} value={hoursPicker} />
      </td>
      { days.map( (day, i) => <TableItem key={`colum${id}-day-${i}`} data={day} rowId={id} indexDay={i}/>) }
    </tr>
  )
}
export default TableRow