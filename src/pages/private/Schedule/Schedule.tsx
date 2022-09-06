import { ContainerSection } from "../../../styled-components/Container"
import { BtnsActionsColumns } from "./components/bntsActionsColumns"
import { TableSchedule } from "./components/TableSchedule"
import { ScheduleProvider } from "./context/ScheduleProvider"

function Schedule() {
  return (
    <ContainerSection>
      <ScheduleProvider>
        <TableSchedule/>
      </ScheduleProvider>
      <BtnsActionsColumns/>
    </ContainerSection>
  )
}
export default Schedule