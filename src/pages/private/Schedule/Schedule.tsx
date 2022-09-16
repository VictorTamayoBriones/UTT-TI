import { ContainerSection } from "../../../styled-components/Container"
import { BtnsActionsColumns } from "./components/bntsActionsColumns"
import { Modal } from "./components/Modal"
import { TableSchedule } from "./components/TableSchedule"
import { ModalProvider } from "./context/ModalContext/ModalProvider"
import { ScheduleProvider } from "./context/SheduleContext/ScheduleProvider"

function Schedule() {
  return (
    <ScheduleProvider>
      <ContainerSection overflow="scroll" >
        <ModalProvider>
          <TableSchedule/>
          <BtnsActionsColumns/>
          <Modal/>
        </ModalProvider>
      </ContainerSection>
    </ScheduleProvider>
  )
}
export default Schedule