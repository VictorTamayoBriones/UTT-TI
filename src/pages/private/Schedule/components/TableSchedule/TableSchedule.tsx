import { TableBody } from "./components/TableBody"
import { TableHeader } from "./components/TableHeader"
import { TableMain } from "./styled-components/TableMain"

function TableSchedule() {
  return (
    <TableMain>
      <table>
        <TableHeader/>
        <TableBody/>
      </table>
    </TableMain>
  )
}
export default TableSchedule