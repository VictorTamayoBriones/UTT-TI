import ButtonToClose from "./components/ButtonToClose"
import FormModal from "./components/FormModal"
import Overlay from "./components/Overlay"
import { ModalContainer } from "./styled-components/modalContainer"

function Modal() {
  return (
    <Overlay>
      <ModalContainer>
        <ButtonToClose/>
        <FormModal/>
      </ModalContainer>
    </Overlay>
  )
}
export default Modal