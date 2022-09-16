import { useContext } from "react"
import { ModalContext } from "../../../context/ModalContext/ModalContext"
import { BtnToClose } from "../styled-components/btnToClose"

function ButtonToClose() {

    const { closeModal } = useContext(ModalContext);

    return (
        <BtnToClose onClick={ closeModal } />
    )
}
export default ButtonToClose