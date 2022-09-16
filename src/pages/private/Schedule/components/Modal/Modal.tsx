import ButtonToClose from "./components/ButtonToClose"
import Overlay from "./components/Overlay"
import { ModalContainer } from "./styled-components/modalContainer"

function Modal() {
  return (
    <Overlay>
      <ModalContainer>
        <ButtonToClose/>
      </ModalContainer>
    </Overlay>
  )
}
export default Modal