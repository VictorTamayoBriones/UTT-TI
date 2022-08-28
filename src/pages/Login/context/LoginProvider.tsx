import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IloginData, PrivateRoutes } from "../../../models";
import { updateCurrentUser } from "../../../redux/states/Users/user";
import { AppStore } from "../../../redux/store";
import { LoginContext } from "./LoginContext"

interface Props{
    children: JSX.Element
}

export const LoginProvider = ({children}:Props) =>{

    const dispatch = useDispatch();
    const users = useSelector((store: AppStore)=> store.users)
    const navigate = useNavigate();

    const [loginData, setLoginData]=useState<IloginData>({matricula: '',password:''});

    const auth = (matricula: string, password: string) =>{
      if( matricula === '' && password === '' ){
        console.log('error')
      }else{
        const user = users.filter(user => user.matricula === matricula && user.password === password)[0]
        dispatch(updateCurrentUser(user));

      }
    }

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