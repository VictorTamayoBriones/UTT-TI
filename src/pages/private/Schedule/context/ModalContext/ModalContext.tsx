import { createContext } from "react";
import { IDay } from "../../models/IDay";

interface Imodal{
    modal:{
        modalIsActive: boolean,
        modalDataForm: IDay,
        rowId: string,
        indexDay: number
    },
    handleModal: (status:boolean, data: IDay, rowId: string, indexDay: number)=>void,
    closeModal: ()=>void,
}

export const ModalContext = createContext( {} as Imodal );