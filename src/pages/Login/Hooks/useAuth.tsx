import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../models";
import { updateCurrentUser } from "../../../redux/states/Users/user";
import { AppStore } from "../../../redux/store";

export const UseAuth = () =>{

  const dispatch = useDispatch();
  const users = useSelector((store: AppStore)=> store.users)
  
  const navigate = useNavigate();
  
  const auth = (matricula: string, password: string) =>{

    if( matricula === '' && password === '' ){

      console.log('error')

    }else{

      const user = users.filter(user => user.matricula === matricula && user.password === password)[0]
      
      if( user === undefined ){
        // handleAlert('visible', 'error', 'Usuario Invalido')
      }

      // if( user.email ){
      //   dispatch(updateCurrentUser(user));
      //   navigate(`/${PrivateRoutes.PRIVATE}`);
      // }

    }

  }

  return{
    auth
  }

}



