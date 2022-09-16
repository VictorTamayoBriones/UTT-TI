import { useContext } from "react"
import { ScheduleContext } from "../../context/SheduleContext/ScheduleContext"
import { ButtonsContainer } from "./styled-components"

function BtnsActionsColumns() {
  
  const { rows, addRow, deleteRow } = useContext(ScheduleContext);

  return (
    <ButtonsContainer>
      <button onClick={addRow} >+</button>
      { rows.length > 1 && <button onClick={deleteRow} >-</button>}
      
    </ButtonsContainer>
  )
}
export default BtnsActionsColumns