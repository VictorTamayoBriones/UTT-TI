import React, { createContext } from "react";
import { ICreateUserFormData } from "../models/formData";

interface createUserForm{
    createUserFormData: ICreateUserFormData,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmit: (e:React.FormEvent)=>void
}

export const CreateUserContext = createContext<createUserForm>({} as createUserForm );