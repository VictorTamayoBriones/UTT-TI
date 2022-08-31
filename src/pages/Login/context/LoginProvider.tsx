import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IloginData } from "../../../models";
import { clearAlert, showAlert } from "../../../redux/states/Alert/alert";
import { UseAuth } from "../Hooks/useAuth";
import { LoginContext } from "./LoginContext"

interface Props{
    children: JSX.Element
}

export const LoginProvider = ({children}:Props) =>{
    const dispatch = useDispatch();
    const { auth } = UseAuth();

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
        dispatch(showAlert({status:'visible', type:'error', message: 'Matricula Requerida'})) 
        setTimeout(()=>{
          dispatch(clearAlert(''));
        }, 4000)
      }

      if( loginData.password === '' ){
        
      }

      if( loginData.matricula === '' && loginData.password === '' ){
        
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