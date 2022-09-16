import { ContainerSection } from "../../../styled-components/Container"
import { BtnsActionsColumns } from "./components/bntsActionsColumns"
import { TableSchedule } from "./components/TableSchedule"
import { ScheduleProvider } from "./context/ScheduleProvider"

function Schedule() {
  return (
    <ContainerSection overflow="scroll" >
      <ScheduleProvider>
        <TableSchedule/>
        <BtnsActionsColumns/>
      </ScheduleProvider>
    </ContainerSection>
  )
}
export default Schedule