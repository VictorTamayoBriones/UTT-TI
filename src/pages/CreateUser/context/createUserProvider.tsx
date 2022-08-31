import React, { useState } from "react"
import { useAlert } from "../../../components/Alert/hooks/useAlert";
import { ICreateUserFormData } from "../models/formData";
import { CreateUserContext } from "./createUserContex"

interface Props{
    children: JSX.Element
}

export const CreateUserProvider = ({children}:Props) =>{

    const { handleAlert } = useAlert();

    const INITIAL_STATE= {
        matricula:'',
        email: '',
        password: ''
    }

    const[createUserFormData, setCreateUserFormData]=useState<ICreateUserFormData>(INITIAL_STATE);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCreateUserFormData({...createUserFormData, [e.target.name]: e.target.value})
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        
        if( createUserFormData.email === '' ){
            handleAlert('visible', 'error', 'Email Requerido')
        }

        if( createUserFormData.matricula === '' ){
            handleAlert('visible', 'error', 'Matricula Requerido')
        }

        if( createUserFormData.password === '' ){
            handleAlert('visible', 'error', 'Password Requerido')
        }

        if( createUserFormData.email === '' && createUserFormData.matricula === '' && createUserFormData.password === '' ){
            handleAlert('visible', 'error', 'Datos Requeridos')
        }
    }

    return(
        <CreateUserContext.Provider value={{createUserFormData, handleChange, handleSubmit}} >
            {children}
        </CreateUserContext.Provider>
    )
}