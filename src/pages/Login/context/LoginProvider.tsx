import { useState } from "react";
import { useAlert } from "../../../components/Alert/hooks/useAlert";
import { IloginData } from "../../../models";
import { UseAuth } from "../Hooks/useAuth";
import { LoginContext } from "./LoginContext"

interface Props{
  children: JSX.Element
}

export const LoginProvider = ({children}:Props) =>{
    
    const { auth } = UseAuth();
    const { handleAlert } = useAlert();
    const [loginData, setLoginData]=useState<IloginData>({matricula: '',password:''});
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();    

      if( loginData.matricula === '' ){
        handleAlert('visible', 'error', 'Matricula Requerida');
      }

      if( loginData.password === '' ){
        handleAlert('visible', 'error', 'Contraseña Requerida');
      }

      if( loginData.matricula === '' && loginData.password === '' ){
        handleAlert('visible', 'error', 'Datos Requeridos');
      }else{
        auth(loginData.matricula, loginData.password );
      }
    }

    return(
        <LoginContext.Provider value={{ loginData, handleChange, handleSubmit }} >
            { children }
        </LoginContext.Provider>
    )
}