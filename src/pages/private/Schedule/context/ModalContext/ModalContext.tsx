import { createContext } from "react";
import { IDay } from "../../models/IDay";

interface Imodal{
    modal:{
        modalIsActive: boolean,
        modalDataForm: IDay
    },
    handleModal: (status:boolean, data: IDay, rowId: string)=>void,
    closeModal: ()=>void
}

export const ModalContext = createContext( {} as Imodal );