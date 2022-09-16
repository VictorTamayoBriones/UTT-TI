import { useState } from "react"
import { IDay } from "../../models/IDay"
import { ModalContext } from "./ModalContext"

interface Props{
    children: JSX.Element[]
}

export const ModalProvider = ({children}:Props) =>{

    const[modal,setModal]=useState({
        modalIsActive: false,
        modalDataForm: {
            teacher:'',
            subject: '',
            classroom: ''
        },
        rowId: ''
    })

    const handleModal = (status:boolean, data:IDay, rowId:string)=> {
        setModal({
            modalIsActive: status,
            modalDataForm: data,
            rowId: rowId
        })
    }

    const closeModal = () =>{
        setModal({
            modalIsActive: false,
            modalDataForm: {
                teacher:'',
                subject: '',
                classroom: ''
            },
            rowId: ''
        })
    }

    return(
        <ModalContext.Provider value={{modal, handleModal, closeModal}} >
            {children}
        </ModalContext.Provider>
    )
}