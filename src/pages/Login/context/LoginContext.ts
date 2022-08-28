import React, { createContext } from "react";
import { IloginData } from "../../../models";

interface LoginState{
    loginData: IloginData,
    handleSubmit: (e: React.FormEvent)=>void,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const LoginContext = createContext<LoginState>({} as LoginState );