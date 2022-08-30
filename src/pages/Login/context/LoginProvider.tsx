import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IloginData, PrivateRoutes } from "../../../models";
import { UseAuth } from "../Hooks/useAuth";
import { LoginContext } from "./LoginContext"

interface Props{
    children: JSX.Element
}

export const LoginProvider = ({children}:Props) =>{

    const { auth } = UseAuth();
    
    const navigate = useNavigate();
    const [loginData, setLoginData]=useState<IloginData>({matricula: '',password:''});
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
      });
    }
    
    const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();    
      auth(loginData.matricula, loginData.password );
      navigate(`/${PrivateRoutes.PRIVATE}`);
    }

    return(
        <LoginContext.Provider value={{ loginData, handleChange, handleSubmit }} >
            { children }
        </LoginContext.Provider>
    )
}