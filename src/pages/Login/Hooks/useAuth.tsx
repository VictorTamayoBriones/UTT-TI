import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../../components/Alert/hooks/useAlert";
import { PrivateRoutes } from "../../../models";
import { updateCurrentUser } from "../../../redux/states/Users/user";
import { AppStore } from "../../../redux/store";

export const UseAuth = () =>{

  
  const users = useSelector((store: AppStore)=> store.users)
  const dispatch = useDispatch();
  const { handleAlert }=useAlert();
  const navigate = useNavigate();
  
  const auth = (matricula: string, password: string) =>{

    if( matricula === '' && password === '' ){

      handleAlert('visible', 'error', 'Datos Requeridos')

    }else{

      const user = users.filter(user => user.matricula === matricula && user.password === password)[0]
      
      if( user === undefined ){
        handleAlert('visible', 'error', 'Usuario Invalido')
      }

      if( user.email ){
          dispatch(updateCurrentUser(user));
          navigate(`/${PrivateRoutes.PRIVATE}`);
      }

    }

  }

  return{
    auth
  }

}



