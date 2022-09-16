import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../../../context/ModalContext/ModalContext"
import { ModalOverlay } from "../styled-components/modalOverlay"

interface Props{
    children: JSX.Element
}

function Overlay({children}:Props) {

    const { modal } = useContext(ModalContext);
    const[modalIsOpen, setModalIsOpen]=useState(false);

    useEffect(()=>{
        setModalIsOpen(modal.modalIsActive)
        console.log(modal);
    }, [modal])

    return (
        <ModalOverlay  status={ modalIsOpen} >
            {children}
        </ModalOverlay>
    )
}
export default Overlay