import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../../../redux/states/Users/user";
import { AppStore } from "../../../redux/store";

export const UseAuth = () =>{
    const dispatch = useDispatch();
    const users = useSelector((store: AppStore)=> store.users)

    const auth = (matricula: string, password: string) =>{

        if( matricula === '' && password === '' ){
          console.log('error')
        }else{
          const user = users.filter(user => user.matricula === matricula && user.password === password)[0]
          dispatch(updateCurrentUser(user));
    
        }
    }

    return{
        auth
    }

}



