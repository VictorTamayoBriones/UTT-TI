import { useContext } from "react"
import { ScheduleContext } from "../../../../context/ScheduleContext"
import { TableRow } from "../TableRow"

function TableBody() {

  const { rows } = useContext(ScheduleContext);
  
  return (
    <tbody>
      {
        rows.map( (row, i) => <TableRow key={`row-${i}`} id={row.id} hours={ row.hours } days={ row.days } />)
      }
    </tbody>
  )
}
export default TableBody